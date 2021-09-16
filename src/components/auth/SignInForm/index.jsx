import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../../Button';
import {
  Form,
  FormGroup,
  FieldLabel,
  TextInput,
  ErrorMessage,
} from '../../Form';
import { BottomFields, AltLink } from './SignInStyles';

const SignInForm = ({ signup, submitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submit = ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) => {
    // Validate password confirmation
    if (signup && password !== confirmPassword) {
      return setError(
        'confirmPassword',
        { type: 'value', message: 'Passwords do not match' },
        { shouldFocus: true }
      );
    }

    if (signup) {
      const displayName = `${firstName} ${lastName}`;
      submitHandler(displayName, email, password);
      return;
    }

    submitHandler(email, password);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <h2>{!signup ? 'Sign In' : 'Sign Up'}</h2>

      {signup && (
        <>
          <FormGroup>
            <FieldLabel htmlFor='confirmPassword'>First Name:</FieldLabel>
            <TextInput
              type='text'
              id='firstName'
              {...register('firstName', {
                required: 'First name is required',
              })}
            />
            {errors.lastName && (
              <ErrorMessage>{errors.lastName.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FieldLabel htmlFor='confirmPassword'>Last Name:</FieldLabel>
            <TextInput
              type='text'
              id='lastName'
              {...register('lastName', {
                required: 'Last name is required',
              })}
            />
            {errors.lastName && (
              <ErrorMessage>{errors.lastName.message}</ErrorMessage>
            )}
          </FormGroup>
        </>
      )}

      <FormGroup>
        <FieldLabel htmlFor='email'>Email:</FieldLabel>
        <TextInput
          type='email'
          id='email'
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <FieldLabel htmlFor='password'>Password:</FieldLabel>
        <TextInput
          type='password'
          id='password'
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </FormGroup>

      {signup && (
        <FormGroup>
          <FieldLabel htmlFor='confirmPassword'>Confirm Password:</FieldLabel>
          <TextInput
            type='password'
            id='confirmPassword'
            {...register('confirmPassword', {
              required: 'Password confirmation is required',
            })}
          />
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          )}
        </FormGroup>
      )}

      <BottomFields>
        <Button type='submit' solid>
          {!signup ? 'Sign In' : 'Sign Up'}
        </Button>
        <AltLink>
          {!signup && <Link to='/signup'>Need an account? Sign up here.</Link>}
          {signup && <Link to='/signin'>Have an account? Sign in here.</Link>}
        </AltLink>
      </BottomFields>
    </Form>
  );
};

export default SignInForm;
