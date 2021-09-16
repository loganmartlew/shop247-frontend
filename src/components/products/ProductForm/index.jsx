import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Button';
import {
  Form,
  FormGroup,
  FieldLabel,
  TextInput,
  LargeTextInput,
  ErrorMessage,
} from '../../Form';
import submitNewProduct from '../../../util/submitNewProduct';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotification } from '../../../contexts/NotificationContext';

const ProductForm = () => {
  const { user } = useAuth();
  const { addError, addSuccess } = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [images, setImages] = useState([]);
  const imageRef = useRef(null);

  const addImage = e => {
    e.preventDefault();
    const url = imageRef.current.value;

    if (!url) return;

    setImages(prev => [...prev, { url }]);
    imageRef.current.value = '';
  };

  const submit = async ({ name, description, price: priceString }) => {
    const price = parseInt(parseFloat(priceString) * 100);

    if (images.length < 1) return;

    const data = { name, description, price, images, sellerId: user.uid };

    try {
      console.log(process.env.REACT_APP_API_KEY);
      await submitNewProduct(data, user);
      addSuccess('Product listed!');
    } catch (_) {
      addError('Product is invalid');
    }
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <h3>General Info</h3>

      <FormGroup>
        <FieldLabel htmlFor='name'>Product Name:</FieldLabel>
        <TextInput
          type='text'
          id='name'
          {...register('name', { required: 'Product name is required' })}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </FormGroup>

      <FormGroup>
        <FieldLabel htmlFor='description'>Description:</FieldLabel>
        <LargeTextInput
          id='description'
          {...register('description', { required: 'Description is required' })}
        ></LargeTextInput>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
      </FormGroup>

      <FormGroup>
        <FieldLabel htmlFor='price'>Price (NZD):</FieldLabel>
        <TextInput
          type='number'
          id='price'
          step='.01'
          {...register('price', {
            required: 'Price is required',
            min: {
              value: 0.5,
              message: 'Price must be at least 50 cents',
            },
          })}
        />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
      </FormGroup>

      <FormGroup>
        <h3>Photos</h3>
        <Button size='sm' onClick={() => setImages([])}>
          Clear Photos
        </Button>
        <br />
        <br />

        <FormGroup>
          <FieldLabel htmlFor='imageUrl'>Photo URL:</FieldLabel>
          <TextInput type='text' id='imageUrl' ref={imageRef} />
          <ErrorMessage>
            {images.length < 1 && 'At least 1 photo is required'}
          </ErrorMessage>
        </FormGroup>
        <br />
        <Button size='sm' solid onClick={addImage}>
          Add Photo
        </Button>
        <br />
        <br />

        <label>Photos:</label>
        {images.length <= 0 && <p>No Photos Added</p>}
        {images.map((image, i) => (
          <p key={i}>{image.url}</p>
        ))}
      </FormGroup>
      <Button type='submit' solid>
        Submit
      </Button>
    </Form>
  );
};

export default ProductForm;
