import Navbar from "./components/Navbar"
import Menu from "./components/Menu"
import Content from "./components/Content"

export default function App() {
  return (
    <main className="w-full min-h-screen grid grid-cols-1 md:grid-cols-[3.2rem_1fr] lg:grid-cols-[240px_1fr] grid-rows-[51px_1fr]">
    <Navbar />
    <Menu />
    <Content />
  </main>
  )
}


