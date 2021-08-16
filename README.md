# JS自学笔记 (The Study Record of JavaScript)

## JavaScript简介

### 什么是语言
   人和计算机交流的工具，通过语言来控制、操作计算机

   语言的发展：

        - 纸带机：机器语言
        - 汇编语言：符号语言
        - 现代语言：高级语言

### JS起源

JavaScript诞生于1995年，主要用于处理网页中的前端验证 - 即检查用户输入的内容是否符合一定的规则

### 简史
+ 由网景公司发明，起初命名为LiveScript，后来由于SUN公司介入更名为JavaScript
+ 1996年微软在IE3中引入了自己对JavaScript的实现JScript
+ 为确保不同浏览器运行JS标准一致，几个公司共同指定了JS标准名命名为ECMAScript

### 实现
    一个完整的JavaScript实现应该由三个部分构成: ECMAScript DOM BOM
![JavaScript](./assets/JavaScript.png)

### JS特点
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

算数运算符  + - * / %

    非数值类型数据会转为Number类后再运算
    NaN 和 任何值 运算 结果为 NaN

一元运算符 + -
    只需要一个操作数
    + 正号不会对数字产生任何影响
    - 负号可以对数字进行负号的取反

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
    *=
    /=
    %=

关系运算符
    关系成立返回true，不成立返回false

### 语句
+ 一个程序的基本单位，JS程序由一条条语句构成，使用;结尾
+ 默认由上至下顺序执行，可以通过一些流程控制语句来控制语句执行顺序
+ 流程控制语句 
   -是程序可以根据一定的条件来选择执行
   -语句的分类：
        1.条件判断语句
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
