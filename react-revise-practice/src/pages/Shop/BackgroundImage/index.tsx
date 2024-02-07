import { memo } from 'react'

import CoverPhoto from '@/assets/CoverPhoto.jpg'
import CoverPhotoMobile from '@/assets/CoverPhotoMobile.jpg'

import useScreenWidth from '@/hooks/useScreenWidth'

const BackgroundImage = () => {
  const { isMobile } = useScreenWidth()

  if (isMobile) {
    return <img src={CoverPhotoMobile} alt='~/assets/CoverPhotoMobile.png' className='w-full h-[252px]' />
  }

  return <img src={CoverPhoto} alt='~/assets/CoverPhoto.jpg' className='w-full h-[400px]' />
}

export default memo(BackgroundImage)
