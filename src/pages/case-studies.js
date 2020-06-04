import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '../components/card'
import Link from '../components/link';

export default function guides({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data
  const page = allMarkdownRemark.edges
    .map (edge =>
      <Grid item sm={3} xs={12}>
        <Card
          content={edge.node.frontmatter.description}
          linkText={<Link to={edge.node.fields.slug}> Read More </Link>}
        />
      </Grid>
    )
  return (
    <Layout>
      <Typography variant="h3">
        Case Studies
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
  query caseStudiesQuery {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/case-studies/"}}}, sort: {fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
          id
          html
        }
      }
    }
  }
` 