import Image from 'next/image'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'

export default function Home() {
  return (
    <main className=" w-[80%] mx-auto">
      <Header></Header>
      <Footer></Footer>
      
    </main>
  )
}
