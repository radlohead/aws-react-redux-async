import * as React from 'react';
import { ProductTab, RankingTab, TabMenu } from '../components/ComponentsList';

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <>
                <TabMenu />
                <ProductTab />
                <RankingTab />
            </>
        )
    }
}

export default App;