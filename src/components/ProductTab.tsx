import * as React from 'react';
import './ProductTab.scss';

const ProductTab = (productTabItemsJSON: any) => {
    return (
        <div className='product__tab'>
            <ul className="product__list">
                {productTabItemsJSON.json.map((v: any, i: any) => {
                    return <li key={i}>
                        <span className="">{v.price}</span>
                        <img src={v.image.url} alt={v.title} />
                    </li>;
                })}
            </ul>
        </div>
    )
}

export default ProductTab;