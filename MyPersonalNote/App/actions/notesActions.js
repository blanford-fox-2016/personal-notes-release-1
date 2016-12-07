var NOTES_API = `http://localhost:3000/api/notes`

export function load(notes) {
    return { type: types.LOAD_NOTES, notes }
}

export function loadNotes() {
    return dispatch => {
        fetch(NOTES_API).then((datas) => {
            dispatch(load(datas))
        })
    }
}

export function add(id, title, content, user) {
    return { type: types.ADD_NOTE, id, title, content, user }
}

export function addNote(title, content, user) {
    return dispatch => {
        fetch(NOTES_API, {
                method: 'post',
                body: JSON.stringify({
                    title: title,
                    content: content,
                    userid: user
                })
            })
            .then((res) => res.json())
            .then((data) => {
                dispatch(add(data._id, data.title, data.content, data.user.username))
                dispatch(loadNotes())
            })
            .catch((err) => console.log('Request failed', err))
    }
}

export function edit(id, title, content) {
    return { type: types.EDIT_NOTE, id, title, content }
}

export function editNote(id, title, content) {
    return dispatch => {
    	fetch((NOTES_API + `/${id}`), {
            method: 'put',
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch(edit(data._id, data.title, data.content, data.user.username))
            dispatch(loadNotes())
        })
    }
}

export function delete(id) {
    return { type: types.DELETE_NOTE, id }
}

export function deleteNote(id) {
    return dispatch => {
    	fetch((NOTES_API + `\${id}`), {
            method: 'delete',
            body: JSON.stringify({
                id: id
            })
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch(delete(id))
            dispatch(loadNotes())
        })
    }
}
