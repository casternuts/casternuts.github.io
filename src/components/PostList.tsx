import * as React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Chip, Divider, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})
interface PostListProps {
  data: {
    id: string
    frontmatter: {
      category: string
      path: string
      tag: string
      title: string
      date: string
    }
    excerpt: string
  }
}

const PostList: React.FC<PostListProps> = ({ data }) => {
  const classes = useStyles()

  return (
    <Card style={{ margin: '10px' }} className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          {data.frontmatter.category}
        </Typography>
        <Typography variant="h6" component="h2">
          <Link style={{ textDecoration: 'none' }} to={data.frontmatter.path}>
            {data.frontmatter.title}
          </Link>
        </Typography>
        <Typography variant="subtitle2" className={classes.pos} color="textSecondary">
          {data.frontmatter.date}
        </Typography>
        <Divider style={{ margin: '10px 0px' }}></Divider>
        <Typography variant="body2" component="p">
          {data.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip color="primary" label={data.frontmatter.tag}></Chip>
      </CardActions>
    </Card>
  )
}

export default PostList
