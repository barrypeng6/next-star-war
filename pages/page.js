import Head from 'next/head'
import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Page =  (props) => (
  <div>
    <Head>
      <title>{props.show.name}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script>{console.log('$$$ ' + props.show.name + ' $$$')}</script>
    </Head>
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
  </div>
)

Page.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Page