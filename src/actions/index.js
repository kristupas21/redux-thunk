import axios from 'axios';

export const storeData = function(data) {
    return {
        type: 'STORE_DATA',
        payload: data
    }
}

export const displayLoader = function(bool) {
    return {
        type: 'DISPLAY_LOADER',
        payload: bool
    }
}

export const getDataAsync = (url) => {
    return (dispatch) => {
        dispatch(displayLoader(true));

        axios({
            method: 'GET',
            url: url
        }).then((res) => {
            return res.data;
        }).then((res) => {
            dispatch(storeData(res));
            dispatch(displayLoader(false));
        }).catch((err) => {
            console.log(err);
        })
    }
}
