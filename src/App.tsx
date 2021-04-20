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
                    style={{
                      color: currentElementInViewport === i ? '#f00' : '#222',
                    }}>
                    section-{i}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              {new Array(SIZE).fill(0).map((_, i) => (
                <div
                  id={`section-${i}`}
                  key={i}
                  ref={sectionRefs[i]}
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
          </div>
        )}
      </ScrollSpy>
    </div>
  );
}

export default App;
