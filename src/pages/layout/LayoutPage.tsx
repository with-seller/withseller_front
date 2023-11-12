import {ReactElement} from 'react';
import Logo from '../../assets/react.svg';

interface LayoutPageProps {
    children: ReactElement;
}

function LayoutPage({children}: LayoutPageProps) {
    return (
        <div className="bg-slate-50 min-h-screen flex">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    className="flex items-center justify-between p-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">위드셀러</span>
                            <img className="h-8 w-auto" src={Logo} alt="위드셀러"/>
                        </a>
                    </div>
                    <div>
                        <a
                            href="/login"
                            className="text-md font-semibold leading-6 text-gray-100"
                        >
                            로그인
                        </a>
                    </div>
                </nav>
            </header>
            <div className="flex min-h-full flex-1 flex-col justify-center">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 min-h-screen flex items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default LayoutPage;
