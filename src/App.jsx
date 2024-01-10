import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import css from './styles/App.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App