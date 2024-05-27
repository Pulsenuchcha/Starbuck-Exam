import './Caffeine.css'
function Caffeine(){
    return(
        <div>
        <h2 className="sidebar-title">Caffeine</h2>
       
       <div>
        <label className="sidebar-label-container">
             <input type="checkbox" name="test" /> 
            <span className="checkmark text-black"></span>Regular
        </label>
        <label className="sidebar-label-container">
             <input type="checkbox" name="test" /> 
            <span className="checkmark text-black"></span>Decaf
        </label>
       
       </div>
       </div> 
    )
}
export default Caffeine;