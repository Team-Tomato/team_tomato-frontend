import React from 'react';
import NavbarT from '../common-components/Navbar';
import Cards from './Cards';
import Footer from '../common-components/Footer';

<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9P1N4S2307"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9P1N4S2307');
</script>
</head>

class MainSolutionPage extends React.Component {    
    render(){
        return(
            <div>
                <NavbarT />
                <h1 class="Cards-heading">Projects</h1>
                <Cards />
                <Footer />
            </div>
        );
    }
}

export default MainSolutionPage;