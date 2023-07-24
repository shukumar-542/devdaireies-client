
import Footer from './shared/Footer/Footer'
import PopularPosts from '@/components/PopularPosts'
import RecentSlider from './home/RecentSlider'
import PostTimeline from './home/PostTimeline'
import Loading from './shared/LoadingPage/Loading'


export default function Home() {

  return (
    <main className="my-container"> 
      <RecentSlider />
      <PopularPosts />
      <PostTimeline />
    </main>
  )
}
