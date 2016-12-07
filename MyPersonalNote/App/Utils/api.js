var api = {
	// getBio(username){
	// 	var user = username.toLowerCase().trim()
	// 	var url = `https://api.github.com/users/${user}`
	// 	return fetch(url).then((res) => res.json())
	// },
	// getRepos(username){
	// 	var user = username.toLowerCase().trim()
	// 	var url = `https://api.github.com/users/${user}/repos`
	// 	return fetch(url).then((res) => res.json())
	// },
	getNotes(username){
		var user = username.toLowerCase().trim()
		var url = `https://github-saver-ad667.firebaseio.com/${user}.json`
		return fetch(url).then((res)=>res.json())
	},
	addNote(username, note){
		var user = username.toLowerCase().trim()
		var url = `https://github-saver-ad667.firebaseio.com/${user}.json`
		return fetch(url, {
			method: 'post',
			body: JSON.stringify(note)
		}).then((res) => res.json())
	}
}

module.exports = api