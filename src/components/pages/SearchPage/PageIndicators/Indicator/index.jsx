import { Link, useLocation } from 'react-router-dom';

const Indicator = ({ page, active }) => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  query.set('page', page);

  const path = `${location.pathname}?${query.toString()}`;

  return (
    <>
      {active ? (
        <span>{page}</span>
      ) : (
        <span>
          <Link to={path}>{page}</Link>
        </span>
      )}
    </>
  );
};

export default Indicator;
