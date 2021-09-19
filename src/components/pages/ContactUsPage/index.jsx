import {Form, Title, Input, MainInput} from './ContactUsPageStyles'

const ContactUsPage = () => {

    return (
    <Form>
        <Title>Contact Us</Title>
        <Input type='text' placeholder='Name'/>
        <Input type='text' placeholder='Email'/>
        <Input type='email' placeholder='Main reason for contact'/>
        <MainInput type='text' placeholder='Input the details of your complaint'/>
    </Form>
    );
};

export default ContactUsPage;