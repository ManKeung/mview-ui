# mView UI vue3.0

UI组件vue3.0封装，uni-app使用。

## 安装

```sh
git clone https://github.com/mankeung/mview-ui.git

git clone https://gitee.com/mankeung/mview-ui.git
```

## 使用说明

首先保证我们已经下载mview-ui相关文件，并且放在项目根目录uni_modules下。

```ts
// main.ts

import { createSSRApp } from 'vue'
import mView from '@/uni_modules/mview-ui'

export function createApp() {
    const app = createSSRApp(App)
    app.use(mView)

    return {
        app
    }
}
```

```scss
/* uni.scss */
@import '@/uni_modules/mview-ui/theme.scss';
```

```html
<!-- App.vue -->
<style lang="scss">
@import '@/uni_modules/mview-ui/index.scss';
</style>
```

## 连接

- [文档gitee](https://mankeung.gitee.io/mview-ui/)
- [文档github](https://mankeung.github.io/mview-ui)
- [h5预览地址gitee](https://mankeung.gitee.io/mview-ui/h5)
- [h5预览地址gitub](https://mankeung.github.io/mview-ui/h5)
