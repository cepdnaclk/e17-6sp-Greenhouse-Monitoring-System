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
import A1 from 'src/assets/images/plants/2.jpg'
import A2 from 'src/assets/images/plants/3.jpg'
import A3 from 'src/assets/images/plants/4.png'
import B1 from 'src/assets/images/plants/6.png'
import B2 from 'src/assets/images/plants/7.png'
import B3 from 'src/assets/images/plants/8.png'
import B0 from 'src/assets/images/plants/9.jpg'


const index = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  return (
    <>
      <CRow xs={{ cols: 1 }} md={{ cols: 4 }} >
        <CCol>
          <CCard style={{ height: '18rem', width: '18rem' }}>
            <CCardImage orientation="top" src={A0} style={{ height: '15rem', width: '18rem' }}/>
              <CCardBody>
                <CButton href="./one_plant_overview">A0</CButton>
              </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard style={{ height: '18rem', width: '18rem' }}>
            <CCardImage orientation="top" src={A1} style={{ height: '15rem', width: '18rem' }}/>
              <CCardBody>
                <CButton href="#">A1</CButton>
              </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard style={{ height: '18rem', width: '18rem' }}>
            <CCardImage orientation="top" src={A2} style={{ height: '15rem', width: '18rem' }}/>
              <CCardBody>
                <CButton href="#">A2</CButton>
              </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard style={{ height: '18rem', width: '18rem' }}>
            <CCardImage orientation="top" src={A3} style={{ height: '15rem', width: '18rem' }}/>
              <CCardBody>
                <CButton href="#">A3</CButton>
              </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <br></br>
      <br></br>
      <CRow xs={{ cols: 1 }} md={{ cols: 4 }} >
        <CCol>
          <CCard style={{ height: '18rem', width: '18rem' }}>
            <CCardImage orientation="top" src={B0} style={{ height: '15rem', width: '18rem' }}/>
              <CCardBody>
                <CButton href="#">B0</CButton>
              </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard style={{ height: '18rem', width: '18rem' }}>
            <CCardImage orientation="top" src={B1} style={{ height: '15rem', width: '18rem' }}/>
              <CCardBody>
                <CButton href="#">B1</CButton>
              </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard style={{ height: '18rem', width: '18rem' }}>
            <CCardImage orientation="top" src={B2} style={{ height: '15rem', width: '18rem' }}/>
              <CCardBody>
                <CButton href="#">B2</CButton>
              </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard style={{ height: '18rem', width: '18rem' }}>
            <CCardImage orientation="top" src={B3} style={{ height: '15rem', width: '18rem' }}/>
              <CCardBody>
                <CButton href="#">B3</CButton>
              </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default index
