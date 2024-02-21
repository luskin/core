export type APIResponse<T = null> = {
  success: boolean
  data?: T | null
  error?: {
    message: string
    data?: object | null
  }
}
