import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import MainArticlePage from './components/articles-page/MainArticlePage';
import MainSolutionPage from './components/solution-page/MainSolutionPage';
import Form from './components/article-submission-form/Form'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/solutions">
          <MainSolutionPage />
        </Route>
        <Route exact path="/articles">
          <MainArticlePage />
        </Route>
        <Route exact path="/admin/add_article">
          <Form />
        </Route>
        <Route>
          <h1>Error 404</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;