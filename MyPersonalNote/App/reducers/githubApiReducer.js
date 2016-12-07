export default function reducer(state= [], action) {
	switch(action.type){
		case "LOAD_BIO": {
			return action.data
		}
		case "LOAD_REPOS": {
			return action.datas
		}
		default:
			return state
	}
}