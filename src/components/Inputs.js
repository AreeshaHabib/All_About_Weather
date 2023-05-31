import { UilSearch } from '@iconscout/react-unicons';
import { fetchApi } from '../weatherApi';
import { useEffect, useState } from "react";
import ForcastTile from './ForcastTile';


function Inputs() {
     const [weather, setWeather] = useState()

     const [name, setName] = useState();

     const fetchWeatherData = async (city) => {
          if (city === undefined) {
               const data = await fetchApi("london");
               setWeather(data)

          } else {
               const data = await fetchApi(city)
               setWeather(data)

          }
     }

     useEffect(() => {
          fetchWeatherData();

     }, []);


     const handleSubmit = (event) => {
          event.preventDefault();
          fetchWeatherData(name)

     }
     return (
          <>
               <div className='flex justify-center w-full my-10'>
                    <div className='space-x-4'>
                         <form className="flex flex-row " onSubmit={handleSubmit}>
                              <input
                                   type="text"
                                   className='text-xl font-light p-4 md:w-[600px] w-[200px] rounded-l-lg shadow-xl focus:outline-none capitalize placeholder:lowercase'
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   placeholder="Enter a location..."
                              />
                              <div className=" bg-white flex justify-center rounded-r-lg shadow-lg px-3 items-center">
                                   <button type="submit">Search</button>
                                   <UilSearch size={25} type="submit" className="text-black mx-3 cursor-pointer transition ease-out hover:scale-125" />

                              </div>
                         </form>
                    </div>
               </div>
               <ForcastTile weatherdata={weather} />
          </>
     )
}

export default Inputs;