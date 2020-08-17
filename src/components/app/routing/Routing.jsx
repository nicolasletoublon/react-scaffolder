import React from 'react'
import { Route } from 'react-router-dom'
import { DashBoard } from '../../pages/dashboard/Page'
import { GraphQl } from '../../pages/graphql/Page'

const Routing = () => {
  return (
    <>
      <Route path="/" exact component={DashBoard} />
      <Route path="/graphql/" component={GraphQl} />
    </>
  )
}

export { Routing }
