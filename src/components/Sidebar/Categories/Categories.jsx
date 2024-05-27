import './Categories.css'
function Categories(){
    return(
       <div>
        <h2 className="sidebar-title">Category</h2>
       
       <div>
        <label className="sidebar-label-container">
             <input type="checkbox" name="test" /> 
            <span className="checkmark text-black"></span>whole Bean
        </label>
        <label className="sidebar-label-container">
             <input type="checkbox" name="test" /> 
            <span className="checkmark text-black"></span>Starbuck Reserve
        </label>
        <label className="sidebar-label-container">
             <input type="checkbox" name="test" /> 
            <span className="checkmark text-black"></span>whole Bean
        </label>
        <label className="sidebar-label-container">
             <input type="checkbox" name="test" /> 
            <span className="checkmark text-black"></span>whole Bean
        </label>
        <label className="sidebar-label-container">
             <input type="checkbox" name="test" /> 
            <span className="checkmark text-black"></span>whole Bean
        </label>
        <label className="sidebar-label-container">
             <input type="checkbox" name="test" /> 
            <span className="checkmark text-black"></span>syrup
        </label>
       </div>
       </div> 
    )
}
export default Categories;