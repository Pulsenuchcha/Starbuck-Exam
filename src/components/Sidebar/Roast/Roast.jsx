import './Roast.css'
function Roast(){
    return( <div className="Roast">
        <h2 className="sidebar-title Roast-title">Roast</h2>  
        <label className="sidebar-label-container">
             <input type="checkbox" name="test2" /> 
            <span className="checkmark "></span>Dark
        </label>
        <label className="sidebar-label-container">
             <input type="checkbox" name="test2" /> 
            <span className="checkmark "></span>Medium
        </label>
        <label className="sidebar-label-container">
             <input type="checkbox" name="test2" /> 
            <span className="checkmark "></span>Blend
        </label>
       
       
       </div>
    )
}
export default Roast;