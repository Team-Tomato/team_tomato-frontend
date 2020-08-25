import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route, Redirect} from 'react-router-dom';
import Form from './components/article-submission-form/Form'
import MainSolutionPage from './components/solutions-page/MainSolutionPage';
import MainArticlePage from './components/articles-page/MainArticlePage';

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
                <Form/>
            </Route>
            <Redirect to="/" />
        </Switch>
        </div>
    );
}

export default App;