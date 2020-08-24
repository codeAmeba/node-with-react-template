const React = require('react');
const styled = require('styled-components');

function Header(props) {
  return (
    <header style={headerStyle}>
      <h1>SEARCH</h1>
    </header>
  );
}

const headerStyle = {
  width: '100%',
  height: '50px',
  backgroundColor: 'pink',
};
module.exports = Header;
