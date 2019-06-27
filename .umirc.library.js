export default {
  cjs: 'rollup',  
  esm: 'rollup',
  umd:{
    name:'foo',
    globals:{  //为包起别名
      react:'React',
      'antd/es/button':'_Button' 
    }
  },
  cssModules:true, //开启cssModules
  extraBabelPlugins: [  //antd 按需加载
    ['babel-plugin-import', { 
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }],
  ],
}
