import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <>
      <div className="flex items-center h-screen p-16 bg-gradient-to-r from-lime-100 to-lime-50">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <img
            className="w-4/5 md:w-1/2 lg:w-4/12"
            src="https://i.gifer.com/origin/af/af3898c603b08e23a57e91666ff0fab1_w200.webp"
            alt="error image"
          />
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-8xl xl:text-9xl">
              <span className="title-text">{status || 404}</span>
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link to="/" className="btn-primary">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
