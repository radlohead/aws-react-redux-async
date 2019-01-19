import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ContainerTab from './ContainerTab';
import * as actions from '../actions';

class App extends React.Component {
    constructor(props: any) {
        super(props);

        const { fetchItemsCall }: any = props;
        fetchItemsCall();
    }

    public render(): JSX.Element {
        return (
            <>
                <ContainerTab />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        fetchItemsCall: () => dispatch(actions.fetchItemsCall())
    }
}

export default connect(null, mapDispatchToProps)(App);