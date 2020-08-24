const React = require('react');

const DefaultLayout = require('./layout/default');
const Header = require('./components/header');

function Search(props) {
  return (
    <DefaultLayout title={props.title}>
      <Header />
      <div>{props.text}</div>
    </DefaultLayout>
  );
}

module.exports = Search;
