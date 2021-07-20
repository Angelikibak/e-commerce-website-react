import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

const subTitle = 'SHOP NOW';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
   <div
      className={`${size ? 'large menu-item' : 'menu-item'}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
   >
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

export default withRouter(MenuItem);
