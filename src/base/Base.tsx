import {BrowserRouter, Route, Routes} from "react-router-dom";

import NavBar from "../components/navigation/NavBar.tsx";
import PageNotFound from "../pages/http404/PageNotFound.tsx";

import './Base.css'
import ThreadList from "../pages/threadList/ThreadList.tsx";

function Base(){

    return (
        <>
            <NavBar/>
            <div id="content">
                <BrowserRouter>
                    <Routes>
                        {/*<Route path="/" element={<MainPage/>}/>*/}
                        <Route path={'/threads/tech-support/:page'} element={
                            <ThreadList threadType={'tech-support'} name={'Техническая поддержка'}/>
                        } />
                        <Route path={'/threads/misc/:page'} element={
                            <ThreadList threadType={'misc'} name={'Жидкое мясо'}/>
                        } />
                        <Route path={'/threads/guids/:page'} element={
                            <ThreadList threadType={'guids'} name={'Гайды и заметки'}/>
                        } />
                        <Route path="*" element={
                            <PageNotFound/>
                        }/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default Base;