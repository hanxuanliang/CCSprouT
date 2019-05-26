(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{246:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"聊聊string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聊聊string","aria-hidden":"true"}},[t._v("#")]),t._v(" 聊聊String")]),t._v(" "),a("p",[t._v("我相信你本身对字符串已经有所了解。我这里带你回顾一下字符串的常用操作，并对其中的一些小tricks详细地加以解释。")]),t._v(" "),a("h2",{attrs:{id:"基础回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础回顾","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础回顾")]),t._v(" "),a("p",[t._v("以下有这么几种写法：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v("\ns2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v("\ns3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""hello"""')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个形式我们在注释里面经常看到")]),t._v("\ns1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" s2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" s3\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])])]),a("p",[t._v("我们要记住的是："),a("strong",[t._v("Python中单引号、双引号和三引号的字符串是一模一样的，没有区别")]),t._v("。")]),t._v(" "),a("p",[t._v("Python同时支持这三种表达方式，很重要的一个原因就是，这样方便你在字符串中，内嵌带引号的字符串。比如："),a("code",[t._v('"I\'m a Fool"')]),t._v("。")]),t._v(" "),a("p",[t._v("还有一个地方就是在转义字符的应用中，最常见的就是换行符"),a("code",[t._v("'\\n'")]),t._v("的使用。比如文件读取，如果我们一行行地读取，那么每一行字符串的末尾，都会包含换行符"),a("code",[t._v("'\\n'")]),t._v("。而最后做数据处理时，我们往往会丢掉每一行的换行符。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a\\nb\\tc'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" a\n   b\tc\n\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),a("h2",{attrs:{id:"常用函数操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用函数操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用函数操作")]),t._v(" "),a("p",[t._v("Python的字符串同样支持索引，切片和遍历等等操作。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),t._v("\nname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'j'")]),t._v("\nname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'so'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" char "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" j\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" s\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" o\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" n\n")])])]),a("p",[t._v("特别要注意，Python的字符串是"),a("code",[t._v("不可变的（immutable）")]),t._v("。因此，用下面的操作，来改变一个字符串内部的字符是错误的，不允许的。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" Traceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<stdin>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nTypeError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'str'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),t._v(" does "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" support item assignment\n")])])]),a("p",[t._v("Python中字符串的改变，通常只能通过创建新的字符串来完成。比如上述例子中，想把"),a("code",[t._v("'hello'")]),t._v("的第一个字符"),a("code",[t._v("'h'")]),t._v("，改为大写的"),a("code",[t._v("'H'")]),t._v("，我们可以采用下面的做法：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# option A")]),t._v("\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# option B")]),t._v("\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("你可能了解到，在其他语言中，如Java，有可变的字符串类型，比如"),a("code",[t._v("StringBuilder")]),t._v("，每次添加、改变或删除字符（串），"),a("strong",[t._v("无需创建新的字符串")]),t._v("，时间复杂度仅为O(1)。这样就大大提高了程序的运行效率。")]),t._v(" "),a("p",[t._v("但可惜的是，Python中并没有相关的数据类型，我们还是得老老实实创建新的字符串。因此，每次想要改变字符串，往往需要O(n)的时间复杂度，其中，n为新字符串的长度。")]),t._v(" "),a("p",[t._v("但是这不一定啊！随着版本的更新，Python也越来越聪明，性能优化可能越来越好了。")]),t._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意'+'")]),t._v(" "),a("p",[t._v("这里，我着重讲解一下，使用加法操作符"),a("code",[t._v("'+='")]),t._v("的字符串拼接方法。因为它是一个例外，打破了字符串不可变的特性。"),a("code",[t._v("str1 += str2 # 表示str1 = str1 + str2")]),t._v("，我们来看看一个例子：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("你觉得这个例子的时间复杂度是多少呢？")]),t._v(" "),a("p",[t._v("每次循环，似乎都得创建一个新的字符串；而每次创建一个新的字符串，都需要O(n)的时间复杂度。因此，总的时间复杂度就为"),a("code",[t._v("O(1) + O(2) + … + O(n) = O(n^2)")]),t._v("。")]),t._v(" "),a("p",[t._v("但是必须说明，这个结论只适用于老版本的Python了。自从Python2.5开始，每次处理字符串的拼接操作时"),a("code",[t._v("(str1 += str2)")]),t._v("，Python首先会检测str1还有没有其他的引用。如果没有的话，就会尝试原地扩充字符串buffer的大小，而不是重新分配一块内存来创建新的字符串并拷贝。这样的话，上述例子中的时间复杂度就仅为O(n)了。")]),t._v(" "),a("p",[t._v("所以放心用吧！使用 "),a("code",[t._v("+=")]),t._v(" 更香~")]),t._v(" "),a("h3",{attrs:{id:"其他的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他的","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他的'+'")]),t._v(" "),a("p",[t._v("另外，对于字符串拼接问题，除了使用加法操作符，我们还可以使用字符串内置的join函数。"),a("code",[t._v("string.join(iterable)")]),t._v("，表示把每个元素都按照指定的格式连接起来。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),a("h3",{attrs:{id:"其他常见函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他常见函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他常见函数")]),t._v(" "),a("p",[t._v("我们看一下字符串的分割函数"),a("code",[t._v("split()")]),t._v("，它常常应用于对数据的解析处理，比如我们读取了某个文件的路径，想要调用数据库的API，去读取对应的数据，我们通常会写成下面这样：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("namespace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    given namespace and table, query database to get corresponding\n    data         \n    """')]),t._v("\n\npath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hive://ads/training_table'")]),t._v("\nnamespace "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回'ads'")]),t._v("\ntable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回 'training_table'")]),t._v("\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" query_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("namespace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),a("p",[t._v("常见的函数还有：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string.strip(str)")]),t._v("，表示去掉首尾的"),a("code",[t._v("str")]),t._v("字符串；")]),t._v(" "),a("li",[a("code",[t._v("string.lstrip(str)")]),t._v("，表示只去掉开头的"),a("code",[t._v("str")]),t._v("字符串；")]),t._v(" "),a("li",[a("code",[t._v("string.rstrip(str)")]),t._v("，表示只去掉尾部的"),a("code",[t._v("str")]),t._v("字符串。")])]),t._v(" "),a("p",[t._v("比如很多时候，从文件读进来的字符串中，开头和结尾都含有空字符，我们需要去掉它们，就可以用strip()函数：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' my name is json '")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my name is json'")]),t._v("\n")])])]),a("h2",{attrs:{id:"格式化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化","aria-hidden":"true"}},[t._v("#")]),t._v(" 格式化")]),t._v(" "),a("p",[t._v("通常，我们使用一个字符串作为模板，模板中会有格式符。这些格式符为后续真实值预留位置，以呈现出真实值应该呈现的格式。字符串的格式化，通常会用在程序的输出、logging等场景。")]),t._v(" "),a("p",[t._v("举一个常见的例子。比如我们有一个任务，给定一个用户的"),a("code",[t._v("userid")]),t._v("，要去数据库中查询该用户的一些信息，并返回。而如果数据库中没有此人的信息，我们通常会记录下来，这样有利于往后的日志分析，或者是线上bug的调试等等。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no data available for person with id: {}, name: {}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("string.format()")]),t._v("，就是所谓的格式化函数；而大括号{}就是所谓的格式符，用来为后面的真实值——变量name预留位置。如果"),a("code",[t._v("id = '1230103'")]),t._v("、"),a("code",[t._v("name='json'")]),t._v("，那么输出便是：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no data available for person with id: 1230103, name: json'")]),t._v("\n")])])]),a("p",[t._v("对于之前还有什么"),a("code",[t._v("用%来表示")]),t._v("，这些我们在C里面也有接触，但是我还是推荐直接使用"),a("code",[t._v("format()")]),t._v("，毕竟这是最新规范，也是官方文档推荐的规范。")]),t._v(" "),a("p",[t._v("但是"),a("code",[t._v("3.6")]),t._v(" 版本以后还有一个新的字符串格式化用法更高效：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no data available for person with id: {id}, name: {name}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("具体我会持续更新讲解的......")]),t._v(" "),a("h2",{attrs:{id:"番外"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#番外","aria-hidden":"true"}},[t._v("#")]),t._v(" 番外")]),t._v(" "),a("p",[t._v("你觉得下面这两个方式哪个更优？")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# option A")]),t._v("\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# option B")]),t._v("\nl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("通过分析复杂度其实可以看出是 "),a("code",[t._v("option A")]),t._v(" 的更优，但是其实都是在 "),a("code",[t._v("O(n)")]),t._v(" 。但是建议大家还是使用 "),a("code",[t._v("option A")]),t._v(" ，毕竟代码简单啊~")])])},[],!1,null,null,null);s.default=r.exports}}]);