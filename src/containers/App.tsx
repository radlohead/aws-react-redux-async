import * as React from 'react';
import { connect } from 'react-redux';
import ContainerTab from './ContainerTab';
import * as actions from '../actions';

class App extends React.Component {
    public componentDidMount(): void {
        const { dispatch }: any = this.props;
        dispatch(actions.fetchItemsNeed());
    }

    public render(): JSX.Element {
        return (
            <>
                <ContainerTab />
            </>
        )
    }
}

export default connect()(App);