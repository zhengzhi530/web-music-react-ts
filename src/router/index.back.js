import React from 'react'
import { Redirect } from 'react-router-dom'

// const ZZFDiscover = React.lazy(() => import('pages/discover'))
// const ZZFRecommend = React.lazy(() =>
//   import('pages/discover/child-pages/recommend')
// )
// const ZZFToplist = React.lazy(() =>
//   import('pages/discover/child-pages/toplist')
// )
// const ZZFSongs = React.lazy(() => import('pages/discover/child-pages/songs'))
// const ZZFDjradio = React.lazy(() =>
//   import('pages/discover/child-pages/djradio')
// )
// const ZZFArtist = React.lazy(() => import('pages/discover/child-pages/artist'))
// const ZZFAlbum = React.lazy(() => import('pages/discover/child-pages/album'))

// const ZZFSongDetail = React.lazy(() => import('pages/player'))
// const ZZFFriend = React.lazy(() => import('pages/friend'))
// const ZZFMine = React.lazy(() => import('pages/mine'))

// const ZZFSearch = React.lazy(() => import('pages/search'))
// const ZZFSingle = React.lazy(() => import('pages/search/child-pages/single'))
// const ZZFSinger = React.lazy(() => import('pages/search/child-pages/singer'))
// const ZZFSearchAlbum = React.lazy(() =>
//   import('pages/search/child-pages/album')
// )

// const ZZFSonglist = React.lazy(() => import('pages/song-detail'))
// const ZZFUser = React.lazy(() => import('pages/profile'))

// const ZZF404 = React.lazy(() => import('pages/404'))

import ZZFDiscover from 'pages/discover'
import ZZFRecommend from '../pages/discover/child-pages/recommend'
import ZZFToplist from '../pages/discover/child-pages/toplist'
import ZZFSongs from '../pages/discover/child-pages/songs'
import ZZFDjradio from '../pages/discover/child-pages/djradio'
import ZZFArtist from '../pages/discover/child-pages/artist'
import ZZFAlbum from '../pages/discover/child-pages/album'
import ZZFSongDetail from '../pages/player'

import ZZFFriend from 'pages/friend' 
import ZZFMine from 'pages/mine'


const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/discover" /> },
  {
    path: '/discover',
    component: ZZFDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      { path: '/discover/recommend', component: ZZFRecommend },
      { path: '/discover/ranking', component: ZZFToplist },
      {
        path: '/discover/ranking',
        component: ZZFToplist,
      },
      { path: '/discover/album', component: ZZFAlbum },
      { path: '/discover/djradio', component: ZZFDjradio },
      { path: '/discover/artist', component: ZZFArtist },
      { path: '/discover/songs', component: ZZFSongs },
      { path: '/discover/song', component: ZZFSongDetail },
    ],
  },
  { path: '/mine', component: ZZFMine },
  { path: '/friend', component: ZZFFriend },
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
  // {
  //   component: ZZF404,
  // },
]

export default routes
