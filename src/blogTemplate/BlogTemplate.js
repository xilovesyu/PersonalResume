import React from "react"
import { graphql } from "gatsby"

//This is a template for markdown blog to html
export default function BlogTemplate({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <>
            <div className={"blog markdown-body"}>
                <div className={"header"}>
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                </div>
                <div className={"content"} dangerouslySetInnerHTML={{ __html: html }}/>
            </div>
            <div className={'footer'}>
                Customer Footer
            </div>
        </>
    )
}

export const pageQuery = graphql`
query($path: String!) { 
    markdownRemark(frontmatter: { path: { eq: $path } })
    { 
        html 
        frontmatter 
        { 
            date(formatString: "MMMM DD, YYYY")
            path
            title
        } 
    } 
}
`
