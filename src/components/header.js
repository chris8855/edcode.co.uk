import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Image, Flex } from "rebass"
import useFirebase from "../hooks/useFirebase"

const Header = ({ siteTitle }) => {
  const { user } = useFirebase()
  console.log("user", user)
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Flex>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <Image src={user && user.photoURL} variant="avatar" />
        </Flex>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
