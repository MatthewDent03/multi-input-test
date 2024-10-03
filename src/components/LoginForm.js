import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const LoginForm = () => {

  const [form, setForm] = useState({
    email: '',
    receiveNewsletter: false,
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type == 'checkbox' ? e.target.checked : e.target.value

    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  };

  const handleSubmit = (event) => {
    console.log(`Login by user ${form.email}.`);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input name='receiveNewsletter' type='checkbox' checked={form.receiveNewsletter} onChange={handleChange}/>
        </label>
        <label>
          Email:
          <input name='email' type="text" value={form.email} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {form.receiveNewsletter}
    </>
  );
}

export default LoginForm;