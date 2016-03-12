#  irasutoya-trend [![Build Status](https://travis-ci.org/akameco/irasutoya-trend.svg?branch=master)](https://travis-ci.org/akameco/irasutoya-trend)

> いらすとやのトレンド画像10件を取得

## Installation

```
$ npm i -S irasutoya-trend
```

## Usage

```js
const trend = require('irasutoya-trend');
trend().then(urls => {
  console.log(urls);
});
```

## Test

```
$ npm test
```

## License

MIT
