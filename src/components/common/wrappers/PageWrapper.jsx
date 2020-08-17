import styled from 'styled-components'
import { space } from 'styled-system'
import themeGet from '@styled-system/theme-get'
import { FlexBox } from '../Box'

const PageWrapper = styled(FlexBox)`
  padding: ${themeGet('space.5')}px;

  ${space};
`

export { PageWrapper }
