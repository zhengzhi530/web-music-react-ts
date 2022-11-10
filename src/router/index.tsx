import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

// const JMDiscover = React.lazy(() => import('pages/discover'))
// const JMRecommend = React.lazy(() =>
//   import('pages/discover/child-pages/recommend')
// )
// const JMToplist = React.lazy(() =>
//   import('pages/discover/child-pages/toplist')
// )
// const JMSongs = React.lazy(() => import('pages/discover/child-pages/songs'))
// const JMDjradio = React.lazy(() =>
//   import('pages/discover/child-pages/djradio')
// )
// const JMArtist = React.lazy(() => import('pages/discover/child-pages/artist'))
// const JMAlbum = React.lazy(() => import('pages/discover/child-pages/album'))

// const JMSongDetail = React.lazy(() => import('pages/player'))
// const JMFriend = React.lazy(() => import('pages/friend'))
// const JMMine = React.lazy(() => import('pages/mine'))

// const JMSearch = React.lazy(() => import('pages/search'))
// const JMSingle = React.lazy(() => import('pages/search/child-pages/single'))
// const JMSinger = React.lazy(() => import('pages/search/child-pages/singer'))
// const JMSearchAlbum = React.lazy(() =>
//   import('pages/search/child-pages/album')
// )

// const ZZFSonglist = React.lazy(() => import('pages/song-detail'))
// const ZZFUser = React.lazy(() => import('pages/profile'))

// const ZZF404 = React.lazy(() => import('pages/404'))

import ZZFDiscover from '../pages/discover'
import ZZFRecommend from '../pages/discover/child-pages/recommend'
import ZZFToplist from '../pages/discover/child-pages/toplist'
import ZZFSongs from '../pages/discover/child-pages/songs'
import ZZFDjradio from '../pages/discover/child-pages/djradio'
import ZZFArtist from '../pages/discover/child-pages/artist'
import ZZFAlbum from '../pages/discover/child-pages/album'
import ZZFSongDetail from '../pages/player'

import ZZFFriend from '../pages/friend'
import ZZFMine from '../pages/mine'
import ZZF404 from '../pages/404'

const Routes = () => {
  const routes = useRoutes([
    { path: '/', element: <Navigate to="/discover/recommend" replace />},
    {
      path: '/discover',
      element: <ZZFDiscover/>,
      children: [
        {
          path: '/discover',
          element: <Navigate to="/discover/recommend" replace />
        },
        { path: '/discover/recommend', element: <ZZFRecommend/> },
        { path: '/discover/ranking', element: <ZZFToplist/> },
        {
          path: '/discover/ranking',
          element: <ZZFToplist/>,
        },
        { path: '/discover/album', element: <ZZFAlbum/> },
        { path: '/discover/djradio', element: <ZZFDjradio/> },
        { path: '/discover/artist', element: <ZZFArtist/> },
        { path: '/discover/songs', element: <ZZFSongs/>},
        { path: '/discover/song', element: <ZZFSongDetail/> },
      ],
    },
    { path: '/mine', element: <ZZFMine />},
    { path: '/friend', element: <ZZFFriend/> },
    // {
    //   path: '/search',
    //   component: ZZFSearch,
    //   routes: [
    //     {
    //       path: '/search',
    //       exact: true,
    //       render: () => <Redirect to="/search/single?song=&type=1" />,
    //     },
    //     { path: '/search/single', component: ZZFSingle },
    //     { path: '/search/singer', component: ZZFSinger },
    //     { path: '/search/album/', component: ZZFSearchAlbum },
    //   ],
    // },
    // {
    //   path: '/songlist',
    //   exact: true,
    //   component: ZZFSonglist,
    // },
    // {
    //   path: '/user',
    //   exact: true,
    //   component: ZZFUser,
    // },
    { path: '*' , element:<ZZF404/>}
  ])
  
  return routes
}
export default Routes
