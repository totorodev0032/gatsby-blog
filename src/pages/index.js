import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";
import {grapql, StaticQuery} from 'gatsby';
import Post from '../components/Post/Post';
import LandingPage from '../components/LandingPage/LandingPage';
import Parent from '../components/Parent/Parent';
import './index.css';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const IndexPage = () => (
  <>
  {/* <LandingPage/> */}
    <SEO title="Home" />
    <StaticQuery query = {indexQuery} render = {data => {
      return (
        <div className = "parentBlog">
          <div className = "nav"></div>
        <div className = "wrapper_blogbox">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            
              <Post
              key = {node.id}
             title = {node.frontmatter.title} 
             author = {node.frontmatter.author}
             slug = {node.fields.slug}
             date = {node.frontmatter.date}
             body = {node.excerpt}
             fluid = {node.frontmatter.image.childImageSharp.fluid}
             tags = {node.frontmatter.tags}
            />
          ))}
        </div>
        </div>
      )
     } } />
  </>
)

const indexQuery = graphql`
query{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM Do YYYY" )
          author
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 300, maxHeight: 150){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`
export default IndexPage
