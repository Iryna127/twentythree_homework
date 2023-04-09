import useFetchHeroes from '../hooks/useFetchHerous';
import HeroList from './heroList';
import { useState } from 'react';

const CustomHookHerous = () => {
  let [pageNumber, setPageNumber] = useState(1);

  const { data, loading, nextPageUrl, prevPageUrl } = useFetchHeroes(`character/?page=${pageNumber}`);
 

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);

  };
  const handlePrevPage = () => setPageNumber(pageNumber - 1);
  return (
    <>
      <div>{loading ? <p>loading...</p> : <HeroList heroList={data} />}</div>
      <div className='buttons'>
        <button onClick={handlePrevPage} disabled={prevPageUrl == null}>
          prev
        </button>
        <button onClick={handleNextPage}  disabled={nextPageUrl == null}>next</button>
      </div>
    </>
  );
};
export default CustomHookHerous;
