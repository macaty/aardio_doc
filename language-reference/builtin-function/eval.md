[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# eval() 函数

eval() 函数可将字符串转换为代码执行，并返回一个或多个�?
1. 函数原型�?
   `返回�?= eval( codeString )`

2. 函数说明�?
   eval() 函数可将字符串转换为代码执行，并返回一个或多个值�?   如果eval函数在执行时遇到错误,则抛出异常给调用�?

   类似的函数是 [loadcode](loadcode.html) ，请注意区别�?

   - loadcode 并不立即执行代码，而是返回一个函数对象，加载代码失败不会抛出异常而是返回 null 与错误信息。eval 函数则会立即执行代码，如果失�?eval 会抛出异常而不是返回错误信息�?   - loadcode 支持在参数中找定代码文件路径，eval 的参数则只能�?aardio 代码表示的表达式�?   - loadcode 加载是函数对象，执行的是一组语句，可以�?代码中使�?return 语句返回值�?     �?eval 的参数只能是表达式，不能在代码顶层直接使�?return 语句�?除非包装到立即执行函数内�?）。例如：
     `aardio
     eval("(function(){
      return 123
     })() ")
     `

请参考： [表达式与语句拥区别](../basic-syntax.html#stat-vs-exp)

3. 调用示例�?

   ```aardio aardio
   import console;

   console.log( eval("1+1") );

   console.pause();

   ```


[Markdown 格式](https://www.aardio.com/zh-cn/doc/language-reference/builtin-function/eval.md)
