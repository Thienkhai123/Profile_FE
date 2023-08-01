import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HomeIcon from 'common/presentation/Icons/home'
import GmailIcon from 'common/presentation/Icons/gmail'
import FacebookIcon from 'common/presentation/Icons/facebook'
import PhoneIcon from 'common/presentation/Icons/phone'

const Navigation = (props) => {
  const [hover, setHover] = useState({
    homeHover: false,
    gmailHover: false,
    facebookHover: false,
    phoneHover: false
  })

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="relative flex items-center">
        <div
          className={`absolute px-[8px] py-[4px] duration-300 rounded-[8px] bg-violet-900 ${
            hover.homeHover
              ? '-left-[100px] opacity-100  z-[100] '
              : '-left-[70px] opacity-0 -z-[1]'
          }`}
        >
          <p className="font-medium text-base text-white">Trang chủ</p>
        </div>
        <div
          onMouseLeave={() => setHover({ ...hover, homeHover: false })}
          onMouseMove={() => setHover({ ...hover, homeHover: true })}
          className="cursor-pointer h-[48px] w-[48px] rounded-full shadow-lg border flex justify-center items-center"
        >
          <HomeIcon />
        </div>
      </div>
      <div className="relative flex items-center">
        <div
          className={`absolute px-[8px] py-[4px] duration-300 rounded-[8px] bg-violet-900 ${
            hover.gmailHover
              ? '-left-[215px] opacity-100  z-[100] '
              : '-left-[180px] opacity-0 -z-[1]'
          }`}
        >
          <p className="font-medium text-base text-white">
            dev.nguyenui@gmail.com
          </p>
        </div>
        <div
          onMouseLeave={() => setHover({ ...hover, gmailHover: false })}
          onMouseMove={() => setHover({ ...hover, gmailHover: true })}
          className="relative z-[100] cursor-pointer h-[48px] w-[48px] rounded-full shadow-lg border flex justify-center items-center"
        >
          <GmailIcon />
        </div>
      </div>
      {/* <div className="relative flex items-center">
        <div
          className={`absolute px-[8px] py-[4px] duration-300 rounded-[8px] bg-violet-900 ${
            hover.facebookHover
              ? '-left-[100px] opacity-100  z-[100] '
              : '-left-[70px] opacity-0 -z-[1]'
          }`}
        >
          <p className="font-medium text-base text-white">Trang chủ</p>
        </div>
        <div
          onMouseLeave={() => setHover({ ...hover, facebookHover: false })}
          onMouseMove={() => setHover({ ...hover, facebookHover: true })}
          className="relative z-[100] cursor-pointer h-[48px] w-[48px] rounded-full shadow-lg border flex justify-center items-center"
        >
          <FacebookIcon />
        </div>
      </div> */}
      <div className="relative flex items-center">
        <div
          className={`absolute px-[8px] py-[4px] duration-300 rounded-[8px] bg-violet-900 ${
            hover.phoneHover
              ? '-left-[115px] opacity-100  z-[100]'
              : '-left-[90px] opacity-0 -z-[1]'
          }`}
        >
          <p className="font-medium text-base text-white">0378527288</p>
        </div>
        <div
          onMouseLeave={() => setHover({ ...hover, phoneHover: false })}
          onMouseMove={() => setHover({ ...hover, phoneHover: true })}
          className=" relative z-[100] cursor-pointer h-[48px] w-[48px] rounded-full shadow-lg border flex justify-center items-center"
        >
          <PhoneIcon />
        </div>
      </div>
    </div>
  )
}

Navigation.propTypes = {}

export default Navigation
