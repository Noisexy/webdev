import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App'

function BirthdayReminder() {
  return (
    <App/>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BirthdayReminder />
  </React.StrictMode>,

  document.getElementById('root')
)

