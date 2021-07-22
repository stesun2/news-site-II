import React, { useState } from 'react';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ArticlePage from './pages/ArticlePage';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";



const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

// Functional component App
function App()  {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [navItemsData, setNavItemsData] = useState(navItems);
  return (
    <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
        <StyledApp>
            <button onClick={() => themeToggler()}>Change Theme</button>
            <AppNav navItems={navItemsData} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
            <Router>
              <div>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/articles/:articleID' component={ArticlePage} />
              </div>
            </Router>
        </StyledApp>
    </ThemeProvider>

  );
}

export default App;

// Class Based
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       navItems: navItems,
 
//     }
//   }

//   render() {
//     const { navItems } = this.state

//     return (
//       <div>
//         <AppNav navItems={navItems} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
//         <Router>
//           <div>
//             <Route exact path='/' component={HomePage} />
//             <Route exact path='/articles/:articleID' component={ArticlePage} />
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

