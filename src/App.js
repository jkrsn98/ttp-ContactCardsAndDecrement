import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from "./ContactCard";

class App extends Component{
  render(){
    return (
      <div className="App">
        <ContactCard
          name="Frank"
          mobile="7184044215"
          work="9175323463"
          email="frank@work.com"
        />
        <ContactCard
          name="Sarah"
          mobile="718404532"
          work="9171234443"
          email="sarah@work.com"
        />
        <ContactCard
          name="Sam"
          mobile="7420259953"
          email="sam@work.com"
        />                
      </div>
    );
  }
}

export default App;
