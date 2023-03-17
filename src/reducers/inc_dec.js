const initialState = 0;

const inc_dec = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT': // spaling ki mistake na ho
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    default: return state
    }
}

export default inc_dec