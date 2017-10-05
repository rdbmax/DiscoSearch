import React from 'react';
import PropTypes from 'prop-types';
import withConnect from './withConnect';
// import Sidebar from './Sidebar/index.jsx';
// import Home from './Home/index.jsx';
// import Education from './Education/index.jsx';

const App = ({ hasSongs, requestSearch }) => (
  <div>
    test hasSongs { JSON.stringify(hasSongs) }
    <button onClick={() => { requestSearch('sofiane') }}>click</button>
    {/* <Sidebar />
    <Choose>
      <When condition={(page === 'HOME')}>
        <Home />
      </When>
      <When condition={(page === 'EDUCATION')}>
        <Education />
      </When>
    </Choose> */}
  </div>
);

App.propTypes = {
  hasSongs: PropTypes.bool.isRequired,
  requestSearch: PropTypes.func.isRequired,
};

export default withConnect(App);
