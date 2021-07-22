import React, { Component } from 'react';

class Article extends Component {
  render() {
    const { title, created_date: createdDate, abstract, byline } = this.props;
    return (
      <div>
        <h1>{ title }</h1>
        <p>{ createdDate }</p>
        { byline && <h2>{ byline }</h2> }
        { this.props.multimedia[0] && <img alt={ title } src={ this.props.multimedia[0].url }/> }
        <p>{ abstract }</p>
      </div>
    )
  }
}

export default Article;


// Functional solution:
// function Article({ title, created_date: createdDate, abstract, byline, image }) {
//   return (
//     <div>
//       <h1>{ title }</h1>
//       <p>{ createdDate }</p>
//       { byline && <h2>{byline}</h2> }
//       { image && <img src={image} /> }
//       <p>{ abstract }</p>
//     </div>
//   );
// }
