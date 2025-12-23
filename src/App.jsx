import React, { Suspense } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import LayoutPage from './components/layout/LayoutPage'
import StartPage from './modules/start/StartPage'

const TeacherPage = React.lazy(() => import('./modules/Teacher/TeacherPage'))
const StudentsPage = React.lazy(() => import('./modules/Students/StudentsPage'))
const LoginPage = React.lazy(() => import('./modules/Login/LoginPage'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route element={<LayoutPage />} >
          <Route path={"/main"} element={<StartPage/>}/>
            <Route path={"/teachers"} element={<TeacherPage />} />
            <Route path={"/students"} element={<StudentsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
