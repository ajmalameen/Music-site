import React from 'react'
import Download from './components/Download'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Search from './components/Search'

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experiance />
      <Search />
      <Download />
      <Footer />
      
      
      
    </div>

 
  )
}

export default App