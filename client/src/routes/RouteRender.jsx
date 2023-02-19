import React, {useContext, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import Store from '../context/GlobalContext'

function RouteRender() {
  const { state } = useContext(Store);

  return (
    <BrowserRouter>
        <Routes>
          {state.userLoggedIn ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              {/* <Route path="*" element={<NoMatch />} /> */}
            </>
          ) : (
            <>
              {/* <Route path="*" element={<NoMatch />} /> */}
              <Route path="/*" element={<PublicRoutes />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
  )
}

export default RouteRender