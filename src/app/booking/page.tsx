export default function BookingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className=" relative text-4xl font-bold text-center mb-4 typing">Book with CMDev_Business</h1>
      <p className="text-center max-w-md mb-8">
        Get personalized guidance on how to improve your business with the latest web technologies and AI integrations.
      </p>
      <a
        href='https://calendly.com/chrismoulton-5369/30min'
        className="fade-slide-in px-6 py-3 bg-emerald-700 hover:bg-emerald-600 rounded-lg shadow-lg transition-colors duration-200"
      >
        Book a Zoom Meeting
      </a>
    </div>
  );
}
