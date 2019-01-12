import { connect } from 'react-redux';
import * as actions from '../actions';
import ComponentsList from '../components/ComponentsList';

const mapStateToProps = (state: any): any => {
    let result: any = {};
    
    if (state) {
        result = {
            currentTab: state ? state.currentTab : 'PRODUCT_TAB',
            productTabItemsJSON: state && state.productTabItemsJSON,
            rankingTabItemsJSON: state && state.rankingTabItemsJSON
        }
    }

    return result;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onCurrentTab: (tabName: string) => dispatch(actions.currentTab(tabName))
    }
}

const ContainerTab = connect(mapStateToProps, mapDispatchToProps)(ComponentsList);
export default ContainerTab;