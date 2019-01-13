import * as React from 'react';
import { connect } from 'react-redux';
import ContainerTab from './ContainerTab';
import { fetchItemsCall } from '../actions';

class App extends React.Component {
    public componentDidMount(): void {
        const { dispatch }: any = this.props;
        dispatch(fetchItemsCall());
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