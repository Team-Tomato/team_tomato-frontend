import React from 'react';
import NavbarT from '../common-components/Navbar';
import Cards from './Cards';
import Footer from '../common-components/Footer';

class SolutionPage extends React.Component {    
    render(){
        return(
            <div>
                <NavbarT />
                <h1 class="heading">Projects</h1>
                <Cards />
                <Footer />
            </div>
        );
    }
}

export default SolutionPage;