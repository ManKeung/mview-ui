
const funcModules = import.meta.globEager('./props/*.ts')
const props = {}

for (const path in funcModules) {
    const re = /^\.\/(\S+).ts$/
    const group: any = path.match(re)
    const arr = group[1].split('/')
    const name = arr[arr.length - 1].replace('.ts', '')
    props[name] = funcModules[path].default
}

export default props
