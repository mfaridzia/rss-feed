import React from 'react';
import { isArrayEmpty, isObjEmpty } from '../utils/isEmpty';
import {Menu} from './Container';

const RssLists = ({loading, data}) => {
  return (
    <>
      { loading ? "Loading..." :
        <Menu>
          { isObjEmpty(data) ? null :
            isArrayEmpty(data.items) ? "Error Parsing Feed, Please try again." : 
              data.items.map((item, i) => {
                return <li key={i}> { item.title } </li>
              })
          }
        </Menu>
      }
    </>
  )
} 
  
export default RssLists;
  