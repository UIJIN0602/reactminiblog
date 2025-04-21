import './BoardDetail.css'
function BoardDetail() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex items-center justify-center w-full">
                <div className="max-w-xl w-full bg-white p-6 rounded shadow space-y-4">
                    {/* 날짜 */}
                    <div className="text-gray-400 text-sm mb-4">📅 2025.04.21</div>
                    <div className="text-3xl text-red-500 font-bold">테스트</div>
                    {/* 일기 내용 */}
                    <div className="text-xl leading-relaxed text-gray-800 mb-4">
                        오늘 리액트 공부하면서 일기장을 만들어봤다. 꽤 재미있다!
                    </div>

                    {/* 버튼 영역 */}
                    <div className="flex justify-end space-x-2 mt-8">
                        <button className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500">
                            ✏️ 수정
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                            🗑 삭제
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BoardDetail;
