import React from 'react';
import { isArrayEmpty, isObjEmpty } from '../utils/isEmpty';

const Sidebar = ({data}) => {
  return (
    <>
      { 
        isObjEmpty(data) ? null : 
        isArrayEmpty(data.items) ? null : <p> { data.feed.title } </p> 
      }
    </>
  )
} 
  
export default Sidebar;
  