
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MovieDetailPage from './pages/MovieDetailPage'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {

  //  const {pathname,origin} = window.location
  //  console.log(pathname,origin);

  //  if(pathname=== "/"){
  //   return (<div>
  //     <NavBar/>
  //     <HomePage/>
  // </div>)
  //  }

  //  if(pathname === "/login"){
  //   return <LoginPage/>
  //  }
   
  // else {
  //   return (<div>
  //       Not Found Page
  //   </div>)
  // }

    return (
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movie_details/:id' element= {<MovieDetailPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<h1>Not Found Page</h1>}/>
      </Routes>
      </BrowserRouter>
    )
}

export default App


