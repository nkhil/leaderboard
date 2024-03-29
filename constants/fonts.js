import * as React from 'react'
import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
    /* cyrillic-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjR7_AIxsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjR7_AIVsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjR7_AIJsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjR7_AI5sdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjR7_AI9sdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjR7_AIFsdP3pBms.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIxsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIVsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIJsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI5sdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI9sdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdP3pBms.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYXgKVElMYYaJe8bpLHnCwDKhdzeFaxOedfTDw.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYXgKVElMYYaJe8bpLHnCwDKhdXeFaxOedfTDw.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYXgKVElMYYaJe8bpLHnCwDKhdLeFaxOedfTDw.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYXgKVElMYYaJe8bpLHnCwDKhd7eFaxOedfTDw.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYXgKVElMYYaJe8bpLHnCwDKhd_eFaxOedfTDw.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIxsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIVsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIJsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjSL9AI5sdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjSL9AI9sdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIFsdP3pBms.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIxsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIVsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIJsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjQ76AI5sdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjQ76AI9sdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFsdP3pBms.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIxsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIVsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIJsdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI5sdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI9sdP3pBmtF8A.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdP3pBms.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOX-hpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOVuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSV0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSx0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSt0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSd0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSZ0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSV0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSx0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSt0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSd0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSZ0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSV0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSx0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSt0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSd0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSZ0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
      `}
  />
)
