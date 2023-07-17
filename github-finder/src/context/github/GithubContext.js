import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

const URL = process.env.REACT_APP_GITHUB_URL
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initalState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initalState)

    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        })

        const {items} = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    const getUser = async (login) => {
        setLoading()
    
        const response = await fetch(`${URL}/users/${login}`, {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        })

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()
            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
    }

    const getRepos = async (login) => {
        setLoading()
        
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10,
        })

        const response = await fetch(`${URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        })

        const data = await response.json()
        dispatch({
            type: 'GET_REPOS',
            payload: data,
        })
    }

    return (
        <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            repos: state.repos,
            searchUsers,
            clearUsers,
            getUser,
            getRepos,
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext