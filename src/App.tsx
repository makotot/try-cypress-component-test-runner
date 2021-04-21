import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { ScrollSpy } from './ScrollSpy';

const SIZE = 5;

function App() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <ScrollSpy sectionRefs={sectionRefs}>
        {({ currentElementInViewport }) => (
          <div>
            <ul
              data-cy="nav-wrapper"
              style={{
                listStyle: 'none',
                position: 'fixed',
                top: 0,
                right: 0,
                backgroundColor: '#fff',
                padding: '1rem',
              }}>
              {new Array(SIZE).fill(0).map((_, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i}`}
                    data-cy={`nav-item`}
                    className={currentElementInViewport === i ? 'active' : ''}
                    style={{
                      color: currentElementInViewport === i ? '#f00' : '#222',
                    }}>
                    section-{i}
                  </a>
                </li>
              ))}
            </ul>
            <div data-cy="section-wrapper">
              {new Array(SIZE).fill(0).map((_, i) => (
                <div
                  id={`section-${i}`}
                  data-cy={`section-item`}
                  key={i}
                  ref={sectionRefs[i]}
                  className={currentElementInViewport === i ? 'active' : ''}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: i === SIZE - 1 ? '50vh' : '100vh',
                    backgroundColor: `#${i}${i}${i}`,
                    color: '#fff',
                    fontSize: '2rem',
                  }}>
                  {i}
                </div>
              ))}
            </div>
            <footer
              style={{
                height: '100vh',
              }}>
              foot
            </footer>
          </div>
        )}
      </ScrollSpy>
    </div>
  );
}

export default App;
