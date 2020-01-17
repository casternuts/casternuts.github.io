import * as React from 'react'
import styled from '@emotion/styled'
import Container from './Container'

const StyledLayoutMain = styled.main`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
