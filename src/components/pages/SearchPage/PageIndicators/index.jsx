import populateArrayLength from '../../../../util/populateArrayLength';
import Indicator from './Indicator';

const PageIndicators = ({ pages }) => {
  const pageArr = populateArrayLength(new Array(pages.total));

  return (
    <div>
      <button>&lt;</button>
      {pageArr.map((_, i) => (
        <Indicator page={i + 1} active={pages.page === i + 1} key={i} />
      ))}
      <button>&gt;</button>
    </div>
  );
};

export default PageIndicators;
