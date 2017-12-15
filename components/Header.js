import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link prefetch href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link prefetch href="/products">
          <a style={linkStyle}>商品列表</a>
        </Link>
        <Link prefetch href="/login">
          <a style={linkStyle}>登入</a>
        </Link>
        <Link prefetch href="/myOrders">
          <a style={linkStyle}>訂單管理</a>
        </Link>
        <Link prefetch href="/mySettings">
          <a style={linkStyle}>會員資料</a>
        </Link>
        <Link prefetch href="/myRecipients">
          <a style={linkStyle}>會員資料</a>
        </Link>
        <Link prefetch href="/myPassword">
          <a style={linkStyle}>更改密碼</a>
        </Link>
        <Link prefetch href="/wishList">
          <a style={linkStyle}>我的收藏</a>
        </Link>
        <Link prefetch href="/rewardPoints">
          <a style={linkStyle}>購物金</a>
        </Link>
        <Link prefetch href="/thankYouPage">
          <a style={linkStyle}>感謝頁</a>
        </Link>
    </div>
)

export default Header