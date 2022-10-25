import Form from "./Components/Form";
import Bmi from "./Components/Bmi";

function App() {
  return (
    <div className="bg-zinc-100 w-screen h-screen flex justify-center items-center flex-col">
      <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl mb-16">
          <span className="text-gray-800 ">
            Vücut Kütle Endeks Hesaplama
          </span>
        </h1>
      </div>
      <div className="flex">
        <div className="w-96 mr-16">
          <Form />
        </div>
        <div>
          <Bmi />
        </div>
      </div>
    </div>
  );
}

export default App;
