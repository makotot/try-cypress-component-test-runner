import React, { useRef } from 'react';
import { ScrollSpy } from './ScrollSpy';

const SIZE = 5;

function App({
  pattern = 'largeHeaderAndFooter',
}: {
  pattern?: 'largeHeaderAndFooter' | 'shortLastSection';
}) {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <div className="App">
      <header style={{ height: '500px' }}>header</header>
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
                    height:
                      pattern === 'shortLastSection' && i === SIZE - 1
                        ? '100px'
                        : '500px',
                    backgroundColor: `#${i}${i}${i}`,
                    color: '#fff',
                    fontSize: '2rem',
                  }}>
                  {i}
                </div>
              ))}
            </div>
            {pattern === 'largeHeaderAndFooter' && (
              <footer
                style={{
                  height: '500px',
                }}>
                foot
              </footer>
            )}
          </div>
        )}
      </ScrollSpy>
    </div>
  );
}

export default App;
