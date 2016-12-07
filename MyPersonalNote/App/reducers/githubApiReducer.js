export default function reducer(state= [], action) {
	switch(action.type){
		case "LOAD_BIO": {
			return action.data
		}
		default:
			return state
	}
}