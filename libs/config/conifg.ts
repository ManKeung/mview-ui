// 版本号
const version = '1.0.0'
// 发布时间
const time = '2022-06-04'

// 开发环境才提示，生产环境不会提示
if (process.env.NODE_ENV === 'development') {
	console.log(`\n\n %c mView v${version} %c ${time} %c https://mankeung.gitee.io/mview \n\n`, 'color: #ffffff; background: #3c9cff; padding:5px 0;', 'color: #fff;background: #f9ae3d; padding:5px 0;', 'background: #909399; padding:5px 0;');
}

export default {
    v: version,
    t: time,
    // 主题名称
    type: [
        'primary',
        'success',
        'info',
        'error',
        'warning'
    ],
    // 公共props
    props: {
        // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
        customStyle: {
            type: [Object, String],
            default: () => ({})
        },
        customClass: {
            type: String,
            default: ''
        }
    },
    // 颜色
    color: {
        'm-primary': '#2979ff',
        'm-warning': '#ff9900',
        'm-success': '#19be6b',
        'm-error': '#fa3534',
        'm-info': '#909399',
        'm-main-color': '#303133',
        'm-content-color': '#606266',
        'm-tips-color': '#909399',
        'm-light-color': '#c0c4cc',
        'm-bg-color': '#f3f4f6'
    }
}
