import React from "react";


export class ContactForm extends React.Component{ 
  state = {
    name: '',
    number: ''
  }

    handleName = ev =>
  {
    this.setState({ [ev.currentTarget.name]: ev.currentTarget.value});
  }

  reset = () => {
    this.setState({
    name: '',
    number: ''
  })
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  }

  render() {
    return( <form onSubmit={this.handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleName}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit"> Add Contact</button>
    </form>)
  }

}
