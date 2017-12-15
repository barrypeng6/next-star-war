import Layout from '../components/Layout.js'
import Link from 'next/link'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import initializeStore from '../store'
import {
  getPagesRequestAction
} from '../actions'

const Index = (props) => (
  <div>
    <Head>
      <title>Home page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <ul>
        {props.pages.map(page => (
            <li key={page.id}>
              <Link as={`/page/${page.id}`} href={`/page?id=${page.id}`}>
                <a>{page.name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  </div>
)

Index.getInitialProps = ({store, isServer, pathname, query}) => {
  store.dispatch(getPagesRequestAction)

  console.log('pages', pages)
  return { pages }
}

// 在 react-redux 中，我們使用Provider component將Redux store傳入（透過react context）
// 其所有的child component中。而在SSR中，我們使用withRedux(HOC)取代Provider，withRedux
// 可以使用在所有/page下的進入點中。
// 在其child components中依然使用connect(HOC), mapStateToProps, mapDispatchToProps，
// 去取得store，使用方式不變。
export default withRedux(initializeStore)(Index)