import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState([]);
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });

  
  const onSubmit = event => {
    event.preventDefault();
    const newData={...data};
    setData(newData)
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
          data-testid="firstName"
            name="firstName"
            placeholder="bill"
            ref={register({ required: true })}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            data-testid="lastName"
            name="lastName"
            placeholder="luo"
            ref={register({ required: true })}
            onChange={handleChange}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input data-testid="email" name="email" ref={register({ required: true })} onChange={handleChange} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea data-testid="message" name="message" ref={register({ required: false })} onChange={handleChange} />
        </div>
        {data && (
          <pre data-testid={data.firstName} style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid="submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
