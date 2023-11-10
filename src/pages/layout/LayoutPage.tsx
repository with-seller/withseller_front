import { ReactElement } from 'react';

interface LayoutPageProps {
  children: ReactElement;
}

function LayoutPage({ children }: LayoutPageProps) {
  return (
      <div className="bg-slate-50 min-h-screen flex">
        <header className="fixed bg-white shadow w-full">
          <nav className="container mx-auto flex items-center justify-between" aria-label="Global">
            <div className="flex">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">위드셀</span>
                <img className="h-8 w-auto" src="로고 이미지 URL" alt="위드셀" />
              </a>
            </div>
            <div>
              <a href="/login" className="text-md font-semibold leading-6 text-gray-900">
                로그인 <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>
        <div className="container mx-auto ">
          <div className="w-full">{children}</div>
        </div>
      </div>

  );
}

export default LayoutPage;
