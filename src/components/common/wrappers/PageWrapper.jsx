import styled from "styled-components";
import { space } from "styled-system";
import { FlexBox } from "../Box";
import themeGet from "@styled-system/theme-get";

const PageWrapper = styled(FlexBox)`
  padding: ${themeGet("space.5")}px;

  ${space};
`;

export { PageWrapper };
