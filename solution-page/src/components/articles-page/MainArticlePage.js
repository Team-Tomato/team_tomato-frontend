import React from 'react';
import NavbarT from '../common-components/Navbar';
import Footer from '../common-components/Footer';
import ArticleTable from './ArticleTable';

class ArticlePage extends React.Component {
    render(){
        return(
            <div>
                <NavbarT />
                <ArticleTable />
                <Footer />
            </div>
        );
    }
}

export default ArticlePage;