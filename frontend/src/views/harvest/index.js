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
  CDropdown,
  CDropdownItem,
  CDropdownToggle,
  CDropdownMenu,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
} from '@coreui/react'

import S1 from 'src/assets/images/harvest/green.jpg'
import S2 from 'src/assets/images/harvest/light_green.jpg'
import S3 from 'src/assets/images/harvest/orange.jpg'
import S4 from 'src/assets/images/harvest/yellow.png'
import S5 from 'src/assets/images/harvest/o.jpg'
import S6 from 'src/assets/images/harvest/red.jpg'

import { DocsCallout, DocsExample } from 'src/components'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

const index = () => {
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }


    return (
        <>
        <CCard className="mb-4">
        <CCardBody>
        <CRow xs={{ cols: 1 }} md={{ cols: 2 }} >
        <CCol>
        <CCard>

        <CCarousel controls indicators>
                <CCarouselItem>
                  <img className="d-block w-100" src={S2} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First Crop Harvest Stage</h5>
                    <p>0% - 10%</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={S1} alt="slide 2" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Second Crop Harvest Stage</h5>
                    <p>10% - 20%</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={S3} alt="slide 3" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Third Crop Harvest Stage</h5>
                    <p>20% - 30%</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>

        </CCard>
        </CCol>

        <CCol>
        <br></br>
        <br></br>
        <CCard href="#" style={{ height: '3rem', width: '25rem', textAlign: 'left' }}>Stage ID      : 7</CCard>
        <br></br>
        <br></br>
        <CCard href="#" style={{ height: '3rem', width: '25rem', textAlign: 'left' }}>Range    : 75% - 100%</CCard>
        <br></br>
        <br></br>

        </CCol>

        </CRow>
        </CCardBody> 
        </CCard>

        <CCard className="mb-4">
        <CCardBody>
        <CRow xs={{ cols: 1 }} md={{ cols: 2 }} >
        <CCol>
            
            <h4 id="traffic" className="card-title mb-0">
                Current Status
            </h4>
            <br></br>
            
        <CDropdown>
            <CDropdownToggle color="secondary">Select Plant ID</CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem href="#">A0</CDropdownItem>
                <CDropdownItem href="#">A1</CDropdownItem>
                <CDropdownItem href="#">A2</CDropdownItem>
                <CDropdownItem href="#">A3</CDropdownItem>
                <CDropdownItem href="#">A4</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>

        </CCol>

        <CCol>
        <br></br>
        <br></br>
        <CCard href="#" style={{ height: '3rem', width: '25rem', textAlign: 'left' }}>Plant ID      : A0</CCard>
        <br></br>
        <br></br>
        <CCard href="#" style={{ height: '3rem', width: '25rem', textAlign: 'left' }}>Crop Harvest Stage    : 1</CCard>
        <br></br>
        <br></br>

        </CCol>

        </CRow>
        </CCardBody> 
        </CCard>

        <br></br>
        <CCard className="mb-4">
        <CCardBody>
          <CRow>
            
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Current Statistics
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        </CCard>
        
        </>
      )
    }
    export default index