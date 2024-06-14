import Streamer from "./Streamer"


export default function Menu() {

    const streamers = [
        {
            name: "Frizma",
            category: "Rust",
            online: true,
        },
        {
            name: "Hecto12",
            category: "Rust",
            online: false,
        },
        {
            name: "Steven15",
            category: "Solo chateando",
            online: false,
        },
        {
            name: "Yairgg95",
            category: "Destiny2",
            online: true,
        },
        {
            name: "Lau32",
            category: "APEX",
            online: true,
        },
        {
            name: "Rich145",
            category: "Arte",
            online: false,
        },
        {
            name: "LuisA24",
            category: "Fortnite",
            online: false,
        },
        {
            name: "Midudev10",
            category: "Solo chateando",
            online: true,
        },
        {
            name: "Dian98",
            category: "GTAV",
            online: true,
        },
        {
            name: "CharleS",
            category: "Panicore",
            online: true,
        },
        {
            name: "Mari65",
            category: "Arte",
            online: false,
        },
    ]

    return (
        <div className="hidden md:block bg-[#1F1F23] md:col-span-1">
            <div>
                <p>Para ti</p>
                <img src="" alt="" />
            </div>
            <div>
                <p>CANALES RECOMENDADOS</p>
            </div>
            <div id="Streamers-container">
                {
                    streamers.map((streamer) => {
                        return (
                            <Streamer
              key={`card-${streamer.name}`}
              name={streamer.name}
              category={streamer.category}
              online={streamer.online}
            />
                        )
                    })
                }
            </div>
            <div>
                <p>Mostrar menos</p>
            </div>
        </div>
    )
}