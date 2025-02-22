

const Body = () => {
  return (
    <div className="w-full py-12 text-center">
      <h3 className="text-4xl font-bold text-gray-800 mb-6">Why Choose <span className='text-yellow-300'>MedScan AI</span>?</h3>
      <p className="text-lg text-gray-600 mb-6 p-px">MedScan AI uses state-of-the-art artificial intelligence to analyze medical images quickly and accurately, assisting healthcare professionals in diagnosing diseases with confidence.</p>
      <div className="grid md:grid-cols-3 gap-6 px-6 w-full max-w-7xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <img src="/ai-analysis.jpg" alt="AI Analysis" className="w-full h-48 object-cover rounded-md" />
          <h4 className="text-xl font-semibold mt-4">Advanced AI Technology</h4>
          <p className="text-gray-600 mt-2">Our AI models are trained to detect abnormalities in medical images with high accuracy.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <img src="/doctor.jpg" alt="Doctor Reviewing" className="w-full h-48 object-cover rounded-md" />
          <h4 className="text-xl font-semibold mt-4">Doctor Assistance</h4>
          <p className="text-gray-600 mt-2">MedScan AI helps doctors make faster and more informed decisions in critical cases.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <img src="/secure-data.jpg" alt="Secure Data" className="w-full h-48 object-cover rounded-md" />
          <h4 className="text-xl font-semibold mt-4">Secure & Private</h4>
          <p className="text-gray-600 mt-2">We prioritize patient data privacy with end-to-end encryption and secure cloud storage.</p>
        </div>
      </div>
    </div>
  );
};
export default Body;  