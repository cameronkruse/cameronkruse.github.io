import 'babel-polyfill'
import CanvasMap from './canvas-map'

let map=CanvasMap({
  textContainer:document.querySelector('.text'),
  mapSrc:'../map.svg',
  trailVisitedColor:'#47DBB4',
  fontPresentColor:'#5D5C56',
}).appendTo('.container')
