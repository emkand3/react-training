import axios from 'axios'

const URL = process.env.REACT_APP_GITHUB_URL
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: URL,
    headers: {
        Authorization: `token ${TOKEN}`
    },
})

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}

export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'updated',
        per_page: 10,
    })
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`),
    ])
    return {user: user.data, repos: repos.data}
}