# News Site Part II

## Initial Setup

Continuing to be the News Site app, we will focus on creating 1 new component, 2 pages, and a routing system.

1. Before beginning this challenge, copy over `src/components/Article`, `src/Components/ArticleTeaser`, and `src/Components/Nav` from the `news-site` challenge from Day 4 into the `src/components` directory of this project.

2. If you happened to change the name of the `Nav.js` (`src/components/Nav/Nav.js`) to a different name, you will need to update `App.js` and `Nav.test.js` in this new repo.

3. Re-add `react-bootstrap` and `bootstrap` to this codebase using the instructions [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap)
 
4. At the moment, the `<a>` links in your `ArticleTeaser` component append a hash/`#` to the URL when they're clicked. This can cause a problem when handling route/url changes - let's modify the `onClick` event handler to alleviate this changing `onClick` to this:
```javascript
onClick={(event) => {
 event.preventDefault();
 this.props.handleTitleClick(this.props.id)
}}
```
`event.preventDefault()` is the key line here - this will prevent the default behavior of the `<a>` tag. This default behavior is what's responsible for adding this hash to the URL.


## Component I: ArticleList

Like the components we created yesterday, the `ArticleList` component has been stubbed out - your mission is to create the content that the `component` should `render`, and handle the `props` that are being passed in appropriately. 

The `ArticleList` `component` will receive an array of articles - it should `map` this array into an array of `ArticleTeaser`s. The `ArticleTeaser` `component` requires a `handleTitleClick` `pro`p - the value that you provide for this should be the `handleTitleClick` `prop` that's passed into the `ArticleList` `component`. In other words, `ArticleList` will receive `this.props.handleTitleClick` - you'll want to pass `this.props.handleTitleClick` as the value of the `handleTitleClick` `prop` on the `ArticleTeaser` components you create.

Props:
1. `articles` - an array of article objects
2. `handleTitleClick` - a function



## React Router

React Router is a popular open source library that's used to control paging in a single page app. Using this library, you can load `component`s based on URL paths. For example, you can configure React Router to load ComponentX when the URL `http://localhost:3000/componentx` is requested. Using React Router JSX, this would look something like this:

```javascript
import ComponentX from './src/components/ComponentX/ComponentX.js';

<BrowserRouter>
 <Route path="/componentx" component={ComponentX}
</BrowserRouter>
```

To utilize React Router, install and save the `react-router-dom` library using `npm`:

`npm install react-router-dom --save`

You'll want to import `BrowserRouter` and `Route` from `react-router-dom` into `App.js` - this is where your route configuration should be defined.

In our app, we will have two routes:
```javascript
<Route exact path="/" component={HomePage} />
<Route exact path="/article/:articleID" component={ArticlePage} />
```
The `HomePage` `component` (found in `src/pages/HomepPag`e) is about 60% complete - once you've defined your route - and assuming you successfully built the `ArticleList` `component` in the step above - you should see a full list of articles at the "/" path (`http://localhost:3000/`)

You also should be able to see the `ArticlePage` `component` (`src/pages/ArticlePage`) by navigating to `http://localhost:3000/article/1`

If you are seeing the behavior above, you may continue to the next step.

## HomePage Component

As mentioned above, the `HomePage` is largely complete - it simply renders the `ArticleList` `component`. The one piece of functionality you need to complete is the `handleTitleClick` function being passed into the `ArticleList` `component`. Ultimately, this function should trigger a page change. React Router is automatically passing a series of routing-related props to the `HomePage` `component` - one of these is `this.props.history`. You can trigger a page change by calling `this.props.history.push(newurl)`. You will also need to construct the argument being passed into `this.props.history.push()` - ultimately, this url should look something like this:

`this.props.history.push(/article/${articleID})`

`articleID` corresponds to the index of an item in the articles array, and is a parameter already being passed into this function.

## ArticlePage Component

The `ArticlePage` `component` should render the `Article` `component`, and provide the necessary props to this `component`. If you remember, `Article` accepts a variety of props from a single article object in `src/data/News.json` array. In order to determine the array object to use, you can once again use some React Router functionality that's automatically being passed into this - the `ArticlePage` `component`. The index you'll want to target within the articles array will be contained within `this.props.match.query.articleID` - this variable corresponds to [ARTICLEID] in this URL: `http://localhost:3000/article/[ARTICLEID]`
