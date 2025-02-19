// ../../../../myData/uniapp-mogu-mall/node_modules/vue3-lazy/dist/vue-lazy.es5.js
var State;
(function(State2) {
  State2[State2["loading"] = 0] = "loading";
  State2[State2["loaded"] = 1] = "loaded";
  State2[State2["error"] = 2] = "error";
})(State || (State = {}));
var inBrowser = typeof window !== "undefined";
var hasIntersectionObserver = checkIntersectionObserver();
function checkIntersectionObserver() {
  if (inBrowser && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in IntersectionObserverEntry.prototype) {
    if (!("isIntersecting" in IntersectionObserverEntry.prototype)) {
      Object.defineProperty(IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
          return this.intersectionRatio > 0;
        }
      });
    }
    return true;
  }
  return false;
}
var style = function(el, prop) {
  return getComputedStyle(el).getPropertyValue(prop);
};
var overflow = function(el) {
  return style(el, "overflow") + style(el, "overflow-y") + style(el, "overflow-x");
};
function scrollParent(el) {
  var parent = el;
  while (parent) {
    if (parent === document.body || parent === document.documentElement) {
      break;
    }
    if (!parent.parentNode) {
      break;
    }
    if (/(scroll|auto)/.test(overflow(parent))) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return window;
}
function loadImage(src) {
  return new Promise(function(resolve, reject) {
    var image = new Image();
    image.onload = function() {
      resolve();
      dispose();
    };
    image.onerror = function(e) {
      reject(e);
      dispose();
    };
    image.src = src;
    function dispose() {
      image.onload = image.onerror = null;
    }
  });
}
function warn(msg) {
  console.warn("[Vue3-lazy warn]: " + msg);
}
var ImageManager = (
  /** @class */
  function() {
    function ImageManager2(options) {
      this.el = options.el;
      this.parent = options.parent;
      this.src = options.src;
      this.error = options.error;
      this.loading = options.loading;
      this.cache = options.cache;
      this.state = State.loading;
      this.render(this.loading);
    }
    ImageManager2.prototype.load = function(next) {
      if (this.state > State.loading) {
        return;
      }
      if (this.cache.has(this.src)) {
        this.state = State.loaded;
        this.render(this.src);
        return;
      }
      this.renderSrc(next);
    };
    ImageManager2.prototype.isInView = function() {
      var rect = this.el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.left < window.innerWidth;
    };
    ImageManager2.prototype.update = function(src) {
      var currentSrc = this.src;
      if (src !== currentSrc) {
        this.src = src;
        this.state = State.loading;
      }
    };
    ImageManager2.prototype.renderSrc = function(next) {
      var _this = this;
      loadImage(this.src).then(function() {
        _this.state = State.loaded;
        _this.render(_this.src);
        _this.cache.add(_this.src);
        next && next();
      }).catch(function(e) {
        _this.state = State.error;
        _this.render(_this.error);
        warn("load failed with src image(" + _this.src + ") and the error msg is " + e.message);
        next && next();
      });
    };
    ImageManager2.prototype.render = function(src) {
      this.el.setAttribute("src", src);
    };
    return ImageManager2;
  }()
);
function throttle(fn, delay) {
  var timeout = 0;
  var lastRun = 0;
  return function() {
    if (timeout) {
      return;
    }
    var elapsed = Date.now() - lastRun;
    var context = this;
    var args = arguments;
    var runCallback = function() {
      lastRun = Date.now();
      timeout = 0;
      fn.apply(context, args);
    };
    if (elapsed >= delay) {
      runCallback();
    } else {
      timeout = window.setTimeout(runCallback, delay);
    }
  };
}
var DEFAULT_URL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
var events = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove", "transitioncancel"];
var THROTTLE_DELAY = 300;
var Lazy = (
  /** @class */
  function() {
    function Lazy2(options) {
      this.error = options.error || DEFAULT_URL;
      this.loading = options.loading || DEFAULT_URL;
      this.cache = /* @__PURE__ */ new Set();
      this.managerQueue = [];
      this.throttleLazyHandler = throttle(this.lazyHandler.bind(this), THROTTLE_DELAY);
      this.init();
    }
    Lazy2.prototype.add = function(el, binding) {
      var src = binding.value;
      var parent = scrollParent(el);
      var manager = new ImageManager({
        el,
        parent,
        src,
        error: this.error,
        loading: this.loading,
        cache: this.cache
      });
      this.managerQueue.push(manager);
      if (hasIntersectionObserver) {
        this.observer.observe(el);
      } else {
        this.addListenerTarget(parent);
        this.addListenerTarget(window);
        this.throttleLazyHandler();
      }
    };
    Lazy2.prototype.update = function(el, binding) {
      var src = binding.value;
      var manager = this.managerQueue.find(function(manager2) {
        return manager2.el === el;
      });
      if (manager) {
        manager.update(src);
      }
    };
    Lazy2.prototype.remove = function(el) {
      var manager = this.managerQueue.find(function(manager2) {
        return manager2.el === el;
      });
      if (manager) {
        this.removeManager(manager);
      }
    };
    Lazy2.prototype.init = function() {
      if (hasIntersectionObserver) {
        this.initIntersectionObserver();
      } else {
        this.targetQueue = [];
      }
    };
    Lazy2.prototype.initIntersectionObserver = function() {
      var _this = this;
      this.observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var manager = _this.managerQueue.find(function(manager2) {
              return manager2.el === entry.target;
            });
            if (manager) {
              if (manager.state === State.loaded) {
                _this.removeManager(manager);
                return;
              }
              manager.load();
            }
          }
        });
      }, {
        rootMargin: "0px",
        threshold: 0
      });
    };
    Lazy2.prototype.addListenerTarget = function(el) {
      var target = this.targetQueue.find(function(target2) {
        return target2.el === el;
      });
      if (!target) {
        target = {
          el,
          ref: 1
        };
        this.targetQueue.push(target);
        this.addListener(el);
      } else {
        target.ref++;
      }
    };
    Lazy2.prototype.removeListenerTarget = function(el) {
      var _this = this;
      this.targetQueue.some(function(target, index) {
        if (el === target.el) {
          target.ref--;
          if (!target.ref) {
            _this.removeListener(el);
            _this.targetQueue.splice(index, 1);
          }
          return true;
        }
        return false;
      });
    };
    Lazy2.prototype.addListener = function(el) {
      var _this = this;
      events.forEach(function(event) {
        el.addEventListener(event, _this.throttleLazyHandler, {
          passive: true,
          capture: false
        });
      });
    };
    Lazy2.prototype.removeListener = function(el) {
      var _this = this;
      events.forEach(function(event) {
        el.removeEventListener(event, _this.throttleLazyHandler);
      });
    };
    Lazy2.prototype.lazyHandler = function(e) {
      for (var i = this.managerQueue.length - 1; i >= 0; i--) {
        var manager = this.managerQueue[i];
        if (manager.isInView()) {
          if (manager.state === State.loaded) {
            this.removeManager(manager);
            return;
          }
          manager.load();
        }
      }
    };
    Lazy2.prototype.removeManager = function(manager) {
      var index = this.managerQueue.indexOf(manager);
      if (index > -1) {
        this.managerQueue.splice(index, 1);
      }
      if (this.observer) {
        this.observer.unobserve(manager.el);
      } else {
        this.removeListenerTarget(manager.parent);
        this.removeListenerTarget(window);
      }
    };
    return Lazy2;
  }()
);
var lazyPlugin = {
  install: function(app, options) {
    var lazy = new Lazy(options);
    app.directive("lazy", {
      mounted: lazy.add.bind(lazy),
      updated: lazy.update.bind(lazy),
      unmounted: lazy.update.bind(lazy)
    });
  }
};
var vue_lazy_es5_default = lazyPlugin;
export {
  vue_lazy_es5_default as default
};
/*! Bundled license information:

vue3-lazy/dist/vue-lazy.es5.js:
  (*!
   * vue3-lazy v1.0.0-alpha.1
   * (c) 2020-2020 ustbhuangyi
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=vue3-lazy.js.map
