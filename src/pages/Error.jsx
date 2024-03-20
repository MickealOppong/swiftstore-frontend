import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return <main className="grid place-items-center mx-auto min-h-[100vh]">
      <div className="text-center">
        <p className="text-9xl text-info font-semibold ">404</p>
        <h1 className="mt-4 font-semibold text-3xl leading-7 sm:text-5xl">Page not found </h1>
        <p className="text-primary my-4 text-lg">Sorry , we could not find the page you are looking for.</p>
        <Link to="/" className="btn btn-info text-white">Back Home</Link>
      </div>
    </main>
  }
  return <main className="flex flex-col items-center mt-60 max-w-md mx-auto">
    <h4 className="text-3xl text-primary">There was an error...</h4>
  </main>
}
export default Error;