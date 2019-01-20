import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions';
import * as Types from '../types/Types';
import ComponentsList from '../components/ComponentsList';

const mapStateToProps = (state: Types.IDailyLook = {}) => {
    return {
        currentTab: state.currentTab,
        type: state.type,
        productTabItemsJSON: state.productTabItemsJSON,
        rankingTabItemsJSON: state.rankingTabItemsJSON
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onCurrentTab: (tabName: string) => dispatch(actions.currentTab(tabName))
    }
}

const ContainerTab = connect(mapStateToProps, mapDispatchToProps)(ComponentsList);
export default ContainerTab;