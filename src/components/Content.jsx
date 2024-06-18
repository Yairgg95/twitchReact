import Category from "./Category";
import categorys from "./categorys";

export default function Content() {
  
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 p-2 md:px-3 w-full justify-items-center">
            {categorys.map((category) => {
                return (
                    <Category 
                 key={`category-${category.name}`}
                 name={category.name}
                 viesw={category.viesw}
                 image={category.image}   
            />
                )
            })}
        </div>
        
    )
}