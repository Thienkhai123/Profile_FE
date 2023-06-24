import 'styles/globals.css'
import { store } from 'stores'
import { Provider } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import LayoutAuth from 'layouts/Auth'
import PAGE_CONFIG from 'common/configs/app.router'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter()

  const getLayout = () => {
    const page = Object.values(PAGE_CONFIG).find((i) => i.url === pathname)
    if (page) return page.layout
    // else return DefaultLayout
  }

  const Layout = getLayout()

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })

  return (
    <Provider store={store}>
      {Layout && <Layout component={Component} {...pageProps} />}

      {/* <Component {...pageProps} /> */}
    </Provider>
  )
}
