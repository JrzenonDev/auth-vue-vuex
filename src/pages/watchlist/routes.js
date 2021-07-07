export default [
  {
    name: 'watchlist',
    path: '/watchlist',
    component: () => import(/* webpackChunkName: "whitchlist" */ './Watchlist')
  }
]
