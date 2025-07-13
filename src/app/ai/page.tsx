'use client';
import { useState } from 'react';

export default function AIBusinessPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="font-sans h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">AI Solutions for Your Business</h1>
      <p className="mb-8 text-center max-w-md">
        Leverage the power of AI to transform your business operations. From automating mundane tasks to providing insightful analytics, our AI solutions are tailored to meet your unique needs.
      </p>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="bg-stone-950 border-white rounded px-4 py-2 hover:bg-opacity-75 transition"
      >
        Learn More
      </button>
      {showDetails && (
        <div className="mt-8 bg-stone-950 p-6 rounded shadow-lg max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Offerings</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Custom AI Development</li>
            <li>Data Analysis & Visualization</li>
            <li>Machine Learning Model Training</li>
            <li>AI Integration & Support</li>
          </ul>
        </div>
      )}
    </div>
  );
}

