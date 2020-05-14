import React from 'react';
import './App.css';
import HomePage from "./HomePage";
import FooterBar from "./components/footer/FooterBar";
import LandingPage from './components/landingpage/LandingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/home" component={HomePage} exact />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div >
    </BrowserRouter>
  );
}
export default App;





// <div className="demo-big-content">
//     <Layout>
//         <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">AudioMind</Link>} scroll>
//             <Navigation>
//                   <Switch>
//                       <Route path="/home" component={HomePage} exact />
//                       <Route path="/" component={LandingPage}  />
//                   </Switch>
//             </Navigation>
//         </Header>

//         <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
//             <Navigation>
//                 <Link to="/">Sign-Up </Link>
//                 <Link to="/">Log-In</Link>
               
//             </Navigation>
//         </Drawer>
//         <Content>
//           <div className="page-content"/>
//           <Main/>
//         </Content>
//     </Layout>
// </div>