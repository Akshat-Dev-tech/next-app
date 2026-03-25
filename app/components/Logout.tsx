import React from 'react'
import { removeSession } from '../actions/session';

const Logout = () => {
  return (
    <button onClick={removeSession}>Logout</button>
  )
}

export default Logout;
