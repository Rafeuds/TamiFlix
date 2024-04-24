import React, { useState } from 'react';
import '../Styles/Hearth.css'


/*Componente que verifica se o episodio do card está 
marcado como favorito */ 

interface Hearth_Props {
    filled: boolean
}

const Hearth = () => {

    const [liked, setLiked] = useState<boolean>(); // Estado inicial definido pelo valor de 'filled'
    
    const toggleLike = () => {
        setLiked(!liked); // Alternar entre true e false
      };
      
    var likedClass = liked ? 'like-yes' : 'like-no'

    return (
        <div className={ `${likedClass}`}  onClick={toggleLike}>
        </div>
        
    );
  };
  
   export default Hearth;