import { useState } from 'react';
import { useParams } from 'react-router';
import { authFetchApi } from '../../../../util/fetchApi';
import { useAuth } from '../../../../contexts/AuthContext';
import { useNotification } from '../../../../contexts/NotificationContext';
import Button from '../../../Button';
import Modal from '../../../Modal';
import TrustRating from '../../../TrustRating';

const RateModal = ({ open, setOpen, refetch }) => {
  const [rating, setRating] = useState(0);

  const { user } = useAuth();
  const { userid } = useParams();

  const { addError, addSuccess } = useNotification();

  const submit = async () => {
    const res = await authFetchApi(
      `/users/${userid}/rate`,
      {
        method: 'POST',
        body: JSON.stringify({ reviewerUid: user.uid, rating }),
      },
      user
    );

    const data = await res.json();

    if (res.status === 201) {
      refetch();
      setOpen(false);
      addSuccess('User rated');
    } else {
      addError(data.message ?? 'An error occurred');
    }
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <h2>Rate User: {rating} stars</h2>
      <TrustRating rating={rating} setRating={setRating} />
      <Button size='sm' onClick={submit}>
        Submit
      </Button>
    </Modal>
  );
};

export default RateModal;
