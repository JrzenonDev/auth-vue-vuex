import services from '@/http'
// import * as types from './mutation-types'

export const ActionFindWatchlist = ({ dispatch }) => (
  services.whatchlist.login().then(res => {
    console.log(res.data)
  })
)
