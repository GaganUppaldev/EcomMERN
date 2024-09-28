import React from "react";
import ReactDOM from "react-dom/client";
import Main from './Nav.jsx';
import Box2 from './box2.jsx';
import Arival from './arrival.jsx';
import Product from './products.jsx';
import Deal from './deal.jsx';
import History from './history.jsx';
import Pro from './pro.jsx';
import Footer from './footer.jsx';
import './index.css';
import './products.css';
import './images/cart.svg';

const test = ReactDOM.createRoot(document.getElementById("navbar"));
test.render(
    <React.StrictMode>
    <Main />
    </React.StrictMode>
) 

const Box2data = ReactDOM.createRoot(document.getElementById("box2"));
Box2data.render(
  <React.StrictMode>
  <Box2 />
  </React.StrictMode>
)

const arival = ReactDOM.createRoot(document.getElementById("arrivals"));
arival.render(
  <React.StrictMode>
    <Arival />
  </React.StrictMode>
)

const good = ReactDOM.createRoot(document.getElementById("list"));
good.render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>
)

const offer = ReactDOM.createRoot(document.getElementById("deal"));
offer.render(
  <React.StrictMode>
    <Deal />
  </React.StrictMode>
)

const his = ReactDOM.createRoot(document.getElementById("history"));
his.render(
  <React.StrictMode>
    <History />
  </React.StrictMode>
)

const benifits = ReactDOM.createRoot(document.getElementById("pros"));
benifits.render(
  <React.StrictMode>
    <Pro />
  </React.StrictMode>
)

const foot = ReactDOM.createRoot(document.getElementById("footer"));
foot.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)
