import React, { useState, useRef } from "react";
import {
  FormColumn,
  FormWrapper,
  FormSection,
  FormRow,
  FormInputRow,
  FormMessage,
  FormTitle,
} from "./FormStyles";
import emailjs from "@emailjs/browser";
import { Container } from "../globalStyles";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const Form = () => {
  const form = useRef();
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Email",
      name: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
      pholder: "Enter your email",
    },
    {
      label: "Product",
      value: product,
      name: "message",
      onChange: (e) => setProduct(e.target.value),
      type: "text",
      pholder: "What product do you interested in?",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(product, email)
    emailjs
      .sendForm(
        "service_482lsfq",
        "template_mdofz1f",
        form.current,
        "9Ti0nKXv17k0CnkO2",
        {
          to_name: "Mass tech",
          message: product,
          Email: email,
        }
      )
      .then(
        (result) => {
          setEmail("");
          // setName("");
          setProduct("");
          setSuccess("Succesfully submitted");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setError("Error");
        }
      )
  };

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Contact us</FormTitle>
            <FormWrapper ref={form} onSubmit={sendEmail}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <TextField
                    required
                    name={el.name}
                    type={el.type}
                    placeholder={el.pholder}
                    value={el.value}
                    onChange={el.onChange}
                    id="outlined-textarea"
                    label={el.label}
                    multiline
                  />
                </FormInputRow>
              ))}
              <Button type="Submit" onClick={sendEmail} sx={{ width: "100%", height: '60px', bgcolor: '#161C36' }} variant="contained">Submit</Button>
            </FormWrapper>

            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
