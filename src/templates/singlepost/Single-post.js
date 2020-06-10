import React from 'react';
import {graphql} from 'gatsby';
import SEO from '../../components/seo';
import {slugify} from '../../util/UtilityFunctions'
import Img from 'gatsby-image';
import {Link} from 'gatsby';

const SinglePost = ({data}) =>{
    const post = data.markdownRemark.frontmatter
    return(
        <>
            <SEO title = {post.title}/>
            <h1>{post.title}</h1>
            <Img fluid = {post.image.childImageSharp.fluid}/>

            <div dangerouslySetInnerHTML = {{ __html: data.markdownRemark.html}}></div>
            {/* <ul>
                {
                    post.tags.map(tag => (
                        <li key = {tag}>
                            <Link to = {`/tag/${slugify(tag)}`}>
                                {tag}
                            </Link>
                        </li>
                    ))
                }
            </ul> */}
        </>
    )
}

export const postQuery = graphql`
query blogPostBySlug($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}){
        id
        html
        frontmatter{
            title
            author
            date(formatString: "MMM Do YYYY")
            image{
                childImageSharp{
                    fluid(maxWidth: 300){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}
`

export default SinglePost;