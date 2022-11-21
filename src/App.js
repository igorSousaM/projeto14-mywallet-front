import { createGlobalStyle } from "styled-components";
import IncomePage from "./Pages/IncomePage/IncomePage";
import OutcomePage from "./Pages/OutcomePage/OutcomePage";
import FinancesPage from "./Pages/FinancesPage/FinancesPage";
import SignInPage from "./Pages/SingInPage/SignInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import UpdateOutcomePage from "./Pages/UpdateOutcome/UpdateOutcomePage";
import UpdateIncomePage from "./Pages/UpdateIncome/UpdateIncomePage";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage setUserData={setUserData} />} />
        <Route
          path="/finances"
          element={<FinancesPage userData={userData} />}
        />
        <Route path="/income" element={<IncomePage userData={userData} />} />
        <Route path="/outcome" element={<OutcomePage userData={userData} />} />
        <Route
          path="/updateOutcome"
          element={<UpdateOutcomePage userData={userData} />}
        />
        <Route
          path="/updateIncome"
          element={<UpdateIncomePage userData={userData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

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
/* HTML5 display-role reset for older browsers */
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

box-sizing:border-box;
`;
