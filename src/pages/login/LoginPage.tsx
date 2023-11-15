import React from 'react';

function LoginPage() {
  return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <form>
            <div className="mb-4">
              <input
                  placeholder="아이디"
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 border border-indigo-300 outline-3 outline-indigo-500 hover:border-indigo-500 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <input
                  placeholder="비밀번호"
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 border border-indigo-300 outline-3 outline-indigo-500 hover:border-indigo-500 rounded w-full"
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <a href="#" className="text-sm text-indigo-500 hover:underline">
                  비밀번호 찾기
                </a>
              </div>
              <div>
                <a href="#" className="text-sm text-indigo-500 hover:underline">
                  회원가입
                </a>
              </div>
            </div>
            <button
                type="submit"
                className="from-purple-500 to-indigo-500 bg-gradient-to-r text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
            >
              로그인
            </button>
            {/*<div className="mt-4">*/}
            {/*  <hr className="mb-2 border-t border-gray-300" />              */}
            {/*  <div className="flex flex-col mt-2">*/}
            {/*    <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mb-2">*/}
            {/*      Facebook 로그인*/}
            {/*    </button>*/}
            {/*    <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mb-2">*/}
            {/*      Google 로그인*/}
            {/*    </button>*/}
            {/*    /!* GitHub 로그인 버튼 추가 (추후 구현 예정) *!/*/}
            {/*    <button className="bg-black text-white p-2 rounded hover:bg-gray-700">*/}
            {/*      GitHub 로그인*/}
            {/*    </button>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </form>
        </div>
      </div>
  );
}

export default LoginPage;
