import React from 'react';
const wrapper = {
  paddingLeft: '80px',
  paddingRight: '80px',
  paddingTop: '40px',
};
const MainWrapper = ({ children }) => {
  return <div style={wrapper}>{children}</div>;
};

export default MainWrapper;
