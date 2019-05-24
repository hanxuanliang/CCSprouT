# 列表和元组，到底用哪一个？

## 基本回顾

列表和元组，都是**一个可以放置任意数据类型的有序集合**。

```python
list1 = [1, 2, 'hello', 'world']
tup1 = ('json', 22)
list1, tup1

>> ([1, 2, 'hello', 'world'], ('json', 22))
```

在绝大多数编程语言中，集合的数据类型必须一致。不过，对于Python的列表和元组来说，并无此要求

其次，我们必须掌握它们的区别。

- **列表是动态的**，长度大小不固定，可以随意地增加、删减或者改变元素（mutable）。
- **而元组是静态的**，长度大小固定，无法增加删减或者改变（immutable）。

```python
list1[3] = 30
list1

>> [1, 2, 'hello', 30]

tup1[3] = 30
tup1

>> ---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-10-916d8e4e10e1> in <module>
----> 1 tup1[3] = 30
      2 tup1

TypeError: 'tuple' object does not support item assignment

```

如果你想对已有的元组做任何"改变"，该怎么办呢？那就只能重新开辟一块内存，创建新的元组了。

```python
new_tup1 = tup1 + (5, )
new_tup1

>> ('json', 22, 5)

# 原地改变
list1.append(20)
list1

>> [1, 2, 'hello', 30, 20]
```

而对于列表来说，由于其是动态的，我们只需简单地在列表末尾，加入对应元素就可以了。如下操作后，会修改原来列表中的元素，而不会创建新的列表。

## 基本操作

- 支持**负数索引**

```python
l = [1, 2, 3, 4]
l[-1]

>> 4

tup = (1, 2, 3, 4)
tup[-1]

>> 4
```

-1表示最后一个元素，-2表示倒数第二个元素，以此类推。

- **切片操作**

```python
# [a, b) ==> 左闭右开
list = [1, 2, 3, 4]
l[1:3]

>> [2, 3]

tup = (1, 2, 3, 4)
tup[1:3]

>> (2, 3) 
```

- **随意嵌套**，**相互转换**

```python
l = [[1, 2, 3], [4, 5]] # 列表的每一个元素也是一个列表

tup = ((1, 2, 3), (4, 5, 6)) # 元组的每一个元素也是一元组

list((1, 2, 3))
>> [1, 2, 3]

tuple([1, 2, 3])
>> (1, 2, 3)
```

- **内置函数**

```python
count(item)：
# 统计列表/元组中item出现的次数。

index(item)：
# 返回列表/元组中item第一次出现的索引。

list.reverse()，list.sort()：
# 分别表示原地倒转列表和排序（注意，元组无内置的这两个函数)。

reversed()，sorted()：
# 表示对列表/元组进行倒转和排序，但是会返回一个新的列表/元组。
```

## 存储差异

我们可以来看下面的例子：

```python
l = [1, 2, 3]
l.__sizeof__()

>> 64

tup = (1, 2, 3)
tup.__sizeof__()

>> 48
```

对列表和元组，我们放置了相同的元素，但是元组的存储空间，却比列表要少16字节。这是为什么呢？

事实上，由于列表是动态的，所以它需要存储指针，来指向对应的元素（上述例子中，对于int型，8字节）。另外，由于列表可变，所以需要额外存储已经分配的长度大小（8字节），这样才可以实时追踪列表空间的使用情况，当空间不足时，及时分配额外空间。

```python
l = []
l.__sizeof__() # 空列表的存储空间为40字节
>> 40

l.append(1)
l.__sizeof__() 
>> 72 
# 加入了元素1之后，列表为其分配了可以存储4个元素的空间 (72 - 40)/8 = 4

l.append(2) 
l.__sizeof__()
>> 72 
# 由于之前分配了空间，所以加入元素2，列表空间不变

l.append(3)
l.__sizeof__() 
>> 72 
# 同上

l.append(4)
l.__sizeof__() 
>> 72 

l.append(5)
l.__sizeof__() 
>> 104 
# 加入元素5之后，列表的空间不足，所以又额外分配了可以存储4个元素的空间
```

我们可以看到，为了减小每次增加/删减操作时空间分配的开销，Python每次分配空间时都会额外多分配一些，这样的机制（over-allocating）保证了其操作的高效性：增加/删除的时间复杂度均为O(1)。

**注意：**但是如果你是直接 `l = [1, 2, 3]` ，这种直接初始化列表，并没有增加元素的操作，因此只会分配3个元素的空间。

但是对于元组，情况就不同了。元组长度大小固定，元素不可变，所以存储空间固定。

## 性能差异

通过学习列表和元组存储方式的差异，我们可以得出结论：元组要比列表更加轻量级一些，所以总体上来说，元组的性能速度要略优于列表。

另外，Python会在后台，对静态数据做一些**资源缓存**（resource caching）。通常来说，因为垃圾回收机制的存在，如果一些变量不被使用了，Python就会回收它们所占用的内存，返还给操作系统，以便其他变量或其他应用使用。

但是对于一些静态变量，比如元组，如果它不被使用并且占用空间不大时，Python会暂时缓存这部分内存。这样，下次我们再创建同样大小的元组时，Python就可以不用再向操作系统发出请求，去寻找内存，而是可以直接分配之前缓存的内存空间，这样就能大大加快程序的运行速度。

另外，我们看看两者的初始化一个相同元素的列表和元组分别所需的时间：

```python
python3 -m timeit 'x=(1,2,3,4,5,6)'
>> 20000000 loops, best of 5: 9.97 nsec per loop
    
python3 -m timeit 'x=[1,2,3,4,5,6]'
>> 5000000 loops, best of 5: 50.1 nsec per loop
```

当然，如果你想要增加、删减或者改变元素，那么列表显然更优。原因你现在肯定知道了，那就是对于元组，你必须得通过新建一个元组来完成。

## 使用场景

**1.** 如果存储的数据和数量不变，比如你有一个函数，需要返回的是一个地点的经纬度，然后直接传给前端渲染，那么肯定选用元组更合适。

```python
def get_location():
    ..... 
    return (longitude, latitude)
```

**2.** 如果存储的数据或数量是可变的，比如社交平台上的一个日志功能，是统计一个用户在一周之内看了哪些用户的帖子，那么则用列表更合适。

```python
viewer_owner_id_list = [] # 里面的每个元素记录了这个viewer一周内看过的所有owner的id

records = queryDB(viewer_id) # 索引数据库，拿到某个viewer一周内的日志

for record in records:
    viewer_owner_id_list.append(record.id)
```

**3.** 一般在**key中使用元祖**，其他情况多数都使用列表

## 番外

这两个有区别吗？

```python
# 创建空列表
# option A
empty_list = list()

# option B
empty_list = []
```

**Answer：**

区别主要在于list()是一个`function call`，`Python的function call` 会创建 `stack`，并且进行一系列参数检查的操作，比较expensive，反观 `[]是一个内置的C函数`，可以直接被调用，因此效率高。
