import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --white: #FFF;
  --background: #F2F3F5;
  --gray-line: #DCDDE0;
  --text: #666666;
  --text-highlight: #B3B9FF;
  --title: #2e384d;
  --red: #E83F5B;
  --green: #4CD62B;
  --blue: #5965E0;
  --blue-dark: #4953B8;
  --blue-twitter: #2AA9E0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins', sans-serif;
}

body {
  background: var(--background);
}


`;