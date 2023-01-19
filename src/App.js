
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
    return (
      // <div>
      // </div>
      <BrowserRouter>
       apiKey={apiKey}
      <NavBar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <Routes>
        <Route end  path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="General"/>} />
        <Route end  path="business/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business"  country="in" category="business"/>} />
        <Route end  path="entertainment/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="Entertainment"/>} />
        <Route end  path="general/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="General"/>} />
        <Route end  path="health/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country="in" category="Health"/>} />
        <Route end  path="science/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country="in" category="Science"/>} />
        <Route end  path="sports/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" country="in"  category="Sports"/>} />
        <Route end  path="technology/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="techhnology" country="in" category="Technology"/>} />
        </Routes>
    </BrowserRouter>
    )
  
}

export default App;

