export const SELECT_TAB = 'SELECT_TAB';

export const currentTab = (tabName: any) => {
    console.log('action', tabName);

    return {
        type: SELECT_TAB,
        currentTab: tabName
    }
}