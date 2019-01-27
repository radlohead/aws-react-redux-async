import product from '../../src/components/RankingTab';

it('RankingTab', () => {
    const rankingTabItemsJSON = {
        json: []
    };
    expect(product(rankingTabItemsJSON)).toBeTruthy();
});