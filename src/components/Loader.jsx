import { Html } from "@react-three/drei";

export const Loader = ()=>{
    return(
        // <div className=" w-24 h-24  flex justify-center items-center relative">
        // <div className="absolute inset-0 flex justify-center items-center">
        // <div className="loader animate-spin
        //  w-12 h-12 border-t-4 border-b-4 border-red-500 
        //  rounded-full">
        //  </div>
        //  <img className="w-12 h-19 z-10" src="images/logo.png"></img>
        // </div>
        // </div>
        <Html>
        <div className=" relative w-24 h-24  flex justify-center items-center">
        <div className="absolute loader animate-spin
         w-12 h-12 border-t-4 border-b-4 border-red-500 
         rounded-full"></div>
      <img className="w-12 h-19 z-10" src="images/logo.png"></img>
        </div>
        </Html>
    )
};