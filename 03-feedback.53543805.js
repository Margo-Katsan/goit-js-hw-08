function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,a,i,o,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function S(e){return l=e,f=setTimeout(O,t),c?y(e):o}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function O(){var e=g();if(T(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?d(n,i-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?y(e):(r=a=void 0,o)}function j(){var e=g(),n=T(e);if(r=arguments,a=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),o}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=a=f=void 0},j.flush=function(){return void 0===f?o:h(g())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||o.test(e)?f(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),v(e,t,{leading:r,maxWait:t,trailing:a})};const y=document.querySelector(".feedback-form");!function(){if(null===localStorage.getItem("feedback-form-state"))return;y.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email||"",y.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message||""}();y.addEventListener("input",e(t)((e=>{null!==e.currentTarget&&localStorage.setItem("feedback-form-state",JSON.stringify({email:e.currentTarget.email.value,message:e.currentTarget.message.value}))}),500)),y.addEventListener("submit",(e=>{if(e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),""===y.email.value||""===y.message.value)return alert("Please fill in all the fields!");localStorage.removeItem("feedback-form-state"),y.email.value="",y.message.value=""}));
//# sourceMappingURL=03-feedback.53543805.js.map
