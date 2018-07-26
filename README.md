# is-aus-postcode

Validate an Australian postcode.

### Install

```js
yarn add is-aus-postcode

npm i is-aus-postcode
```

### Usage

```js
var isAusPostcode = require('./index')

isAusPostcode("2300") // true
isAusPostcode("0100") // false
isAusPostcode("0230") // true
```

### Reference

| State | Codes |
| :---- | :---- |
| New South Wales | 1000–2599, 2620–2899, 2921–2999 |
| Victoria | 3000–3999, 8000–8999 |
| Queensland | 4000–4999, 9000–9999 |
| South Australia | 5000–5999 |
| Western Australia | 6000–6999 |
| Tasmania | 7000–7999 |
| Australian Capital Territory | 0200–0299, 2600–2619, 2900–2920 |
| Northern Territory | 0800–0999 |