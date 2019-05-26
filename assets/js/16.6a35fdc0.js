(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{241:function(e,s,t){"use strict";t.r(s);var v=t(2),_=Object(v.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"你应该知道的http协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你应该知道的http协议","aria-hidden":"true"}},[e._v("#")]),e._v(" 你应该知道的HTTP协议")]),e._v(" "),t("p",[e._v("之前我们讲了"),t("code",[e._v("Tomcat本身就是一个“HTTP服务器 + Servlet容器”")]),e._v("，所以理解HTTP协议的工作原理是学习Web容器的基础。")]),e._v(" "),t("h2",{attrs:{id:"http本质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http本质","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP本质")]),e._v(" "),t("p",[e._v("HTTP协议是浏览器与服务器之间的数据传送协议。作为应用层协议，HTTP是基于TCP/IP协议来传递数据的（HTML文件、图片、查询结果等），HTTP协议不涉及数据包（Packet）传输，主要规定了客户端和服务器之间的通信格式。")]),e._v(" "),t("p",[e._v("假如浏览器需要从远程HTTP服务器获取一个HTML文本，在这个过程中，浏览器实际上要做两件事情。")]),e._v(" "),t("ul",[t("li",[e._v("与服务器建立Socket连接。")]),e._v(" "),t("li",[e._v("生成请求数据并通过Socket发送出去。")])]),e._v(" "),t("p",[e._v("第一步比较容易理解，浏览器从地址栏获取用户输入的网址和端口，去连接远端的服务器，这样就能通信了。")]),e._v(" "),t("p",[e._v("我们重点来看第二步，这个请求数据到底长什么样呢？都请求些什么内容呢？或者换句话说，浏览器需要告诉服务端什么信息呢？")]),e._v(" "),t("p",[e._v("首先最基本的是，你要让服务端知道你的意图，你是想获取内容还是提交内容；其次你需要告诉服务端你想要哪个内容。那么要把这些信息以一种什么样的格式放到请求里去呢？这就是HTTP协议要解决的问题。也就是说，"),t("strong",[e._v("HTTP协议的本质就是一种浏览器与服务器之间约定好的通信格式")]),e._v("。那浏览器与服务器之间具体是怎么工作的呢？")]),e._v(" "),t("h2",{attrs:{id:"http工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http工作原理","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP工作原理")]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("用户通过浏览器进行了一个操作，比如输入网址并回车，或者是点击链接，接着浏览器获取了这个事件。")]),e._v(" "),t("li",[e._v("浏览器向服务端发出TCP连接请求。")]),e._v(" "),t("li",[e._v("服务程序接受浏览器的连接请求，并经过TCP三次握手建立连接。")]),e._v(" "),t("li",[e._v("浏览器将请求数据打包成一个HTTP协议格式的数据包。")]),e._v(" "),t("li",[e._v("浏览器将该数据包推入网络，数据包经过网络传输，最终达到端服务程序。")]),e._v(" "),t("li",[e._v("服务端程序拿到这个数据包后，同样以HTTP协议格式解包，获取到客户端的意图。")]),e._v(" "),t("li",[e._v("得知客户端意图后进行处理，比如提供静态文件或者调用服务端程序获得动态结果。")]),e._v(" "),t("li",[e._v("服务器将响应结果（可能是HTML或者图片等）按照HTTP协议格式打包。")]),e._v(" "),t("li",[e._v("服务器将响应数据包推入网络，数据包经过网络传输最终达到到浏览器。")]),e._v(" "),t("li",[e._v("浏览器拿到数据包后，以HTTP协议的格式解包，然后解析数据，假设这里的数据是HTML。")]),e._v(" "),t("li",[e._v("浏览器将HTML文件展示在页面上。")])])]),e._v(" "),t("p",[e._v("那我们想要探究的Tomcat作为一个HTTP服务器，在这个过程中都做了些什么事情呢？主要是接受连接、解析请求数据、处理请求和发送响应这几个步骤。这里请你注意，可能有成千上万的浏览器同时请求同一个HTTP服务器，因此Tomcat为了提高服务的能力和并发度，往往会将自己要做的几个事情并行化，具体来说就是使用多线程的技术。")]),e._v(" "),t("h2",{attrs:{id:"http里面request-response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http里面request-response","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP里面Request Response")]),e._v(" "),t("p",[e._v("在浏览器和HTTP服务器之间通信的过程中，首先要将数据打包成HTTP协议的格式，那HTTP协议的数据包具体长什么样呢？这里我以某个登陆请求为例，用户在登陆页面输入用户名和密码，点击登陆后，浏览器发出了这样的HTTP请求：")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/tomcat/request.png"),alt:"HTTP的请求格式"}}),e._v(" "),t("p",[e._v("你可以看到，HTTP请求数据由三部分组成，分别是"),t("strong",[e._v("请求行、请求报头、请求正文")]),e._v("。当这个HTTP请求数据到达Tomcat后，Tomcat会把HTTP请求数据字节流解析成一个Request对象，这个Request对象封装了HTTP所有的请求信息。接着Tomcat把这个Request对象交给Web应用去处理，处理完后得到一个Response对象，Tomcat会把这个Response对象转成HTTP格式的响应数据并发送给浏览器。")]),e._v(" "),t("p",[e._v("我们再来看看HTTP响应的格式，HTTP的响应也是由三部分组成，分别是"),t("strong",[e._v("状态行、响应报头、报文主体")]),e._v("。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/tomcat/response.jpg"),alt:"HTTP的响应格式"}}),e._v(" "),t("h2",{attrs:{id:"cookie和session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie和session","aria-hidden":"true"}},[e._v("#")]),e._v(" Cookie和Session")]),e._v(" "),t("p",[e._v("我们知道，HTTP协议有个特点是无状态，请求与请求之间是没有关系的。这样会出现一个很尴尬的问题：Web应用不知道你是谁。比如你登陆淘宝后，在购物车中添加了三件商品，刷新一下网页，这时系统提示你仍然处于未登录的状态，购物车也空了，很显然这种情况是不可接受的。因此HTTP协议需要一种技术让请求与请求之间建立起联系，并且服务器需要知道这个请求来自哪个用户，于是Cookie技术出现了。")]),e._v(" "),t("p",[t("strong",[e._v("1. Cookie技术")])]),e._v(" "),t("p",[e._v("Cookie是HTTP报文的一个请求头，Web应用可以将用户的标识信息或者其他一些信息（用户名等）存储在Cookie中。用户经过验证之后，每次HTTP请求报文中都包含Cookie，这样服务器读取这个Cookie请求头就知道用户是谁了。"),t("strong",[e._v("Cookie本质上就是一份存储在用户本地的文件，里面包含了每次请求中都需要传递的信息")]),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("2. Session技术")])]),e._v(" "),t("p",[e._v("由于Cookie以明文的方式存储在本地，而Cookie中往往带有用户信息，这样就造成了非常大的安全隐患。而Session的出现解决了这个问题，"),t("strong",[e._v("Session可以理解为服务器端开辟的存储空间，里面保存了用户的状态")]),e._v("，用户信息以Session的形式存储在服务端。当用户请求到来时，服务端可以把用户的请求和用户的Session对应起来。那么Session是怎么和请求对应起来的呢？答案是通过Cookie，浏览器在Cookie中填充了一个Session ID之类的字段用来标识请求。")]),e._v(" "),t("p",[t("strong",[e._v("具体工作过程是这样的：")])]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("服务器在创建Session的同时，会为该Session生成唯一的"),t("code",[e._v("Session ID")]),e._v("。")]),e._v(" "),t("li",[e._v("当浏览器再次发送请求的时候，会将这个"),t("code",[e._v("Session ID")]),e._v("带上，服务器接受到请求之后就会依据Session ID找到相应的Session。")]),e._v(" "),t("li",[e._v("找到Session后，就可以在Session中获取或者添加内容了。")])])]),e._v(" "),t("p",[e._v("而这些内容只会保存在服务器中，发到客户端的只有Session ID，这样相对安全，也节省了网络流量，因为不需要在Cookie中存储大量用户信息。")]),e._v(" "),t("p",[t("strong",[e._v("3. Session创建与存储")])]),e._v(" "),t("p",[e._v("那么Session在何时何地创建呢？当然还是在服务器端程序运行的过程中创建的，不同语言实现的应用程序有不同的创建Session的方法。在Java中，是Web应用程序在调用"),t("code",[e._v("HttpServletRequest的getSession()")]),e._v("时，由Web容器（比如Tomcat）创建的。那"),t("code",[e._v("HttpServletRequest")]),e._v("又是什么呢？别着急，我后面再聊。")]),e._v(" "),t("p",[e._v("Tomcat的Session管理器提供了多种持久化方案来存储Session，通常会采用高性能的存储方式，比如"),t("code",[e._v("Redis")]),e._v("，并且通过集群部署的方式，防止单点故障，从而提升高可用。同时，Session有过期时间，因此Tomcat会开启后台线程定期的轮询，如果Session过期了就将Session失效。")]),e._v(" "),t("p",[t("strong",[e._v("多说一下：现在的web容器都支持将session存储在第三方中间件（如"),t("code",[e._v("redis")]),e._v("）中")]),e._v("，这是为什么？")]),e._v(" "),t("blockquote",[t("p",[e._v("用Web容器的Session方案需要侵入特定的Web容器，用Spring Session可能比较简单，不需要跟特定的Servlet容器打交道。")]),e._v(" "),t("p",[e._v("这正是Spring喜欢做的事情，它使得程序员甚至感觉不到Servlet容器的存在，可以专心开发Web应用。但是Spring到底做了什么，Spring Session是如何实现的，我们还是有必要了解了解~")]),e._v(" "),t("p",[e._v("其实它是通过Servlet规范中的Filter机制拦截了所有Servlet请求，偷梁换柱，将标准的Servlet请求对象包装了一下，换成它自己的Request包装类对象，这样当程序员通过包装后的"),t("code",[e._v("Request对象的getSession()")]),e._v(" 拿Session时，是通过Spring拿Session，没Web容器什么事了。")])]),e._v(" "),t("h2",{attrs:{id:"关于无状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于无状态","aria-hidden":"true"}},[e._v("#")]),e._v(" 关于无状态")]),e._v(" "),t("p",[e._v("在HTTP/1.0时期，每次HTTP请求都会创建一个新的TCP连接，请求完成后之后这个TCP连接就会被关闭。这种通信模式的效率不高，所以在HTTP/1.1中，引入了HTTP长连接的概念，使用长连接的HTTP协议，会在响应头加入"),t("code",[e._v("Connection:keep-alive")]),e._v("。这样当浏览器完成一次请求后，浏览器和服务器之间的TCP连接不会关闭，再次访问这个服务器上的网页时，浏览器会继续使用这一条已经建立的连接，也就是说两个请求可能共用一个TCP连接。")]),e._v(" "),t("p",[e._v("但是上面提到HTTP的特点是无状态的，多个请求之间是没有关系的，这是不是矛盾了？")]),e._v(" "),t("p",[t("strong",[e._v("解释：")])]),e._v(" "),t("ol",[t("li",[e._v("Http的无状态理解是指不同请求间协议内容无相关性，即本次请求与上次请求没有内容的依赖关系，本次响应也只针对本次请求的数据，至于服务器应用程序为用户保存的状态是属于应用层，与协议是无关的。")]),e._v(" "),t("li",[t("code",[e._v("keep-alive")]),e._v("表示TCP的连接可以复用，指的是利用已有的传输通道进行http协议内容的传输，省去创建/关闭连接的开销达到提升性能的效果。应用程序其实一般不关心这次Http请求的TCP传输细节，只关心Http协议的内容，因此只要复用TCP连接时做好必要的数据重置，是不算有状态的。")])])])},[],!1,null,null,null);s.default=_.exports}}]);