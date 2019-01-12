export const SELECT_TAB = 'SELECT_TAB';

export const currentTab = (tabName: any) => {
    return {
        type: SELECT_TAB,
        currentTab: tabName
    }
}

export const receiveProductTabItems = (json: any) => {
    return {
        type: SELECT_TAB,
        productTabItemsJSON: json
    }
}

export const fetchProductTabItems = () => (dispatch: any) => {
    return fetch('http://localhost:3003/data')
        .then(response => {
            return response.json();
        })
        .then(json => {
            return dispatch(receiveProductTabItems(json));
        });
}

export const receiveRankingTabItems = (json: any) => {
    return {
        type: SELECT_TAB,
        rankingTabItemsJSON: json
    }
}

export const fetchRankingTabItems = () => (dispatch: any) => {
    return fetch('http://localhost:3004/data')
        .then(response => {
            return response.json()
        })
        .then(json => {
            return dispatch(receiveRankingTabItems(json));
        });
}

export const fetchItemsNeed = () => (dispatch: any) => {
    return (
        dispatch(fetchProductTabItems()),
        dispatch(fetchRankingTabItems())
    )
}


