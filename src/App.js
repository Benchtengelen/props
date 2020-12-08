import React, { Component } from 'react'  // App.js dosyası
import User from './User'
import Navbar from './Navbar'

 class App extends Component {
    render() {
        return (
            <div className="container">
              <Navbar title = " User App " />
              <hr />
              <User 
              name = "Feyyaz Yılmaz"
              salary = "6000"
              department = "Developer"
              />
                
            </div>
        )
    }
}

export default App
