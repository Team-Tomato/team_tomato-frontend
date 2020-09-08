import React from 'react';
import Contact from './Contact';
import NavbarT from '../common-components/Navbar';
import Footer from '../common-components/Footer';

class MainContact extends React.Component {
    render(){
        return(
            <div>
                <NavbarT />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default MainContact;