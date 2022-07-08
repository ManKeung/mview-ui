import { getCommon, getDefault } from '../props'

export default {
    ...getCommon(),
    bac: {
        type: String,
        default: getDefault('statusBar', 'bac')
    }
}
