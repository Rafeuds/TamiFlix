import React, { useState } from 'react';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import '../Styles/Hearth.css'


/* Componente que verifica se o episodio do card está 
marcado como favorito */



const Hearth = () => {

  const [liked, setLiked] = useState<boolean>(); // Estado inicial definido pelo valor de 'filled'

  const toggleLike = () => {
    setLiked(!liked); // Alternar entre true e false
  };

  // var likedClass = liked ? 'like-yes' : 'like-no'

  // return (
  //   <div className={`${likedClass}`} onClick={toggleLike}>
  //   </div>

  // );

  return (
    liked ? <GoHeart onClick={toggleLike} className='like-no'/>  : <GoHeartFill onClick={toggleLike}  className='like'/>
  );
};

export default Hearth;