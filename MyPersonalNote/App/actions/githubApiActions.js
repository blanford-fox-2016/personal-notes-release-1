var NOTES_API = `https://api.github.com/users`

export function bio(data){
	return { type: 'LOAD_BIO', data }
}

export function getBio(username){
	return dispatch => {
		fetch(NOTES_API)
			.then((res) => res.json())
			.then((data) => {
				dispatch(bio(data))
			})
	}
}