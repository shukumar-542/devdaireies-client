
import Footer from './shared/Footer/Footer'
import Team from '@/components/Team'
import PopularPosts from '@/components/PopularPosts'
import RecentSlider from './home/RecentSlider'

export default function Home() {

  return (
    <main className="">
      <RecentSlider />
      <PopularPosts />
      <Team />
      <Footer></Footer>

    </main>
  )
}
