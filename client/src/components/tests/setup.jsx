// import { afterEach } from 'vitest'
// import { cleanup } from '@testing-library/react'
// import '@testing-library/jest-dom/vitest'

// // runs a clean after each test case (e.g. clearing jsdom)
// afterEach(() => {
//   cleanup();
// })


import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
// src/setupTests.js
import '@testing-library/jest-dom';


// Mock matchMedia globally for react-slick or any component that relies on it
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
