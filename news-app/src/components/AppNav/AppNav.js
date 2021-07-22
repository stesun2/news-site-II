// import React, { Component } from 'react';
// import { Collapse, Navbar } from 'reactstrap';

// Functional solution:
function AppNav({ navItems, handleNavClick }) {
  return (
    <nav>
      {navItems.map((navItem, idx) =>
        <a href="#" key={idx} onClick={ () => handleNavClick(navItem.value)} >
          {navItem.label} |
        </a>
      )}
    </nav>
  );
}

export default AppNav;

// Function
// function AppNav(props) {
//   const renderNavItems = () => {
//     let elements = props.navItems.map((item, idx) => {
//       return(
//         <div>
//           <a href="#" key={ idx } onClick={ () => handleNavClick(navItem.value)} >
//             {navItem.label} |
//           </a>
//         </div>
//       );
//     })
//   } 
 

// class AppNav extends Component {
//   render() {
//     const { navItems, handleNavClick } = this.props;

//     return (
//       <nav>
//         {navItems.map((navItem, idx) =>
//           <a href="#" key={ idx } onClick={ () => handleNavClick(navItem.value)} >
//             {navItem.label} |
//           </a>
//         )}
//       </nav>
//     )
//   }
// }


