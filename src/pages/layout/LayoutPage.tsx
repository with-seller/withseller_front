import { ReactElement } from 'react';
import Logo from '../../assets/react.svg';
import { Link } from 'react-router-dom'; // React Router를 사용하는 경우

interface LayoutPageProps {
  children: ReactElement;
}

function LayoutPage({ children }: LayoutPageProps) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">위드셀러</span>
              <img className="h-8 w-auto" src={Logo} alt="위드셀러" />
            </a>
          </div>
          <div>
            <a href="/login" className="text-md font-semibold leading-6 mr-4">
              로그인
            </a>
            <a href="/signup" className="text-md font-semibold leading-6">
              회원가입
            </a>
          </div>
        </nav>
      </header>

      {/* MainPage의 메뉴 추가 */}
      <div className="flex-1 min-h-full flex">
        <div className="bg-gray-200 w-1/5 p-6">
          <h2 className="text-2xl font-bold mb-4">메뉴</h2>
          <ul>
            <li className="mb-2">
              <Link to="/about" className="text-gray-700 hover:underline">
                소개
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="text-gray-700 hover:underline">
                서비스
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:underline">
                문의하기
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-6">{children}</div>
      </div>
    </div>
  );
}

export default LayoutPage;
