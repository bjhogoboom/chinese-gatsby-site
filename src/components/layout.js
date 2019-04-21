/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import ChineseAppBar from "./chineseAppBar"
import Grid from '@material-ui/core/Grid';

import 'primereact/resources/themes/nova-light/theme.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const Layout = ({ children }) => (
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
        <ChineseAppBar />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 1.0875rem 1.45rem`,
            paddingTop: 0,
            fontFamily: 'Roboto'
          }}
        >
            <Grid container spacing={8} justify="center">{children}</Grid>
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
