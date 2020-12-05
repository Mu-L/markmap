import { m as _typeof, M as _createClass, N as _classCallCheck, Q as _toConsumableArray, a8 as _asyncToGenerator, _ as _export, l as createCommonjsModule, ab as commonjsGlobal, ad as getDefaultExportFromCjs, a5 as _createForOfIteratorHelper, R as _slicedToArray } from './web.url.21efedcc.js';
import { F as createHtml, G as stringHtmlForced, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, _ as _goto, V as assign, W as exclude_internal_props, e as element, k as claim_element, l as children, h as detach_dev, r as attr_dev, p as add_location, u as insert_dev, K as noop, b as binding_callbacks } from './client.feef39b9.js';
import './markmap.35941578.js';

/*! @gera2ld/jsx-dom v1.2.1 | ISC License */
var propRules = ['innerHTML', 'innerText', 'textContent', {
  key: 'value',
  tag: 'textarea'
}];
var Fragment = {
  name: 'Fragment'
};

function createElement(tag, props) {
  var result;
  var ref;

  if (tag === Fragment) {
    result = document.createDocumentFragment();
  } else if (typeof tag !== 'string') {
    throw new Error("Invalid element type: " + tag);
  } else {
    var _el = createElement.createElement(tag);

    result = _el;

    if (props) {
      Object.keys(props).forEach(function (key) {
        var value = props[key];
        if (value == null) return;

        if (key.startsWith('on')) {
          _el.addEventListener(key.slice(2).toLowerCase(), value);
        } else if (key === 'children') {
          renderChildren(_el, value);
        } else if (key === 'style' && _typeof(value) === 'object') {
          renderStyle(_el, value);
        } else if (key === 'dangerouslySetInnerHTML' && value) {
          _el.innerHTML = value.__html || ''; // eslint-disable-line no-underscore-dangle
        } else if (key === 'ref' && typeof value === 'function') {
          ref = value;
        } else if (typeof value === 'boolean') {
          if (value) _el.setAttribute(key, key);else _el.removeAttribute(key);
        } else if (isProp(tag, key)) {
          _el[key] = value;
        } else {
          if (key === 'className') key = 'class';else if (key === 'labelFor') key = 'for';

          _el.setAttribute(key, "" + value);
        }
      });
    }
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  renderChildren(result, children);
  if (ref) ref(result);
  return result;
}

createElement.createElement = function (tag) {
  return document.createElement(tag);
};

function isProp(tag, key) {
  var ctx = {
    tag: tag,
    key: key
  };
  return propRules.some(function (rule) {
    if (typeof rule === 'string') return key === rule;
    return Object.keys(rule).every(function (rk) {
      return rule[rk] === ctx[rk];
    });
  });
}

function renderChildren(el, children) {
  children.forEach(function (child) {
    if (child == null || child === false) return;

    if (Array.isArray(child)) {
      renderChildren(el, child);
      return;
    }

    if (_typeof(child) !== 'object') {
      el.appendChild(document.createTextNode("" + child));
    } else {
      el.appendChild(child);
    }
  });
}

function renderStyle(el, style) {
  Object.keys(style).forEach(function (key) {
    var value = style[key];
    if (typeof value === 'number') el.style[key] = value + "px";else el.style[key] = value;
  });
}

function renderBrand() {
  return /*#__PURE__*/createElement("div", {
    className: "mm-toolbar-brand"
  }, /*#__PURE__*/createElement("img", {
    alt: "markmap",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACoFBMVEUAAAAAAAD//wAAAACAgAD//wAAAABVVQCqqgBAQACAQACAgABmZgBtbQAAAABgQABgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaFQAAAAAAAAAAAAAAAAAHAAARBQIdGAIYEwI/OgJYUQUfHQI+OgJDPgJJRARBPQRJQgRRSwRRTQRIQQRUTgRUUARZUgRSTQRPSQRjWgZORQRfWQZsZAhTTQRNRwRWUAZkXAZOSARUTgZPRwRRSQRoYwZWUQZWTgRbUwZmXQZoXghmXwdqYwdsYwdfVwVmXQdqYgdiWgVpYAl3bgl6cgl4cAqLggw8OAOWjA2Uig1OSAR2bQihlg55cAh5cAh6cQmMgwyOhAyUjA2QhQ2Uiw2Viw2soBCflA+voxGwpRGhlg+hlg+snxGroBGjmBCpnBC0pxKyphKxpRG2qhK0qBK5rBK5rBP/7h3/8B7/8R3/8h3/8R7/8h786x397B3+7R3EtxT66Rz66hz76hz86xz96xz97Bz+7Rz45xz56Bz76hz97Bz97B3MvRX15Rv25Rv45xz66Rz76hz97B3+7R3IuxX05Bv15Bv25Rz56Bz66Ry/sxPAsxPCtRTCthTNvxbZyxfczxfi0xjl1Rnn2Bnr2xrr3Brs3Rru3Rru3xrv3hrw3xrx4Bvx4Rvy4hvz4hvz4xv04xv05Bv14xv15Bv15Rv25Bv25Rv25Rz25hv35hv35xv45xv45xz55xz56Bv56Bz66Rv66Rz76Rv76Rz76hz86hv86xz+7h3/7R3/7h3/7x3/8B3/8B7/8R3/8R4Yqhj5AAAAq3RSTlMAAQECAgIDAwMEBAQFBwgICAwQERITFRYXGBkbHB0eHyQlJyguNTg8RUZISU5PV2FiY2RlZmdqa2xubnJzc3R2d3d3eXl5eXp7fH1+gIGCgoKDg4SEhIWGh4eHiYmJjIyMjZSUlJ+sra+zt7i4uru8ztHV1tbW2d7g4OHi4uPk5ufp7Ozv9fX29/f3+Pj6+vr7+/v7+/v7+/z8/Pz8/f39/f39/f3+/v7+/v7K6J1dAAACHklEQVQ4y2NgwAoYWdi5uLm5GXHIcrLCmMzYpDmAhKCKjoGtp40MFhVsDAwSxmmVEzZu2XvqSLkchjw3g0h445Ybd24vmTN1Usd5X3R5DgaNqgN35sycP2/GxMkTMRVwMOivvtO3YsWUm3duX790EcMKdgbNNXdnnJh1+9T6ipzU+FB0RzIyiFYB5WdfaElUF8TmTQ6GwH39J2bvypMHcpg4MAKKkUGo5s6KWRfyGRh4WJClGEGBCgS8DLobliy/3abMwM8NBYwQjXDgf3ryxOspyKYyg+RFTFwdnYDAzbrw+oLFm9Ot3J3AwNHFTBykQrhg++GDh48cOXzk4P6VZy8s230MyAGCwwcP7iyRBJpiur1n8hQIWHX27NkLi6bAwOSuow5ABeY7OydOhoCFIAULe6E8YFCf8QAqEC86evniZTA4tfLsuRXHr0E4ly9ePF0uC3KnpH1MZBQQxPoVgxyZ5RMdBQaRMc6yIEcihWbQGaA3k9G8CfQoN0pAtSoxCMACihk9qGtBQZ2LHtRIkRUMiqwd2TJADiswsrjQlAGju/o+MLrPNkWo8mFN1ewMWmvBCebQ0rKMJG87QzF0FRwMRuvugpLcrXu3rp7Zs61UCtMZ2nVHbk+fMX/+jMmTp3Sf9MLiULG45q237txaPG3yxPYrYQzYMo60RWbD3E27Ll68Uq+AK+uJqOlZBiSEKGLNnMA0iDfzwrI/NKgBOivk9piPdtUAAAAASUVORK5CYII="
  }), /*#__PURE__*/createElement("a", {
    href: "https://markmap.js.org/"
  }, "markmap"));
}

function renderItem(_ref) {
  var title = _ref.title,
      content = _ref.content,
      onClick = _ref.onClick;
  return /*#__PURE__*/createElement("div", {
    className: "mm-toolbar-item",
    title: title,
    innerHTML: content,
    onClick: onClick
  });
}

var promise;

function safeCaller(fn) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!promise) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            promise = fn.apply(void 0, _args);
            _context.prev = 3;
            _context.next = 6;
            return promise;

          case 6:
            _context.prev = 6;
            promise = null;
            return _context.finish(6);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3,, 6, 9]]);
  }));
}

var Toolbar = /*#__PURE__*/function () {
  _createClass(Toolbar, null, [{
    key: "create",
    value: function create(mm) {
      var toolbar = new Toolbar();
      toolbar.attach(mm);
      return toolbar.render();
    }
  }, {
    key: "icon",
    value: function icon(path) {
      return "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" on:click={onZoomIn}><path fill=\"none\" stroke-width=\"2\" stroke=\"currentColor\" d=\"".concat(path, "\"/></svg>");
    }
  }]);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    this.showBrand = true;
    this.registry = {};
    this.markmap = null;
    this.items = ['zoomIn', 'zoomOut', 'fit'];
    this.register({
      id: 'zoomIn',
      title: 'Zoom in',
      content: Toolbar.icon('M10 6 v8 M6 10 h8'),
      onClick: this.getHandler(function (mm) {
        return mm.rescale(1.25);
      })
    });
    this.register({
      id: 'zoomOut',
      title: 'Zoom out',
      content: Toolbar.icon('M6 10 h8'),
      onClick: this.getHandler(function (mm) {
        return mm.rescale(0.8);
      })
    });
    this.register({
      id: 'fit',
      title: 'Fit window size',
      content: Toolbar.icon('M4 8 h3 v-3 M4 12 h3 v3 M16 8 h-3 v-3 M16 12 h-3 v3'),
      onClick: this.getHandler(function (mm) {
        return mm.fit();
      })
    });
  }

  _createClass(Toolbar, [{
    key: "setBrand",
    value: function setBrand(show) {
      this.showBrand = show;
    }
  }, {
    key: "register",
    value: function register(data) {
      this.registry[data.id] = data;
    }
  }, {
    key: "getHandler",
    value: function getHandler(handle) {
      var _this = this;

      handle = safeCaller(handle);
      return function (e) {
        if (_this.markmap) handle(_this.markmap);
      };
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      this.items = _toConsumableArray(items);
    }
  }, {
    key: "attach",
    value: function attach(mm) {
      this.markmap = mm;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.items.map(function (item) {
        if (typeof item === 'string') {
          var data = _this2.registry[item];
          if (!data) console.warn("[markmap-toolbar] ".concat(item, " not found"));
          return data;
        }

        return item;
      }).filter(Boolean);
      return /*#__PURE__*/createElement("div", {
        className: "mm-toolbar"
      }, this.showBrand && renderBrand(), items.map(renderItem));
    }
  }]);

  return Toolbar;
}();

// https://tc39.github.io/ecma262/#sec-string.prototype.link


_export({
  target: 'String',
  proto: true,
  forced: stringHtmlForced('link')
}, {
  link: function link(url) {
    return createHtml(this, 'a', 'href', url);
  }
});

var sweetalert_min = createCommonjsModule(function (module, exports) {
  !function (t, e) {
     module.exports = e() ;
  }(commonjsGlobal, function () {
    return function (t) {
      function e(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
      }

      var n = {};
      return e.m = t, e.c = n, e.d = function (t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: o
        });
      }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
          return t["default"];
        } : function () {
          return t;
        };
        return e.d(n, "a", n), n;
      }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, e.p = "", e(e.s = 8);
    }([function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = "swal-button";
      e.CLASS_NAMES = {
        MODAL: "swal-modal",
        OVERLAY: "swal-overlay",
        SHOW_MODAL: "swal-overlay--show-modal",
        MODAL_TITLE: "swal-title",
        MODAL_TEXT: "swal-text",
        ICON: "swal-icon",
        ICON_CUSTOM: "swal-icon--custom",
        CONTENT: "swal-content",
        FOOTER: "swal-footer",
        BUTTON_CONTAINER: "swal-button-container",
        BUTTON: o,
        CONFIRM_BUTTON: o + "--confirm",
        CANCEL_BUTTON: o + "--cancel",
        DANGER_BUTTON: o + "--danger",
        BUTTON_LOADING: o + "--loading",
        BUTTON_LOADER: o + "__loader"
      }, e["default"] = e.CLASS_NAMES;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.getNode = function (t) {
        var e = "." + t;
        return document.querySelector(e);
      }, e.stringToNode = function (t) {
        var e = document.createElement("div");
        return e.innerHTML = t.trim(), e.firstChild;
      }, e.insertAfter = function (t, e) {
        var n = e.nextSibling;
        e.parentNode.insertBefore(t, n);
      }, e.removeNode = function (t) {
        t.parentElement.removeChild(t);
      }, e.throwErr = function (t) {
        throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim());
      }, e.isPlainObject = function (t) {
        if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
        var e = Object.getPrototypeOf(t);
        return null === e || e === Object.prototype;
      }, e.ordinalSuffixOf = function (t) {
        var e = t % 10,
            n = t % 100;
        return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th";
      };
    }, function (t, e, n) {

      function o(t) {
        for (var n in t) {
          e.hasOwnProperty(n) || (e[n] = t[n]);
        }
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      }), o(n(25));
      var r = n(26);
      e.overlayMarkup = r["default"], o(n(27)), o(n(28)), o(n(29));
      var i = n(0),
          a = i["default"].MODAL_TITLE,
          s = i["default"].MODAL_TEXT,
          c = i["default"].ICON,
          l = i["default"].FOOTER;
      e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n';
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(1);
      e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel";
      var r = {
        visible: !0,
        text: null,
        value: null,
        className: "",
        closeModal: !0
      },
          i = Object.assign({}, r, {
        visible: !1,
        text: "Cancel",
        value: null
      }),
          a = Object.assign({}, r, {
        text: "OK",
        value: !0
      });
      e.defaultButtonList = {
        cancel: i,
        confirm: a
      };

      var s = function s(t) {
        switch (t) {
          case e.CONFIRM_KEY:
            return a;

          case e.CANCEL_KEY:
            return i;

          default:
            var n = t.charAt(0).toUpperCase() + t.slice(1);
            return Object.assign({}, r, {
              text: n,
              value: t
            });
        }
      },
          c = function c(t, e) {
        var n = s(t);
        return !0 === e ? Object.assign({}, n, {
          visible: !0
        }) : "string" == typeof e ? Object.assign({}, n, {
          visible: !0,
          text: e
        }) : o.isPlainObject(e) ? Object.assign({
          visible: !0
        }, n, e) : Object.assign({}, n, {
          visible: !1
        });
      },
          l = function l(t) {
        for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) {
          var r = o[n],
              a = t[r],
              s = c(r, a);
          e[r] = s;
        }

        return e.cancel || (e.cancel = i), e;
      },
          u = function u(t) {
        var n = {};

        switch (t.length) {
          case 1:
            n[e.CANCEL_KEY] = Object.assign({}, i, {
              visible: !1
            });
            break;

          case 2:
            n[e.CANCEL_KEY] = c(e.CANCEL_KEY, t[0]), n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t[1]);
            break;

          default:
            o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!");
        }

        return n;
      };

      e.getButtonListOpts = function (t) {
        var n = e.defaultButtonList;
        return "string" == typeof t ? n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([!0, !0]) : !1 === t ? n = u([!1, !1]) : void 0 === t && (n = e.defaultButtonList), n;
      };
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(1),
          r = n(2),
          i = n(0),
          a = i["default"].MODAL,
          s = i["default"].OVERLAY,
          c = n(30),
          l = n(31),
          u = n(32),
          f = n(33);

      e.injectElIntoModal = function (t) {
        var e = o.getNode(a),
            n = o.stringToNode(t);
        return e.appendChild(n), n;
      };

      var d = function d(t) {
        t.className = a, t.textContent = "";
      },
          p = function p(t, e) {
        d(t);
        var n = e.className;
        n && t.classList.add(n);
      };

      e.initModalContent = function (t) {
        var e = o.getNode(a);
        p(e, t), c["default"](t.icon), l.initTitle(t.title), l.initText(t.text), f["default"](t.content), u["default"](t.buttons, t.dangerMode);
      };

      var m = function m() {
        var t = o.getNode(s),
            e = o.stringToNode(r.modalMarkup);
        t.appendChild(e);
      };

      e["default"] = m;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(3),
          r = {
        isOpen: !1,
        promise: null,
        actions: {},
        timer: null
      },
          i = Object.assign({}, r);
      e.resetState = function () {
        i = Object.assign({}, r);
      }, e.setActionValue = function (t) {
        if ("string" == typeof t) return a(o.CONFIRM_KEY, t);

        for (var e in t) {
          a(e, t[e]);
        }
      };

      var a = function a(t, e) {
        i.actions[t] || (i.actions[t] = {}), Object.assign(i.actions[t], {
          value: e
        });
      };

      e.setActionOptionsFor = function (t, e) {
        var n = (void 0 === e ? {} : e).closeModal,
            o = void 0 === n || n;
        Object.assign(i.actions[t], {
          closeModal: o
        });
      }, e["default"] = i;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(1),
          r = n(3),
          i = n(0),
          a = i["default"].OVERLAY,
          s = i["default"].SHOW_MODAL,
          c = i["default"].BUTTON,
          l = i["default"].BUTTON_LOADING,
          u = n(5);

      e.openModal = function () {
        o.getNode(a).classList.add(s), u["default"].isOpen = !0;
      };

      var f = function f() {
        o.getNode(a).classList.remove(s), u["default"].isOpen = !1;
      };

      e.onAction = function (t) {
        void 0 === t && (t = r.CANCEL_KEY);
        var e = u["default"].actions[t],
            n = e.value;

        if (!1 === e.closeModal) {
          var i = c + "--" + t;
          o.getNode(i).classList.add(l);
        } else f();

        u["default"].promise.resolve(n);
      }, e.getState = function () {
        var t = Object.assign({}, u["default"]);
        return delete t.promise, delete t.timer, t;
      }, e.stopLoading = function () {
        for (var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++) {
          t[e].classList.remove(l);
        }
      };
    }, function (t, e) {
      var n;

      n = function () {
        return this;
      }();

      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
      }

      t.exports = n;
    }, function (t, e, n) {
      (function (e) {
        t.exports = e.sweetAlert = n(9);
      }).call(e, n(7));
    }, function (t, e, n) {
      (function (e) {
        t.exports = e.swal = n(10);
      }).call(e, n(7));
    }, function (t, e, n) {
      "undefined" != typeof window && n(11), n(16);
      var o = n(23)["default"];
      t.exports = o;
    }, function (t, e, n) {
      var o = n(12);
      "string" == typeof o && (o = [[t.i, o, ""]]);
      var r = {
        insertAt: "top"
      };
      r.transform = void 0;
      n(14)(o, r);
      o.locals && (t.exports = o.locals);
    }, function (t, e, n) {
      e = t.exports = n(13)(void 0), e.push([t.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""]);
    }, function (t, e) {
      function n(t, e) {
        var n = t[1] || "",
            r = t[3];
        if (!r) return n;

        if (e && "function" == typeof btoa) {
          var i = o(r);
          return [n].concat(r.sources.map(function (t) {
            return "/*# sourceURL=" + r.sourceRoot + t + " */";
          })).concat([i]).join("\n");
        }

        return [n].join("\n");
      }

      function o(t) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */";
      }

      t.exports = function (t) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var o = n(e, t);
            return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
          }).join("");
        }, e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);

          for (var o = {}, r = 0; r < this.length; r++) {
            var i = this[r][0];
            "number" == typeof i && (o[i] = !0);
          }

          for (r = 0; r < t.length; r++) {
            var a = t[r];
            "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
          }
        }, e;
      };
    }, function (t, e, n) {
      function o(t, e) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n],
              r = m[o.id];

          if (r) {
            r.refs++;

            for (var i = 0; i < r.parts.length; i++) {
              r.parts[i](o.parts[i]);
            }

            for (; i < o.parts.length; i++) {
              r.parts.push(u(o.parts[i], e));
            }
          } else {
            for (var a = [], i = 0; i < o.parts.length; i++) {
              a.push(u(o.parts[i], e));
            }

            m[o.id] = {
              id: o.id,
              refs: 1,
              parts: a
            };
          }
        }
      }

      function r(t, e) {
        for (var n = [], o = {}, r = 0; r < t.length; r++) {
          var i = t[r],
              a = e.base ? i[0] + e.base : i[0],
              s = i[1],
              c = i[2],
              l = i[3],
              u = {
            css: s,
            media: c,
            sourceMap: l
          };
          o[a] ? o[a].parts.push(u) : n.push(o[a] = {
            id: a,
            parts: [u]
          });
        }

        return n;
      }

      function i(t, e) {
        var n = v(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = w[w.length - 1];
        if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e);else {
          if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          n.appendChild(e);
        }
      }

      function a(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = w.indexOf(t);
        e >= 0 && w.splice(e, 1);
      }

      function s(t) {
        var e = document.createElement("style");
        return t.attrs.type = "text/css", l(e, t.attrs), i(t, e), e;
      }

      function c(t) {
        var e = document.createElement("link");
        return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l(e, t.attrs), i(t, e), e;
      }

      function l(t, e) {
        Object.keys(e).forEach(function (n) {
          t.setAttribute(n, e[n]);
        });
      }

      function u(t, e) {
        var n, o, r, i;

        if (e.transform && t.css) {
          if (!(i = e.transform(t.css))) return function () {};
          t.css = i;
        }

        if (e.singleton) {
          var l = h++;
          n = g || (g = s(e)), o = f.bind(null, n, l, !1), r = f.bind(null, n, l, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), o = p.bind(null, n, e), r = function r() {
          a(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = s(e), o = d.bind(null, n), r = function r() {
          a(n);
        });

        return o(t), function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            o(t = e);
          } else r();
        };
      }

      function f(t, e, n, o) {
        var r = n ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = x(e, r);else {
          var i = document.createTextNode(r),
              a = t.childNodes;
          a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
        }
      }

      function d(t, e) {
        var n = e.css,
            o = e.media;
        if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(n));
        }
      }

      function p(t, e, n) {
        var o = n.css,
            r = n.sourceMap,
            i = void 0 === e.convertToAbsoluteUrls && r;
        (e.convertToAbsoluteUrls || i) && (o = y(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var a = new Blob([o], {
          type: "text/css"
        }),
            s = t.href;
        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }

      var m = {},
          b = function (t) {
        var e;
        return function () {
          return void 0 === e && (e = t.apply(this, arguments)), e;
        };
      }(function () {
        return window && document && document.all && !window.atob;
      }),
          v = function (t) {
        var e = {};
        return function (n) {
          return void 0 === e[n] && (e[n] = t.call(this, n)), e[n];
        };
      }(function (t) {
        return document.querySelector(t);
      }),
          g = null,
          h = 0,
          w = [],
          y = n(15);

      t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
        e = e || {}, e.attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = r(t, e);
        return o(n, e), function (t) {
          for (var i = [], a = 0; a < n.length; a++) {
            var s = n[a],
                c = m[s.id];
            c.refs--, i.push(c);
          }

          if (t) {
            o(r(t, e), e);
          }

          for (var a = 0; a < i.length; a++) {
            var c = i[a];

            if (0 === c.refs) {
              for (var l = 0; l < c.parts.length; l++) {
                c.parts[l]();
              }

              delete m[c.id];
            }
          }
        };
      };

      var x = function () {
        var t = [];
        return function (e, n) {
          return t[e] = n, t.filter(Boolean).join("\n");
        };
      }();
    }, function (t, e) {
      t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            o = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
          var r = e.trim().replace(/^"(.*)"$/, function (t, e) {
            return e;
          }).replace(/^'(.*)'$/, function (t, e) {
            return e;
          });
          if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
          var i;
          return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")";
        });
      };
    }, function (t, e, n) {
      var o = n(17);
      "undefined" == typeof window || window.Promise || (window.Promise = o), n(21), String.prototype.includes || (String.prototype.includes = function (t, e) {

        return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e);
      }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function value(t, e) {
          if (null == this) throw new TypeError('"this" is null or not defined');
          var n = Object(this),
              o = n.length >>> 0;
          if (0 === o) return !1;

          for (var r = 0 | e, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;) {
            if (function (t, e) {
              return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e);
            }(n[i], t)) return !0;
            i++;
          }

          return !1;
        }
      }), "undefined" != typeof window && function (t) {
        t.forEach(function (t) {
          t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function value() {
              this.parentNode.removeChild(this);
            }
          });
        });
      }([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
    }, function (t, e, n) {
      (function (e) {
        !function (n) {
          function o() {}

          function r(t, e) {
            return function () {
              t.apply(e, arguments);
            };
          }

          function i(t) {
            if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this);
          }

          function a(t, e) {
            for (; 3 === t._state;) {
              t = t._value;
            }

            if (0 === t._state) return void t._deferreds.push(e);
            t._handled = !0, i._immediateFn(function () {
              var n = 1 === t._state ? e.onFulfilled : e.onRejected;
              if (null === n) return void (1 === t._state ? s : c)(e.promise, t._value);
              var o;

              try {
                o = n(t._value);
              } catch (t) {
                return void c(e.promise, t);
              }

              s(e.promise, o);
            });
          }

          function s(t, e) {
            try {
              if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

              if (e && ("object" == _typeof(e) || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof i) return t._state = 3, t._value = e, void l(t);
                if ("function" == typeof n) return void f(r(n, e), t);
              }

              t._state = 1, t._value = e, l(t);
            } catch (e) {
              c(t, e);
            }
          }

          function c(t, e) {
            t._state = 2, t._value = e, l(t);
          }

          function l(t) {
            2 === t._state && 0 === t._deferreds.length && i._immediateFn(function () {
              t._handled || i._unhandledRejectionFn(t._value);
            });

            for (var e = 0, n = t._deferreds.length; e < n; e++) {
              a(t, t._deferreds[e]);
            }

            t._deferreds = null;
          }

          function u(t, e, n) {
            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
          }

          function f(t, e) {
            var n = !1;

            try {
              t(function (t) {
                n || (n = !0, s(e, t));
              }, function (t) {
                n || (n = !0, c(e, t));
              });
            } catch (t) {
              if (n) return;
              n = !0, c(e, t);
            }
          }

          var d = setTimeout;
          i.prototype["catch"] = function (t) {
            return this.then(null, t);
          }, i.prototype.then = function (t, e) {
            var n = new this.constructor(o);
            return a(this, new u(t, e, n)), n;
          }, i.all = function (t) {
            var e = Array.prototype.slice.call(t);
            return new i(function (t, n) {
              function o(i, a) {
                try {
                  if (a && ("object" == _typeof(a) || "function" == typeof a)) {
                    var s = a.then;
                    if ("function" == typeof s) return void s.call(a, function (t) {
                      o(i, t);
                    }, n);
                  }

                  e[i] = a, 0 == --r && t(e);
                } catch (t) {
                  n(t);
                }
              }

              if (0 === e.length) return t([]);

              for (var r = e.length, i = 0; i < e.length; i++) {
                o(i, e[i]);
              }
            });
          }, i.resolve = function (t) {
            return t && "object" == _typeof(t) && t.constructor === i ? t : new i(function (e) {
              e(t);
            });
          }, i.reject = function (t) {
            return new i(function (e, n) {
              n(t);
            });
          }, i.race = function (t) {
            return new i(function (e, n) {
              for (var o = 0, r = t.length; o < r; o++) {
                t[o].then(e, n);
              }
            });
          }, i._immediateFn = "function" == typeof e && function (t) {
            e(t);
          } || function (t) {
            d(t, 0);
          }, i._unhandledRejectionFn = function (t) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
          }, i._setImmediateFn = function (t) {
            i._immediateFn = t;
          }, i._setUnhandledRejectionFn = function (t) {
            i._unhandledRejectionFn = t;
          }, void 0 !== t && t.exports ? t.exports = i : n.Promise || (n.Promise = i);
        }(this);
      }).call(e, n(18).setImmediate);
    }, function (t, e, n) {
      function o(t, e) {
        this._id = t, this._clearFn = e;
      }

      var r = Function.prototype.apply;
      e.setTimeout = function () {
        return new o(r.call(setTimeout, window, arguments), clearTimeout);
      }, e.setInterval = function () {
        return new o(r.call(setInterval, window, arguments), clearInterval);
      }, e.clearTimeout = e.clearInterval = function (t) {
        t && t.close();
      }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
        this._clearFn.call(window, this._id);
      }, e.enroll = function (t, e) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
      }, e.unenroll = function (t) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
      }, e._unrefActive = e.active = function (t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function () {
          t._onTimeout && t._onTimeout();
        }, e));
      }, n(19), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
    }, function (t, e, n) {
      (function (t, e) {
        !function (t, n) {

          function o(t) {
            "function" != typeof t && (t = new Function("" + t));

            for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
              e[n] = arguments[n + 1];
            }

            var o = {
              callback: t,
              args: e
            };
            return l[c] = o, s(c), c++;
          }

          function r(t) {
            delete l[t];
          }

          function i(t) {
            var e = t.callback,
                o = t.args;

            switch (o.length) {
              case 0:
                e();
                break;

              case 1:
                e(o[0]);
                break;

              case 2:
                e(o[0], o[1]);
                break;

              case 3:
                e(o[0], o[1], o[2]);
                break;

              default:
                e.apply(n, o);
            }
          }

          function a(t) {
            if (u) setTimeout(a, 0, t);else {
              var e = l[t];

              if (e) {
                u = !0;

                try {
                  i(e);
                } finally {
                  r(t), u = !1;
                }
              }
            }
          }

          if (!t.setImmediate) {
            var s,
                c = 1,
                l = {},
                u = !1,
                f = t.document,
                d = Object.getPrototypeOf && Object.getPrototypeOf(t);
            d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function () {
              s = function s(t) {
                e.nextTick(function () {
                  a(t);
                });
              };
            }() : function () {
              if (t.postMessage && !t.importScripts) {
                var e = !0,
                    n = t.onmessage;
                return t.onmessage = function () {
                  e = !1;
                }, t.postMessage("", "*"), t.onmessage = n, e;
              }
            }() ? function () {
              var e = "setImmediate$" + Math.random() + "$",
                  n = function n(_n) {
                _n.source === t && "string" == typeof _n.data && 0 === _n.data.indexOf(e) && a(+_n.data.slice(e.length));
              };

              t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function s(n) {
                t.postMessage(e + n, "*");
              };
            }() : t.MessageChannel ? function () {
              var t = new MessageChannel();
              t.port1.onmessage = function (t) {
                a(t.data);
              }, s = function s(e) {
                t.port2.postMessage(e);
              };
            }() : f && "onreadystatechange" in f.createElement("script") ? function () {
              var t = f.documentElement;

              s = function s(e) {
                var n = f.createElement("script");
                n.onreadystatechange = function () {
                  a(e), n.onreadystatechange = null, t.removeChild(n), n = null;
                }, t.appendChild(n);
              };
            }() : function () {
              s = function s(t) {
                setTimeout(a, 0, t);
              };
            }(), d.setImmediate = o, d.clearImmediate = r;
          }
        }("undefined" == typeof self ? void 0 === t ? this : t : self);
      }).call(e, n(7), n(20));
    }, function (t, e) {
      function n() {
        throw new Error("setTimeout has not been defined");
      }

      function o() {
        throw new Error("clearTimeout has not been defined");
      }

      function r(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);

        try {
          return u(t, 0);
        } catch (e) {
          try {
            return u.call(null, t, 0);
          } catch (e) {
            return u.call(this, t, 0);
          }
        }
      }

      function i(t) {
        if (f === clearTimeout) return clearTimeout(t);
        if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);

        try {
          return f(t);
        } catch (e) {
          try {
            return f.call(null, t);
          } catch (e) {
            return f.call(this, t);
          }
        }
      }

      function a() {
        b && p && (b = !1, p.length ? m = p.concat(m) : v = -1, m.length && s());
      }

      function s() {
        if (!b) {
          var t = r(a);
          b = !0;

          for (var e = m.length; e;) {
            for (p = m, m = []; ++v < e;) {
              p && p[v].run();
            }

            v = -1, e = m.length;
          }

          p = null, b = !1, i(t);
        }
      }

      function c(t, e) {
        this.fun = t, this.array = e;
      }

      function l() {}

      var u,
          f,
          d = t.exports = {};
      !function () {
        try {
          u = "function" == typeof setTimeout ? setTimeout : n;
        } catch (t) {
          u = n;
        }

        try {
          f = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          f = o;
        }
      }();
      var p,
          m = [],
          b = !1,
          v = -1;
      d.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }
        m.push(new c(t, e)), 1 !== m.length || b || r(s);
      }, c.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function (t) {
        return [];
      }, d.binding = function (t) {
        throw new Error("process.binding is not supported");
      }, d.cwd = function () {
        return "/";
      }, d.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }, d.umask = function () {
        return 0;
      };
    }, function (t, e, n) {

      n(22).polyfill();
    }, function (t, e, n) {

      function o(t, e) {
        if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");

        for (var n = Object(t), o = 1; o < arguments.length; o++) {
          var r = arguments[o];
          if (void 0 !== r && null !== r) for (var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++) {
            var c = i[a],
                l = Object.getOwnPropertyDescriptor(r, c);
            void 0 !== l && l.enumerable && (n[c] = r[c]);
          }
        }

        return n;
      }

      function r() {
        Object.assign || Object.defineProperty(Object, "assign", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: o
        });
      }

      t.exports = {
        assign: o,
        polyfill: r
      };
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var o = n(24),
          r = n(6),
          i = n(5),
          a = n(36),
          s = function s() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        if ("undefined" != typeof window) {
          var n = a.getOpts.apply(void 0, t);
          return new Promise(function (t, e) {
            i["default"].promise = {
              resolve: t,
              reject: e
            }, o["default"](n), setTimeout(function () {
              r.openModal();
            });
          });
        }
      };

      s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e["default"] = s;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(1),
          r = n(0),
          i = r["default"].MODAL,
          a = n(4),
          s = n(34),
          c = n(35),
          l = n(1);
      e.init = function (t) {
        o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s["default"](), a["default"]()), a.initModalContent(t), c["default"](t);
      }, e["default"] = e.init;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(0),
          r = o["default"].MODAL;
      e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>', e["default"] = e.modalMarkup;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(0),
          r = o["default"].OVERLAY,
          i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';
      e["default"] = i;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(0),
          r = o["default"].ICON;
      e.errorIconMarkup = function () {
        var t = r + "--error",
            e = t + "__line";
        return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  ';
      }, e.warningIconMarkup = function () {
        var t = r + "--warning";
        return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  ';
      }, e.successIconMarkup = function () {
        var t = r + "--success";
        return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  ';
      };
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(0),
          r = o["default"].CONTENT;
      e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n';
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(0),
          r = o["default"].BUTTON_CONTAINER,
          i = o["default"].BUTTON,
          a = o["default"].BUTTON_LOADER;
      e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var o = n(4),
          r = n(2),
          i = n(0),
          a = i["default"].ICON,
          s = i["default"].ICON_CUSTOM,
          c = ["error", "warning", "success", "info"],
          l = {
        error: r.errorIconMarkup(),
        warning: r.warningIconMarkup(),
        success: r.successIconMarkup()
      },
          u = function u(t, e) {
        var n = a + "--" + t;
        e.classList.add(n);
        var o = l[t];
        o && (e.innerHTML = o);
      },
          f = function f(t, e) {
        e.classList.add(s);
        var n = document.createElement("img");
        n.src = t, e.appendChild(n);
      },
          d = function d(t) {
        if (t) {
          var e = o.injectElIntoModal(r.iconMarkup);
          c.includes(t) ? u(t, e) : f(t, e);
        }
      };

      e["default"] = d;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var o = n(2),
          r = n(4),
          i = function i(t) {
        navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "");
      };

      e.initTitle = function (t) {
        if (t) {
          var e = r.injectElIntoModal(o.titleMarkup);
          e.textContent = t, i(e);
        }
      }, e.initText = function (t) {
        if (t) {
          var e = document.createDocumentFragment();
          t.split("\n").forEach(function (t, n, o) {
            e.appendChild(document.createTextNode(t)), n < o.length - 1 && e.appendChild(document.createElement("br"));
          });
          var n = r.injectElIntoModal(o.textMarkup);
          n.appendChild(e), i(n);
        }
      };
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var o = n(1),
          r = n(4),
          i = n(0),
          a = i["default"].BUTTON,
          s = i["default"].DANGER_BUTTON,
          c = n(3),
          l = n(2),
          u = n(6),
          f = n(5),
          d = function d(t, e, n) {
        var r = e.text,
            i = e.value,
            d = e.className,
            p = e.closeModal,
            m = o.stringToNode(l.buttonMarkup),
            b = m.querySelector("." + a),
            v = a + "--" + t;

        if (b.classList.add(v), d) {
          (Array.isArray(d) ? d : d.split(" ")).filter(function (t) {
            return t.length > 0;
          }).forEach(function (t) {
            b.classList.add(t);
          });
        }

        n && t === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r;
        var g = {};
        return g[t] = i, f.setActionValue(g), f.setActionOptionsFor(t, {
          closeModal: p
        }), b.addEventListener("click", function () {
          return u.onAction(t);
        }), m;
      },
          p = function p(t, e) {
        var n = r.injectElIntoModal(l.footerMarkup);

        for (var o in t) {
          var i = t[o],
              a = d(o, i, e);
          i.visible && n.appendChild(a);
        }

        0 === n.children.length && n.remove();
      };

      e["default"] = p;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var o = n(3),
          r = n(4),
          i = n(2),
          a = n(5),
          s = n(6),
          c = n(0),
          l = c["default"].CONTENT,
          u = function u(t) {
        t.addEventListener("input", function (t) {
          var e = t.target,
              n = e.value;
          a.setActionValue(n);
        }), t.addEventListener("keyup", function (t) {
          if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY);
        }), setTimeout(function () {
          t.focus(), a.setActionValue("");
        }, 0);
      },
          f = function f(t, e, n) {
        var o = document.createElement(e),
            r = l + "__" + e;
        o.classList.add(r);

        for (var i in n) {
          var a = n[i];
          o[i] = a;
        }

        "input" === e && u(o), t.appendChild(o);
      },
          d = function d(t) {
        if (t) {
          var e = r.injectElIntoModal(i.contentMarkup),
              n = t.element,
              o = t.attributes;
          "string" == typeof n ? f(e, n, o) : e.appendChild(n);
        }
      };

      e["default"] = d;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var o = n(1),
          r = n(2),
          i = function i() {
        var t = o.stringToNode(r.overlayMarkup);
        document.body.appendChild(t);
      };

      e["default"] = i;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var o = n(5),
          r = n(6),
          i = n(1),
          a = n(3),
          s = n(0),
          c = s["default"].MODAL,
          l = s["default"].BUTTON,
          u = s["default"].OVERLAY,
          f = function f(t) {
        t.preventDefault(), v();
      },
          d = function d(t) {
        t.preventDefault(), g();
      },
          p = function p(t) {
        if (o["default"].isOpen) switch (t.key) {
          case "Escape":
            return r.onAction(a.CANCEL_KEY);
        }
      },
          m = function m(t) {
        if (o["default"].isOpen) switch (t.key) {
          case "Tab":
            return f(t);
        }
      },
          b = function b(t) {
        if (o["default"].isOpen) return "Tab" === t.key && t.shiftKey ? d(t) : void 0;
      },
          v = function v() {
        var t = i.getNode(l);
        t && (t.tabIndex = 0, t.focus());
      },
          g = function g() {
        var t = i.getNode(c),
            e = t.querySelectorAll("." + l),
            n = e.length - 1,
            o = e[n];
        o && o.focus();
      },
          h = function h(t) {
        t[t.length - 1].addEventListener("keydown", m);
      },
          w = function w(t) {
        t[0].addEventListener("keydown", b);
      },
          y = function y() {
        var t = i.getNode(c),
            e = t.querySelectorAll("." + l);
        e.length && (h(e), w(e));
      },
          x = function x(t) {
        if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY);
      },
          _ = function _(t) {
        var e = i.getNode(u);
        e.removeEventListener("click", x), t && e.addEventListener("click", x);
      },
          k = function k(t) {
        o["default"].timer && clearTimeout(o["default"].timer), t && (o["default"].timer = window.setTimeout(function () {
          return r.onAction(a.CANCEL_KEY);
        }, t));
      },
          O = function O(t) {
        t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? v() : g(), y(), _(t.closeOnClickOutside), k(t.timer);
      };

      e["default"] = O;
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(1),
          r = n(3),
          i = n(37),
          a = n(38),
          s = {
        title: null,
        text: null,
        icon: null,
        buttons: r.defaultButtonList,
        content: null,
        className: null,
        closeOnClickOutside: !0,
        closeOnEsc: !0,
        dangerMode: !1,
        timer: null
      },
          c = Object.assign({}, s);

      e.setDefaults = function (t) {
        c = Object.assign({}, s, t);
      };

      var l = function l(t) {
        var e = t && t.button,
            n = t && t.buttons;
        return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? {
          confirm: e
        } : n;
      },
          u = function u(t) {
        return o.ordinalSuffixOf(t + 1);
      },
          f = function f(t, e) {
        o.throwErr(u(e) + " argument ('" + t + "') is invalid");
      },
          d = function d(t, e) {
        var n = t + 1,
            r = e[n];
        o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + u(n) + " argument ('" + r + "') to be a plain object");
      },
          p = function p(t, e) {
        var n = t + 1,
            r = e[n];
        void 0 !== r && o.throwErr("Unexpected " + u(n) + " argument (" + r + ")");
      },
          m = function m(t, e, n, r) {
        var i = _typeof(e),
            a = "string" === i,
            s = e instanceof Element;

        if (a) {
          if (0 === n) return {
            text: e
          };
          if (1 === n) return {
            text: e,
            title: r[0]
          };
          if (2 === n) return d(n, r), {
            icon: e
          };
          f(e, n);
        } else {
          if (s && 0 === n) return d(n, r), {
            content: e
          };
          if (o.isPlainObject(e)) return p(n, r), e;
          f(e, n);
        }
      };

      e.getOpts = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        var n = {};
        t.forEach(function (e, o) {
          var r = m(0, e, o, t);
          Object.assign(n, r);
        });
        var o = l(n);
        n.buttons = r.getButtonListOpts(o), delete n.button, n.content = i.getContentOpts(n.content);
        var u = Object.assign({}, s, c, n);
        return Object.keys(u).forEach(function (t) {
          a.DEPRECATED_OPTS[t] && a.logDeprecation(t);
        }), u;
      };
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = n(1),
          r = {
        element: "input",
        attributes: {
          placeholder: ""
        }
      };

      e.getContentOpts = function (t) {
        var e = {};
        return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? {
          element: t
        } : "input" === t ? r : null;
      };
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.logDeprecation = function (t) {
        var n = e.DEPRECATED_OPTS[t],
            o = n.onlyRename,
            r = n.replacement,
            i = n.subOption,
            a = n.link,
            s = o ? "renamed" : "deprecated",
            c = 'SweetAlert warning: "' + t + '" option has been ' + s + ".";

        if (r) {
          c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.';
        }

        var l = "https://sweetalert.js.org";
        c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c);
      }, e.DEPRECATED_OPTS = {
        type: {
          replacement: "icon",
          link: "/docs/#icon"
        },
        imageUrl: {
          replacement: "icon",
          link: "/docs/#icon"
        },
        customClass: {
          replacement: "className",
          onlyRename: !0,
          link: "/docs/#classname"
        },
        imageSize: {},
        showCancelButton: {
          replacement: "buttons",
          link: "/docs/#buttons"
        },
        showConfirmButton: {
          replacement: "button",
          link: "/docs/#button"
        },
        confirmButtonText: {
          replacement: "button",
          link: "/docs/#button"
        },
        confirmButtonColor: {},
        cancelButtonText: {
          replacement: "buttons",
          link: "/docs/#buttons"
        },
        closeOnConfirm: {
          replacement: "button",
          subOption: "closeModal",
          link: "/docs/#button"
        },
        closeOnCancel: {
          replacement: "buttons",
          subOption: "closeModal",
          link: "/docs/#buttons"
        },
        showLoaderOnConfirm: {
          replacement: "buttons"
        },
        animation: {},
        inputType: {
          replacement: "content",
          link: "/docs/#content"
        },
        inputValue: {
          replacement: "content",
          link: "/docs/#content"
        },
        inputPlaceholder: {
          replacement: "content",
          link: "/docs/#content"
        },
        html: {
          replacement: "content",
          link: "/docs/#content"
        },
        allowEscapeKey: {
          replacement: "closeOnEsc",
          onlyRename: !0,
          link: "/docs/#closeonesc"
        },
        allowClickOutside: {
          replacement: "closeOnClickOutside",
          onlyRename: !0,
          link: "/docs/#closeonclickoutside"
        }
      };
    }]);
  });
});
var swal = /*@__PURE__*/getDefaultExportFromCjs(sweetalert_min);

/* src/components/toolbar.svelte generated by Svelte v3.29.4 */
const file = "src/components/toolbar.svelte";

function create_fragment(ctx) {
	let div;
	let div_class_value;

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", div_class_value = /*$$props*/ ctx[1].class);
			add_location(div, file, 50, 0, 1245);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			/*div_binding*/ ctx[6](div);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$$props*/ 2 && div_class_value !== (div_class_value = /*$$props*/ ctx[1].class)) {
				attr_dev(div, "class", div_class_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			/*div_binding*/ ctx[6](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Toolbar", slots, []);
	let el;
	let { mm } = $$props;
	let { dirty } = $$props;
	let { showBrand = false } = $$props;
	let { isFull = false } = $$props;
	const toolbar = new Toolbar();
	toolbar.setBrand(showBrand);

	toolbar.register({
		id: "repl",
		title: "Open in REPL",
		content: Toolbar.icon("M5 6 v8 h10 v-8 h-10 z m5 0 v8"),
		onClick: handleREPL
	});

	toolbar.register({
		id: "full",
		title: "Full page view",
		content: Toolbar.icon("M5 9 v-3 h3 M5 11 v3 h3 M15 9 v-3 h-3 M15 11 v3 h-3"),
		onClick: handleFullPageView
	});

	toolbar.setItems(["zoomIn", "zoomOut", "fit", isFull ? "repl" : "full"]);

	onMount(() => {
		el.append(toolbar.render());
	});

	async function handleFullPageView() {
		const confirmed = !dirty || await swal({
			title: "Your changes will be lost!",
			text: "You should save them in Gist or other file services. Do you still want to continue?",
			icon: "warning",
			buttons: true,
			dangerMode: true
		});

		if (confirmed) _goto("/full" + window.location.hash);
	}

	function handleREPL() {
		_goto("/repl" + window.location.hash);
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(0, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("mm" in $$new_props) $$invalidate(2, mm = $$new_props.mm);
		if ("dirty" in $$new_props) $$invalidate(3, dirty = $$new_props.dirty);
		if ("showBrand" in $$new_props) $$invalidate(4, showBrand = $$new_props.showBrand);
		if ("isFull" in $$new_props) $$invalidate(5, isFull = $$new_props.isFull);
	};

	$$self.$capture_state = () => ({
		onMount,
		goto: _goto,
		Toolbar,
		swal,
		el,
		mm,
		dirty,
		showBrand,
		isFull,
		toolbar,
		handleFullPageView,
		handleREPL
	});

	$$self.$inject_state = $$new_props => {
		$$invalidate(1, $$props = assign(assign({}, $$props), $$new_props));
		if ("el" in $$props) $$invalidate(0, el = $$new_props.el);
		if ("mm" in $$props) $$invalidate(2, mm = $$new_props.mm);
		if ("dirty" in $$props) $$invalidate(3, dirty = $$new_props.dirty);
		if ("showBrand" in $$props) $$invalidate(4, showBrand = $$new_props.showBrand);
		if ("isFull" in $$props) $$invalidate(5, isFull = $$new_props.isFull);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*mm*/ 4) {
			 toolbar.attach(mm);
		}
	};

	$$props = exclude_internal_props($$props);
	return [el, $$props, mm, dirty, showBrand, isFull, div_binding];
}

class Toolbar_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { mm: 2, dirty: 3, showBrand: 4, isFull: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Toolbar_1",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*mm*/ ctx[2] === undefined && !("mm" in props)) {
			console.warn("<Toolbar> was created without expected prop 'mm'");
		}

		if (/*dirty*/ ctx[3] === undefined && !("dirty" in props)) {
			console.warn("<Toolbar> was created without expected prop 'dirty'");
		}
	}

	get mm() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set mm(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get dirty() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set dirty(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get showBrand() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showBrand(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isFull() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isFull(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var DEFAULT_FILENAME = 'markmap.md';
var DEFAULT_DATA = 'https://gist.githubusercontent.com/gera2ld/af76a4c245b302206b16aec503dbe07b/raw/0526a14d700236e614ad3e8a1f131e5bca02ee7b/markmap.md';

function validateResponse(res) {
  if (res.status > 300) throw new Error("".concat(res.status, " ").concat(res.statusText));
  return res;
}

function loadGitHubGist(_x, _x2) {
  return _loadGitHubGist.apply(this, arguments);
}

function _loadGitHubGist() {
  _loadGitHubGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key, filename) {
    var res, data, file, content, _res;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("https://api.github.com/gists/".concat(key), {
              headers: {
                Accept: 'application/vnd.github.v3+json'
              }
            });

          case 2:
            res = _context3.sent;
            validateResponse(res);
            _context3.next = 6;
            return res.json();

          case 6:
            data = _context3.sent;
            file = data.files[filename];

            if (file) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return");

          case 10:
            content = file.content;

            if (!file.truncated) {
              _context3.next = 18;
              break;
            }

            _context3.next = 14;
            return fetch(file.raw_url);

          case 14:
            _res = _context3.sent;
            _context3.next = 17;
            return _res.text();

          case 17:
            content = _context3.sent;

          case 18:
            return _context3.abrupt("return", content);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadGitHubGist.apply(this, arguments);
}

function loadGiteeGist(_x3, _x4) {
  return _loadGiteeGist.apply(this, arguments);
}

function _loadGiteeGist() {
  _loadGiteeGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(key, filename) {
    var res, data, file, content, _res2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch("https://gitee.com/api/v5/gists/".concat(key));

          case 2:
            res = _context4.sent;
            validateResponse(res);
            _context4.next = 6;
            return res.json();

          case 6:
            data = _context4.sent;
            file = data.files[filename];

            if (file) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt("return");

          case 10:
            content = file.content;

            if (!file.truncated) {
              _context4.next = 18;
              break;
            }

            _context4.next = 14;
            return fetch(file.raw_url);

          case 14:
            _res2 = _context4.sent;
            _context4.next = 17;
            return _res2.text();

          case 17:
            content = _context4.sent;

          case 18:
            return _context4.abrupt("return", content);

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _loadGiteeGist.apply(this, arguments);
}

function loadFromGist(gist) {
  var _gist$match = gist.match(/^(?:(\w+):)?(\w+)(?:\/(.*))?$|/),
      _gist$match2 = _slicedToArray(_gist$match, 4),
      source = _gist$match2[1],
      key = _gist$match2[2],
      pathname = _gist$match2[3];

  if (!key) return;
  var filename = pathname || DEFAULT_FILENAME;

  if (source === 'gitee') {
    return loadGiteeGist(key, filename);
  }

  if (source === 'gist') {
    return loadGitHubGist(key, filename);
  }
}

function loadFromURL(_x5) {
  return _loadFromURL.apply(this, arguments);
}

function _loadFromURL() {
  _loadFromURL = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(url) {
    var res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetch(url);

          case 2:
            res = _context5.sent;
            validateResponse(res);
            return _context5.abrupt("return", res.text());

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _loadFromURL.apply(this, arguments);
}

function memoizeLast(fn) {
  var cache;
  return function memoized() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = args.join('\n');

    if (!cache || cache.key !== key) {
      cache = {
        key: key,
        value: fn.apply(void 0, args)
      };
    }

    return cache.value;
  };
}

var loadData = memoizeLast( /*#__PURE__*/function () {
  var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(d) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return loadFromGist(d);

          case 2:
            _context.t0 = _context.sent;

            if (_context.t0) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return loadFromURL(d);

          case 6:
            _context.t0 = _context.sent;

          case 7:
            return _context.abrupt("return", _context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function loadData(_x6) {
    return _loadData.apply(this, arguments);
  }

  return loadData;
}());

function getHashHandler(update) {
  var lastSession;

  function handleHashChange() {
    return _handleHashChange.apply(this, arguments);
  }

  function _handleHashChange() {
    _handleHashChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var session, hq, gist, d, hash, text;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              session = {};
              lastSession = session;
              hq = new URLSearchParams(window.location.hash.slice(1));
              gist = hq.get('gist');
              d = hq.get('d');

              if (!(gist && !d)) {
                _context2.next = 12;
                break;
              }

              if (!gist.includes(':')) gist = "gist:".concat(gist);
              hash = "#?d=".concat(gist);
              _context2.next = 10;
              return Promise.resolve();

            case 10:
              window.location.hash = hash;
              return _context2.abrupt("return");

            case 12:
              _context2.next = 14;
              return loadData(d || DEFAULT_DATA);

            case 14:
              text = _context2.sent;

              if (text != null && session === lastSession) {
                update(text);
              }

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleHashChange.apply(this, arguments);
  }

  return handleHashChange;
}

function subscribeHash(update) {
  var handler = getHashHandler(update);
  window.addEventListener('hashchange', handler);
  handler(update);
  return function () {
    return window.removeEventListener('hashchange', handler);
  };
}

function parseGitHubGistURL(url) {
  // GitHub Gist
  // https://gist.github.com/gera2ld/af76a4c245b302206b16aec503dbe07b
  if (url.origin !== 'https://gist.github.com') return;
  var matches = url.pathname.match(/^\/[^/]+\/(\w+)$/);
  if (!matches) return;
  var file = url.hash ? "/".concat(url.hash.slice(1)) : '';
  var d = "gist:".concat(matches[1]).concat(file);
  return {
    type: 'GitHub Gist',
    d: d
  };
}

function parseGiteeGistURL(url) {
  // Gitee Gist
  // https://gitee.com/gerald/codes/a73wgucr28dhlxp91kytm57
  if (url.origin !== 'https://gitee.com') return;
  var matches = url.pathname.match(/^\/[^/]+\/codes\/(\w+)$/);
  if (!matches) return;
  var file = url.hash ? "/".concat(url.hash.slice(1)) : '';
  var d = "gitee:".concat(matches[1]).concat(file);
  return {
    type: 'Gitee Gist',
    d: d
  };
}

function parseNormalURL(url) {
  var d = encodeURIComponent(url);
  return {
    type: 'URL',
    d: d
  };
}

var parsers = [parseGitHubGistURL, parseGiteeGistURL, parseNormalURL];
function parseURL(url) {
  try {
    url = new URL(url);

    var _iterator = _createForOfIteratorHelper(parsers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var parse = _step.value;
        var result = parse(url);
        if (result) return result;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } catch (err) {
    console.error(err); // noop
  }
}

export { Toolbar_1 as T, swal as a, loadData as l, parseURL as p, subscribeHash as s };
