## Colored-CLI

#### Usage:
```js
const { log, color, colorType } = require('./index')

const logValue = log
    // Set value
    .value('Hello ')
    // Set red color as forground
    .color(colorType.fg, color.red)

    // Append value
    .value('World')
    // Set blue color as background 
    .color(colorType.bg, color.blue)

    // Append value
    .value('!!')
    // Set cyan color as forground 
    .color(colorType.fg, color.cyan)

    // finally return encoded string!
    .return()

// log it to console
console.log(logValue) // output: look at your console ;)
```

#### Output:
![](./log-ex.png)