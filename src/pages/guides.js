import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Video from "../components/video"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function guides({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data
  const page = allMarkdownRemark.edges
    .map (edge =>
        <Grid item sm={4} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                {edge.node.frontmatter.description}
                <Video
                  videoSrcURL={edge.node.frontmatter.videoSourceURL}
                  videoTitle={edge.node.frontmatter.videoTitle}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
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
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "guides"}}}, sort: {fields: frontmatter___order}) {
      edges {
        node {
          frontmatter {
            title
            description
            videoSourceURL
            videoTitle
            order
          }
        }
      }
    }
  }
` 