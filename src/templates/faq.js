import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
//import { TinaCMS } from 'tinacms'
//import { remarkForm } from 'gatsby-tinacms-remark'
//import { HtmlFieldPlugin, MarkdownFieldPlugin } from 'react-tinacms-editor'

/*const cms = new TinaCMS()

cms.plugins.add(HtmlFieldPlugin)
cms.plugins.add(MarkdownFieldPlugin)*/

function faqTemplate(props) {
  const page = props.data.markdownRemark
  return (
    <Layout>
      <Typography variant="h4">
        {page.frontmatter.title}
      </Typography>
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </Typography>
    </Layout>
  )
}

export default faqTemplate
//export default remarkForm(faqTemplate)

export const pageQuery = graphql`
  query faqQuery ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`