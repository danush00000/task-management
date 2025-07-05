import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Sign In to Todo App
        </h2>
        <a href="http://localhost:5000/auth/google" className="block">
          <button
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow transition duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <g>
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.6 32.9 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5c10.7 0 19.5-8.7 19.5-19.5 0-1.3-.1-2.2-.3-3z"/>
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15.2 17.1 19.2 14.5 24 14.5c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4.5 24 4.5c-7.1 0-13.1 4.1-16.1 10.2z"/>
                <path fill="#FBBC05" d="M24 45.5c5.6 0 10.5-1.9 14.3-5.1l-6.6-5.4c-2 1.4-4.6 2.2-7.7 2.2-5.8 0-10.6-3.9-12.3-9.1l-7 5.4C6.9 41.1 15.7 45.5 24 45.5z"/>
                <path fill="#EA4335" d="M24 4.5c-3.1 0-5.9 1.1-8.1 2.9l-6.1-6.1C15.5 6.5 20.4 4.5 24 4.5c7.1 0 13.1 4.1 16.1 10.2l7-5.1C38.5 10.9 31.7 4.5 24 4.5z"/>
              </g>
            </svg>
            Sign in with Google
          </button>
        </a>
      </div>
    </div>
  );
};

export default Login;
