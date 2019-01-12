import { connect } from 'react-redux';
import * as actions from '../actions';
import ComponentsList from '../components/ComponentsList';

const mapStateToProps = (state: any) => {
    console.log('ContainerTabMenu', state);
    return {
        currentTab: state ? state.currentTab : 'PRODUCT_TAB',
        json: state ? state.json : {}
        // json: state ? state.json : {}
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onCurrentTab: (tabName: string) => dispatch(actions.currentTab(tabName))
    }
}

const ContainerTab = connect(mapStateToProps, mapDispatchToProps)(ComponentsList);
export default ContainerTab;