import isAbsoluteURL from '../helpers/isAbsoluteURL'
import combineURLs from '../helpers/combineURLs'

export default function buildFullPath(baseURL: string, requestedURL: string) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL)
    }
    return requestedURL
}