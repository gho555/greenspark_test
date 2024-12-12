import axios from 'axios'
import type { IProductWidget } from '@/resources/interfaces'

export class ProductWidgetService {
  static getAll(): Promise<IProductWidget[]> {
    return axios
      .get('https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets')
      .then((res) => res.data)
  }
}
