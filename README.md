# Modelica language support for highlight.js

Adds syntax highlighting to highlight.js for Modelica files.

The grammar is from the [Modelica grammar for Sublime Text by Boris Chumichev](https://github.com/BorisChumichev/modelicaSublimeTextPackage).

## Usage

```js
const hljs = require('highlight.js')
const modelica = require('highlightjs-modelica')

hljs.registerLanguage('modelica', modelica)

const code = `
package Components "Contains different components"
extends Modelica.Icons.Library2;
  import SI= Modelica.SIunits;
// ...
`

const value = hljs.highlight('modelica', code, true).value
```

## License

Copyright (c) 2019- commenthol (MIT License)

See [LICENSE][] for more info.

[highlight.js]: https://npmjs.com/package/highlight.js
[LICENSE]: ./LICENSE

