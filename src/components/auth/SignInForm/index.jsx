import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../../Button';
import {
  Form,
  FormGroup,
  FieldLabel,
  TextInput,
  ErrorMessage,
  BottomFields,
  AltLink,
} from './SignInStyles';

const SignInForm = ({ signup, submitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submit = ({ email, password, confirmPassword }) => {
    // Validate password confirmation
    if (signup && password !== confirmPassword) {
      return setError(
        'confirmPassword',
        { type: 'value', message: 'Passwords do not match' },
        { shouldFocus: true }
      );
    }

    submitHandler(email, password);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <h2>Sign In</h2>

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
          Sign In
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
