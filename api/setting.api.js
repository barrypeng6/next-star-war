import fetch from 'isomorphic-fetch';
import { postGraphql, fetchApi } from './fetch-data';
import { _basicPageQuery } from './page.api';
import { _basicComputeOrderQuery } from './cart.api';

const _storeAppListQuery = `
  id
  plugin
  isInstalled
`;

const _pagesQuery = `
  id
  title {
    zh_TW
    en_US
  }
  action
  params {
    path
    pageId
    url
    section
    query_string
    tags
    sort {
      field
      order
    }
    price {
      lte
      gte
    }
    from
    size
    displayMemberGroup
  }
  icon {
    use
    font
    image
    direction
  }
  newWindow
`;

const _menuQuery = `
  id
  title {
    zh_TW
    en_US
  }
  notBeDeleted
  menuType
  pages {
    ${_pagesQuery}
    pages {
      ${_pagesQuery}
      pages {
        ${_pagesQuery}
        pages {
          ${_pagesQuery}
          pages {
            ${_pagesQuery}
          }
        }
      }
    }
  }
  design {
    pattern
    width
    height
    opacity
    font
    fontSize
    showLogo
    showTitle
    showSearchbar
    alignment
    paddingTop
    expandSubItem
    nornal {
      color
      background
      borderColor
    }
    hover {
      color
      background
      borderColor
    }
    active {
      color
      background
      borderColor
    }
  }
  status
`;

const _storeSettingQuery = `
  name
  cname
  domain
  description {
    name
    introduction
  }
  storeStatus
  timezone
  currency
  contact {
    name
    email
    mobile
    tel
  }
  locale
  logoId
  mobileLogoId
  faviconId
  setting {
    order {
      autoAddStock
      afterPaymentFail
    }
    cart {
      cartlock
      cartlockTime
    }
    design {
      footerSite
    }
    invoice {
      duplicate {
        status
      }
      triplicate {
        status
      }
      eInvoice {
        status
      }
      donate {
        status
        units
      }
    }
    locale
    currency
    lockedCountry
    lockedBirthday
    paidMessage
    activityVersion
  }
  logoFileInfo {
    id
    linkId
    type
    image
  },
  mobileLogoFileInfo {
    id
    linkId
    type
    image
  },
  faviconFileInfo {
    id
    linkId
    type
    image
  }
  homePageId
  setting {
    lockedCountry
  }
`;

const _colorQuery = `
  id,
  selected,
  themes {
    no,
    colors
  },
  pageInfo {
    opacity,
    image {
      used
    }
  },
  imgInfo {
    used,
    repeat,
    size,
    files {
      href,
      image,
      path
    }
  }
`;

const _activityQuery = `
  id
  appId
  type
  plugin
  title {
    zh_TW
    en_US
  }
  rule {
    type
    settingType
    discount {
      condition
      method
      methodlist
      value
      products {
        productId
        variantId
        quantity
        specs{
          id
          title {
            zh_TW
            en_US
          }
        }
        title {
          zh_TW
          en_US
        }
      }
      minmum
      maxmum
      intival
    }
  }
  couponSetting {
    useTimesType
    useTimes
    codeType
    singleCode
    codeCount
  }
  target {
    tags
    products {
      productId
      amount
    }
    groups {
      id
      title {
        zh_TW
        en_US
      }
      tags
      products {
        productId
      }
      method
      value
      operator
      params {
        tags
        price {
          gte
          lte
        }
        search
        includedAllTags
      }
    }
  }
  groupIds
  shipmentIds
  joinDiscountIds
  status
  sort
  startTime
  endTime
`;

const _webTrackQuery = `
  id
  trackId
  trackType
  trackPage {
    trackPageType
    status
    trackCode
    codeInfo {
      id
      init
      track
      dedup
      domainId
      type
      revenue
      actionid
      ti
      trackingID
      language
      format
      color
      label
    }
  }
`;

export async function fetchAllSettings() {
  let variables = {
    keys: '$menuSearch: searchInputObjectType, $storeSearch: searchInputObjectType, $colorSearch: searchInputObjectType, $activitySearch: searchInputObjectType, $storeAppSearch: searchInputObjectType, $webTrackSearch: searchInputObjectType, $pageSearch: searchInputObjectType, $cartSearch: searchInputObjectType, $memberGroupSearch: searchInputObjectType, $appLoginSearch: searchInputObjectType',
    type: 'query Root',
    values: {
      menuSearch: {
        size: 50,
        from: 0,
        filter: {
          and: []
        },
        sort: [
          {
            field: 'createdOn',
            order: 'desc'
          }
        ]
      },
      storeSearch: {
        filter: {
          and: []
        }
      },
      storeAppSearch: {
        size: 100,
        from: 0
      },
      colorSearch: {
        filter: {
          and: []
        }
      },
      activitySearch: {
        size: 50,
        from: 0,
        filter: {
          and: [
            {
              type: 'exact',
              field: 'status',
              query: '1'
            }
          ],
          not: [
            {
              type: 'exact',
              field: 'plugin',
              query: 'usePoints'
            },
            {
              type: 'exact',
              field: 'plugin',
              query: 'sendPoints'
            }
          ]
        }
      },
      webTrackSearch: {
        size: 100,
        from: 0
      },
      pageSearch: {
        size: 50,
        from: 0,
        sort: [
          {
            field: 'createdOn',
            order: 'asc'
          }
        ],
        filter: {
          and: [
            {
              type: 'exact',
              field: 'pageType',
              query: 'home'
            }
          ]
        }
      },
      cartSearch: {
        showDetail: true
      },
      memberGroupSearch: {
        size: 50,
        from: 0,
        filter: {
          and: [
            {
              type: 'exact',
              field: 'status',
              query: 1
            }
          ]
        }
      },
      appLoginSearch: {
        size: 50,
        from: 0,
        filter: {
          and: [
            {
              type: 'exact',
              field: 'plugin',
              query: 'fbLogin'
            }
          ]
        },
        sort: [
          {
            field: 'sort',
            order: 'asc'
          }
        ]
      }
    }
  };

  let res = await postGraphql(
    `
    getMenuList(search: $menuSearch) {
      data {
        ${_menuQuery}
      }
      total
    }
    getStoreList(search: $storeSearch) {
      data {
        ${_storeSettingQuery}
      }
      total
    }
    getColorList(search: $colorSearch) {
      data {
        ${_colorQuery}
      }
      total
    }
    getActivityList(search: $activitySearch) {
      data {
        ${_activityQuery}
      }
      total
    }
    getStoreAppList(search: $storeAppSearch) {
      data {
        ${_storeAppListQuery}
      }
      total
    }
    getWebTrackList(search: $webTrackSearch) {
      data {
        ${_webTrackQuery}
      }
      total
    }
    getPageList(search: $pageSearch) {
      data {
        ${_basicPageQuery}
      }
      total
    }
    getCartList(search: $cartSearch) {
      data {
        ${_basicComputeOrderQuery}
      }
    }
    getUserList {
      data {
        id
        name
        groupId
        email
      }
    }
    getMemberGroupList(search: $memberGroupSearch) {
      data {
        id
        name
      }
    }
    isLogin {
      isLogin
      expireTime
    }
    getAppLoginList(search: $appLoginSearch) {
      data {
        id
        appId
      }
    }
  `,
    variables
  );
  return res;
}
