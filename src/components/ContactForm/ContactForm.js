import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  numberId = nanoid();
  nameId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { numberId, nameId, handleSubmit, handleChange } = this;
    return (
      <div className={styles.block}>
        <form className={styles.taskEditor} onSubmit={handleSubmit}>
          <div className="inputField">
            <label htmlFor={nameId}>Name</label>
            <input
              className={styles.taskEditor_input}
              id={nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={handleChange}
            />
          </div>
          <div className="inputField">
            <label htmlFor={numberId}>Number</label>
            <input
              className={styles.taskEditor_input}
              id={numberId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={handleChange}
            />
          </div>
          <button className={styles.taskEditor_button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};
