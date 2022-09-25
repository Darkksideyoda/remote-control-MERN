import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import NextBtn from './components/nextBtn'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import DetectAIPage from "./components/remotedetect/index";
import MyRemoteControl from './components/myRemoteControl'
import AddNewRemoteControl from './components/AddRemoteControl'
import AboutPage from './components/About'



function App() {

  return (
    <div className="App">
<NavBar/>







      <Router>
        <Routes>
          <Route exact path="/" element={<MyRemoteControl/>}/>
          <Route exact path="/my-remote-controls" element={<MyRemoteControl/>}/>
          <Route exact path="/add-new-remote-control" element={<AddNewRemoteControl/>}/>
          <Route exact path="/about-page" element={<AboutPage/>}/>

          <Route exact path="/detect-remote" element={<DetectAIPage/>}/>
          <Route path="*" element={<DetectAIPage/>}/>
        </Routes>
    </Router>


    </div>
  )
}

export default App
