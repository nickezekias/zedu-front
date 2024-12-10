import type { AxiosError } from 'axios'

const getApiErrors = (error: AxiosError, title = '') => {
  const errorMessage = 'backend.errors.http500'

  if ('Fetch User' === error.name) {
    return errorMessage
  }
  if (!error.response) {
    if (error && error.config) console.error(title, `API ${error.config.url} not found`)
    else console.error(title, `API ${error} not found`)
    return errorMessage
  }
  if (process.env.NODE_ENV === 'development') {
    console.error(title, error.response.data)
    console.error(title, error.response.status)
    console.error(title, error.response.headers)
  }
  // @ts-expect-error nested laravel model resource objects data errors
  if (error.response.data && error.response.data.errors) {
    // @ts-expect-error nested laravel model resource objects data errors
    return error.response.data.errors
  }

  // show custom controller error messages for errors other than http 500
  if (error.response.status != 500) {
    return error.response.data
  }

  return errorMessage
}

function getImageSrc(url: string) {
  const imgUrl = `${import.meta.env.VITE_API_BASE_URL}`;
  return `${imgUrl}/${url}`
}

export { getApiErrors, getImageSrc }
