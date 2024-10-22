import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import '../Styles/Eye.css'
import { useState } from 'react';


const Eye = () => {

    const [watch, setWatch] = useState<boolean>()

    const toggleWatch = () => {
        setWatch(!watch); // Alternar entre true e  false
      };
  
    return (

        watch ? <FaRegEye onClick={toggleWatch} className='watch'/>  : <FaRegEyeSlash onClick={toggleWatch}  className='watch-no'/>
        
    );
  };
  
  export default Eye;