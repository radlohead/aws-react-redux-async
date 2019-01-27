import productTab from '../../src/components/ProductTab';

it('Product', () => {
    const productTabItemsJSON = {
        json: []
    };

    expect(productTab(productTabItemsJSON)).toBeTruthy();
});