import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-STJUHH2Y.js";

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module) {
    "use strict";
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module) {
    "use strict";
    var bind = require_bind();
    var toString = Object.prototype.toString;
    var kindOf = function(cache2) {
      return function(thing) {
        var str = toString.call(thing);
        return cache2[str] || (cache2[str] = str.slice(8, -1).toLowerCase());
      };
    }(/* @__PURE__ */ Object.create(null));
    function kindOfTest(type) {
      type = type.toLowerCase();
      return function isKindOf(thing) {
        return kindOf(thing) === type;
      };
    }
    function isArray(val) {
      return Array.isArray(val);
    }
    function isUndefined2(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined2(val) && val.constructor !== null && !isUndefined2(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    var isArrayBuffer = kindOfTest("ArrayBuffer");
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
      }
      return result;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (kindOf(val) !== "object") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    var isDate = kindOfTest("Date");
    var isFile = kindOfTest("File");
    var isBlob = kindOfTest("Blob");
    var isFileList = kindOfTest("FileList");
    function isFunction2(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction2(val.pipe);
    }
    function isFormData(thing) {
      var pattern = "[object FormData]";
      return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction2(thing.toString) && thing.toString() === pattern);
    }
    var isURLSearchParams = kindOfTest("URLSearchParams");
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    function inherits(constructor, superConstructor, props, descriptors) {
      constructor.prototype = Object.create(superConstructor.prototype, descriptors);
      constructor.prototype.constructor = constructor;
      props && Object.assign(constructor.prototype, props);
    }
    function toFlatObject(sourceObj, destObj, filter) {
      var props;
      var i;
      var prop;
      var merged = {};
      destObj = destObj || {};
      do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while (i-- > 0) {
          prop = props[i];
          if (!merged[prop]) {
            destObj[prop] = sourceObj[prop];
            merged[prop] = true;
          }
        }
        sourceObj = Object.getPrototypeOf(sourceObj);
      } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
      return destObj;
    }
    function endsWith(str, searchString, position) {
      str = String(str);
      if (position === void 0 || position > str.length) {
        position = str.length;
      }
      position -= searchString.length;
      var lastIndex = str.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }
    function toArray(thing) {
      if (!thing)
        return null;
      var i = thing.length;
      if (isUndefined2(i))
        return null;
      var arr = new Array(i);
      while (i-- > 0) {
        arr[i] = thing[i];
      }
      return arr;
    }
    var isTypedArray = function(TypedArray) {
      return function(thing) {
        return TypedArray && thing instanceof TypedArray;
      };
    }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
    module.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined: isUndefined2,
      isDate,
      isFile,
      isBlob,
      isFunction: isFunction2,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM,
      inherits,
      toFlatObject,
      kindOf,
      kindOfTest,
      endsWith,
      toArray,
      isTypedArray,
      isFileList
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url3, params, paramsSerializer) {
      if (!params) {
        return url3;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize2(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url3.indexOf("#");
        if (hashmarkIndex !== -1) {
          url3 = url3.slice(0, hashmarkIndex);
        }
        url3 += (url3.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url3;
    };
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/AxiosError.js
var require_AxiosError = __commonJS({
  "node_modules/axios/lib/core/AxiosError.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function AxiosError(message, code, config, request, response) {
      Error.call(this);
      this.message = message;
      this.name = "AxiosError";
      code && (this.code = code);
      config && (this.config = config);
      request && (this.request = request);
      response && (this.response = response);
    }
    utils.inherits(AxiosError, Error, {
      toJSON: function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      }
    });
    var prototype = AxiosError.prototype;
    var descriptors = {};
    [
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED"
    ].forEach(function(code) {
      descriptors[code] = { value: code };
    });
    Object.defineProperties(AxiosError, descriptors);
    Object.defineProperty(prototype, "isAxiosError", { value: true });
    AxiosError.from = function(error, code, config, request, response, customProps) {
      var axiosError = Object.create(prototype);
      utils.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
      });
      AxiosError.call(axiosError, error.message, code, config, request, response);
      axiosError.name = error.name;
      customProps && Object.assign(axiosError, customProps);
      return axiosError;
    };
    module.exports = AxiosError;
  }
});

// node_modules/axios/lib/defaults/transitional.js
var require_transitional = __commonJS({
  "node_modules/axios/lib/defaults/transitional.js"(exports, module) {
    "use strict";
    module.exports = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    };
  }
});

// node_modules/axios/lib/helpers/toFormData.js
var require_toFormData = __commonJS({
  "node_modules/axios/lib/helpers/toFormData.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function toFormData(obj, formData) {
      formData = formData || new FormData();
      var stack = [];
      function convertValue(value) {
        if (value === null)
          return "";
        if (utils.isDate(value)) {
          return value.toISOString();
        }
        if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
          return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
        }
        return value;
      }
      function build(data, parentKey) {
        if (utils.isPlainObject(data) || utils.isArray(data)) {
          if (stack.indexOf(data) !== -1) {
            throw Error("Circular reference detected in " + parentKey);
          }
          stack.push(data);
          utils.forEach(data, function each(value, key) {
            if (utils.isUndefined(value))
              return;
            var fullKey = parentKey ? parentKey + "." + key : key;
            var arr;
            if (value && !parentKey && typeof value === "object") {
              if (utils.endsWith(key, "{}")) {
                value = JSON.stringify(value);
              } else if (utils.endsWith(key, "[]") && (arr = utils.toArray(value))) {
                arr.forEach(function(el) {
                  !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
                });
                return;
              }
            }
            build(value, fullKey);
          });
          stack.pop();
        } else {
          formData.append(parentKey, convertValue(data));
        }
      }
      build(obj);
      return formData;
    }
    module.exports = toFormData;
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module) {
    "use strict";
    var AxiosError = require_AxiosError();
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(new AxiosError(
          "Request failed with status code " + response.status,
          [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
          response.config,
          response.request,
          response
        ));
      }
    };
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
    "use strict";
    module.exports = function isAbsoluteURL(url3) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url3);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
    "use strict";
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url3) {
        var href = url3;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/axios/lib/cancel/CanceledError.js
var require_CanceledError = __commonJS({
  "node_modules/axios/lib/cancel/CanceledError.js"(exports, module) {
    "use strict";
    var AxiosError = require_AxiosError();
    var utils = require_utils();
    function CanceledError(message) {
      AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED);
      this.name = "CanceledError";
    }
    utils.inherits(CanceledError, AxiosError, {
      __CANCEL__: true
    });
    module.exports = CanceledError;
  }
});

// node_modules/axios/lib/helpers/parseProtocol.js
var require_parseProtocol = __commonJS({
  "node_modules/axios/lib/helpers/parseProtocol.js"(exports, module) {
    "use strict";
    module.exports = function parseProtocol(url3) {
      var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url3);
      return match && match[1] || "";
    };
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var transitionalDefaults = require_transitional();
    var AxiosError = require_AxiosError();
    var CanceledError = require_CanceledError();
    var parseProtocol = require_parseProtocol();
    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }
          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }
        if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
          var transitional = config.transitional || transitionalDefaults;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(new AxiosError(
            timeoutErrorMessage,
            transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
            config,
            request
          ));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
          onCanceled = function(cancel) {
            if (!request) {
              return;
            }
            reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
            request.abort();
            request = null;
          };
          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }
        if (!requestData) {
          requestData = null;
        }
        var protocol = parseProtocol(fullPath);
        if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
          reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
          return;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/axios/lib/helpers/null.js
var require_null = __commonJS({
  "node_modules/axios/lib/helpers/null.js"(exports, module) {
    module.exports = null;
  }
});

// node_modules/axios/lib/defaults/index.js
var require_defaults = __commonJS({
  "node_modules/axios/lib/defaults/index.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var AxiosError = require_AxiosError();
    var transitionalDefaults = require_transitional();
    var toFormData = require_toFormData();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: transitionalDefaults,
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        var isObjectPayload = utils.isObject(data);
        var contentType = headers && headers["Content-Type"];
        var isFileList;
        if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === "multipart/form-data") {
          var _FormData = this.env && this.env.FormData;
          return toFormData(isFileList ? { "files[]": data } : data, _FormData && new _FormData());
        } else if (isObjectPayload || contentType === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional || defaults.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
              }
              throw e;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: require_null()
      },
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module.exports = defaults;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var defaults = require_defaults();
    module.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
    "use strict";
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    var CanceledError = require_CanceledError();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
      if (config.signal && config.signal.aborted) {
        throw new CanceledError();
      }
    }
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(
        config,
        config.data,
        config.headers,
        config.transformRequest
      );
      config.headers = utils.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );
      utils.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(
          config,
          response.data,
          response.headers,
          config.transformResponse
        );
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config,
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        }
      }
      function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "beforeRedirect": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
      };
      utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
      });
      return config;
    };
  }
});

// node_modules/axios/lib/env/data.js
var require_data = __commonJS({
  "node_modules/axios/lib/env/data.js"(exports, module) {
    module.exports = {
      "version": "0.27.2"
    };
  }
});

// node_modules/axios/lib/helpers/validator.js
var require_validator = __commonJS({
  "node_modules/axios/lib/helpers/validator.js"(exports, module) {
    "use strict";
    var VERSION = require_data().version;
    var AxiosError = require_AxiosError();
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    validators.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new AxiosError(
            formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
            AxiosError.ERR_DEPRECATED
          );
        }
        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(
            formatMessage(
              opt,
              " has been deprecated since v" + version + " and will be removed in the near future"
            )
          );
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);
          if (result !== true) {
            throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
        }
      }
    }
    module.exports = {
      assertOptions,
      validators
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var buildFullPath = require_buildFullPath();
    var validator = require_validator();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      var fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url3, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url: url3,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      function generateHTTPMethod(isForm) {
        return function httpMethod(url3, data, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            headers: isForm ? {
              "Content-Type": "multipart/form-data"
            } : {},
            url: url3,
            data
          }));
        };
      }
      Axios.prototype[method] = generateHTTPMethod();
      Axios.prototype[method + "Form"] = generateHTTPMethod(true);
    });
    module.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
    "use strict";
    var CanceledError = require_CanceledError();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      this.promise.then(function(cancel) {
        if (!token._listeners)
          return;
        var i;
        var l = token._listeners.length;
        for (i = 0; i < l; i++) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = function(onfulfilled) {
        var _resolve;
        var promise = new Promise(function(resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.prototype.subscribe = function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    };
    CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module) {
    "use strict";
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = function isAxiosError(payload) {
      return utils.isObject(payload) && payload.isAxiosError === true;
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig2) {
      var context = new Axios(defaultConfig2);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig2, instanceConfig));
      };
      return instance;
    }
    var axios3 = createInstance(defaults);
    axios3.Axios = Axios;
    axios3.CanceledError = require_CanceledError();
    axios3.CancelToken = require_CancelToken();
    axios3.isCancel = require_isCancel();
    axios3.VERSION = require_data().version;
    axios3.toFormData = require_toFormData();
    axios3.AxiosError = require_AxiosError();
    axios3.Cancel = axios3.CanceledError;
    axios3.all = function all(promises) {
      return Promise.all(promises);
    };
    axios3.spread = require_spread();
    axios3.isAxiosError = require_isAxiosError();
    module.exports = axios3;
    module.exports.default = axios3;
  }
});

// node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/axios/index.js"(exports, module) {
    module.exports = require_axios();
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React6 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV11(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement3(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement3(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement3(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement3(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV11(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-simple-star-rating/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-simple-star-rating/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var e = require_jsx_runtime();
    var t = require_react();
    var o = function() {
      return o = Object.assign || function(e2) {
        for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
          for (var i2 in t2 = arguments[o2])
            Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
        return e2;
      }, o.apply(this, arguments);
    };
    function n(e2, t2, o2) {
      if (o2 || 2 === arguments.length)
        for (var n2, i2 = 0, r3 = t2.length; i2 < r3; i2++)
          !n2 && i2 in t2 || (n2 || (n2 = Array.prototype.slice.call(t2, 0, i2)), n2[i2] = t2[i2]);
      return e2.concat(n2 || Array.prototype.slice.call(t2));
    }
    function i(t2) {
      var n2 = t2.size, i2 = void 0 === n2 ? 25 : n2, r3 = t2.SVGstrokeColor, l2 = void 0 === r3 ? "currentColor" : r3, a2 = t2.SVGstorkeWidth, s2 = void 0 === a2 ? 0 : a2, c2 = t2.SVGclassName, d2 = void 0 === c2 ? "star-svg" : c2, u = t2.SVGstyle;
      return e.jsx("svg", o({ className: d2, style: u, stroke: l2, fill: "currentColor", strokeWidth: s2, viewBox: "0 0 24 24", width: i2, height: i2, xmlns: "http://www.w3.org/2000/svg" }, { children: e.jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) }));
    }
    function r2(e2, t2) {
      switch (t2.type) {
        case "PointerMove":
          return o(o({}, e2), { hoverValue: t2.payload, hoverIndex: t2.index });
        case "PointerLeave":
          return o(o({}, e2), { ratingValue: e2.ratingValue, hoverIndex: 0, hoverValue: null });
        case "MouseClick":
          return o(o({}, e2), { valueIndex: e2.hoverIndex, ratingValue: t2.payload });
        default:
          return e2;
      }
    }
    var l = "style-module_starRatingWrap__q-lJC";
    var a = "style-module_simpleStarRating__nWUxf";
    var s = "style-module_fillIcons__6---A";
    var c = "style-module_emptyIcons__Bg-FZ";
    var d = "style-module_tooltip__tKc3i";
    !function(e2, t2) {
      void 0 === t2 && (t2 = {});
      var o2 = t2.insertAt;
      if (e2 && "undefined" != typeof document) {
        var n2 = document.head || document.getElementsByTagName("head")[0], i2 = document.createElement("style");
        i2.type = "text/css", "top" === o2 && n2.firstChild ? n2.insertBefore(i2, n2.firstChild) : n2.appendChild(i2), i2.styleSheet ? i2.styleSheet.cssText = e2 : i2.appendChild(document.createTextNode(e2));
      }
    }(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"), exports.Rating = function(u) {
      var v, p, h = u.onClick, y = u.onPointerMove, f = u.onPointerEnter, m = u.onPointerLeave, g = u.initialValue, x = void 0 === g ? 0 : g, _ = u.iconsCount, C = void 0 === _ ? 5 : _, V = u.size, k = void 0 === V ? 40 : V, S = u.readonly, w = void 0 !== S && S, b = u.rtl, M = void 0 !== b && b, G = u.customIcons, I = void 0 === G ? [] : G, N = u.allowFraction, j = void 0 !== N && N, P = u.style, A = u.className, L = void 0 === A ? "react-simple-star-rating" : A, R = u.transition, W = void 0 !== R && R, T = u.allowHover, z = void 0 === T || T, B = u.disableFillHover, F = void 0 !== B && B, E = u.fillIcon, q = void 0 === E ? null : E, O = u.fillColor, H = void 0 === O ? "#ffbc0b" : O, J = u.fillColorArray, K = void 0 === J ? [] : J, U = u.fillStyle, Z = u.fillClassName, D = void 0 === Z ? "filled-icons" : Z, X = u.emptyIcon, Y = void 0 === X ? null : X, Q = u.emptyColor, $ = void 0 === Q ? "#cccccc" : Q, ee = u.emptyStyle, te = u.emptyClassName, oe = void 0 === te ? "empty-icons" : te, ne = u.showTooltip, ie = void 0 !== ne && ne, re = u.tooltipDefaultText, le = void 0 === re ? "Your Rate" : re, ae = u.tooltipArray, se = void 0 === ae ? [] : ae, ce = u.tooltipStyle, de = u.tooltipClassName, ue = void 0 === de ? "react-simple-star-rating-tooltip" : de, ve = u.SVGclassName, pe = void 0 === ve ? "star-svg" : ve, he = u.titleSeparator, ye = void 0 === he ? "out of" : he, fe = u.SVGstyle, me = u.SVGstorkeWidth, ge = void 0 === me ? 0 : me, xe = u.SVGstrokeColor, _e = void 0 === xe ? "currentColor" : xe, Ce = t.useReducer(r2, { hoverIndex: 0, valueIndex: 0, ratingValue: 0, hoverValue: null }), Ve = Ce[0], ke = Ve.ratingValue, Se = Ve.hoverValue, we = Ve.hoverIndex, be = Ve.valueIndex, Me = Ce[1], Ge = t.useMemo(function() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
      }, []), Ie = t.useMemo(function() {
        return j ? 2 * C : C;
      }, [j, C]), Ne = t.useMemo(function() {
        return x > Ie ? 0 : j || Math.floor(x) === x ? Math.round(x / C * 100) : 2 * Math.ceil(x) * 10;
      }, [j, x, C, Ie]), je = t.useMemo(function() {
        return (j ? 2 * x - 1 : x - 1) || 0;
      }, [j, x]), Pe = t.useCallback(function(e2) {
        return C % 2 != 0 ? e2 / 2 / 10 : e2 / C;
      }, [C]), Ae = function(e2) {
        for (var t2 = e2.clientX, o2 = e2.currentTarget.children[0].getBoundingClientRect(), n2 = o2.left, i2 = o2.right, r3 = o2.width, l2 = M ? i2 - t2 : t2 - n2, a2 = Ie, s2 = Math.round(r3 / Ie), c2 = 0; c2 <= Ie; c2 += 1)
          if (l2 <= s2 * c2) {
            a2 = 0 === c2 && l2 < s2 ? 0 : c2;
            break;
          }
        var d2 = a2 - 1;
        a2 > 0 && (Me({ type: "PointerMove", payload: 100 * a2 / Ie, index: d2 }), y && Se && y(Pe(Se), d2, e2));
      }, Le = function(e2) {
        Se && (Me({ type: "MouseClick", payload: Se }), h && h(Pe(Se), we, e2));
      }, Re = t.useMemo(function() {
        if (z) {
          if (F) {
            var e2 = ke && ke || Ne;
            return Se && Se > e2 ? Se : e2;
          }
          return Se && Se || ke && ke || Ne;
        }
        return ke && ke || Ne;
      }, [z, F, Se, ke, Ne]);
      t.useEffect(function() {
        se.length > Ie && console.error("tooltipArray Array length is bigger then Icons Count length.");
      }, [se.length, Ie]);
      var We = t.useCallback(function(e2) {
        return Se && e2[we] || ke && e2[be] || x && e2[je];
      }, [Se, we, ke, be, x, je]), Te = t.useMemo(function() {
        return Se && Pe(Se) || ke && Pe(ke) || x && Pe(Ne);
      }, [Se, Pe, ke, x, Ne]);
      return e.jsxs("span", o({ className: l, style: { direction: "".concat(M ? "rtl" : "ltr") } }, { children: [e.jsxs("span", o({ className: "".concat(a, " ").concat(L), style: o({ cursor: w ? "" : "pointer" }, P), onPointerMove: w ? void 0 : Ae, onPointerEnter: w ? void 0 : function(e2) {
        f && f(e2), Ge && Ae(e2);
      }, onPointerLeave: w ? void 0 : function(e2) {
        Ge && Le(), Me({ type: "PointerLeave" }), m && m(e2);
      }, onClick: w ? void 0 : Le, "aria-hidden": "true" }, { children: [e.jsx("span", o({ className: "".concat(c, " ").concat(oe), style: o({ color: $ }, ee) }, { children: n([], Array(C), true).map(function(o2, n2) {
        var r3;
        return e.jsx(t.Fragment, { children: (null === (r3 = I[n2]) || void 0 === r3 ? void 0 : r3.icon) || Y || e.jsx(i, { SVGclassName: pe, SVGstyle: fe, SVGstorkeWidth: ge, SVGstrokeColor: _e, size: k }) }, n2);
      }) })), e.jsx("span", o({ className: "".concat(s, " ").concat(D), style: o((v = {}, v[M ? "right" : "left"] = 0, v.color = We(K) || H, v.transition = W ? "width .2s ease, color .2s ease" : "", v.width = "".concat(Re, "%"), v), U), title: "".concat(Se && Pe(Se) || Pe(Ne), " ").concat(ye, " ").concat(C) }, { children: n([], Array(C), true).map(function(o2, n2) {
        var r3;
        return e.jsx(t.Fragment, { children: (null === (r3 = I[n2]) || void 0 === r3 ? void 0 : r3.icon) || q || e.jsx(i, { SVGclassName: pe, SVGstyle: fe, SVGstorkeWidth: ge, SVGstrokeColor: _e, size: k }) }, n2);
      }) }))] })), ie && e.jsx("span", o({ className: "".concat(d, " ").concat(ue), style: o((p = {}, p[M ? "marginRight" : "marginLeft"] = 20, p), ce) }, { children: (se.length > 0 ? We(se) : Te) || le }))] }));
    };
  }
});

// app/src/components/utilities/utility.jsx
var import_axios = __toESM(require_axios2());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var url = "http://localhost:4000/api/v1";
async function sendRequestToBackend(method, route, data, primaryRoute) {
  try {
    const response = await (0, import_axios.default)({
      method,
      url: `${url}/${primaryRoute}${route ? `/${route}` : ""}`,
      withCredentials: true,
      data
    });
    return response;
  } catch (err) {
    throw err;
  }
}
async function Logout() {
  try {
    return await sendRequestToBackend("post", "logout", null, "users");
  } catch (err) {
    throw err;
  }
}

// app/src/components/hooks/swrhook.js
var import_axios2 = __toESM(require_axios2());

// node_modules/swr/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var noop = function() {
};
var UNDEFINED = noop();
var OBJECT = Object;
var isUndefined = function(v) {
  return v === UNDEFINED;
};
var isFunction = function(v) {
  return typeof v == "function";
};
var mergeObjects = function(a, b) {
  return OBJECT.assign({}, a, b);
};
var STR_UNDEFINED = "undefined";
var hasWindow = function() {
  return typeof window != STR_UNDEFINED;
};
var hasDocument = function() {
  return typeof document != STR_UNDEFINED;
};
var hasRequestAnimationFrame = function() {
  return hasWindow() && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
};
var table = /* @__PURE__ */ new WeakMap();
var counter = 0;
var stableHash = function(arg) {
  var type = typeof arg;
  var constructor = arg && arg.constructor;
  var isDate = constructor == Date;
  var result;
  var index;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      var keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index = keys.pop())) {
        if (!isUndefined(arg[index])) {
          result += index + ":" + stableHash(arg[index]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
var online = true;
var isOnline = function() {
  return online;
};
var hasWin = hasWindow();
var hasDoc = hasDocument();
var onWindowEvent = hasWin && window.addEventListener ? window.addEventListener.bind(window) : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener ? window.removeEventListener.bind(window) : noop;
var offDocumentEvent = hasDoc ? document.removeEventListener.bind(document) : noop;
var isVisible = function() {
  var visibilityState = hasDoc && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = function(callback) {
  onDocumentEvent("visibilitychange", callback);
  onWindowEvent("focus", callback);
  return function() {
    offDocumentEvent("visibilitychange", callback);
    offWindowEvent("focus", callback);
  };
};
var initReconnect = function(callback) {
  var onOnline = function() {
    online = true;
    callback();
  };
  var onOffline = function() {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return function() {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
var preset = {
  isOnline,
  isVisible
};
var defaultConfigOptions = {
  initFocus,
  initReconnect
};
var IS_SERVER = !hasWindow() || "Deno" in window;
var rAF = function(f) {
  return hasRequestAnimationFrame() ? window["requestAnimationFrame"](f) : setTimeout(f, 1);
};
var useIsomorphicLayoutEffect = IS_SERVER ? import_react.useEffect : import_react.useLayoutEffect;
var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
var slowConnection = !IS_SERVER && navigatorConnection && (["slow-2g", "2g"].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var serialize = function(key) {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  var args = [].concat(key);
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  var infoKey = key ? "$swr$" + key : "";
  return [key, args, infoKey];
};
var SWRGlobalState = /* @__PURE__ */ new WeakMap();
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var broadcastState = function(cache2, key, data, error, isValidating, revalidate, broadcast) {
  if (broadcast === void 0) {
    broadcast = true;
  }
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], FETCH = _a2[3];
  var revalidators = EVENT_REVALIDATORS[key];
  var updaters = STATE_UPDATERS[key];
  if (broadcast && updaters) {
    for (var i = 0; i < updaters.length; ++i) {
      updaters[i](data, error, isValidating);
    }
  }
  if (revalidate) {
    delete FETCH[key];
    if (revalidators && revalidators[0]) {
      return revalidators[0](MUTATE_EVENT).then(function() {
        return cache2.get(key);
      });
    }
  }
  return cache2.get(key);
};
var __timestamp = 0;
var getTimestamp = function() {
  return ++__timestamp;
};
var internalMutate = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return __awaiter(void 0, void 0, void 0, function() {
    var cache2, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, customOptimisticData, _a2, key, keyInfo, _b, MUTATION, data, error, beforeMutationTs, hasCustomOptimisticData, rollbackData, optimisticData, res;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          cache2 = args[0], _key = args[1], _data = args[2], _opts = args[3];
          options = typeof _opts === "boolean" ? { revalidate: _opts } : _opts || {};
          populateCache = isUndefined(options.populateCache) ? true : options.populateCache;
          revalidate = options.revalidate !== false;
          rollbackOnError = options.rollbackOnError !== false;
          customOptimisticData = options.optimisticData;
          _a2 = serialize(_key), key = _a2[0], keyInfo = _a2[2];
          if (!key)
            return [2];
          _b = SWRGlobalState.get(cache2), MUTATION = _b[2];
          if (args.length < 3) {
            return [2, broadcastState(cache2, key, cache2.get(key), UNDEFINED, UNDEFINED, revalidate, true)];
          }
          data = _data;
          beforeMutationTs = getTimestamp();
          MUTATION[key] = [beforeMutationTs, 0];
          hasCustomOptimisticData = !isUndefined(customOptimisticData);
          rollbackData = cache2.get(key);
          if (hasCustomOptimisticData) {
            optimisticData = isFunction(customOptimisticData) ? customOptimisticData(rollbackData) : customOptimisticData;
            cache2.set(key, optimisticData);
            broadcastState(cache2, key, optimisticData);
          }
          if (isFunction(data)) {
            try {
              data = data(cache2.get(key));
            } catch (err) {
              error = err;
            }
          }
          if (!(data && isFunction(data.then)))
            return [3, 2];
          return [
            4,
            data.catch(function(err) {
              error = err;
            })
          ];
        case 1:
          data = _c.sent();
          if (beforeMutationTs !== MUTATION[key][0]) {
            if (error)
              throw error;
            return [2, data];
          } else if (error && hasCustomOptimisticData && rollbackOnError) {
            populateCache = true;
            data = rollbackData;
            cache2.set(key, rollbackData);
          }
          _c.label = 2;
        case 2:
          if (populateCache) {
            if (!error) {
              if (isFunction(populateCache)) {
                data = populateCache(data, rollbackData);
              }
              cache2.set(key, data);
            }
            cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), { error }));
          }
          MUTATION[key][1] = getTimestamp();
          return [
            4,
            broadcastState(cache2, key, data, error, UNDEFINED, revalidate, !!populateCache)
          ];
        case 3:
          res = _c.sent();
          if (error)
            throw error;
          return [2, populateCache ? res : data];
      }
    });
  });
};
var revalidateAllKeys = function(revalidators, type) {
  for (var key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
var initCache = function(provider, options) {
  if (!SWRGlobalState.has(provider)) {
    var opts = mergeObjects(defaultConfigOptions, options);
    var EVENT_REVALIDATORS = {};
    var mutate2 = internalMutate.bind(UNDEFINED, provider);
    var unmount = noop;
    SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate2]);
    if (!IS_SERVER) {
      var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
      var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
      unmount = function() {
        releaseFocus_1 && releaseFocus_1();
        releaseReconnect_1 && releaseReconnect_1();
        SWRGlobalState.delete(provider);
      };
    }
    return [provider, mutate2, unmount];
  }
  return [provider, SWRGlobalState.get(provider)[4]];
};
var onErrorRetry = function(_, __, config, revalidate, opts) {
  var maxRetryCount = config.errorRetryCount;
  var currentRetryCount = opts.retryCount;
  var timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
var _a = initCache(/* @__PURE__ */ new Map());
var cache = _a[0];
var mutate = _a[1];
var defaultConfig = mergeObjects(
  {
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    errorRetryInterval: slowConnection ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: slowConnection ? 5e3 : 3e3,
    compare: function(currentData, newData) {
      return stableHash(currentData) == stableHash(newData);
    },
    isPaused: function() {
      return false;
    },
    cache,
    mutate,
    fallback: {}
  },
  preset
);
var mergeConfigs = function(a, b) {
  var v = mergeObjects(a, b);
  if (b) {
    var u1 = a.use, f1 = a.fallback;
    var u2 = b.use, f2 = b.fallback;
    if (u1 && u2) {
      v.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v.fallback = mergeObjects(f1, f2);
    }
  }
  return v;
};
var SWRConfigContext = (0, import_react.createContext)({});
var SWRConfig$1 = function(props) {
  var value = props.value;
  var extendedConfig = mergeConfigs((0, import_react.useContext)(SWRConfigContext), value);
  var provider = value && value.provider;
  var cacheContext = (0, import_react.useState)(function() {
    return provider ? initCache(provider(extendedConfig.cache || cache), value) : UNDEFINED;
  })[0];
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  useIsomorphicLayoutEffect(function() {
    return cacheContext ? cacheContext[2] : UNDEFINED;
  }, []);
  return (0, import_react.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};
var useStateWithDeps = function(state, unmountedRef) {
  var rerender = (0, import_react.useState)({})[1];
  var stateRef = (0, import_react.useRef)(state);
  var stateDependenciesRef = (0, import_react.useRef)({
    data: false,
    error: false,
    isValidating: false
  });
  var setState = (0, import_react.useCallback)(
    function(payload) {
      var shouldRerender = false;
      var currentState = stateRef.current;
      for (var _ in payload) {
        var k = _;
        if (currentState[k] !== payload[k]) {
          currentState[k] = payload[k];
          if (stateDependenciesRef.current[k]) {
            shouldRerender = true;
          }
        }
      }
      if (shouldRerender && !unmountedRef.current) {
        rerender({});
      }
    },
    []
  );
  useIsomorphicLayoutEffect(function() {
    stateRef.current = state;
  });
  return [stateRef, stateDependenciesRef.current, setState];
};
var normalize = function(args) {
  return isFunction(args[1]) ? [args[0], args[1], args[2] || {}] : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};
var useSWRConfig = function() {
  return mergeObjects(defaultConfig, (0, import_react.useContext)(SWRConfigContext));
};
var withArgs = function(hook) {
  return function useSWRArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var fallbackConfig = useSWRConfig();
    var _a2 = normalize(args), key = _a2[0], fn = _a2[1], _config = _a2[2];
    var config = mergeConfigs(fallbackConfig, _config);
    var next = hook;
    var use = config.use;
    if (use) {
      for (var i = use.length; i-- > 0; ) {
        next = use[i](next);
      }
    }
    return next(key, fn || config.fetcher, config);
  };
};
var subscribeCallback = function(key, callbacks, callback) {
  var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return function() {
    var index = keyedRevalidators.indexOf(callback);
    if (index >= 0) {
      keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
var WITH_DEDUPE = { dedupe: true };
var useSWRHandler = function(_key, fetcher2, config) {
  var cache2 = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], MUTATION = _a2[2], FETCH = _a2[3];
  var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
  var initialMountedRef = (0, import_react.useRef)(false);
  var unmountedRef = (0, import_react.useRef)(false);
  var keyRef = (0, import_react.useRef)(key);
  var fetcherRef = (0, import_react.useRef)(fetcher2);
  var configRef = (0, import_react.useRef)(config);
  var getConfig = function() {
    return configRef.current;
  };
  var isActive = function() {
    return getConfig().isVisible() && getConfig().isOnline();
  };
  var patchFetchInfo = function(info2) {
    return cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), info2));
  };
  var cached = cache2.get(key);
  var fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  var data = isUndefined(cached) ? fallback : cached;
  var info = cache2.get(keyInfo) || {};
  var error = info.error;
  var isInitialMount = !initialMountedRef.current;
  var shouldRevalidate = function() {
    if (isInitialMount && !isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused())
      return false;
    if (suspense)
      return isUndefined(data) ? false : config.revalidateIfStale;
    return isUndefined(data) || config.revalidateIfStale;
  };
  var resolveValidating = function() {
    if (!key || !fetcher2)
      return false;
    if (info.isValidating)
      return true;
    return isInitialMount && shouldRevalidate();
  };
  var isValidating = resolveValidating();
  var _c = useStateWithDeps({
    data,
    error,
    isValidating
  }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
  var revalidate = (0, import_react.useCallback)(
    function(revalidateOpts) {
      return __awaiter(void 0, void 0, void 0, function() {
        var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
        var _a3;
        return __generator(this, function(_b2) {
          switch (_b2.label) {
            case 0:
              currentFetcher = fetcherRef.current;
              if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
                return [2, false];
              }
              loading = true;
              opts = revalidateOpts || {};
              shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
              isCurrentKeyMounted = function() {
                return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
              };
              cleanupState = function() {
                var requestInfo = FETCH[key];
                if (requestInfo && requestInfo[1] === startAt) {
                  delete FETCH[key];
                }
              };
              newState = { isValidating: false };
              finishRequestAndUpdateState = function() {
                patchFetchInfo({ isValidating: false });
                if (isCurrentKeyMounted()) {
                  setState(newState);
                }
              };
              patchFetchInfo({
                isValidating: true
              });
              setState({ isValidating: true });
              _b2.label = 1;
            case 1:
              _b2.trys.push([1, 3, , 4]);
              if (shouldStartNewRequest) {
                broadcastState(cache2, key, stateRef.current.data, stateRef.current.error, true);
                if (config.loadingTimeout && !cache2.get(key)) {
                  setTimeout(function() {
                    if (loading && isCurrentKeyMounted()) {
                      getConfig().onLoadingSlow(key, config);
                    }
                  }, config.loadingTimeout);
                }
                FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
              }
              _a3 = FETCH[key], newData = _a3[0], startAt = _a3[1];
              return [4, newData];
            case 2:
              newData = _b2.sent();
              if (shouldStartNewRequest) {
                setTimeout(cleanupState, config.dedupingInterval);
              }
              if (!FETCH[key] || FETCH[key][1] !== startAt) {
                if (shouldStartNewRequest) {
                  if (isCurrentKeyMounted()) {
                    getConfig().onDiscarded(key);
                  }
                }
                return [2, false];
              }
              patchFetchInfo({
                error: UNDEFINED
              });
              newState.error = UNDEFINED;
              mutationInfo = MUTATION[key];
              if (!isUndefined(mutationInfo) && (startAt <= mutationInfo[0] || startAt <= mutationInfo[1] || mutationInfo[1] === 0)) {
                finishRequestAndUpdateState();
                if (shouldStartNewRequest) {
                  if (isCurrentKeyMounted()) {
                    getConfig().onDiscarded(key);
                  }
                }
                return [2, false];
              }
              if (!compare(stateRef.current.data, newData)) {
                newState.data = newData;
              } else {
                newState.data = stateRef.current.data;
              }
              if (!compare(cache2.get(key), newData)) {
                cache2.set(key, newData);
              }
              if (shouldStartNewRequest) {
                if (isCurrentKeyMounted()) {
                  getConfig().onSuccess(newData, key, config);
                }
              }
              return [3, 4];
            case 3:
              err_1 = _b2.sent();
              cleanupState();
              if (!getConfig().isPaused()) {
                patchFetchInfo({ error: err_1 });
                newState.error = err_1;
                if (shouldStartNewRequest && isCurrentKeyMounted()) {
                  getConfig().onError(err_1, key, config);
                  if (typeof config.shouldRetryOnError === "boolean" && config.shouldRetryOnError || isFunction(config.shouldRetryOnError) && config.shouldRetryOnError(err_1)) {
                    if (isActive()) {
                      getConfig().onErrorRetry(err_1, key, config, revalidate, {
                        retryCount: (opts.retryCount || 0) + 1,
                        dedupe: true
                      });
                    }
                  }
                }
              }
              return [3, 4];
            case 4:
              loading = false;
              finishRequestAndUpdateState();
              if (isCurrentKeyMounted() && shouldStartNewRequest) {
                broadcastState(cache2, key, newState.data, newState.error, false);
              }
              return [2, true];
          }
        });
      });
    },
    [key]
  );
  var boundMutate = (0, import_react.useCallback)(
    internalMutate.bind(UNDEFINED, cache2, function() {
      return keyRef.current;
    }),
    []
  );
  useIsomorphicLayoutEffect(function() {
    fetcherRef.current = fetcher2;
    configRef.current = config;
  });
  useIsomorphicLayoutEffect(function() {
    if (!key)
      return;
    var keyChanged = key !== keyRef.current;
    var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    var onStateUpdate = function(updatedData, updatedError, updatedIsValidating) {
      setState(mergeObjects(
        {
          error: updatedError,
          isValidating: updatedIsValidating
        },
        compare(stateRef.current.data, updatedData) ? UNDEFINED : {
          data: updatedData
        }
      ));
    };
    var nextFocusRevalidatedAt = 0;
    var onRevalidate = function(type) {
      if (type == FOCUS_EVENT) {
        var now = Date.now();
        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == MUTATE_EVENT) {
        return revalidate();
      }
      return;
    };
    var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
    var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    if (keyChanged) {
      setState({
        data,
        error,
        isValidating
      });
    }
    if (shouldRevalidate()) {
      if (isUndefined(data) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return function() {
      unmountedRef.current = true;
      unsubUpdate();
      unsubEvents();
    };
  }, [key, revalidate]);
  useIsomorphicLayoutEffect(function() {
    var timer;
    function next() {
      var interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (!stateRef.current.error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return function() {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
  (0, import_react.useDebugValue)(data);
  if (suspense && isUndefined(data) && key) {
    fetcherRef.current = fetcher2;
    configRef.current = config;
    unmountedRef.current = false;
    throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return data;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    }
  };
};
var SWRConfig = OBJECT.defineProperty(SWRConfig$1, "default", {
  value: defaultConfig
});
var useSWR = withArgs(useSWRHandler);

// app/src/components/hooks/swrhook.js
var url2 = "http://localhost:3000/api/v1";
var fetcher = (url3) => import_axios2.default.get(url3, { withCredentials: true }).then((res) => res.data);
function useUser() {
  const { data, error } = useSWR(`${url2}/users/verify`, fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  };
}

// node_modules/react-router-dom/dist/index.js
var React2 = __toESM(require_react());

// node_modules/@remix-run/router/dist/router.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to = typeof toArg === "string" ? parsePath(toArg) : _extends({}, toArg);
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

// node_modules/react-router/dist/index.js
var React = __toESM(require_react());
function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
var is = typeof Object.is === "function" ? Object.is : isPolyfill;
var {
  useState: useState3,
  useEffect: useEffect3,
  useLayoutEffect: useLayoutEffect3,
  useDebugValue: useDebugValue2
} = React;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  if (true) {
    if (!didWarnOld18Alpha) {
      if ("startTransition" in React) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
      }
    }
  }
  const value = getSnapshot();
  if (true) {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();
      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  }
  const [{
    inst
  }, forceUpdate] = useState3({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect3(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect3(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue2(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isServerEnvironment = !canUseDOM;
var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
var useSyncExternalStore = "useSyncExternalStore" in React ? ((module) => module.useSyncExternalStore)(React) : shim;
var DataStaticRouterContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  DataStaticRouterContext.displayName = "DataStaticRouterContext";
}
var DataRouterContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  DataRouterContext.displayName = "DataRouter";
}
var DataRouterStateContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  DataRouterStateContext.displayName = "DataRouterState";
}
var AwaitContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  AwaitContext.displayName = "Await";
}
var NavigationContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  NavigationContext.displayName = "Navigation";
}
var LocationContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  LocationContext.displayName = "Location";
}
var RouteContext = /* @__PURE__ */ React.createContext({
  outlet: null,
  matches: []
});
if (true) {
  RouteContext.displayName = "Route";
}
var RouteErrorContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  RouteErrorContext.displayName = "RouteError";
}
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? true ? invariant(
    false,
    "useHref() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = React.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return React.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? true ? invariant(
    false,
    "useLocation() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  return React.useContext(LocationContext).location;
}
function useMatch(pattern) {
  !useInRouterContext() ? true ? invariant(
    false,
    "useMatch() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let {
    pathname
  } = useLocation();
  return React.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || !match.route.index && match.pathnameBase !== matches[index - 1].pathnameBase);
}
function useNavigate() {
  !useInRouterContext() ? true ? invariant(
    false,
    "useNavigate() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = React.useContext(NavigationContext);
  let {
    matches
  } = React.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  let activeRef = React.useRef(false);
  React.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = React.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    true ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.") : void 0;
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = React.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  return React.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseLoaderData"] = "useLoaderData";
  DataRouterHook2["UseActionData"] = "useActionData";
  DataRouterHook2["UseRouteError"] = "useRouteError";
  DataRouterHook2["UseNavigation"] = "useNavigation";
  DataRouterHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterHook2["UseMatches"] = "useMatches";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));
function useDataRouterState(hookName) {
  let state = React.useContext(DataRouterStateContext);
  !state ? true ? invariant(false, hookName + " must be used within a DataRouterStateContext") : invariant(false) : void 0;
  return state;
}
function useNavigation() {
  let state = useDataRouterState(DataRouterHook.UseNavigation);
  return state.navigation;
}
function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterHook.UseMatches);
  return React.useMemo(() => matches.map((match) => {
    let {
      pathname,
      params
    } = match;
    return {
      id: match.route.id,
      pathname,
      params,
      data: loaderData[match.route.id],
      handle: match.route.handle
    };
  }), [matches, loaderData]);
}
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? true ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = React.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  true ? warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ React.createElement(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
var neverSettledPromise = new Promise(() => {
});

// node_modules/react-router-dom/dist/index.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;
  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);
    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    }
    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form);
    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;
    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();
      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }
  let {
    protocol,
    host
  } = window.location;
  let url3 = new URL(action, protocol + "//" + host);
  return {
    url: url3,
    method,
    encType,
    formData
  };
}
var _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
var _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
var _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative"];
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = React2.useState({
    action: history.action,
    location: history.location
  });
  React2.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ React2.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
var Link = /* @__PURE__ */ React2.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ React2.createElement("a", _extends2({}, rest, {
    href,
    onClick: reloadDocument ? onClick : handleClick,
    ref,
    target
  }));
});
if (true) {
  Link.displayName = "Link";
}
var NavLink = /* @__PURE__ */ React2.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
  let path = useResolvedPath(to);
  let match = useMatch({
    path: path.pathname,
    end,
    caseSensitive
  });
  let routerState = React2.useContext(DataRouterStateContext);
  let nextLocation = routerState == null ? void 0 : routerState.navigation.location;
  let nextPath = useResolvedPath(nextLocation || "");
  let nextMatch = React2.useMemo(() => nextLocation ? matchPath({
    path: path.pathname,
    end,
    caseSensitive
  }, nextPath.pathname) : null, [nextLocation, path.pathname, caseSensitive, end, nextPath.pathname]);
  let isPending = nextMatch != null;
  let isActive = match != null;
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /* @__PURE__ */ React2.createElement(Link, _extends2({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});
if (true) {
  NavLink.displayName = "NavLink";
}
var Form = /* @__PURE__ */ React2.forwardRef((props, ref) => {
  return /* @__PURE__ */ React2.createElement(FormImpl, _extends2({}, props, {
    ref
  }));
});
if (true) {
  Form.displayName = "Form";
}
var FormImpl = /* @__PURE__ */ React2.forwardRef((_ref6, forwardedRef) => {
  let {
    reloadDocument,
    replace,
    method = defaultMethod,
    action,
    onSubmit,
    fetcherKey,
    routeId,
    relative
  } = _ref6, props = _objectWithoutPropertiesLoose(_ref6, _excluded3);
  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });
  let submitHandler = (event) => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented)
      return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    submit(submitter || event.currentTarget, {
      method,
      replace,
      relative
    });
  };
  return /* @__PURE__ */ React2.createElement("form", _extends2({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (true) {
  Form.displayName = "Form";
}
function ScrollRestoration(_ref7) {
  let {
    getKey,
    storageKey
  } = _ref7;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}
if (true) {
  ScrollRestoration.displayName = "ScrollRestoration";
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return React2.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
function useSubmitImpl(fetcherKey, routeId) {
  let dataRouterContext = React2.useContext(DataRouterContext);
  !dataRouterContext ? true ? invariant(false, "useSubmitImpl must be used within a Data Router") : invariant(false) : void 0;
  let {
    router
  } = dataRouterContext;
  let defaultAction = useFormAction();
  return React2.useCallback(function(target, options) {
    if (options === void 0) {
      options = {};
    }
    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    }
    let {
      method,
      encType,
      formData,
      url: url3
    } = getFormSubmissionInfo(target, defaultAction, options);
    let href = url3.pathname + url3.search;
    let opts = {
      replace: options.replace,
      formData,
      formMethod: method,
      formEncType: encType
    };
    if (fetcherKey) {
      !(routeId != null) ? true ? invariant(false, "No routeId available for useFetcher()") : invariant(false) : void 0;
      router.fetch(fetcherKey, routeId, href, opts);
    } else {
      router.navigate(href, opts);
    }
  }, [defaultAction, router, fetcherKey, routeId]);
}
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let routeContext = React2.useContext(RouteContext);
  !routeContext ? true ? invariant(false, "useFormAction must be used inside a RouteContext") : invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1);
  let resolvedAction = action != null ? action : ".";
  let path = useResolvedPath(resolvedAction, {
    relative
  });
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    path.hash = location.hash;
    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  return createPath(path);
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3;
  let location = useLocation();
  let matches = useMatches();
  let navigation = useNavigation();
  let dataRouterContext = React2.useContext(DataRouterContext);
  !dataRouterContext ? true ? invariant(false, "useScrollRestoration must be used within a DataRouterContext") : invariant(false) : void 0;
  let {
    router
  } = dataRouterContext;
  let state = React2.useContext(DataRouterStateContext);
  !(router != null && state != null) ? true ? invariant(false, "useScrollRestoration must be used within a DataRouterStateContext") : invariant(false) : void 0;
  let {
    restoreScrollPosition,
    preventScrollReset
  } = state;
  React2.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  useBeforeUnload(React2.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }
    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches]));
  React2.useLayoutEffect(() => {
    try {
      let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
      if (sessionPositions) {
        savedScrollPositions = JSON.parse(sessionPositions);
      }
    } catch (e) {
    }
  }, [storageKey]);
  React2.useLayoutEffect(() => {
    let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey);
    return () => disableScrollRestoration && disableScrollRestoration();
  }, [router, getKey]);
  React2.useLayoutEffect(() => {
    if (restoreScrollPosition === false) {
      return;
    }
    if (typeof restoreScrollPosition === "number") {
      window.scrollTo(0, restoreScrollPosition);
      return;
    }
    if (location.hash) {
      let el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    if (preventScrollReset === true) {
      return;
    }
    window.scrollTo(0, 0);
  }, [location, restoreScrollPosition, preventScrollReset]);
}
function useBeforeUnload(callback) {
  React2.useEffect(() => {
    window.addEventListener("beforeunload", callback);
    return () => {
      window.removeEventListener("beforeunload", callback);
    };
  }, [callback]);
}

// app/src/components/Button.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ButtonLink({ link, title, nameClass, icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
    className: `anchor ${nameClass ? nameClass : ""}`,
    to: link,
    preventScrollReset: true,
    children: title
  }, void 0, false, {
    fileName: "app/src/components/Button.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
function Button({ msg, isDisabled, nameClass, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    className: `btn ${nameClass ? `btn__${nameClass}` : ""}`,
    disabled: isDisabled,
    type: "submit",
    onClick,
    children: msg
  }, void 0, false, {
    fileName: "app/src/components/Button.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// node_modules/react-icons/lib/esm/iconBase.js
var import_react3 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react2 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react2.default.createContext && import_react2.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react3.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react3.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react3.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react3.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react3.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/bs/index.esm.js
function BsCart(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" } }] })(props);
}
function BsCashStack(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" } }, { "tag": "path", "attr": { "d": "M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" } }] })(props);
}

// node_modules/react-toastify/dist/react-toastify.esm.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// node_modules/react-toastify/dist/react-toastify.esm.mjs
function isNum(v) {
  return typeof v === "number" && !isNaN(v);
}
function isBool(v) {
  return typeof v === "boolean";
}
function isStr(v) {
  return typeof v === "string";
}
function isFn(v) {
  return typeof v === "function";
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
  return toastId != null;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
function canBeRendered(content) {
  return (0, import_react4.isValidElement)(content) || isStr(content) || isFn(content) || isNum(content);
}
var POSITION = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
};
var TYPE = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
};
function collapseToast(node, done, duration) {
  if (duration === void 0) {
    duration = 300;
  }
  const {
    scrollHeight,
    style
  } = node;
  requestAnimationFrame(() => {
    style.minHeight = "initial";
    style.height = scrollHeight + "px";
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(() => {
      style.height = "0";
      style.padding = "0";
      style.margin = "0";
      setTimeout(done, duration);
    });
  });
}
function cssTransition(_ref) {
  let {
    enter,
    exit,
    appendPosition = false,
    collapse = true,
    collapseDuration = 300
  } = _ref;
  return function ToastTransition(_ref2) {
    let {
      children,
      position,
      preventExitTransition,
      done,
      nodeRef,
      isIn
    } = _ref2;
    const enterClassName = appendPosition ? enter + "--" + position : enter;
    const exitClassName = appendPosition ? exit + "--" + position : exit;
    const animationStep = (0, import_react4.useRef)(
      0
    );
    (0, import_react4.useLayoutEffect)(() => {
      const node = nodeRef.current;
      const classToToken = enterClassName.split(" ");
      const onEntered = (e) => {
        if (e.target !== nodeRef.current)
          return;
        node.dispatchEvent(new Event(
          "d"
        ));
        node.removeEventListener("animationend", onEntered);
        node.removeEventListener("animationcancel", onEntered);
        if (animationStep.current === 0 && e.type !== "animationcancel") {
          node.classList.remove(...classToToken);
        }
      };
      const onEnter = () => {
        node.classList.add(...classToToken);
        node.addEventListener("animationend", onEntered);
        node.addEventListener("animationcancel", onEntered);
      };
      onEnter();
    }, []);
    (0, import_react4.useEffect)(() => {
      const node = nodeRef.current;
      const onExited = () => {
        node.removeEventListener("animationend", onExited);
        collapse ? collapseToast(node, done, collapseDuration) : done();
      };
      const onExit = () => {
        animationStep.current = 1;
        node.className += " " + exitClassName;
        node.addEventListener("animationend", onExited);
      };
      if (!isIn)
        preventExitTransition ? onExited() : onExit();
    }, [isIn]);
    return import_react4.default.createElement(import_react4.default.Fragment, null, children);
  };
}
function toToastItem(toast2, status) {
  return {
    content: toast2.content,
    containerId: toast2.props.containerId,
    id: toast2.props.toastId,
    theme: toast2.props.theme,
    type: toast2.props.type,
    data: toast2.props.data || {},
    isLoading: toast2.props.isLoading,
    icon: toast2.props.icon,
    status
  };
}
var eventManager = {
  list: /* @__PURE__ */ new Map(),
  emitQueue: /* @__PURE__ */ new Map(),
  on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off(event, callback) {
    if (callback) {
      const cb = this.list.get(event).filter((cb2) => cb2 !== callback);
      this.list.set(event, cb);
      return this;
    }
    this.list.delete(event);
    return this;
  },
  cancelEmit(event) {
    const timers = this.emitQueue.get(event);
    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue.delete(event);
    }
    return this;
  },
  emit(event) {
    this.list.has(event) && this.list.get(event).forEach((callback) => {
      const timer = setTimeout(() => {
        callback(...[].slice.call(arguments, 1));
      }, 0);
      this.emitQueue.has(event) || this.emitQueue.set(event, []);
      this.emitQueue.get(event).push(timer);
    });
  }
};
var Svg = (_ref) => {
  let {
    theme,
    type,
    ...rest
  } = _ref;
  return import_react4.default.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: theme === "colored" ? "currentColor" : "var(--toastify-icon-color-" + type + ")",
    ...rest
  });
};
function Warning(props) {
  return import_react4.default.createElement(Svg, {
    ...props
  }, import_react4.default.createElement("path", {
    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }));
}
function Info(props) {
  return import_react4.default.createElement(Svg, {
    ...props
  }, import_react4.default.createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }));
}
function Success(props) {
  return import_react4.default.createElement(Svg, {
    ...props
  }, import_react4.default.createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }));
}
function Error2(props) {
  return import_react4.default.createElement(Svg, {
    ...props
  }, import_react4.default.createElement("path", {
    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }));
}
function Spinner() {
  return import_react4.default.createElement("div", {
    className: "Toastify__spinner"
  });
}
var Icons = {
  info: Info,
  warning: Warning,
  success: Success,
  error: Error2,
  spinner: Spinner
};
var maybeIcon = (type) => type in Icons;
function getIcon(_ref2) {
  let {
    theme,
    type,
    isLoading,
    icon
  } = _ref2;
  let Icon = null;
  const iconProps = {
    theme,
    type
  };
  if (icon === false)
    ;
  else if (isFn(icon)) {
    Icon = icon(iconProps);
  } else if ((0, import_react4.isValidElement)(icon)) {
    Icon = (0, import_react4.cloneElement)(icon, iconProps);
  } else if (isStr(icon) || isNum(icon)) {
    Icon = icon;
  } else if (isLoading) {
    Icon = Icons.spinner();
  } else if (maybeIcon(type)) {
    Icon = Icons[type](iconProps);
  }
  return Icon;
}
function useToastContainer(props) {
  const [, forceUpdate] = (0, import_react4.useReducer)((x) => x + 1, 0);
  const [toastIds, setToastIds] = (0, import_react4.useState)([]);
  const containerRef = (0, import_react4.useRef)(null);
  const toastToRender = (0, import_react4.useRef)(/* @__PURE__ */ new Map()).current;
  const isToastActive = (id) => toastIds.indexOf(id) !== -1;
  const instance = (0, import_react4.useRef)({
    toastKey: 1,
    displayedToast: 0,
    count: 0,
    queue: [],
    props,
    containerId: null,
    isToastActive,
    getToast: (id) => toastToRender.get(id)
  }).current;
  (0, import_react4.useEffect)(() => {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(
      3
    ).on(
      0,
      buildToast
    ).on(
      1,
      (toastId) => containerRef.current && removeToast(toastId)
    ).on(
      5,
      clearWaitingQueue
    ).emit(
      2,
      instance
    );
    return () => {
      toastToRender.clear();
      eventManager.emit(
        3,
        instance
      );
    };
  }, []);
  (0, import_react4.useEffect)(() => {
    instance.props = props;
    instance.isToastActive = isToastActive;
    instance.displayedToast = toastIds.length;
  });
  function clearWaitingQueue(_ref) {
    let {
      containerId
    } = _ref;
    const {
      limit
    } = instance.props;
    if (limit && (!containerId || instance.containerId === containerId)) {
      instance.count -= instance.queue.length;
      instance.queue = [];
    }
  }
  function removeToast(toastId) {
    setToastIds((state) => isToastIdValid(toastId) ? state.filter((id) => id !== toastId) : []);
  }
  function dequeueToast() {
    const {
      toastContent,
      toastProps,
      staleId
    } = instance.queue.shift();
    appendToast(toastContent, toastProps, staleId);
  }
  function isNotValid(options) {
    return !containerRef.current || instance.props.enableMultiContainer && options.containerId !== instance.props.containerId || toastToRender.has(options.toastId) && options.updateId == null;
  }
  function buildToast(content, _ref2) {
    let {
      delay,
      staleId,
      ...options
    } = _ref2;
    if (!canBeRendered(content) || isNotValid(options))
      return;
    const {
      toastId,
      updateId,
      data
    } = options;
    const {
      props: props2
    } = instance;
    const closeToast = () => removeToast(toastId);
    const isNotAnUpdate = updateId == null;
    if (isNotAnUpdate)
      instance.count++;
    const toastProps = {
      toastId,
      updateId,
      data,
      containerId: options.containerId,
      isLoading: options.isLoading,
      theme: options.theme || props2.theme,
      icon: options.icon != null ? options.icon : props2.icon,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast,
      closeButton: options.closeButton,
      rtl: props2.rtl,
      position: options.position || props2.position,
      transition: options.transition || props2.transition,
      className: parseClassName(options.className || props2.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props2.bodyClassName),
      style: options.style || props2.toastStyle,
      bodyStyle: options.bodyStyle || props2.bodyStyle,
      onClick: options.onClick || props2.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props2.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props2.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props2.draggable,
      draggablePercent: options.draggablePercent || props2.draggablePercent,
      draggableDirection: options.draggableDirection || props2.draggableDirection,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props2.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props2.progressClassName),
      progressStyle: options.progressStyle || props2.progressStyle,
      autoClose: options.isLoading ? false : getAutoCloseDelay(options.autoClose, props2.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props2.hideProgressBar,
      progress: options.progress,
      role: options.role || props2.role,
      deleteToast() {
        const removed = toToastItem(toastToRender.get(toastId), "removed");
        toastToRender.delete(toastId);
        eventManager.emit(
          4,
          removed
        );
        const queueLen = instance.queue.length;
        instance.count = isToastIdValid(toastId) ? instance.count - 1 : instance.count - instance.displayedToast;
        if (instance.count < 0)
          instance.count = 0;
        if (queueLen > 0) {
          const freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;
          if (queueLen === 1 || freeSlot === 1) {
            instance.displayedToast++;
            dequeueToast();
          } else {
            const toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
            instance.displayedToast = toDequeue;
            for (let i = 0; i < toDequeue; i++)
              dequeueToast();
          }
        } else {
          forceUpdate();
        }
      }
    };
    toastProps.iconOut = getIcon(toastProps);
    if (isFn(options.onOpen))
      toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose))
      toastProps.onClose = options.onClose;
    toastProps.closeButton = props2.closeButton;
    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      toastProps.closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      toastProps.closeButton = canBeRendered(props2.closeButton) ? props2.closeButton : true;
    }
    let toastContent = content;
    if ((0, import_react4.isValidElement)(content) && !isStr(content.type)) {
      toastContent = (0, import_react4.cloneElement)(content, {
        closeToast,
        toastProps,
        data
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast,
        toastProps,
        data
      });
    }
    if (props2.limit && props2.limit > 0 && instance.count > props2.limit && isNotAnUpdate) {
      instance.queue.push({
        toastContent,
        toastProps,
        staleId
      });
    } else if (isNum(delay)) {
      setTimeout(() => {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }
  function appendToast(content, toastProps, staleId) {
    const {
      toastId
    } = toastProps;
    if (staleId)
      toastToRender.delete(staleId);
    const toast2 = {
      content,
      props: toastProps
    };
    toastToRender.set(toastId, toast2);
    setToastIds((state) => [...state, toastId].filter((id) => id !== staleId));
    eventManager.emit(
      4,
      toToastItem(toast2, toast2.props.updateId == null ? "added" : "updated")
    );
  }
  function getToastToRender(cb) {
    const toRender = /* @__PURE__ */ new Map();
    const collection = Array.from(toastToRender.values());
    if (props.newestOnTop)
      collection.reverse();
    collection.forEach((toast2) => {
      const {
        position
      } = toast2.props;
      toRender.has(position) || toRender.set(position, []);
      toRender.get(position).push(toast2);
    });
    return Array.from(toRender, (p) => cb(p[0], p[1]));
  }
  return {
    getToastToRender,
    containerRef,
    isToastActive
  };
}
function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function useToast(props) {
  const [isRunning, setIsRunning] = (0, import_react4.useState)(false);
  const [preventExitTransition, setPreventExitTransition] = (0, import_react4.useState)(false);
  const toastRef = (0, import_react4.useRef)(null);
  const drag = (0, import_react4.useRef)({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null,
    didMove: false
  }).current;
  const syncProps = (0, import_react4.useRef)(props);
  const {
    autoClose,
    pauseOnHover,
    closeToast,
    onClick,
    closeOnClick
  } = props;
  (0, import_react4.useEffect)(() => {
    syncProps.current = props;
  });
  (0, import_react4.useEffect)(() => {
    if (toastRef.current)
      toastRef.current.addEventListener(
        "d",
        playToast,
        {
          once: true
        }
      );
    if (isFn(props.onOpen))
      props.onOpen((0, import_react4.isValidElement)(props.children) && props.children.props);
    return () => {
      const props2 = syncProps.current;
      if (isFn(props2.onClose))
        props2.onClose((0, import_react4.isValidElement)(props2.children) && props2.children.props);
    };
  }, []);
  (0, import_react4.useEffect)(() => {
    props.pauseOnFocusLoss && bindFocusEvents();
    return () => {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);
  function onDragStart(e) {
    if (props.draggable) {
      bindDragEvents();
      const toast2 = toastRef.current;
      drag.canCloseOnClick = true;
      drag.canDrag = true;
      drag.boundingRect = toast2.getBoundingClientRect();
      toast2.style.transition = "";
      drag.x = getX(e.nativeEvent);
      drag.y = getY(e.nativeEvent);
      if (props.draggableDirection === "x") {
        drag.start = drag.x;
        drag.removalDistance = toast2.offsetWidth * (props.draggablePercent / 100);
      } else {
        drag.start = drag.y;
        drag.removalDistance = toast2.offsetHeight * (props.draggablePercent === 80 ? props.draggablePercent * 1.5 : props.draggablePercent / 100);
      }
    }
  }
  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      const {
        top,
        bottom,
        left,
        right
      } = drag.boundingRect;
      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }
  function playToast() {
    setIsRunning(true);
  }
  function pauseToast() {
    setIsRunning(false);
  }
  function bindFocusEvents() {
    if (!document.hasFocus())
      pauseToast();
    window.addEventListener("focus", playToast);
    window.addEventListener("blur", pauseToast);
  }
  function unbindFocusEvents() {
    window.removeEventListener("focus", playToast);
    window.removeEventListener("blur", pauseToast);
  }
  function bindDragEvents() {
    drag.didMove = false;
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragEnd);
    document.addEventListener("touchmove", onDragMove);
    document.addEventListener("touchend", onDragEnd);
  }
  function unbindDragEvents() {
    document.removeEventListener("mousemove", onDragMove);
    document.removeEventListener("mouseup", onDragEnd);
    document.removeEventListener("touchmove", onDragMove);
    document.removeEventListener("touchend", onDragEnd);
  }
  function onDragMove(e) {
    const toast2 = toastRef.current;
    if (drag.canDrag && toast2) {
      drag.didMove = true;
      if (isRunning)
        pauseToast();
      drag.x = getX(e);
      drag.y = getY(e);
      if (props.draggableDirection === "x") {
        drag.delta = drag.x - drag.start;
      } else {
        drag.delta = drag.y - drag.start;
      }
      if (drag.start !== drag.x)
        drag.canCloseOnClick = false;
      toast2.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
      toast2.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
    }
  }
  function onDragEnd() {
    unbindDragEvents();
    const toast2 = toastRef.current;
    if (drag.canDrag && drag.didMove && toast2) {
      drag.canDrag = false;
      if (Math.abs(drag.delta) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }
      toast2.style.transition = "transform 0.2s, opacity 0.2s";
      toast2.style.transform = "translate" + props.draggableDirection + "(0)";
      toast2.style.opacity = "1";
    }
  }
  const eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };
  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  }
  if (closeOnClick) {
    eventHandlers.onClick = (e) => {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }
  return {
    playToast,
    pauseToast,
    isRunning,
    preventExitTransition,
    toastRef,
    eventHandlers
  };
}
function CloseButton(_ref) {
  let {
    closeToast,
    theme,
    ariaLabel = "close"
  } = _ref;
  return import_react4.default.createElement("button", {
    className: "Toastify__close-button Toastify__close-button--" + theme,
    type: "button",
    onClick: (e) => {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, import_react4.default.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, import_react4.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}
function ProgressBar(_ref) {
  let {
    delay,
    isRunning,
    closeToast,
    type,
    hide,
    className,
    style: userStyle,
    controlledProgress,
    progress,
    rtl,
    isIn,
    theme
  } = _ref;
  const style = {
    ...userStyle,
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? "running" : "paused",
    opacity: hide ? 0 : 1
  };
  if (controlledProgress)
    style.transform = "scaleX(" + progress + ")";
  const defaultClassName = clsx_m_default("Toastify__progress-bar", controlledProgress ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--" + theme, "Toastify__progress-bar--" + type, {
    ["Toastify__progress-bar--rtl"]: rtl
  });
  const classNames = isFn(className) ? className({
    rtl,
    type,
    defaultClassName
  }) : clsx_m_default(defaultClassName, className);
  const animationEvent = {
    [controlledProgress && progress >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: controlledProgress && progress < 1 ? null : () => {
      isIn && closeToast();
    }
  };
  return import_react4.default.createElement("div", {
    role: "progressbar",
    "aria-hidden": hide ? "true" : "false",
    "aria-label": "notification timer",
    className: classNames,
    style,
    ...animationEvent
  });
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};
var Toast = (props) => {
  const {
    isRunning,
    preventExitTransition,
    toastRef,
    eventHandlers
  } = useToast(props);
  const {
    closeButton,
    children,
    autoClose,
    onClick,
    type,
    hideProgressBar,
    closeToast,
    transition: Transition,
    position,
    className,
    style,
    bodyClassName,
    bodyStyle,
    progressClassName,
    progressStyle,
    updateId,
    role,
    progress,
    rtl,
    toastId,
    deleteToast,
    isIn,
    isLoading,
    iconOut,
    theme
  } = props;
  const defaultClassName = clsx_m_default("Toastify__toast", "Toastify__toast-theme--" + theme, "Toastify__toast--" + type, {
    ["Toastify__toast--rtl"]: rtl
  });
  const cssClasses = isFn(className) ? className({
    rtl,
    position,
    type,
    defaultClassName
  }) : clsx_m_default(defaultClassName, className);
  const isProgressControlled = !!progress;
  const closeButtonProps = {
    closeToast,
    type,
    theme
  };
  let Close = null;
  if (closeButton === false)
    ;
  else if (isFn(closeButton)) {
    Close = closeButton(closeButtonProps);
  } else if (import_react4.default.isValidElement(closeButton)) {
    Close = import_react4.default.cloneElement(closeButton, closeButtonProps);
  } else {
    Close = CloseButton(closeButtonProps);
  }
  return import_react4.default.createElement(Transition, {
    isIn,
    done: deleteToast,
    position,
    preventExitTransition,
    nodeRef: toastRef
  }, import_react4.default.createElement("div", {
    id: toastId,
    onClick,
    className: cssClasses,
    ...eventHandlers,
    style,
    ref: toastRef
  }, import_react4.default.createElement("div", {
    ...isIn && {
      role
    },
    className: isFn(bodyClassName) ? bodyClassName({
      type
    }) : clsx_m_default("Toastify__toast-body", bodyClassName),
    style: bodyStyle
  }, iconOut != null && import_react4.default.createElement("div", {
    className: clsx_m_default("Toastify__toast-icon", {
      ["Toastify--animate-icon Toastify__zoom-enter"]: !isLoading
    })
  }, iconOut), import_react4.default.createElement("div", null, children)), Close, (autoClose || isProgressControlled) && import_react4.default.createElement(ProgressBar, {
    ...updateId && !isProgressControlled ? {
      key: "pb-" + updateId
    } : {},
    rtl,
    theme,
    delay: autoClose,
    isRunning,
    isIn,
    closeToast,
    hide: hideProgressBar,
    type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: isProgressControlled,
    progress
  })));
};
var Bounce = cssTransition({
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: true
});
var Slide = cssTransition({
  enter: "Toastify--animate Toastify__slide-enter",
  exit: "Toastify--animate Toastify__slide-exit",
  appendPosition: true
});
var Zoom = cssTransition({
  enter: "Toastify--animate Toastify__zoom-enter",
  exit: "Toastify--animate Toastify__zoom-exit"
});
var Flip = cssTransition({
  enter: "Toastify--animate Toastify__flip-enter",
  exit: "Toastify--animate Toastify__flip-exit"
});
var ToastContainer = (0, import_react4.forwardRef)((props, ref) => {
  const {
    getToastToRender,
    containerRef,
    isToastActive
  } = useToastContainer(props);
  const {
    className,
    style,
    rtl,
    containerId
  } = props;
  function getClassName(position) {
    const defaultClassName = clsx_m_default("Toastify__toast-container", "Toastify__toast-container--" + position, {
      ["Toastify__toast-container--rtl"]: rtl
    });
    return isFn(className) ? className({
      position,
      rtl,
      defaultClassName
    }) : clsx_m_default(defaultClassName, parseClassName(className));
  }
  (0, import_react4.useEffect)(() => {
    if (ref) {
      ref.current = containerRef.current;
    }
  }, []);
  return import_react4.default.createElement("div", {
    ref: containerRef,
    className: "Toastify",
    id: containerId
  }, getToastToRender((position, toastList) => {
    const containerStyle = !toastList.length ? {
      ...style,
      pointerEvents: "none"
    } : {
      ...style
    };
    return import_react4.default.createElement("div", {
      className: getClassName(position),
      style: containerStyle,
      key: "container-" + position
    }, toastList.map((_ref, i) => {
      let {
        content,
        props: toastProps
      } = _ref;
      return import_react4.default.createElement(Toast, {
        ...toastProps,
        isIn: isToastActive(toastProps.toastId),
        style: {
          ...toastProps.style,
          "--nth": i + 1,
          "--len": toastList.length
        },
        key: "toast-" + toastProps.key
      }, content);
    }));
  }));
});
ToastContainer.displayName = "ToastContainer";
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5e3,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light"
};
var containers = /* @__PURE__ */ new Map();
var latestInstance;
var queue = [];
function getToast(toastId, _ref) {
  let {
    containerId
  } = _ref;
  const container = containers.get(containerId || latestInstance);
  if (!container)
    return null;
  return container.getToast(toastId);
}
function generateToastId() {
  return Math.random().toString(36).substring(2, 9);
}
function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }
  return generateToastId();
}
function dispatchToast(content, options) {
  if (containers.size > 0) {
    eventManager.emit(
      0,
      content,
      options
    );
  } else {
    queue.push({
      content,
      options
    });
  }
  return options.toastId;
}
function mergeOptions(type, options) {
  return {
    ...options,
    type: options && options.type || type,
    toastId: getToastId(options)
  };
}
function createToastByType(type) {
  return (content, options) => dispatchToast(content, mergeOptions(type, options));
}
function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
}
toast.loading = (content, options) => dispatchToast(content, mergeOptions(TYPE.DEFAULT, {
  isLoading: true,
  autoClose: false,
  closeOnClick: false,
  closeButton: false,
  draggable: false,
  ...options
}));
function handlePromise(promise, _ref2, options) {
  let {
    pending,
    error,
    success
  } = _ref2;
  let id;
  if (pending) {
    id = isStr(pending) ? toast.loading(pending, options) : toast.loading(pending.render, {
      ...options,
      ...pending
    });
  }
  const resetParams = {
    isLoading: null,
    autoClose: null,
    closeOnClick: null,
    closeButton: null,
    draggable: null,
    delay: 100
  };
  const resolver = (type, input, result) => {
    if (input == null) {
      toast.dismiss(id);
      return;
    }
    const baseParams = {
      type,
      ...resetParams,
      ...options,
      data: result
    };
    const params = isStr(input) ? {
      render: input
    } : input;
    if (id) {
      toast.update(id, {
        ...baseParams,
        ...params
      });
    } else {
      toast(params.render, {
        ...baseParams,
        ...params
      });
    }
    return result;
  };
  const p = isFn(promise) ? promise() : promise;
  p.then((result) => resolver("success", success, result)).catch((err) => resolver("error", error, err));
  return p;
}
toast.promise = handlePromise;
toast.success = createToastByType(TYPE.SUCCESS);
toast.info = createToastByType(TYPE.INFO);
toast.error = createToastByType(TYPE.ERROR);
toast.warning = createToastByType(TYPE.WARNING);
toast.warn = toast.warning;
toast.dark = (content, options) => dispatchToast(content, mergeOptions(TYPE.DEFAULT, {
  theme: "dark",
  ...options
}));
toast.dismiss = (id) => {
  if (containers.size > 0) {
    eventManager.emit(
      1,
      id
    );
  } else {
    queue = queue.filter((t) => isToastIdValid(id) && t.options.toastId !== id);
  }
};
toast.clearWaitingQueue = function(params) {
  if (params === void 0) {
    params = {};
  }
  return eventManager.emit(
    5,
    params
  );
};
toast.isActive = (id) => {
  let isToastActive = false;
  containers.forEach((container) => {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};
toast.update = function(toastId, options) {
  if (options === void 0) {
    options = {};
  }
  setTimeout(() => {
    const toast2 = getToast(toastId, options);
    if (toast2) {
      const {
        props: oldOptions,
        content: oldContent
      } = toast2;
      const nextOptions = {
        ...oldOptions,
        ...options,
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      };
      if (nextOptions.toastId !== toastId)
        nextOptions.staleId = toastId;
      const content = nextOptions.render || oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
toast.done = (id) => {
  toast.update(id, {
    progress: 1
  });
};
toast.onChange = (callback) => {
  eventManager.on(
    4,
    callback
  );
  return () => {
    eventManager.off(
      4,
      callback
    );
  };
};
toast.POSITION = POSITION;
toast.TYPE = TYPE;
eventManager.on(
  2,
  (containerInstance) => {
    latestInstance = containerInstance.containerId || containerInstance;
    containers.set(latestInstance, containerInstance);
    queue.forEach((item) => {
      eventManager.emit(
        0,
        item.content,
        item.options
      );
    });
    queue = [];
  }
).on(
  3,
  (containerInstance) => {
    containers.delete(containerInstance.containerId || containerInstance);
    if (containers.size === 0) {
      eventManager.off(
        0
      ).off(
        1
      ).off(
        5
      );
    }
  }
);

// app/src/components/utilities/toastify.jsx
function renderToastify(msg) {
  const id = toast(msg, { isLoading: true, toastId: "formValidating" });
  return id;
}
function updateToastify(id, msg, type) {
  toast.update(id, {
    render: msg,
    type,
    isLoading: false,
    autoClose: true
  });
}

// app/src/assets/undraw_login_re_4vu2.svg
var undraw_login_re_4vu2_default = "/build/_assets/undraw_login_re_4vu2-EXDF5GG3.svg";

// app/src/components/Navbar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Navbar() {
  const { mutate: mutate2 } = useSWRConfig();
  const { user, isLoading, isError } = useUser();
  async function handleClick(e) {
    const id = renderToastify("Logging you out...");
    try {
      e.preventDefault();
      await mutate2("http://localhost:3000/api/v1/users/verify", Logout(), {});
      updateToastify(id, "You've been logged out of your account");
    } catch (err) {
      console.log(err);
      updateToastify(
        id,
        "Something went wrong while trying to log you out",
        "error"
      );
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "navbar-section",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
      className: "navbar-section__header",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "navbar-section__logo",
          children: "Tech-Freak"
        }, void 0, false, {
          fileName: "app/src/components/Navbar.jsx",
          lineNumber: 30,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
          className: "navbar-section__box",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, {
                  link: "/",
                  title: "Home"
                }, void 0, false, {
                  fileName: "app/src/components/Navbar.jsx",
                  lineNumber: 34,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/src/components/Navbar.jsx",
                lineNumber: 33,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, {
                  link: "#",
                  title: "About us"
                }, void 0, false, {
                  fileName: "app/src/components/Navbar.jsx",
                  lineNumber: 37,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/src/components/Navbar.jsx",
                lineNumber: 36,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: user?.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                  msg: "Logout",
                  onClick: handleClick
                }, void 0, false, {
                  fileName: "app/src/components/Navbar.jsx",
                  lineNumber: 41,
                  columnNumber: 17
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, {
                  link: "/login",
                  title: "Login"
                }, void 0, false, {
                  fileName: "app/src/components/Navbar.jsx",
                  lineNumber: 43,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/src/components/Navbar.jsx",
                lineNumber: 39,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: user?.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "navbar-section__user",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: undraw_login_re_4vu2_default
                    }, void 0, false, {
                      fileName: "app/src/components/Navbar.jsx",
                      lineNumber: 49,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: user.data.user.Name.slice(0, 2)
                    }, void 0, false, {
                      fileName: "app/src/components/Navbar.jsx",
                      lineNumber: 50,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/src/components/Navbar.jsx",
                  lineNumber: 48,
                  columnNumber: 17
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, {
                  link: "/signup",
                  title: "Signup",
                  nameClass: "navbar-section__sign"
                }, void 0, false, {
                  fileName: "app/src/components/Navbar.jsx",
                  lineNumber: 53,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/src/components/Navbar.jsx",
                lineNumber: 46,
                columnNumber: 13
              }, this),
              user?.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: user.data.user.products.length
                  }, void 0, false, {
                    fileName: "app/src/components/Navbar.jsx",
                    lineNumber: 63,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, {
                    link: "/cart",
                    title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsCart, {}, void 0, false, {
                      fileName: "app/src/components/Navbar.jsx",
                      lineNumber: 66,
                      columnNumber: 26
                    }, this),
                    nameClass: "navbar-section__cart"
                  }, void 0, false, {
                    fileName: "app/src/components/Navbar.jsx",
                    lineNumber: 64,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/src/components/Navbar.jsx",
                lineNumber: 62,
                columnNumber: 15
              }, this) : ""
            ]
          }, void 0, true, {
            fileName: "app/src/components/Navbar.jsx",
            lineNumber: 32,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/src/components/Navbar.jsx",
          lineNumber: 31,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/src/components/Navbar.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/src/components/Navbar.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/src/components/SearchBox.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SearchBox() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "input-box",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "input-box__container",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "input-box__input",
          placeholder: "Start Shopping",
          type: "text"
        }, void 0, false, {
          fileName: "app/src/components/SearchBox.jsx",
          lineNumber: 6,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, {
          link: "#",
          title: "Explore now",
          nameClass: "input-box__link"
        }, void 0, false, {
          fileName: "app/src/components/SearchBox.jsx",
          lineNumber: 11,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/src/components/SearchBox.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/src/components/SearchBox.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/src/assets/undraw_window_shopping_re_0kbm.svg
var undraw_window_shopping_re_0kbm_default = "/build/_assets/undraw_window_shopping_re_0kbm-PYBOESRV.svg";

// app/src/page/homePage/Hero.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "hero-section",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "hero-section__container",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "hero-section__content",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              className: "primary-heading m-bottom-sm",
              children: "Get everything you ever wanted right from the comfort of your home"
            }, void 0, false, {
              fileName: "app/src/page/homePage/Hero.jsx",
              lineNumber: 8,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchBox, {}, void 0, false, {
              fileName: "app/src/page/homePage/Hero.jsx",
              lineNumber: 11,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/src/page/homePage/Hero.jsx",
          lineNumber: 7,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "hero-section__img-box",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            className: "hero-section__img",
            src: undraw_window_shopping_re_0kbm_default,
            alt: "woman shopping"
          }, void 0, false, {
            fileName: "app/src/page/homePage/Hero.jsx",
            lineNumber: 14,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/src/page/homePage/Hero.jsx",
          lineNumber: 13,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/src/page/homePage/Hero.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/src/page/homePage/Hero.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// node_modules/react-icons/md/index.esm.js
function MdLocalShipping(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" } }] })(props);
}

// node_modules/react-icons/ai/index.esm.js
function AiFillCreditCard(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M928 160H96c-17.7 0-32 14.3-32 32v160h896V192c0-17.7-14.3-32-32-32zM64 832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V440H64v392zm579-184c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72z" } }] })(props);
}

// app/src/page/homePage/features.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FeatureCard({ icon, title, details }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "features-section__item",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        style: { fontSize: "4.4rem" },
        children: icon
      }, void 0, false, {
        fileName: "app/src/page/homePage/features.jsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "features-section__details",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "features-section__title",
            children: title
          }, void 0, false, {
            fileName: "app/src/page/homePage/features.jsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "features-section__details",
            children: details
          }, void 0, false, {
            fileName: "app/src/page/homePage/features.jsx",
            lineNumber: 11,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/src/page/homePage/features.jsx",
        lineNumber: 9,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/src/page/homePage/features.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function Features() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "features-section",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "features-section__container",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "features-section__box",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeatureCard, {
            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdLocalShipping, {}, void 0, false, {
              fileName: "app/src/page/homePage/features.jsx",
              lineNumber: 23,
              columnNumber: 19
            }, this),
            title: "Free Shipping",
            details: "Capped at $60 an hour"
          }, void 0, false, {
            fileName: "app/src/page/homePage/features.jsx",
            lineNumber: 22,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeatureCard, {
            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AiFillCreditCard, {}, void 0, false, {
              fileName: "app/src/page/homePage/features.jsx",
              lineNumber: 28,
              columnNumber: 19
            }, this),
            title: "Secure Payments",
            details: "up to 6 months installments"
          }, void 0, false, {
            fileName: "app/src/page/homePage/features.jsx",
            lineNumber: 27,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeatureCard, {
            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsCashStack, {}, void 0, false, {
              fileName: "app/src/page/homePage/features.jsx",
              lineNumber: 33,
              columnNumber: 19
            }, this),
            title: "14 Day Returns",
            details: "Shop with confidence"
          }, void 0, false, {
            fileName: "app/src/page/homePage/features.jsx",
            lineNumber: 32,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/src/page/homePage/features.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/src/page/homePage/features.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/src/page/homePage/features.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/src/assets/giorgio-trovato-8krX0HkXw8c-unsplash.jpg
var giorgio_trovato_8krX0HkXw8c_unsplash_default = "/build/_assets/giorgio-trovato-8krX0HkXw8c-unsplash-Z2FJZV23.jpg";

// app/src/assets/joel-de-vera-RgMOBFLGoZM-unsplash.jpg
var joel_de_vera_RgMOBFLGoZM_unsplash_default = "/build/_assets/joel-de-vera-RgMOBFLGoZM-unsplash-AXLODG4Q.jpg";

// app/src/assets/v-a-tao-OxvlDO8RwKg-unsplash.jpg
var v_a_tao_OxvlDO8RwKg_unsplash_default = "/build/_assets/v-a-tao-OxvlDO8RwKg-unsplash-5PB6OIN3.jpg";

// app/src/page/homePage/Details.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Details() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      className: "section-details",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "section-details__container",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "secondary-heading section-details__heading",
            children: "With our services, You'll be updated with the latest teck and gadgets in the industry"
          }, void 0, false, {
            fileName: "app/src/page/homePage/Details.jsx",
            lineNumber: 10,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "section-details__img-box",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              className: "section-details__img",
              src: joel_de_vera_RgMOBFLGoZM_unsplash_default,
              alt: ""
            }, void 0, false, {
              fileName: "app/src/page/homePage/Details.jsx",
              lineNumber: 15,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/src/page/homePage/Details.jsx",
            lineNumber: 14,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "section-details__img-box",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              className: "section-details__img",
              src: giorgio_trovato_8krX0HkXw8c_unsplash_default,
              alt: ""
            }, void 0, false, {
              fileName: "app/src/page/homePage/Details.jsx",
              lineNumber: 18,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/src/page/homePage/Details.jsx",
            lineNumber: 17,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "section-details__img-box",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              className: "section-details__img",
              src: v_a_tao_OxvlDO8RwKg_unsplash_default,
              alt: ""
            }, void 0, false, {
              fileName: "app/src/page/homePage/Details.jsx",
              lineNumber: 21,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/src/page/homePage/Details.jsx",
            lineNumber: 20,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/src/page/homePage/Details.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/src/page/homePage/Details.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/src/page/homePage/Details.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/src/components/ProductCard.jsx
var import_react_simple_star_rating = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductCard({
  img,
  title,
  price,
  nameClass,
  path,
  rating
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
    className: "product-card",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
      className: "product-card__link",
      to: path,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          className: nameClass,
          src: img,
          alt: title
        }, void 0, false, {
          fileName: "app/src/components/ProductCard.jsx",
          lineNumber: 16,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", {
          className: "product-card__details",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "product-card__detail",
              children: title
            }, void 0, false, {
              fileName: "app/src/components/ProductCard.jsx",
              lineNumber: 18,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "product-card__rating",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_simple_star_rating.Rating, {
                  readonly: true,
                  initialValue: rating,
                  allowFraction: true,
                  size: 20
                }, void 0, false, {
                  fileName: "app/src/components/ProductCard.jsx",
                  lineNumber: 20,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: [
                    "(",
                    rating,
                    ")"
                  ]
                }, void 0, true, {
                  fileName: "app/src/components/ProductCard.jsx",
                  lineNumber: 26,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/src/components/ProductCard.jsx",
              lineNumber: 19,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "product-card__price",
              children: price
            }, void 0, false, {
              fileName: "app/src/components/ProductCard.jsx",
              lineNumber: 28,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/src/components/ProductCard.jsx",
          lineNumber: 17,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/src/components/ProductCard.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/src/components/ProductCard.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/src/page/homePage/products.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Products({ title, data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "featured-products",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "featured-products__container",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "secondary-heading featured-products__heading",
          children: title
        }, void 0, false, {
          fileName: "app/src/page/homePage/products.jsx",
          lineNumber: 8,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "featured-products__products",
          children: data.map((el) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, {
            title: el.title.slice(0, 40).padEnd(43, "..."),
            img: el.image.replace("UL320", "UL550"),
            nameClass: "featured-products__card-img",
            price: `${el.price.symbol}${el.price.value}`,
            path: `products/${el.asin}/${el._id}`,
            rating: el.rating
          }, el._id, false, {
            fileName: "app/src/page/homePage/products.jsx",
            lineNumber: 13,
            columnNumber: 13
          }, this))
        }, void 0, false, {
          fileName: "app/src/page/homePage/products.jsx",
          lineNumber: 11,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "featured-products__btn-box",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, {
            link: "/otherproducts",
            title: "see more",
            nameClass: "featured-products__button"
          }, void 0, false, {
            fileName: "app/src/page/homePage/products.jsx",
            lineNumber: 25,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/src/page/homePage/products.jsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/src/page/homePage/products.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/src/page/homePage/products.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Home() {
  const data = useLoaderData();
  const headPhones = data?.data?.headphones;
  const laptops = data?.data?.laptops;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, {}, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Features, {}, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Products, {
        title: "#Headphones",
        data: headPhones
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Details, {}, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Products, {
        title: "#Laptops",
        data: laptops
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  Home as default
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=/build/routes/index-ND3KZGHD.js.map
