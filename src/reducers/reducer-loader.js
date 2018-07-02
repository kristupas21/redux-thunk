export default function(state=false, action) {
    switch(action.type) {
        case 'DISPLAY_LOADER': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}