import * as React from 'react';
import './ProductTab.scss';

const ProductTab = (productTabItemsJSON: any) => {
    return (
        <div className='product__tab'>
            {productTabItemsJSON.json.map((v: any, i: any) => { 
                return <ul key={i} className="product__tab__list">
                    {[0, 1, 2].map((index: any) => {
                        return <li key={index} className="product__tab__list__item">
                            {(i+3) % 3 !== 0 || index !== 0
                                || <span className="product__tab__list__item__description">
                                        <em className="product__tab__list__item__description__shop-name">{v.shopName}</em>
                                        <em className="product__tab__list__item__description__title">{v.title}</em>
                                    </span>}
                            {(i+3) % 3 !== 0 || index !== 0
                                && <span className="product__tab__list__item__price">{v.price}</span>}
                            {(i+3) % 3 !== 0
                                && <span className="product__tab__list__item__price">{v.price}</span>}
                            <img className="product__tab__list__item__img" src={v.image.url} alt={v.title} />
                        </li>;
                })}
            </ul>})}
        </div>
    )
}

export default ProductTab;