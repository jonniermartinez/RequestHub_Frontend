import { useState } from 'react';

import styled from 'styled-components'

function Nav() {
  const [menuItem, setMenuItem] = useState(false);


  function burguerclick() {
    // desplegar menu 
    console.log('me tocates')
    setMenuItem(true)
  }
  function burguerclose() {
    setMenuItem(false)
  }
  return (
    <div>
        <Navcontainer>
          <div className='nav'>
            <h1>Menu</h1>
            <div className='menu'>           
              <a href="">Usuario</a>
              <a href="">Home</a>
              <a href="">PQRS</a>
              <a href="">Princing</a>                          
            </div>

          <div className='burguer'  onClick={()=> burguerclick()} >
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0A3143" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
</svg>
          </div>
        </div>
          
          <div className={`menumobile ${menuItem ? "" : "hidden"}`}>     
          <div className='closeButton' onClick={() => burguerclose()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0A3143" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 10l4 4m0 -4l-4 4" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            </svg>
          </div>      
              <a href="" className='menumobile_item'>Usuario</a>                        
              <a href="" className='menumobile_item'>Home</a>                        
              <a href="" className='menumobile_item'>PQRS</a>                        
              <a href="" className='menumobile_item'>Princing</a>                        
         </div>          
       </Navcontainer>
       <h2>holasdasd</h2>
    </div>
    
  )
}
export default Nav;

const Navcontainer = styled.nav`
h1{
  color: black;
  font-weight: 400;
}

.nav {
padding: 1rem;
background-color:#efefef;
display: flex;
aling-items: center;
justify-content: space-between;
}

a{
  color: black;
  text-decoration: none;
  margin-right: 1rem;
}

.burguer{
  @media(min-width: 768px){
    display: none;
  }
}
.menu{
  @media(max-width: 768px){
    display: none;
  }
}

.menumobile{
  @media(min-width: 768px){
    display: none;
  }
  background-color:#efefef;
  position: absolute;
  top: 0px;
  right: 0;
  width: 250px;
  padding-top: 60px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.menumobile_item { 
  padding: 1rem;

}

.menumobile_item:hover{
  background-color:#CECFC9;

}
.hidden{
  display: none;
}
.closeButton{
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}

`
