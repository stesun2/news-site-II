// import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

function ArticlePage(props) {
  var article = News[props.match.params.articleID - 1];
  console.log(props.match.params.articleID) 

  return(
    <div>
        <Article {...article}></Article>
    </div>
  );
}

// class ArticlePage extends Component {
//   render() {
//     var article = News[this.props.match.params.articleID - 1];
//     console.log(this.props.match.params.articleID) 

//     return (
//       <div>
//         <Article {...article}></Article>
//       </div>
//     );
//   }
// }

export default ArticlePage;
