# 字典、集合，你真的了解吗？

## 基本回顾

直接先来看字典和集合的创建，通常有下面这几种方式：

```python
d1 = {'name': 'json', 'age': 20, 'gender': 'male'}
d2 = dict({'name': 'json', 'age': 20, 'gender': 'male'})
d3 = dict([('name', 'json'), ('age', 20), ('gender', 'male')])
d4 = dict(name='json', age=20, gender='male') 
d1 == d2 == d3 ==d4
>> True

s1 = {1, 2, 3}
s2 = Set([1, 2, 3])
s1 == s2
>> True

d5 = {'name': 'json', 2: 3}
d
>> {'name': 'json', 2: 3}

d[2] >> 3
d['name'] = 'json'
```

这里注意，Python中字典和集合，无论是键还是值，都可以是混合类型。

再来看元素访问的问题。字典访问可以直接索引键，如果不存在，就会抛出异常，也可以使用 `get(key, default)`函数来进行索引。如果键不存在，调用get()函数可以返回一个默认值。

```python
d = {'name': 'jason', 'age': 20}
d['name']
'json'
d['location']
>> Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'location'

d = {'name': 'json', 'age': 20}
d.get('name')
>> 'json'

d.get('location', 'null')
>> 'null'
```

说完了字典的访问，我们再来看集合。

首先我要强调的是，**集合并不支持索引操作，因为集合本质上是一个哈希表，和列表不一样**。所以，下面这样的操作是错误的，Python会抛出异常：

```python
s = {1, 2, 3}
s[0]

>> Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

想要判断一个元素在不在字典或集合内，我们可以用 `value in dict/set` 来判断。

```python
s = {1, 2, 3}
1 in s
>> True

10 in s
>> False

d = {'name': 'json', 'age': 20}
'name' in d
>> True

'location' in d
>> False
```

## 其他操作

字典和集合支持 `增加、删除、更新` 等操作。

```python
d = {'name': 'json', 'age': 20}
d['gender'] = 'male' # 增加元素对'gender': 'male'
d['dob'] = '1998-02-01' # 增加元素对'dob': '1998-02-01'
d
>> {'name': 'json', 'age': 20, 'gender': 'male', 'dob': '1998-02-01'}

d['dob'] = '1998-01-01' # 更新键'dob'对应的值 
d.pop('dob') # 删除键为'dob'的元素对
>> '1998-02-01' # 输出 pop 出来的值
d
>> {'name': 'json', 'age': 20, 'gender': 'male'}

s = {1, 2, 3}
s.add(4) # 增加元素4到集合
s
>> {1, 2, 3, 4}

s.remove(4) # 从集合中删除元素4
s
>> {1, 2, 3}
```

不过要注意，集合的pop()操作是删除集合中最后一个元素，可是**集合本身是无序的**，你无法知道会删除哪个元素，因此这个操作得谨慎使用。

而在实际应用中，很多情况下，我们需要对字典或集合进行排序。

- 对于字典，我们通常会根据键或值，进行升序或降序排序：

```python
d = {'b': 1, 'a': 2, 'c': 10}

d_sorted_by_key = sorted(d.items(), key=lambda x: x[0]) # 根据字典键的升序排序
d_sorted_by_value = sorted(d.items(), key=lambda x: x[1]) # 根据字典值的升序排序

d_sorted_by_key
>> [('a', 2), ('b', 1), ('c', 10)]

d_sorted_by_value
>> [('b', 1), ('a', 2), ('c', 10)]
```

当然，因为字典本身是无序的，所以这里返回了一个列表。列表中的每个元素，是**由原字典的键和值组成的元组**。

- 集合，其排序和前面讲过的列表、元组很类似，直接调用sorted(set)即可

```python
s = {3, 4, 2, 1}

sorted(s) # 对集合的元素进行升序排序
>> [1, 2, 3, 4]
```

## 性能差异

现在一个需求：电商企业的后台，存储了每件产品的ID、名称和价格。现在的需求是，给定某件商品的ID，我们要找出其价格。

如果我们使用前面提到的 `list` 来存储，并进行查找：

```python
def find_product_price(products, id):
    for id_, price in products:
        if id_ == id:
            return price
    return None 
     
products = [
    (143121312, 100), 
    (432314553, 30),
    (32421912367, 150) 
]

print('The price of product 432314553 is {}'.format(find_product_price(products, 432314553)))

# 输出
The price of product 432314553 is 30
```

假设列表有n个元素，而查找的过程要遍历列表，那么时间复杂度就为`O(n)`。即使我们先对列表进行排序，然后使用二分查找，也会需要 `O(logn)`的时间复杂度，更何况，列表的排序还需要 `O(nlogn)`的时间。

如果我们使用这一节的 `dict`， 那么查找就会非常便捷高效，只需O(1)的时间复杂度就可以完成。原因也很简单，刚刚提到过的，字典的内部组成是一张`hash表`，你可以直接通过键的哈希值，找到其对应的值。

```python
# 貌似函数都没写
products = {
  143121312: 100,
  432314553: 30,
  32421912367: 150
}

print('The price of product 432314553 is {}'.format(products[432314553])) 

>> The price of product 432314553 is 30
```

现在我们换一个需求：要找出这些商品有多少种不同的价格。

我们就不用 `list` 来试了，我们需要嵌套循环这个 `list` 来判断是否一样：（我们还是给段code）

```python
def find_unique_price(products):
    unique_price_list = []
    for _, price in products: # A
        if price not in unique_price_list: # B
            unique_price_list.append(price)
    return len(unique_price_list)

products = [
    (143121312, 100), 
    (432314553, 30),
    (32421912367, 150),
    (937153201, 30)
]
print('number of unique price is: {}'.format(find_unique_price(products)))

>> number of unique price is: 3
```

然后我们来看看 `set` 的操作，由于集合是高度优化的哈希表，里面元素不能重复，并且其添加和查找操作只需O(1)的复杂度：

```python
# set version
def find_unique_price(products):
    unique_price_set = set()
    for _, price in products:
        unique_price_set.add(price)
    return len(unique_price_set)        

products = [
    (143121312, 100), 
    (432314553, 30),
    (32421912367, 150),
    (937153201, 30)
]
print('number of unique price is: {}'.format(find_unique_price(products)))

>> number of unique price is: 3
```

### 总结

- 当有提供 `id, key` 这种的，我们应该想到是不是可以使用 `dict`
- 如果只是问 `times, counter` 这种， 我们应该想到是不是可以使用 `set`

## 工作原理

不同于其他数据结构，字典和集合的内部结构**都是一张哈希表**。

- 对于字典而言，这张表存储了哈希值（hash）、键和值这3个元素。
- 而对集合来说，区别就是哈希表内没有键和值的配对，只有单一的元素了。

我们来看看现在的哈希表除了字典本身的结构，会把索引和哈希值、键、值单独分开，也就是下面这样新的结构：

```python
Indices
----------------------------------------------------
None | index | None | None | index | None | index ...
----------------------------------------------------

Entries
--------------------
hash0   key0  value0
---------------------
hash1   key1  value1
---------------------
hash2   key2  value2
---------------------
        ...
---------------------
```

我们举个例子：

```python
{'name': 'mike', 'dob': '1998-02-01', 'gender': 'male'}
```

那么它会存储为类似下面的形式：

```python
indices = [None, 1, None, None, 0, None, 2]

entries = [
    [1231236123, 'name', 'mike'],
    [-230273521, 'dob', '1999-01-01'],
    [9371539127, 'gender', 'male']
]
```

### insert

首先计算键的哈希值`(hash(key))`，再和 `mask = PyDicMinSize - 1` 做与操作，计算这个元素应该插入哈希表的位置 `index = hash(key) & mask` 。如果哈希表中此位置是空的，那么这个元素就会被插入其中。

而如果此位置已被占用，内部便会比较两个元素的哈希值和键是否相等。

- 若两者都相等，则表明这个元素已经存在，如果值不同，则更新值。
- 若两者中有一个不相等，这种情况我们通常称为`哈希冲突（hash collision）`，意思是两个元素的键不相等，但是哈希值相等。这种情况下，Python便会继续寻找表中空余的位置，直到找到位置为止。

值得一提的是，通常来说，遇到这种情况，最简单的方式是`线性寻找`，即从这个位置开始，挨个往后寻找空位。当然，Python内部对此进行了优化（这一点无需深入了解，你有兴趣可以查看源码），让这个步骤更加高效。

**其他的操作无外乎就是`find`，这个操作就和其他语言一样，找到就返回，没有找到就抛异常**

### hash冲突

哈希冲突的发生，往往会降低字典和集合操作的速度。因此，为了保证其高效性，字典和集合内的哈希表，通常会保证其至少留有1/3的剩余空间。随着元素的不停插入，当剩余空间小于1/3时，Python会重新获取更大的内存空间，扩充哈希表。不过，这种情况下，表内所有的元素位置都会被重新排放。

## 番外

- 下面初始化字典的方式，哪一种更高效？

```python
# Option A
d = {'name': 'json', 'age': 20, 'gender': 'male'}

# Option B
d = dict({'name': 'json', 'age': 20, 'gender': 'male'})
```

- 字典的键可以是一个列表吗？下面这段代码中，字典的初始化是否正确呢？

```python
d = {'name': 'json', ['education']: ['Tsinghua', 'Stanford', 'MIT']}
```

**1.**  第一个问题其实和上一节的问题类似，`{} 类似关键字，内部会去直接调用底层C写好的代码`

**2.** `记住一点：字典当中的 key 要求是不可变的`，因为列表是一个动态变化的数据结构，用列表作为 Key 在这里是不被允许的。`第二：key 是不重复的`， 而列表里面的 `key` 是可以改变的，所以也从另外一个方面说明了。但是可以改成元组，这样就能表示了。

