import React from 'react'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Logo</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Login
        </button>
        <h2 className="text-sm font-bold text-center text-gray-800 mb-6">
            <button className="text-blue-600 hover:underline">
              Forgot Password or Username?
            </button>
        </h2>
      </form>
    </div>
  )
}
