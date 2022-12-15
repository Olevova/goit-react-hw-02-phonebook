import React from "react";
import { ContactForm } from "components/contactForm/contactForm";
import { nanoid } from 'nanoid'
import { Contact } from "./Contact/Contact";

export class App extends React.Component {
  
state = {
  contacts: [],
 
}

  datamy = data => {
    console.log(data);
  }
  
  handleAdd = (formdate) => {
    const { name, number } = formdate;
    // e.preventDefault();
    if (this.state.contacts.find((elem) => elem.name === name))
    {
      alert("vge e")
      return
      }
    
    this.setState(({ contacts }) => (
      {
      contacts: [...contacts, {id:nanoid(5),name,number } ]
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
        <ContactForm onSubmit={this.handleAdd} />
        <Contact props={this.state.contacts}/>
      </div>
    );
  }
};
