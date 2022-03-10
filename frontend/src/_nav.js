import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cibToggl,
  cidContact,
  cilUser,
  cilStar,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/login',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Overview',
    to: '/login',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Predictions',
    to: '/login',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/login',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
  },
  {
    component: CNavTitle,
  },
  {
    component: CNavTitle,
  },
  {
    component: CNavTitle,
  },
  {
    component: CNavTitle,
  },
  {
    component: CNavTitle,
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/login',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Signout',
    to: '/login',
    icon: <CIcon icon={cibToggl} customClassName="nav-icon" />,
  },
]

export default _nav
