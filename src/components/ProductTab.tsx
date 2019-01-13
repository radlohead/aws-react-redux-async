import * as React from 'react';
import * as Types from '../types/Types';
import '../css/productTab.scss';

const ProductTab = (productTabItemsJSON: Types.IProductTab|any): JSX.Element => {
    return (
        <div className='product__tab'>
            {productTabItemsJSON.json.map((v: Types.IProductTabItemsData, i: number): JSX.Element => { 
                return <ul key={i} className="product__tab__list">
                    {[0, 1, 2].map((index: number) => {
                        return <li key={index} className="product__tab__list__item">
                            {(i+3) % 3 !== 0 || index !== 0  // 큰이미지
                                || <span className="product__tab__list__item__description">
                                        <em className="product__tab__list__item__description__shop-name">{v.shopName}</em>
                                        <em className="product__tab__list__item__description__title">{v.title}</em>
                                    </span>}
                            {(i+3) % 3 !== 0 || index !== 0  // 큰이미지 있는 라인 작은사이즈 이미지
                                && <span className="product__tab__list__item__price">{v.price}</span>}
                            {(i+3) % 3 !== 0  // 작은이미지만 있는 라인
                                && <span className="product__tab__list__item__price">{v.price}</span>}
                            <img className="product__tab__list__item__img" src={v.image.url} alt={v.title} />
                        </li>;
                })}
            </ul>})}
        </div>
    )
}

export default ProductTab;