import React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from '../components/App';
import "../styles/index.css";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
// ReactDOM.render(<App />, document.getElementById('root'));
