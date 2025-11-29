import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Online Bookstore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
