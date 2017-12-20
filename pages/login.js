import React, { Component } from 'react'
import Layout from '../components/Layout.js'
import Head from 'next/head'

import FacebookButton from '../components/FacebookLoginButton'

class Login extends Component {
  static getInitialProps = (context) => {
    return {
      title: context.pathname
    }
  }
  componentDidMount() {
    console.log('Did mount')
    if(!window.FB) {
      console.log('FN init')
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '176179636450074',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.11'
        });
          
        FB.AppEvents.logPageView();   
          
      };

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }
  render() {
    return (
      <div>
        <Head>
          <title>Login page</title>
          <script>{console.log('SEO: Login')}</script>
        </Head>
        <Layout>
          <p>{`This is the ${this.props.title} page`}</p>
          <FacebookButton/>
        </Layout>
      </div>
    )
  }
}

export default Login