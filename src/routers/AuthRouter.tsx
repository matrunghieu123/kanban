import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, SignUp } from '../screens'
import { Typography } from 'antd'

const { Title } = Typography

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div 
          className='col d-none d-lg-block text-center'
					style={{ marginTop: '15%' }}>
          <div className="mb-4">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/kanban-50572.appspot.com/o/kanban-logo.png?alt=media&token=9be71c6a-4d9b-4cf4-af93-f6f3566c58bb" 
              alt="" 
              style={{
                width: 256,
                objectFit: 'cover',
              }}
            />
          </div>
          <Title>KANBAN</Title>
        </div>
        <div className="col content-center">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/sign-up' element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default AuthRouter