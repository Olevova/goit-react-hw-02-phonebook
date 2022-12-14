import React from "react";


export const ContactForm = ({ name,number,onAddInForm, onSubmitForm }) => {
    return (
        <form onSubmit={onSubmitForm}>
        <input
        type="text"
        name="name"
        value={name}
        onChange = {onAddInForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
            />
            <input
        type="tel"
        name="number"
        value={number}
        onChange = {onAddInForm}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
        <button type="submit" >Add Contact</button>
        </form>
            )

}
