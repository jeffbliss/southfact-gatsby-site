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
import Button from '@material-ui/core/Button';

export default function guides({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMdx } = data
  const page = allMdx.edges
    .map (edge =>
      <React.Fragment>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar variant="square" alt="CS" src={edge.node.frontmatter.linkImage} />
          </ListItemAvatar>
          <ListItemText
            secondary={<Button size="small"><Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link></Button>}
          >
            {<Typography variant="body1">{edge.node.frontmatter.description}</Typography>}
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
    allMdx(filter: {fields: {slug: {regex: "/case-studies/"}}}, sort: {fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            description
            linkImage
          }
          fields {
            slug
          }
        }
      }
    }
  }
` 