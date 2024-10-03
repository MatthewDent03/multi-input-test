import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const LoginForm = () => {

  const [form, setForm] = useState({
    email: '',
    username: '',
    numMonths: 0,
    insurance: false,
    receiveNewsletter: false,
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const email = e.target.email;
    const numMonths = e.target.numMonths;
    const insurance = e.target.insurance;
    const value = e.target.type == 'checkbox' ? e.target.checked : e.target.value

    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
      [email]: value,
      [numMonths]: value,
      [insurance]: value
    }))
  };

  const handleSubmit = (event) => {
    console.log(`Login by user ${form.email}.`);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label>
          <input name='receiveNewsletter' type='checkbox' checked={form.receiveNewsletter} onChange={handleChange}/>
        </label> */}
        <label>
          Username:
          <input name='name' type="text" value={form.name} onChange={handleChange} />
        </label>
        <td></td>
        <label>
          Email:
          <input name='email' type="text" value={form.email} onChange={handleChange} />
        </label>
        <td></td>
        <label>
          Number of months:
          <input name='numMonths' type="number" value={form.numMonths} onChange={handleChange} />
        </label>
        <td></td>
        <label>
          Insurance:
          <input name='insurance' type="checkbox" value={form.insurance} checked={form.insruance} onChange={handleChange} />
        </label>
        <td></td>
        <input type="submit" value="Submit" />
      </form>
      {form.receiveNewsletter}
    </>
  );
}

export default LoginForm;