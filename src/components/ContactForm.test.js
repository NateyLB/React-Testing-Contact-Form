import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from "./ContactForm.js";

test("inputs are visible ", ()=>{
    //ARRANGE
    const { getByTestId} = render(<ContactForm />);
    //ASSERT
   getByTestId('firstName');
   getByTestId('lastName');
   getByTestId('email');
   getByTestId('message')


});

test("inputs can be inputted to and form can be submitted", ()=>{
    //ARRANGE
    const {getByText, getByTestId } = render(<ContactForm />);
    
    //ACT
    //grab inputs
   const firstNameInput = getByTestId('firstName');
   const lastNameInput = getByTestId('lastName');
   const emailInput = getByTestId('email');
   const messageInput = getByTestId('message');
    //add text to inputs
   fireEvent.change(firstNameInput, { target: { value: 'Nathan' } });
   fireEvent.change(lastNameInput, { target: { value: 'Howland' } });
   fireEvent.change(emailInput, { target: { value: 'nathan.howland96@gmail.com' } });
   fireEvent.change(messageInput, { target: { value: 'Hi!' } });
   
   //ASSERT
   expect(firstNameInput.value).toBe('Nathan');
   expect(lastNameInput.value).toBe('Howland');
   expect(emailInput.value).toBe('nathan.howland96@gmail.com');
   expect(messageInput.value).toBe('Hi!');
   
fireEvent.click(getByTestId('submit'));
    //check and see if it has submitted
  const formSubmit = getByTestId('Nathan');
  expect(formSubmit).toBeInTheDocument();

});
