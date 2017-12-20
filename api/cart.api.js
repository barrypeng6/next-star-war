// import fetch from 'isomorphic-fetch';
import { postGraphql } from './fetch-data';

export const _basicComputeOrderQuery = `
  priceInfo {
    currency
    discount
    orderDiscount
    productDiscount
    shipmentFee
    productPrice
    total
  }
  categories {
    products {
      id
      cartId
      productId
      variantId
      quantity
      discountPrice
      activityInfo {
        id
        title {
          zh_TW
          en_US
        }
        discountPrice
      }
      stock
      minPurchaseItems
      maxPurchaseLimit
      retailPrice
      listPrice
      totalPrice
      specs {
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
      galleryInfo {
        media
      }
      type
      _error
    }
    shipmentTemplates {
      shipmentId
      name
      description
      shipmentId
      template
      name
      price
    }
  }
  adTrack{
    facebook_ads
    google_analytics
  }
  activityInfo {
    id
    title {
      zh_TW
      en_US
    }
    discountPrice
  }
`;

export async function fetchCart({ carts = [], action }) {
  let data = { computeOrder: [] };
  let res;
  switch (action) {
    case 'add':
      res = await postGraphql(
        `
        changeCartList(changeCartList: $search) {
          ${_basicComputeOrderQuery}
        }
        `,
        {
          keys: '$search: [ChangeCart]',
          type: 'mutation Mutation',
          values: {
            search: {
              productsInfo: {
                createData: carts.map(c => {
                  return {
                    productId: c.productId,
                    variantId: c.variantId,
                    quantity: c.quantity
                  };
                })
              }
            }
          }
        }
      );
      if (res) {
        data.computeOrder = res.data.changeCartList[0];
      }
      break;
    case 'remove':
      res = await postGraphql(
        `
        changeCartList(changeCartList: $search) {
          ${_basicComputeOrderQuery}
        }
        `,
        {
          keys: '$search: [ChangeCart]',
          type: 'mutation Mutation',
          values: {
            search: {
              productsInfo: {
                deleteData: carts.map(c => {
                  return c.id;
                })
              }
            }
          }
        }
      );
      if (res) {
        data.computeOrder = res.data.changeCartList[0];
      }
      break;
    case 'update':
      res = await postGraphql(
        `
        changeCartList(changeCartList: $search) {
          ${_basicComputeOrderQuery}
        }
        `,
        {
          keys: '$search: [ChangeCart]',
          type: 'mutation Mutation',
          values: {
            search: {
              productsInfo: {
                updateData: carts.map(c => {
                  return {
                    id: c.id,
                    quantity: c.quantity
                  };
                })
              }
            }
          }
        }
      );
      if (res) {
        data.computeOrder = res.data.changeCartList[0];
      }
      break;
    default:
      res = await postGraphql(
        `
        getCartList(search: $search) {
          data {
            ${_basicComputeOrderQuery}
          }
        }
        `,
        {
          keys: '$search: searchInputObjectType',
          type: 'query Root',
          values: {
            search: {
              showDetail: true
            }
          }
        }
      );
      if (res) {
        data.computeOrder = res.data.getCartList.data[0];
      }
  }
  return data;
}

// export async function fetchNewOrder(data) {
//   let resData = {};
//   let res = await fetch('/newOrder', {
//     method: 'post',
//     headers: {
//       'content-type': 'application/json'
//     },
//     credentials: 'same-origin',
//     body: JSON.stringify(data)
//   });
//   if (res.status < 400) {
//     resData = await res.json();
//   }
//   return resData;
// }
