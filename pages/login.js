import Layout from '../components/Layout.js'

const Login = ({title}) => (
    <Layout>
       <p>{`This is the ${title} page`}</p>
    </Layout>
)

Login.getInitialProps = (context) => {
  return {
    title: context.pathname
  }
}

export default Login