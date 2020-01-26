import { actionTypes } from './actions';

const initialState = {
  gallonsUsed: 0,
}

function reducer(state = initialState, action) {
    switch (action.type) {

      case actionTypes.SET_GALLONS_USED:
        return Object.assign({}, state, {
          gallonsUsed: action.payload
        })
    //   case ADD_TODO:
    //     return Object.assign({}, state, {
    //       todos: [
    //         ...state.todos,
    //         {
    //           text: action.text,
    //           completed: false
    //         }
    //       ]
    //     })
    }
}

export default reducer;