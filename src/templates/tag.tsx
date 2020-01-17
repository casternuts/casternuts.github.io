import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Post from '../components/Post'
import Page from '../components/Page'

// import Container from '../components/Container'
import MainLayout from '../layouts/mainLayout'
import Container from '@material-ui/core/Container'
import { Chip, Divider, Typography } from '@material-ui/core'
import PostList from '../components/PostList'
interface TagTemplateProps {
  data: {
    allMarkdownRemark: {
      totalCount: number
      nodes: [
        {
          frontmatter: {
            category: string
            path: string
            tag: string
            title: string
            date: string
          }
          id: string
          excerpt: string
        }
      ]
    }
  }
}

const tagTemplate: React.FC<TagTemplateProps> = ({ data }) => {
  console.log(data)
  return (
    <MainLayout>
      <Page>
        <Container>
          <div>
            <Typography variant="h6" gutterBottom>
              <Link style={{ textDecoration: 'none' }} to={'/page-tag/'}>
                ← 태그 목록으로 돌아가기
              </Link>
            </Typography>
            <Divider></Divider>
          </div>
          <div style={{ width: '100%', display: 'inline-block' }}>
            <div>
              <h1 style={{ float: 'left' }}> Tag #{typeof window !== `undefined` && window.location && location.pathname.split('/')[2]}</h1>
            </div>
          </div>

          <ul>
            {data.allMarkdownRemark.nodes.map(node => {
              return <PostList key={node.id} data={node}></PostList>
            })}
          </ul>
        </Container>
      </Page>
    </MainLayout>
  )
}

export default tagTemplate

//알아서 주소를 파싱해 값으로 던져준다.
export const query = graphql`
  query tagTemplateQuery($fieldValue: String!) {
    allMarkdownRemark(filter: { frontmatter: { tag: { eq: $fieldValue } } }) {
      totalCount
      nodes {
        frontmatter {
          category
          path
          tag
          title
          date
        }
        id
        excerpt(truncate: true, pruneLength: 200)
      }
    }
  }
`
