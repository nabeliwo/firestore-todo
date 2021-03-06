import { injectGlobal } from 'styled-components'

export default () => {
  injectGlobal`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
    html {
      font-size: 62.5%;
      line-height: 1.6;
      -webkit-text-size-adjust: 100%;
    }
    body {
      min-height: 100vh;
      word-wrap: break-word;
      font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Hiragino Kaku Gothic ProN', '游ゴシック Medium', meiryo, sans-serif;
    }
    a {
      color: inherit;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    img {
      vertical-align: middle;
      -webkit-touch-callout: none;
    }
    span, i {
      display: inline-block;
      font-style: normal;
    }
    input, button, textarea {
      margin: 0;
      padding: 0;
      outline: none;
      border: none;
      background-color: inherit;
      color: inherit;
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #eee inset;
    }
    button {
      cursor: pointer;
    }
  `
}
