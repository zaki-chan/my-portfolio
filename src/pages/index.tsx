import React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from '../components/App';
import "../styles/index.css";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
// ReactDOM.render(<App />, document.getElementById('root'));
