import { useNavigate, useRouteError } from "react-router-dom";
import robotimg from '../../src/assets/animations/notFound.json'
import Lottie from "react-lottie";

function Error() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: robotimg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "";
  // console.log("error page", error.error);



  if (error.data?.message) {
    message = error.data.message;
  } else if (error?.message) {
    message = error.message;
  } else {
    message = "Something went wrong!";
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>

      <main className="container text-center py-5">
        <div className="d-flex  justify-content-center">
          <div className="row py-5">

          </div>
        </div>
      </main>

    <div className="mt-10">
      <Lottie   options={defaultOptions} height={400} width={400} />
      <div className="font-quicksand text-black text-xl mt-3 text-center  ">
      <h1>{title || error.data.title}</h1>
      <p className="lead">{message}</p>.
      </div>

        <button onClick={()=> navigate("/")} style={{ marginLeft:"36%"}} className="text-base bg-[#17A2B8] text-white rounded-lg py-3 px-[10%] mt-10 text-center ">
          Go to Home Page  
      </button>
    </div>
    </>
  );
}

export default Error;
