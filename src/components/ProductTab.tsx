import * as React from 'react';
import * as numeral from 'numeral';
import * as Types from '../types/Types';
import '../css/productTab.scss';

const productTabItemsRowList = (v: Types.IProductTabItemsData, i: number, index: number): JSX.Element => {
    return (
        <li key={index} className="product__tab__list__item">
            <a className="product__tab__list__item__href" href={v.mobileUrl}>
                {(i+3) % 3 !== 0 || index !== 0  // 큰이미지
                    || <span className="product__tab__list__item__description">
                            <em className="product__tab__list__item__description__shop-name">{v.shopName}</em>
                            <em className="product__tab__list__item__description__title">{v.title}</em>
                        </span>}
                {(i+3) % 3 !== 0 || index !== 0  // 큰이미지 있는 라인 작은사이즈 이미지
                    && <span className="product__tab__list__item__price">{numeral(v.price).format()}원</span>}
                {(i+3) % 3 !== 0  // 작은이미지만 있는 라인
                    && <span className="product__tab__list__item__price">{numeral(v.price).format()}원</span>}
                <img className="product__tab__list__item__img" src={v.image.url} alt={v.title} />
            </a>
        </li>
    )
}

const ProductTab = (productTabItemsJSON: Types.IProductTab|any): JSX.Element => {
    return (
        <div className='product__tab'>
            {productTabItemsJSON.json.map((v: Types.IProductTabItemsData, i: number): JSX.Element => { 
                return <ul key={i} className="product__tab__list">
                    {[0, 1, 2].map((index: number) => {
                        return productTabItemsRowList(v, i, index);
                })}
            </ul>})}
        </div>
    )
}

export default ProductTab;