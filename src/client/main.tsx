import './index.css';

// import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client';

import App from './App.tsx';
import Header from './components/Header.tsx';

createRoot(document.getElementById('header')!).render(
  <Header />
);

createRoot(document.getElementById('root')!).render(
  // TODO: enable before deploy
  // <StrictMode>
    <App />
  // </StrictMode>,
)
