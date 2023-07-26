import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding:0;
  margin: 0;
}

body{
  -webkit-font-smoothing: antialiased;
  color: ${props => props.theme['text-base']};

}

body, input, textarea, button{
    font: 400 1rem "Roboto",sans-serif;
}

`
