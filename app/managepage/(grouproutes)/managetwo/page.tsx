import React from 'react'
import styles from './managetwo.module.css'
import ManageIntro from '../manageintro'
const ManagerTwo = () => {
  return (
    <div>
       <ManageIntro />
      <div className={`${styles.manage} managetwocolor`}>Manager two from group</div>
      <div className="managetwocolor">Manager two from group</div>
    </div>
  )
}

export default ManagerTwo;

