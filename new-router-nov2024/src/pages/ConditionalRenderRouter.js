import React from 'react'
import { Link, Outlet} from 'react-router-dom';


//nested route Element example
const ConditionalRenderRouter = () => {
  return (

    <div>Conditional Render Routes
    <nav>
      <Link to="users">Users</Link>
    </nav>
    <div style={{ marginTop: '20px' }}>
    <Outlet /> 
    </div>
  </div>
 
  )
}

export default ConditionalRenderRouter