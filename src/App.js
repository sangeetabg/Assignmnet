
import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Resources from './Routing/Resources'
import Resourcesid from './Routing/Id'
export class App extends Component {
  state={
    selectedData:{}
  }
   selectedHandler=(element)=>{
      console.log("selected data App",element )
      this.setState({selectedData:element})
   } 
  render() {
    return (
      <>
      
      <Router>
           
        <Routes>
           <Route exact path="/" element={<Resources selectedHandler={this.selectedHandler}/>}/>
           <Route exact path="/id" element={<Resourcesid selectedData={this.state.selectedData}/>}/>
          
        </Routes>
      </Router>
        
      </>
    )
  }
}

export default App
