import React from 'react';
import Logo from '../../assets/react.svg';

function SignupPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white mb-4 p-4 rounded shadow-md w-96 space-y-2">
        <div className="flex items-center justify-center">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">위드셀러</span>
            <img className="h-8 w-auto" src={Logo} alt="위드셀러" />
          </a>
        <h2 className="text-2xl font-bold text-gray-800">회원가입</h2>
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
          <div className="mb-4">
            <input
              placeholder="이메일"
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-indigo-300 outline-3 outline-indigo-500 hover:border-indigo-500 rounded w-full"
            />
          </div>
          <div className="Business mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              연락처
            </label>
            <input
              placeholder="연락처"
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 border border-indigo-300 outline-3 outline-indigo-500 hover:border-indigo-500 rounded w-full"
            />
          </div>
          <div className="Business mb-4">
            <label htmlFor="verification" className="block text-sm font-medium text-gray-700">
              연락처 인증
            </label>
            <input
              placeholder="연락처 인증"
              type="text"
              id="verification"
              name="verification"
              className="mt-1 p-2 border border-indigo-300 outline-3 outline-indigo-500 hover:border-indigo-500 rounded w-full"
            />
          </div>
          <div className="Business mb-4">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              상호명
            </label>
            <input
              placeholder="상호명"
              type="text"
              id="company"
              name="company"
              className="mt-1 p-2 border border-indigo-300 outline-3 outline-indigo-500 hover:border-indigo-500 rounded w-full"
            />
          </div>
          <div className="Business mb-4">
            <label htmlFor="representative" className="block text-sm font-medium text-gray-700">
              대표자명
            </label>
            <input
              placeholder="대표자명"
              type="text"
              id="representative"
              name="representative"
              className="mt-1 p-2 border border-indigo-300 outline-3 outline-indigo-500 hover:border-indigo-500 rounded w-full"
            />
          </div>
          <div className="Business mb-4">
            <label htmlFor="registration" className="block text-sm font-medium text-gray-700">
              사업자번호
            </label>
            <input
              placeholder="사업자번호"
              type="text"
              id="registration"
              name="registration"
              className="mt-1 p-2 border border-indigo-300 outline-3 outline-indigo-500 hover:border-indigo-500 rounded w-full"
            />
          </div>
          <button
              disabled={true}
            type="submit"
            className="from-purple-500 to-indigo-500 bg-gradient-to-r text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;