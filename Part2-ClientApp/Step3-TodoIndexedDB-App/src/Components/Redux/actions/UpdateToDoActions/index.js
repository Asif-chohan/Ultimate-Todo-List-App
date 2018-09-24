import db from '../../../config/db';
export const UPDATE_TODO = 'UPDATE_TODO';

// Call reducer for update realtime
export function updateTodoAction(data) {
    return {
        type: UPDATE_TODO,
        payload: data
    }
}

// Update the record against given id
export function updateToDo(data) {
    return (dispatch) => {

        db.todos
            .update(data.id, { title: data.title, desc: data.desc, done: data.done, createAt: data.createAt })
            .then(function (updated) {
                if (updated) {
                    //////////
                    // "update" function of dexie take 2 parameters, 1st for id 2nd for data which we want to update
                    //////////

                    //Call Reducer
                    dispatch(updateTodoAction(data));
                }
                else
                    console.log('failed to update');
            });

    };
}