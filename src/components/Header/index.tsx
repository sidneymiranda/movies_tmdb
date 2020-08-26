import React from 'react';

import './styles.css';


interface HeaderProps {
  id?: number;
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;