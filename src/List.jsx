import React, { useState } from 'react';

const List = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
    <div>
      <h2>My List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
