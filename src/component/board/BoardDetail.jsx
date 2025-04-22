import './BoardDetail.css'
function BoardDetail() {
    return (
        <div className="flex items-center justify-center min-h-screen text-center">
            <div className="flex items-center justify-center w-full">
                <div className="max-w-xl w-full bg-white p-6 rounded shadow space-y-4">
                    {/* 날짜 */}
                    <div className="text-gray-400 text-sm mb-4">📅 {new Date().toLocaleDateString()}</div>
                    {/* 일기 내용 */}
                    <div className="text-xl leading-relaxed text-gray-800 mb-4">
                        오늘 리액트 공부하면서 일기장을 만들어봤다. 꽤 재미있다!
                    </div>

                    {/* 버튼 영역 */}
                    <div className="flex justify-end space-x-6 mt-8">
                        <button className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
                            ✏️ 수정
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600">
                            🗑 삭제
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BoardDetail;
