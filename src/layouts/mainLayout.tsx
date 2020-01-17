import * as React from 'react'

import Helmet from 'react-helmet'

import { graphql, useStaticQuery } from 'gatsby'

import clsx from 'clsx'

import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'

//  import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu'

import ListItem from '@material-ui/core/ListItem'

import ListItemText from '@material-ui/core/ListItemText'

import { Link, navigate } from 'gatsby'

import Hidden from '@material-ui/core/Hidden'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

import GitHubIcon from '@material-ui/icons/GitHub'
import InfoIcon from '@material-ui/icons/Info'

//nin 으로 이력서는 출력 안되게 했음
const mainQuery = graphql`
  query mainQuery {
    allMarkdownRemark(filter: { frontmatter: { about: { nin: "about" } } }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            path
          }
          id
        }
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

const drawerWidth = 300

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  paperFlex: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5)
  },
  mainLogo: {
    padding: '0 2rem',
    textDecoration: 'none',
    marginTop: '1.75rem',
    marginBottom: '1.75rem',
    fontSize: '2rem',
    lineHeight: '2rem',
    color: '#212529',
    display: 'block',
    position: 'relative'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#fff',
    color: '#000'
  },
  appBarHeader: {
    textAlign: 'center',
    fontSize: '33px',
    padding: '10px'
  },

  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    paddingTop: '0px',
    paddingLeft: '0px',
    backgroundColor: '#f1f3f5'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  mainlistItemSelected: {
    borderRight: '#0095da !important',
    borderStyle: 'groove !important',
    backgroundColor: '#fff !important',
    color: '#0095da',
    fontWeight: 'bold'
  },
  mainlistItem: {
    '&:hover': {
      borderRight: '#0095da !important',
      borderStyle: 'groove !important'
    },
    '&:active': {
      borderRight: '#0095da',
      borderStyle: 'groove'
    }
  },
  mainlist: {
    backgroundColor: '#fff',
    color: '#000',
    textDecoration: 'none'
  },
  menutab: {
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1
      }
    }
  },
  copyright: {
    color: '#cccccc',
    fontSize: '16px',
    fontWeight: 600,
    textAlign: 'center'
  }
}))

const menu = [
  {
    id: 0,
    label: '게시물 목록',
    path: '/'
  },
  {
    id: 1,
    label: '소개 입니다',
    path: '/page-me/'
  },
  {
    id: 2,
    label: 'TAG',
    path: '/page-tag/'
  }
]
const mainLayout: React.FC = ({ children }) => {
  const data = useStaticQuery(mainQuery)
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  console.log(data)
  // console.log(window.location)
  // tab을 위한 작업
  const handleChange = (event: any, newValue: number) => {
    let tabidx = menu.filter(item => item.id == newValue)
    navigate(tabidx[0].path)
  }
  const buttonClick = (value: any) => {
    console.log(value)
    if (value) navigate(value)
  }
  // tab이 눌려져있는 효과를 표현하기 위한 memohook
  if (typeof window !== `undefined`) {
    React.useMemo(() => {
      if (location.pathname.split('/')[1] != '') {
        let tabidx = menu.filter(item => item.path == '/' + location.pathname.split('/')[1] + '/')
        if (tabidx.length > 0) setValue(tabidx[0].id)
      } else {
        //navigate('/')
        setValue(0)
      }
    }, [value])
  }

  return (
    <div className={classes.root}>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords }
        ]}
      />

      <Hidden smDown>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper)
          }}
          open={true}
        >
          <div>
            <Link className={classes.mainLogo} to="/">
              <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
                {data.site.siteMetadata.title}
              </Typography>
            </Link>
            <List>
              <div>
                <Link to={'/'} className={classes.mainlist}>
                  <ListItem classes={{ root: classes.mainlistItem, selected: classes.mainlistItemSelected }} selected={value === 0} button>
                    <ListItemText primary="게시글 목록" />
                  </ListItem>
                </Link>

                <Link to={'/page-me/'} className={classes.mainlist}>
                  <ListItem classes={{ root: classes.mainlistItem, selected: classes.mainlistItemSelected }} selected={value === 1} button>
                    <ListItemText primary="소개" />
                  </ListItem>
                </Link>
                <Link to={'/page-tag/'} className={classes.mainlist}>
                  <ListItem classes={{ root: classes.mainlistItem, selected: classes.mainlistItemSelected }} selected={value === 2} button>
                    <ListItemText primary="태그" />
                  </ListItem>
                </Link>
              </div>
            </List>
          </div>
          <div style={{ width: drawerWidth, position: 'absolute', bottom: '0px' }}>
            <Divider></Divider>
            <div style={{ textAlign: 'center' }}>
              {/* <Avatar style={{ width: '100px', height: '100px', margin: 'auto' }}>C</Avatar> */}
              <Card>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">C</Avatar>}
                  action={<IconButton aria-label="settings"></IconButton>}
                  title="Written by @Casternuts"
                  subheader="일상 기록 및 개발 관련 포스팅"
                />

                <Paper className={classes.paperFlex}>
                  <IconButton style={{ float: 'left' }} aria-label="github" href={'https://github.com/casternuts'}>
                    <GitHubIcon />
                  </IconButton>
                  <IconButton style={{ float: 'left' }} aria-label="resume" onClick={() => buttonClick('/page-me/')}>
                    <InfoIcon />
                  </IconButton>

                  <div className={classes.copyright}>© 2020 casternuts Dev Blog</div>
                </Paper>
              </Card>
            </div>
          </div>
        </Drawer>
      </Hidden>

      <main className={classes.content}>
        <Hidden mdUp>
          <div className={classes.appBar}>
            <div className={classes.appBarHeader}>
              <IconButton style={{ float: 'left' }} aria-label="github" href={'https://github.com/casternuts'}>
                <GitHubIcon />
              </IconButton>
              <IconButton style={{ float: 'right' }} aria-label="resume" onClick={() => buttonClick('/page-me/')}>
                <InfoIcon />
              </IconButton>

              <Typography variant="h4">{data.site.siteMetadata.title}</Typography>
            </div>

            <Tabs variant="fullWidth" value={value} onChange={handleChange} centered indicatorColor="primary">
              {menu.map(item => (
                <Tab className={classes.menutab} key={item.id} label={item.label} />
              ))}
            </Tabs>
          </div>
          <Divider></Divider>
        </Hidden>
        <div>{children}</div>
      </main>
    </div>
  )
}

export default mainLayout
