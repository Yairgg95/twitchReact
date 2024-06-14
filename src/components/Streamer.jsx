export default function Streamer({name, category, online}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[20%_1fr_20%] ">
             <img className="col-start-1 col-end-2 w-8 h-8 rounded-full" src={`https://api.dicebear.com/8.x/notionists/svg?seed=${name}`} alt="" />
                    <div className="hidden lg:block col-start-2 col-end-3">
                        <p>{name}</p>
                        <p>{category}</p>
                    </div>
                    <div className="hidden lg:block col-start-3 col-end-4 ">
                        <div>
                            {
                                online && (<p>Online</p>)
                            }
                            {
                                !online && (<p>Offline</p>)
                            }
                        </div>
                    </div> 
        </div> 
            
    )
         
}