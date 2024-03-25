import { useDispatch } from "react-redux";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormInput, SubmitBtn } from "../components";
import { loginUser } from "../features/userSlice";
import { customFetch } from "../util";
export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local', data);
    const user = response.data;
    toast.success('logged in successfully')
    store.dispatch(loginUser(user))
    return redirect('/')
  } catch (error) {
    console.log(error);
    return null;
  }
}
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuest = async () => {
    const data = {
      identifier: 'test@test.com',
      password: 'secret'
    }
    try {
      const response = await customFetch.post('/auth/local', data);
      const user = response.data;
      toast.success('logged in successfully')
      dispatch(loginUser(user))
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return <>
    <nav >
      <div className="flex  px-8 py-8 lg:justify-around">
        <span className="text-info text-3xl italic">swiftstore</span>
        <div className="hidden lg:flex">
          <p className="text-accent-neutral">New to swiftstore?
            <Link to='/register' className="ml-2 link link-hover link-primary">Sign up</Link>
          </p>
        </div>
      </div>
    </nav>
    <section className="h-screen max-w-lg place-items-center mx-auto p-8 mt-8">
      <div className="text-center mb-8">
        <h4 className="text-center text-primary text-3xl font-semibold">Welcome back</h4>
        <p className="text-accent mt-2">Login to your Swiftstore account</p>
      </div>
      <Form method="post" className="flex flex-col gap-y-4 border-2 shadow-md bg-base-100 p-8 " >
        <FormInput type="email" label="username" defaultValue="joe@mail.com" name="identifier" />
        <FormInput type="password" label="password" defaultValue="password" name="password" />
        <div className="flex flex-col gap-y-2">
          <SubmitBtn text="login" />

        </div>

        <div className="flex flex-col gap-y-2">
          <button type="button" className="btn btn-accent" onClick={loginAsGuest}>guest</button>
        </div>
      </Form>

      <div className="flex flex-col mt-4 lg:hidden">
        <p className="text-accent font-semibold mt-2">Don't have an account?
          <Link to='/register' className="ml-2 link link-hover link-primary capitalize">sign up</Link>
        </p>
      </div>
    </section>
  </>
}
export default Login;