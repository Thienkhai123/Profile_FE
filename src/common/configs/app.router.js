// import AuthLayout from 'layouts/AuthLayout'
// import CompanyLayout from 'layouts/CompanyLayout'
// import GuestLayout from 'layouts/GuestLayout'

import LayoutAuth from 'layouts/Auth'

const PAGE_CONFIG = {
  ROOT: {
    url: '/',
    layout: LayoutAuth
  },
  HOME: {
    url: '/home',
    layout: LayoutAuth
  }
}

export default PAGE_CONFIG
