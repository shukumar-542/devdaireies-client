import Image from 'next/image'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'
import Team from '@/components/Team'
import PopularPosts from '@/components/PopularPosts'
import HomeSlider from '@/components/HomeSlider/HomeSlider'

export default function Home() {
  
  return (
    <main className=" w-[90%] mx-auto">
      <Header></Header>
      <HomeSlider></HomeSlider>
      <PopularPosts />
      <Team />
      <Footer></Footer>

    </main>
  )
}
