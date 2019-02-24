import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
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
        onCurrentTab: bindActionCreators(actions.currentTab, dispatch)
    }
}

const ContainerTab = connect(mapStateToProps, mapDispatchToProps)(ComponentsList);
export default ContainerTab;