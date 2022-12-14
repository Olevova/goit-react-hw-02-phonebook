import React from "react";
import { Contact } from "contact/contact";

export class App extends React.Component {
  
state = {
  contacts: [{name:"tolik", number:155}],
  name: '',
  number: ''
}
  handleName = ev =>
  {
    this.setState({ [ev.currentTarget.name]: ev.currentTarget.value});
  }

  handleAdd = (e) => {
    console.log(e);
    this.setState(({contacts}) => ({
      contacts: [...contacts, {name: this.state.name, number: this.state.number } ]
    }
    ))

  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Contact
          name={this.state.name}
          number={this.state.number}
          func={this.handleName}
          func2={this.handleAdd } />
      </div>
    );
  }
};
