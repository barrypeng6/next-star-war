import Layout from '../components/Layout.js'
import Link from 'next/link'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import initializeStore from '../store'
import PageList from '../components/PageList'
import {
  getPagesRequestAction,
  getSettingRequestAction
} from '../actions'

const Index = (props) => {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script>{console.log('SEO: Home')}</script>
      </Head>
      <Layout>
        <PageList />
      </Layout>
    </div>
  )
}

Index.getInitialProps = ({store, isServer, pathname, query}) => {
  // fetch pages 的時機：在ssr或store中無pages資料
  if(isServer || store.getState().settingReducer) {
    // store.dispatch(getPagesRequestAction())
    store.dispatch(getSettingRequestAction())
  }
  return
}

// 在 react-redux 中，我們使用Provider component將Redux store傳入（透過react context）
// 其所有的child component中。而在SSR中，我們使用withRedux(HOC)取代Provider，withRedux
// 可以使用在所有/page下的進入點中。
// 在其child components中依然使用connect(HOC), mapStateToProps, mapDispatchToProps，
// 去取得store，使用方式不變。
export default withRedux(initializeStore)(withReduxSaga(Index))