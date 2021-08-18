# JS 自学笔记 (The Study Record of JavaScript)

## JavaScript 简介

### 什么是语言

人和计算机交流的工具，通过语言来控制、操作计算机

语言的发展：

        - 纸带机：机器语言
        - 汇编语言：符号语言
        - 现代语言：高级语言

### JS 起源

JavaScript 诞生于 1995 年，主要用于处理网页中的前端验证 - 即检查用户输入的内容是否符合一定的规则

### 简史

- 由网景公司发明，起初命名为 LiveScript，后来由于 SUN 公司介入更名为 JavaScript
- 1996 年微软在 IE3 中引入了自己对 JavaScript 的实现 JScript
- 为确保不同浏览器运行 JS 标准一致，几个公司共同指定了 JS 标准名命名为 ECMAScript

### 实现

    一个完整的JavaScript实现应该由三个部分构成: ECMAScript DOM BOM

![JavaScript](./assets/JavaScript.png)

### JS 特点

    - 解释型语言
    - 类似于C 和 Java 的语法结构
    - 动态语言
    - 基于原型的面向对象

### 基本语法

    1.注释   多行 /* */   单行 //

    2.JS中严格区分大小写
    3.JS找那个每条语句分好结尾
    4.JS会忽略多个空格和换行，可以利用以此对代码进行格式化

### 字面量 和 变量

    字面量：常量，不可改变的值

    变量：可以用来保存字面量，且变量值可以任意改变，可通过变量对字面量进行描述

### 标识符

    在JS中所有的可以由我们自主命名的都可以称为标识符，如变量名、函数名等

    规则：
        1.可以含有字母、数字、_、$
        2.不能以数字开头
        3.不能是ES中的关键字或保留字
        4.一般采用驼峰命名

### 数据类型

    字面量的类型：
        String 字符串
            在字符串中可以使用\作为转义字符
                \" => "
                \' => '
                \n => 换行
                \t => 制表符
                \\ => \

        Boolean 布尔值
            true 真
            false 假
            主要用来做逻辑判断

        Number 数值
            所有的数值都是Number类型，包括整数和浮点数(小数)

        Null 空值
        Undefined 未定义
        Object 对象

    强制类型转换
        指将一个数据类型强制转换为其他数据类型

        转为String
            1.toString()
              不影响原变量，会将转换结果返回
              null和undefined没有该方法

            2.String()函数，将被转换的数据作为参数传递给函数

        转为Number
            1.Number()

              字符串 → 数字
                纯数字 => 数字
                有非数字内容 => NaN
                空串 或 空格 => 0

              布尔 → 数字
                true => 1
                false => 0

              null => 0
              undefined => NaN

            2.parseInt()
              可将一个字符串中的有效整数内容取出

            3.parseFloat()
              与parseInt类似，可取有效小数

        转为Boolean
            数字 → 布尔
                除 0 和 NaN 其余都是true

            字符串 → 布尔
                空串 => false
                其他：true
                null => false
                undefined => false
                对象 => true

### 运算符

    也叫操作符，可以对一个或多个值进行运算

算数运算符 + - \* / %

    非数值类型数据会转为Number类后再运算
    NaN 和 任何值 运算 结果为 NaN

一元运算符 + -
只需要一个操作数 + 正号不会对数字产生任何影响 - 负号可以对数字进行负号的取反

    对于非Number类型的值
    会先转为Number，再运算，原理与Number()类似

逻辑运算符
非：！
与：&&
或：||

赋值运算符
=
+=
-=
\*=
/=
%=

关系运算符
关系成立返回 true，不成立返回 false

### 语句

- 一个程序的基本单位，JS 程序由一条条语句构成，使用;结尾
- 默认由上至下顺序执行，可以通过一些流程控制语句来控制语句执行顺序
- 流程控制语句 -是程序可以根据一定的条件来选择执行 -语句的分类： 1.条件判断语句
  可在执行某个语句之前进行判断，条件成立会执行语句，不成立则不执行

            if语句
            语法一
                if(条件表达式)
                    语句
            语法二
                if(){...}else{...}

            语法三
                if(){...}else if{...} else{...}


        2.条件分支语句

            switch() {
                case ...:
                    ...;
                    break/continue...;
                default ...:
                }

        3.循环语句
            while
            do...while
            for

### 对象

    是一个包含相关数据和方法的集合，通常由一些变量和函数组成，一般称之为对象中的属性和方法
    一种复合的数据类型，可以保存多个数据类型的属性

    对象的分类：
        1.内建对象
            - 由ES标准中定义的对象，在任何的ES的实现中都可以使用
        2.宿主对象
            - 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
        3.自定义对象
            - 由开发者自己创建的对象

    创建对象
        new 对象名
        添加或设置 属性 / 方法
            点表示法
                对象 . 属性名 ，对象 . 方法（）
            括号表示法 对象 [属性名]

### 函数

    JavaScript 中的基本组件之一
    一个函数 是 JavaScript 过程 - 一组执行任务或计算值的语句
    使用时需要将其定义在希望调用它的作用域内

    函数声明
    函数的名称。
    函数参数列表，包围在括号中并由逗号分隔。
    定义函数的 JavaScript 语句，用大括号{}括起来

    本质上也是一个对象

    函数参数
        默认参数
            如果没有值或传入了未定义的值，默认函数参数允许形式参数使用默认值初始化
        剩余参数   
            剩余参数语法允许将数量不限的参数描述成一个数组
    
    函数表达式     
        var myFunction = function name([param[, param[, ... param]]]) { statements }
            name 函数名，可以省略。当省略函数名的时候，该函数就成为了匿名函数
            param 传递给函数的参数的名称，一个函数最多可以有255个参数
            statements 组成函数体的声明语句

    函数作用域  
        在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义      
        函数可以访问定义在其范围内的任何变量和函数, 定义在全局域中的函数可以访问所有定义在全局域中的变量
        在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量   
    
    arguments 对象     
        函数的实际参数会被保存在一个类似数组的arguments对象中
    
    箭头函数 （ES6）    
        ([param] [, param]) => { statements } param => expression
            param  参数名称. 零参数需要用()表示. 只有一个参数时不需要括号参数名称. 零参数需要用()表示. 只有一个参数时不需要括号
            statements or expression     多个声明statements需要用大括号括起来，而单个表达式时则不需要。表达式expression也是该函数的隐式返回值
    
    闭包   
        是一个可以自己拥有独立的环境与变量的表达式
        内部函数只可以在外部函数中访问     
        内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量   

    预定义函数

#### this
     不能在执行期间被赋值
    全局上下文
        无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指向全局对象
    函数上下文    
        在函数内部，this的值取决于函数被调用的方式
    类上下文    
        在类的构造函数中，this 是一个常规对象。类中所有非静态的方法都会被添加到 this 的原型中
        派生类的构造函数没有初始的 this 绑定 
    对象       
        当函数作为对象里的方法被调用时，this 被设置为调用该函数的对象
    原型链中的 this    
        如果方法存在于一个对象的原型链上，那么 this 指向的是调用这个方法的对象
    作为构造函数  
        当一个函数用作构造函数时（使用new关键字），它的this被绑定到正在构造的新对象  
    作为一个DOM事件处理函数   
        当函数被用作事件处理函数时，它的 this 指向触发事件的元素（一些浏览器在使用非 addEventListener 的函数动态地添加监听函数时不遵守这个约定）
    作为一个内联事件处理函数  
        当代码被内联 on-event 处理函数 (en-US) 调用时，它的this指向监听器所在的DOM元素   