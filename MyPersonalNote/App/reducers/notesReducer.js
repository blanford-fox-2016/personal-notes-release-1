export default function reducer(state= [], action) {
	switch(action.type){
		case "LOAD_NOTES": {
			return action.notes
		}
		case "ADD_NOTE": {
			return [{
				id: action.id,
				title: action.title,
				content: action.content,
				user: action.user
			},
			...state]
		}
		case "DELETE_DATA": {
			return state.filter((data) => data.id !== action.id)
		}
		case "EDIT_NOTE": {
			return state.map((data) => data.id === action.id ? Object.assign({}, data, {title: action.title, content: action.content }) : data)
		}
		default:
			return state
	}
}