import * as React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Page from '../components/Page'
// import Container from '../components/Container'
import MainLayout from '../layouts/mainLayout'
import { graphql, useStaticQuery } from 'gatsby'
///
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import styled from '@emotion/styled'
import { heights, dimensions, colors } from '../styles/variables'
///
import { Router } from '@reach/router'
import PostList from '../components/PostList'

const mainIndexQuery = graphql`
  query mainIndexQuery {
    allMarkdownRemark(filter: { frontmatter: { about: { nin: "about" } } }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            path
            date(locale: "")
            tag
            category
          }
          id
        }
      }
      totalCount
      pageInfo {
        itemCount
        pageCount
        hasPreviousPage
        hasNextPage
        currentPage
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const IndexPage: React.FC = () => {
  const data = useStaticQuery(mainIndexQuery)

  return (
    <MainLayout>
      <Page>
        <Container>
          <div>
            <h2>최근 작성한 게시글 목록</h2>
          </div>
          <ul style={{ paddingLeft: '5px' }}>
            {data.allMarkdownRemark.edges.map(({ node }: any) => (
              <PostList key={node.id} data={node}></PostList>
              // <li key={node.id}>
              //   <h2>
              //     <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              //   </h2>
              //   <h3>{node.frontmatter.date}</h3>
              //   <p>{node.excerpt}</p>
              //   <hr />
              // </li>
            ))}
          </ul>
        </Container>
      </Page>
    </MainLayout>
  )
}

export default IndexPage
