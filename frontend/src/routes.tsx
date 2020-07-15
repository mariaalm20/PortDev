import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
 
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import CreateProjects from './pages/CreateProjects'

const Routes  = () =>{
  return(
    <BrowserRouter>
     <Route exact component={SignIn} path="/"/>
     <Route component={Home} path="/home/:id"/>
     <Route component={CreateProjects} path="/projects"/>
    </BrowserRouter>
  )
}

export default Routes