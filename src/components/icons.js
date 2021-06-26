import React from 'react';

function Icons(props) {
  const { currentCategory } = props;
  return (
    <section>
      <i className="fab fa-css3"></i>
      <i className="fab fa-js"></i>
      <i className="fab fa-html5"></i>
      <i className="fab fa-aws"></i>
      <i className="fab fa-git-alt"></i>
      <i className="fab fa-node"></i>
      <i className="fab fa-npm"></i>
    </section>
  );
}
export default Icons;

