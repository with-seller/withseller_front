import LayoutPage from '../layout/LayoutPage';

function MainPage() {
  return (
      <div className="min-h-screen flex">
          <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">환영합니다!</h1>
              <p className="text-lg mb-8">우리의 특별한 서비스를 경험해보세요.</p>
              <img
                  src="your_image_url.jpg" // 이미지 경로를 실제 이미지 파일의 경로로 변경해주세요.
                  alt="서비스 이미지"
                  className="rounded-lg shadow-md max-w-full"
              />
          </div>
      </div>

  );
}

export default MainPage;
