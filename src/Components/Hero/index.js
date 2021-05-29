import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroTitle, HeroImg, HeroInfo} from './HeroElements';

const Hero = () => {

  return (
    <>
      <Navbar/>
        <HeroContainer>
        <HeroTitle>
          <h1>find your new <br/>
              modern appartment
          </h1>
          
        </HeroTitle>
        <HeroImg>
        
        <HeroInfo>
        </HeroInfo>
        </HeroImg>
        </HeroContainer>
    </>
  )
}

export default Hero;