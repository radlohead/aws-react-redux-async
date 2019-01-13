import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions';
import * as Types from '../types/Types';
import ComponentsList from '../components/ComponentsList';

const mapStateToProps = (state: Types.IDailyLook|undefined): Types.IDailyLook|{} => {
    if (state) {
        return {
            currentTab: state.currentTab,
            productTabItemsJSON: state.productTabItemsJSON,
            rankingTabItemsJSON: state.rankingTabItemsJSON
        }
    } else {
        return state = {};
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onCurrentTab: (tabName: string) => dispatch(actions.currentTab(tabName))
    }
}

const ContainerTab = connect(mapStateToProps, mapDispatchToProps)(ComponentsList);
export default ContainerTab;