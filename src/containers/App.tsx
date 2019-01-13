import * as React from 'react';
import { connect } from 'react-redux';
import ContainerTab from './ContainerTab';
import * as actions from '../actions';

class App extends React.Component {
    public componentWillMount(): void {
        const { dispatch }: any = this.props;
        dispatch(actions.fetchItemsCall());
    }

    public render(): JSX.Element {
        return (
            <>
                <ContainerTab />
            </>
        )
    }
}

export default connect(null)(App);