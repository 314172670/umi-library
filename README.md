
- 目的:实现组件的打包
- 使用：yarn build
- 输出esm umd 等几种打包格式
- React 使用dist->index.esm.js 
```
import 'xxx' from  './index.esm.js' 
<xxx/>
```


- 注意点
  - peerDependencies 存放打umd格式时不打包的库 如react，下一步进行打包，会报如下问题：
    `No name was provided for external module 'react' in output.globals – guessing 'React'`
    - 配置`.umirc.library.js `中的globals为react添加name
  

        ```
        export default {
          cjs: 'rollup',
          esm: 'rollup',
          umd:{
            name:'foo',
            globals:{
              react:'React'
            }
          }
        }
        ```
- 参考：https://www.npmjs.com/package/umi-library


