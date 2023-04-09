import HeroCard from './heroCard';

const HeroList = (props) => {

  return (
    <div className='hero-list'>
      {props.heroList?.results &&
        props.heroList.results.map((hero, index) => (
          <HeroCard key={`hero-card-${index}`}>
            {hero.id}
            {hero.name}
          </HeroCard>
        ))}      
    </div>
  );
};
export default HeroList;
