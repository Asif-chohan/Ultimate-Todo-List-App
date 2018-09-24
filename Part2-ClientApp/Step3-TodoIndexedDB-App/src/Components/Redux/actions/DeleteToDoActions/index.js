import db from '../../../config/db';
export const REMOVE_TODO = 'REMOVE_TODO';

//Call Reducer

export function removeTodoAction(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}


// Delete data from indexedDB
export function removeToDo(id) {
    return (dispatch) => {
        db.table('todos')
            .delete(id)
            .then(() => {
                //////////
                // When Delete record against given id, then call reducer
                //////////

                //Call Reducer
                dispatch(removeTodoAction(id));
            });
    };
}