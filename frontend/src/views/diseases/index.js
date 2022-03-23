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

import A0 from 'src/assets/images/diseases/diseases.PNG'

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
                  
              </CCard>
            </CCol>
            
            
            <CCol>
              <CCard style={{ height: '30rem', width: '30rem', alignItems:'center' }}>
                  <CCardBody>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <CButton href="#" color="light" style={{ height: '3rem', width: '25rem', textAlign: 'left' }}>L1 - Tomatomosaicvirus</CButton>
                    <br></br>
                    <br></br>
                    <CButton href="#" color="light" style={{ height: '3rem', width: '25rem', textAlign: 'left' }}>L2 - TomatoYellowLeafCurlVirus</CButton>
                    <br></br>
                    <br></br>
                    <CButton href="#" color="light" style={{ height: '3rem', width: '25rem', textAlign: 'left' }}>L3 - Bacterial_spot</CButton>
                    <br></br>
                    <br></br>
                    <CButton href="#" color="light" style={{ height: '3rem', width: '25rem', textAlign: 'left' }}>L4 - TomatoYellowLeafCurlVirus</CButton>
                  </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </>
      )
    }
    export default index