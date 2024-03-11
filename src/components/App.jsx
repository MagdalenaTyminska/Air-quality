import React from 'react';
import './App.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Section } from './Section/Section';
import { Pollution } from './Pollution/Pollution';

export const App = () => {
  return (
    <>
      <Searchbar></Searchbar>
      <div>
        <Section title="POLLUTION">
          <Pollution />
        </Section>
        <Section title="WEATHER"></Section>
      </div>
    </>
  );
};

export default App;
