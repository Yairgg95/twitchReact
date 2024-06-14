import Navbar from "./components/Navbar"
import Menu from "./components/Menu"

export default function App() {
  return (
    <main className="w-full min-h-screen grid grid-cols-1 md:grid-cols-[3.2rem_1fr] lg:grid-cols-[16%_1fr] grid-rows-[51px_1fr]">
    <Navbar />
    <Menu />
    <div className="bg-blue-600">content</div>
  </main>
  )
}


