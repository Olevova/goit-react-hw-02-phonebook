import React from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContacForm/ContacForm";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export class App extends React.Component {
  
state = {
  contacts: [],
  filter: "",
  
}

  onFilter = ev => {
    console.log(ev.currentTarget.value);
    this.setState({
     filter: ev.currentTarget.value
    })
  }
  
  datamy = data => {
    console.log(data);
  }
  
  deleteContact = id => {
    this.setState(prv => ({
      contacts: prv.contacts.filter(cont => cont.id !== id)
    }));
  }



  handleAdd = (formdate) => {
    const { name, number } = formdate;
    // e.preventDefault();
    if (this.state.contacts.find((elem) => elem.name === name))
    {
      alert(`Person with name ${name} is in a date`)
      return
      }
    
    this.setState(({ contacts }) => (
      {
        contacts: [...contacts, { id: nanoid(5), name, number }]
    }
    ))
  }

  render() {
    const filterContacts = this.state.contacts.filter(
      (cont) => cont.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: "column"
        }}
      >
        <ContactForm onSubmit={this.handleAdd} />
        <Filter filter={this.currentTarget} func={this.onFilter} len={ this.state.contacts} />
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            <Item>
              <Contacts props={filterContacts} delCont={this.deleteContact} />
            </Item>
          </Stack>
          </Box>
        
      </div>
    );
  }
};
