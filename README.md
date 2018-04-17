# insta-pic

Feed it with an Instagram post url, get back an image url:

Install:

```sh
npm i insta-pic
# or
yarn add insta-pic
```

```js
const insta = require('insta-pic');
const pic = await insta('https://www.instagram.com/p/BhpdJ5YnPq_/')
console.log(pic)
```
