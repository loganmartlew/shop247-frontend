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

const EditProfilePage = () => {

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
                </Form>
            </PageWrapper>
        </>
    )
}

export default EditProfilePage;