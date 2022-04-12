import React, { useState, Suspense } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import axios from 'axios';
import DefaultLayout from 'src/layout/DefaultLayout'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  var credentials = {
    username: username,
    password: password
  };

  const authenticateUser = ()=> {
    axios.post('http://localhost:3000/users/login', credentials)
    .then((res)=> {
      console.log(res.data);
      if (res.data.success) {
        window.location = '/_dashboard'
      }
    })
  }

  return (
    <div className="bg-home min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
            <CCard className="card-back">
              <CCardBody>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton onClick={authenticateUser} color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
        </CContainer>    
    </div>
  )
}

export default Login
