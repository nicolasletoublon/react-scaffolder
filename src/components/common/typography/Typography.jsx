import styled, { css } from 'styled-components'
import {
  layout,
  space,
  color,
  typography,
  border,
  position,
  background,
} from 'styled-system'

const typographyStyles = css`
  margin: 0;
  line-height: 1;

  ${space};
  ${typography};
  ${color};
  ${background};
  ${position};
  ${border};
  ${layout};
`

const Headline1 = styled('h1')`
  ${typographyStyles};
`

const Headline2 = styled('h2')`
  ${typographyStyles};
`

export { Headline1, Headline2 }
