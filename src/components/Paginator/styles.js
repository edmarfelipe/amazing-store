import styled from 'styled-components'

import Variables from 'styles/variables'

export const Container = styled.div`
  align-items: center;
  background-color: ${Variables.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const GroupIcon = styled.div`
  align-items: center;
  display: flex;
`

export const GroupTitle = styled.p`
  display: inline-block;
  font-size: ${Variables.fontSizes.base};
  margin-right: 10px;
`

export const Title = styled.p`
  font-family: ${Variables.fontFamilyBold};
  font-size: ${Variables.fontSizes.lg};
`
