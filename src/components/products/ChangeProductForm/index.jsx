import { useState, useRef } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotification } from '../../../contexts/NotificationContext';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import Button from '../../Button';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  FieldLabel,
  TextInput,
  LargeTextInput,
  ErrorMessage,
} from '../../Form';
import formatDisplayPrice from '../../../util/formatDisplayPrice';
//import ChangeProduct from '../../../util/ChangeProduct';

const ProductForm = ({ product }) => {
  const { user } = useAuth();
  const { addError, addSuccess } = useNotification();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [images, setImages] = useState([]);
  // const imageRef = useRef(null);

  // const addImage = e => {
  //   e.preventDefault();
  //   const url = imageRef.current.value;

  //   if (!url) return;

  //   setImages(prev => [...prev, { url }]);
  //   imageRef.current.value = '';
  // };

  const changeItem = async ({ description, price: priceString }) => {
  //   const price = parseInt(parseFloat(priceString) * 100);

  //   // if (images.length < 1) return;

  //   const data = { description, price, sellerId: user.uid };

  //   try {
  //     await ChangeProduct(data, user);
  //     addSuccess('Change Applied!');
  //     history.push('/');
  //   } catch (_) {
  //     addError('Change is invalid');
  //   }
  };

  return (
    // <Form onSubmit={handleSubmit(changeItem)}>
      <Form>
      <h2>General Info</h2>

        <p>Product ID: </p>
        <p><strong>Product Name: </strong></p>
        <p><strong>Product Price: </strong></p>

      {/* <FormGroup>
        <FieldLabel htmlFor='description'>Description:</FieldLabel>
        <LargeTextInput
          id='description'
          {...register('description', { required: 'Description is required' })}
        ></LargeTextInput>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
      </FormGroup> */}

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

      {/* <FormGroup>
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
      </FormGroup> */}
        <Link to={`/user/${user.uid}`}>
            <Button>
                Back
            </Button>
        </Link>
      <Button type='changeItem' solid>
        Submit Changes
      </Button>
    </Form>
  );
};

export default ProductForm;
