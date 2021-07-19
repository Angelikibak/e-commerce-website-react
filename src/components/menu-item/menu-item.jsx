import React from 'react';
import './menu-item.scss';

const subTitle = 'Shop Now';

const MenuItem = ({ title, imageUrl, size }) => (
   <div
      className={`${size ? 'large menu-item' : 'menu-item'}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
   >
      <div className='content'>
         <h1 className='title'>{title}</h1>
         <span className='subtitle'>{subTitle}</span>
      </div>
   </div>
);

export default MenuItem;
