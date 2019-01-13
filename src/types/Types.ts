export interface ICurrentTab {
    type: string;
    currentTab: string;
}

export interface IProductTabItemsData {
    id: string;
    image: {
        id: number,
        url: string
    };
    liked: boolean;
    likedCount: number;
    mobileUrl: string;
    price: number;
    shopId: string;
    shopName: string;
    title: string;
    url: string;
}

export interface IProductTabItemsJSON {
    data: IProductTabItemsData;
    pagination: {
        nextCursor: string;
    }
}

export interface IProductTab {
    productTabItemsJSON: {
        json: IProductTabItemsData[]
    };
}

export interface IFetchProductTabItems {
    type: string;
    productTabItemsJSON: IProductTabItemsJSON;
}

export interface IRankingTabItemsData {
    description: string;
    id: string;
    image: {
        id: number;
        url: string;
    };
    liked: boolean;
    name: string;
    secondName: null;
    url: string;
}

export interface IRankingTabItemJSON {
    data: IRankingTabItemsData;
    pagination: {
        nextCursor: number;
    }
    updatedAt: [{[date: string]: string;}];
}

export interface IRankingTab {
    rankingTabItemsJSON: {
        json: IRankingTabItemsData[]
    };
}

export interface IFetchRankingTabItems {
    type: string;
    rankingTabItemsJSON: IRankingTabItemJSON;
}

export interface IDailyLook {
    type?: string;
    currentTab?: string;
    productTabItemsJSON?: IProductTabItemsJSON;
    rankingTabItemsJSON?: IRankingTabItemJSON;
}

export interface IComponentsList {
    currentTab?: string;
    onCurrentTab(tabName: string): void;
    productTabItemsJSON?: IProductTabItemsJSON;
    rankingTabItemsJSON?: IRankingTabItemJSON;
}

export interface ITabMenu {
    currentTab?: string;
    onCurrentTab(tabName: string): void;
}