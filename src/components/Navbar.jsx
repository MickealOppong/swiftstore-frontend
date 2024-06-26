import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavLinks } from '../components/index';
import { toggleTheme } from '../features/userSlice';


const Navbar = () => {
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();


  const handleTheme = () => {
    dispatch(toggleTheme())
  }


  return <nav className='bg-base-200'>
    <div className='align-elements navbar'>
      <div className='align-elements navbar-start'>
        {/* Title */}
        <NavLink className="hidden lg:flex text-primary items-center font-semibold text-3xl">swiftstore</NavLink>

        {/* Dropdown*/}
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1 lg:hidden"><FaBarsStaggered /></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36 mt-4">
            <NavLinks />
          </ul>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className="menu menu-horizontal bg-base-200 rounded-box">
          <NavLinks />
        </ul>
      </div>
      {/* theme */}
      <div className='navbar-end'>
        {/* theme*/}
        <label className='swap swap-rotate'>
          <input type='checkbox' onChange={handleTheme} />
          <BsMoonFill className='swap-off' />
          <BsSunFill className='swap-on' />
        </label>

        <NavLink to='/cart' className="btn btn-ghost btn-circle btn-md ml-4" >
          <BsCart3 className='h-6 w-6' />
          <div className='indicator'>
            <span className='badge badge-sm badge-primary indicator-item'>{itemsInCart}</span>
          </div>
        </NavLink>
      </div>
    </div>
  </nav>
}
export default Navbar;