import React, { Component } from "react";

import { Config } from "../config";
import Error from "next/error";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import PageWrapper from "../components/PageWrapper";
import fetch from "isomorphic-unfetch";

class Preview extends Component {
    state: { post: any; };
    props: any;
    
    constructor() {
        super();
        this.state = {
            post: null
        };
    }

    componentDidMount() {
        const { id, wpnonce } = this.props.url.query;
        fetch(
            `${
                Config.apiUrl
            }/wp-json/postlight/v1/post/preview?id=${id}&_wpnonce=${wpnonce}`,
            { credentials: "include" } // required for cookie nonce auth
        )
            .then(res => res.json())
            .then(res => {
                this.setState({
                    post: res
                });
            });
    }

    render() {
        if (
            this.state.post &&
            this.state.post.code &&
            this.state.post.code === "rest_cookie_invalid_nonce"
        )
            return <Error statusCode={404} />;

        return (
            <Layout>
               
                <h1>{this.state.post ? this.state.post.title.rendered : ""}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: this.state.post
                            ? this.state.post.content.rendered
                            : ""
                    }}
                />
            </Layout>
        );
    }
}

export default PageWrapper(Preview);