import React from 'react'
import PropTypes from 'prop-types'
import Header from 'common/container/header'
import Footer from 'common/container/footer'

const LayoutAuth = (props) => {
  const { component: Component } = props
  return (
    <div>
      <Header />
      <Component component={null} {...props} />
      <Footer />
    </div>
  )
}

LayoutAuth.propTypes = {}
LayoutAuth.defaultProps = {}

export default LayoutAuth
