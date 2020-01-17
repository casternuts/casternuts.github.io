import * as React from 'react'

import Page from '../components/Page'
import Container from '@material-ui/core/Container'
import { graphql, useStaticQuery } from 'gatsby'
import MainLayout from '../layouts/mainLayout'
import { Chip, Divider, Typography, Avatar } from '@material-ui/core'
import { Link, navigate } from 'gatsby'
const tagQuery = graphql`
  query tagQuery {
    allMarkdownRemark(filter: { frontmatter: { about: { nin: "about" } } }) {
      group(field: frontmatter___tag) {
        totalCount
        fieldValue
      }
      totalCount
    }
  }
`

const PageTag = () => {
  const data = useStaticQuery(tagQuery)

  return (
    <MainLayout>
      <Page>
        <Container>
          <h1>태그 목록</h1>
          <Divider></Divider>
          {data.allMarkdownRemark.group.map((item: any) => (
            <Link key={item.fieldValue} style={{ textDecoration: 'none' }} to={`/page-tag/${item.fieldValue}`}>
              <Chip
                style={{ margin: '.375rem' }}
                key={item.fieldValue}
                variant="outlined"
                color="primary"
                label={item.fieldValue}
                avatar={<Avatar>{item.totalCount}</Avatar>}
              />
            </Link>
          ))}
        </Container>
      </Page>
    </MainLayout>
  )
}

export default PageTag
