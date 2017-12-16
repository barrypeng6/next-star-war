import Link from 'next/link'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    loading: state.homePage.loading,
    pages: state.homePage.pages
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return 
// }

const PageList = ({loading, pages}) => (
  <div>
    {loading ? <p>{'loading...'}</p> : <ul>
      {pages.map(page => (
          <li key={page.id}>
            <Link as={`/page/${page.id}`} href={`/page?id=${page.id}`}>
              <a>{page.name}</a>
            </Link>
          </li>
        ))}
    </ul>}
  </div>
)

export default connect(mapStateToProps)(PageList)