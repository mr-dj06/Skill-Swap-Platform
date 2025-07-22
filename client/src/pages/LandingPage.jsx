import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-50 to-blue-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Learn New Skills. Teach What You Know.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Swap skills with passionate learners and teachers around the world.
            No money, just mutual growth.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/home" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
              Get Started
            </Link>
            {/* <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg hover:bg-blue-50 transition">
              Explore Users
            </button> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="text-xl font-semibold mb-2">Skill Swapping</h3>
            <p className="text-gray-600">
              Trade your knowledge with others. Teach Spanish, learn piano. No fees.
            </p>
          </div>

          <div>
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="text-xl font-semibold mb-2">Global Community</h3>
            <p className="text-gray-600">
              Connect with learners and mentors from around the world in real-time.
            </p>
          </div>

          <div>
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-semibold mb-2">Diverse Topics</h3>
            <p className="text-gray-600">
              From coding to cooking, yoga to design — find or offer any skill.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-blue-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Swap Skills?
          </h2>
          <p className="text-gray-600 mb-6">
            Join a platform where learning is collaborative and cost-free.
          </p>
          <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
