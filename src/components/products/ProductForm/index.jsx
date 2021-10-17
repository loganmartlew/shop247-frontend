import { useState, useRef, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
import changeProduct from '../../../util/changeProduct';
import removeProduct from '../../../util/removeProduct';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotification } from '../../../contexts/NotificationContext';

const ProductForm = ({ product }) => {
  const { user } = useAuth();
  const { addError, addSuccess } = useNotification();

  const history = useHistory();

  // Convert price from cents to dollars
  const formatProductPrice = product => {
    const formattedProduct = {
      ...product,
      price: product.price / 100,
    };

    return formattedProduct;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: product != null ? formatProductPrice(product) : null,
  });

  const [images, setImages] = useState([]);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!product) return;

    setImages(product.images);
  }, [product]);

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

    if (!product) {
      // adds new product to database
      try {
        await submitNewProduct(data, user);
        addSuccess('Product listed!');
        history.push(`/user/${user.uid}`);
      } catch (_) {
        addError('Product is invalid');
      }
    } else {
      // changes existing product in database
      try {
        await changeProduct(product._id, data, user);
        addSuccess('Product updated');
        history.push(`/user/${user.uid}`);
      } catch (_) {
        addError('Change is invalid');
      }
    }
  };

  const deleteProduct = async () => {
    try {
      const confirm = window.confirm(
        'Are you sure you want to delete this listing?'
      );

      if (!confirm) return;

      await removeProduct(product._id, user);
      addSuccess('Product deleted');
      history.push(`/user/${user.uid}`);
    } catch (_) {
      addError('Failed to delete listing');
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

      {product && (
        <Button>
          <Link to={`/user/${user.uid}`}>Back</Link>
        </Button>
      )}
      {product && <Button onClick={deleteProduct}>Delete</Button>}
    </Form>
  );
};

export default ProductForm;
