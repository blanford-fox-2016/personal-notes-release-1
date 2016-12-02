

export const AuthToken = {
    authenticateUser: (data) => {
        console.log(data)
        if (data.status === 'error') console.log('No account:', data)
        AuthToken.deauthenticateUser()
        // console.log('data:', data)
        // localStorage.setItem('token', data.token)
        AsyncStorage.setItem('token', data.token)
        // console.log('token:', localStorage.getItem('token'))
    },
    deauthenticateUser: () => {
        // localStorage.removeItem('token')
        AsyncStorage.removeItem('token')
    },
    getToken: () => {
        return AsyncStorage.getItem('token')
    },
    getUser: () => {
        let token = AuthToken.getToken()
        if (!token) return {}
        else {
            return jwt_decode(token)
        }
    }
}
