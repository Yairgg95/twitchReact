import Navbar from "./components/Navbar"

export default function App() {
  return (
    <main className="w-full min-h-screen grid grid-cols-1 md:grid-cols-[3.2rem_1fr] lg:grid-cols-[10rem_1fr] grid-rows-[3.2rem_1fr]">
    <Navbar />
    <div className="hidden md:block bg-[#1F1F23] md:col-span-1">Strmears</div>
    <div className="bg-blue-600">content</div>
  </main>
  )
}


