import React, { createRef } from 'react';
import './landingPage.styles.scss';
import LandingPageNavBar from 'components/NavBars/LandingPage/landingPageNavBar.component';
import Footer from 'components/Footer/footer.component';

function LandingPage({ ...rest }) {
  return (
    <div>
      <LandingPageNavBar color="primary" {...rest} />
      <div className="landing-page-wrapper">
        <div className="landing-page-full-page">
          <p>Routes PlaceHolder</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
