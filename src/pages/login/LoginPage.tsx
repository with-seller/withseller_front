import React from 'react';
import Logo from "../../assets/react.svg";

function LoginPage() {
  return (
      <div className=" flex items-center justify-center ">
        <div className="bg-white mb-4 p-4 rounded shadow-md w-96 space-y-2">
          <div className="flex items-center justify-center">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">위드셀러</span>
              <img className="h-8 w-auto" src={Logo} alt="위드셀러" />
            </a>
          </div>
          <form>
            <div className="mb-4">
              <input
                  placeholder="아이디"
                  type="text"
                  id="username"
                  name="username"
                  className="mt-2 p-2 border border-indigo-300 outline-3 outline-indigo-500 hover:border-indigo-500 rounded w-full"
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
          </form>
        </div>
      </div>
  );
}

export default LoginPage;
