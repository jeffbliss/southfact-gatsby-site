import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import Video from "../components/video"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

export default function guides({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data
  const page = allMarkdownRemark.edges
    .map (edge =>
      <React.Fragment>
        <ListItem alignItems="flex-start">
          <ListItemText>
            {edge.node.frontmatter.title}
            <Video
              videoSrcURL={edge.node.frontmatter.videoSourceURL}
              videoTitle={edge.node.frontmatter.videoTitle}
            />
          </ListItemText>
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    )
  return (
    <Layout>
      <Typography variant="h3">
        Guides
      </Typography>
      <List>
        {page}
      </List>
    </Layout>
  ) 
}

export const pageQuery = graphql`
  query guidesQuery {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/guides/"}}}, sort: {fields: frontmatter___order}) {
      edges {
        node {
          frontmatter {
            title
            videoSourceURL
            videoTitle
            order
          }
        }
      }
    }
  }
` 