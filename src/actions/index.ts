export const DAILYLOOK = 'DAILYLOOK';

export const currentTab = (tabName: any) => {
    return {
        type: DAILYLOOK,
        currentTab: tabName
    }
}

export const receiveProductTabItems = (json: any) => {
    return {
        type: DAILYLOOK,
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
        type: DAILYLOOK,
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

export const fetchItemsCall = () => (dispatch: any) => {
    Promise.all([
        dispatch(fetchProductTabItems()),
        dispatch(fetchRankingTabItems())
    ]);
}


