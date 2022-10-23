import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getNewAlbumsAction } from '../../store/actionCreator'

import ThemeHeaderRcm from 'components/theme-header-rcm'
import AlbumCover from 'components/album-cover'
import { NewAlbumWrapper } from './style'
import { Carousel } from 'antd'

export default memo(function NewAlbum() {
  // redux hook
  const dispatch = useDispatch()
  const { newAlbums } = useSelector(
    state => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual
  )

  //  other hook
  const albumRef = useRef()
  // (新碟上架)
  useEffect(() => {
    dispatch(getNewAlbumsAction())
  }, [dispatch])

  /* 轮播图布局思路:
      两个页面轮播: 2page
      在page中添加一个个item
  */
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <div className="content">
        <div className="inner">
          {/* 1.数据方面:为了保证轮播图的每1个页有5条数据:
          对数据进行截取: 在遍历第一页中0-5 第二页5-10数据
          注意:slice(方法不包括截取目标number) 
          2.布局方面:对class name为npage及进行flex布局 */}
          <Carousel dots={false} ref={albumRef}>
            {[0, 1].map(item => {
              return (
                <div key={item} className="page">
                  {/* item * 5, (item+1) * 5   第一次遍历0  5  第二次遍历 5  10  */}
                  {newAlbums && newAlbums.slice(item * 5, (item + 1) * 5).map(cItem => {
                    return (
                      <AlbumCover
                        key={cItem.id}
                        info={cItem}
                        size={100}
                        width={118}
                        bgp="-570px"
                      >
                        {cItem.name}
                      </AlbumCover>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="sprite_02 arrow arrow-left"
          onClick={e => albumRef.current.prev()}
        ></div>
        <div
          className="sprite_02 arrow arrow-right"
          onClick={e => albumRef.current.next()}
        ></div>
      </div>
    </NewAlbumWrapper>
  )
})
