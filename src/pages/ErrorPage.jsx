import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return <h1 className="text-5xl font-semibold text-center">There was an error...</h1>
}
export default ErrorPage;