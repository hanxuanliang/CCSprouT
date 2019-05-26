# 聊聊String

我相信你本身对字符串已经有所了解。我这里带你回顾一下字符串的常用操作，并对其中的一些小tricks详细地加以解释。

## 基础回顾

以下有这么几种写法：

```python
s1 = 'hello'
s2 = "hello"
s3 = """hello"""  # 这个形式我们在注释里面经常看到
s1 == s2 == s3
>> True
```

我们要记住的是：**Python中单引号、双引号和三引号的字符串是一模一样的，没有区别**。

Python同时支持这三种表达方式，很重要的一个原因就是，这样方便你在字符串中，内嵌带引号的字符串。比如：`"I'm a Fool"`。

还有一个地方就是在转义字符的应用中，最常见的就是换行符`'\n'`的使用。比如文件读取，如果我们一行行地读取，那么每一行字符串的末尾，都会包含换行符`'\n'`。而最后做数据处理时，我们往往会丢掉每一行的换行符。

```python
s = 'a\nb\tc'
print(s)
>> a
   b	c

len(s)
>> 5
```

## 常用函数操作

Python的字符串同样支持索引，切片和遍历等等操作。

```python
name = 'json'
name[0]
>> 'j'
name[1:3]
>> 'so'

for char in name:
    print(char)   
>> j
>> s
>> o
>> n
```

特别要注意，Python的字符串是`不可变的（immutable）`。因此，用下面的操作，来改变一个字符串内部的字符是错误的，不允许的。

```python
s = 'hello'
s[0] = 'H'
>> Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
```

Python中字符串的改变，通常只能通过创建新的字符串来完成。比如上述例子中，想把`'hello'`的第一个字符`'h'`，改为大写的`'H'`，我们可以采用下面的做法：

```python
# option A
s = 'H' + s[1:]

# option B
s = s.replace('h', 'H')
```

你可能了解到，在其他语言中，如Java，有可变的字符串类型，比如`StringBuilder`，每次添加、改变或删除字符（串），**无需创建新的字符串**，时间复杂度仅为O(1)。这样就大大提高了程序的运行效率。

但可惜的是，Python中并没有相关的数据类型，我们还是得老老实实创建新的字符串。因此，每次想要改变字符串，往往需要O(n)的时间复杂度，其中，n为新字符串的长度。

但是这不一定啊！随着版本的更新，Python也越来越聪明，性能优化可能越来越好了。

### 注意'+'

这里，我着重讲解一下，使用加法操作符`'+='`的字符串拼接方法。因为它是一个例外，打破了字符串不可变的特性。`str1 += str2  # 表示str1 = str1 + str2`，我们来看看一个例子：

```python
s = ''
for n in range(0, 100000):
    s += str(n)
```

你觉得这个例子的时间复杂度是多少呢？

每次循环，似乎都得创建一个新的字符串；而每次创建一个新的字符串，都需要O(n)的时间复杂度。因此，总的时间复杂度就为`O(1) + O(2) + … + O(n) = O(n^2)`。

但是必须说明，这个结论只适用于老版本的Python了。自从Python2.5开始，每次处理字符串的拼接操作时`(str1 += str2)`，Python首先会检测str1还有没有其他的引用。如果没有的话，就会尝试原地扩充字符串buffer的大小，而不是重新分配一块内存来创建新的字符串并拷贝。这样的话，上述例子中的时间复杂度就仅为O(n)了。

所以放心用吧！使用 `+=` 更香~

### 其他的'+'

另外，对于字符串拼接问题，除了使用加法操作符，我们还可以使用字符串内置的join函数。`string.join(iterable)`，表示把每个元素都按照指定的格式连接起来。

```python
l = []
for n in range(0, 100000):
    l.append(str(n))

l = ' '.join(l) 
```

### 其他常见函数

我们看一下字符串的分割函数`split()`，它常常应用于对数据的解析处理，比如我们读取了某个文件的路径，想要调用数据库的API，去读取对应的数据，我们通常会写成下面这样：

```python
def query_data(namespace, table):
    """
    given namespace and table, query database to get corresponding
    data         
    """

path = 'hive://ads/training_table'
namespace = path.split('//')[1].split('/')[0]   # 返回'ads'
table = path.split('//')[1].split('/')[1]   # 返回 'training_table'
data = query_data(namespace, table) 
```

常见的函数还有：

- `string.strip(str)`，表示去掉首尾的`str`字符串；
- `string.lstrip(str)`，表示只去掉开头的`str`字符串；
- `string.rstrip(str)`，表示只去掉尾部的`str`字符串。

比如很多时候，从文件读进来的字符串中，开头和结尾都含有空字符，我们需要去掉它们，就可以用strip()函数：

```python
s = ' my name is json '
s.strip()
>> 'my name is json'
```

## 格式化

通常，我们使用一个字符串作为模板，模板中会有格式符。这些格式符为后续真实值预留位置，以呈现出真实值应该呈现的格式。字符串的格式化，通常会用在程序的输出、logging等场景。

举一个常见的例子。比如我们有一个任务，给定一个用户的`userid`，要去数据库中查询该用户的一些信息，并返回。而如果数据库中没有此人的信息，我们通常会记录下来，这样有利于往后的日志分析，或者是线上bug的调试等等。

```python
print('no data available for person with id: {}, name: {}'.format(id, name))
```

`string.format()`，就是所谓的格式化函数；而大括号{}就是所谓的格式符，用来为后面的真实值——变量name预留位置。如果`id = '1230103'`、`name='json'`，那么输出便是：

```python
'no data available for person with id: 1230103, name: json'
```

对于之前还有什么`用%来表示`，这些我们在C里面也有接触，但是我还是推荐直接使用`format()`，毕竟这是最新规范，也是官方文档推荐的规范。

但是`3.6` 版本以后还有一个新的字符串格式化用法更高效：

```python
print('no data available for person with id: {id}, name: {name}')
```

具体我会持续更新讲解的......

## 番外

你觉得下面这两个方式哪个更优？

```python
# option A
s = ''
for n in range(0, 100000):
    s += str(n)
    
# option B
l = []
for n in range(0, 100000):
    l.append(str(n))
    
s = ' '.join(l)
```

通过分析复杂度其实可以看出是 `option A` 的更优，但是其实都是在 `O(n)` 。但是建议大家还是使用 `option A` ，毕竟代码简单啊~