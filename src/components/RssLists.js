import React from 'react';
import { isArrayEmpty, isObjEmpty } from '../utils/isEmpty';
import {Menu} from './Container';

const RssLists = ({data}) => {
  return (
    <>
      <Menu>
        { isObjEmpty(data) ? null :
          isArrayEmpty(data.items) ? "Error Parsing Feed, Please try again." : 
            data.items.map((item, i) => {
              return <li key={i}> <a href={item.link}> { item.title } </a> </li>
            })
        }
      </Menu>
    </>
  )
} 
  
export default RssLists;
  