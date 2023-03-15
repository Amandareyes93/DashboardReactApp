import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App.js' ;
import { ContextProvider } from './contexts/ContextProvider';





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world!</h1>);

ReactDOM.render(
<ContextProvider>
<App/>   
</ContextProvider>,
document.getElementById('root'))