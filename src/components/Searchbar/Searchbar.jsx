import React from 'react';
import css from './Searchbar.module.css';

export const Searchbar = () => {
  return (
    <>
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <input
            className={css.searchFormInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search city"
          />
          <button type="submit" className={css.searchFormButton}>
            <span className={css.buttonLabel}></span>
          </button>
        </form>
      </header>
    </>
  );
};
