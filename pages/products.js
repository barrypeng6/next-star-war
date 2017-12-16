import Head from 'next/head'
import Layout from '../components/Layout.js'

const Products = ({title}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script>{console.log('Products')}</script>
    </Head>
    <Layout>
       <p>{`This is the ${title} page`}</p>
    </Layout>
  </div>
)

Products.getInitialProps = (context) => {
  return {
    title: context.pathname
  }
}

export default Products