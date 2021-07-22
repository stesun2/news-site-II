import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

class ArticleList extends Component {

  getAllTeasers = (articles) => {
    return articles.map((article, idx) => {
      return <ArticleTeaser key={idx} id={idx} created_date={article.created_date} title={article.title} handleTitleClick={this.props.handleTitleClick} />
    })
  }
  render() {
    return (
      <div>
        {
          this.getAllTeasers(this.props.articles)
        }
      </div>
    );
  }
}

export default ArticleList;
