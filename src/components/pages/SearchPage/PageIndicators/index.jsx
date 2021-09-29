import { useHistory } from 'react-router-dom';
import populateArrayLength from '../../../../util/populateArrayLength';
import Indicator from './Indicator';
import { IndicatorContainer, IndicatorButton } from './PageIndicatorsStyles';

const PageIndicators = ({ pages }) => {
  const pageArr = populateArrayLength(new Array(pages.total));

  const history = useHistory();

  const getPath = modifier => {
    const query = new URLSearchParams(history.location.search);
    query.set('page', pages.page + modifier);

    const path = `${history.location.pathname}?${query.toString()}`;

    return path;
  };

  return (
    <IndicatorContainer>
      <IndicatorButton
        disabled={pages.page === 1}
        onClick={() => history.push(getPath(-1))}
      >
        &lt;
      </IndicatorButton>

      {pageArr.map((_, i) => (
        <Indicator page={i + 1} active={pages.page === i + 1} key={i} />
      ))}

      <IndicatorButton
        disabled={pages.page === pages.total}
        onClick={() => history.push(getPath(1))}
      >
        &gt;
      </IndicatorButton>
    </IndicatorContainer>
  );
};

export default PageIndicators;
