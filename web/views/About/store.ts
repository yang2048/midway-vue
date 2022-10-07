/**
 * About store
 * @author LiQingSong
 */
import { defineStore } from 'pinia'
import { ResponseData } from '@/utils/request'
import {
  TableListItem,
  PaginationConfig,
  ResponseDataType,
  TableListQueryParams,
} from './data.d'
import { queryList } from './service'

export interface IAboutState {
  loading: boolean
  list: TableListItem[]
  pagination: PaginationConfig
}

export const useAboutStore = defineStore('about', {
  state(): IAboutState {
    return {
      loading: false,
      list: [],
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10,
      },
    }
  },
  actions: {
    async getList(params?: TableListQueryParams) {
      try {
        this.loading = true
        const response: ResponseData<ResponseDataType> = await queryList(params)
        const data = response.data
        this.loading = false
        if (data) {
          this.list = data.list || []
          this.pagination = {
            ...this.pagination,
            total: data.total,
            current: params ? params.current || 1 : 1,
          }
        }
      } catch (error: any) {
        console.log('error useAboutStore getList', error)
      }
    },
  },
})
