import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ] );

  //   return (
  //   <div className='card-columns animate__animated animate__fadeIn'>
  //     {
  //       heroes.map( hero => (
  //           <HeroCard 
  //               key={ hero.id }
  //               { ...hero }
  //           />
  //       ))
  //     }
  //   </div>
  // )
  return (
    <div className="row animate__animated animate__fadeIn">
      {
        heroes.map(hero => (
          <div key={hero.id} className="col-12 col-md-4 mb-4">
            <HeroCard {...hero} />
          </div>
        ))
      }
    </div>
  )
  
}
