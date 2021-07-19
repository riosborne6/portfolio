import React from 'react';

function Footer(props) {
  const { currentCategory } = props;
  return (
    <section>
      <footer className="footer">
        <a href="https://github.com/riosborne6">github repo</a>
      </footer>
    </section>
  );
}
export default Footer;