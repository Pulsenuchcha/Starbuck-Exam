import "./Sidebar.css";
import Categories from "./Categories/Categories"
import Roast from "./Roast/Roast"
import Caffeine from "./Caffeine/Caffeine"
function Sidebar(){
    return(
        <section className="sidebar">
            <div className="filter">
                <h1>Filter</h1>
            </div>
            <Categories/>
            <Roast/>
            <Caffeine/>

        </section>
    )
}
export default Sidebar;