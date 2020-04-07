import React from "react"
import { Link } from "gatsby"
import "../components/index.css"

const IndexPage = () => (
  <React.Fragment>
    <h1>
      Southern Forest Area Change Tools - SouthFACT
    </h1>
    <h3>
      <ul className='nav'>
        <Link 
          to='/'
          className='link'
        >
          Home
        </Link>
        <Link 
          to='/map'
          className='link'
        >
          Map
        </Link>
        <Link 
          to='/customRequests'
          className='link'
        >
          Custom Requests
        </Link>
        <Link 
          to='/learn'
          className='link'
        >
          Learn
        </Link>
        <Link 
          to='/contact'
          className='link'
        >
          Contact
        </Link>
      </ul>
    </h3>
  </React.Fragment>
)

export default IndexPage