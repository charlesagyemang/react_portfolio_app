import React from 'react';
import './App.css';
import Navbar from './partials/navbar';
import Main from './components/main';
import { Layout, Content } from 'react-mdl';

function App() {
  return (
    <div>
    <div className="demo-big-content">
      <Layout>
        <Navbar />
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
        </Layout>
    </div>
    </div>
  );
}

export default App;
