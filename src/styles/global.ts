import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --white: #FFF;
  --background: ##121214;
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
  background: #121214;
}

.container {
  background: #202024;
  margin: 0 auto;
  padding: 0.5rem;
  margin-top: 0.9rem;
  width: 40%;
  border: 2.5px solid #28293F;
  border-radius: 5px;
}

.image-download {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image-download img {
  width: 60%;
  margin-top: 0.5rem;
}


`;