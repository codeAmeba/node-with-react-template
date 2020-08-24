const React = require('react');

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body style={globalStyle}>{props.children}</body>
    </html>
  );
}

const globalStyle = {
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
};

module.exports = DefaultLayout;
