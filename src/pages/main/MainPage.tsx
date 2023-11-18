import React from 'react';

function MainPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">환영합니다!</h1>
        <p className="text-lg mb-8">위드셀러의 특별한 서비스를 경험해보세요.</p>
        <img
          src="your_image_url.jpg" // 이미지 경로를 실제 이미지 파일의 경로로 변경해주세요.
          alt="서비스 이미지"
          className="rounded-lg shadow-md max-w-full mb-4"
        />
        <button
          className="bg-gradient-to-r from-purple-500 bg-indigo-500 text-white py-2 px-40 rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
          onClick={() => {
            // 클릭 시 실행할 동작 추가
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

export default MainPage;
