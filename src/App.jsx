import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SectionSkill from './components/Section/SectionSkill'
import SectionEducation from './components/Section/SectionEducation'
import SectionExperience from './components/Section/SectionExperience'
import SectionProduct from './components/Section/SectionProduct'





const App = () => {
  return (

    
    <>
      <div className='Header_App'>
        <Header />
      </div>
      <div>
        <SectionSkill />
        <SectionEducation />
        <SectionExperience />
        <SectionProduct />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App