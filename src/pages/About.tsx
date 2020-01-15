import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import MainLayout from '../layouts/mainLayout'

const About = () => (
  <MainLayout>
    <Page>
      <Container>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <ul></ul>
      </Container>
    </Page>
  </MainLayout>
)

export default About
