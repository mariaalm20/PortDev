import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
 
import Home from './pages/Home'
import SignIn from './pages/SignIn'

const Routes  = () =>{
  return(
    <BrowserRouter>
     <Route exact component={SignIn} path="/"/>
     <Route component={Home} path="/home/:id"/>
    </BrowserRouter>
  )
}

export default Routes