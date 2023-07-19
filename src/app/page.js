
import Footer from './shared/Footer/Footer'
import PopularPosts from '@/components/PopularPosts'
import RecentSlider from './home/RecentSlider'
import PostTimeline from './home/PostTimeline'

export default function Home() {

  return (
    <main className="my-container">
      <RecentSlider />
      <PopularPosts />
      <PostTimeline />
      {/* <Footer></Footer> */}

    </main>
  )
}
