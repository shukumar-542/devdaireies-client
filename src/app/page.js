
import Footer from './shared/Footer/Footer'
import Team from '@/components/Team'
import PopularPosts from '@/components/PopularPosts'
import RecentSlider from './home/RecentSlider'
import Timeline from './home/Timeline'

export default function Home() {

  return (
    <main className="my-container">
      <RecentSlider />
      <PopularPosts />
      {/* <Timeline /> */}
      <Team />
      <Footer></Footer>

    </main>
  )
}
