import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SectionSkill from './components/Section/SectionSkill'


const App = () => {
  return (
    <>
      <div className='Header_App'>
        <Header />
      </div>
      <div>
        <SectionSkill />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App