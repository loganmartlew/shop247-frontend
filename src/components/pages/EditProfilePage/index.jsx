import { useState, useRef, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { 
    PageWrapper, 
} from "./EPPStyles";

import {
  Form,
  FormGroup,
  FieldLabel,
  TextInput,
  LargeTextInput,
  ErrorMessage,
} from '../../Form';
import Button from '../../Button';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotification } from '../../../contexts/NotificationContext';

const EditProfilePage = () => {
    const { user } = useAuth();
    const { addError, addSuccess } = useNotification();

    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({

    });

    return(
        <>
            <PageWrapper>
                <Form onSubmit={handleSubmit()}>
                    <h3> Change Account Details </h3>
                    <FormGroup>
                        *** this where ren puts his ting ***
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor='name'>User Name:</FieldLabel>
                        <TextInput
                            type='text'
                            id='name'
                            {...register('name', { required: 'Username is required'})}
                        >
                        </TextInput>
                        <ErrorMessage>{ErrorMessage.name?.message}</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor='socials'>Social Links:</FieldLabel>
                        <TextInput
                            type='text'
                            id='socials'
                            // {...register('socials', { required: 'Socials is required'})}
                        >
                        </TextInput>
                        <ErrorMessage>{ErrorMessage.name?.message}</ErrorMessage>
                    </FormGroup>

                    <Button type='submit' solid>
                        Submit
                    </Button>
                    <Button>
                        <Link to={`/user/${user.uid}`}>Back</Link>
                    </Button>
                </Form>
            </PageWrapper>
        </>
    )
}

export default EditProfilePage;