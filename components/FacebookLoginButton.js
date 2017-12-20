import React, { Component } from 'react';

const XMeepshopDomain = 'barrytest.stage.meepcloud.com'
class FacebookButton extends Component {

  // for api server to auth
  callFBLoginAuth = (response) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.responseType = 'json';
    xhr.open('POST', `http://api.stage.meepcloud.com/facebook/fbLogin?domain=${encodeURIComponent(XMeepshopDomain)}`);
    xhr.send(JSON.stringify(response.authResponse));
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if(xhr.response.code === 200) {
          localStorage.setItem('x-meepshop-authorization-token', xhr.getResponseHeader('x-meepshop-authorization-token'));
          console.log('API驗證完成')
          // API驗證完成
          // if(xhr.response.adTrack && xhr.response.adTrack.facebook_ads) {
          //   // 第一次FB登入 執行“註冊完成”追蹤碼
          //   eval(xhr.response.adTrack.facebook_ads);
          //   console.log('第一次FB登入 執行“註冊完成”追蹤碼')
          // }
          // window.location.href = '/';
        } else if(xhr.response.code === 2010) {
          alert('fb access token 失效');
        } else if(xhr.response.code === 2011) {
          alert('fb 登入無法取得email');
        } else if(xhr.response.code === 2003) {
          alert('無法取得meepshop token');
        } else {
          console.log('error');
        }
      }
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          textDecoration: 'none'
        }}
        onClick={() => {
          FB.getLoginStatus(response => {
            {/* console.log(response); */}
            if (response.status === 'connected') {
              console.log('Logged in.');
              this.callFBLoginAuth(response);
            }
            else {
              FB.login(response => {
                if (response.status === 'connected') {
                  console.log('Logged into your app and Facebook.');
                  this.callFBLoginAuth(response);
                } else {
                  console.log('The person is not logged into this app or we are unable to tell. ')
                }
              }, {scope: 'public_profile,email'});
            }
          });
        }}
      >
        {children
          ? children
          : <div style={{
            color: '#FFF',
            display: 'inline-block',
            background: 'linear-gradient(#4c69ba, #3b55a0)',
            border: '1px solid #4c69ba',
            borderRadius: '2px',
            WebkitBoxShadow: '0 -1px 0 #354c8c',
            MozBoxShadow: '0 -1px 0 #354c8c',
            boxShadow: '0 -1px 0 #354c8c',
            cursor: 'pointer',
            fontFamily: 'Helvetica neue',
            fontSize: '14px',
            fontWeight: 'bold',
            height: '48px',
            lineHeight: '46px',
            minWidth: '88px',
            padding: '0 15px',
            boxSizing: 'border-box',
            verticalAlign: 'middle'
          }}>
              <div>
                fb login
              </div>
            </div>}
      </div>
    );
  }
}

export default FacebookButton;
