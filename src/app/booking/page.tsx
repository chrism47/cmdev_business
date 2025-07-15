export default function BookingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full h-[90vh] flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="w-[90%] max-w-xl font-mono text-3xl sm:text-5xl md:text-6xl font-bold break-words typing">
          CMDev_Business
        </h1>
        
        <p className="w-[90%] max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed">
          Get personalized guidance on how to improve your business with the latest web technologies and AI integrations.
        </p>
        <a
          href="https://calendly.com/chrismoulton-5369/30min"
          className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 rounded-lg shadow-lg transition-colors duration-200 text-white text-lg"
        >
          Book a Zoom Meeting
        </a>
      </div>
    </div>
  );
}
