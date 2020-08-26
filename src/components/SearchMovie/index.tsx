import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const SearchMovie: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  return (
      <section className="form-container-movie">
        <form>
          <input
            type="text"
            autoComplete="off"
            autoFocus={true}
            {...rest}
          />
        </form>
      </section>
  );
};

export default SearchMovie;
