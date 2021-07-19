import React from 'react';

function Header(props) {
  const { currentCategory } = props;
  return (
    <section>
      <header className="header">
      <div>
          <a href="#Home">Home</a>
          <a href="#About-Me">About Me</a>
          
          <a href="#My-Work">My Work</a>
          <a href="#Contact">Contact</a>
        </div>
      </header>
    </section>
  );
}
export default Header;