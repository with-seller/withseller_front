import React from 'react';

function LoginPage() {
  return (
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 min-h-screen flex items-center justify-center">
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg">
          <div className="px-10 py-8">
            <h2 className="text-2xl text-center text-gray-700 mb-6">위드셀에 오신 걸 환영합니다.</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  아이디
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  비밀번호
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  로그인
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

  );
}

export default LoginPage;
