"use client"
import { useState } from "react";
const Dashboard = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handledGetStarted = () => {
    setIsStarted(true);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Football Strategist,</h1>
      {!isStarted ? (
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handledGetStarted}
        >
          Get Started
        </button>
      ) : (
        <div>
          <p>Welcome! Let's build your Football Strategy</p>
          <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setIsStarted(false)}
          >
            Go Back
          </button>
          <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => alert("Let's get started")}>
            Next step
          </button>
        </div>
      )}
    </div>
  )
}

export default Dashboard;