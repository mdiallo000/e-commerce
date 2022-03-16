import React from 'react';
import './styles.scss';
import ShopMen from './../../assets/shopMens.jpg';
import ShopWomen from './../../assets/shopWomens.jpg';

export default function Directory() {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <a href="">Shop WOMen</a>
          {/* <Link to="/search/womens">Shop Womens</Link> */}
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <a href="">Shop Men</a>
          {/* <Link to="/search/mens">Shop Mens</Link> */}
        </div>
      </div>
    </div>
  );
}
