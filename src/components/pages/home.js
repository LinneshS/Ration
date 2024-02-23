import React from 'react';
import Search from '../../search'

import Carouse from './Carousel';
const Home=()=>{
    return(
        <div className='home'>
              <div>
           <Search/>
        </div>
        <Carouse/>
        </div>
        
      
    );

};
export default Home;
