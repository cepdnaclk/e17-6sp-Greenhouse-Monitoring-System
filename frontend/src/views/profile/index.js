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

  // Set useState(variable, function)
  // Ex variable =firstname, function= setFirstname
  // Destructured array
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

/*  
  var user = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    contactNumber: contactNumber
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    }
  }

  const updateUser = ()=> {
    axios.put('http://localhost:3000/users/updateinfo', user)
    .then((res)=> {
      console.log(res.data);
      if (res.data.success) {
        window.location = '/profile'
      }
    })
  }

  useEffect(() => {
    axios.get("localhost:3000/users/getinfo")
      .then(res => {
        console.log(res);
        setFirstname(res.data[0])
        setLastname(res.data[1])
        setEmail(res.data[2])
        setContactNumber(res.data[3])
      })
      .catch(err => {
        console.log(err)
      })
  }, []
  );
*/  

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
