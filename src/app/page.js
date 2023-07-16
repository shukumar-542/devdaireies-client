import Image from 'next/image'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'
import Team from '@/components/Team'
import PopularPosts from '@/components/PopularPosts'

export default function Home() {
  return (
    <main className=" w-[90%] mx-auto">
      <Header></Header>
      <PopularPosts />
      <Team />
      <Footer></Footer>

    </main>
  )
}
