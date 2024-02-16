import { NavigateItem, ShopSelect, ShopTabs, UserContact } from '@/types'

//img
import Product1 from '@/assets/Product1.jpg'
import Product2 from '@/assets/Product2.jpg'
import Product3 from '@/assets/Product3.jpg'

export const tabItems: NavigateItem[] = [
  {
    text: ShopTabs.PRODUCTS,
    isDisabled: false
  },
  {
    text: ShopTabs.FOLLOWERS,
    isDisabled: false
  },
  {
    text: ShopTabs.FOLLOWING,
    isDisabled: false
  }
]

export const selectOption = [
  {
    id: '0',
    name: ShopSelect.ALL,
    value: ShopSelect.ALL
  },
  {
    id: '1',
    name: ShopSelect.RECENT,
    value: ShopSelect.RECENT
  },
  {
    id: '2',
    name: ShopSelect.NEW,
    value: ShopSelect.NEW
  },
  {
    id: '3',
    name: ShopSelect.POPULAR,
    value: ShopSelect.POPULAR
  }
]

export const userImageData = [
  {
    img: Product1,
    imgTitle: 'product 1'
  },
  {
    img: Product2,
    imgTitle: 'product 2'
  },
  {
    img: Product3,
    imgTitle: 'product 3'
  }
]

export const fakeUserContact: UserContact = {
  id: 1,
  userName: 'Rosetta Gottlieb',
  productNumber: 12,
  followerNumber: 23,
  contactStatus: 'follower'
}