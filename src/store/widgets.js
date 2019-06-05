// Actions
const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';


//initialState 
const initialState = {
    number: 0,
    foo: 'bar',
    baz: 'qux',
}


// Reducer
export default function reducer(state=initialState, action) {
    switch (action.type) {
        case LOAD : 
        return { ...state, number: state.number + action.numberDiff};
        case CREATE : 
        return Object.assign({}, state, {
            number: state.number - action.diff
        });


        // do reducer stuff
        default: return state;
    }
}


// Action Creator
const loadWidgets = ()=>({
    type: LOAD,
    diff: diff
});