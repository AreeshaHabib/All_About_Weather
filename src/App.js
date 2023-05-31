import Inputs from "./components/Inputs";
import Header from "./components/Header";


function App() {

  return (
    <div className="bg-[url('https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?cs=srgb&dl=pexels-brett-sayles-912364.jpg&fm=jpg')] flex flex-col md:h-screen w-screen bg-cover bg-center  ">
      <Header />
      <Inputs />

    </div>

  );
}

export default App;
