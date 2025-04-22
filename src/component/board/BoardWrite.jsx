//  BoardWrite.jsx
//  25. 4. 15.
import { Link } from 'react-router-dom';

function BoardWrite() {


  return (
      <form className="bg-white shadow p-6 rounded space-y-4 max-w-xl mx-auto mt-10 text-center">
          {/* 날짜 표시 */}
          <div className="text-gray-500 text-sm">📅 {new Date().toLocaleDateString()}</div>

          {/* 한 줄 입력 */}
          <input
              type="text"
              placeholder="오늘 하루를 한 문장으로 표현해보세요!"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={20}
          />
          {/* 저장 버튼 */}
          <div className="flex justify-end">
              <button
                  type="submit"
                  className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                  저장하기
              </button>
          </div>
      </form>
  );
}

export default BoardWrite;