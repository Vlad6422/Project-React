import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>Finshark Design Page</h1>
    <h2>This is Finshark's design page.</h2>
    <RatioList/>
    <Table/>
    </>
  )
}

export default DesignPage