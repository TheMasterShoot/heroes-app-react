import React, { useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../../selectors/getHeroById';

export const HeroScreen = () => {

  const navigate = useNavigate();
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroById( heroeId ), [ heroeId] );

  useEffect(() => {
    if (!hero) {
      navigate("*");
    }
  }, [hero, navigate]);

  if (!hero) {
    return null;
  }

  const handleReturn = () => {
    if (window.history.length <= 2) {
      navigate("*");
    } else {
      navigate(-1);
    }
  }

  const {
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters
  } = hero;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={ `../assets/heroes/${ heroeId }.jpg` }
          alt={ superhero }
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div> 

      <div className='col-8 animate__animated animate__fadeIn'>
        <h3> { superhero } </h3>
        <ul className="list-group list-group-flush">
          <li className='list-group-item'> <b> Alter ego: </b> { alter_ego } </li>
          <li className='list-group-item'> <b> Publisher: </b> { publisher } </li>
          <li className='list-group-item'> <b> Alter ego: </b> { alter_ego } </li>
          <li className='list-group-item'> <b> First appearance: </b> { first_appearance } </li>
        </ul>

        <h5> Characters</h5>
        <p> { characters } </p>

        <button className='btn btn-outline-info' onClick={ handleReturn }>
          Return
        </button>
      
      </div>
        
    </div>
  )
}
