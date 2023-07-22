
import Footer from './shared/Footer/Footer'
import PopularPosts from '@/components/PopularPosts'
import RecentSlider from './home/RecentSlider'
import PostTimeline from './home/PostTimeline'
import Loading from './shared/LoadingPage/Loading'
import Errorpage from './shared/ErrorPage/Errorpage'

export default function Home() {

  return (
    <main className="my-container">
      {/* <Loading></Loading> */}
      <Errorpage></Errorpage>
      <RecentSlider />
      <PopularPosts />
      <PostTimeline />

      {/* <Footer></Footer> */}

    </main>
  )
}
