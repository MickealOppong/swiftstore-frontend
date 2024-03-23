import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return <header className="bg-neutral py-2 text-neutral-content">
    <div className="align-elements flex justify-center sm:justify-end">
      {/* USER */}
      {/* links */}
      <div className="flex gap-x-4 text-xs md:text-l">
        <Link to="/login" className="flex items-center gap-x-1"> <AiOutlineLogin /> Log in / Guest</Link>
        <Link to="/register" className="flex items-center gap-x-1">Sign up</Link>
      </div>
    </div>
  </header>
}
export default Header;