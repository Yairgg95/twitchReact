export default function Navbar() {
    return (
        <nav className="bg-[#18181B] col-start-1 col-end-3 md:col-end-3 grid grid-cols-3">
            <div className="grid grid-cols-3 md:grid-cols-[15%_1fr_15%]">
            <img className="w-7 h-12 pl-2" src="https://svgl.app/library/twitch.svg" alt="" />
            <div className="flex justify-around items-center ">
            <div className="h-full flex items-center">
                <p className="hidden md:block">Siguiendo</p>
            </div>
            <div className="h-full flex items-center border-b-2 border-purple-500">
                <p className="hidden md:block text-purple-500">Explorar</p>
            </div>
            </div>
            <img className="w-full pt-2 " src="/images/icon_menu.png" alt="" />
            </div>
            <div className="flex items-center justify-center ">
                <input className="border border[#67676B] rounded[1rem] bg-transparent" type="Search" placeholder="Buscar" />
                <img className="w-7 h-7" src="/images/icon_search.jpg" alt="" />
            </div>
            <div></div>
        </nav>
    )
}