import * as React from 'react';
import * as numeral from 'numeral';
import * as Types from '../types/Types';
import '../css/productTab.scss';

const ProductTab = (productTabItemsJSON: Types.IProductTab): JSX.Element => {
    return (
        <div className='product__tab'>
            <ul className="product__tab__list">
                {productTabItemsJSON.json.map((v: Types.IProductTabItemsData, i: number): JSX.Element => { 
                    return <li key={v.id} className="product__tab__list__item">
                            <a className="product__tab__list__item__href" href={v.mobileUrl}>
                                {(i === 0 || i%9 === 0) // 큰이미지
                                    && <span className="product__tab__list__item__description">
                                            <em className="product__tab__list__item__description__shop-name">{v.shopName}</em>
                                            <em className="product__tab__list__item__description__title">{v.title}</em>
                                        </span>}
                                {(i !== 0 && i%9 !== 0) // 작은이미지
                                    && <span className="product__tab__list__item__price">{numeral(v.price).format()}원</span>}
                                <img className="product__tab__list__item__img" src={v.imageurl} alt={v.title} />
                            </a>
                    </li>})}
            </ul>
        </div>
    )
}

export default ProductTab;