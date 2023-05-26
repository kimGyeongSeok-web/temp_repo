import { Global, css } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");

      *,
      *:after,
      *:before {
        box-sizing: border-box;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
          Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
          "Noto Sans KR", "Malgun Gothic", sans-serif;
        font-weight: 300;
        padding: 0;
        margin: 0;
      }

      :root {
        --business-color: rgba(41, 77, 97, 100);
        --business-sub-color: rgba(101, 165, 185, 100);
        --basic-white-color: rgba(255, 255, 255, 100);
        --basic-red-color: rgba(250, 8, 95, 100);
        --basic-black-color: rgba(58, 58, 58, 100);
        --basic-yellow-color: rgba(250, 210, 100, 100);
        --basic-blue-color: rgba(66, 100, 251, 100);

        --primary-gradient-color: rgba();
        --positive-gradient-color: rgba();
        --negative-gradient-color: rgba();
      }

      :is(html, body) {
        width: 100%;
        height: auto;
        padding: 0;
        margin: 0;
        -ms-overflow-style: none;

        ::-webkit-scrollbar {
          scroll-behavior: smooth;
          display: none;
        }
      }

      :is(ul, li) {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      input {
        margin: 0;

        :focus {
          outline: none;
        }
      }
    `}
  />
);

export type CSS_TYPE = {
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  textAlign?: any;
  fontSize?: string;
  fontWeight?: string;
  position?: any;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  padding?: string | number;
  margin?: string | number;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  backgroundColor?: string;
  background?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  border?: string;
  borderColor?: string;
  borderTop?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderRadius?: string;
  borderTopLeftRadius?: string | number;
  borderTopRightRadius?: string | number;
  borderBottomLeftRadius?: string | number;
  borderBottomRightRadius?: string | number;
  transition?: string;
  transform?: string;
  opacity?: string | number;
  hovercolor?: string;
  hoveropacity?: string | number;
  hoverbackground?: string;
  cursor?: string;
  zIndex?: string | number;
  animation?: string;
  animationDelay?: string;
  animationDuration?: string | number;
  rotate?: string;

  /* Etc */
  isActive?: boolean;
  RadioChecked?: boolean;
}