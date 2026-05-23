import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import NavBar from "../components/navigation/NavBar.tsx";
import PageNotFound from "../pages/http404/PageNotFound.tsx";
import ThreadList from "../pages/threadList/ThreadList.tsx";
import ThreadView from "../pages/thread/ThreadView.tsx";
import '../assets/fonts/fonts.css'
import './_main.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <NavBar/>
      <div id="content">
          <HashRouter>
              <Routes>
                  <Route path="/" element={<Navigate to={'/threads/0'}/>}/>
                  <Route path={'/threads/:page'} element={<ThreadList/>} />
                  <Route path={'/thread/:id/page/:page'} element={<ThreadView/>}/>
                  <Route path="*" element={<PageNotFound/>}/>
              </Routes>
          </HashRouter>
      </div>
  </StrictMode>
)
