
import Footer from './shared/Footer/Footer'
import Team from '@/components/Team'
import PopularPosts from '@/components/PopularPosts'
import RecentSlider from './home/RecentSlider'
import PostTimeline from './home/PostTimeline'

export default function Home() {

  return (
    <main className="my-container">
      <RecentSlider />
      <PopularPosts />
      <PostTimeline />
      <Team />
      <Footer></Footer>

    </main>
  )
}
