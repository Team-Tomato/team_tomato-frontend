import React from 'react';
import Contact from './Contact';
import NavbarT from '../common-components/Navbar';
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