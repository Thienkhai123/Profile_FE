import React from 'react'
import Lottie from 'react-lottie'

export const DeveloperLottie = () => {
  const deveperOptions = {
    loop: true,
    autoplay: true,
    animationData: require('../../../../public/json/Lotties/developer.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div>
      <Lottie options={deveperOptions} />
    </div>
  )
}
