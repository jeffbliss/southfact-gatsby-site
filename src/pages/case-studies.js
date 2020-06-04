import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';

export default function guides({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data
  const page = allMarkdownRemark.edges
    .map (edge =>
      <React.Fragment>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="CS" src="http://www.southfact.com/sites/all/themes/lsfbootstrap/logo.png" />
          </ListItemAvatar>
          <ListItemText
            primary={<Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>}
            secondary={edge.node.frontmatter.description}
          >
            <Link to={edge.node.fields.slug}></Link>
          </ListItemText>
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    )
  return (
    <Layout>
      <Typography variant="h3">
        Case Studies
      </Typography>
      <List>
        {page}
      </List>
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