import React from 'react';
import { Link } from 'react-router-dom';

function MenuPage() {
  return (
    <div className="bg-gray-200 w-1/5 p-6">
      <h2 className="text-2xl font-bold mb-4">메뉴</h2>
      <ul>
        <li className="mb-2">
          <Link to="/product/collect" className="text-gray-700 hover:underline">
            상품수집
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/product/mngt" className="text-gray-700 hover:underline">
            상품관리
          </Link>
        </li>
        <li>
          <Link to="/setting" className="text-gray-700 hover:underline">
            설정
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuPage;
