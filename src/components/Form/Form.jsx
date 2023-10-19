import { useDispatch } from 'react-redux'
import css from '../Form/Form.module.css'
import React, { useState } from 'react'
import { addContact } from 'redux/contactsSlice'
import { nanoid } from '@reduxjs/toolkit'


export default function Form() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()

const handleChange = ({target:{value, name}}) => {
  if (name === 'name') {
    setName(value)
  }else {
    setNumber(value)
  }
};
// const newContact ={
//   ...dataByForm, 
//   id: nanoid(),
// }
const newContact = {
  name,
  number,
}
const onSubmit = (evt) => {
  evt.preventDefault();
  dispatch(addContact({...newContact, id: nanoid()}))
  setName('');
  setNumber('');
}

  return (
    <form className={css.form} onSubmit={onSubmit}>
          <label htmlFor="InputName" className={css.formLabel}>Name</label>
          <input onChange={handleChange}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={name}
      className={css.formInput}
    />
    <label htmlFor="Inputnumber" className={css.formLabel}>Number</label>
    <input onChange={handleChange}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number}
  className={css.formInput}
/>
    <button className={css.formBtn}>Add Contact</button>
      </form>
  )
}


