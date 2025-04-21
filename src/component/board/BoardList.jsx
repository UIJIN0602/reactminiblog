import {useState} from "react";


function BoardList() {

    const [text, setText] = useState("");
    const [diaryList, setDiaryList] = useState([]);
    const maxLength = 20;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length === 0) return alert("내용을 입력해주세요.");

        const newEntry = {
            id: Date.now(), // 고유 ID
            date: new Date().toLocaleDateString(),
            content: text,
        };

        // 최신 글이 위로 오게 추가
        setDiaryList([newEntry, ...diaryList]);
        setText(""); // 입력창 초기화
    };


    return (
        <div className="max-w-xl mx-auto px-4 py-10 space-y-8">
            {/* 글쓰기 폼 */}
            <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded space-y-4">
                <div className="text-gray-500 text-sm">📅 {new Date().toLocaleDateString()}</div>

                {/*<div className="relative">*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        value={text}*/}
                {/*        onChange={(e) => setText(e.target.value)}*/}
                {/*        maxLength={maxLength}*/}
                {/*        placeholder="오늘 하루를 한 문장으로 표현해보세요!"*/}
                {/*        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"*/}
                {/*    />*/}
                {/*    <div className="absolute right-2 bottom-1 text-xs text-gray-400">*/}
                {/*        {text.length} / {maxLength}*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="flex justify-end">*/}
                {/*    <button*/}
                {/*        type="submit"*/}
                {/*        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"*/}
                {/*    >*/}
                {/*        저장하기*/}
                {/*    </button>*/}
                {/*</div>*/}
            </form>

            {/* 작성된 일기 리스트 */}
            <div className="space-y-4">
                {diaryList.length === 0 ? (
                    <p className="text-center text-gray-400">아직 작성한 일기가 없어요.</p>
                ) : (
                    diaryList.map((entry) => (
                        <div key={entry.id} className="bg-white p-4 rounded shadow border">
                            <div className="text-gray-400 text-sm">{entry.date}</div>
                            <div className="text-lg mt-1">{entry.content}</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default BoardList;