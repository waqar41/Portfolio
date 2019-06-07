import React, { Component } from 'react';
import { Layout, Header , Navigation ,Drawer ,Content} from 'react-mdl';
import './App.css';
import Main from './Components/Main';
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';

class AllComponents extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/" >Home </Link>} scroll>
            <Navigation  >
                <Link className="hover-effect" to="/Resume">Resume</Link>
                <Link to="/AboutMe">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="MyPortfolio">
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/AboutMe">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default AllComponents;
