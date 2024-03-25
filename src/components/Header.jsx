import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearItem } from '../features/cartSlice';
import { logoutUser } from '../features/userSlice';
const Header = () => {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutUser = () => {
    navigate('/')
    dispatch(logoutUser())
    dispatch(clearItem())
  }


  return <header className="bg-neutral py-2 text-neutral-content">
    <div className="align-elements flex justify-center sm:justify-end">
      {/* USER */}
      {
        user ? <>
          <div className="flex gap-x-4">
            <span>hello, {user.username}</span>
            <button onClick={() => signOutUser()} className="btn btn-xs btn-outline uppercase text-accent">logout</button>
          </div>
        </>
          : <>
            {/* links */}
            <div className="flex gap-x-4 text-xs md:text-l">
              <Link to="/login" className="flex items-center gap-x-1"> <AiOutlineLogin /> Log in / Guest</Link>
              <Link to="/register" className="flex items-center gap-x-1">Sign up</Link>
            </div>
          </>
      }
    </div>

  </header>
}
export default Header;