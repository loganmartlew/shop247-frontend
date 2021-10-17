import { useState, useRef, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchApi } from '../../../util/fetchApi';
import { PageWrapper, Image } from './EPPStyles';
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
  const [img, setImg] = useState(null);
  const [user, setUser] = useState(null);

  const auth = useAuth();
  const { addError, addSuccess } = useNotification();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    fetchApi(`/users/${auth.user.uid}`)
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, [auth]);

  const UpdateAvatarAAng = () => {};

  if (!user) return null;

  return (
    <>
      <PageWrapper>
        <Form onSubmit={handleSubmit(UpdateAvatarAAng)}>
          <h3> Change Account Details </h3>
          <FormGroup>
            <Image src={img} alt='profilepic' />
            <br />
            <input
              type='text'
              placeholder='Enter text'
              onChange={event => setImg(event.target.value)}
            />
            <input type='submit' value='Submit' />
          </FormGroup>
          <FormGroup>
            <FieldLabel htmlFor='name'>User Name:</FieldLabel>
            <TextInput
              type='text'
              id='name'
              {...register('name', { required: 'Username is required' })}
            ></TextInput>
            <ErrorMessage>{ErrorMessage.name?.message}</ErrorMessage>
          </FormGroup>
          <FormGroup>
            <FieldLabel htmlFor='socials'>Social Links:</FieldLabel>
            <TextInput
              type='text'
              id='socials'
              // {...register('socials', { required: 'Socials is required'})}
            ></TextInput>
            <ErrorMessage>{ErrorMessage.socials?.message}</ErrorMessage>
          </FormGroup>

          <Button type='submit' solid>
            Submit
          </Button>
          <Button>
            <Link to={`/user/${auth.user.uid}`}>Back</Link>
          </Button>
        </Form>
      </PageWrapper>
    </>
  );
};

export default EditProfilePage;
