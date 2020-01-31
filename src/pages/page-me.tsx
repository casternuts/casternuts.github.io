import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import LayoutMe from '../layouts/Layoutme'
import '../styles/md.css'

const PageMe = ({ data }: any) => {
  const postNode = data.markdownRemark
  return (
    <LayoutMe>
      <Helmet
        title={'Casternuts Info'}
        meta={[
          { name: 'description', content: '캐스터넛트 경력 사항 입니다.' },
          { name: 'keywords', content: '캐스터넛트 개발자, 캐스터,캐스터넛트,프론트앤드,백앤드' }
        ]}
      />
      <div style={{ padding: '20px' }} dangerouslySetInnerHTML={{ __html: postNode.html }} />
    </LayoutMe>
  )
}

export default PageMe
export const pageQuery = graphql`
  query DesignSystem {
    markdownRemark(frontmatter: { about: { eq: "about" } }) {
      id
      html
    }
  }
`
// export const pageMeQuery = graphql`
//   query {
//     allMarkdownRemark(filter: { frontmatter: { about: { eq: "about" } } }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 160)
//           html
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             lang
//             category
//             tag
//           }
//         }
//       }
//     }
//   }
// `
