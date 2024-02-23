import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search=()=>{
    const [area,setArea]=useState('');
const navigate=useNavigate();
   const myfunction=()=>{
    if(area=='vellalore'||area==='VELLALORE'){
        navigate("/vellalore");
    }
    else if(area=='lgnagar'||area==='LGNAGAR'){
        navigate("/lgnagar");
    }
    console.log(area);

   }
    return(
        <>
        <div class="topnav">
  
  <input type="text" placeholder="Search your area.." onChange={e=>setArea(e.target.value)} />
  <button className='btn' onClick={myfunction}>submit</button>
</div>

        </>
    );
};

export default Search;