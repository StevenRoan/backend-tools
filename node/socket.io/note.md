* [Protocol Handshake](https://en.wikipedia.org/wiki/WebSocket#Protocol_handshake)
 * Because protocol handshake need to use http at first, websocket server also needs to initiate a web server


### Socket.io
##### Architecture
* `/lib/index.js` (actual socket server code):

  > * Able to **create**, join namespace
  > * Create Client (`new Client()`) and assgin the client to join certain namespace (related to url)

  * `./lib/client.js`

    > * `client` connect to namespaces, and create `socket` by namespace
    > * `client.sockets`: keep the `socket.id` to socket object
    > * `client.nsps`: keep the name to the namespaces object
    > * `client` get `socket` thorough namespacee

  * `./lib/namespace.js`

    > * Created by **Server**
    > * Each **client** create **socket** under certain **NAMESPACE**


    * `./lib/socket.js`

      > * Each socket  is created by certain **namespace**
      > * Each socket can create different **room** in a **namespace**


##### namespace and room
* namespace contains many rooms

