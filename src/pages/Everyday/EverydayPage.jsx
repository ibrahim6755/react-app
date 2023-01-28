import React from 'react'
import Header from '../../components/Header'
import SecondaryNav from '../../components/secondNav'
import EverydayValue from '../../components/EverydayValue'

const EverydayPage = () => {
  return (
   <>
  <div className="color" style={{backgroundColor:'black'}}>
  <div className="container">
  <Header/>
  <SecondaryNav/>
  <EverydayValue/>
  </div>
  </div>
  
   </>
  )
}

export default EverydayPage