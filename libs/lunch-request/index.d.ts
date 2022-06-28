type AnyObject = Record<string | number | symbol, any>
export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    CONNECT = 'CONNECT',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    TRACE = 'TRACE',
    UPLOAD = 'UPLOAD',
    DOWNLOAD = 'DOWNLOAD'
}
type HttpPromise<T> = Promise<HttpResponse<T>>
type Tasks = UniApp.RequestTask | UniApp.UploadTask | UniApp.DownloadTask
export interface RequestTask {
    abort: () => void
    offHeadersReceived: () => void
    onHeadersReceived: () => void
}
export interface HttpRequestConfig<T = Tasks> {
    // 请求基础地址
    baseURL?: string
    // 请求服务接口地址
    url?: string

    // 请求查询参数，自动拼接查询字符串
    params?: AnyObject
    // 请求体参数
    data?: AnyObject

    // 文件对应的key
    name?: string
    // HTTP 请求中其他额外的 form data
    formData?: AnyObject
    // 要上传文件资源的路径
    filePath?: string
    // 需要上传的文件列表。使用 files 时，filePath 和 name 不生效，App、H5（ 2.6.15+）
    files?: Array<{
        name?: string
        file?: File
        uri: string
    }>
    // 上传的文件对象，仅H5（2.6.15+）支持
    file?: File

    // 请求头信息 App、H5端会自动带上cookie，且H5端不可手动修改
    header?: AnyObject
    // 请求方式
    method?: Method
    // 如果设为 json，会尝试对返回的数据做一次 JSON.parse
    dataType?: string
    // 置响应的数据类型，支付宝小程序不支持
    responseType?: 'text' | 'arraybuffer'
    // 自定义参数
    custom?: AnyObject
    // H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
    timeout?: number
    // 仅 App-Android 支持 (HBuilderX 2.8.0+)
    firstIpv4?: boolean
    // 仅App安卓端支持（HBuilderX 2.3.3+），不支持离线打包
    sslVerify?: boolean
    // 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
    withCredentials?: boolean

    // 返回当前请求的task, options。请勿在此处修改options。
    getTask?: (task: T, options: HttpRequestConfig<T>) => void
    // 全局自定义验证器
    validateStatus?: (statusCode: number) => boolean | void
}
export interface HttpResponse<T = any> {
    config: HttpRequestConfig
    statusCode: number
    cookies: Array<string>
    data: T
    errMsg: string
    header: AnyObject
}
export interface HttpUploadResponse<T = any> {
    config: HttpRequestConfig
    statusCode: number
    data: T
    errMsg: string
}
export interface HttpDownloadResponse extends HttpResponse {
    tempFilePath: string
}
export interface HttpError {
    config: HttpRequestConfig
    statusCode?: number
    cookies?: Array<string>
    data?: any
    errMsg: string
    header?: AnyObject
}
export interface HttpInterceptorManager<V, E = V> {
    use(
        onFulfilled?: (config: V) => Promise<V> | V,
        onRejected?: (config: E) => Promise<E> | E
    ): void
    eject(id: number): void
}
export abstract class HttpRequestAbstract {
    constructor(config?: HttpRequestConfig)
    config: HttpRequestConfig
    interceptors: {
        request: HttpInterceptorManager<HttpRequestConfig, HttpRequestConfig>
        response: HttpInterceptorManager<HttpResponse, HttpError>
    }
    middleware<T = any>(config: HttpRequestConfig): HttpPromise<T>
    request<T = any>(config: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<T>
    get<T = any>(url: string, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<T>
    upload<T = any>(url: string, config?: HttpRequestConfig<UniApp.UploadTask>): HttpPromise<T>
    delete<T = any>(url: string, data?: AnyObject, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<T>
    head<T = any>(url: string, data?: AnyObject, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<T>
    post<T = any>(url: string, data?: AnyObject, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<T>
    put<T = any>(url: string, data?: AnyObject, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<T>
    connect<T = any>(url: string, data?: AnyObject, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<T>
    options<T = any>(url: string, data?: AnyObject, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<T>
    trace<T = any>(url: string, data?: AnyObject, config?: HttpRequestConfig<UniApp.RequestTask>): HttpPromise<T>

    download(url: string, config?: HttpRequestConfig<UniApp.DownloadTask>): Promise<HttpDownloadResponse>

    setConfig(onSend: (config: HttpRequestConfig) => HttpRequestConfig): void
}
declare class HttpRequest extends HttpRequestAbstract { }

// export default HttpRequest