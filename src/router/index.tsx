import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

const ZZFDiscover = React.lazy(() => import('pages/discover'))
const ZZFRecommend = React.lazy(() =>
  import('pages/discover/child-pages/recommend')
)
const ZZFToplist = React.lazy(() =>
  import('pages/discover/child-pages/toplist')
)
const ZZFSongs = React.lazy(() => import('pages/discover/child-pages/songs'))
const ZZFDjradio = React.lazy(() =>
  import('pages/discover/child-pages/djradio')
)
const ZZFArtist = React.lazy(() => import('pages/discover/child-pages/artist'))
const ZZFAlbum = React.lazy(() => import('pages/discover/child-pages/album'))

const ZZFSongDetail = React.lazy(() => import('pages/player'))
const ZZFFriend = React.lazy(() => import('pages/friend'))
const ZZFMine = React.lazy(() => import('pages/mine'))

const ZZFSearch = React.lazy(() => import('pages/search'))
const ZZFSingle = React.lazy(() => import('pages/search/child-pages/single'))
const ZZFSinger = React.lazy(() => import('pages/search/child-pages/singer'))
const ZZFSearchAlbum = React.lazy(() =>
  import('pages/search/child-pages/album')
)

const ZZFSonglist = React.lazy(() => import('pages/song-detail'))
const ZZFUser = React.lazy(() => import('pages/profile'))

const ZZF404 = React.lazy(() => import('pages/404'))


const Routes = () => {
  const routes = useRoutes([
    { path: '/', element: <Navigate to="/discover" />},
    {
      path: '/discover',
      element: <ZZFDiscover/>,
      children: [
        {
          path: '/discover',
          element: <Navigate to="/discover/recommend" />
        },
        {
          path: '/discover/recommend',
          element: <ZZFRecommend/>
        },
        { path: '/discover/ranking', element: <ZZFToplist/> },
        { path: '/discover/album', element: <ZZFAlbum/> },
        { path: '/discover/djradio', element: <ZZFDjradio/> },
        { path: '/discover/artist', element: <ZZFArtist/> },
        { path: '/discover/songs', element: <ZZFSongs/>},
        { path: '/discover/song', element: <ZZFSongDetail/> },
      ],
    },
    { path: '/mine', element: <ZZFMine />},
    { path: '/friend', element: <ZZFFriend/> },
    {
      path: '/search',
      element: <ZZFSearch/>,
      children: [
        {
          path: '/search',
          element: <Navigate to="/search/single?song=&type=1" />
        },
        { path: '/search/single', element: <ZZFSingle/> },
        { path: '/search/singer', element: <ZZFSinger/> },
        { path: '/search/album/', element: <ZZFSearchAlbum/> },
      ],
    },
    {
      path: '/songlist',
      element: <ZZFSonglist/>,
    },
    {
      path: '/user',
      element: <ZZFUser/>,
    },
    { path: '*' , element:<ZZF404/>}
  ])
  
  return routes
}
export default Routes
