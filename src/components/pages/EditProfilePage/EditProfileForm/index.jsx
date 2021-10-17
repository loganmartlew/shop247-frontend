import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { authFetchApi } from '../../../../util/fetchApi';
import { useAuth } from '../../../../contexts/AuthContext';
import { useNotification } from '../../../../contexts/NotificationContext';
import {
  Form,
  FormGroup,
  FieldLabel,
  TextInput,
  ErrorMessage,
} from '../../../Form';
import { Image } from '../EPPStyles';
import Button from '../../../Button';

const EditProfileForm = ({ user }) => {
  const { addError, addSuccess } = useNotification();

  const auth = useAuth();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      avatar: user.avatar,
      name: user.name,
      location: user.location ?? '',
      facebook: user.social?.facebook ?? '',
      instagram: user.social?.instagram ?? '',
    },
  });

  const submit = async data => {
    const newData = {
      ...data,
      avatar:
        data.avatar ??
        'https://shop247-backend.herokuapp.com/defaultprofile.webp',
    };

    try {
      await authFetchApi(
        `/users/${auth.user.uid}`,
        {
          method: 'PATCH',
          body: JSON.stringify(newData),
        },
        auth.user
      );
      addSuccess('Profile Updated');
      history.push('/profile');
    } catch (err) {
      addError('An Error Occurred');
      history.push('/profile');
    }
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <h3> Change Account Details </h3>

      <Image src={user.avatar} alt='profilepic' />

      <FormGroup>
        <FieldLabel htmlFor='avatar'>Profile Picture URL:</FieldLabel>
        <TextInput type='text' id='avatar' {...register('avatar')} />
      </FormGroup>

      <FormGroup>
        <FieldLabel htmlFor='name'>User Name:</FieldLabel>
        <TextInput
          type='text'
          id='name'
          {...register('name', { required: 'Username is required' })}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </FormGroup>

      <FormGroup>
        <FieldLabel>Location:</FieldLabel>
        <TextInput type='text' id='location' {...register('location')} />
      </FormGroup>

      <FormGroup>
        <FieldLabel htmlFor='socials'>Social Links:</FieldLabel>
        <br />

        <FormGroup>
          <FieldLabel htmlFor='facebook'>Facebook:</FieldLabel>
          <TextInput type='text' id='facebook' {...register('facebook')} />
        </FormGroup>
        <br />

        <FormGroup>
          <FieldLabel htmlFor='instagram'>Instagram:</FieldLabel>
          <TextInput type='text' id='instagram' {...register('instagram')} />
        </FormGroup>
      </FormGroup>

      <Button type='submit' solid>
        Submit
      </Button>
      <Button>
        <Link to={`/profile`}>Back</Link>
      </Button>
    </Form>
  );
};

export default EditProfileForm;
