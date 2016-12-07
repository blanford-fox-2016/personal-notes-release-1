var NOTES_API = `https://api.github.com/users`

export function bio(data) {
    return { type: 'LOAD_BIO', data }
}

export function getBio(username, navigator, component, actions) {
    return dispatch => {
        fetch(NOTES_API + `/${username.toLowerCase().trim()}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(bio(data))

                navigator.push({
                    title: data.name || "Select an Option",
                    component: component,
                    passProps: {
                        userInfo: data,
                        actions: actions
                    }
                })
            })
    }
}

export function repos(datas) {
    return { type: 'LOAD_REPOS', datas }
}

export function getRepos(userInfo, navigator, component) {
    return dispatch => {
        fetch(NOTES_API + `/${userInfo.login.toLowerCase().trim()}/repos`)
            .then((res) => res.json())
            .then((datas) => {
                dispatch(repos(datas))

                navigator.push({
                    title: `@${userInfo.login}'s Repos`,
                    component: component,
                    passProps: {
                        userInfo: userInfo,
                        repos: datas
                    }
                })
            })
    }
}