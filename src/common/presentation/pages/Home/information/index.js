import React from 'react'
import PropTypes from 'prop-types'
import { TypeAnimation } from 'react-type-animation'

const Information = (props) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <TypeAnimation
        sequence={['Nguyễn Hoàng Thiên Khải', 1000]}
        deletionSpeed={40}
        speed={40}
        repeat={Infinity}
        className="text-4xl font-bold text-black"
      />
      <TypeAnimation
        sequence={[
          'FONT-END DEVELOPER',
          1000,
          'NODE.JS',
          1000,
          'JAVASCRIPT',
          1000,
          'MONGGODB',
          1000,
          'SQL SERVER',
          1000,
          'MY SQL',
          1000
        ]}
        deletionSpeed={40}
        speed={40}
        repeat={Infinity}
        className="text-black text-xl font-thin"
      />
    </div>
  )
}

Information.propTypes = {}

export default Information
