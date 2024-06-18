export default function Streamer({name, category, online}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[20%_1fr_20%] ">
             <img className="col-start-1 col-end-2 w-8 h-8 rounded-full" src={`https://api.dicebear.com/8.x/notionists/svg?seed=${name}`} alt="" />
                    <div className="hidden lg:block col-start-2 col-end-3">
                        <h3 className="font-medium hidden lg:block">{name}</h3>
                        <p className="text-slate-400 text-[13px] hidden lg:block">{category}</p>
                    </div>
                    <div className="hidden lg:block col-start-3 col-end-4 ">
                        <div>
                            {
                                online && (<div className="flex items-center gap-1 text-[13px]">
                                    <div className=" w-full rounded-full bg-[#EB0201]"></div>
                                    <p>Online</p>
                                    </div>)
                            }
                            {
                                !online && (<div className="text-[13px] hidden lg:block">
                                    <p>Offline</p>
                                    </div>)
                            }
                        </div>
                    </div> 
        </div> 
            
    )
         
}