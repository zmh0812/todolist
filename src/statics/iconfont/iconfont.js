import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1615288532497'); /* IE9 */
  src: url('./iconfont.eot?t=1615288532497#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1615288532497') format('woff'),
  url('./iconfont.ttf?t=1615288532497') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1615288532497#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;