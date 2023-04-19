import React from 'react'
import DashboardTable from './DashboardTable'
import { Certificates } from '../../../lib/types'

const DashboardTableContainer = () => {

  const certificates = [
    {
      id: "1",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "2",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "3",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "1",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "2",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "3",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "1",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "2",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "3",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "1",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "2",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "3",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
  ]

  return <DashboardTable certificates={{certificates}}/>
}

export default DashboardTableContainer

