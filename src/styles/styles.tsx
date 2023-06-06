import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

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
  flex?: string;
  flexDirection?: any;

  /* Etc */
  isActive?: boolean;
  RadioChecked?: boolean;
};

export const ImageContainer = styled(Image)<CSS_TYPE>(
  {
    position: "relative",
  },
  props => ({
    width: props.width ? props.width : "100%",
    height: props.height ? props.height : "100%",
    padding: props.padding ? props.padding : "auto",
    margin: props.margin ? props.margin : "auto"
  })
);

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
        --basic-white-color: rgba(254, 254, 254, 100); // #FEFEFE
        --basic-red-color: rgba(250, 8, 95, 100);
        --basic-black-color: rgba(58, 58, 58, 100); // #3A3A3A
        --basic-yellow-color: rgba(250, 210, 100, 100);
        --basic-sky-blue-color: rgba(20, 180, 199, 100); // #14B4C7
        --basic-blue-color: rgba(66, 100, 251, 100); // #4264FB
        --basic-grey-color: rgba(222, 222, 222, 100); // #DEDEDE
        --basic-grey-2-color: rgba(234, 234, 234, 100); // #EAEAEA

        --business-active-color: rgba(101, 165, 185, 100); // #65A5B9
        --deactive-color: rgba(204, 204, 204, 100); // #CCCCCC
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

export const New = styled.i({

});

export const Button = styled.button<CSS_TYPE>(
  {
    transition: "transform 0.2s ease-in-out",
    appearance: "none",
    backfaceVisibility: "hidden",
    WebkitTransform: "translateZ(0)",
    WebkitFontSmoothing: "subpixel-antialiased",
    cursor: "pointer",

    ":hover": {
      transform: "translate3d(0, 0, 0) translateZ(0) scale(1.1)",
    },

    ":active": {
      transform: "translate3d(0, 0, 0) translateZ(0) scale(0.95)",
    }
  },
  props =>({
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    padding: props.padding ? props.padding : "0.5rem 1.1rem",
    margin: props.margin ? props.margin : "0",
    border: props.border ? props.border : "0",
    backgroundColor: props.backgroundColor ? props.backgroundColor : "transparent",
    color: props.color ? props.color : "",
    borderRadius: props.borderRadius ? props.borderRadius : "12px"
  })
);