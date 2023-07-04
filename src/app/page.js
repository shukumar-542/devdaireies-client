import Image from 'next/image'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'

export default function Home() {
  return (
    <main className=" w-[80%] mx-auto">
      <Header></Header>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>
      <Footer></Footer>

    </main>
  )
}
