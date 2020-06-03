import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '../components/card'
import Link from '../components/Link';
import Video from "../components/video"

export default function faq({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data
  const page = allMarkdownRemark.edges
    .map (edge =>
      <React.Fragment>
        <Grid item sm={6} xs={12}>
          <Typography variant="h5">
            {edge.node.frontmatter.description}
          </Typography>
          <Video
            videoSrcURL={edge.node.frontmatter.videoSourceURL}
            videoTitle={edge.node.frontmatter.videoTitle}
          />
        </Grid>
      </React.Fragment>
    )
  return (
    <Layout>
      <Typography variant="h3">
        Guides
      </Typography>
      <Grid
        container
        justify="center"
        spacing={3}
        style={{ padding: 10 }}
      >
        {page}
      </Grid>
    </Layout>
  ) 
}

export const pageQuery = graphql`
  query guidesQuery {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "Guides"}}}, sort: {fields: frontmatter___order}) {
      edges {
        node {
          frontmatter {
            title
            description
            videoSourceURL
            videoTitle
            order
          }
          html
        }
      }
    }
  }
` 