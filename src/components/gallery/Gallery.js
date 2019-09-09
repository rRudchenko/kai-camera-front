import React from 'react'
import { Shots } from './Shots'
import { Tabs } from './Tabs'
import { MainContainer, NoPhoto } from './styles'
import config from '../../../config'

const renderHelper = (data) => {
  console.log('render helper', data)
  if (!data && !data.allImageSharp) {
    return <NoPhoto>{config.noPhotoMessage}</NoPhoto>
  }
  return (
    <Shots
      data={data.allImageSharp.edges.map(image => ({
        fluid: image.node.fluid,
      }))}
    />
  )
}
export default ({ data }) => (
  <MainContainer>
    <Tabs />
    {renderHelper(data)}
  </MainContainer>
)
