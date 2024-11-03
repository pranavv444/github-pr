import React from 'react'
import { Link } from 'react-router-dom'
import { GitBranch, GitPullRequest, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GitPullRequest className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">PR Review AI</span>
          </div>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-800">Log In</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Sign Up</Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Automate Your GitHub PR Reviews
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your development process with AI-powered code reviews. Get instant feedback and improve code quality.
          </p>
          <Link to="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Started for Free
          </Link>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                  <GitBranch className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automated Reviews</h3>
                <p className="text-gray-600">Get instant code reviews on every pull request, powered by advanced AI.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Faster Iterations</h3>
                <p className="text-gray-600">Reduce review time and accelerate your development cycle.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                  <GitPullRequest className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Insights</h3>
                <p className="text-gray-600">Receive detailed feedback and suggestions to improve code quality.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to revolutionize your PR process?</h2>
            <p className="text-xl mb-8">Join thousands of developers who are already using PR Review AI.</p>
            <Link to="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Sign Up Now
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 PR Review AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}