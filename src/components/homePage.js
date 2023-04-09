import CustomHookHerous from './customHookHeroes';
import CustomHookEpisodes from './customHookEpisodes';
import '../css/homePage.css';

const HomePage = () => {
  return (
    <>
      <div className='main-wrapper'>
        <div className='herous-block'>
          <CustomHookHerous />
        </div>
        <div className='episode-block'>
          <CustomHookEpisodes />
        </div>
      </div>
    </>
  );
};
export default HomePage;
