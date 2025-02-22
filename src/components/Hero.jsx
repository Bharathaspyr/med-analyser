
const Hero = () => {
    return (
      <div className="flex-grow flex items-center justify-center text-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white min-h-screen pt-20 w-full">
        <div className="max-w-2xl w-full px-4">
          <h2 className="text-5xl font-bold leading-tight drop-shadow-lg">
            AI-Powered <span className="text-yellow-300">Medical Image Analysis</span>
          </h2>
          <p className="mt-6 text-xl opacity-90">
            Upload and analyze medical images using cutting-edge AI technology for faster and more accurate diagnostics.
          </p>
          <button className="mt-8 px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg transition-transform transform hover:scale-110 shadow-lg">
            Upload Image
          </button>
        </div>
      </div>
    );
  };
  export default Hero;