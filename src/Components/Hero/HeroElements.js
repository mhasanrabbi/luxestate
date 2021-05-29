import styled from 'styled-components';
import img1 from '../../images/img-1.jpg';

export const HeroContainer = styled.div`
  /* display: flex; */
  /* justify-content: space-around; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 100px);
  height: calc(90vh - 100px);
  margin: 1.5rem auto;
  padding: 10px;
  background: red;
`

export const HeroTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;

  h1 {
    text-transform: capitalize;
    font-size: 4rem;
  }
`

export const HeroImg = styled.div`
  background-image: url(${img1});
  width: 500px;
  z-index: -1;


`

export const HeroInfo = styled.div`
`