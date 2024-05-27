import logo from '../../../public/logo.png'

function Navbar(){
    return(
<div className="navbar bg-neutral-800 text-neutral-content w-full fixed z-50 h-72px justify-between px-12">
      <div className="flex-1">
      <img src="/public/logo.png" alt="logo"  className="h-12 w-12"/>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li><a>Nuch-cha Boonyato</a></li>        
        </ul>
      </div>
    </div>
    )
}
export default Navbar;
