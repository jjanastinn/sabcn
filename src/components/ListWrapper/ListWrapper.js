import React from 'react';
import { List } from './ListWrapper.elements';
import ListItem from '../ListItem/ListItem';

const ListWrapper = ({array}) => {
  return (
    <List>
      {array.map((arrayItem) => (
        <ListItem key={arrayItem.id} data={arrayItem}/>
      ))}
    </List>
  )
};

export default ListWrapper;
