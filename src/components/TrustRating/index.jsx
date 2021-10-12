import { RatingContainer, Star } from './TrustRatingStyling';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

const TrustRating = ({ display, rating }) => {
  const [selected, setSelected] = useState(rating ?? 0);
  const [hoverSelected, setHoverSelected] = useState(0);

  const handleClick = star => {
    if (display) return;
    setSelected(star);
  };

  return (
    <RatingContainer onMouseLeave={() => setHoverSelected(0)}>
      <Star
        display={display}
        selected={selected >= '1'}
        onClick={() => handleClick(1)}
        hoverSelected={hoverSelected >= 1}
        onMouseEnter={() => setHoverSelected(1)}
      >
        <AiFillStar />
      </Star>
      <Star
        display={display}
        selected={selected >= '2'}
        onClick={() => handleClick(2)}
        hoverSelected={hoverSelected >= 2}
        onMouseEnter={() => setHoverSelected(2)}
      >
        <AiFillStar />
      </Star>
      <Star
        display={display}
        selected={selected >= '3'}
        onClick={() => handleClick(3)}
        hoverSelected={hoverSelected >= 3}
        onMouseEnter={() => setHoverSelected(3)}
      >
        <AiFillStar />
      </Star>
      <Star
        display={display}
        selected={selected >= '4'}
        onClick={() => handleClick(4)}
        hoverSelected={hoverSelected >= 4}
        onMouseEnter={() => setHoverSelected(4)}
      >
        <AiFillStar />
      </Star>
      <Star
        display={display}
        selected={selected >= '5'}
        onClick={() => handleClick(5)}
        hoverSelected={hoverSelected >= 5}
        onMouseEnter={() => setHoverSelected(5)}
      >
        <AiFillStar />
      </Star>
    </RatingContainer>
  );
};

export default TrustRating;
