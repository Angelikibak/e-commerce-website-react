import React from 'react';
import './menu-item.scss';

const subTitle = 'SHOP NOW';

const MenuItem = ({ title, imageUrl, size }) => (
   <div className={`${size ? 'large menu-item' : 'menu-item'}`}>
      <div
         className='background-image'
         style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
         <h1 className='title'>{title.toUpperCase()}</h1>
         <span className='subtitle'>{subTitle}</span>
      </div>
   </div>
);

export default MenuItem;
