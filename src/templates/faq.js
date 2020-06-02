import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import { TinaCMS } from 'tinacms'
import { remarkForm, useLocalRemarkForm } from 'gatsby-tinacms-remark'
import { HtmlFieldPlugin, MarkdownFieldPlugin } from 'react-tinacms-editor'
import {
  InlineForm,
  InlineTextField,
  InlineWysiwyg,
} from "react-tinacms-inline"
import { usePlugins } from 'tinacms'

function FaqTemplate(props) {
  usePlugins([HtmlFieldPlugin, MarkdownFieldPlugin])


  const formOptions = {
    fields: [
      {
        label: "Title",
        name: "rawFrontmatter.title",
        component: "text",
      },
      {
        label: "Body",
        name: "rawMarkdownBody",
        component: "markdown",
      }
    ]
  }
  const page = props.data.markdownRemark
  //const [data, form] = useLocalRemarkForm(page, formOptions)
  const [markdownRemark] = useLocalRemarkForm(props.data.markdownRemark)

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

export default FaqTemplate
//export default remarkForm(faqTemplate)

export const pageQuery = graphql`
  query faqQuery ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      fileRelativePath
      rawFrontmatter
      rawMarkdownBody
      frontmatter {
        title
        description
      }
      ...TinaRemark
    }
  }
`

/*export const pageQuery = graphql`
  query faqQuery {
    markdownRemark(fields: {slug: {eq: "/faq"}}) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`*/