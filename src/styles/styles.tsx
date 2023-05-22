import { Global, css } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

        *, *:after, *:before{
          box-sizing: border-box;
          font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
            'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
            'Malgun Gothic', sans-serif;
          font-weight: 300;
        }

        :root{
          --business-color: rgba(41, 77, 97, 100);
          --basic-red-color: rgba(250, 8, 95, 100);
          --basic-black-color: rgba(58, 58, 58, 100);
          --basic-yellow-color: rgba(250, 210, 100, 100);
          --basic-blue-color: rgba(66, 100, 251, 100);

          --primary-gradient-color: rgba();
          --positive-gradient-color: rgba();
          --negative-gradient-color: rgba();
        }
    `}
  />
)