export default function Category({name, viesw, image}) {

    return (
        <div class="flex flex-col ">
            <img src={image} alt="Valorant" class="max-w-full h-auto"/>
            <div class="flex flex-col py-2">
                <h3 class="text-[14px] font-semibold">{name}</h3>
                <p class="text-[12px] text-slate-400">{viesw}</p>
                </div>
                <div class="flex gap-1 flex-wrap">
                    <a href="" class="bg-[#29292E] rounded-lg p-1 text-[12px] h-5 items-center flex px-3">Tag</a>
                    <a href="" class="bg-[#29292E] rounded-lg p-1 text-[12px] h-5 items-center flex px-3">Tag</a>
                    <a href="" class="bg-[#29292E] rounded-lg p-1 text-[12px] h-5 items-center flex px-3">Tag</a>
                    </div>
                    </div>
    )
}