import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import A0 from 'src/assets/images/plants/1.jpg'

const index = () => {
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    return (
        <>
          <CRow xs={{ cols: 1 }} md={{ cols: 2 }} >
            <CCol style={{ alignItems:'center' }}>
              <CCard style={{ height: '30rem', width: '30rem', alignItems:'center' }}>
                <CCardImage orientation="top" src={A0} style={{ height: '30rem', width: '30rem' }}/>
                  <CCardBody>
                    <CButton href="#">A0</CButton>
                  </CCardBody>
              </CCard>
            </CCol>
            
            
            <CCol>
              <CCard style={{ height: '30rem', width: '30rem', alignItems:'center' }}>
                  <CCardBody>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <CButton href="./diseases" color="success" style={{ height: '3rem', width: '15rem' }}>View Diseases</CButton>
                    <br></br>
                    <br></br>
                    <CButton href="./growth" color="danger" style={{ height: '3rem', width: '15rem' }}>View Growth</CButton>
                    <br></br>
                    <br></br>
                    <CButton href="./harvest" color="info" style={{ height: '3rem', width: '15rem' }}>View Harvest</CButton>
                  </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </>
      )
    }
    export default index