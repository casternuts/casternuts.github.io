import * as React from 'react'
import { Chip, Divider, Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import Utterances from './Utterances'
import Container from '../Container'
import './poststyle.css'
interface PostProps {
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
const styleDate = {
  fontSize: '1.125em',
  color: '#868e96'
}

const Post: React.FC<PostProps> = ({ data }) => (
  <Container>
    {' '}
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div>
      <div style={styleDate}>{data.markdownRemark.frontmatter.date}</div>
    </div>
    <Divider></Divider>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    <Divider></Divider>
    <div style={{ marginTop: '40px' }}>
      <Chip label={data.markdownRemark.frontmatter.tag} />
      <Chip label={data.markdownRemark.frontmatter.category} />
    </div>
    <div>
      <Utterances repo="casternuts/casternuts.github.io" />
    </div>
  </Container>
)

export default Post
