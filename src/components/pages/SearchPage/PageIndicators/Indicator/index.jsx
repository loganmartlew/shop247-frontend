import { Link } from 'react-router-dom';

const Indicator = ({ page, active }) => {
  return (
    <>
      {active ? (
        <span>{page}</span>
      ) : (
        <span>
          <Link to=''>{page}</Link>
        </span>
      )}
    </>
  );
};

export default Indicator;
