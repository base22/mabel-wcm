!function(e){function r(e,r,t){e in l||(l[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,u=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var l=0;l<i.dependencies.length;++l)i.dependencies[l]===o&&i.setters[l](a)}return o.locked=!1,r},r.name);o.setters=u.setters,o.execute=u.execute;for(var s=0,d=r.normalizedDeps.length;d>s;s++){var f,c=r.normalizedDeps[s],v=l[c],m=p[c];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=i(c),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[s]&&o.setters[s](f)}}}function o(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(d)for(var n in r)"default"!==n&&a(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,c(t,"__useDefault",{value:!0}),t}function a(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&c(e,t,n)}catch(o){return e[t]=r[t],!1}}function u(r,t){var n=l[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(l[d]?u(d,t):i(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function i(e){if(m[e])return m[e];if("@node/"==e.substr(0,6))return v(e.substr(6));var r=l[e];if(!r)throw"Module "+e+" not present.";return n(l[e]),u(e,[]),l[e]=void 0,r.declarative&&c(r.module.exports,"__esModule",{value:!0}),m[e]=r.declarative?r.module.exports:r.esModule}var l={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},d=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(f){d=!1}var c;!function(){try{Object.defineProperty({},"a",{})&&(c=Object.defineProperty)}catch(e){c=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var p={},v="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,m={"@empty":{}};return function(e,t,n,a){return function(u){u(function(u){for(var l=0;l<t.length;l++)(function(e,r){r&&r.__esModule?m[e]=r:m[e]=o(r)})(t[l],arguments[l]);a({register:r});var s=i(e[0]);if(e.length>1)for(var l=1;l<e.length;l++)i(e[l]);return n?s["default"]:s})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var something;
  return {
    setters: [],
    execute: function() {
      exports_1("something", something = "Hello World!");
    }
  };
});

$__System.register("1", ["2"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var wcm;
  var mabel;
  return {
    setters: [function(wcm_1) {
      wcm = wcm_1;
    }],
    execute: function() {
      mabel = "mabel" in window && window.mabel ? window.mabel : {};
      mabel.wcm = wcm;
      window.mabel = mabel;
    }
  };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC50cyIsIi4uLy4uL2J1aWxkL3NmeC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBQVEsU0FBTyxBQUFFLEtBQUQsR0FBQyxDQUFHLFVBQVMsU0FBUSxDQUFHLENBQUEsU0FBUSxDQUFHO0FBQy9DLGFBQVcsQ0FBQztBQUNaLEFBQUksSUFBQSxDQUFBLFlBQVcsRUFBSSxDQUFBLFNBQVEsR0FBSyxDQUFBLFNBQVEsR0FBRyxDQUFDO0FBQzVDLEFBQUksSUFBQSxDQUFBLFNBQVEsQ0FBQztBQUNiLE9BQU87QUFDSCxVQUFNLENBQUUsR0FBQztBQUNULFVBQU0sQ0FBRyxVQUFRLEFBQUMsQ0FBRTtBQUNoQixjQUFRLEFBQUMsQ0FBQyxXQUFVLENBQUcsQ0FBQSxTQUFRLEVBQUksZUFBYSxDQUFDLENBQUM7SUFDdEQ7QUFBQSxFQUNKLENBQUE7Q0FDSCxDQUFDOztRQ1ZNLFNBQU8sQUFBRSxLQUFELE1BQVksQ0FBRyxVQUFTLFNBQVEsQ0FBRyxDQUFBLFNBQVEsQ0FBRztBQUMxRCxhQUFXLENBQUM7QUFDWixBQUFJLElBQUEsQ0FBQSxZQUFXLEVBQUksQ0FBQSxTQUFRLEdBQUssQ0FBQSxTQUFRLEdBQUcsQ0FBQztBQUM1QyxBQUFJLElBQUEsQ0FBQSxHQUFFLENBQUM7QUFEUCxBQUVBLElBRkEsQ0FBQSxLQUFBLENBQUs7QUFHTCxPQUFPO0FBQ0gsVUFBTSxDQUFFLEVBQ0osU0FBVSxLQUFJLENBQUc7QUFDYixRQUFFLEVBQUksTUFBSSxDQUFDO0lBQ2YsQ0FBQztBQUNMLFVBQU0sQ0FBRyxVQUFRLEFBQUMsQ0FBRTtBQVJ4QixVQUFBLEVBQVEsQ0FBQSxPQUFBLEdBQVcsT0FBQSxDQUFBLEVBQVUsQ0FBQSxNQUFBLE1BQU8sQ0FBQSxDQUFRLENBQUEsTUFBQSxNQUFPLEVBQVEsR0FBQSxDQUFFO2NBQzNELEVBQU0sSUFBQSxDQUFHO2lCQUVSLEVBQVEsTUFBQSxDQUFLO0lBU1o7QUFBQSxFQUNKLENBQUE7Q0FDSCxDQUFDIiwiZmlsZSI6IndjbS5zZnguanMiLCJzb3VyY2VzQ29udGVudCI6WyJTeXN0ZW0ucmVnaXN0ZXIoW10sIGZ1bmN0aW9uKGV4cG9ydHNfMSwgY29udGV4dF8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyIF9fbW9kdWxlTmFtZSA9IGNvbnRleHRfMSAmJiBjb250ZXh0XzEuaWQ7XG4gICAgdmFyIHNvbWV0aGluZztcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXR0ZXJzOltdLFxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4cG9ydHNfMShcInNvbWV0aGluZ1wiLCBzb21ldGhpbmcgPSBcIkhlbGxvIFdvcmxkIVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiU3lzdGVtLnJlZ2lzdGVyKFtcIm1hYmVsLXdjbVwiXSwgZnVuY3Rpb24oZXhwb3J0c18xLCBjb250ZXh0XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICB2YXIgX19tb2R1bGVOYW1lID0gY29udGV4dF8xICYmIGNvbnRleHRfMS5pZDtcbiAgICB2YXIgd2NtO1xuICAgIHZhciBtYWJlbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXR0ZXJzOltcbiAgICAgICAgICAgIGZ1bmN0aW9uICh3Y21fMSkge1xuICAgICAgICAgICAgICAgIHdjbSA9IHdjbV8xO1xuICAgICAgICAgICAgfV0sXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbWFiZWwgPSBcIm1hYmVsXCIgaW4gd2luZG93ICYmIHdpbmRvdy5tYWJlbCA/IHdpbmRvdy5tYWJlbCA6IHt9O1xuICAgICAgICAgICAgbWFiZWwud2NtID0gd2NtO1xuICAgICAgICAgICAgd2luZG93Lm1hYmVsID0gbWFiZWw7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==