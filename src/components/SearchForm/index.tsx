import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const SearchForm: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  return (
    <section className="form-container-movie">
      <input placeholder={placeholder} {...rest} />
    </section>
  );
};

export default SearchForm;
