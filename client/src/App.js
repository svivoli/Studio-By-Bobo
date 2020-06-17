import React from 'react';
import ReactDOM from 'react-dom';
import Sider from './components/Sider';
import './App.css';

function App() {
  return (
    <div>
      <Sider className="sider" />
    </div>
  );
}

ReactDOM.render(<Sider />, document.getElementById('root'));

export default App;
