import axios from 'axios';

export const loadData = ({commit}) => {
  axios.get('https://vuejs-stock-trader-6aa84.firebaseio.com/data.json')
    .then((data) => {
      if (data) {
        const { stocks, funds, stockPortfolio } = data.data;

        const portfolio = { stockPortfolio, funds };

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    })
}
