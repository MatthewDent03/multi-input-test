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

    const value = e.target.type == 'checkbox' ? e.target.checked : e.target.value

    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
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
          <input name='username' type="text" value={form.username} onChange={handleChange} />
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
          <input name='insurance' type="checkbox" value={form.insurance} checked={form.insurance} onChange={handleChange} />
        </label>
        <td></td>
        <input type="submit" value="Submit" />
      </form>
      {`Hi, ${form.username}! You have selected a ${form.numMonths} month contract ${form.insurance ? 'with' : 'without'} insurance`}
    </>
  );
}

export default LoginForm;