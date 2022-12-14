import React from "react";
import { ContactForm } from "components/contactForm/contactForm";
import { nanoid } from 'nanoid'
import { Contact } from "./Contact/Contact";

export class App extends React.Component {
  
state = {
  contacts: [],
  name: '',
  number: ''
}
  handleName = ev =>
  {
    this.setState({ [ev.currentTarget.name]: ev.currentTarget.value});
  }

  handleAdd = (e) => {
    e.preventDefault();
    if (this.state.contacts.find((elem) => elem.name === this.state.name))
    {
      alert("vge e")
      return
      }
    
    console.log(e);
    this.setState(({ contacts }) => (
      {
      contacts: [...contacts, {id:nanoid(5),name: this.state.name, number: this.state.number } ]
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
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onAddInForm={this.handleName}
          onSubmitForm={this.handleAdd} />
        <Contact props={this.state.contacts}/>
      </div>
    );
  }
};
