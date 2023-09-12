import React from 'react'
import Header from './Components/header'
import Main from './Components/main'
import Navbar from './Components/navbar'
import ShoppingList from './Components/shoppingList'
import './App.css'


function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <ShoppingList/>
      <Main/>
    </>
  )
}

export default App
