export default function reducer(state= [], action) {
	switch(action.type){
		case "LOAD_USERS": {
			return []
		}
		case "ADD_USER": {
			return [{
				id: action.id,
				username: action.username,
				avatar: action.avatar
			}]
		}
		case "DELETE_USER": {
			return state.filter((data) => data.id !== action.id)
		}
		default:
			return state
	}
}