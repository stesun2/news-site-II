// import React, { Component } from 'react';

// Functional solution:
function Article({ title, created_date: createdDate, abstract, byline, multimedia }) {
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ createdDate }</p>
      { byline && <h2>{byline}</h2> }
      { multimedia[0] && <img src={ multimedia[0].url} /> }
      <p>{ abstract }</p>
    </div>
  );
}

// class Article extends Component {
//   render() {
//     const { title, created_date: createdDate, abstract, byline } = this.props;
//     return (
//       <div>
//         <h1>{ title }</h1>
//         <p>{ createdDate }</p>
//         { byline && <h2>{ byline }</h2> }
//         { this.props.multimedia[0] && <img alt={ title } src={ this.props.multimedia[0].url }/> }
//         <p>{ abstract }</p>
//       </div>
//     )
//   }
// }

export default Article;


