import { Link } from "react-router-dom"

const LoginNav = () => {
  return <nav >
    <div className="max-w-2xl flex px-8 py-8 lg:justify-around">
      <span className="text-info text-3xl italic">swiftstore</span>
      <div className="hidden lg:flex">
        <p className="text-accent-neutral">New to Swiftstore?
          <Link to='/register' className="ml-2 link link-hover text-secondary">Sign up</Link>
        </p>
      </div>
    </div>
  </nav>
}
export default LoginNav