import styled from 'styled-components'

export const MainContainer = styled.section`
  background: #fafafa;
  max-width: 100%;
`

export const FooterContainer = styled.footer`
  padding: 0;
  margin: 0;
  width: 100%;
  background: #f9c806;
`

export const TextContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 935px;
  padding: 20px;
`

export const Cameras = styled.div`
  width: 100%;
  height: 110px;
  background-size: 110px 84px;
  /* margin: 10px; */
  /* background-color: rgba(255, 255, 255, 0.6); */
  background-image: url('/icons/cameranew.png'), url('/icons/cameranew.png'),
    url('/icons/cameranew2.png'), url('/icons/cameranew2.png');
  background-position: 0 0, 55px 20px, 0 40px, 55px 60px;
  background-repeat: repeat-x;
  opacity: 0.4;
`

export const FooterText = styled.p`
  display: inline-block;
  font: 20px/20px 'Roboto', sans-serif;
  color: #fff;
`
