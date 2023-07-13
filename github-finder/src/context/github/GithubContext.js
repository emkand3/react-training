import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

const URL = process.env.REACT_APP_GITHUB_URL
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initalState = {
        users: [],
        loading: true
    }

    const [state, dispatch] = useReducer(githubReducer, initalState)

    const fetchUsers = async () => {
        const response = await fetch(`${URL}/users`, {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        })

        const data = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: data,
        })
    }

    return (
        <GithubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            fetchUsers,
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext