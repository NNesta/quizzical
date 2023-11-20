import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate("/question");
  };
  return (
    <main className="bg-secondary-100 text-primary-100  h-screen relative">
      <img alt="" className="absolute top-0 right-0" src="/blobs.svg" />
      <img alt="" className="absolute bottom-0 left-0" src="/blobs_2.svg" />
      <div className="flex flex-col items-center h-full justify-center gap-4 ">
        <h1 className=" font-bold text-2xl">Quizzical</h1>
        <p className=" mb-4">Some description if needed</p>
        <button
          onClick={handleClick}
          className="bg-primary-200 text-secondary-100  font-medium leading-5 rounded-2xl w-48 h-14"
        >
          Start quiz
        </button>
      </div>
    </main>
  );
};

export default Home;
