import * as React from 'react';
import { connect } from 'react-redux';
import ContainerTab from './ContainerTab';
import * as actions from '../actions';

class App extends React.Component {
    public componentDidMount(): void {
        // console.log('componentDidMount', this.props);
        const { dispatch }: any = this.props;
        dispatch(actions.fetchItemsNeed());
    }

    public render(): JSX.Element {
        // const { currentTab }: any = this.props;
        console.log('render', this.props);

        return (
            <>
                <ContainerTab />
            </>
        )
    }
}

// const mapStateToProps = (state: any) => {
//     console.log('App', state);
//     return {
//         currentTab: state ? state.currentTab : 'PRODUCT_TAB',
//         json: state ? state.json : {}
//     }
// }

export default connect(
    // mapStateToProps
)(App);