import * as React from 'react'
import { graphql } from 'gatsby'

import Post from '../components/Post'
// import Container from '../components/Container'
import IndexLayout from '../layouts'
import Container from '@material-ui/core/Container'
interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        date: string
        tag: string
        path: string
        layout: string
        category: string
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
  return (
    <IndexLayout>
      <Container>
        <Post data={data}></Post>
      </Container>
    </IndexLayout>
  )
}

export default PageTemplate

//알아서 주소를 파싱해 값으로 던져준다.
export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        tag
        path
        layout
        category
      }
    }
  }
`
