const assert = require('assert')
const hljs = require('highlight.js')
const modelica = require('..')

describe('hljs-modelica', function () {
  const lang = 'modelica'

  before(() => {
    hljs.registerLanguage(lang, modelica)
  })

  it('shall highlight package with symbol comment', function () {
    const code = [
      'package Components "Contains different components"',
      'extends Modelica.Icons.Library2;'
    ].join('\n')

    const value = hljs.highlight(lang, code, true).value
    const exp = '<span class="hljs-class"><span class="hljs-keyword">package</span> <span class="hljs-symbol">Components</span> <span class="hljs-comment">"Contains different components"</span></span>\n<span class="hljs-built_in">extends</span> <span class="hljs-symbol">Modelica.Icons.Library2</span>;'
    // console.log('%j', value)
    assert.strictEqual(value, exp)
  })

  it('shall highlight end with symbol', function () {
    const code = 'end Components;'

    const value = hljs.highlight(lang, code, true).value
    const exp = '<span class="hljs-class"><span class="hljs-keyword">end</span> <span class="hljs-symbol">Components</span>;</span>'
    // console.log('%j', value)
    assert.strictEqual(value, exp)
  })

  it('shall highlight symbol', function () {
    const code = [
      '  outer SI.Frequency freq "AC small-signal analysis frequency";',
      '  import Modelica.Electrical.IC.Constants.CapacitorConstants.*;',
      '  parameter SI.Distance W = 4e-6 "Width of the capacitor";',
      '  SI.Capacitance C "Capacitance of the capacitor";'
    ].join('\n')
    const value = hljs.highlight(lang, code, true).value
    const exp = '  <span class="hljs-keyword">outer</span> <span class="hljs-symbol">SI.Frequency</span> freq <span class="hljs-string">"AC small-signal analysis frequency"</span>;\n  <span class="hljs-keyword">import</span> <span class="hljs-symbol">Modelica.Electrical.IC.Constants.CapacitorConstants</span>.*;\n  <span class="hljs-keyword">parameter</span> <span class="hljs-symbol">SI.Distance</span> W = <span class="hljs-number">4e-6</span> <span class="hljs-string">"Width of the capacitor"</span>;\n  <span class="hljs-symbol">SI.Capacitance</span> C <span class="hljs-string">"Capacitance of the capacitor"</span>;'
    // console.log('%j', value)
    assert.strictEqual(value, exp)
  })
})
