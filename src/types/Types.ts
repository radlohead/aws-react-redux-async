export interface ICurrentTab {
    currentTab: string;
    type: string;
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
    json: IProductTabItemsData[];
    productTabItemsJSON?: {
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
    json: IRankingTabItemsData[];
    rankingTabItemsJSON?: {
        json: IRankingTabItemsData[]
    };
}

export interface IFetchRankingTabItems {
    type: string;
    rankingTabItemsJSON: IRankingTabItemJSON;
}

export interface IDailyLook {
    currentTab?: string|undefined;
    type?: string;
    productTabItemsJSON?: IProductTabItemsData[]|[];
    rankingTabItemsJSON?: IRankingTabItemsData[]|[];
}

export interface IComponentsList {
    currentTab: string;
    type: string;
    onCurrentTab(tabName: string): void;
    productTabItemsJSON: IProductTabItemsData[]|[];
    rankingTabItemsJSON: IRankingTabItemsData[]|[];
}

export interface ITabMenu {
    currentTab?: string;
    onCurrentTab(tabName: string): void;
}