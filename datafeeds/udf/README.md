# UDF兼容数据

此文件夹包含[UDF]（https://github.com/tradingview/charting_library/wiki/UDF）datafeed适配器。 它实现[JS API]（https://github.com/tradingview/charting_library/wiki/JS%20API）并使用[UDF]（https://github.com/tradingview/charting_library/wiki/UDF）发出HTTP请求 协议。

如果在服务器上实现[UDF]（https://github.com/tradingview/charting_library/wiki/UDF），则可以使用此数据源适配器来插入数据。 在编写自己的适配器之前，您还可以仔细检查它的工作原理。

此数据源在[TypeScript]（https://github.com/Microsoft/TypeScript/）中实现。

## Folders content 文件夹内容

- `。/ src`文件夹包含TypeScript中的源代码。
    
- `。/ lib`文件夹包含在es5代码中的转换。 因此，如果您不知道如何使用TypeScript  - 您可以修改这些文件以便稍后更改结果包。

- `./ dist`文件夹包含捆绑的JavaScript文件，这些文件可以内联到页面中并在Widget构造函数中使用。

## Build & bundle  构建和捆绑

在构建或捆绑代码之前，您需要运行`npm install`来安装依赖项。

`package.json`包含一些方便的脚本来构建或生成包：

- `npm run compile`将TypeScript源代码编译成JavaScript文件（输出将在`./lib`文件夹中）

- `npm run bundle-js`将多个JavaScript文件捆绑到一个包中（它还捆绑了polyfills）

- `npm run build`编译和捆绑（它是上述所有命令的组合）

注意：如果要缩小包代码，则需要将`ENV`环境变量设置为与`development`不同的值。

例如：

```bash
export ENV=prod
npm run bundle-js # or npm run build
```

or

```bash
ENV=prod npm run bundle-js
```

or

```bash
ENV=prod npm run build
```
