import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
const Register = () => {
  return <>
    <nav >
      <div className="flex  py-8 px-8 md:px-12 lg:px-64">
        <span className="text-info text-3xl italic">swiftstore</span>
      </div>
    </nav>

    <section className="h-screen max-w-lg place-items-center mx-auto p-8 ">
      <div className="text-center">
        <h4 className="text-center capitalize text-neutral text-3xl font-semibold">sign up</h4>
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
        <p className="text-neutral font-semibold mt-2">Already have account?
          <Link to='/login' className="ml-2 link link-hover link-primary capitalize">login</Link>
        </p>
      </div>
    </section>
  </>
}
export default Register;