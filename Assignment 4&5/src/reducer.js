import * as actionTypes from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                persons: state.persons.concat({id: Math.random(), name: action.personData.name, age: action.personData.age})
            }
        case actionTypes.DELETE:
            const updatedArray = state.persons.filter(result => result.id !== action.resultElId);   
            return {
                ...state,
                persons: updatedArray,     
            }
    }
    return state;
}

export default reducer;
