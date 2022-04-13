import React, {  useEffect, useState } from 'react'

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
    CFormLabel,
  } from '@coreui/react'
  
import axios from 'axios';
import { getState } from 'core-js/modules/web.url-search-params';

const index = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  
  var credentials = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    contactNumber: contactNumber
  };

  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    }
  }

  const updateUser = ()=> {
    axios.put('http://localhost:3000/users/updateinfo', credentials)
    .then((res)=> {
      console.log(res.data);
      if (res.data.success) {
        window.location = '/_dashboard'
      }
    })
  }

  useEffect(() => {
      setFirstname(userInfo.firstname)
      setLastname(userInfo.lastname)
      setEmail(userInfo.email)
      setContactNumber(userInfo.contactNumber)
  }, [userInfo]
  );
  

  return (
    <>
      <CRow>
        <CCol md={6}>
            <CCard style={{ height: '37rem', width: '76.5rem' }} className="p-4">
                <CCard style={{ height: '37rem', width: '40rem', borderColor:'#fff' }} className="p-4">
                <CForm>
                    <CFormLabel> First Name </CFormLabel><br></br>
                    <CFormInput value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder="Enter First name" autoComplete="firstname"/>
                    <br></br>
                    <CFormLabel> Last Name </CFormLabel><br></br>
                    <CFormInput value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="Enter Last name" autoComplete="lastname"/>
                    <br></br>
                    <CFormLabel> Email Address </CFormLabel><br></br>
                    <CFormInput value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email address" autoComplete="email"/>
                    <br></br>
                    <CFormLabel> Contact Number</CFormLabel><br></br>
                    <CFormInput value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)} placeholder="Enter Contact Number" autoComplete="contactNumber"/>
                    <br></br>
                    <br></br>

                    <CButton color="primary" className="px-4">
                        Update
                    </CButton>
                </CForm>
                </CCard>
            </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default index
