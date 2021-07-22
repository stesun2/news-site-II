// import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

// Function
function ArticleList( props ) {
  let articles = props.articles
  const getAllTeasers = (articles) => {
    return articles.map((article, idx) => {
     return(  
     <div>
       <ListGroupItem>
         <ArticleTeaser key={idx} id={idx} created_date={article.created_date} title={article.title} handleTitleClick={props.handleTitleClick} />
       </ListGroupItem>
      </div>
     ); 
    })

  }

  return(
    <div>
       { getAllTeasers(articles) }
    </div>
  );
}

// Class based
// class ArticleList extends Component {
//   getAllTeasers = (articles) => {
//     return articles.map((article, idx) => {
//       return <ArticleTeaser key={idx} id={idx} created_date={article.created_date} title={article.title} handleTitleClick={this.props.handleTitleClick} />
//     })
//   }
//   render() {
//     return (
//       <div>
//         {
//           this.getAllTeasers(this.props.articles)
//         }
//       </div>
//     );
//   }
// }

export default ArticleList;
