import * as React from 'react';
import { connect } from 'react-redux';
import { ProductTab, RankingTab, TabMenu } from '../components/ComponentsList';
import * as actions from '../actions';

class App extends React.Component {
    public render(): JSX.Element {
        const { onCurrentTab, currentTab }: any = this.props;
        console.log('render', this.props, currentTab);

        return (
            <>
                <TabMenu
                    currentTab={currentTab}
                    onCurrentTab={onCurrentTab}
                />
                <ProductTab />
                <RankingTab />
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    console.log('App', state);
    return {
        currentTab: state ? state.currentTab : 'PRODUCT_TAB'
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onCurrentTab: (tabName: string) => dispatch(actions.currentTab(tabName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);