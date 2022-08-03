import React from 'react';
import './List.css';
import items from './Items';


function List() {
  //Elona is thr best!
    return (
      <div className="items">
        {items.map((item) => (
          <div className="item">
            <div className='element'>{item.icon}</div>
            <div className='desc'>
              <h3>{item.name}</h3>
              <p>{item.question}</p>
            </div>
          </div>
        ))}
      </div>
    );

  }
  
  export default List;