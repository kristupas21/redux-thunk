export default function(state=[], action) {
    switch(action.type) {
        case 'STORE_DATA': {
            return [
                ...action.payload
            ];
        }
        default: {
            return state;
        } 
    }
};