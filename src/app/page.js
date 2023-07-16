import Image from 'next/image'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'
import Team from '@/components/Team'
import PopularPosts from '@/components/PopularPosts'
import HomeSlider from '@/components/HomeSlider/HomeSlider'
import RecentSlider from './home/RecentSlider'

export default function Home() {

  return (
    <main className=" w-[95%] mx-auto">
      <Header></Header>
      <RecentSlider />
      {/* <HomeSlider></HomeSlider> */}
      <PopularPosts />
      <Team />
      <Footer></Footer>

    </main>
  )
}
