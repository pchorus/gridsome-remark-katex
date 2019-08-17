# gridsome-remark-katex
Gridsome remark support for math equations using remark-math and katex.

## Install
- `yarn add gridsome-remark-katex`
- `npm install gridsome-remark-katex`

## Usage

In your `main.js` file, import the CSS for Katex:

```js
import 'katex/dist/katex.min.css'

export default function (Vue) {
  // ...
}
```

In `gridsome.config.js`, add support for math equations to a single markdown source:

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        remark: {
          plugins: [
            'gridsome-remark-katex'
          ]
        }
      }
    }
  ]
}
```

Or add support for math equations to all markdown sources:

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {}
    }
  ],

  transformers: {
    remark: {
      plugins: [
        'gridsome-remark-katex'
      ]
    }
  }
}
```

You can also pass any option that is available in katex:

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {}
    }
  ],

  transformers: {
    remark: {
      plugins: [
        ['gridsome-remark-katex', { minRuleThickness: 0.1 }]
      ]
    }
  }
}
```
