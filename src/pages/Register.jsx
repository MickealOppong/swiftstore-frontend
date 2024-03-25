import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../util";


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('User created successfully')
    return redirect('/login')
  } catch (error) {
    console.log(error);
    return null;
  }
}
const Register = () => {
  return <>
    <section className="h-screen max-w-lg place-items-center mx-auto p-8 mt-16">
      <div className="text-center">
        <h4 className="text-center capitalize text-primary text-3xl font-semibold">sign up</h4>
      </div>
      <Form method="post" className="flex flex-col gap-y-2 border-2 shadow-md bg-base-100 p-8 mt-8">

        <FormInput type="username" label="username" defaultValue="" name="username" />
        <FormInput type="email" label="email" defaultValue="" name="email" />
        <FormInput type="password" label="password" defaultValue="" name="password" />
        <div className="flex flex-col gap-y-2">
          <SubmitBtn text="register" />
        </div>

      </Form>
      <div className="flex flex-col gap-y-2 mt-4">
        <p className="text-accent font-semibold mt-2">Already have account?
          <Link to='/login' className="ml-2 link link-hover link-primary capitalize">login</Link>
        </p>
      </div>
    </section>
  </>
}
export default Register;