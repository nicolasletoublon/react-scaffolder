import styled from 'styled-components'
import {
  layout,
  space,
  color,
  typography,
  flexbox,
  border,
  position,
  background,
} from 'styled-system'

const Box = styled('div')`
  box-sizing: border-box;

  ${layout};
  ${space};
  ${color};
  ${typography};
  ${flexbox};
  ${border};
  ${position};
  ${background};
`

const FlexBox = styled(Box)`
  display: flex;
`

const Spacer = styled(Box)`
  ${space};
`

export { Box, FlexBox, Spacer }
