import React from 'react';
import NavbarT from '../common-components/Navbar';
import Footer from '../common-components/Footer';
import ArticleTable from './ArticleTable';

<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9P1N4S2307"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9P1N4S2307');
</script>
</head>

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