import { RatingContainer, Star } from './TrustRatingStyling';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

const TrustRating = ({ display, rating, setRating }) => {
  const [hoverSelected, setHoverSelected] = useState(0);

  const handleClick = star => {
    if (display) return;
    if (setRating) setRating(star);
  };

  return (
    <RatingContainer onMouseLeave={() => setHoverSelected(0)}>
      <Star
        display={display}
        selected={rating >= 1}
        onClick={() => handleClick(1)}
        hoverSelected={hoverSelected >= 1}
        onMouseEnter={() => setHoverSelected(1)}
        data-testid='star-1'
      >
        <AiFillStar />
      </Star>
      <Star
        display={display}
        selected={rating >= 2}
        onClick={() => handleClick(2)}
        hoverSelected={hoverSelected >= 2}
        onMouseEnter={() => setHoverSelected(2)}
      >
        <AiFillStar />
      </Star>
      <Star
        display={display}
        selected={rating >= 3}
        onClick={() => handleClick(3)}
        hoverSelected={hoverSelected >= 3}
        onMouseEnter={() => setHoverSelected(3)}
      >
        <AiFillStar />
      </Star>
      <Star
        display={display}
        selected={rating >= 4}
        onClick={() => handleClick(4)}
        hoverSelected={hoverSelected >= 4}
        onMouseEnter={() => setHoverSelected(4)}
      >
        <AiFillStar />
      </Star>
      <Star
        display={display}
        selected={rating >= 5}
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
