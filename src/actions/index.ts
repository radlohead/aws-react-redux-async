export const SELECT_TAB = 'SELECT_TAB';

export const currentTab = (tabName: any) => {
    console.log('action', tabName);

    return {
        type: SELECT_TAB,
        currentTab: tabName
    }
}

export const receiveItems = (json: any) => {
    console.log('receiveItems', json);
    return {
        type: SELECT_TAB,
        json
    }
}

export const fetchItems = () => (dispatch: any) => {
    return fetch('http://localhost:3003/data')
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log('action, async', json);
            return dispatch(receiveItems(json));
        });
}

export const fetchItemsNeed = () => (dispatch: any) => {
    return dispatch(fetchItems());
}


