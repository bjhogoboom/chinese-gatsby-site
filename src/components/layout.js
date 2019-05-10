/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

import ChineseAppBar from "./chineseAppBar"

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';


const Layout = ({ children, gridDirection, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <CssBaseline/>
        <ChineseAppBar title={pageTitle} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 1.0875rem 1.45rem`,
            paddingTop: 0,
            fontFamily: 'Roboto'
          }}
        >
            <Grid container spacing={8} alignItems="center" justify="center" direction={gridDirection}>{children}</Grid>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
