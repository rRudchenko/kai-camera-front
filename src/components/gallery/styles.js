import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

export const MainContainer = styled.section`
  background: #fafafa;
  width: 100%;
`

export const TabsContainer = styled.section`
  max-width: 935px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 10px;
  border-bottom: 1px solid #efefef;
`

export const TabItem = styled.span`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  text-decoration: none;
  cursor: pointer;
  height: 35px;
  margin-left: 50px;
  box-sizing: border-box;
  color: #4e4e4e;
  opacity: 0.6;
  border-bottom: 1px solid transparent;
  transition: color 0.5s;
  &:hover {
    color: #f9c806;
    /* font-weight: 500; */
    border-bottom: 1px solid #f9c806;
  }
  &:first-child {
    margin-left: 10px;
  }
  @media (max-width: 546px) {
    margin-left: 25px;
  }
`

export const ShotsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 935px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`

export const ShotContainer = styled.div`
  width: 282px;
  height: 282px;
  padding: 14px;
  cursor: pointer;
  object-fit: contain;
  object-position: 50% 50%;
`

export const ShotImage = styled(Img)`
  margin: auto;
  width: auto;
  height: 100%;
  max-width: ${props => props.fluid.presentationWidth};
  max-height: ${props => props.fluid.presentationHeight};
  min-width: 70%;
  min-height: 100%;
`

export const LightboxContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: auto;
  width: 100%;
  height: 100%;
`

export const LightboxModal = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`

export const Arrow = styled.div`
  display: ${props => (props.showLightBox ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
  width: 15%;
  height: 100%;
  visibility: ${props => (props.disabled === true ? 'hidden' : 'visible')};
  img {
    min-width: 30px;
    max-width: 50px;
  }
`

export const Close = styled.div`
  color: #f9c806;
  width: 20px;
  height: auto;
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 1900;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MaterialIcon = styled.div`
  font-family: 'Material Icons', sans-serif;
  color: #f9c806;
  font-size: 60px;
`
export const NoPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
`
