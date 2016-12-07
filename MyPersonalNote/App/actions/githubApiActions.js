var NOTES_API = `https://api.github.com/users`

export function bio(data) {
    return { type: 'LOAD_BIO', data }
}

export function getBio(username, navigator, component) {
    return dispatch => {
        fetch(NOTES_API + `/${username.toLowerCase().trim()}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(bio(data))

                navigator.push({
                    title: data.name || "Select an Option",
                    component: component,
                    passProps: {
                        userInfo: data
                    }
                })
            })
    }
}

// export function repos(data) {
//     return { type: 'LOAD_BIO', data }
// }

// export function getRepos(username, navigator, component) {
//     return dispatch => {
//         fetch(NOTES_API + `/${username.toLowerCase().trim()}/repos`)
//             .then((res) => res.json())
//             .then((datas) => {
//                 dispatch(bio(datas))

//                 navigator.push({
//                     title: data.name || "Select an Option",
//                     component: component,
//                     passProps: {
//                         userInfo: data
//                     }
//                 })
//             })
//     }
// }