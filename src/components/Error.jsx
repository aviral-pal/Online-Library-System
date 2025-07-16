import { Link, useRouteError } from "react-router-dom";

function Error() {
  const err =
    useRouteError() || {
      status: "404",
      statusText: "Page Not Found",
      data: "Oops! The page you are looking for doesn't exist.",
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fef6e4] px-4 font-sans">
      <div className="bg-white text-[#333] rounded-2xl shadow-lg p-10 max-w-md w-full border border-[#f3d2c1] text-center">
        <h1 className="text-6xl font-extrabold text-[#f582ae] drop-shadow-sm">😕 Oops!</h1>
        <h2 className="text-2xl font-bold mt-4 text-[#8b5e83]">
          {err.status} - {err.statusText}
        </h2>
        <p className="mt-4 text-base text-[#665c54]">
          {err.data || "Something went wrong. Please try again later."}
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-[#f3d2c1] text-[#2b2d42] hover:bg-[#8ecae6] hover:text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-sm border border-[#f582ae]"
        >
          🏡 Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
