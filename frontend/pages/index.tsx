import React, { Component } from "react";

import Link from "next/link";
import NextSeo from "next-seo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./../components/ErrorMessage";
import Grid from "./../components/Grid";
import Intro from "./../components/Intro";
import Layout from "./../components/Layout";
import Loader from "../components/Loader";
import PageWrapper from "../components/PageWrapper";
import StyledLink from "../components/styles/Button";
import StyledSection from "../components/styles/Section";
import { SubHeading } from "../components/styles/Headings";
import Techstack from "../components/Techstack";

const headerImageStyle = {
  marginTop: 50,
  marginBottom: 50
};

export const HOME_QUERY = gql`
  query home($slug: String!) {
    pageBy(uri: $slug) {
      title
      slug
      link
      content(format: RAW)
      excerpt
      seo {
        title
        metaDesc
      }
    }

    posts(first: 4) {
      edges {
        node {
          id
          title
          link
          slug
          date
          content
          excerpt
          featuredImage {
            mediaDetails {
              sizes {
                name
                sourceUrl
              }
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

class Index extends Component {
  IntroSection: any;

  props: any;

  render() {
    return (
      <>
        <Query
          query={HOME_QUERY}
          variables={{
            slug: "welcome"
          }}
        >
          {({ error, loading, data }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader />;
            if (!data.pageBy) return <p>No Data returned</p>;

            const postItems = data.posts.edges;
            const page = data.pageBy;
            const { seo } = page;
            const seoData = {
              title: seo.title,
              description: seo.metaDesc
            };

            return (
              <>
                <NextSeo config={seoData} />
                <Layout>
                  <StyledSection>
                    <Intro
                      ref={section => {
                        this.IntroSection = section;
                      }}
                      title={page.title ? page.title : null}
                      content={page.content ? page.content : null}
                    />
                  </StyledSection>
                  <StyledSection>
                    <Techstack />
                  </StyledSection>
                  <StyledSection>
                    <SubHeading>Latest from the blog</SubHeading>
                    <Grid cards={postItems} linkType="post" />
                    <div className="actions">
                      <Link href="/blog">
                        <StyledLink>Read more</StyledLink>
                      </Link>
                    </div>
                  </StyledSection>
                </Layout>
              </>
            );
          }}
        </Query>
      </>
    );
  }

  // componentDidMount = () => {
  //     if ("serviceWorker" in navigator) {
  //         navigator.serviceWorker.register("/static/service-worker.js")
  //             .catch(err => console.error("Service worker registration failed", err));
  //     } else {
  //         console.log("Service worker not supported");
  //     }
  // }
}

export default PageWrapper(Index);
