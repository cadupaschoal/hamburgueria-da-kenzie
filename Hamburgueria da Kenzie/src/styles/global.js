import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    padding: 0;
    list-style: none;
  }
  :root{
    --color-primary:#27AE60 ;
    --color-primary-50: #93D7AF;
    --color-secundary: #EB5757;

    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;

    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;

    --font-family: 'Inter', sans-serif;

    --weight-regular: 400;
    --weight-semi-bold: 600;
    --weight-bold: 700;

    --font-size-1: 26px;
    --font-size-2: 22px;
    --font-size-3: 18px;
    --font-size-4: 16px; 
    --font-size-5: 14px;
    --font-size-6: 12px;
  }
`;
