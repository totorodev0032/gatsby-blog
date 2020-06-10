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

const IndexPage = () => (
  <>
  <LandingPage/>
    <SEO title="Home" />
    <StaticQuery query = {indexQuery} render = {data => {
      return (
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
              fluid(maxWidth: 400,){
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
