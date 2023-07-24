// import Lottie from 'react-lottie-player'

import Spinner from "@/components/Spinner/Spinner";

// import load from '../asset/lodingJson.json'
const Loading = () => {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
        <Spinner />
      </div>
    );
  };
  
  export default Loading;