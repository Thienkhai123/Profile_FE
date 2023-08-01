import { Inter } from 'next/font/google'
import styles from 'styles/Home.module.css'
import useTrans from 'common/hooks/useTrans'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts } from 'stores/apps/productSlice'
import { MetaSeo } from 'common/container/meta'
import { DeveloperLottie } from 'common/presentation/Lotties'
import { TypeAnimation } from 'react-type-animation'
import Information from 'common/presentation/pages/Home/information'
import Navigation from 'common/presentation/pages/Home/navigation'
// import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispath = useDispatch()
  const trans = useTrans()

  // useEffect(() => {
  //   dispath(getAllProducts())
  // }, [dispath])

  return (
    <>
      <MetaSeo />
      <div className="background-argon h-[100vh] flex justify-center items-center">
        <div className="relative flex  justify-center gap-[60px] h-[600px] items-center w-[1140px] rounded-xl bg-white shadow-[9px_10px_0_0_black]">
          <div className="absolute top-[20px] right-[20px]">
            <Navigation />
          </div>
          <div className="w-full pl-[58px]">
            <Information />
          </div>
          <div>
            <div className="w-[500px] h-[400px] ">
              <DeveloperLottie />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
