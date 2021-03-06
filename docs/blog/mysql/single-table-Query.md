# 单表查询

对于大多数`Mysql`使用者而言，`Mysql`其实就是一个软件，平时最多使用的的功能就是 `查询` 。当然这是对我们这些开发者而言，`DBA` 这些专业的数据库职业人而言，可能还涉及到性能优化（但是我这篇文章是针对开发者的）。是时候展示真正的技术了。

我们先来看看 `Mysql` 是怎么执行单表查询的 。

所以我们先开一个表：

```sql
CREATE TABLE single_table (
    id INT NOT NULL AUTO_INCREMENT,
    key1 VARCHAR(100),
    key2 INT,
    key3 VARCHAR(100),
    key_part1 VARCHAR(100),
    key_part2 VARCHAR(100),
    key_part3 VARCHAR(100),
    common_field VARCHAR(100),
    PRIMARY KEY (id),
    KEY idx_key1 (key1),
    UNIQUE KEY idx_key2 (key2),
    KEY idx_key3 (key3),
    KEY idx_key_part(key_part1, key_part2, key_part3)
) Engine=InnoDB CHARSET=utf8;
```

然后我们来看看表的具体情况（`在Mysql里面`）：

```sql
mysql root@localhost:study_mysql_test> show  columns from single_table;
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| id           | int(11)      | NO   | PRI | <null>  | auto_increment |
| key1         | varchar(100) | YES  | MUL | <null>  |                |
| key2         | int(11)      | YES  | UNI | <null>  |                |
| key3         | varchar(100) | YES  | MUL | <null>  |                |
| key_part1    | varchar(100) | YES  | MUL | <null>  |                |
| key_part2    | varchar(100) | YES  |     | <null>  |                |
| key_part3    | varchar(100) | YES  |     | <null>  |                |
| common_field | varchar(100) | YES  |     | <null>  |                |
+--------------+--------------+------+-----+---------+----------------+
8 rows in set
Time: 0.024s                                                            
```

然后我们再来看看其他一些字段是什么：

- 为`id`列建立的聚簇索引。
- 为`key1`列建立的`idx_key1`二级索引。
- 为`key2`列建立的`idx_key2`二级索引，而且该索引是唯一二级索引。
- 为`key3`列建立的`idx_key3`二级索引。
- 为`key_part1`、`key_part2`、`key_part3`列建立的`idx_key_part`二级索引，这也是一个联合索引。

## access method

`Mysql`的设计者把`MySQL`执行查询语句的方式称之为`访问方法`或者`访问类型`。同一个查询语句可能可以使用多种不同的访问方法来执行，虽然最后的查询结果都是一样的，但是执行的时间可能相差甚远。而设计者把查询的执行方式大致分为两种：

- **全表扫描查询**

  这种执行方式好理解，就是把表的每一行记录都扫一遍，然后把符合条件的记录加入结果集里面。而且不管是扫描查询都可以使用这种方式。当然，这也是最笨的方式。

- **索引查询**

  直接使用索引来执行查询相比于全表查询可能会加快查询执行的时间。当然这个也可以再细分：

  - 主键或唯一二级索引的等值查询
  - 普通二级索引的等值查询
  - 索引列的范围查询
  - 直接扫描整个索引

下面我们就来试试 `访问方法` 的具体内容吧！

### 主键

这个是我们常见的手法，通过主键 `id` 来定位一条记录，例如：

```sql
SELECT * FROM single_table WHERE id = 1438;
```

`MySQL`会直接利用主键值在聚簇索引中定位对应的用户记录，就像这样：


<img :src="$withBase('/mysql/聚簇索引示例图.jpg')" alt="聚簇索引示例图">

记录中只展示我们关心的索引列，对于`single_table`表的聚簇索引来说，展示的就是`id`列。我想突出的重点就是：**`B+`树叶子节点中的记录是按照索引列排序的**，对于的聚簇索引来说，**它对应的`B+`树叶子节点中的记录就是按照`id`列排序的**。`B+`树本来就是一个矮矮的大胖子，所以这样根据主键值定位一条记录的速度超快，类似的，我们根据唯一二级索引列来定位一条记录的速度也是很快的。例如：

```sql
SELECT * FROM single_table WHERE key2 = 3841;
```

<img :src="$withBase('/mysql/二级索引示意图.jpg')" alt="二级索引示意图">


可以看到这个查询的执行分两步，

- 第一步先从`idx_key2`对应的`B+`树索引中根据`key2`列比较条件定位到一条二级索引记录
- 然后再根据该记录的`id`值到聚簇索引中获取到完整的用户记录。

而我们注意到上述的查询都是等值查询，`Mysql ` 设计者把这种通过主键或者唯一二级索引列来定位一条记录的访问方法定义为：`const`， 大概的意思是常数时间内可以查询出来。而刚刚我也说了，这种`const`访问方法只能在主键列或者唯一二级索引列和一个常数进行**等值比较**时才有效。

### 普通的二级索引

我们对某个普通的二级索引列与常数进行等值比较，比如这样：

```sql
SELECT * FROM single_table WHERE key1 = 'abc';
```

我们一般先使用二级索引找到对应记录的`id`值，然后再回表到聚簇索引中查找完整的用户记录。由于普通二级索引并不限制索引列值的唯一性，所以可能找到多条对应的记录，所以说使用二级索引来执行查询的代价取决于等值匹配到的二级索引记录条数。

而在回表这个操作，`Mysql ` 设计者把这种搜索条件为二级索引列与常数等值比较，采用二级索引来执行查询的访问方法称为：`ref`

<img :src="$withBase('/mysql/普通二级索引.jpg')" alt="普通二级索引">


在图中我们看见，对于普通的二级索引来说，通过索引列进行等值比较后可能匹配到多条连续的记录，而不是像主键或者唯一二级索引那样最多只能匹配1条记录。所以这种`ref`访问方法比`const`差了那么一点点。