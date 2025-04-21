import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BoardWrite from "./component/board/BoardWrite.jsx";
import BoardList from "./component/board/BoardList.jsx";
import Header from "./component/layout/Header.jsx";
import Footer from "./component/layout/Footer.jsx";
import BoardDetail from "./component/board/BoardDetail.jsx";
import Main from "./component/layout/Main.jsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>


                <Routes>
                    <Route path="/board" element={<Main />} />
                    <Route path="/boardwrite" element={<BoardWrite />} />
                    <Route path="/boardlist" element={<BoardList />} />
                    <Route path="/boarddetail" element={<BoardDetail />} />
                </Routes>
                <Footer />
        </BrowserRouter>
    );

}

export default App
