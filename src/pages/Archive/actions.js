export const LOADING = 'ARCHIVE_LOADING'
export const SUCCESS = 'ARCHIVE_SUCCESS'

export function sucess(items) {
  return {
    type: LOADING,
    payload: {
      products: items,
    },
  }
}

export function loading() {
  return {
    type: SUCCESS,
    payload: {
      products: [],
    },
  }
}
