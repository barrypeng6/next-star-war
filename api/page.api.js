import { postGraphql } from './fetch-data';

const _localeQuery = `
  zh_TW
  en_US
`;

const _fixedtopQuery = `
  module
  height
  alignment
  showTitle
  showLogo
  title {
    ${_localeQuery}
  }
  color
  background
  activeColor
  hoverColor
  menuId
  opacity
  fontSize
`;

const _secondtopQuery = `
  module
  height
  alignment
  title {
    ${_localeQuery}
  }
  showTitle
  showLogo
  menuId
  color
  background
  fontSize
`;

const _sidebarQuery = `
  module
  width
  alignment
  color
  background
  title {
    ${_localeQuery}
  }
  showTitle
  menuId
  fontSize
`;

const _fixedbottomQuery = `
  module
  title {
    ${_localeQuery}
  }
  menuId
  color
  background
  fontSize
`;

const _widgetsQuery = `
  id
  title {
    ${_localeQuery}
  }
  module
  contentWidth
  enableIndicators
  enableControls
  enableAutoplay
  pauseWhenHover
  activeIdx
  href
  width
  height
  alignment
  show_facepile
  small_header
  adapt_container_width
  show_posts
  hide_cover
  hide_cta
  htmlCode
  sourceType
  src
  alt
  align
  verticalAlign
  useLink
  linkType
  newWindow
  categories
  value
  aspect
  locale
  imgUrl
  overlayBackgroundColor
  position
  textColor
  showOverlay
  files {
    url
    path
    href
    image
  }
  notBeDeleted
  pagination
  showTitle
  showDescription
  showPrice
  showButton
  cartButton
  productWidth
  padding
  justifyContent
  alignItems
  redirect
  offset
  tag
  tags
  search
  sort
  limit
  fontSize
  menuId
  color
  background
  radius
  price {
    lte
    gte
  }
  header {
    show
    fontSize
    value
  }
  description {
    show
    fontSize
    value
  }
  button {
    show
    fontSize
    value
    href
  }
  includedAllTags
  showSort
  params {
    ids
    tags
    limit
    offset
    price
    search
    includedAllTags
    sort
  }
  landingInfo {
    paymentId
    shipmentId
    deliveryDate
    deliveryNotes
    required
    addition
    agreedMatters
    redirectPage
    countries
  }
  carouselInfo {
    template
    appearNum
    thumbsNum
    thumbsPosition
    autoPlay
    touchMove
    arrowIcon
    dotIcon
  }
  socialMediaInfo {
    share {
      title
      url
    }
    alignItems
  }
  liveVideo {
    account
    fanPageId
  }
`;

export const _basicBlocksQuery = `
  blocks {
    id
    width
    padding
    componentWidth
    releaseDateTime
    widgets {
      ${_widgetsQuery}
      widgets {
        ${_widgetsQuery}
        widgets {
          ${_widgetsQuery}
        }
      }
    }
    notBeDeleted
  }
`;

export const _basicPageQuery = `
  id
  title {
    ${_localeQuery}
  }
  fixedtop {
    ${_fixedtopQuery}
  }
  secondtop {
    ${_secondtopQuery}
  }
  sidebar {
    ${_sidebarQuery}
  }
  fixedbottom {
    ${_fixedbottomQuery}
  }
  notBeDeleted
  isProductDefault
  path
  pageType
  useExternalLink
  openNewWindow
  addressTitle
  seo {
    keywords
    description
    image
  }
  container
  width
  useBottom
  background
  ${_basicBlocksQuery}
`;

export async function fetchPage({ id, path, pageType }) {
  let variables = {
    keys: '$search: searchInputObjectType',
    type: 'query Root',
    values: {
      search: {
        size: 50,
        from: 0,
        sort: [
          {
            field: 'createdOn',
            order: 'asc'
          }
        ],
        filter: {
          and: []
        }
      }
    }
  };
  if (id) {
    variables.values.search.filter.and.push({
      type: 'ids',
      ids: [id]
    });
  }
  if (path) {
    variables.values.search.filter.and.push({
      type: 'exact',
      field: 'path',
      query: path
    });
  }
  if (pageType) {
    variables.values.search.filter.and.push({
      type: 'exact',
      field: 'pageType',
      query: pageType
    });
  }
  let res = await postGraphql(
    `
    getPageList(
      search: $search
    ) {
      data {
        ${_basicPageQuery}
      }
      total
    }
  `,
    variables
  );
  return res;
}
