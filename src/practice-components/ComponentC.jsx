import React, {useContext} from 'react';
import {userContext} from './ComponentA'

const ComponentC = () => {
    let componentAUserContext = useContext(userContext)
  return (
    <div><h3>ComponentC</h3><h3>{componentAUserContext}</h3></div>
  )
}

export default ComponentC