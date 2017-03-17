import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
// import StockPortfolio from './components/portfolio/StockPortfolio.vue';
// import StockStock from './components/stocks/StockStock.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks },
];
