import React, { useState, useEffect } from 'react';
import Context from './Context.js';
import Fetcher from './fetch.js';
import Wrapper from './Wrapper.js';
import Observer from './Observer.js';
import Loading from './Loader.js';
import Container from '@material-ui/core/Container';
import './App.scss';

const App = () => {
  const [parasites, setParasites] = useState([]);
  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(1);
  const [element, setElement] = useState(null);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);

  useEffect(() => {
    if (!last) {
      setLoading(true);
      Fetcher(limit, offset).then(({ dados, links }) => {
        const isEnd = links[1].rel.toLowerCase() === 'next';
        if (!isEnd) {
          setLast(true);
          setLoading(false);
          return;
        }
        setTimeout(() => {
          const merged = [...parasites, ...dados];
          setParasites(merged);
          setLoading(false);
        }, 500);
      });
    }
  }, [limit, offset]);

  return (
    <Context.Provider
      value={{
        parasites,
        element,
        loading,
        modifiers: {
          setLimit,
          setOffset,
          setElement,
        },
      }}
    >
      <div className="main">
        <Loading />
        <Container>
          <Wrapper />
          <Observer />
        </Container>
      </div>
    </Context.Provider>
  );
};

export default App;
9;
