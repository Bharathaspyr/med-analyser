"use client";

import React from "react";
import { MagicCard } from ".././ui/MagicCard"; 

const Body = () => {
  return (
    <div className="w-full p-12 text-center">
        {/* Heading */}
        <h3 className="text-5xl font-extrabold text-gray-900">
          Why Choose <span className="text-yellow-400">MedScan AI</span>?
        </h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          Medical imaging plays a crucial role in diagnosing diseases, but interpreting X-rays, CT scans, MRIs, and ultrasounds requires specialized expertise. MedScan AI bridges the gap by providing accurate diagnostics with explainable AI and natural language reports.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 w-full mt-12">
          {/* Card 1: AI-Powered Diagnosis */}
          <MagicCard className="p-6 bg-white rounded-xl shadow-lg h-full">
            <img
              src="https://www.altexsoft.com/static/blog-post-featured/2023/10/57430f12-573f-491b-99cb-79279a6aeb7d.jpg"
              alt="AI Diagnosis"
              className="w-full h-56 object-cover rounded-md"
            />
            <h4 className="text-2xl font-semibold mt-4">AI-Powered Diagnosis</h4>
            <p className="text-gray-600 mt-2">
              Advanced AI models analyze medical images to detect diseases with high precision, ensuring faster and more accurate diagnoses.
            </p>
          </MagicCard>

          {/* Card 2: Explainable AI & NLP Reports */}
          <MagicCard className="p-6 bg-white rounded-xl shadow-lg h-full">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E12AQFHohXFvRLFCA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707236092016?e=2147483647&v=beta&t=Qgg7Azevu-WitsnmXz_c2OVoNyFVIduF8dR4OPY_4lg"
              alt="AI Explanation"
              className="w-full h-56 object-cover rounded-md"
            />
            <h4 className="text-2xl font-semibold mt-4">
              Explainable AI & NLP Reports
            </h4>
            <p className="text-gray-600 mt-2">
              AI-generated reports translate complex findings into easy-to-understand language for both doctors and patients.
            </p>
          </MagicCard>

          {/* Card 3: Data Privacy & Security */}
          <MagicCard className="p-6 bg-white rounded-xl shadow-lg h-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZp8UoqF5b4CKq5VgJ5OmLO8jQQuGHbMVjUg&s"
              alt="Secure & Private"
              className="w-full h-56 object-cover rounded-md"
            />
            <h4 className="text-2xl font-semibold mt-4">Secure & Private</h4>
            <p className="text-gray-600 mt-2">
              We ensure patient data privacy with end-to-end encryption and secure cloud storage for reliable healthcare solutions.
            </p>
          </MagicCard>
        </div>
      
    </div>
  );
};

export default Body;
