const { JSDOM } = require('jsdom')
const Enzyme = require('enzyme')
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

Enzyme.configure({ adapter: new Adapter() })

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://example.org/',
})
const { window } = jsdom

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0)
}
global.cancelAnimationFrame = function (id) {
  clearTimeout(id)
}

global.flushPromises = () => new Promise(setImmediate)

copyProps(window, global)
