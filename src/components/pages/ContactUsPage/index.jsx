import { Form, Title, Input, MainInput } from './ContactUsPageStyles';

const ContactUsPage = () => {
  return (
    <Form>
      <Title>Contact Us</Title>
      <label htmlFor='name' hidden>
        Name
      </label>
      <Input type='text' placeholder='Name' id='name' />

      <label htmlFor='email' hidden>
        Email
      </label>
      <Input type='email' placeholder='Email' id='email' />

      <label htmlFor='subject' hidden>
        Subject
      </label>
      <Input type='text' placeholder='Main reason for contact' id='subject' />

      <label htmlFor='message' hidden>
        Message
      </label>
      <MainInput placeholder='Input the details of your message' id='message' />
    </Form>
  );
};

export default ContactUsPage;
