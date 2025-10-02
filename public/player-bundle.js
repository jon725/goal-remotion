"use strict";
var RemotionPlayer = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      (function() {
        function defineDeprecationWarning(methodName, info2) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function() {
              console.warn(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                info2[0],
                info2[1]
              );
            }
          });
        }
        function getIteratorFn(maybeIterable) {
          if (null === maybeIterable || "object" !== typeof maybeIterable)
            return null;
          maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
          return "function" === typeof maybeIterable ? maybeIterable : null;
        }
        function warnNoop(publicInstance, callerName) {
          publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
          var warningKey = publicInstance + "." + callerName;
          didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            callerName,
            publicInstance
          ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function ComponentDummy() {
        }
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0
            );
            return testStringCoercion(value);
          }
        }
        function getComponentNameFromType(type) {
          if (null == type) return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
          if ("string" === typeof type) return type;
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
          if ("object" === typeof type)
            switch ("number" === typeof type.tag && console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ), type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
              case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {
                }
            }
          return null;
        }
        function isValidElementType(type) {
          return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId) ? true : false;
        }
        function disabledLog() {
        }
        function disableLogs() {
          if (0 === disabledDepth) {
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
        function reenableLogs() {
          disabledDepth--;
          if (0 === disabledDepth) {
            var props = { configurable: true, enumerable: true, writable: true };
            Object.defineProperties(console, {
              log: assign({}, props, { value: prevLog }),
              info: assign({}, props, { value: prevInfo }),
              warn: assign({}, props, { value: prevWarn }),
              error: assign({}, props, { value: prevError }),
              group: assign({}, props, { value: prevGroup }),
              groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
              groupEnd: assign({}, props, { value: prevGroupEnd })
            });
          }
          0 > disabledDepth && console.error(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue."
          );
        }
        function describeBuiltInComponentFrame(name) {
          if (void 0 === prefix)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
              suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
          return "\n" + prefix + name + suffix;
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) return "";
          var frame = componentFrameCache.get(fn);
          if (void 0 !== frame) return frame;
          reentry = true;
          frame = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher = null;
          previousDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = null;
          disableLogs();
          try {
            var RunInRootFrame = {
              DetermineComponentFrameRoot: function() {
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
                    if ("object" === typeof Reflect && Reflect.construct) {
                      try {
                        Reflect.construct(Fake, []);
                      } catch (x) {
                        var control = x;
                      }
                      Reflect.construct(fn, [], Fake);
                    } else {
                      try {
                        Fake.call();
                      } catch (x$0) {
                        control = x$0;
                      }
                      fn.call(Fake.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (x$1) {
                      control = x$1;
                    }
                    (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                    });
                  }
                } catch (sample) {
                  if (sample && control && "string" === typeof sample.stack)
                    return [sample.stack, control.stack];
                }
                return [null, null];
              }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(
              RunInRootFrame.DetermineComponentFrameRoot,
              "name"
            );
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
              RunInRootFrame.DetermineComponentFrameRoot,
              "name",
              { value: "DetermineComponentFrameRoot" }
            );
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
              var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
              for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
                "DetermineComponentFrameRoot"
              ); )
                namePropDescriptor++;
              for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
                "DetermineComponentFrameRoot"
              ); )
                _RunInRootFrame$Deter++;
              if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
                for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                  _RunInRootFrame$Deter--;
              for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
                if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                  if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                    do
                      if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                        var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                          " at new ",
                          " at "
                        );
                        fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                        "function" === typeof fn && componentFrameCache.set(fn, _frame);
                        return _frame;
                      }
                    while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                  }
                  break;
                }
            }
          } finally {
            reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
          }
          sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
          "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
          return sampleLines;
        }
        function describeUnknownElementTypeFrameInDEV(type) {
          if (null == type) return "";
          if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(
              type,
              !(!prototype || !prototype.isReactComponent)
            );
          }
          if ("string" === typeof type) return describeBuiltInComponentFrame(type);
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if ("object" === typeof type)
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, false), type;
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
              case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {
                }
            }
          return "";
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function hasValidKey(config) {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
          }
          return void 0 !== config.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
          }
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, self, source, owner, props) {
          self = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            _owner: owner
          };
          null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: false,
            get: elementRefGetterWithDeprecationWarning
          }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: 0
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: null
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          newKey = ReactElement(
            oldElement.type,
            newKey,
            void 0,
            void 0,
            oldElement._owner,
            oldElement.props
          );
          newKey._store.validated = oldElement._store.validated;
          return newKey;
        }
        function validateChildKeys(node, parentType) {
          if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node))
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
              }
            else if (isValidElement(node))
              node._store && (node._store.validated = 1);
            else if (i = getIteratorFn(node), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node))
              for (; !(node = i.next()).done; )
                isValidElement(node.value) && validateExplicitKey(node.value, parentType);
          }
        }
        function isValidElement(object) {
          return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function validateExplicitKey(element, parentType) {
          if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = true;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
              var stack = describeUnknownElementTypeFrameInDEV(element.type);
              prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
              return stack;
            };
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              parentType,
              childOwner
            );
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
          }
        }
        function getCurrentComponentErrorInfo(parentType) {
          var info2 = "", owner = getOwner();
          owner && (owner = getComponentNameFromType(owner.type)) && (info2 = "\n\nCheck the render method of `" + owner + "`.");
          info2 || (parentType = getComponentNameFromType(parentType)) && (info2 = "\n\nCheck the top-level render call using <" + parentType + ">.");
          return info2;
        }
        function escape(key) {
          var escaperLookup = { "=": "=0", ":": "=2" };
          return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
          });
        }
        function getElementKey(element, index) {
          return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
        }
        function noop$1() {
        }
        function resolveThenable(thenable) {
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
            default:
              switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(
                function(fulfilledValue) {
                  "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                },
                function(error2) {
                  "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error2);
                }
              )), thenable.status) {
                case "fulfilled":
                  return thenable.value;
                case "rejected":
                  throw thenable.reason;
              }
          }
          throw thenable;
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if ("undefined" === type || "boolean" === type) children = null;
          var invokeCallback = false;
          if (null === children) invokeCallback = true;
          else
            switch (type) {
              case "bigint":
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                    break;
                  case REACT_LAZY_TYPE:
                    return invokeCallback = children._init, mapIntoArray(
                      invokeCallback(children._payload),
                      array,
                      escapedPrefix,
                      nameSoFar,
                      callback
                    );
                }
            }
          if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c2) {
              return c2;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
              callback,
              escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
                userProvidedKeyEscapeRegex,
                "$&/"
              ) + "/") + childKey
            ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
          }
          invokeCallback = 0;
          childKey = "" === nameSoFar ? "." : nameSoFar + ":";
          if (isArrayImpl(children))
            for (var i = 0; i < children.length; i++)
              nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if (i = getIteratorFn(children), "function" === typeof i)
            for (i === children.entries && (didWarnAboutMaps || console.warn(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
              nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if ("object" === type) {
            if ("function" === typeof children.then)
              return mapIntoArray(
                resolveThenable(children),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              );
            array = String(children);
            throw Error(
              "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
            );
          }
          return invokeCallback;
        }
        function mapChildren(children, func, context) {
          if (null == children) return children;
          var result = [], count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function lazyInitializer(payload) {
          if (-1 === payload._status) {
            var ctor = payload._result;
            ctor = ctor();
            ctor.then(
              function(moduleObject) {
                if (0 === payload._status || -1 === payload._status)
                  payload._status = 1, payload._result = moduleObject;
              },
              function(error2) {
                if (0 === payload._status || -1 === payload._status)
                  payload._status = 2, payload._result = error2;
              }
            );
            -1 === payload._status && (payload._status = 0, payload._result = ctor);
          }
          if (1 === payload._status)
            return ctor = payload._result, void 0 === ctor && console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ctor
            ), "default" in ctor || console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ctor
            ), ctor.default;
          throw payload._result;
        }
        function resolveDispatcher() {
          var dispatcher = ReactSharedInternals.H;
          null === dispatcher && console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
          return dispatcher;
        }
        function noop() {
        }
        function enqueueTask(task) {
          if (null === enqueueTaskImpl)
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              enqueueTaskImpl = (module && module[requireString]).call(
                module,
                "timers"
              ).setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          return enqueueTaskImpl(task);
        }
        function aggregateErrors(errors) {
          return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
        }
        function popActScope(prevActQueue, prevActScopeDepth) {
          prevActScopeDepth !== actScopeDepth - 1 && console.error(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
          );
          actScopeDepth = prevActScopeDepth;
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          var queue = ReactSharedInternals.actQueue;
          if (null !== queue)
            if (0 !== queue.length)
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
              } catch (error2) {
                ReactSharedInternals.thrownErrors.push(error2);
              }
            else ReactSharedInternals.actQueue = null;
          0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
        }
        function flushActQueue(queue) {
          if (!isFlushing) {
            isFlushing = true;
            var i = 0;
            try {
              for (; i < queue.length; i++) {
                var callback = queue[i];
                do {
                  ReactSharedInternals.didUsePromise = false;
                  var continuation = callback(false);
                  if (null !== continuation) {
                    if (ReactSharedInternals.didUsePromise) {
                      queue[i] = callback;
                      queue.splice(0, i);
                      return;
                    }
                    callback = continuation;
                  } else break;
                } while (1);
              }
              queue.length = 0;
            } catch (error2) {
              queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error2);
            } finally {
              isFlushing = false;
            }
          }
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        Symbol.for("react.provider");
        var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
          isMounted: function() {
            return false;
          },
          enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
          }
        }, assign = Object.assign, emptyObject = {};
        Object.freeze(emptyObject);
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
            throw Error(
              "takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        var deprecatedAPIs = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
          ]
        }, fnName;
        for (fnName in deprecatedAPIs)
          deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        ComponentDummy.prototype = Component.prototype;
        deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
        deprecatedAPIs.constructor = PureComponent;
        assign(deprecatedAPIs, Component.prototype);
        deprecatedAPIs.isPureReactComponent = true;
        var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = {
          H: null,
          A: null,
          T: null,
          S: null,
          actQueue: null,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false,
          didUsePromise: false,
          thrownErrors: [],
          getCurrentStack: null
        }, hasOwnProperty = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
        disabledLog.__reactDisabledLog = true;
        var prefix, suffix, reentry = false;
        var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
        var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
        var didWarnAboutElementRef = {};
        var ownerHasKeyUseWarning = {}, didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error2) {
          if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: "object" === typeof error2 && null !== error2 && "string" === typeof error2.message ? String(error2.message) : String(error2),
              error: error2
            });
            if (!window.dispatchEvent(event)) return;
          } else if ("object" === typeof process && "function" === typeof process.emit) {
            process.emit("uncaughtException", error2);
            return;
          }
          console.error(error2);
        }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
          queueMicrotask(function() {
            return queueMicrotask(callback);
          });
        } : enqueueTask;
        exports.Children = {
          map: mapChildren,
          forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(
              children,
              function() {
                forEachFunc.apply(this, arguments);
              },
              forEachContext
            );
          },
          count: function(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          },
          toArray: function(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          },
          only: function(children) {
            if (!isValidElement(children))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return children;
          }
        };
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
        exports.act = function(callback) {
          var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
          actScopeDepth++;
          var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
          try {
            var result = callback();
          } catch (error2) {
            ReactSharedInternals.thrownErrors.push(error2);
          }
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
              didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
                "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
              ));
            });
            return {
              then: function(resolve, reject) {
                didAwaitActCall = true;
                thenable.then(
                  function(returnValue) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    if (0 === prevActScopeDepth) {
                      try {
                        flushActQueue(queue), enqueueTask(function() {
                          return recursivelyFlushAsyncActWork(
                            returnValue,
                            resolve,
                            reject
                          );
                        });
                      } catch (error$2) {
                        ReactSharedInternals.thrownErrors.push(error$2);
                      }
                      if (0 < ReactSharedInternals.thrownErrors.length) {
                        var _thrownError = aggregateErrors(
                          ReactSharedInternals.thrownErrors
                        );
                        ReactSharedInternals.thrownErrors.length = 0;
                        reject(_thrownError);
                      }
                    } else resolve(returnValue);
                  },
                  function(error2) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    0 < ReactSharedInternals.thrownErrors.length ? (error2 = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    ), ReactSharedInternals.thrownErrors.length = 0, reject(error2)) : reject(error2);
                  }
                );
              }
            };
          }
          var returnValue$jscomp$0 = result;
          popActScope(prevActQueue, prevActScopeDepth);
          0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
            ));
          }), ReactSharedInternals.actQueue = null);
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              })) : resolve(returnValue$jscomp$0);
            }
          };
        };
        exports.cache = function(fn) {
          return function() {
            return fn.apply(null, arguments);
          };
        };
        exports.cloneElement = function(element, config, children) {
          if (null === element || void 0 === element)
            throw Error(
              "The argument must be a React element, but you passed " + element + "."
            );
          var props = assign({}, element.props), key = element.key, owner = element._owner;
          if (null != config) {
            var JSCompiler_inline_result;
            a: {
              if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
                config,
                "ref"
              ).get) && JSCompiler_inline_result.isReactWarning) {
                JSCompiler_inline_result = false;
                break a;
              }
              JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for (propName in config)
              !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
          }
          var propName = arguments.length - 2;
          if (1 === propName) props.children = children;
          else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for (var i = 0; i < propName; i++)
              JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
          }
          props = ReactElement(element.type, key, void 0, void 0, owner, props);
          for (key = 2; key < arguments.length; key++)
            validateChildKeys(arguments[key], props.type);
          return props;
        };
        exports.createContext = function(defaultValue) {
          defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          defaultValue.Provider = defaultValue;
          defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
          };
          defaultValue._currentRenderer = null;
          defaultValue._currentRenderer2 = null;
          return defaultValue;
        };
        exports.createElement = function(type, config, children) {
          if (isValidElementType(type))
            for (var i = 2; i < arguments.length; i++)
              validateChildKeys(arguments[i], type);
          else {
            i = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
              i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            if (null === type) var typeString = "null";
            else
              isArrayImpl(type) ? typeString = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type;
            console.error(
              "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
              typeString,
              i
            );
          }
          var propName;
          i = {};
          typeString = null;
          if (null != config)
            for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
              "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
            )), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = "" + config.key), config)
              hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
          var childrenLength = arguments.length - 2;
          if (1 === childrenLength) i.children = children;
          else if (1 < childrenLength) {
            for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
              childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
          }
          if (type && type.defaultProps)
            for (propName in childrenLength = type.defaultProps, childrenLength)
              void 0 === i[propName] && (i[propName] = childrenLength[propName]);
          typeString && defineKeyPropWarningGetter(
            i,
            "function" === typeof type ? type.displayName || type.name || "Unknown" : type
          );
          return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
        };
        exports.createRef = function() {
          var refObject = { current: null };
          Object.seal(refObject);
          return refObject;
        };
        exports.forwardRef = function(render) {
          null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          ) : "function" !== typeof render ? console.error(
            "forwardRef requires a render function but was given %s.",
            null === render ? "null" : typeof render
          ) : 0 !== render.length && 2 !== render.length && console.error(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
          );
          null != render && null != render.defaultProps && console.error(
            "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
          );
          var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
            }
          });
          return elementType;
        };
        exports.isValidElement = isValidElement;
        exports.lazy = function(ctor) {
          return {
            $$typeof: REACT_LAZY_TYPE,
            _payload: { _status: -1, _result: ctor },
            _init: lazyInitializer
          };
        };
        exports.memo = function(type, compare) {
          isValidElementType(type) || console.error(
            "memo: The first argument must be a component. Instead received: %s",
            null === type ? "null" : typeof type
          );
          compare = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: void 0 === compare ? null : compare
          };
          var ownName;
          Object.defineProperty(compare, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
            }
          });
          return compare;
        };
        exports.startTransition = function(scope) {
          var prevTransition = ReactSharedInternals.T, currentTransition = {};
          ReactSharedInternals.T = currentTransition;
          currentTransition._updatedFibers = /* @__PURE__ */ new Set();
          try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
          } catch (error2) {
            reportGlobalError(error2);
          } finally {
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )), ReactSharedInternals.T = prevTransition;
          }
        };
        exports.unstable_useCacheRefresh = function() {
          return resolveDispatcher().useCacheRefresh();
        };
        exports.use = function(usable) {
          return resolveDispatcher().use(usable);
        };
        exports.useActionState = function(action, initialState, permalink) {
          return resolveDispatcher().useActionState(
            action,
            initialState,
            permalink
          );
        };
        exports.useCallback = function(callback, deps) {
          return resolveDispatcher().useCallback(callback, deps);
        };
        exports.useContext = function(Context) {
          var dispatcher = resolveDispatcher();
          Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
            "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
          );
          return dispatcher.useContext(Context);
        };
        exports.useDebugValue = function(value, formatterFn) {
          return resolveDispatcher().useDebugValue(value, formatterFn);
        };
        exports.useDeferredValue = function(value, initialValue) {
          return resolveDispatcher().useDeferredValue(value, initialValue);
        };
        exports.useEffect = function(create, deps) {
          return resolveDispatcher().useEffect(create, deps);
        };
        exports.useId = function() {
          return resolveDispatcher().useId();
        };
        exports.useImperativeHandle = function(ref, create, deps) {
          return resolveDispatcher().useImperativeHandle(ref, create, deps);
        };
        exports.useInsertionEffect = function(create, deps) {
          return resolveDispatcher().useInsertionEffect(create, deps);
        };
        exports.useLayoutEffect = function(create, deps) {
          return resolveDispatcher().useLayoutEffect(create, deps);
        };
        exports.useMemo = function(create, deps) {
          return resolveDispatcher().useMemo(create, deps);
        };
        exports.useOptimistic = function(passthrough, reducer) {
          return resolveDispatcher().useOptimistic(passthrough, reducer);
        };
        exports.useReducer = function(reducer, initialArg, init) {
          return resolveDispatcher().useReducer(reducer, initialArg, init);
        };
        exports.useRef = function(initialValue) {
          return resolveDispatcher().useRef(initialValue);
        };
        exports.useState = function(initialState) {
          return resolveDispatcher().useState(initialState);
        };
        exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
          return resolveDispatcher().useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        };
        exports.useTransition = function() {
          return resolveDispatcher().useTransition();
        };
        exports.version = "19.0.0";
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.development.js
  var require_react_jsx_runtime_development = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
      "use strict";
      (function() {
        function getComponentNameFromType(type) {
          if (null == type) return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
          if ("string" === typeof type) return type;
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
          if ("object" === typeof type)
            switch ("number" === typeof type.tag && console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ), type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
              case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {
                }
            }
          return null;
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0
            );
            return testStringCoercion(value);
          }
        }
        function disabledLog() {
        }
        function disableLogs() {
          if (0 === disabledDepth) {
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
        function reenableLogs() {
          disabledDepth--;
          if (0 === disabledDepth) {
            var props = { configurable: true, enumerable: true, writable: true };
            Object.defineProperties(console, {
              log: assign({}, props, { value: prevLog }),
              info: assign({}, props, { value: prevInfo }),
              warn: assign({}, props, { value: prevWarn }),
              error: assign({}, props, { value: prevError }),
              group: assign({}, props, { value: prevGroup }),
              groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
              groupEnd: assign({}, props, { value: prevGroupEnd })
            });
          }
          0 > disabledDepth && console.error(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue."
          );
        }
        function describeBuiltInComponentFrame(name) {
          if (void 0 === prefix)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
              suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
          return "\n" + prefix + name + suffix;
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) return "";
          var frame = componentFrameCache.get(fn);
          if (void 0 !== frame) return frame;
          reentry = true;
          frame = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher = null;
          previousDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = null;
          disableLogs();
          try {
            var RunInRootFrame = {
              DetermineComponentFrameRoot: function() {
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
                    if ("object" === typeof Reflect && Reflect.construct) {
                      try {
                        Reflect.construct(Fake, []);
                      } catch (x) {
                        var control = x;
                      }
                      Reflect.construct(fn, [], Fake);
                    } else {
                      try {
                        Fake.call();
                      } catch (x$0) {
                        control = x$0;
                      }
                      fn.call(Fake.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (x$1) {
                      control = x$1;
                    }
                    (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                    });
                  }
                } catch (sample) {
                  if (sample && control && "string" === typeof sample.stack)
                    return [sample.stack, control.stack];
                }
                return [null, null];
              }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(
              RunInRootFrame.DetermineComponentFrameRoot,
              "name"
            );
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
              RunInRootFrame.DetermineComponentFrameRoot,
              "name",
              { value: "DetermineComponentFrameRoot" }
            );
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
              var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
              for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
                "DetermineComponentFrameRoot"
              ); )
                namePropDescriptor++;
              for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
                "DetermineComponentFrameRoot"
              ); )
                _RunInRootFrame$Deter++;
              if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
                for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                  _RunInRootFrame$Deter--;
              for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
                if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                  if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                    do
                      if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                        var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                          " at new ",
                          " at "
                        );
                        fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                        "function" === typeof fn && componentFrameCache.set(fn, _frame);
                        return _frame;
                      }
                    while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                  }
                  break;
                }
            }
          } finally {
            reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
          }
          sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
          "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
          return sampleLines;
        }
        function describeUnknownElementTypeFrameInDEV(type) {
          if (null == type) return "";
          if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(
              type,
              !(!prototype || !prototype.isReactComponent)
            );
          }
          if ("string" === typeof type) return describeBuiltInComponentFrame(type);
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if ("object" === typeof type)
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, false), type;
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
              case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {
                }
            }
          return "";
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function hasValidKey(config) {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
          }
          return void 0 !== config.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
          }
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, self, source, owner, props) {
          self = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            _owner: owner
          };
          null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: false,
            get: elementRefGetterWithDeprecationWarning
          }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: 0
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: null
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
          if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
            var children = config.children;
            if (void 0 !== children)
              if (isStaticChildren)
                if (isArrayImpl(children)) {
                  for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                    validateChildKeys(children[isStaticChildren], type);
                  Object.freeze && Object.freeze(children);
                } else
                  console.error(
                    "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                  );
              else validateChildKeys(children, type);
          } else {
            children = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
              children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
            console.error(
              "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
              isStaticChildren,
              children
            );
          }
          if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
              return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
              'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
              isStaticChildren,
              children,
              keys,
              children
            ), didWarnAboutKeySpread[children + isStaticChildren] = true);
          }
          children = null;
          void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
          hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
          if ("key" in config) {
            maybeKey = {};
            for (var propName in config)
              "key" !== propName && (maybeKey[propName] = config[propName]);
          } else maybeKey = config;
          children && defineKeyPropWarningGetter(
            maybeKey,
            "function" === typeof type ? type.displayName || type.name || "Unknown" : type
          );
          return ReactElement(type, children, self, source, getOwner(), maybeKey);
        }
        function validateChildKeys(node, parentType) {
          if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node))
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
              }
            else if (isValidElement(node))
              node._store && (node._store.validated = 1);
            else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node))
              for (; !(node = i.next()).done; )
                isValidElement(node.value) && validateExplicitKey(node.value, parentType);
          }
        }
        function isValidElement(object) {
          return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function validateExplicitKey(element, parentType) {
          if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = true;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
              var stack = describeUnknownElementTypeFrameInDEV(element.type);
              prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
              return stack;
            };
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              parentType,
              childOwner
            );
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
          }
        }
        function getCurrentComponentErrorInfo(parentType) {
          var info2 = "", owner = getOwner();
          owner && (owner = getComponentNameFromType(owner.type)) && (info2 = "\n\nCheck the render method of `" + owner + "`.");
          info2 || (parentType = getComponentNameFromType(parentType)) && (info2 = "\n\nCheck the top-level render call using <" + parentType + ">.");
          return info2;
        }
        var React7 = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        Symbol.for("react.provider");
        var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React7.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
        disabledLog.__reactDisabledLog = true;
        var prefix, suffix, reentry = false;
        var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
        var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
        var didWarnAboutElementRef = {};
        var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = function(type, config, maybeKey, source, self) {
          return jsxDEVImpl(type, config, maybeKey, false, source, self);
        };
        exports.jsxs = function(type, config, maybeKey, source, self) {
          return jsxDEVImpl(type, config, maybeKey, true, source, self);
        };
      })();
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

  // node_modules/react-dom/cjs/react-dom.development.js
  var require_react_dom_development = __commonJS({
    "node_modules/react-dom/cjs/react-dom.development.js"(exports) {
      "use strict";
      (function() {
        function noop() {
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function createPortal$1(children, containerInfo, implementation) {
          var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          try {
            testStringCoercion(key);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          JSCompiler_inline_result && (console.error(
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"
          ), testStringCoercion(key));
          return {
            $$typeof: REACT_PORTAL_TYPE,
            key: null == key ? null : "" + key,
            children,
            containerInfo,
            implementation
          };
        }
        function getCrossOriginStringAs(as, input) {
          if ("font" === as) return "";
          if ("string" === typeof input)
            return "use-credentials" === input ? input : "";
        }
        function getValueDescriptorExpectingObjectForWarning(thing) {
          return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : 'something with type "' + typeof thing + '"';
        }
        function getValueDescriptorExpectingEnumForWarning(thing) {
          return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
        }
        function resolveDispatcher() {
          var dispatcher = ReactSharedInternals.H;
          null === dispatcher && console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
          return dispatcher;
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var React7 = require_react(), Internals2 = {
          d: {
            f: noop,
            r: function() {
              throw Error(
                "Invalid form element. requestFormReset must be passed a form that was rendered by React."
              );
            },
            D: noop,
            C: noop,
            L: noop,
            m: noop,
            X: noop,
            S: noop,
            M: noop
          },
          p: 0,
          findDOMNode: null
        }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React7.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        "function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error(
          "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        );
        exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals2;
        exports.createPortal = function(children, container2) {
          var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!container2 || 1 !== container2.nodeType && 9 !== container2.nodeType && 11 !== container2.nodeType)
            throw Error("Target container is not a DOM element.");
          return createPortal$1(children, container2, null, key);
        };
        exports.flushSync = function(fn) {
          var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals2.p;
          try {
            if (ReactSharedInternals.T = null, Internals2.p = 2, fn)
              return fn();
          } finally {
            ReactSharedInternals.T = previousTransition, Internals2.p = previousUpdatePriority, Internals2.d.f() && console.error(
              "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
            );
          }
        };
        exports.preconnect = function(href, options) {
          "string" === typeof href && href ? null != options && "object" !== typeof options ? console.error(
            "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
            getValueDescriptorExpectingEnumForWarning(options)
          ) : null != options && "string" !== typeof options.crossOrigin && console.error(
            "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
            getValueDescriptorExpectingObjectForWarning(options.crossOrigin)
          ) : console.error(
            "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
          "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals2.d.C(href, options));
        };
        exports.prefetchDNS = function(href) {
          if ("string" !== typeof href || !href)
            console.error(
              "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
              getValueDescriptorExpectingObjectForWarning(href)
            );
          else if (1 < arguments.length) {
            var options = arguments[1];
            "object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error(
              "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
              getValueDescriptorExpectingEnumForWarning(options)
            ) : console.error(
              "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
              getValueDescriptorExpectingEnumForWarning(options)
            );
          }
          "string" === typeof href && Internals2.d.D(href);
        };
        exports.preinit = function(href, options) {
          "string" === typeof href && href ? null == options || "object" !== typeof options ? console.error(
            "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
            getValueDescriptorExpectingEnumForWarning(options)
          ) : "style" !== options.as && "script" !== options.as && console.error(
            'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
            getValueDescriptorExpectingEnumForWarning(options.as)
          ) : console.error(
            "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
          if ("string" === typeof href && options && "string" === typeof options.as) {
            var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
            "style" === as ? Internals2.d.S(
              href,
              "string" === typeof options.precedence ? options.precedence : void 0,
              {
                crossOrigin,
                integrity,
                fetchPriority
              }
            ) : "script" === as && Internals2.d.X(href, {
              crossOrigin,
              integrity,
              fetchPriority,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
          }
        };
        exports.preinitModule = function(href, options) {
          var encountered = "";
          "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
          void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
          if (encountered)
            console.error(
              "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
              encountered
            );
          else
            switch (encountered = options && "string" === typeof options.as ? options.as : "script", encountered) {
              case "script":
                break;
              default:
                encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error(
                  'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                  encountered,
                  href
                );
            }
          if ("string" === typeof href)
            if ("object" === typeof options && null !== options) {
              if (null == options.as || "script" === options.as)
                encountered = getCrossOriginStringAs(
                  options.as,
                  options.crossOrigin
                ), Internals2.d.M(href, {
                  crossOrigin: encountered,
                  integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                  nonce: "string" === typeof options.nonce ? options.nonce : void 0
                });
            } else null == options && Internals2.d.M(href);
        };
        exports.preload = function(href, options) {
          var encountered = "";
          "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
          null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
          encountered && console.error(
            'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
            encountered
          );
          if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
            encountered = options.as;
            var crossOrigin = getCrossOriginStringAs(
              encountered,
              options.crossOrigin
            );
            Internals2.d.L(href, encountered, {
              crossOrigin,
              integrity: "string" === typeof options.integrity ? options.integrity : void 0,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0,
              type: "string" === typeof options.type ? options.type : void 0,
              fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
              referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
              imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
              imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
              media: "string" === typeof options.media ? options.media : void 0
            });
          }
        };
        exports.preloadModule = function(href, options) {
          var encountered = "";
          "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
          void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
          encountered && console.error(
            'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
            encountered
          );
          "string" === typeof href && (options ? (encountered = getCrossOriginStringAs(
            options.as,
            options.crossOrigin
          ), Internals2.d.m(href, {
            as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
            crossOrigin: encountered,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0
          })) : Internals2.d.m(href));
        };
        exports.requestFormReset = function(form) {
          Internals2.d.r(form);
        };
        exports.unstable_batchedUpdates = function(fn, a2) {
          return fn(a2);
        };
        exports.useFormState = function(action, initialState, permalink) {
          return resolveDispatcher().useFormState(action, initialState, permalink);
        };
        exports.useFormStatus = function() {
          return resolveDispatcher().useHostTransitionStatus();
        };
        exports.version = "19.0.0";
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      if (false) {
        checkDCE();
        module.exports = null;
      } else {
        module.exports = require_react_dom_development();
      }
    }
  });

  // src/PlayerWrapper.tsx
  var PlayerWrapper_exports = {};
  __export(PlayerWrapper_exports, {
    PlayerWrapper: () => PlayerWrapper
  });
  var import_react96 = __toESM(require_react());

  // node_modules/@remotion/player/dist/esm/index.mjs
  var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);

  // node_modules/remotion/dist/esm/index.mjs
  var import_react = __toESM(require_react(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_react3 = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var import_react17 = __toESM(require_react(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react18 = __toESM(require_react(), 1);
  var import_react19 = __toESM(require_react(), 1);
  var import_react20 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_react21 = __toESM(require_react(), 1);
  var import_react22 = __toESM(require_react(), 1);
  var import_react23 = __toESM(require_react(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_react24 = __toESM(require_react(), 1);
  var import_react25 = __toESM(require_react(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_react26 = __toESM(require_react(), 1);
  var import_react27 = __toESM(require_react(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_react28 = __toESM(require_react(), 1);
  var import_react29 = __toESM(require_react(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_react30 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_react31 = __toESM(require_react(), 1);
  var import_react32 = __toESM(require_react(), 1);
  var React13 = __toESM(require_react(), 1);
  var import_react33 = __toESM(require_react(), 1);
  var import_react34 = __toESM(require_react(), 1);
  var import_react35 = __toESM(require_react(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var import_react36 = __toESM(require_react(), 1);
  var import_react37 = __toESM(require_react(), 1);
  var import_react38 = __toESM(require_react(), 1);
  var import_react39 = __toESM(require_react(), 1);
  var import_react40 = __toESM(require_react(), 1);
  var import_react41 = __toESM(require_react(), 1);
  var import_react42 = __toESM(require_react(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var import_react43 = __toESM(require_react(), 1);
  var import_react44 = __toESM(require_react(), 1);
  var import_react45 = __toESM(require_react(), 1);
  var import_react46 = __toESM(require_react(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var import_react47 = __toESM(require_react(), 1);
  var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
  var import_react48 = __toESM(require_react(), 1);
  var import_react_dom = __toESM(require_react_dom(), 1);
  var import_react49 = __toESM(require_react(), 1);
  var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
  var import_react50 = __toESM(require_react(), 1);
  var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
  var import_react51 = __toESM(require_react(), 1);
  var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
  var import_react52 = __toESM(require_react(), 1);
  var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
  var import_react53 = __toESM(require_react(), 1);
  var import_react54 = __toESM(require_react(), 1);
  var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
  var import_react55 = __toESM(require_react(), 1);
  var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
  var import_react56 = __toESM(require_react(), 1);
  var import_react57 = __toESM(require_react(), 1);
  var import_react58 = __toESM(require_react(), 1);
  var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
  var import_react59 = __toESM(require_react(), 1);
  var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
  var import_react60 = __toESM(require_react(), 1);
  var import_react61 = __toESM(require_react(), 1);
  var import_react62 = __toESM(require_react(), 1);
  var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
  var import_react63 = __toESM(require_react(), 1);
  var import_react64 = __toESM(require_react(), 1);
  var import_react65 = __toESM(require_react(), 1);
  var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
  var import_react66 = __toESM(require_react(), 1);
  var import_react67 = __toESM(require_react(), 1);
  var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
  var __defProp2 = Object.defineProperty;
  var __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, {
        get: all[name],
        enumerable: true,
        configurable: true,
        set: (newValue) => all[name] = () => newValue
      });
  };
  if (typeof import_react.createContext !== "function") {
    const err = [
      'Remotion requires React.createContext, but it is "undefined".',
      'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
      "",
      "Before:",
      '  import {useCurrentFrame} from "remotion";',
      "",
      "After:",
      '  "use client";',
      '  import {useCurrentFrame} from "remotion";'
    ];
    throw new Error(err.join(`
`));
  }
  function getNodeEnvString() {
    return ["NOD", "E_EN", "V"].join("");
  }
  var getEnvString = () => {
    return ["e", "nv"].join("");
  };
  var getRemotionEnvironment = () => {
    const isPlayer = typeof window !== "undefined" && window.remotion_isPlayer;
    const isRendering = typeof window !== "undefined" && typeof window.process !== "undefined" && typeof window.process.env !== "undefined" && (window.process[getEnvString()][getNodeEnvString()] === "test" || window.process[getEnvString()][getNodeEnvString()] === "production" && typeof window !== "undefined" && typeof window.remotion_puppeteerTimeout !== "undefined");
    const isStudio = typeof window !== "undefined" && window.remotion_isStudio;
    const isReadOnlyStudio = typeof window !== "undefined" && window.remotion_isReadOnlyStudio;
    return {
      isStudio,
      isRendering,
      isPlayer,
      isReadOnlyStudio,
      isClientSideRendering: false
    };
  };
  var originalCreateElement = import_react2.default.createElement;
  var componentsToAddStacksTo = [];
  var enableSequenceStackTraces = () => {
    if (!getRemotionEnvironment().isStudio) {
      return;
    }
    const proxy = new Proxy(originalCreateElement, {
      apply(target, thisArg, argArray) {
        if (componentsToAddStacksTo.includes(argArray[0])) {
          const [first, props, ...rest] = argArray;
          const newProps = {
            ...props ?? {},
            stack: new Error().stack
          };
          return Reflect.apply(target, thisArg, [first, newProps, ...rest]);
        }
        return Reflect.apply(target, thisArg, argArray);
      }
    });
    import_react2.default.createElement = proxy;
  };
  var addSequenceStackTraces = (component) => {
    componentsToAddStacksTo.push(component);
    enableSequenceStackTraces();
  };
  var IsPlayerContext = (0, import_react3.createContext)(false);
  var IsPlayerContextProvider = ({
    children
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IsPlayerContext.Provider, {
      value: true,
      children
    });
  };
  var useIsPlayer = () => {
    return (0, import_react3.useContext)(IsPlayerContext);
  };
  function truthy(value) {
    return Boolean(value);
  }
  var VERSION = "4.0.354";
  var checkMultipleRemotionVersions = () => {
    if (typeof globalThis === "undefined") {
      return;
    }
    const set = () => {
      globalThis.remotion_imported = VERSION;
      if (typeof window !== "undefined") {
        window.remotion_imported = VERSION;
      }
    };
    const alreadyImported = globalThis.remotion_imported || typeof window !== "undefined" && window.remotion_imported;
    if (alreadyImported) {
      if (alreadyImported === VERSION) {
        return;
      }
      if (typeof alreadyImported === "string" && alreadyImported.includes("webcodecs")) {
        set();
        return;
      }
      throw new TypeError(`\u{1F6A8} Multiple versions of Remotion detected: ${[
        VERSION,
        typeof alreadyImported === "string" ? alreadyImported : "an older version"
      ].filter(truthy).join(" and ")}. This will cause things to break in an unexpected way.
Check that all your Remotion packages are on the same version. If your dependencies depend on Remotion, make them peer dependencies. You can also run \`npx remotion versions\` from your terminal to see which versions are mismatching.`);
    }
    set();
  };
  var hasTailwindClassName = ({
    className: className2,
    classPrefix,
    type
  }) => {
    if (!className2) {
      return false;
    }
    if (type === "exact") {
      const split = className2.split(" ");
      return classPrefix.some((token) => {
        return split.some((part) => {
          return part.trim() === token || part.trim().endsWith(`:${token}`) || part.trim().endsWith(`!${token}`);
        });
      });
    }
    return classPrefix.some((prefix) => {
      return className2.startsWith(prefix) || className2.includes(` ${prefix}`) || className2.includes(`!${prefix}`) || className2.includes(`:${prefix}`);
    });
  };
  var AbsoluteFillRefForwarding = (props, ref) => {
    const { style: style2, ...other } = props;
    const actualStyle = (0, import_react5.useMemo)(() => {
      return {
        position: "absolute",
        top: hasTailwindClassName({
          className: other.className,
          classPrefix: ["top-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        left: hasTailwindClassName({
          className: other.className,
          classPrefix: ["left-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        right: hasTailwindClassName({
          className: other.className,
          classPrefix: ["right-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        bottom: hasTailwindClassName({
          className: other.className,
          classPrefix: ["bottom-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        width: hasTailwindClassName({
          className: other.className,
          classPrefix: ["w-"],
          type: "prefix"
        }) ? void 0 : "100%",
        height: hasTailwindClassName({
          className: other.className,
          classPrefix: ["h-"],
          type: "prefix"
        }) ? void 0 : "100%",
        display: hasTailwindClassName({
          className: other.className,
          classPrefix: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden"
          ],
          type: "exact"
        }) ? void 0 : "flex",
        flexDirection: hasTailwindClassName({
          className: other.className,
          classPrefix: [
            "flex-row",
            "flex-col",
            "flex-row-reverse",
            "flex-col-reverse"
          ],
          type: "exact"
        }) ? void 0 : "column",
        ...style2
      };
    }, [other.className, style2]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
      ref,
      style: actualStyle,
      ...other
    });
  };
  var AbsoluteFill = (0, import_react5.forwardRef)(AbsoluteFillRefForwarding);
  var SequenceContext = (0, import_react6.createContext)(null);
  var SequenceManager = import_react7.default.createContext({
    registerSequence: () => {
      throw new Error("SequenceManagerContext not initialized");
    },
    unregisterSequence: () => {
      throw new Error("SequenceManagerContext not initialized");
    },
    sequences: []
  });
  var SequenceVisibilityToggleContext = import_react7.default.createContext({
    hidden: {},
    setHidden: () => {
      throw new Error("SequenceVisibilityToggle not initialized");
    }
  });
  var SequenceManagerProvider = ({ children }) => {
    const [sequences, setSequences] = (0, import_react7.useState)([]);
    const [hidden, setHidden] = (0, import_react7.useState)({});
    const registerSequence = (0, import_react7.useCallback)((seq) => {
      setSequences((seqs) => {
        return [...seqs, seq];
      });
    }, []);
    const unregisterSequence = (0, import_react7.useCallback)((seq) => {
      setSequences((seqs) => seqs.filter((s) => s.id !== seq));
    }, []);
    const sequenceContext = (0, import_react7.useMemo)(() => {
      return {
        registerSequence,
        sequences,
        unregisterSequence
      };
    }, [registerSequence, sequences, unregisterSequence]);
    const hiddenContext = (0, import_react7.useMemo)(() => {
      return {
        hidden,
        setHidden
      };
    }, [hidden]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SequenceManager.Provider, {
      value: sequenceContext,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SequenceVisibilityToggleContext.Provider, {
        value: hiddenContext,
        children
      })
    });
  };
  var NonceContext = (0, import_react8.createContext)({
    getNonce: () => 0,
    fastRefreshes: 0,
    manualRefreshes: 0
  });
  var SetNonceContext = (0, import_react8.createContext)({
    increaseManualRefreshes: () => {
    }
  });
  var useNonce = () => {
    const context = (0, import_react8.useContext)(NonceContext);
    const [nonce, setNonce] = (0, import_react8.useState)(() => context.getNonce());
    const lastContext = (0, import_react8.useRef)(context);
    (0, import_react8.useEffect)(() => {
      if (lastContext.current === context) {
        return;
      }
      lastContext.current = context;
      setNonce(context.getNonce);
    }, [context]);
    return nonce;
  };
  var exports_timeline_position_state = {};
  __export2(exports_timeline_position_state, {
    useTimelineSetFrame: () => useTimelineSetFrame,
    useTimelinePosition: () => useTimelinePosition,
    usePlayingState: () => usePlayingState,
    persistCurrentFrame: () => persistCurrentFrame,
    getInitialFrameState: () => getInitialFrameState,
    getFrameForComposition: () => getFrameForComposition,
    TimelineContext: () => TimelineContext,
    SetTimelineContext: () => SetTimelineContext
  });
  var RemotionEnvironmentContext = import_react11.default.createContext(null);
  var useRemotionEnvironment = () => {
    const context = (0, import_react10.useContext)(RemotionEnvironmentContext);
    const [env] = (0, import_react10.useState)(() => getRemotionEnvironment());
    return context ?? env;
  };
  var CompositionManager = (0, import_react13.createContext)({
    compositions: [],
    folders: [],
    currentCompositionMetadata: null,
    canvasContent: null
  });
  var CompositionSetters = (0, import_react13.createContext)({
    registerComposition: () => {
      return;
    },
    unregisterComposition: () => {
      return;
    },
    registerFolder: () => {
      return;
    },
    unregisterFolder: () => {
      return;
    },
    setCanvasContent: () => {
      return;
    },
    updateCompositionDefaultProps: () => {
      return;
    },
    onlyRenderComposition: null
  });
  var EditorPropsContext = (0, import_react15.createContext)({
    props: {},
    updateProps: () => {
      throw new Error("Not implemented");
    },
    resetUnsaved: () => {
      throw new Error("Not implemented");
    }
  });
  var editorPropsProviderRef = import_react15.default.createRef();
  var timeValueRef = import_react15.default.createRef();
  var EditorPropsProvider = ({ children }) => {
    const [props, setProps] = import_react15.default.useState({});
    const updateProps = (0, import_react15.useCallback)(({
      defaultProps,
      id,
      newProps
    }) => {
      setProps((prev) => {
        return {
          ...prev,
          [id]: typeof newProps === "function" ? newProps(prev[id] ?? defaultProps) : newProps
        };
      });
    }, []);
    const resetUnsaved = (0, import_react15.useCallback)((compositionId) => {
      setProps((prev) => {
        if (prev[compositionId]) {
          const newProps = { ...prev };
          delete newProps[compositionId];
          return newProps;
        }
        return prev;
      });
    }, []);
    (0, import_react15.useImperativeHandle)(editorPropsProviderRef, () => {
      return {
        getProps: () => props,
        setProps
      };
    }, [props]);
    const ctx = (0, import_react15.useMemo)(() => {
      return { props, updateProps, resetUnsaved };
    }, [props, resetUnsaved, updateProps]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EditorPropsContext.Provider, {
      value: ctx,
      children
    });
  };
  var DATE_TOKEN = "remotion-date:";
  var FILE_TOKEN = "remotion-file:";
  var serializeJSONWithSpecialTypes = ({
    data,
    indent,
    staticBase
  }) => {
    let customDateUsed = false;
    let customFileUsed = false;
    let mapUsed = false;
    let setUsed = false;
    try {
      const serializedString = JSON.stringify(data, function(key, value) {
        const item = this[key];
        if (item instanceof Date) {
          customDateUsed = true;
          return `${DATE_TOKEN}${item.toISOString()}`;
        }
        if (item instanceof Map) {
          mapUsed = true;
          return value;
        }
        if (item instanceof Set) {
          setUsed = true;
          return value;
        }
        if (typeof item === "string" && staticBase !== null && item.startsWith(staticBase)) {
          customFileUsed = true;
          return `${FILE_TOKEN}${item.replace(staticBase + "/", "")}`;
        }
        return value;
      }, indent);
      return { serializedString, customDateUsed, customFileUsed, mapUsed, setUsed };
    } catch (err) {
      throw new Error("Could not serialize the passed input props to JSON: " + err.message);
    }
  };
  var deserializeJSONWithSpecialTypes = (data) => {
    return JSON.parse(data, (_, value) => {
      if (typeof value === "string" && value.startsWith(DATE_TOKEN)) {
        return new Date(value.replace(DATE_TOKEN, ""));
      }
      if (typeof value === "string" && value.startsWith(FILE_TOKEN)) {
        return `${window.remotion_staticBase}/${value.replace(FILE_TOKEN, "")}`;
      }
      return value;
    });
  };
  var serializeThenDeserialize = (props) => {
    return deserializeJSONWithSpecialTypes(serializeJSONWithSpecialTypes({
      data: props,
      indent: 2,
      staticBase: window.remotion_staticBase
    }).serializedString);
  };
  var serializeThenDeserializeInStudio = (props) => {
    if (getRemotionEnvironment().isStudio) {
      return serializeThenDeserialize(props);
    }
    return props;
  };
  var didWarnSSRImport = false;
  var warnOnceSSRImport = () => {
    if (didWarnSSRImport) {
      return;
    }
    didWarnSSRImport = true;
    console.warn("Called `getInputProps()` on the server. This function is not available server-side and has returned an empty object.");
    console.warn("To hide this warning, don't call this function on the server:");
    console.warn("  typeof window === 'undefined' ? {} : getInputProps()");
  };
  var getInputProps = () => {
    if (typeof window === "undefined") {
      warnOnceSSRImport();
      return {};
    }
    if (getRemotionEnvironment().isPlayer) {
      throw new Error("You cannot call `getInputProps()` from a <Player>. Instead, the props are available as React props from component that you passed as `component` prop.");
    }
    const param = window.remotion_inputProps;
    if (!param) {
      return {};
    }
    const parsed = deserializeJSONWithSpecialTypes(param);
    return parsed;
  };
  var validCodecs = [
    "h264",
    "h265",
    "vp8",
    "vp9",
    "mp3",
    "aac",
    "wav",
    "prores",
    "h264-mkv",
    "h264-ts",
    "gif"
  ];
  function validateCodec(defaultCodec, location, name) {
    if (typeof defaultCodec === "undefined") {
      return;
    }
    if (typeof defaultCodec !== "string") {
      throw new TypeError(`The "${name}" prop ${location} must be a string, but you passed a value of type ${typeof defaultCodec}.`);
    }
    if (!validCodecs.includes(defaultCodec)) {
      throw new Error(`The "${name}" prop ${location} must be one of ${validCodecs.join(", ")}, but you passed ${defaultCodec}.`);
    }
  }
  function validateDimension(amount, nameOfProp, location) {
    if (typeof amount !== "number") {
      throw new Error(`The "${nameOfProp}" prop ${location} must be a number, but you passed a value of type ${typeof amount}`);
    }
    if (isNaN(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must not be NaN, but is NaN.`);
    }
    if (!Number.isFinite(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be finite, but is ${amount}.`);
    }
    if (amount % 1 !== 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be an integer, but is ${amount}.`);
    }
    if (amount <= 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be positive, but got ${amount}.`);
    }
  }
  function validateDurationInFrames(durationInFrames, options) {
    const { allowFloats, component } = options;
    if (typeof durationInFrames === "undefined") {
      throw new Error(`The "durationInFrames" prop ${component} is missing.`);
    }
    if (typeof durationInFrames !== "number") {
      throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
    }
    if (durationInFrames <= 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
    }
    if (!allowFloats && durationInFrames % 1 !== 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
    }
    if (!Number.isFinite(durationInFrames)) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
    }
  }
  function validateFps(fps, location, isGif) {
    if (typeof fps !== "number") {
      throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location}`);
    }
    if (!Number.isFinite(fps)) {
      throw new Error(`"fps" must be a finite, but you passed ${fps} ${location}`);
    }
    if (isNaN(fps)) {
      throw new Error(`"fps" must not be NaN, but got ${fps} ${location}`);
    }
    if (fps <= 0) {
      throw new TypeError(`"fps" must be positive, but got ${fps} ${location}`);
    }
    if (isGif && fps > 50) {
      throw new TypeError(`The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif`);
    }
  }
  var validateCalculated = ({
    calculated,
    compositionId,
    compositionFps,
    compositionHeight,
    compositionWidth,
    compositionDurationInFrames
  }) => {
    const calculateMetadataErrorLocation = `calculated by calculateMetadata() for the composition "${compositionId}"`;
    const defaultErrorLocation = `of the "<Composition />" component with the id "${compositionId}"`;
    const width = calculated?.width ?? compositionWidth ?? void 0;
    validateDimension(width, "width", calculated?.width ? calculateMetadataErrorLocation : defaultErrorLocation);
    const height = calculated?.height ?? compositionHeight ?? void 0;
    validateDimension(height, "height", calculated?.height ? calculateMetadataErrorLocation : defaultErrorLocation);
    const fps = calculated?.fps ?? compositionFps ?? null;
    validateFps(fps, calculated?.fps ? calculateMetadataErrorLocation : defaultErrorLocation, false);
    const durationInFrames = calculated?.durationInFrames ?? compositionDurationInFrames ?? null;
    validateDurationInFrames(durationInFrames, {
      allowFloats: false,
      component: `of the "<Composition />" component with the id "${compositionId}"`
    });
    const defaultCodec = calculated?.defaultCodec;
    validateCodec(defaultCodec, calculateMetadataErrorLocation, "defaultCodec");
    const defaultOutName = calculated?.defaultOutName;
    const defaultVideoImageFormat = calculated?.defaultVideoImageFormat;
    const defaultPixelFormat = calculated?.defaultPixelFormat;
    return {
      width,
      height,
      fps,
      durationInFrames,
      defaultCodec,
      defaultOutName,
      defaultVideoImageFormat,
      defaultPixelFormat
    };
  };
  var resolveVideoConfig = ({
    calculateMetadata,
    signal,
    defaultProps,
    originalProps,
    compositionId,
    compositionDurationInFrames,
    compositionFps,
    compositionHeight,
    compositionWidth
  }) => {
    const calculatedProm = calculateMetadata ? calculateMetadata({
      defaultProps,
      props: originalProps,
      abortSignal: signal,
      compositionId,
      isRendering: getRemotionEnvironment().isRendering
    }) : null;
    if (calculatedProm !== null && typeof calculatedProm === "object" && "then" in calculatedProm) {
      return calculatedProm.then((c2) => {
        const {
          height,
          width,
          durationInFrames,
          fps,
          defaultCodec,
          defaultOutName,
          defaultVideoImageFormat,
          defaultPixelFormat
        } = validateCalculated({
          calculated: c2,
          compositionDurationInFrames,
          compositionFps,
          compositionHeight,
          compositionWidth,
          compositionId
        });
        return {
          width,
          height,
          fps,
          durationInFrames,
          id: compositionId,
          defaultProps: serializeThenDeserializeInStudio(defaultProps),
          props: serializeThenDeserializeInStudio(c2.props ?? originalProps),
          defaultCodec: defaultCodec ?? null,
          defaultOutName: defaultOutName ?? null,
          defaultVideoImageFormat: defaultVideoImageFormat ?? null,
          defaultPixelFormat: defaultPixelFormat ?? null
        };
      });
    }
    const data = validateCalculated({
      calculated: calculatedProm,
      compositionDurationInFrames,
      compositionFps,
      compositionHeight,
      compositionWidth,
      compositionId
    });
    if (calculatedProm === null) {
      return {
        ...data,
        id: compositionId,
        defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
        props: serializeThenDeserializeInStudio(originalProps),
        defaultCodec: null,
        defaultOutName: null,
        defaultVideoImageFormat: null,
        defaultPixelFormat: null
      };
    }
    return {
      ...data,
      id: compositionId,
      defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
      props: serializeThenDeserializeInStudio(calculatedProm.props ?? originalProps),
      defaultCodec: calculatedProm.defaultCodec ?? null,
      defaultOutName: calculatedProm.defaultOutName ?? null,
      defaultVideoImageFormat: calculatedProm.defaultVideoImageFormat ?? null,
      defaultPixelFormat: calculatedProm.defaultPixelFormat ?? null
    };
  };
  var resolveVideoConfigOrCatch = (params) => {
    try {
      const promiseOrReturnValue = resolveVideoConfig(params);
      return {
        type: "success",
        result: promiseOrReturnValue
      };
    } catch (err) {
      return {
        type: "error",
        error: err
      };
    }
  };
  var ResolveCompositionContext = (0, import_react14.createContext)(null);
  var resolveCompositionsRef = (0, import_react14.createRef)();
  var needsResolution = (composition) => {
    return Boolean(composition.calculateMetadata);
  };
  var PROPS_UPDATED_EXTERNALLY = "remotion.propsUpdatedExternally";
  var ResolveCompositionConfig = ({ children }) => {
    const [currentRenderModalComposition, setCurrentRenderModalComposition] = (0, import_react14.useState)(null);
    const { compositions, canvasContent, currentCompositionMetadata } = (0, import_react14.useContext)(CompositionManager);
    const { fastRefreshes, manualRefreshes } = (0, import_react14.useContext)(NonceContext);
    if (manualRefreshes) {
    }
    const selectedComposition = (0, import_react14.useMemo)(() => {
      return compositions.find((c2) => canvasContent && canvasContent.type === "composition" && canvasContent.compositionId === c2.id);
    }, [canvasContent, compositions]);
    const renderModalComposition = compositions.find((c2) => c2.id === currentRenderModalComposition);
    const { props: allEditorProps } = (0, import_react14.useContext)(EditorPropsContext);
    const env = useRemotionEnvironment();
    const inputProps = (0, import_react14.useMemo)(() => {
      return typeof window === "undefined" || env.isPlayer ? {} : getInputProps() ?? {};
    }, [env.isPlayer]);
    const [resolvedConfigs, setResolvedConfigs] = (0, import_react14.useState)({});
    const selectedEditorProps = (0, import_react14.useMemo)(() => {
      return selectedComposition ? allEditorProps[selectedComposition.id] ?? {} : {};
    }, [allEditorProps, selectedComposition]);
    const renderModalProps = (0, import_react14.useMemo)(() => {
      return renderModalComposition ? allEditorProps[renderModalComposition.id] ?? {} : {};
    }, [allEditorProps, renderModalComposition]);
    const hasResolution = Boolean(currentCompositionMetadata);
    const doResolution = (0, import_react14.useCallback)(({
      calculateMetadata,
      combinedProps,
      compositionDurationInFrames,
      compositionFps,
      compositionHeight,
      compositionId,
      compositionWidth,
      defaultProps
    }) => {
      const controller = new AbortController();
      if (hasResolution) {
        return controller;
      }
      const { signal } = controller;
      const result = resolveVideoConfigOrCatch({
        compositionId,
        calculateMetadata,
        originalProps: combinedProps,
        signal,
        defaultProps,
        compositionDurationInFrames,
        compositionFps,
        compositionHeight,
        compositionWidth
      });
      if (result.type === "error") {
        setResolvedConfigs((r) => ({
          ...r,
          [compositionId]: {
            type: "error",
            error: result.error
          }
        }));
        return controller;
      }
      const promOrNot = result.result;
      if (typeof promOrNot === "object" && "then" in promOrNot) {
        setResolvedConfigs((r) => {
          const prev = r[compositionId];
          if (prev?.type === "success" || prev?.type === "success-and-refreshing") {
            return {
              ...r,
              [compositionId]: {
                type: "success-and-refreshing",
                result: prev.result
              }
            };
          }
          return {
            ...r,
            [compositionId]: {
              type: "loading"
            }
          };
        });
        promOrNot.then((c2) => {
          if (controller.signal.aborted) {
            return;
          }
          setResolvedConfigs((r) => ({
            ...r,
            [compositionId]: {
              type: "success",
              result: c2
            }
          }));
        }).catch((err) => {
          if (controller.signal.aborted) {
            return;
          }
          setResolvedConfigs((r) => ({
            ...r,
            [compositionId]: {
              type: "error",
              error: err
            }
          }));
        });
      } else {
        setResolvedConfigs((r) => ({
          ...r,
          [compositionId]: {
            type: "success",
            result: promOrNot
          }
        }));
      }
      return controller;
    }, [hasResolution]);
    const currentComposition = canvasContent?.type === "composition" ? canvasContent.compositionId : null;
    (0, import_react14.useImperativeHandle)(resolveCompositionsRef, () => {
      return {
        setCurrentRenderModalComposition: (id) => {
          setCurrentRenderModalComposition(id);
        },
        reloadCurrentlySelectedComposition: () => {
          if (!currentComposition) {
            return;
          }
          const composition = compositions.find((c2) => c2.id === currentComposition);
          if (!composition) {
            throw new Error(`Could not find composition with id ${currentComposition}`);
          }
          const editorProps = allEditorProps[currentComposition] ?? {};
          const defaultProps = {
            ...composition.defaultProps ?? {},
            ...editorProps ?? {}
          };
          const props = {
            ...defaultProps,
            ...inputProps ?? {}
          };
          doResolution({
            defaultProps,
            calculateMetadata: composition.calculateMetadata,
            combinedProps: props,
            compositionDurationInFrames: composition.durationInFrames ?? null,
            compositionFps: composition.fps ?? null,
            compositionHeight: composition.height ?? null,
            compositionWidth: composition.width ?? null,
            compositionId: composition.id
          });
        }
      };
    }, [
      allEditorProps,
      compositions,
      currentComposition,
      doResolution,
      inputProps
    ]);
    const isTheSame = selectedComposition?.id === renderModalComposition?.id;
    const currentDefaultProps = (0, import_react14.useMemo)(() => {
      return {
        ...selectedComposition?.defaultProps ?? {},
        ...selectedEditorProps ?? {}
      };
    }, [selectedComposition?.defaultProps, selectedEditorProps]);
    const originalProps = (0, import_react14.useMemo)(() => {
      return {
        ...currentDefaultProps,
        ...inputProps ?? {}
      };
    }, [currentDefaultProps, inputProps]);
    const canResolve = selectedComposition && needsResolution(selectedComposition);
    const shouldIgnoreUpdate = typeof window !== "undefined" && window.remotion_ignoreFastRefreshUpdate && fastRefreshes <= window.remotion_ignoreFastRefreshUpdate;
    (0, import_react14.useEffect)(() => {
      if (shouldIgnoreUpdate) {
        return;
      }
      if (canResolve) {
        const controller = doResolution({
          calculateMetadata: selectedComposition.calculateMetadata,
          combinedProps: originalProps,
          compositionDurationInFrames: selectedComposition.durationInFrames ?? null,
          compositionFps: selectedComposition.fps ?? null,
          compositionHeight: selectedComposition.height ?? null,
          compositionWidth: selectedComposition.width ?? null,
          defaultProps: currentDefaultProps,
          compositionId: selectedComposition.id
        });
        return () => {
          controller.abort();
        };
      }
    }, [
      canResolve,
      currentDefaultProps,
      doResolution,
      originalProps,
      selectedComposition?.calculateMetadata,
      selectedComposition?.durationInFrames,
      selectedComposition?.fps,
      selectedComposition?.height,
      selectedComposition?.id,
      selectedComposition?.width,
      shouldIgnoreUpdate
    ]);
    (0, import_react14.useEffect)(() => {
      if (renderModalComposition && !isTheSame) {
        const combinedProps = {
          ...renderModalComposition.defaultProps ?? {},
          ...renderModalProps ?? {},
          ...inputProps ?? {}
        };
        const controller = doResolution({
          calculateMetadata: renderModalComposition.calculateMetadata,
          compositionDurationInFrames: renderModalComposition.durationInFrames ?? null,
          compositionFps: renderModalComposition.fps ?? null,
          compositionHeight: renderModalComposition.height ?? null,
          compositionId: renderModalComposition.id,
          compositionWidth: renderModalComposition.width ?? null,
          defaultProps: currentDefaultProps,
          combinedProps
        });
        return () => {
          controller.abort();
        };
      }
    }, [
      currentDefaultProps,
      doResolution,
      inputProps,
      isTheSame,
      renderModalComposition,
      renderModalProps
    ]);
    const resolvedConfigsIncludingStaticOnes = (0, import_react14.useMemo)(() => {
      const staticComps = compositions.filter((c2) => {
        return c2.calculateMetadata === null;
      });
      return {
        ...resolvedConfigs,
        ...staticComps.reduce((acc, curr) => {
          return {
            ...acc,
            [curr.id]: {
              type: "success",
              result: { ...curr, defaultProps: curr.defaultProps ?? {} }
            }
          };
        }, {})
      };
    }, [compositions, resolvedConfigs]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ResolveCompositionContext.Provider, {
      value: resolvedConfigsIncludingStaticOnes,
      children
    });
  };
  var useResolvedVideoConfig = (preferredCompositionId) => {
    const context = (0, import_react14.useContext)(ResolveCompositionContext);
    const { props: allEditorProps } = (0, import_react14.useContext)(EditorPropsContext);
    const { compositions, canvasContent, currentCompositionMetadata } = (0, import_react14.useContext)(CompositionManager);
    const currentComposition = canvasContent?.type === "composition" ? canvasContent.compositionId : null;
    const compositionId = preferredCompositionId ?? currentComposition;
    const composition = compositions.find((c2) => c2.id === compositionId);
    const selectedEditorProps = (0, import_react14.useMemo)(() => {
      return composition ? allEditorProps[composition.id] ?? {} : {};
    }, [allEditorProps, composition]);
    const env = useRemotionEnvironment();
    return (0, import_react14.useMemo)(() => {
      if (!composition) {
        return null;
      }
      if (currentCompositionMetadata) {
        return {
          type: "success",
          result: {
            ...currentCompositionMetadata,
            id: composition.id,
            defaultProps: composition.defaultProps ?? {}
          }
        };
      }
      if (!needsResolution(composition)) {
        validateDurationInFrames(composition.durationInFrames, {
          allowFloats: false,
          component: `in <Composition id="${composition.id}">`
        });
        validateFps(composition.fps, `in <Composition id="${composition.id}">`, false);
        validateDimension(composition.width, "width", `in <Composition id="${composition.id}">`);
        validateDimension(composition.height, "height", `in <Composition id="${composition.id}">`);
        return {
          type: "success",
          result: {
            width: composition.width,
            height: composition.height,
            fps: composition.fps,
            id: composition.id,
            durationInFrames: composition.durationInFrames,
            defaultProps: composition.defaultProps ?? {},
            props: {
              ...composition.defaultProps ?? {},
              ...selectedEditorProps ?? {},
              ...typeof window === "undefined" || env.isPlayer ? {} : getInputProps() ?? {}
            },
            defaultCodec: null,
            defaultOutName: null,
            defaultVideoImageFormat: null,
            defaultPixelFormat: null
          }
        };
      }
      if (!context[composition.id]) {
        return null;
      }
      return context[composition.id];
    }, [
      composition,
      context,
      currentCompositionMetadata,
      selectedEditorProps,
      env.isPlayer
    ]);
  };
  var useVideo = () => {
    const { canvasContent, compositions, currentCompositionMetadata } = (0, import_react12.useContext)(CompositionManager);
    const selected = compositions.find((c2) => {
      return canvasContent?.type === "composition" && c2.id === canvasContent.compositionId;
    });
    const resolved = useResolvedVideoConfig(selected?.id ?? null);
    return (0, import_react12.useMemo)(() => {
      if (!resolved) {
        return null;
      }
      if (resolved.type === "error") {
        return null;
      }
      if (resolved.type === "loading") {
        return null;
      }
      if (!selected) {
        return null;
      }
      return {
        ...resolved.result,
        defaultProps: selected.defaultProps ?? {},
        id: selected.id,
        ...currentCompositionMetadata ?? {},
        component: selected.component
      };
    }, [currentCompositionMetadata, resolved, selected]);
  };
  var TimelineContext = (0, import_react9.createContext)({
    frame: {},
    playing: false,
    playbackRate: 1,
    rootId: "",
    imperativePlaying: {
      current: false
    },
    setPlaybackRate: () => {
      throw new Error("default");
    },
    audioAndVideoTags: { current: [] }
  });
  var SetTimelineContext = (0, import_react9.createContext)({
    setFrame: () => {
      throw new Error("default");
    },
    setPlaying: () => {
      throw new Error("default");
    }
  });
  var makeKey = () => {
    return `remotion.time-all`;
  };
  var persistCurrentFrame = (time) => {
    localStorage.setItem(makeKey(), JSON.stringify(time));
  };
  var getInitialFrameState = () => {
    const item = localStorage.getItem(makeKey()) ?? "{}";
    const obj = JSON.parse(item);
    return obj;
  };
  var getFrameForComposition = (composition) => {
    const item = localStorage.getItem(makeKey()) ?? "{}";
    const obj = JSON.parse(item);
    if (obj[composition] !== void 0) {
      return Number(obj[composition]);
    }
    if (typeof window === "undefined") {
      return 0;
    }
    return window.remotion_initialFrame ?? 0;
  };
  var useTimelinePosition = () => {
    const videoConfig = useVideo();
    const state = (0, import_react9.useContext)(TimelineContext);
    const env = useRemotionEnvironment();
    if (!videoConfig) {
      return typeof window === "undefined" ? 0 : window.remotion_initialFrame ?? 0;
    }
    const unclamped = state.frame[videoConfig.id] ?? (env.isPlayer ? 0 : getFrameForComposition(videoConfig.id));
    return Math.min(videoConfig.durationInFrames - 1, unclamped);
  };
  var useTimelineSetFrame = () => {
    const { setFrame } = (0, import_react9.useContext)(SetTimelineContext);
    return setFrame;
  };
  var usePlayingState = () => {
    const { playing, imperativePlaying } = (0, import_react9.useContext)(TimelineContext);
    const { setPlaying } = (0, import_react9.useContext)(SetTimelineContext);
    return (0, import_react9.useMemo)(() => [playing, setPlaying, imperativePlaying], [imperativePlaying, playing, setPlaying]);
  };
  var CanUseRemotionHooks = (0, import_react17.createContext)(false);
  var CanUseRemotionHooksProvider = ({ children }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CanUseRemotionHooks.Provider, {
      value: true,
      children
    });
  };
  var useUnsafeVideoConfig = () => {
    const context = (0, import_react18.useContext)(SequenceContext);
    const ctxWidth = context?.width ?? null;
    const ctxHeight = context?.height ?? null;
    const ctxDuration = context?.durationInFrames ?? null;
    const video = useVideo();
    return (0, import_react18.useMemo)(() => {
      if (!video) {
        return null;
      }
      const {
        id,
        durationInFrames,
        fps,
        height,
        width,
        defaultProps,
        props,
        defaultCodec,
        defaultOutName,
        defaultVideoImageFormat,
        defaultPixelFormat
      } = video;
      return {
        id,
        width: ctxWidth ?? width,
        height: ctxHeight ?? height,
        fps,
        durationInFrames: ctxDuration ?? durationInFrames,
        defaultProps,
        props,
        defaultCodec,
        defaultOutName,
        defaultVideoImageFormat,
        defaultPixelFormat
      };
    }, [ctxDuration, ctxHeight, ctxWidth, video]);
  };
  var useVideoConfig = () => {
    const videoConfig = useUnsafeVideoConfig();
    const context = (0, import_react16.useContext)(CanUseRemotionHooks);
    const isPlayer = useIsPlayer();
    if (!videoConfig) {
      if (typeof window !== "undefined" && window.remotion_isPlayer || isPlayer) {
        throw new Error([
          "No video config found. Likely reasons:",
          "- You are probably calling useVideoConfig() from outside the component passed to <Player />. See https://www.remotion.dev/docs/player/examples for how to set up the Player correctly.",
          "- You have multiple versions of Remotion installed which causes the React context to get lost."
        ].join("-"));
      }
      throw new Error("No video config found. You are probably calling useVideoConfig() from a component which has not been registered as a <Composition />. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions for more information.");
    }
    if (!context) {
      throw new Error("Called useVideoConfig() outside a Remotion composition.");
    }
    return videoConfig;
  };
  var useCurrentFrame = () => {
    const canUseRemotionHooks = (0, import_react20.useContext)(CanUseRemotionHooks);
    const env = useRemotionEnvironment();
    if (!canUseRemotionHooks) {
      if (env.isPlayer) {
        throw new Error(`useCurrentFrame can only be called inside a component that was passed to <Player>. See: https://www.remotion.dev/docs/player/examples`);
      }
      throw new Error(`useCurrentFrame() can only be called inside a component that was registered as a composition. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions`);
    }
    const frame = useTimelinePosition();
    const context = (0, import_react20.useContext)(SequenceContext);
    const contextOffset = context ? context.cumulatedFrom + context.relativeFrom : 0;
    return frame - contextOffset;
  };
  var Freeze = ({
    frame: frameToFreeze,
    children,
    active = true
  }) => {
    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();
    if (typeof frameToFreeze === "undefined") {
      throw new Error(`The <Freeze /> component requires a 'frame' prop, but none was passed.`);
    }
    if (typeof frameToFreeze !== "number") {
      throw new Error(`The 'frame' prop of <Freeze /> must be a number, but is of type ${typeof frameToFreeze}`);
    }
    if (Number.isNaN(frameToFreeze)) {
      throw new Error(`The 'frame' prop of <Freeze /> must be a real number, but it is NaN.`);
    }
    if (!Number.isFinite(frameToFreeze)) {
      throw new Error(`The 'frame' prop of <Freeze /> must be a finite number, but it is ${frameToFreeze}.`);
    }
    const isActive = (0, import_react19.useMemo)(() => {
      if (typeof active === "boolean") {
        return active;
      }
      if (typeof active === "function") {
        return active(frame);
      }
    }, [active, frame]);
    const timelineContext = (0, import_react19.useContext)(TimelineContext);
    const sequenceContext = (0, import_react19.useContext)(SequenceContext);
    const relativeFrom = sequenceContext?.relativeFrom ?? 0;
    const timelineValue = (0, import_react19.useMemo)(() => {
      if (!isActive) {
        return timelineContext;
      }
      return {
        ...timelineContext,
        playing: false,
        imperativePlaying: {
          current: false
        },
        frame: {
          [videoConfig.id]: frameToFreeze + relativeFrom
        }
      };
    }, [isActive, timelineContext, videoConfig.id, frameToFreeze, relativeFrom]);
    const newSequenceContext = (0, import_react19.useMemo)(() => {
      if (!sequenceContext) {
        return null;
      }
      return {
        ...sequenceContext,
        relativeFrom: 0,
        cumulatedFrom: 0
      };
    }, [sequenceContext]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TimelineContext.Provider, {
      value: timelineValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SequenceContext.Provider, {
        value: newSequenceContext,
        children
      })
    });
  };
  var RegularSequenceRefForwardingFunction = ({
    from = 0,
    durationInFrames = Infinity,
    children,
    name,
    height,
    width,
    showInTimeline = true,
    _remotionInternalLoopDisplay: loopDisplay,
    _remotionInternalStack: stack,
    _remotionInternalPremountDisplay: premountDisplay,
    _remotionInternalPostmountDisplay: postmountDisplay,
    ...other
  }, ref) => {
    const { layout = "absolute-fill" } = other;
    const [id] = (0, import_react4.useState)(() => String(Math.random()));
    const parentSequence = (0, import_react4.useContext)(SequenceContext);
    const { rootId } = (0, import_react4.useContext)(TimelineContext);
    const cumulatedFrom = parentSequence ? parentSequence.cumulatedFrom + parentSequence.relativeFrom : 0;
    const nonce = useNonce();
    if (layout !== "absolute-fill" && layout !== "none") {
      throw new TypeError(`The layout prop of <Sequence /> expects either "absolute-fill" or "none", but you passed: ${layout}`);
    }
    if (layout === "none" && typeof other.style !== "undefined") {
      throw new TypeError('If layout="none", you may not pass a style.');
    }
    if (typeof durationInFrames !== "number") {
      throw new TypeError(`You passed to durationInFrames an argument of type ${typeof durationInFrames}, but it must be a number.`);
    }
    if (durationInFrames <= 0) {
      throw new TypeError(`durationInFrames must be positive, but got ${durationInFrames}`);
    }
    if (typeof from !== "number") {
      throw new TypeError(`You passed to the "from" props of your <Sequence> an argument of type ${typeof from}, but it must be a number.`);
    }
    if (!Number.isFinite(from)) {
      throw new TypeError(`The "from" prop of a sequence must be finite, but got ${from}.`);
    }
    const absoluteFrame = useTimelinePosition();
    const videoConfig = useVideoConfig();
    const parentSequenceDuration = parentSequence ? Math.min(parentSequence.durationInFrames - from, durationInFrames) : durationInFrames;
    const actualDurationInFrames = Math.max(0, Math.min(videoConfig.durationInFrames - from, parentSequenceDuration));
    const { registerSequence, unregisterSequence } = (0, import_react4.useContext)(SequenceManager);
    const { hidden } = (0, import_react4.useContext)(SequenceVisibilityToggleContext);
    const premounting = (0, import_react4.useMemo)(() => {
      return parentSequence?.premounting || Boolean(other._remotionInternalIsPremounting);
    }, [other._remotionInternalIsPremounting, parentSequence?.premounting]);
    const postmounting = (0, import_react4.useMemo)(() => {
      return parentSequence?.postmounting || Boolean(other._remotionInternalIsPostmounting);
    }, [other._remotionInternalIsPostmounting, parentSequence?.postmounting]);
    const contextValue = (0, import_react4.useMemo)(() => {
      return {
        cumulatedFrom,
        relativeFrom: from,
        durationInFrames: actualDurationInFrames,
        parentFrom: parentSequence?.relativeFrom ?? 0,
        id,
        height: height ?? parentSequence?.height ?? null,
        width: width ?? parentSequence?.width ?? null,
        premounting,
        postmounting
      };
    }, [
      cumulatedFrom,
      from,
      actualDurationInFrames,
      parentSequence,
      id,
      height,
      width,
      premounting,
      postmounting
    ]);
    const timelineClipName = (0, import_react4.useMemo)(() => {
      return name ?? "";
    }, [name]);
    const env = useRemotionEnvironment();
    (0, import_react4.useEffect)(() => {
      if (!env.isStudio) {
        return;
      }
      registerSequence({
        from,
        duration: actualDurationInFrames,
        id,
        displayName: timelineClipName,
        parent: parentSequence?.id ?? null,
        type: "sequence",
        rootId,
        showInTimeline,
        nonce,
        loopDisplay,
        stack: stack ?? null,
        premountDisplay: premountDisplay ?? null,
        postmountDisplay: postmountDisplay ?? null
      });
      return () => {
        unregisterSequence(id);
      };
    }, [
      durationInFrames,
      id,
      name,
      registerSequence,
      timelineClipName,
      unregisterSequence,
      parentSequence?.id,
      actualDurationInFrames,
      rootId,
      from,
      showInTimeline,
      nonce,
      loopDisplay,
      stack,
      premountDisplay,
      postmountDisplay,
      env.isStudio
    ]);
    const endThreshold = Math.ceil(cumulatedFrom + from + durationInFrames - 1);
    const content = absoluteFrame < cumulatedFrom + from ? null : absoluteFrame > endThreshold ? null : children;
    const styleIfThere = other.layout === "none" ? void 0 : other.style;
    const defaultStyle = (0, import_react4.useMemo)(() => {
      return {
        flexDirection: void 0,
        ...width ? { width } : {},
        ...height ? { height } : {},
        ...styleIfThere ?? {}
      };
    }, [height, styleIfThere, width]);
    if (ref !== null && layout === "none") {
      throw new TypeError('It is not supported to pass both a `ref` and `layout="none"` to <Sequence />.');
    }
    const isSequenceHidden = hidden[id] ?? false;
    if (isSequenceHidden) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SequenceContext.Provider, {
      value: contextValue,
      children: content === null ? null : other.layout === "none" ? content : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AbsoluteFill, {
        ref,
        style: defaultStyle,
        className: other.className,
        children: content
      })
    });
  };
  var RegularSequence = (0, import_react4.forwardRef)(RegularSequenceRefForwardingFunction);
  var PremountedPostmountedSequenceRefForwardingFunction = (props, ref) => {
    const frame = useCurrentFrame();
    if (props.layout === "none") {
      throw new Error('`<Sequence>` with `premountFor` and `postmountFor` props does not support layout="none"');
    }
    const {
      style: passedStyle,
      from = 0,
      durationInFrames = Infinity,
      premountFor = 0,
      postmountFor = 0,
      styleWhilePremounted,
      styleWhilePostmounted,
      ...otherProps
    } = props;
    const endThreshold = Math.ceil(from + durationInFrames - 1);
    const premountingActive = frame < from && frame >= from - premountFor;
    const postmountingActive = frame > endThreshold && frame <= endThreshold + postmountFor;
    const freezeFrame = premountingActive ? from : postmountingActive ? from + durationInFrames - 1 : 0;
    const isFreezingActive = premountingActive || postmountingActive;
    const style2 = (0, import_react4.useMemo)(() => {
      return {
        ...passedStyle,
        opacity: premountingActive || postmountingActive ? 0 : 1,
        pointerEvents: premountingActive || postmountingActive ? "none" : passedStyle?.pointerEvents ?? void 0,
        ...premountingActive ? styleWhilePremounted : {},
        ...postmountingActive ? styleWhilePostmounted : {}
      };
    }, [
      passedStyle,
      premountingActive,
      postmountingActive,
      styleWhilePremounted,
      styleWhilePostmounted
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Freeze, {
      frame: freezeFrame,
      active: isFreezingActive,
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Sequence, {
        ref,
        from,
        durationInFrames,
        style: style2,
        _remotionInternalPremountDisplay: premountFor,
        _remotionInternalPostmountDisplay: postmountFor,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        ...otherProps
      })
    });
  };
  var PremountedPostmountedSequence = (0, import_react4.forwardRef)(PremountedPostmountedSequenceRefForwardingFunction);
  var SequenceRefForwardingFunction = (props, ref) => {
    const env = useRemotionEnvironment();
    if (props.layout !== "none" && !env.isRendering) {
      if (props.premountFor || props.postmountFor) {
        return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PremountedPostmountedSequence, {
          ...props,
          ref
        });
      }
    }
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(RegularSequence, {
      ...props,
      ref
    });
  };
  var Sequence = (0, import_react4.forwardRef)(SequenceRefForwardingFunction);
  var isErrorLike = (err) => {
    if (err instanceof Error) {
      return true;
    }
    if (err === null) {
      return false;
    }
    if (typeof err !== "object") {
      return false;
    }
    if (!("stack" in err)) {
      return false;
    }
    if (typeof err.stack !== "string") {
      return false;
    }
    if (!("message" in err)) {
      return false;
    }
    if (typeof err.message !== "string") {
      return false;
    }
    return true;
  };
  function cancelRender(err) {
    let error2;
    if (isErrorLike(err)) {
      error2 = err;
      if (!error2.stack) {
        error2.stack = new Error(error2.message).stack;
      }
    } else if (typeof err === "string") {
      error2 = Error(err);
    } else {
      error2 = Error("Rendering was cancelled");
    }
    window.remotion_cancelledError = error2.stack;
    throw error2;
  }
  var logLevels = ["trace", "verbose", "info", "warn", "error"];
  var getNumberForLogLevel = (level) => {
    return logLevels.indexOf(level);
  };
  var isEqualOrBelowLogLevel = (currentLevel, level) => {
    return getNumberForLogLevel(currentLevel) <= getNumberForLogLevel(level);
  };
  var transformArgs = ({
    args,
    logLevel,
    tag
  }) => {
    const arr = [...args];
    if (getRemotionEnvironment().isRendering && !getRemotionEnvironment().isClientSideRendering) {
      arr.unshift(Symbol.for(`__remotion_level_${logLevel}`));
    }
    if (tag) {
      arr.unshift(Symbol.for(`__remotion_tag_${tag}`));
    }
    return arr;
  };
  var verbose = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "verbose")) {
      return console.debug(...transformArgs({ args, logLevel: "verbose", tag: options.tag }));
    }
  };
  var trace = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "trace")) {
      return console.debug(...transformArgs({ args, logLevel: "trace", tag: options.tag }));
    }
  };
  var info = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "info")) {
      return console.log(...transformArgs({ args, logLevel: "info", tag: options.tag }));
    }
  };
  var warn = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "warn")) {
      return console.warn(...transformArgs({ args, logLevel: "warn", tag: options.tag }));
    }
  };
  var error = (options, ...args) => {
    return console.error(...transformArgs({ args, logLevel: "error", tag: options.tag }));
  };
  var Log = {
    trace,
    verbose,
    info,
    warn,
    error
  };
  if (typeof window !== "undefined") {
    window.remotion_renderReady = false;
  }
  var handles = [];
  if (typeof window !== "undefined") {
    window.remotion_delayRenderTimeouts = {};
  }
  var DELAY_RENDER_CALLSTACK_TOKEN = "The delayRender was called:";
  var DELAY_RENDER_RETRIES_LEFT = "Retries left: ";
  var DELAY_RENDER_RETRY_TOKEN = "- Rendering the frame will be retried.";
  var DELAY_RENDER_CLEAR_TOKEN = "handle was cleared after";
  var defaultTimeout = 3e4;
  var delayRenderInternal = (environment, label3, options) => {
    if (typeof label3 !== "string" && typeof label3 !== "undefined") {
      throw new Error("The label parameter of delayRender() must be a string or undefined, got: " + JSON.stringify(label3));
    }
    const handle = Math.random();
    handles.push(handle);
    const called = Error().stack?.replace(/^Error/g, "") ?? "";
    if (environment.isRendering) {
      const timeoutToUse = (options?.timeoutInMilliseconds ?? (typeof window === "undefined" ? defaultTimeout : window.remotion_puppeteerTimeout ?? defaultTimeout)) - 2e3;
      if (typeof window !== "undefined") {
        const retriesLeft = (options?.retries ?? 0) - (window.remotion_attempt - 1);
        window.remotion_delayRenderTimeouts[handle] = {
          label: label3 ?? null,
          startTime: Date.now(),
          timeout: setTimeout(() => {
            const message = [
              `A delayRender()`,
              label3 ? `"${label3}"` : null,
              `was called but not cleared after ${timeoutToUse}ms. See https://remotion.dev/docs/timeout for help.`,
              retriesLeft > 0 ? DELAY_RENDER_RETRIES_LEFT + retriesLeft : null,
              retriesLeft > 0 ? DELAY_RENDER_RETRY_TOKEN : null,
              DELAY_RENDER_CALLSTACK_TOKEN,
              called
            ].filter(truthy).join(" ");
            cancelRender(Error(message));
          }, timeoutToUse)
        };
      }
    }
    if (typeof window !== "undefined") {
      window.remotion_renderReady = false;
    }
    return handle;
  };
  var continueRenderInternal = (handle, environment) => {
    if (typeof handle === "undefined") {
      throw new TypeError("The continueRender() method must be called with a parameter that is the return value of delayRender(). No value was passed.");
    }
    if (typeof handle !== "number") {
      throw new TypeError("The parameter passed into continueRender() must be the return value of delayRender() which is a number. Got: " + JSON.stringify(handle));
    }
    handles = handles.filter((h) => {
      if (h === handle) {
        if (environment.isRendering) {
          if (!window.remotion_delayRenderTimeouts[handle]) {
            return false;
          }
          const { label: label3, startTime, timeout } = window.remotion_delayRenderTimeouts[handle];
          clearTimeout(timeout);
          const message = [
            label3 ? `"${label3}"` : "A handle",
            DELAY_RENDER_CLEAR_TOKEN,
            `${Date.now() - startTime}ms`
          ].filter(truthy).join(" ");
          Log.verbose({ logLevel: window.remotion_logLevel, tag: "delayRender()" }, message);
          delete window.remotion_delayRenderTimeouts[handle];
        }
        return false;
      }
      return true;
    });
    if (handles.length === 0 && typeof window !== "undefined") {
      window.remotion_renderReady = true;
    }
  };
  var useDelayRender = () => {
    const environment = useRemotionEnvironment();
    const delayRender2 = (0, import_react22.useCallback)((label3, options) => {
      return delayRenderInternal(environment, label3, options);
    }, [environment]);
    const continueRender2 = (0, import_react22.useCallback)((handle) => {
      continueRenderInternal(handle, environment);
    }, [environment]);
    return { delayRender: delayRender2, continueRender: continueRender2 };
  };
  var calcArgs = (fit, frameSize, canvasSize) => {
    switch (fit) {
      case "fill": {
        return [
          0,
          0,
          frameSize.width,
          frameSize.height,
          0,
          0,
          canvasSize.width,
          canvasSize.height
        ];
      }
      case "contain": {
        const ratio = Math.min(canvasSize.width / frameSize.width, canvasSize.height / frameSize.height);
        const centerX = (canvasSize.width - frameSize.width * ratio) / 2;
        const centerY = (canvasSize.height - frameSize.height * ratio) / 2;
        return [
          0,
          0,
          frameSize.width,
          frameSize.height,
          centerX,
          centerY,
          frameSize.width * ratio,
          frameSize.height * ratio
        ];
      }
      case "cover": {
        const ratio = Math.max(canvasSize.width / frameSize.width, canvasSize.height / frameSize.height);
        const centerX = (canvasSize.width - frameSize.width * ratio) / 2;
        const centerY = (canvasSize.height - frameSize.height * ratio) / 2;
        return [
          0,
          0,
          frameSize.width,
          frameSize.height,
          centerX,
          centerY,
          frameSize.width * ratio,
          frameSize.height * ratio
        ];
      }
      default:
        throw new Error("Unknown fit: " + fit);
    }
  };
  var CanvasRefForwardingFunction = ({ width, height, fit, className: className2, style: style2 }, ref) => {
    const canvasRef = (0, import_react23.useRef)(null);
    const draw = (0, import_react23.useCallback)((imageData) => {
      const canvas = canvasRef.current;
      const canvasWidth = width ?? imageData.displayWidth;
      const canvasHeight = height ?? imageData.displayHeight;
      if (!canvas) {
        throw new Error("Canvas ref is not set");
      }
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) {
        throw new Error("Could not get 2d context");
      }
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      ctx.drawImage(imageData, ...calcArgs(fit, {
        height: imageData.displayHeight,
        width: imageData.displayWidth
      }, {
        width: canvasWidth,
        height: canvasHeight
      }));
    }, [fit, height, width]);
    (0, import_react23.useImperativeHandle)(ref, () => {
      return {
        draw,
        getCanvas: () => {
          if (!canvasRef.current) {
            throw new Error("Canvas ref is not set");
          }
          return canvasRef.current;
        },
        clear: () => {
          const ctx = canvasRef.current?.getContext("2d");
          if (!ctx) {
            throw new Error("Could not get 2d context");
          }
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
    }, [draw]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("canvas", {
      ref: canvasRef,
      className: className2,
      style: style2
    });
  };
  var Canvas = import_react23.default.forwardRef(CanvasRefForwardingFunction);
  var CACHE_SIZE = 5;
  var getActualTime = ({
    loopBehavior,
    durationFound,
    timeInSec
  }) => {
    return loopBehavior === "loop" ? durationFound ? timeInSec % durationFound : timeInSec : Math.min(timeInSec, durationFound || Infinity);
  };
  var decodeImage = async ({
    resolvedSrc,
    signal,
    currentTime,
    initialLoopBehavior
  }) => {
    if (typeof ImageDecoder === "undefined") {
      throw new Error("Your browser does not support the WebCodecs ImageDecoder API.");
    }
    const res = await fetch(resolvedSrc, { signal });
    const { body } = res;
    if (!body) {
      throw new Error("Got no body");
    }
    const decoder = new ImageDecoder({
      data: body,
      type: res.headers.get("Content-Type") || "image/gif"
    });
    await decoder.completed;
    const { selectedTrack } = decoder.tracks;
    if (!selectedTrack) {
      throw new Error("No selected track");
    }
    const cache2 = [];
    let durationFound = null;
    const getFrameByIndex = async (frameIndex) => {
      const foundInCache = cache2.find((c2) => c2.frameIndex === frameIndex);
      if (foundInCache && foundInCache.frame) {
        return foundInCache;
      }
      const frame = await decoder.decode({
        frameIndex,
        completeFramesOnly: true
      });
      if (foundInCache) {
        foundInCache.frame = frame.image;
      } else {
        cache2.push({
          frame: frame.image,
          frameIndex,
          timeInSeconds: frame.image.timestamp / 1e6
        });
      }
      return {
        frame: frame.image,
        frameIndex,
        timeInSeconds: frame.image.timestamp / 1e6
      };
    };
    const clearCache = (closeToTimeInSec) => {
      const itemsInCache = cache2.filter((c2) => c2.frame);
      const sortByClosestToCurrentTime = itemsInCache.sort((a2, b2) => {
        const aDiff = Math.abs(a2.timeInSeconds - closeToTimeInSec);
        const bDiff = Math.abs(b2.timeInSeconds - closeToTimeInSec);
        return aDiff - bDiff;
      });
      for (let i = 0; i < sortByClosestToCurrentTime.length; i++) {
        if (i < CACHE_SIZE) {
          continue;
        }
        const item = sortByClosestToCurrentTime[i];
        item.frame = null;
      }
    };
    const ensureFrameBeforeAndAfter = async ({
      timeInSec,
      loopBehavior
    }) => {
      const actualTimeInSec = getActualTime({
        durationFound,
        loopBehavior,
        timeInSec
      });
      const framesBefore = cache2.filter((c2) => c2.timeInSeconds <= actualTimeInSec);
      const biggestIndex = framesBefore.map((c2) => c2.frameIndex).reduce((a2, b2) => Math.max(a2, b2), 0);
      let i = biggestIndex;
      while (true) {
        const f = await getFrameByIndex(i);
        i++;
        if (!f.frame) {
          throw new Error("No frame found");
        }
        if (!f.frame.duration) {
          break;
        }
        if (i === selectedTrack.frameCount && durationFound === null) {
          const duration = (f.frame.timestamp + f.frame.duration) / 1e6;
          durationFound = duration;
        }
        if (f.timeInSeconds > actualTimeInSec || i === selectedTrack.frameCount) {
          break;
        }
      }
      if (selectedTrack.frameCount - biggestIndex < 3 && loopBehavior === "loop") {
        await getFrameByIndex(0);
      }
      clearCache(actualTimeInSec);
    };
    await ensureFrameBeforeAndAfter({
      timeInSec: currentTime,
      loopBehavior: initialLoopBehavior
    });
    await ensureFrameBeforeAndAfter({
      timeInSec: currentTime,
      loopBehavior: initialLoopBehavior
    });
    const getFrame = async (timeInSec, loopBehavior) => {
      if (durationFound !== null && timeInSec > durationFound && loopBehavior === "clear-after-finish") {
        return null;
      }
      const actualTimeInSec = getActualTime({
        loopBehavior,
        durationFound,
        timeInSec
      });
      await ensureFrameBeforeAndAfter({ timeInSec: actualTimeInSec, loopBehavior });
      const itemsInCache = cache2.filter((c2) => c2.frame);
      const closest = itemsInCache.reduce((a2, b2) => {
        const aDiff = Math.abs(a2.timeInSeconds - actualTimeInSec);
        const bDiff = Math.abs(b2.timeInSeconds - actualTimeInSec);
        return aDiff < bDiff ? a2 : b2;
      });
      if (!closest.frame) {
        throw new Error("No frame found");
      }
      return closest;
    };
    return {
      getFrame,
      frameCount: selectedTrack.frameCount
    };
  };
  var resolveAnimatedImageSource = (src) => {
    if (typeof window === "undefined") {
      return src;
    }
    return new URL(src, window.origin).href;
  };
  var AnimatedImage = (0, import_react21.forwardRef)(({
    src,
    width,
    height,
    onError,
    loopBehavior = "loop",
    playbackRate = 1,
    fit = "fill",
    ...props
  }, canvasRef) => {
    const mountState = (0, import_react21.useRef)({ isMounted: true });
    (0, import_react21.useEffect)(() => {
      const { current } = mountState;
      current.isMounted = true;
      return () => {
        current.isMounted = false;
      };
    }, []);
    const resolvedSrc = resolveAnimatedImageSource(src);
    const [imageDecoder, setImageDecoder] = (0, import_react21.useState)(null);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const [decodeHandle] = (0, import_react21.useState)(() => delayRender2(`Rendering <AnimatedImage/> with src="${resolvedSrc}"`));
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const currentTime = frame / playbackRate / fps;
    const currentTimeRef = (0, import_react21.useRef)(currentTime);
    currentTimeRef.current = currentTime;
    const ref = (0, import_react21.useRef)(null);
    (0, import_react21.useImperativeHandle)(canvasRef, () => {
      const c2 = ref.current?.getCanvas();
      if (!c2) {
        throw new Error("Canvas ref is not set");
      }
      return c2;
    }, []);
    const [initialLoopBehavior] = (0, import_react21.useState)(() => loopBehavior);
    (0, import_react21.useEffect)(() => {
      const controller = new AbortController();
      decodeImage({
        resolvedSrc,
        signal: controller.signal,
        currentTime: currentTimeRef.current,
        initialLoopBehavior
      }).then((d) => {
        setImageDecoder(d);
        continueRender2(decodeHandle);
      }).catch((err) => {
        if (err.name === "AbortError") {
          continueRender2(decodeHandle);
          return;
        }
        if (onError) {
          onError?.(err);
          continueRender2(decodeHandle);
        } else {
          cancelRender(err);
        }
      });
      return () => {
        controller.abort();
      };
    }, [
      resolvedSrc,
      decodeHandle,
      onError,
      initialLoopBehavior,
      continueRender2
    ]);
    (0, import_react21.useLayoutEffect)(() => {
      if (!imageDecoder) {
        return;
      }
      const delay2 = delayRender2(`Rendering frame at ${currentTime} of <AnimatedImage src="${src}"/>`);
      imageDecoder.getFrame(currentTime, loopBehavior).then((videoFrame) => {
        if (mountState.current.isMounted) {
          if (videoFrame === null) {
            ref.current?.clear();
          } else {
            ref.current?.draw(videoFrame.frame);
          }
        }
        continueRender2(delay2);
      }).catch((err) => {
        if (onError) {
          onError(err);
          continueRender2(delay2);
        } else {
          cancelRender(err);
        }
      });
    }, [
      currentTime,
      imageDecoder,
      loopBehavior,
      onError,
      src,
      continueRender2,
      delayRender2
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Canvas, {
      ref,
      width,
      height,
      fit,
      ...props
    });
  });
  var validateArtifactFilename = (filename) => {
    if (typeof filename !== "string") {
      throw new TypeError(`The "filename" must be a string, but you passed a value of type ${typeof filename}`);
    }
    if (filename.trim() === "") {
      throw new Error("The `filename` must not be empty");
    }
    if (!filename.match(/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g)) {
      throw new Error('The `filename` must match "/^([0-9a-zA-Z-!_.*\'()/:&$@=;+,?]+)/g". Use forward slashes only, even on Windows.');
    }
  };
  var validateContent = (content) => {
    if (typeof content !== "string" && !(content instanceof Uint8Array)) {
      throw new TypeError(`The "content" must be a string or Uint8Array, but you passed a value of type ${typeof content}`);
    }
    if (typeof content === "string" && content.trim() === "") {
      throw new Error("The `content` must not be empty");
    }
  };
  var validateRenderAsset = (artifact) => {
    if (artifact.type !== "artifact") {
      return;
    }
    validateArtifactFilename(artifact.filename);
    if (artifact.contentType === "thumbnail") {
      return;
    }
    validateContent(artifact.content);
  };
  var RenderAssetManager = (0, import_react25.createContext)({
    registerRenderAsset: () => {
      return;
    },
    unregisterRenderAsset: () => {
      return;
    },
    renderAssets: []
  });
  var RenderAssetManagerProvider = ({ children }) => {
    const [renderAssets, setRenderAssets] = (0, import_react25.useState)([]);
    const registerRenderAsset = (0, import_react25.useCallback)((renderAsset) => {
      validateRenderAsset(renderAsset);
      setRenderAssets((assets) => {
        return [...assets, renderAsset];
      });
    }, []);
    const unregisterRenderAsset = (0, import_react25.useCallback)((id) => {
      setRenderAssets((assts) => {
        return assts.filter((a2) => a2.id !== id);
      });
    }, []);
    (0, import_react25.useLayoutEffect)(() => {
      if (typeof window !== "undefined") {
        window.remotion_collectAssets = () => {
          setRenderAssets([]);
          return renderAssets;
        };
      }
    }, [renderAssets]);
    const contextValue = (0, import_react25.useMemo)(() => {
      return {
        registerRenderAsset,
        unregisterRenderAsset,
        renderAssets
      };
    }, [renderAssets, registerRenderAsset, unregisterRenderAsset]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(RenderAssetManager.Provider, {
      value: contextValue,
      children
    });
  };
  var ArtifactThumbnail = Symbol("Thumbnail");
  var Artifact = ({ filename, content, downloadBehavior }) => {
    const { registerRenderAsset, unregisterRenderAsset } = (0, import_react24.useContext)(RenderAssetManager);
    const env = useRemotionEnvironment();
    const frame = useCurrentFrame();
    const [id] = (0, import_react24.useState)(() => {
      return String(Math.random());
    });
    (0, import_react24.useEffect)(() => {
      if (!env.isRendering) {
        return;
      }
      if (content instanceof Uint8Array) {
        registerRenderAsset({
          type: "artifact",
          id,
          content: btoa(new TextDecoder("utf8").decode(content)),
          filename,
          frame,
          contentType: "binary",
          downloadBehavior: downloadBehavior ?? null
        });
      } else if (content === ArtifactThumbnail) {
        registerRenderAsset({
          type: "artifact",
          id,
          filename,
          frame,
          contentType: "thumbnail",
          downloadBehavior: downloadBehavior ?? null
        });
      } else {
        registerRenderAsset({
          type: "artifact",
          id,
          content,
          filename,
          frame,
          contentType: "text",
          downloadBehavior: downloadBehavior ?? null
        });
      }
      return () => {
        return unregisterRenderAsset(id);
      };
    }, [
      content,
      env.isRendering,
      filename,
      frame,
      id,
      registerRenderAsset,
      unregisterRenderAsset,
      downloadBehavior
    ]);
    return null;
  };
  Artifact.Thumbnail = ArtifactThumbnail;
  var getAbsoluteSrc = (relativeSrc) => {
    if (typeof window === "undefined") {
      return relativeSrc;
    }
    if (relativeSrc.startsWith("http://") || relativeSrc.startsWith("https://") || relativeSrc.startsWith("file://") || relativeSrc.startsWith("blob:") || relativeSrc.startsWith("data:")) {
      return relativeSrc;
    }
    return new URL(relativeSrc, window.origin).href;
  };
  var calculateLoopDuration = ({
    endAt,
    mediaDuration,
    playbackRate,
    startFrom
  }) => {
    let duration = mediaDuration;
    if (typeof endAt !== "undefined") {
      duration = endAt;
    }
    if (typeof startFrom !== "undefined") {
      duration -= startFrom;
    }
    const actualDuration = duration / playbackRate;
    return Math.floor(actualDuration);
  };
  var LoopContext = (0, import_react27.createContext)(null);
  var useLoop = () => {
    return import_react27.default.useContext(LoopContext);
  };
  var Loop = ({ durationInFrames, times = Infinity, children, name, ...props }) => {
    const currentFrame = useCurrentFrame();
    const { durationInFrames: compDuration } = useVideoConfig();
    validateDurationInFrames(durationInFrames, {
      component: "of the <Loop /> component",
      allowFloats: true
    });
    if (typeof times !== "number") {
      throw new TypeError(`You passed to "times" an argument of type ${typeof times}, but it must be a number.`);
    }
    if (times !== Infinity && times % 1 !== 0) {
      throw new TypeError(`The "times" prop of a loop must be an integer, but got ${times}.`);
    }
    if (times < 0) {
      throw new TypeError(`The "times" prop of a loop must be at least 0, but got ${times}`);
    }
    const maxTimes = Math.ceil(compDuration / durationInFrames);
    const actualTimes = Math.min(maxTimes, times);
    const style2 = props.layout === "none" ? void 0 : props.style;
    const maxFrame = durationInFrames * (actualTimes - 1);
    const iteration = Math.floor(currentFrame / durationInFrames);
    const start = iteration * durationInFrames;
    const from = Math.min(start, maxFrame);
    const loopDisplay = (0, import_react27.useMemo)(() => {
      return {
        numberOfTimes: actualTimes,
        startOffset: -from,
        durationInFrames
      };
    }, [actualTimes, durationInFrames, from]);
    const loopContext = (0, import_react27.useMemo)(() => {
      return {
        iteration: Math.floor(currentFrame / durationInFrames),
        durationInFrames
      };
    }, [currentFrame, durationInFrames]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LoopContext.Provider, {
      value: loopContext,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Sequence, {
        durationInFrames,
        from,
        name: name ?? "<Loop>",
        _remotionInternalLoopDisplay: loopDisplay,
        layout: props.layout,
        style: style2,
        children
      })
    });
  };
  Loop.useLoop = useLoop;
  var playbackLogging = ({
    logLevel,
    tag,
    message,
    mountTime
  }) => {
    const tags = [mountTime ? Date.now() - mountTime + "ms " : null, tag].filter(Boolean).join(" ");
    Log.trace({ logLevel, tag: null }, `[${tags}]`, message);
  };
  var PreloadContext = (0, import_react29.createContext)({});
  var preloads = {};
  var updaters = [];
  var PrefetchProvider = ({ children }) => {
    const [_preloads, _setPreloads] = (0, import_react29.useState)(() => preloads);
    (0, import_react29.useEffect)(() => {
      const updaterFunction = () => {
        _setPreloads(preloads);
      };
      updaters.push(updaterFunction);
      return () => {
        updaters = updaters.filter((u) => u !== updaterFunction);
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PreloadContext.Provider, {
      value: _preloads,
      children
    });
  };
  var removeAndGetHashFragment = (src) => {
    const hashIndex = src.indexOf("#");
    if (hashIndex === -1) {
      return null;
    }
    return hashIndex;
  };
  var getSrcWithoutHash = (src) => {
    const hashIndex = removeAndGetHashFragment(src);
    if (hashIndex === null) {
      return src;
    }
    return src.slice(0, hashIndex);
  };
  var usePreload = (src) => {
    const preloads2 = (0, import_react28.useContext)(PreloadContext);
    const hashFragmentIndex = removeAndGetHashFragment(src);
    const withoutHashFragment = getSrcWithoutHash(src);
    if (!preloads2[withoutHashFragment]) {
      return src;
    }
    if (hashFragmentIndex !== null) {
      return preloads2[withoutHashFragment] + src.slice(hashFragmentIndex);
    }
    return preloads2[withoutHashFragment];
  };
  var validateMediaProps = (props, component) => {
    if (typeof props.volume !== "number" && typeof props.volume !== "function" && typeof props.volume !== "undefined") {
      throw new TypeError(`You have passed a volume of type ${typeof props.volume} to your <${component} /> component. Volume must be a number or a function with the signature '(frame: number) => number' undefined.`);
    }
    if (typeof props.volume === "number" && props.volume < 0) {
      throw new TypeError(`You have passed a volume below 0 to your <${component} /> component. Volume must be between 0 and 1`);
    }
    if (typeof props.playbackRate !== "number" && typeof props.playbackRate !== "undefined") {
      throw new TypeError(`You have passed a playbackRate of type ${typeof props.playbackRate} to your <${component} /> component. Playback rate must a real number or undefined.`);
    }
    if (typeof props.playbackRate === "number" && (isNaN(props.playbackRate) || !Number.isFinite(props.playbackRate) || props.playbackRate <= 0)) {
      throw new TypeError(`You have passed a playbackRate of ${props.playbackRate} to your <${component} /> component. Playback rate must be a real number above 0.`);
    }
  };
  var validateStartFromProps = (startFrom, endAt) => {
    if (typeof startFrom !== "undefined") {
      if (typeof startFrom !== "number") {
        throw new TypeError(`type of startFrom prop must be a number, instead got type ${typeof startFrom}.`);
      }
      if (isNaN(startFrom) || startFrom === Infinity) {
        throw new TypeError("startFrom prop can not be NaN or Infinity.");
      }
      if (startFrom < 0) {
        throw new TypeError(`startFrom must be greater than equal to 0 instead got ${startFrom}.`);
      }
    }
    if (typeof endAt !== "undefined") {
      if (typeof endAt !== "number") {
        throw new TypeError(`type of endAt prop must be a number, instead got type ${typeof endAt}.`);
      }
      if (isNaN(endAt)) {
        throw new TypeError("endAt prop can not be NaN.");
      }
      if (endAt <= 0) {
        throw new TypeError(`endAt must be a positive number, instead got ${endAt}.`);
      }
    }
    if (endAt < startFrom) {
      throw new TypeError("endAt prop must be greater than startFrom prop.");
    }
  };
  var validateTrimProps = (trimBefore, trimAfter) => {
    if (typeof trimBefore !== "undefined") {
      if (typeof trimBefore !== "number") {
        throw new TypeError(`type of trimBefore prop must be a number, instead got type ${typeof trimBefore}.`);
      }
      if (isNaN(trimBefore) || trimBefore === Infinity) {
        throw new TypeError("trimBefore prop can not be NaN or Infinity.");
      }
      if (trimBefore < 0) {
        throw new TypeError(`trimBefore must be greater than equal to 0 instead got ${trimBefore}.`);
      }
    }
    if (typeof trimAfter !== "undefined") {
      if (typeof trimAfter !== "number") {
        throw new TypeError(`type of trimAfter prop must be a number, instead got type ${typeof trimAfter}.`);
      }
      if (isNaN(trimAfter)) {
        throw new TypeError("trimAfter prop can not be NaN.");
      }
      if (trimAfter <= 0) {
        throw new TypeError(`trimAfter must be a positive number, instead got ${trimAfter}.`);
      }
    }
    if (trimAfter < trimBefore) {
      throw new TypeError("trimAfter prop must be greater than trimBefore prop.");
    }
  };
  var validateMediaTrimProps = ({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  }) => {
    if (typeof startFrom !== "undefined" && typeof trimBefore !== "undefined") {
      throw new TypeError("Cannot use both startFrom and trimBefore props. Use trimBefore instead as startFrom is deprecated.");
    }
    if (typeof endAt !== "undefined" && typeof trimAfter !== "undefined") {
      throw new TypeError("Cannot use both endAt and trimAfter props. Use trimAfter instead as endAt is deprecated.");
    }
    const hasNewProps = typeof trimBefore !== "undefined" || typeof trimAfter !== "undefined";
    const hasOldProps = typeof startFrom !== "undefined" || typeof endAt !== "undefined";
    if (hasNewProps) {
      validateTrimProps(trimBefore, trimAfter);
    } else if (hasOldProps) {
      validateStartFromProps(startFrom, endAt);
    }
  };
  var resolveTrimProps = ({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  }) => {
    const trimBeforeValue = trimBefore ?? startFrom ?? void 0;
    const trimAfterValue = trimAfter ?? endAt ?? void 0;
    return { trimBeforeValue, trimAfterValue };
  };
  var durationReducer = (state, action) => {
    switch (action.type) {
      case "got-duration": {
        const absoluteSrc = getAbsoluteSrc(action.src);
        if (state[absoluteSrc] === action.durationInSeconds) {
          return state;
        }
        return {
          ...state,
          [absoluteSrc]: action.durationInSeconds
        };
      }
      default:
        return state;
    }
  };
  var DurationsContext = (0, import_react30.createContext)({
    durations: {},
    setDurations: () => {
      throw new Error("context missing");
    }
  });
  var DurationsContextProvider = ({ children }) => {
    const [durations, setDurations] = (0, import_react30.useReducer)(durationReducer, {});
    const value = (0, import_react30.useMemo)(() => {
      return {
        durations,
        setDurations
      };
    }, [durations]);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DurationsContext.Provider, {
      value,
      children
    });
  };
  var getCrossOriginValue = ({
    crossOrigin,
    requestsVideoFrame
  }) => {
    if (crossOrigin !== void 0 && crossOrigin !== null) {
      return crossOrigin;
    }
    if (requestsVideoFrame) {
      return "anonymous";
    }
    return;
  };
  var LogLevelContext = (0, import_react32.createContext)({
    logLevel: "info",
    mountTime: 0
  });
  var useLogLevel = () => {
    const { logLevel } = React13.useContext(LogLevelContext);
    if (logLevel === null) {
      throw new Error("useLogLevel must be used within a LogLevelProvider");
    }
    return logLevel;
  };
  var useMountTime = () => {
    const { mountTime } = React13.useContext(LogLevelContext);
    if (mountTime === null) {
      throw new Error("useMountTime must be used within a LogLevelProvider");
    }
    return mountTime;
  };
  function mulberry32(a2) {
    let t = a2 + 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  function hashCode(str) {
    let i = 0;
    let chr = 0;
    let hash = 0;
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  }
  var random = (seed, dummy) => {
    if (dummy !== void 0) {
      throw new TypeError("random() takes only one argument");
    }
    if (seed === null) {
      return Math.random();
    }
    if (typeof seed === "string") {
      return mulberry32(hashCode(seed));
    }
    if (typeof seed === "number") {
      return mulberry32(seed * 1e10);
    }
    throw new Error("random() argument must be a number or a string");
  };
  var playAndHandleNotAllowedError = ({
    mediaRef,
    mediaType,
    onAutoPlayError,
    logLevel,
    mountTime,
    reason,
    isPlayer
  }) => {
    const { current } = mediaRef;
    if (!current) {
      return;
    }
    playbackLogging({
      logLevel,
      tag: "play",
      message: `Attempting to play ${current.src}. Reason: ${reason}`,
      mountTime
    });
    const prom = current.play();
    if (!prom.catch) {
      return;
    }
    prom.catch((err) => {
      if (!current) {
        return;
      }
      if (err.message.includes("request was interrupted by a call to pause")) {
        return;
      }
      if (err.message.includes("The operation was aborted.")) {
        return;
      }
      if (err.message.includes("The fetching process for the media resource was aborted by the user agent")) {
        return;
      }
      if (err.message.includes("request was interrupted by a new load request")) {
        return;
      }
      if (err.message.includes("because the media was removed from the document")) {
        return;
      }
      if (err.message.includes("user didn't interact with the document") && current.muted) {
        return;
      }
      console.log(`Could not play ${mediaType} due to following error: `, err);
      if (!current.muted) {
        if (onAutoPlayError) {
          onAutoPlayError();
          return;
        }
        console.log(`The video will be muted and we'll retry playing it.`);
        if (mediaType === "video" && isPlayer) {
          console.log("Use onAutoPlayError() to handle this error yourself.");
        }
        current.muted = true;
        current.play();
      }
    });
  };
  var makeSharedElementSourceNode = ({
    audioContext,
    ref
  }) => {
    let connected = null;
    return {
      attemptToConnect: () => {
        if (!connected && ref.current) {
          const mediaElementSourceNode = audioContext.createMediaElementSource(ref.current);
          connected = mediaElementSourceNode;
        }
      },
      get: () => {
        if (!connected) {
          throw new Error("Audio element not connected");
        }
        return connected;
      }
    };
  };
  var warned = false;
  var warnOnce = (logLevel) => {
    if (warned) {
      return;
    }
    warned = true;
    if (typeof window !== "undefined") {
      Log.warn({ logLevel, tag: null }, "AudioContext is not supported in this browser");
    }
  };
  var useSingletonAudioContext = (logLevel, latencyHint) => {
    const audioContext = (0, import_react35.useMemo)(() => {
      if (typeof AudioContext === "undefined") {
        warnOnce(logLevel);
        return null;
      }
      return new AudioContext({
        latencyHint
      });
    }, [logLevel, latencyHint]);
    return audioContext;
  };
  var EMPTY_AUDIO = "data:audio/mp3;base64,/+MYxAAJcAV8AAgAABn//////+/gQ5BAMA+D4Pg+BAQBAEAwD4Pg+D4EBAEAQDAPg++hYBH///hUFQVBUFREDQNHmf///////+MYxBUGkAGIMAAAAP/29Xt6lUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDUAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
  var compareProps = (obj1, obj2) => {
    const keysA = Object.keys(obj1).sort();
    const keysB = Object.keys(obj2).sort();
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (let i = 0; i < keysA.length; i++) {
      if (keysA[i] !== keysB[i]) {
        return false;
      }
      if (obj1[keysA[i]] !== obj2[keysB[i]]) {
        return false;
      }
    }
    return true;
  };
  var didPropChange = (key, newProp, prevProp) => {
    if (key === "src" && !prevProp.startsWith("data:") && !newProp.startsWith("data:")) {
      return new URL(prevProp, window.origin).toString() !== new URL(newProp, window.origin).toString();
    }
    if (prevProp === newProp) {
      return false;
    }
    return true;
  };
  var SharedAudioContext = (0, import_react34.createContext)(null);
  var SharedAudioContextProvider = ({ children, numberOfAudioTags, component, audioLatencyHint }) => {
    const audios = (0, import_react34.useRef)([]);
    const [initialNumberOfAudioTags] = (0, import_react34.useState)(numberOfAudioTags);
    if (numberOfAudioTags !== initialNumberOfAudioTags) {
      throw new Error("The number of shared audio tags has changed dynamically. Once you have set this property, you cannot change it afterwards.");
    }
    const logLevel = useLogLevel();
    const audioContext = useSingletonAudioContext(logLevel, audioLatencyHint);
    const refs = (0, import_react34.useMemo)(() => {
      return new Array(numberOfAudioTags).fill(true).map(() => {
        const ref = (0, import_react34.createRef)();
        return {
          id: Math.random(),
          ref,
          mediaElementSourceNode: audioContext ? makeSharedElementSourceNode({
            audioContext,
            ref
          }) : null
        };
      });
    }, [audioContext, numberOfAudioTags]);
    const takenAudios = (0, import_react34.useRef)(new Array(numberOfAudioTags).fill(false));
    const rerenderAudios = (0, import_react34.useCallback)(() => {
      refs.forEach(({ ref, id }) => {
        const data = audios.current?.find((a2) => a2.id === id);
        const { current } = ref;
        if (!current) {
          return;
        }
        if (data === void 0) {
          current.src = EMPTY_AUDIO;
          return;
        }
        if (!data) {
          throw new TypeError("Expected audio data to be there");
        }
        Object.keys(data.props).forEach((key) => {
          if (didPropChange(key, data.props[key], current[key])) {
            current[key] = data.props[key];
          }
        });
      });
    }, [refs]);
    const registerAudio = (0, import_react34.useCallback)((options) => {
      const { aud, audioId, premounting } = options;
      const found = audios.current?.find((a2) => a2.audioId === audioId);
      if (found) {
        return found;
      }
      const firstFreeAudio = takenAudios.current.findIndex((a2) => a2 === false);
      if (firstFreeAudio === -1) {
        throw new Error(`Tried to simultaneously mount ${numberOfAudioTags + 1} <Audio /> tags at the same time. With the current settings, the maximum amount of <Audio /> tags is limited to ${numberOfAudioTags} at the same time. Remotion pre-mounts silent audio tags to help avoid browser autoplay restrictions. See https://remotion.dev/docs/player/autoplay#using-the-numberofsharedaudiotags-prop for more information on how to increase this limit.`);
      }
      const { id, ref, mediaElementSourceNode } = refs[firstFreeAudio];
      const cloned = [...takenAudios.current];
      cloned[firstFreeAudio] = id;
      takenAudios.current = cloned;
      const newElem = {
        props: aud,
        id,
        el: ref,
        audioId,
        mediaElementSourceNode,
        premounting
      };
      audios.current?.push(newElem);
      rerenderAudios();
      return newElem;
    }, [numberOfAudioTags, refs, rerenderAudios]);
    const unregisterAudio = (0, import_react34.useCallback)((id) => {
      const cloned = [...takenAudios.current];
      const index = refs.findIndex((r) => r.id === id);
      if (index === -1) {
        throw new TypeError("Error occured in ");
      }
      cloned[index] = false;
      takenAudios.current = cloned;
      audios.current = audios.current?.filter((a2) => a2.id !== id);
      rerenderAudios();
    }, [refs, rerenderAudios]);
    const updateAudio = (0, import_react34.useCallback)(({
      aud,
      audioId,
      id,
      premounting
    }) => {
      let changed = false;
      audios.current = audios.current?.map((prevA) => {
        if (prevA.id === id) {
          const isTheSame = compareProps(aud, prevA.props) && prevA.premounting === premounting;
          if (isTheSame) {
            return prevA;
          }
          changed = true;
          return {
            ...prevA,
            props: aud,
            premounting,
            audioId
          };
        }
        return prevA;
      });
      if (changed) {
        rerenderAudios();
      }
    }, [rerenderAudios]);
    const mountTime = useMountTime();
    const env = useRemotionEnvironment();
    const playAllAudios = (0, import_react34.useCallback)(() => {
      refs.forEach((ref) => {
        const audio = audios.current.find((a2) => a2.el === ref.ref);
        if (audio?.premounting) {
          return;
        }
        playAndHandleNotAllowedError({
          mediaRef: ref.ref,
          mediaType: "audio",
          onAutoPlayError: null,
          logLevel,
          mountTime,
          reason: "playing all audios",
          isPlayer: env.isPlayer
        });
      });
      audioContext?.resume();
    }, [audioContext, logLevel, mountTime, refs, env.isPlayer]);
    const value = (0, import_react34.useMemo)(() => {
      return {
        registerAudio,
        unregisterAudio,
        updateAudio,
        playAllAudios,
        numberOfAudioTags,
        audioContext
      };
    }, [
      numberOfAudioTags,
      playAllAudios,
      registerAudio,
      unregisterAudio,
      updateAudio,
      audioContext
    ]);
    const resetAudio = (0, import_react34.useCallback)(() => {
      takenAudios.current = new Array(numberOfAudioTags).fill(false);
      audios.current = [];
      rerenderAudios();
    }, [numberOfAudioTags, rerenderAudios]);
    (0, import_react34.useEffect)(() => {
      return () => {
        resetAudio();
      };
    }, [component, resetAudio]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SharedAudioContext.Provider, {
      value,
      children: [
        refs.map(({ id, ref }) => {
          return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("audio", {
            ref,
            preload: "metadata",
            src: EMPTY_AUDIO
          }, id);
        }),
        children
      ]
    });
  };
  var useSharedAudio = ({
    aud,
    audioId,
    premounting
  }) => {
    const ctx = (0, import_react34.useContext)(SharedAudioContext);
    const [elem] = (0, import_react34.useState)(() => {
      if (ctx && ctx.numberOfAudioTags > 0) {
        return ctx.registerAudio({ aud, audioId, premounting });
      }
      const el = import_react34.default.createRef();
      const mediaElementSourceNode = ctx?.audioContext ? makeSharedElementSourceNode({
        audioContext: ctx.audioContext,
        ref: el
      }) : null;
      return {
        el,
        id: Math.random(),
        props: aud,
        audioId,
        mediaElementSourceNode,
        premounting
      };
    });
    const effectToUse = import_react34.default.useInsertionEffect ?? import_react34.default.useLayoutEffect;
    if (typeof document !== "undefined") {
      effectToUse(() => {
        if (ctx && ctx.numberOfAudioTags > 0) {
          ctx.updateAudio({ id: elem.id, aud, audioId, premounting });
        }
      }, [aud, ctx, elem.id, audioId, premounting]);
      effectToUse(() => {
        return () => {
          if (ctx && ctx.numberOfAudioTags > 0) {
            ctx.unregisterAudio(elem.id);
          }
        };
      }, [ctx, elem.id]);
    }
    return elem;
  };
  var FLOATING_POINT_ERROR_THRESHOLD = 1e-5;
  var isApproximatelyTheSame = (num1, num2) => {
    return Math.abs(num1 - num2) < FLOATING_POINT_ERROR_THRESHOLD;
  };
  var toSeconds = (time, fps) => {
    return Math.round(time / fps * 100) / 100;
  };
  var isSafari = () => {
    if (typeof window === "undefined") {
      return false;
    }
    const isAppleWebKit = /AppleWebKit/.test(window.navigator.userAgent);
    if (!isAppleWebKit) {
      return false;
    }
    const isNotChrome = !window.navigator.userAgent.includes("Chrome/");
    return isNotChrome;
  };
  var isIosSafari = () => {
    if (typeof window === "undefined") {
      return false;
    }
    const isIpadIPodIPhone = /iP(ad|od|hone)/i.test(window.navigator.userAgent);
    return isIpadIPodIPhone && isSafari();
  };
  var isIOSSafariAndBlob = (actualSrc) => {
    return isIosSafari() && actualSrc.startsWith("blob:");
  };
  var getVideoFragmentStart = ({
    actualFrom,
    fps
  }) => {
    return toSeconds(Math.max(0, -actualFrom), fps);
  };
  var getVideoFragmentEnd = ({
    duration,
    fps
  }) => {
    return toSeconds(duration, fps);
  };
  var appendVideoFragment = ({
    actualSrc,
    actualFrom,
    duration,
    fps
  }) => {
    if (isIOSSafariAndBlob(actualSrc)) {
      return actualSrc;
    }
    if (actualSrc.startsWith("data:")) {
      return actualSrc;
    }
    const existingHash = Boolean(new URL(actualSrc, (typeof window === "undefined" ? null : window.location.href) ?? "http://localhost:3000").hash);
    if (existingHash) {
      return actualSrc;
    }
    if (!Number.isFinite(actualFrom)) {
      return actualSrc;
    }
    const withStartHash = `${actualSrc}#t=${getVideoFragmentStart({ actualFrom, fps })}`;
    if (!Number.isFinite(duration)) {
      return withStartHash;
    }
    return `${withStartHash},${getVideoFragmentEnd({ duration, fps })}`;
  };
  var isSubsetOfDuration = ({
    prevStartFrom,
    newStartFrom,
    prevDuration,
    newDuration,
    fps
  }) => {
    const previousFrom = getVideoFragmentStart({ actualFrom: prevStartFrom, fps });
    const newFrom = getVideoFragmentStart({ actualFrom: newStartFrom, fps });
    const previousEnd = getVideoFragmentEnd({ duration: prevDuration, fps });
    const newEnd = getVideoFragmentEnd({ duration: newDuration, fps });
    if (newFrom < previousFrom) {
      return false;
    }
    if (newEnd > previousEnd) {
      return false;
    }
    return true;
  };
  var useAppendVideoFragment = ({
    actualSrc: initialActualSrc,
    actualFrom: initialActualFrom,
    duration: initialDuration,
    fps
  }) => {
    const actualFromRef = (0, import_react36.useRef)(initialActualFrom);
    const actualDuration = (0, import_react36.useRef)(initialDuration);
    const actualSrc = (0, import_react36.useRef)(initialActualSrc);
    if (!isSubsetOfDuration({
      prevStartFrom: actualFromRef.current,
      newStartFrom: initialActualFrom,
      prevDuration: actualDuration.current,
      newDuration: initialDuration,
      fps
    }) || initialActualSrc !== actualSrc.current) {
      actualFromRef.current = initialActualFrom;
      actualDuration.current = initialDuration;
      actualSrc.current = initialActualSrc;
    }
    const appended = appendVideoFragment({
      actualSrc: actualSrc.current,
      actualFrom: actualFromRef.current,
      duration: actualDuration.current,
      fps
    });
    return appended;
  };
  var warned2 = false;
  var warnSafariOnce = (logLevel) => {
    if (warned2) {
      return;
    }
    warned2 = true;
    Log.warn({ logLevel, tag: null }, "In Safari, setting a volume and a playback rate at the same time is buggy.");
    Log.warn({ logLevel, tag: null }, "In Desktop Safari, only volumes <= 1 will be applied.");
    Log.warn({ logLevel, tag: null }, logLevel, "In Mobile Safari, the volume will be ignored and set to 1 if a playbackRate is set.");
  };
  var useVolume = ({
    mediaRef,
    volume,
    logLevel,
    source,
    shouldUseWebAudioApi
  }) => {
    const audioStuffRef = (0, import_react33.useRef)(null);
    const currentVolumeRef = (0, import_react33.useRef)(volume);
    currentVolumeRef.current = volume;
    const sharedAudioContext = (0, import_react33.useContext)(SharedAudioContext);
    if (!sharedAudioContext) {
      throw new Error("useAmplification must be used within a SharedAudioContext");
    }
    const { audioContext } = sharedAudioContext;
    if (typeof window !== "undefined") {
      (0, import_react33.useLayoutEffect)(() => {
        if (!audioContext) {
          return;
        }
        if (!mediaRef.current) {
          return;
        }
        if (!shouldUseWebAudioApi) {
          return;
        }
        if (mediaRef.current.playbackRate !== 1 && isSafari()) {
          warnSafariOnce(logLevel);
          return;
        }
        if (!source) {
          return;
        }
        const gainNode = new GainNode(audioContext, {
          gain: currentVolumeRef.current
        });
        source.attemptToConnect();
        source.get().connect(gainNode);
        gainNode.connect(audioContext.destination);
        audioStuffRef.current = {
          gainNode
        };
        Log.trace({ logLevel, tag: null }, `Starting to amplify ${mediaRef.current?.src}. Gain = ${currentVolumeRef.current}, playbackRate = ${mediaRef.current?.playbackRate}`);
        return () => {
          audioStuffRef.current = null;
          gainNode.disconnect();
          source.get().disconnect();
        };
      }, [logLevel, mediaRef, audioContext, source, shouldUseWebAudioApi]);
    }
    if (audioStuffRef.current) {
      const valueToSet = volume;
      if (!isApproximatelyTheSame(audioStuffRef.current.gainNode.gain.value, valueToSet)) {
        audioStuffRef.current.gainNode.gain.value = valueToSet;
        Log.trace({ logLevel, tag: null }, `Setting gain to ${valueToSet} for ${mediaRef.current?.src}`);
      }
    }
    const safariCase = isSafari() && mediaRef.current && mediaRef.current?.playbackRate !== 1;
    const shouldUseTraditionalVolume = safariCase || !shouldUseWebAudioApi;
    if (shouldUseTraditionalVolume && mediaRef.current && !isApproximatelyTheSame(volume, mediaRef.current?.volume)) {
      mediaRef.current.volume = Math.min(volume, 1);
    }
    return audioStuffRef;
  };
  var useMediaStartsAt = () => {
    const parentSequence = (0, import_react38.useContext)(SequenceContext);
    const startsAt = Math.min(0, parentSequence?.relativeFrom ?? 0);
    return startsAt;
  };
  var useFrameForVolumeProp = (behavior) => {
    const loop = Loop.useLoop();
    const frame = useCurrentFrame();
    const startsAt = useMediaStartsAt();
    if (behavior === "repeat" || loop === null) {
      return frame + startsAt;
    }
    return frame + startsAt + loop.durationInFrames * loop.iteration;
  };
  var getAssetDisplayName = (filename) => {
    if (/data:|blob:/.test(filename.substring(0, 5))) {
      return "Data URL";
    }
    const splitted = filename.split("/").map((s) => s.split("\\")).flat(1);
    return splitted[splitted.length - 1];
  };
  var evaluateVolume = ({
    frame,
    volume,
    mediaVolume = 1
  }) => {
    if (typeof volume === "number") {
      return volume * mediaVolume;
    }
    if (typeof volume === "undefined") {
      return Number(mediaVolume);
    }
    const evaluated = volume(frame) * mediaVolume;
    if (typeof evaluated !== "number") {
      throw new TypeError(`You passed in a a function to the volume prop but it did not return a number but a value of type ${typeof evaluated} for frame ${frame}`);
    }
    if (Number.isNaN(evaluated)) {
      throw new TypeError(`You passed in a function to the volume prop but it returned NaN for frame ${frame}.`);
    }
    if (!Number.isFinite(evaluated)) {
      throw new TypeError(`You passed in a function to the volume prop but it returned a non-finite number for frame ${frame}.`);
    }
    return Math.max(0, evaluated);
  };
  var didWarn = {};
  var warnOnce2 = (message) => {
    if (didWarn[message]) {
      return;
    }
    console.warn(message);
    didWarn[message] = true;
  };
  var useMediaInTimeline = ({
    volume,
    mediaVolume,
    mediaRef,
    src,
    mediaType,
    playbackRate,
    displayName,
    id,
    stack,
    showInTimeline,
    premountDisplay,
    postmountDisplay,
    onAutoPlayError,
    isPremounting,
    isPostmounting
  }) => {
    const videoConfig = useVideoConfig();
    const { rootId, audioAndVideoTags } = (0, import_react37.useContext)(TimelineContext);
    const parentSequence = (0, import_react37.useContext)(SequenceContext);
    const actualFrom = parentSequence ? parentSequence.relativeFrom + parentSequence.cumulatedFrom : 0;
    const { imperativePlaying } = (0, import_react37.useContext)(TimelineContext);
    const startsAt = useMediaStartsAt();
    const { registerSequence, unregisterSequence } = (0, import_react37.useContext)(SequenceManager);
    const [initialVolume] = (0, import_react37.useState)(() => volume);
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const nonce = useNonce();
    const duration = parentSequence ? Math.min(parentSequence.durationInFrames, videoConfig.durationInFrames) : videoConfig.durationInFrames;
    const doesVolumeChange = typeof volume === "function";
    const volumes = (0, import_react37.useMemo)(() => {
      if (typeof volume === "number") {
        return volume;
      }
      return new Array(Math.floor(Math.max(0, duration + startsAt))).fill(true).map((_, i) => {
        return evaluateVolume({
          frame: i + startsAt,
          volume,
          mediaVolume
        });
      }).join(",");
    }, [duration, startsAt, volume, mediaVolume]);
    (0, import_react37.useEffect)(() => {
      if (typeof volume === "number" && volume !== initialVolume) {
        warnOnce2(`Remotion: The ${mediaType} with src ${src} has changed it's volume. Prefer the callback syntax for setting volume to get better timeline display: https://www.remotion.dev/docs/audio/volume`);
      }
    }, [initialVolume, mediaType, src, volume]);
    const env = useRemotionEnvironment();
    (0, import_react37.useEffect)(() => {
      if (!mediaRef.current) {
        return;
      }
      if (!src) {
        throw new Error("No src passed");
      }
      if (!env.isStudio && window.process?.env?.NODE_ENV !== "test") {
        return;
      }
      if (!showInTimeline) {
        return;
      }
      registerSequence({
        type: mediaType,
        src,
        id,
        duration,
        from: 0,
        parent: parentSequence?.id ?? null,
        displayName: displayName ?? getAssetDisplayName(src),
        rootId,
        volume: volumes,
        showInTimeline: true,
        nonce,
        startMediaFrom: 0 - startsAt,
        doesVolumeChange,
        loopDisplay: void 0,
        playbackRate,
        stack,
        premountDisplay,
        postmountDisplay
      });
      return () => {
        unregisterSequence(id);
      };
    }, [
      actualFrom,
      duration,
      id,
      parentSequence,
      src,
      registerSequence,
      rootId,
      unregisterSequence,
      videoConfig,
      volumes,
      doesVolumeChange,
      nonce,
      mediaRef,
      mediaType,
      startsAt,
      playbackRate,
      displayName,
      stack,
      showInTimeline,
      premountDisplay,
      postmountDisplay,
      env.isStudio
    ]);
    (0, import_react37.useEffect)(() => {
      const tag = {
        id,
        play: (reason) => {
          if (!imperativePlaying.current) {
            return;
          }
          if (isPremounting || isPostmounting) {
            return;
          }
          return playAndHandleNotAllowedError({
            mediaRef,
            mediaType,
            onAutoPlayError,
            logLevel,
            mountTime,
            reason,
            isPlayer: env.isPlayer
          });
        }
      };
      audioAndVideoTags.current.push(tag);
      return () => {
        audioAndVideoTags.current = audioAndVideoTags.current.filter((a2) => a2.id !== id);
      };
    }, [
      audioAndVideoTags,
      id,
      mediaRef,
      mediaType,
      onAutoPlayError,
      imperativePlaying,
      isPremounting,
      isPostmounting,
      logLevel,
      mountTime,
      env.isPlayer
    ]);
  };
  var useBufferManager = (logLevel, mountTime) => {
    const [blocks, setBlocks] = (0, import_react42.useState)([]);
    const [onBufferingCallbacks, setOnBufferingCallbacks] = (0, import_react42.useState)([]);
    const [onResumeCallbacks, setOnResumeCallbacks] = (0, import_react42.useState)([]);
    const buffering = (0, import_react42.useRef)(false);
    const addBlock = (0, import_react42.useCallback)((block) => {
      setBlocks((b2) => [...b2, block]);
      return {
        unblock: () => {
          setBlocks((b2) => {
            const newArr = b2.filter((bx) => bx !== block);
            if (newArr.length === b2.length) {
              return b2;
            }
            return newArr;
          });
        }
      };
    }, []);
    const listenForBuffering = (0, import_react42.useCallback)((callback) => {
      setOnBufferingCallbacks((c2) => [...c2, callback]);
      return {
        remove: () => {
          setOnBufferingCallbacks((c2) => c2.filter((cb) => cb !== callback));
        }
      };
    }, []);
    const listenForResume = (0, import_react42.useCallback)((callback) => {
      setOnResumeCallbacks((c2) => [...c2, callback]);
      return {
        remove: () => {
          setOnResumeCallbacks((c2) => c2.filter((cb) => cb !== callback));
        }
      };
    }, []);
    (0, import_react42.useEffect)(() => {
      if (blocks.length > 0) {
        onBufferingCallbacks.forEach((c2) => c2());
        playbackLogging({
          logLevel,
          message: "Player is entering buffer state",
          mountTime,
          tag: "player"
        });
      }
    }, [blocks]);
    if (typeof window !== "undefined") {
      (0, import_react42.useLayoutEffect)(() => {
        if (blocks.length === 0) {
          onResumeCallbacks.forEach((c2) => c2());
          playbackLogging({
            logLevel,
            message: "Player is exiting buffer state",
            mountTime,
            tag: "player"
          });
        }
      }, [blocks]);
    }
    return (0, import_react42.useMemo)(() => {
      return { addBlock, listenForBuffering, listenForResume, buffering };
    }, [addBlock, buffering, listenForBuffering, listenForResume]);
  };
  var BufferingContextReact = import_react42.default.createContext(null);
  var BufferingProvider = ({ children }) => {
    const { logLevel, mountTime } = (0, import_react42.useContext)(LogLevelContext);
    const bufferManager = useBufferManager(logLevel ?? "info", mountTime);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(BufferingContextReact.Provider, {
      value: bufferManager,
      children
    });
  };
  var useIsPlayerBuffering = (bufferManager) => {
    const [isBuffering, setIsBuffering] = (0, import_react42.useState)(bufferManager.buffering.current);
    (0, import_react42.useEffect)(() => {
      const onBuffer = () => {
        setIsBuffering(true);
      };
      const onResume = () => {
        setIsBuffering(false);
      };
      bufferManager.listenForBuffering(onBuffer);
      bufferManager.listenForResume(onResume);
      return () => {
        bufferManager.listenForBuffering(() => {
          return;
        });
        bufferManager.listenForResume(() => {
          return;
        });
      };
    }, [bufferManager]);
    return isBuffering;
  };
  var useBufferState = () => {
    const buffer = (0, import_react41.useContext)(BufferingContextReact);
    const addBlock = buffer ? buffer.addBlock : null;
    return (0, import_react41.useMemo)(() => ({
      delayPlayback: () => {
        if (!addBlock) {
          throw new Error("Tried to enable the buffering state, but a Remotion context was not found. This API can only be called in a component that was passed to the Remotion Player or a <Composition>. Or you might have experienced a version mismatch - run `npx remotion versions` and ensure all packages have the same version. This error is thrown by the buffer state https://remotion.dev/docs/player/buffer-state");
        }
        const { unblock } = addBlock({
          id: String(Math.random())
        });
        return { unblock };
      }
    }), [addBlock]);
  };
  var isSafariWebkit = () => {
    const isSafari2 = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
    return isSafari2;
  };
  var useBufferUntilFirstFrame = ({
    mediaRef,
    mediaType,
    onVariableFpsVideoDetected,
    pauseWhenBuffering,
    logLevel,
    mountTime
  }) => {
    const bufferingRef = (0, import_react40.useRef)(false);
    const { delayPlayback } = useBufferState();
    const bufferUntilFirstFrame = (0, import_react40.useCallback)((requestedTime) => {
      if (mediaType !== "video") {
        return;
      }
      if (!pauseWhenBuffering) {
        return;
      }
      const current = mediaRef.current;
      if (!current) {
        return;
      }
      if (current.readyState >= current.HAVE_FUTURE_DATA && !isSafariWebkit()) {
        playbackLogging({
          logLevel,
          message: `Not using buffer until first frame, because readyState is ${current.readyState} and is not Safari or Desktop Chrome`,
          mountTime,
          tag: "buffer"
        });
        return;
      }
      if (!current.requestVideoFrameCallback) {
        playbackLogging({
          logLevel,
          message: `Not using buffer until first frame, because requestVideoFrameCallback is not supported`,
          mountTime,
          tag: "buffer"
        });
        return;
      }
      bufferingRef.current = true;
      playbackLogging({
        logLevel,
        message: `Buffering ${mediaRef.current?.src} until the first frame is received`,
        mountTime,
        tag: "buffer"
      });
      const playback = delayPlayback();
      const unblock = () => {
        playback.unblock();
        current.removeEventListener("ended", unblock, {
          once: true
        });
        current.removeEventListener("pause", unblock, {
          once: true
        });
        bufferingRef.current = false;
      };
      const onEndedOrPauseOrCanPlay = () => {
        unblock();
      };
      current.requestVideoFrameCallback((_, info2) => {
        const differenceFromRequested = Math.abs(info2.mediaTime - requestedTime);
        if (differenceFromRequested > 0.5) {
          onVariableFpsVideoDetected();
        }
        unblock();
      });
      current.addEventListener("ended", onEndedOrPauseOrCanPlay, { once: true });
      current.addEventListener("pause", onEndedOrPauseOrCanPlay, { once: true });
      current.addEventListener("canplay", onEndedOrPauseOrCanPlay, {
        once: true
      });
    }, [
      delayPlayback,
      logLevel,
      mediaRef,
      mediaType,
      mountTime,
      onVariableFpsVideoDetected,
      pauseWhenBuffering
    ]);
    return (0, import_react40.useMemo)(() => {
      return {
        isBuffering: () => bufferingRef.current,
        bufferUntilFirstFrame
      };
    }, [bufferUntilFirstFrame]);
  };
  var useCurrentTimeOfMediaTagWithUpdateTimeStamp = (mediaRef) => {
    const lastUpdate = import_react43.default.useRef({
      time: mediaRef.current?.currentTime ?? 0,
      lastUpdate: performance.now()
    });
    const nowCurrentTime = mediaRef.current?.currentTime ?? null;
    if (nowCurrentTime !== null) {
      if (lastUpdate.current.time !== nowCurrentTime) {
        lastUpdate.current.time = nowCurrentTime;
        lastUpdate.current.lastUpdate = performance.now();
      }
    }
    return lastUpdate;
  };
  var seek = ({
    mediaRef,
    time,
    logLevel,
    why,
    mountTime
  }) => {
    const timeToSet = isIosSafari() ? Number(time.toFixed(1)) : time;
    playbackLogging({
      logLevel,
      tag: "seek",
      message: `Seeking from ${mediaRef.currentTime} to ${timeToSet}. src= ${mediaRef.src} Reason: ${why}`,
      mountTime
    });
    mediaRef.currentTime = timeToSet;
    return timeToSet;
  };
  var useMediaBuffering = ({
    element,
    shouldBuffer,
    isPremounting,
    isPostmounting,
    logLevel,
    mountTime,
    src
  }) => {
    const buffer = useBufferState();
    const [isBuffering, setIsBuffering] = (0, import_react44.useState)(false);
    (0, import_react44.useEffect)(() => {
      let cleanupFns = [];
      const { current } = element;
      if (!current) {
        return;
      }
      if (!shouldBuffer) {
        return;
      }
      if (isPremounting || isPostmounting) {
        if ((isPremounting || isPostmounting) && current.readyState < current.HAVE_FUTURE_DATA) {
          if (!navigator.userAgent.includes("Firefox/")) {
            playbackLogging({
              logLevel,
              message: `Calling .load() on ${current.src} because readyState is ${current.readyState} and it is not Firefox. Element is premounted ${current.playbackRate}`,
              tag: "load",
              mountTime
            });
            const previousPlaybackRate = current.playbackRate;
            current.load();
            current.playbackRate = previousPlaybackRate;
          }
        }
        return;
      }
      const cleanup = (reason) => {
        let didDoSomething = false;
        cleanupFns.forEach((fn) => {
          fn(reason);
          didDoSomething = true;
        });
        cleanupFns = [];
        setIsBuffering((previous) => {
          if (previous) {
            didDoSomething = true;
          }
          return false;
        });
        if (didDoSomething) {
          playbackLogging({
            logLevel,
            message: `Unmarking as buffering: ${current.src}. Reason: ${reason}`,
            tag: "buffer",
            mountTime
          });
        }
      };
      const blockMedia = (reason) => {
        setIsBuffering(true);
        playbackLogging({
          logLevel,
          message: `Marking as buffering: ${current.src}. Reason: ${reason}`,
          tag: "buffer",
          mountTime
        });
        const { unblock } = buffer.delayPlayback();
        const onCanPlay = () => {
          cleanup('"canplay" was fired');
          init();
        };
        const onError = () => {
          cleanup('"error" event was occurred');
          init();
        };
        current.addEventListener("canplay", onCanPlay, {
          once: true
        });
        cleanupFns.push(() => {
          current.removeEventListener("canplay", onCanPlay);
        });
        current.addEventListener("error", onError, {
          once: true
        });
        cleanupFns.push(() => {
          current.removeEventListener("error", onError);
        });
        cleanupFns.push((cleanupReason) => {
          playbackLogging({
            logLevel,
            message: `Unblocking ${current.src} from buffer. Reason: ${cleanupReason}`,
            tag: "buffer",
            mountTime
          });
          unblock();
        });
      };
      const init = () => {
        if (current.readyState < current.HAVE_FUTURE_DATA) {
          blockMedia(`readyState is ${current.readyState}, which is less than HAVE_FUTURE_DATA`);
          if (!navigator.userAgent.includes("Firefox/")) {
            playbackLogging({
              logLevel,
              message: `Calling .load() on ${src} because readyState is ${current.readyState} and it is not Firefox. ${current.playbackRate}`,
              tag: "load",
              mountTime
            });
            const previousPlaybackRate = current.playbackRate;
            current.load();
            current.playbackRate = previousPlaybackRate;
          }
        } else {
          const onWaiting = () => {
            blockMedia('"waiting" event was fired');
          };
          current.addEventListener("waiting", onWaiting);
          cleanupFns.push(() => {
            current.removeEventListener("waiting", onWaiting);
          });
        }
      };
      init();
      return () => {
        cleanup("element was unmounted or prop changed");
      };
    }, [
      buffer,
      src,
      element,
      isPremounting,
      isPostmounting,
      logLevel,
      shouldBuffer,
      mountTime
    ]);
    return isBuffering;
  };
  var useRequestVideoCallbackTime = ({
    mediaRef,
    mediaType,
    lastSeek,
    onVariableFpsVideoDetected
  }) => {
    const currentTime = (0, import_react45.useRef)(null);
    (0, import_react45.useEffect)(() => {
      const { current } = mediaRef;
      if (current) {
        currentTime.current = {
          time: current.currentTime,
          lastUpdate: performance.now()
        };
      } else {
        currentTime.current = null;
        return;
      }
      if (mediaType !== "video") {
        currentTime.current = null;
        return;
      }
      const videoTag = current;
      if (!videoTag.requestVideoFrameCallback) {
        return;
      }
      let cancel = () => {
        return;
      };
      const request = () => {
        if (!videoTag) {
          return;
        }
        const cb = videoTag.requestVideoFrameCallback((_, info2) => {
          if (currentTime.current !== null) {
            const difference = Math.abs(currentTime.current.time - info2.mediaTime);
            const differenceToLastSeek = Math.abs(lastSeek.current === null ? Infinity : info2.mediaTime - lastSeek.current);
            if (difference > 0.5 && differenceToLastSeek > 0.5 && info2.mediaTime > currentTime.current.time) {
              onVariableFpsVideoDetected();
            }
          }
          currentTime.current = {
            time: info2.mediaTime,
            lastUpdate: performance.now()
          };
          request();
        });
        cancel = () => {
          videoTag.cancelVideoFrameCallback(cb);
          cancel = () => {
            return;
          };
        };
      };
      request();
      return () => {
        cancel();
      };
    }, [lastSeek, mediaRef, mediaType, onVariableFpsVideoDetected]);
    return currentTime;
  };
  function interpolateFunction(input, inputRange, outputRange, options) {
    const { extrapolateLeft, extrapolateRight, easing } = options;
    let result = input;
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;
    if (result < inputMin) {
      if (extrapolateLeft === "identity") {
        return result;
      }
      if (extrapolateLeft === "clamp") {
        result = inputMin;
      } else if (extrapolateLeft === "wrap") {
        const range = inputMax - inputMin;
        result = ((result - inputMin) % range + range) % range + inputMin;
      } else if (extrapolateLeft === "extend") {
      }
    }
    if (result > inputMax) {
      if (extrapolateRight === "identity") {
        return result;
      }
      if (extrapolateRight === "clamp") {
        result = inputMax;
      } else if (extrapolateRight === "wrap") {
        const range = inputMax - inputMin;
        result = ((result - inputMin) % range + range) % range + inputMin;
      } else if (extrapolateRight === "extend") {
      }
    }
    if (outputMin === outputMax) {
      return outputMin;
    }
    result = (result - inputMin) / (inputMax - inputMin);
    result = easing(result);
    result = result * (outputMax - outputMin) + outputMin;
    return result;
  }
  function findRange(input, inputRange) {
    let i;
    for (i = 1; i < inputRange.length - 1; ++i) {
      if (inputRange[i] >= input) {
        break;
      }
    }
    return i - 1;
  }
  function checkValidInputRange(arr) {
    for (let i = 1; i < arr.length; ++i) {
      if (!(arr[i] > arr[i - 1])) {
        throw new Error(`inputRange must be strictly monotonically increasing but got [${arr.join(",")}]`);
      }
    }
  }
  function checkInfiniteRange(name, arr) {
    if (arr.length < 2) {
      throw new Error(name + " must have at least 2 elements");
    }
    for (const element of arr) {
      if (typeof element !== "number") {
        throw new Error(`${name} must contain only numbers`);
      }
      if (!Number.isFinite(element)) {
        throw new Error(`${name} must contain only finite numbers, but got [${arr.join(",")}]`);
      }
    }
  }
  function interpolate(input, inputRange, outputRange, options) {
    if (typeof input === "undefined") {
      throw new Error("input can not be undefined");
    }
    if (typeof inputRange === "undefined") {
      throw new Error("inputRange can not be undefined");
    }
    if (typeof outputRange === "undefined") {
      throw new Error("outputRange can not be undefined");
    }
    if (inputRange.length !== outputRange.length) {
      throw new Error("inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
    }
    checkInfiniteRange("inputRange", inputRange);
    checkInfiniteRange("outputRange", outputRange);
    checkValidInputRange(inputRange);
    const easing = options?.easing ?? ((num) => num);
    let extrapolateLeft = "extend";
    if (options?.extrapolateLeft !== void 0) {
      extrapolateLeft = options.extrapolateLeft;
    }
    let extrapolateRight = "extend";
    if (options?.extrapolateRight !== void 0) {
      extrapolateRight = options.extrapolateRight;
    }
    if (typeof input !== "number") {
      throw new TypeError("Cannot interpolate an input which is not a number");
    }
    const range = findRange(input, inputRange);
    return interpolateFunction(input, [inputRange[range], inputRange[range + 1]], [outputRange[range], outputRange[range + 1]], {
      easing,
      extrapolateLeft,
      extrapolateRight
    });
  }
  var getExpectedMediaFrameUncorrected = ({
    frame,
    playbackRate,
    startFrom
  }) => {
    return interpolate(frame, [-1, startFrom, startFrom + 1], [-1, startFrom, startFrom + playbackRate]);
  };
  var getMediaTime = ({
    fps,
    frame,
    playbackRate,
    startFrom
  }) => {
    const expectedFrame = getExpectedMediaFrameUncorrected({
      frame,
      playbackRate,
      startFrom
    });
    const msPerFrame = 1e3 / fps;
    return expectedFrame * msPerFrame / 1e3;
  };
  var alreadyWarned = {};
  var warnAboutNonSeekableMedia = (ref, type) => {
    if (ref === null) {
      return;
    }
    if (ref.seekable.length === 0) {
      return;
    }
    if (ref.seekable.length > 1) {
      return;
    }
    if (alreadyWarned[ref.src]) {
      return;
    }
    const range = { start: ref.seekable.start(0), end: ref.seekable.end(0) };
    if (range.start === 0 && range.end === 0) {
      const msg = [
        `The media ${ref.src} cannot be seeked. This could be one of few reasons:`,
        "1) The media resource was replaced while the video is playing but it was not loaded yet.",
        "2) The media does not support seeking.",
        "3) The media was loaded with security headers prventing it from being included.",
        "Please see https://remotion.dev/docs/non-seekable-media for assistance."
      ].join(`
`);
      if (type === "console-error") {
        console.error(msg);
      } else if (type === "console-warning") {
        console.warn(`The media ${ref.src} does not support seeking. The video will render fine, but may not play correctly in the Remotion Studio and in the <Player>. See https://remotion.dev/docs/non-seekable-media for an explanation.`);
      } else {
        throw new Error(msg);
      }
      alreadyWarned[ref.src] = true;
    }
  };
  var useMediaPlayback = ({
    mediaRef,
    src,
    mediaType,
    playbackRate: localPlaybackRate,
    onlyWarnForMediaSeekingError,
    acceptableTimeshift,
    pauseWhenBuffering,
    isPremounting,
    isPostmounting,
    onAutoPlayError
  }) => {
    const { playbackRate: globalPlaybackRate } = (0, import_react39.useContext)(TimelineContext);
    const frame = useCurrentFrame();
    const absoluteFrame = useTimelinePosition();
    const [playing] = usePlayingState();
    const buffering = (0, import_react39.useContext)(BufferingContextReact);
    const { fps } = useVideoConfig();
    const mediaStartsAt = useMediaStartsAt();
    const lastSeekDueToShift = (0, import_react39.useRef)(null);
    const lastSeek = (0, import_react39.useRef)(null);
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    if (!buffering) {
      throw new Error("useMediaPlayback must be used inside a <BufferingContext>");
    }
    const isVariableFpsVideoMap = (0, import_react39.useRef)({});
    const onVariableFpsVideoDetected = (0, import_react39.useCallback)(() => {
      if (!src) {
        return;
      }
      if (isVariableFpsVideoMap.current[src]) {
        return;
      }
      Log.verbose({ logLevel, tag: null }, `Detected ${src} as a variable FPS video. Disabling buffering while seeking.`);
      isVariableFpsVideoMap.current[src] = true;
    }, [logLevel, src]);
    const rvcCurrentTime = useRequestVideoCallbackTime({
      mediaRef,
      mediaType,
      lastSeek,
      onVariableFpsVideoDetected
    });
    const mediaTagCurrentTime = useCurrentTimeOfMediaTagWithUpdateTimeStamp(mediaRef);
    const desiredUnclampedTime = getMediaTime({
      frame,
      playbackRate: localPlaybackRate,
      startFrom: -mediaStartsAt,
      fps
    });
    const isMediaTagBuffering = useMediaBuffering({
      element: mediaRef,
      shouldBuffer: pauseWhenBuffering,
      isPremounting,
      isPostmounting,
      logLevel,
      mountTime,
      src: src ?? null
    });
    const { bufferUntilFirstFrame, isBuffering } = useBufferUntilFirstFrame({
      mediaRef,
      mediaType,
      onVariableFpsVideoDetected,
      pauseWhenBuffering,
      logLevel,
      mountTime
    });
    const playbackRate = localPlaybackRate * globalPlaybackRate;
    const acceptableTimeShiftButLessThanDuration = (() => {
      const DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_NORMAL_PLAYBACK = 0.45;
      const DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION = DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_NORMAL_PLAYBACK + 0.2;
      const defaultAcceptableTimeshift = DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION;
      if (mediaRef.current?.duration) {
        return Math.min(mediaRef.current.duration, acceptableTimeshift ?? defaultAcceptableTimeshift);
      }
      return acceptableTimeshift ?? defaultAcceptableTimeshift;
    })();
    const isPlayerBuffering = useIsPlayerBuffering(buffering);
    (0, import_react39.useEffect)(() => {
      if (mediaRef.current?.paused) {
        return;
      }
      if (!playing) {
        playbackLogging({
          logLevel,
          tag: "pause",
          message: `Pausing ${mediaRef.current?.src} because ${isPremounting ? "media is premounting" : isPostmounting ? "media is postmounting" : "Player is not playing"}`,
          mountTime
        });
        mediaRef.current?.pause();
        return;
      }
      const isMediaTagBufferingOrStalled = isMediaTagBuffering || isBuffering();
      const playerBufferingNotStateButLive = buffering.buffering.current;
      if (playerBufferingNotStateButLive && !isMediaTagBufferingOrStalled) {
        playbackLogging({
          logLevel,
          tag: "pause",
          message: `Pausing ${mediaRef.current?.src} because player is buffering but media tag is not`,
          mountTime
        });
        mediaRef.current?.pause();
      }
    }, [
      isBuffering,
      isMediaTagBuffering,
      buffering,
      isPlayerBuffering,
      isPremounting,
      logLevel,
      mediaRef,
      mediaType,
      mountTime,
      playing,
      isPostmounting
    ]);
    const env = useRemotionEnvironment();
    (0, import_react39.useLayoutEffect)(() => {
      const playbackRateToSet = Math.max(0, playbackRate);
      if (mediaRef.current && mediaRef.current.playbackRate !== playbackRateToSet) {
        mediaRef.current.playbackRate = playbackRateToSet;
      }
    }, [mediaRef, playbackRate]);
    (0, import_react39.useEffect)(() => {
      const tagName = mediaType === "audio" ? "<Audio>" : "<Video>";
      if (!mediaRef.current) {
        throw new Error(`No ${mediaType} ref found`);
      }
      if (!src) {
        throw new Error(`No 'src' attribute was passed to the ${tagName} element.`);
      }
      const { duration } = mediaRef.current;
      const shouldBeTime = !Number.isNaN(duration) && Number.isFinite(duration) ? Math.min(duration, desiredUnclampedTime) : desiredUnclampedTime;
      const mediaTagTime = mediaTagCurrentTime.current.time;
      const rvcTime = rvcCurrentTime.current?.time ?? null;
      const isVariableFpsVideo = isVariableFpsVideoMap.current[src];
      const timeShiftMediaTag = Math.abs(shouldBeTime - mediaTagTime);
      const timeShiftRvcTag = rvcTime ? Math.abs(shouldBeTime - rvcTime) : null;
      const mostRecentTimeshift = rvcCurrentTime.current?.lastUpdate && rvcCurrentTime.current.time > mediaTagCurrentTime.current.lastUpdate ? timeShiftRvcTag : timeShiftMediaTag;
      const timeShift = timeShiftRvcTag && !isVariableFpsVideo ? mostRecentTimeshift : timeShiftMediaTag;
      if (timeShift > acceptableTimeShiftButLessThanDuration && lastSeekDueToShift.current !== shouldBeTime) {
        lastSeek.current = seek({
          mediaRef: mediaRef.current,
          time: shouldBeTime,
          logLevel,
          why: `because time shift is too big. shouldBeTime = ${shouldBeTime}, isTime = ${mediaTagTime}, requestVideoCallbackTime = ${rvcTime}, timeShift = ${timeShift}${isVariableFpsVideo ? ", isVariableFpsVideo = true" : ""}, isPremounting = ${isPremounting}, isPostmounting = ${isPostmounting}, pauseWhenBuffering = ${pauseWhenBuffering}`,
          mountTime
        });
        lastSeekDueToShift.current = lastSeek.current;
        if (playing) {
          if (playbackRate > 0) {
            bufferUntilFirstFrame(shouldBeTime);
          }
          if (mediaRef.current.paused) {
            playAndHandleNotAllowedError({
              mediaRef,
              mediaType,
              onAutoPlayError,
              logLevel,
              mountTime,
              reason: "player is playing but media tag is paused, and just seeked",
              isPlayer: env.isPlayer
            });
          }
        }
        if (!onlyWarnForMediaSeekingError) {
          warnAboutNonSeekableMedia(mediaRef.current, onlyWarnForMediaSeekingError ? "console-warning" : "console-error");
        }
        return;
      }
      const seekThreshold = playing ? 0.15 : 0.01;
      const makesSenseToSeek = Math.abs(mediaRef.current.currentTime - shouldBeTime) > seekThreshold;
      const isMediaTagBufferingOrStalled = isMediaTagBuffering || isBuffering();
      const isSomethingElseBuffering = buffering.buffering.current && !isMediaTagBufferingOrStalled;
      if (!playing || isSomethingElseBuffering) {
        if (makesSenseToSeek) {
          lastSeek.current = seek({
            mediaRef: mediaRef.current,
            time: shouldBeTime,
            logLevel,
            why: `not playing or something else is buffering. time offset is over seek threshold (${seekThreshold})`,
            mountTime
          });
        }
        return;
      }
      if (!playing || buffering.buffering.current) {
        return;
      }
      const pausedCondition = mediaRef.current.paused && !mediaRef.current.ended;
      const firstFrameCondition = absoluteFrame === 0;
      if (pausedCondition || firstFrameCondition) {
        const reason = pausedCondition ? "media tag is paused" : "absolute frame is 0";
        if (makesSenseToSeek) {
          lastSeek.current = seek({
            mediaRef: mediaRef.current,
            time: shouldBeTime,
            logLevel,
            why: `is over timeshift threshold (threshold = ${seekThreshold}) and ${reason}`,
            mountTime
          });
        }
        playAndHandleNotAllowedError({
          mediaRef,
          mediaType,
          onAutoPlayError,
          logLevel,
          mountTime,
          reason: `player is playing and ${reason}`,
          isPlayer: env.isPlayer
        });
        if (!isVariableFpsVideo && playbackRate > 0) {
          bufferUntilFirstFrame(shouldBeTime);
        }
      }
    }, [
      absoluteFrame,
      acceptableTimeShiftButLessThanDuration,
      bufferUntilFirstFrame,
      buffering.buffering,
      rvcCurrentTime,
      logLevel,
      desiredUnclampedTime,
      isBuffering,
      isMediaTagBuffering,
      mediaRef,
      mediaType,
      onlyWarnForMediaSeekingError,
      playbackRate,
      playing,
      src,
      onAutoPlayError,
      isPremounting,
      isPostmounting,
      pauseWhenBuffering,
      mountTime,
      mediaTagCurrentTime,
      env.isPlayer
    ]);
  };
  var MediaVolumeContext = (0, import_react46.createContext)({
    mediaMuted: false,
    mediaVolume: 1
  });
  var SetMediaVolumeContext = (0, import_react46.createContext)({
    setMediaMuted: () => {
      throw new Error("default");
    },
    setMediaVolume: () => {
      throw new Error("default");
    }
  });
  var useMediaVolumeState = () => {
    const { mediaVolume } = (0, import_react46.useContext)(MediaVolumeContext);
    const { setMediaVolume } = (0, import_react46.useContext)(SetMediaVolumeContext);
    return (0, import_react46.useMemo)(() => {
      return [mediaVolume, setMediaVolume];
    }, [mediaVolume, setMediaVolume]);
  };
  var useMediaMutedState = () => {
    const { mediaMuted } = (0, import_react46.useContext)(MediaVolumeContext);
    const { setMediaMuted } = (0, import_react46.useContext)(SetMediaVolumeContext);
    return (0, import_react46.useMemo)(() => {
      return [mediaMuted, setMediaMuted];
    }, [mediaMuted, setMediaMuted]);
  };
  var warnAboutTooHighVolume = (volume) => {
    if (volume >= 100) {
      throw new Error(`Volume was set to ${volume}, but regular volume is 1, not 100. Did you forget to divide by 100? Set a volume of less than 100 to dismiss this error.`);
    }
  };
  var AudioForDevelopmentForwardRefFunction = (props, ref) => {
    const [initialShouldPreMountAudioElements] = (0, import_react31.useState)(props.shouldPreMountAudioTags);
    if (props.shouldPreMountAudioTags !== initialShouldPreMountAudioElements) {
      throw new Error("Cannot change the behavior for pre-mounting audio tags dynamically.");
    }
    const logLevel = useLogLevel();
    const {
      volume,
      muted,
      playbackRate,
      shouldPreMountAudioTags,
      src,
      onDuration,
      acceptableTimeShiftInSeconds,
      _remotionInternalNeedsDurationCalculation,
      _remotionInternalNativeLoopPassed,
      _remotionInternalStack,
      allowAmplificationDuringRender,
      name,
      pauseWhenBuffering,
      showInTimeline,
      loopVolumeCurveBehavior,
      stack,
      crossOrigin,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      toneFrequency,
      useWebAudioApi,
      onError,
      onNativeError,
      audioStreamIndex,
      ...nativeProps
    } = props;
    const _propsValid = true;
    if (!_propsValid) {
      throw new Error("typecheck error");
    }
    const [mediaVolume] = useMediaVolumeState();
    const [mediaMuted] = useMediaMutedState();
    const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    const { hidden } = (0, import_react31.useContext)(SequenceVisibilityToggleContext);
    if (!src) {
      throw new TypeError("No 'src' was passed to <Audio>.");
    }
    const preloadedSrc = usePreload(src);
    const sequenceContext = (0, import_react31.useContext)(SequenceContext);
    const [timelineId] = (0, import_react31.useState)(() => String(Math.random()));
    const isSequenceHidden = hidden[timelineId] ?? false;
    const userPreferredVolume = evaluateVolume({
      frame: volumePropFrame,
      volume,
      mediaVolume
    });
    warnAboutTooHighVolume(userPreferredVolume);
    const crossOriginValue = getCrossOriginValue({
      crossOrigin,
      requestsVideoFrame: false
    });
    const propsToPass = (0, import_react31.useMemo)(() => {
      return {
        muted: muted || mediaMuted || isSequenceHidden || userPreferredVolume <= 0,
        src: preloadedSrc,
        loop: _remotionInternalNativeLoopPassed,
        crossOrigin: crossOriginValue,
        ...nativeProps
      };
    }, [
      _remotionInternalNativeLoopPassed,
      isSequenceHidden,
      mediaMuted,
      muted,
      nativeProps,
      preloadedSrc,
      userPreferredVolume,
      crossOriginValue
    ]);
    const id = (0, import_react31.useMemo)(() => `audio-${random(src ?? "")}-${sequenceContext?.relativeFrom}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.durationInFrames}-muted:${props.muted}-loop:${props.loop}`, [
      src,
      sequenceContext?.relativeFrom,
      sequenceContext?.cumulatedFrom,
      sequenceContext?.durationInFrames,
      props.muted,
      props.loop
    ]);
    const context = (0, import_react31.useContext)(SharedAudioContext);
    if (!context) {
      throw new Error("SharedAudioContext not found");
    }
    const { el: audioRef, mediaElementSourceNode } = useSharedAudio({
      aud: propsToPass,
      audioId: id,
      premounting: Boolean(sequenceContext?.premounting)
    });
    useMediaInTimeline({
      volume,
      mediaVolume,
      mediaRef: audioRef,
      src,
      mediaType: "audio",
      playbackRate: playbackRate ?? 1,
      displayName: name ?? null,
      id: timelineId,
      stack: _remotionInternalStack,
      showInTimeline,
      premountDisplay: null,
      postmountDisplay: null,
      onAutoPlayError: null,
      isPremounting: Boolean(sequenceContext?.premounting),
      isPostmounting: Boolean(sequenceContext?.postmounting)
    });
    useMediaPlayback({
      mediaRef: audioRef,
      src,
      mediaType: "audio",
      playbackRate: playbackRate ?? 1,
      onlyWarnForMediaSeekingError: false,
      acceptableTimeshift: acceptableTimeShiftInSeconds ?? null,
      isPremounting: Boolean(sequenceContext?.premounting),
      isPostmounting: Boolean(sequenceContext?.postmounting),
      pauseWhenBuffering,
      onAutoPlayError: null
    });
    useVolume({
      logLevel,
      mediaRef: audioRef,
      source: mediaElementSourceNode,
      volume: userPreferredVolume,
      shouldUseWebAudioApi: useWebAudioApi ?? false
    });
    (0, import_react31.useImperativeHandle)(ref, () => {
      return audioRef.current;
    }, [audioRef]);
    const currentOnDurationCallback = (0, import_react31.useRef)(onDuration);
    currentOnDurationCallback.current = onDuration;
    (0, import_react31.useEffect)(() => {
      const { current } = audioRef;
      if (!current) {
        return;
      }
      if (current.duration) {
        currentOnDurationCallback.current?.(current.src, current.duration);
        return;
      }
      const onLoadedMetadata = () => {
        currentOnDurationCallback.current?.(current.src, current.duration);
      };
      current.addEventListener("loadedmetadata", onLoadedMetadata);
      return () => {
        current.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }, [audioRef, src]);
    if (initialShouldPreMountAudioElements) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("audio", {
      ref: audioRef,
      preload: "metadata",
      crossOrigin: crossOriginValue,
      ...propsToPass
    });
  };
  var AudioForPreview = (0, import_react31.forwardRef)(AudioForDevelopmentForwardRefFunction);
  var AudioForRenderingRefForwardingFunction = (props, ref) => {
    const audioRef = (0, import_react47.useRef)(null);
    const {
      volume: volumeProp,
      playbackRate,
      allowAmplificationDuringRender,
      onDuration,
      toneFrequency,
      _remotionInternalNeedsDurationCalculation,
      _remotionInternalNativeLoopPassed,
      acceptableTimeShiftInSeconds,
      name,
      onNativeError,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      loopVolumeCurveBehavior,
      pauseWhenBuffering,
      audioStreamIndex,
      ...nativeProps
    } = props;
    const absoluteFrame = useTimelinePosition();
    const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    const frame = useCurrentFrame();
    const sequenceContext = (0, import_react47.useContext)(SequenceContext);
    const { registerRenderAsset, unregisterRenderAsset } = (0, import_react47.useContext)(RenderAssetManager);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const id = (0, import_react47.useMemo)(() => `audio-${random(props.src ?? "")}-${sequenceContext?.relativeFrom}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.durationInFrames}`, [
      props.src,
      sequenceContext?.relativeFrom,
      sequenceContext?.cumulatedFrom,
      sequenceContext?.durationInFrames
    ]);
    const volume = evaluateVolume({
      volume: volumeProp,
      frame: volumePropFrame,
      mediaVolume: 1
    });
    warnAboutTooHighVolume(volume);
    (0, import_react47.useImperativeHandle)(ref, () => {
      return audioRef.current;
    }, []);
    (0, import_react47.useEffect)(() => {
      if (!props.src) {
        throw new Error("No src passed");
      }
      if (!window.remotion_audioEnabled) {
        return;
      }
      if (props.muted) {
        return;
      }
      if (volume <= 0) {
        return;
      }
      registerRenderAsset({
        type: "audio",
        src: getAbsoluteSrc(props.src),
        id,
        frame: absoluteFrame,
        volume,
        mediaFrame: frame,
        playbackRate: props.playbackRate ?? 1,
        toneFrequency: toneFrequency ?? null,
        audioStartFrame: Math.max(0, -(sequenceContext?.relativeFrom ?? 0)),
        audioStreamIndex: audioStreamIndex ?? 0
      });
      return () => unregisterRenderAsset(id);
    }, [
      props.muted,
      props.src,
      registerRenderAsset,
      absoluteFrame,
      id,
      unregisterRenderAsset,
      volume,
      volumePropFrame,
      frame,
      playbackRate,
      props.playbackRate,
      toneFrequency,
      sequenceContext?.relativeFrom,
      audioStreamIndex
    ]);
    const { src } = props;
    const needsToRenderAudioTag = ref || _remotionInternalNeedsDurationCalculation;
    (0, import_react47.useLayoutEffect)(() => {
      if (window.process?.env?.NODE_ENV === "test") {
        return;
      }
      if (!needsToRenderAudioTag) {
        return;
      }
      const newHandle = delayRender2("Loading <Audio> duration with src=" + src, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      const { current } = audioRef;
      const didLoad = () => {
        if (current?.duration) {
          onDuration(current.src, current.duration);
        }
        continueRender2(newHandle);
      };
      if (current?.duration) {
        onDuration(current.src, current.duration);
        continueRender2(newHandle);
      } else {
        current?.addEventListener("loadedmetadata", didLoad, { once: true });
      }
      return () => {
        current?.removeEventListener("loadedmetadata", didLoad);
        continueRender2(newHandle);
      };
    }, [
      src,
      onDuration,
      needsToRenderAudioTag,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      continueRender2,
      delayRender2
    ]);
    if (!needsToRenderAudioTag) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("audio", {
      ref: audioRef,
      ...nativeProps,
      onError: onNativeError
    });
  };
  var AudioForRendering = (0, import_react47.forwardRef)(AudioForRenderingRefForwardingFunction);
  var AudioRefForwardingFunction = (props, ref) => {
    const audioContext = (0, import_react26.useContext)(SharedAudioContext);
    const {
      startFrom,
      endAt,
      trimBefore,
      trimAfter,
      name,
      stack,
      pauseWhenBuffering,
      showInTimeline,
      onError: onRemotionError,
      ...otherProps
    } = props;
    const { loop, ...propsOtherThanLoop } = props;
    const { fps } = useVideoConfig();
    const environment = useRemotionEnvironment();
    const { durations, setDurations } = (0, import_react26.useContext)(DurationsContext);
    if (typeof props.src !== "string") {
      throw new TypeError(`The \`<Audio>\` tag requires a string for \`src\`, but got ${JSON.stringify(props.src)} instead.`);
    }
    const preloadedSrc = usePreload(props.src);
    const onError = (0, import_react26.useCallback)((e) => {
      console.log(e.currentTarget.error);
      const errMessage = `Could not play audio with src ${preloadedSrc}: ${e.currentTarget.error}. See https://remotion.dev/docs/media-playback-error for help.`;
      if (loop) {
        if (onRemotionError) {
          onRemotionError(new Error(errMessage));
          return;
        }
        cancelRender(new Error(errMessage));
      } else {
        onRemotionError?.(new Error(errMessage));
        console.warn(errMessage);
      }
    }, [loop, onRemotionError, preloadedSrc]);
    const onDuration = (0, import_react26.useCallback)((src, durationInSeconds) => {
      setDurations({ type: "got-duration", durationInSeconds, src });
    }, [setDurations]);
    const durationFetched = durations[getAbsoluteSrc(preloadedSrc)] ?? durations[getAbsoluteSrc(props.src)];
    validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
    const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
      startFrom,
      endAt,
      trimBefore,
      trimAfter
    });
    if (loop && durationFetched !== void 0) {
      if (!Number.isFinite(durationFetched)) {
        return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Audio, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalNativeLoopPassed: true
        });
      }
      const duration = durationFetched * fps;
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Loop, {
        layout: "none",
        durationInFrames: calculateLoopDuration({
          endAt: trimAfterValue ?? endAt,
          mediaDuration: duration,
          playbackRate: props.playbackRate ?? 1,
          startFrom: trimBeforeValue ?? startFrom
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Audio, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalNativeLoopPassed: true
        })
      });
    }
    if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: trimAfterValue,
        name,
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Audio, {
          _remotionInternalNeedsDurationCalculation: Boolean(loop),
          pauseWhenBuffering: pauseWhenBuffering ?? false,
          ...otherProps,
          ref
        })
      });
    }
    validateMediaProps(props, "Audio");
    if (environment.isRendering) {
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AudioForRendering, {
        onDuration,
        ...props,
        ref,
        onNativeError: onError,
        _remotionInternalNeedsDurationCalculation: Boolean(loop)
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AudioForPreview, {
      _remotionInternalNativeLoopPassed: props._remotionInternalNativeLoopPassed ?? false,
      _remotionInternalStack: stack ?? null,
      shouldPreMountAudioTags: audioContext !== null && audioContext.numberOfAudioTags > 0,
      ...props,
      ref,
      onNativeError: onError,
      onDuration,
      pauseWhenBuffering: pauseWhenBuffering ?? false,
      _remotionInternalNeedsDurationCalculation: Boolean(loop),
      showInTimeline: showInTimeline ?? true
    });
  };
  var Audio = (0, import_react26.forwardRef)(AudioRefForwardingFunction);
  addSequenceStackTraces(Audio);
  var getRegex = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
  var invalidFolderNameErrorMessage = `Folder name must match ${String(getRegex())}`;
  var FolderContext = (0, import_react49.createContext)({
    folderName: null,
    parentName: null
  });
  var rotate = {
    transform: `rotate(90deg)`
  };
  var ICON_SIZE = 40;
  var label = {
    color: "white",
    fontSize: 14,
    fontFamily: "sans-serif"
  };
  var container = {
    justifyContent: "center",
    alignItems: "center"
  };
  var Loading = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(AbsoluteFill, {
      style: container,
      id: "remotion-comp-loading",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("style", {
          type: "text/css",
          children: `
				@keyframes anim {
					from {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}
				#remotion-comp-loading {
					animation: anim 2s;
					animation-fill-mode: forwards;
				}
			`
        }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("svg", {
          width: ICON_SIZE,
          height: ICON_SIZE,
          viewBox: "-100 -100 400 400",
          style: rotate,
          children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", {
            fill: "#555",
            stroke: "#555",
            strokeWidth: "100",
            strokeLinejoin: "round",
            d: "M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", {
          style: label,
          children: [
            "Resolving ",
            "<Suspense>",
            "..."
          ]
        })
      ]
    });
  };
  var _portalNode = null;
  var portalNode = () => {
    if (!_portalNode) {
      if (typeof document === "undefined") {
        throw new Error("Tried to call an API that only works in the browser from outside the browser");
      }
      _portalNode = document.createElement("div");
      _portalNode.style.position = "absolute";
      _portalNode.style.top = "0px";
      _portalNode.style.left = "0px";
      _portalNode.style.right = "0px";
      _portalNode.style.bottom = "0px";
      _portalNode.style.width = "100%";
      _portalNode.style.height = "100%";
      _portalNode.style.display = "flex";
      _portalNode.style.flexDirection = "column";
      const containerNode = document.createElement("div");
      containerNode.style.position = "fixed";
      containerNode.style.top = "-999999px";
      containerNode.appendChild(_portalNode);
      document.body.appendChild(containerNode);
    }
    return _portalNode;
  };
  var useLazyComponent = ({
    compProps,
    componentName,
    noSuspense
  }) => {
    const lazy = (0, import_react50.useMemo)(() => {
      if ("component" in compProps) {
        if (typeof document === "undefined" || noSuspense) {
          return compProps.component;
        }
        if (typeof compProps.component === "undefined") {
          throw new Error(`A value of \`undefined\` was passed to the \`component\` prop. Check the value you are passing to the <${componentName}/> component.`);
        }
        return import_react50.default.lazy(() => Promise.resolve({ default: compProps.component }));
      }
      if ("lazyComponent" in compProps && typeof compProps.lazyComponent !== "undefined") {
        if (typeof compProps.lazyComponent === "undefined") {
          throw new Error(`A value of \`undefined\` was passed to the \`lazyComponent\` prop. Check the value you are passing to the <${componentName}/> component.`);
        }
        return import_react50.default.lazy(compProps.lazyComponent);
      }
      throw new Error("You must pass either 'component' or 'lazyComponent'");
    }, [compProps.component, compProps.lazyComponent]);
    return lazy;
  };
  var getRegex2 = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
  var isCompositionIdValid = (id) => id.match(getRegex2());
  var validateCompositionId = (id) => {
    if (!isCompositionIdValid(id)) {
      throw new Error(`Composition id can only contain a-z, A-Z, 0-9, CJK characters and -. You passed ${id}`);
    }
  };
  var invalidCompositionErrorMessage = `Composition ID must match ${String(getRegex2())}`;
  var validateDefaultAndInputProps = (defaultProps, name, compositionId) => {
    if (!defaultProps) {
      return;
    }
    if (typeof defaultProps !== "object") {
      throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
    }
    if (Array.isArray(defaultProps)) {
      throw new Error(`"${name}" must be an object, an array was passed ${compositionId ? `for composition "${compositionId}"` : ""}`);
    }
  };
  var Fallback = () => {
    const { continueRender: continueRender2, delayRender: delayRender2 } = useDelayRender();
    (0, import_react48.useEffect)(() => {
      const fallback = delayRender2("Waiting for Root component to unsuspend");
      return () => continueRender2(fallback);
    }, [continueRender2, delayRender2]);
    return null;
  };
  var InnerComposition = ({
    width,
    height,
    fps,
    durationInFrames,
    id,
    defaultProps,
    schema,
    ...compProps
  }) => {
    const compManager = (0, import_react48.useContext)(CompositionSetters);
    const { registerComposition, unregisterComposition } = compManager;
    const video = useVideo();
    const lazy = useLazyComponent({
      compProps,
      componentName: "Composition",
      noSuspense: false
    });
    const nonce = useNonce();
    const isPlayer = useIsPlayer();
    const environment = useRemotionEnvironment();
    const canUseComposition = (0, import_react48.useContext)(CanUseRemotionHooks);
    if (canUseComposition) {
      if (isPlayer) {
        throw new Error("<Composition> was mounted inside the `component` that was passed to the <Player>. See https://remotion.dev/docs/wrong-composition-mount for help.");
      }
      throw new Error("<Composition> mounted inside another composition. See https://remotion.dev/docs/wrong-composition-mount for help.");
    }
    const { folderName, parentName } = (0, import_react48.useContext)(FolderContext);
    (0, import_react48.useEffect)(() => {
      if (!id) {
        throw new Error("No id for composition passed.");
      }
      validateCompositionId(id);
      validateDefaultAndInputProps(defaultProps, "defaultProps", id);
      registerComposition({
        durationInFrames: durationInFrames ?? void 0,
        fps: fps ?? void 0,
        height: height ?? void 0,
        width: width ?? void 0,
        id,
        folderName,
        component: lazy,
        defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
        nonce,
        parentFolderName: parentName,
        schema: schema ?? null,
        calculateMetadata: compProps.calculateMetadata ?? null
      });
      return () => {
        unregisterComposition(id);
      };
    }, [
      durationInFrames,
      fps,
      height,
      lazy,
      id,
      folderName,
      defaultProps,
      width,
      nonce,
      parentName,
      schema,
      compProps.calculateMetadata,
      registerComposition,
      unregisterComposition
    ]);
    (0, import_react48.useEffect)(() => {
      window.dispatchEvent(new CustomEvent(PROPS_UPDATED_EXTERNALLY, {
        detail: {
          resetUnsaved: id
        }
      }));
    }, [defaultProps, id]);
    const resolved = useResolvedVideoConfig(id);
    if (environment.isStudio && video && video.component === lazy) {
      const Comp = lazy;
      if (resolved === null || resolved.type !== "success" && resolved.type !== "success-and-refreshing") {
        return null;
      }
      return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CanUseRemotionHooksProvider, {
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react48.Suspense, {
          fallback: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Loading, {}),
          children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Comp, {
            ...resolved.result.props ?? {}
          })
        })
      }), portalNode());
    }
    if (environment.isRendering && video && video.component === lazy) {
      const Comp = lazy;
      if (resolved === null || resolved.type !== "success" && resolved.type !== "success-and-refreshing") {
        return null;
      }
      return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CanUseRemotionHooksProvider, {
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react48.Suspense, {
          fallback: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Fallback, {}),
          children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Comp, {
            ...resolved.result.props ?? {}
          })
        })
      }), portalNode());
    }
    return null;
  };
  var Composition = (props2) => {
    const { onlyRenderComposition } = (0, import_react48.useContext)(CompositionSetters);
    if (onlyRenderComposition && onlyRenderComposition !== props2.id) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(InnerComposition, {
      ...props2
    });
  };
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 1e-3;
  var SUBDIVISION_PRECISION = 1e-7;
  var SUBDIVISION_MAX_ITERATIONS = 10;
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  var float32ArraySupported = typeof Float32Array === "function";
  function a(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function b(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function c(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((a(aA1, aA2) * aT + b(aA1, aA2)) * aT + c(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * a(aA1, aA2) * aT * aT + 2 * b(aA1, aA2) * aT + c(aA1);
  }
  function binarySubdivide({
    aX,
    _aA,
    _aB,
    mX1,
    mX2
  }) {
    let currentX;
    let currentT;
    let i = 0;
    let aA = _aA;
    let aB = _aB;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }
  function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
    let aGuessT = _aGuessT;
    for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
      const currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function bezier(mX1, mY1, mX2, mY2) {
    if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
      throw new Error("bezier x values must be in [0, 1] range");
    }
    const sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    if (mX1 !== mY1 || mX2 !== mY2) {
      for (let i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }
    function getTForX(aX) {
      let intervalStart = 0;
      let currentSample = 1;
      const lastSample = kSplineTableSize - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      const guessForT = intervalStart + dist * kSampleStepSize;
      const initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      }
      if (initialSlope === 0) {
        return guessForT;
      }
      return binarySubdivide({
        aX,
        _aA: intervalStart,
        _aB: intervalStart + kSampleStepSize,
        mX1,
        mX2
      });
    }
    return function(x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }
      if (x === 0) {
        return 0;
      }
      if (x === 1) {
        return 1;
      }
      return calcBezier(getTForX(x), mY1, mY2);
    };
  }
  var Easing = class _Easing {
    static step0(n) {
      return n > 0 ? 1 : 0;
    }
    static step1(n) {
      return n >= 1 ? 1 : 0;
    }
    static linear(t) {
      return t;
    }
    static ease(t) {
      return _Easing.bezier(0.42, 0, 1, 1)(t);
    }
    static quad(t) {
      return t * t;
    }
    static cubic(t) {
      return t * t * t;
    }
    static poly(n) {
      return (t) => t ** n;
    }
    static sin(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    }
    static circle(t) {
      return 1 - Math.sqrt(1 - t * t);
    }
    static exp(t) {
      return 2 ** (10 * (t - 1));
    }
    static elastic(bounciness = 1) {
      const p = bounciness * Math.PI;
      return (t) => 1 - Math.cos(t * Math.PI / 2) ** 3 * Math.cos(t * p);
    }
    static back(s = 1.70158) {
      return (t) => t * t * ((s + 1) * t - s);
    }
    static bounce(t) {
      if (t < 1 / 2.75) {
        return 7.5625 * t * t;
      }
      if (t < 2 / 2.75) {
        const t2_ = t - 1.5 / 2.75;
        return 7.5625 * t2_ * t2_ + 0.75;
      }
      if (t < 2.5 / 2.75) {
        const t2_ = t - 2.25 / 2.75;
        return 7.5625 * t2_ * t2_ + 0.9375;
      }
      const t2 = t - 2.625 / 2.75;
      return 7.5625 * t2 * t2 + 0.984375;
    }
    static bezier(x1, y1, x2, y2) {
      return bezier(x1, y1, x2, y2);
    }
    static in(easing) {
      return easing;
    }
    static out(easing) {
      return (t) => 1 - easing(1 - t);
    }
    static inOut(easing) {
      return (t) => {
        if (t < 0.5) {
          return easing(t * 2) / 2;
        }
        return 1 - easing((1 - t) * 2) / 2;
      };
    }
  };
  var ENABLE_V5_BREAKING_CHANGES = false;
  var IFrameRefForwarding = ({
    onLoad,
    onError,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    ...props2
  }, ref) => {
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const [handle] = (0, import_react51.useState)(() => delayRender2(`Loading <IFrame> with source ${props2.src}`, {
      retries: delayRenderRetries ?? void 0,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
    }));
    const didLoad = (0, import_react51.useCallback)((e) => {
      continueRender2(handle);
      onLoad?.(e);
    }, [handle, onLoad, continueRender2]);
    const didGetError = (0, import_react51.useCallback)((e) => {
      continueRender2(handle);
      if (onError) {
        onError(e);
      } else {
        console.error("Error loading iframe:", e, "Handle the event using the onError() prop to make this message disappear.");
      }
    }, [handle, onError, continueRender2]);
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("iframe", {
      ...props2,
      ref,
      onError: didGetError,
      onLoad: didLoad
    });
  };
  var IFrame = (0, import_react51.forwardRef)(IFrameRefForwarding);
  function exponentialBackoff(errorCount) {
    return 1e3 * 2 ** (errorCount - 1);
  }
  var ImgRefForwarding = ({
    onError,
    maxRetries = 2,
    src,
    pauseWhenLoading,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    onImageFrame,
    crossOrigin,
    ...props2
  }, ref) => {
    const imageRef = (0, import_react52.useRef)(null);
    const errors = (0, import_react52.useRef)({});
    const { delayPlayback } = useBufferState();
    const sequenceContext = (0, import_react52.useContext)(SequenceContext);
    if (!src) {
      throw new Error('No "src" prop was passed to <Img>.');
    }
    const _propsValid = true;
    if (!_propsValid) {
      throw new Error("typecheck error");
    }
    (0, import_react52.useImperativeHandle)(ref, () => {
      return imageRef.current;
    }, []);
    const actualSrc = usePreload(src);
    const retryIn = (0, import_react52.useCallback)((timeout) => {
      if (!imageRef.current) {
        return;
      }
      const currentSrc = imageRef.current.src;
      setTimeout(() => {
        if (!imageRef.current) {
          return;
        }
        const newSrc = imageRef.current?.src;
        if (newSrc !== currentSrc) {
          return;
        }
        imageRef.current.removeAttribute("src");
        imageRef.current.setAttribute("src", newSrc);
      }, timeout);
    }, []);
    const didGetError = (0, import_react52.useCallback)((e) => {
      if (!errors.current) {
        return;
      }
      errors.current[imageRef.current?.src] = (errors.current[imageRef.current?.src] ?? 0) + 1;
      if (onError && (errors.current[imageRef.current?.src] ?? 0) > maxRetries) {
        onError(e);
        return;
      }
      if ((errors.current[imageRef.current?.src] ?? 0) <= maxRetries) {
        const backoff = exponentialBackoff(errors.current[imageRef.current?.src] ?? 0);
        console.warn(`Could not load image with source ${imageRef.current?.src}, retrying again in ${backoff}ms`);
        retryIn(backoff);
        return;
      }
      cancelRender("Error loading image with src: " + imageRef.current?.src);
    }, [maxRetries, onError, retryIn]);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    if (typeof window !== "undefined") {
      const isPremounting = Boolean(sequenceContext?.premounting);
      const isPostmounting = Boolean(sequenceContext?.postmounting);
      (0, import_react52.useLayoutEffect)(() => {
        if (window.process?.env?.NODE_ENV === "test") {
          if (imageRef.current) {
            imageRef.current.src = actualSrc;
          }
          return;
        }
        const { current } = imageRef;
        if (!current) {
          return;
        }
        const newHandle = delayRender2("Loading <Img> with src=" + actualSrc, {
          retries: delayRenderRetries ?? void 0,
          timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
        });
        const unblock = pauseWhenLoading && !isPremounting && !isPostmounting ? delayPlayback().unblock : () => {
          return;
        };
        let unmounted = false;
        const onComplete = () => {
          if (unmounted) {
            continueRender2(newHandle);
            return;
          }
          if ((errors.current[imageRef.current?.src] ?? 0) > 0) {
            delete errors.current[imageRef.current?.src];
            console.info(`Retry successful - ${imageRef.current?.src} is now loaded`);
          }
          if (current) {
            onImageFrame?.(current);
          }
          unblock();
          continueRender2(newHandle);
        };
        if (!imageRef.current) {
          onComplete();
          return;
        }
        current.src = actualSrc;
        if (current.complete) {
          onComplete();
        } else {
          current.decode().then(onComplete).catch((err) => {
            console.warn(err);
            if (current.complete) {
              onComplete();
            } else {
              current.addEventListener("load", onComplete);
            }
          });
        }
        return () => {
          unmounted = true;
          current.removeEventListener("load", onComplete);
          unblock();
          continueRender2(newHandle);
        };
      }, [
        actualSrc,
        delayPlayback,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
        pauseWhenLoading,
        isPremounting,
        isPostmounting,
        onImageFrame,
        continueRender2,
        delayRender2
      ]);
    }
    const crossOriginValue = getCrossOriginValue({
      crossOrigin,
      requestsVideoFrame: false
    });
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("img", {
      ...props2,
      ref: imageRef,
      crossOrigin: crossOriginValue,
      onError: didGetError
    });
  };
  var Img = (0, import_react52.forwardRef)(ImgRefForwarding);
  var compositionsRef = import_react54.default.createRef();
  var CompositionManagerProvider = ({
    children,
    numberOfAudioTags,
    onlyRenderComposition,
    currentCompositionMetadata,
    audioLatencyHint
  }) => {
    const [compositions, setCompositions] = (0, import_react54.useState)([]);
    const currentcompositionsRef = (0, import_react54.useRef)(compositions);
    const [folders, setFolders] = (0, import_react54.useState)([]);
    const [canvasContent, setCanvasContent] = (0, import_react54.useState)(null);
    const updateCompositions = (0, import_react54.useCallback)((updateComps) => {
      setCompositions((comps) => {
        const updated = updateComps(comps);
        currentcompositionsRef.current = updated;
        return updated;
      });
    }, []);
    const registerComposition = (0, import_react54.useCallback)((comp) => {
      updateCompositions((comps) => {
        if (comps.find((c2) => c2.id === comp.id)) {
          throw new Error(`Multiple composition with id ${comp.id} are registered.`);
        }
        const value = [...comps, comp].slice().sort((a2, b2) => a2.nonce - b2.nonce);
        return value;
      });
    }, [updateCompositions]);
    const unregisterComposition = (0, import_react54.useCallback)((id) => {
      setCompositions((comps) => {
        return comps.filter((c2) => c2.id !== id);
      });
    }, []);
    const registerFolder = (0, import_react54.useCallback)((name, parent) => {
      setFolders((prevFolders) => {
        return [
          ...prevFolders,
          {
            name,
            parent
          }
        ];
      });
    }, []);
    const unregisterFolder = (0, import_react54.useCallback)((name, parent) => {
      setFolders((prevFolders) => {
        return prevFolders.filter((p) => !(p.name === name && p.parent === parent));
      });
    }, []);
    (0, import_react54.useImperativeHandle)(compositionsRef, () => {
      return {
        getCompositions: () => currentcompositionsRef.current
      };
    }, []);
    const composition = compositions.find((c2) => canvasContent?.type === "composition" ? c2.id === canvasContent.compositionId : null);
    const updateCompositionDefaultProps = (0, import_react54.useCallback)((id, newDefaultProps) => {
      setCompositions((comps) => {
        const updated = comps.map((c2) => {
          if (c2.id === id) {
            return {
              ...c2,
              defaultProps: newDefaultProps
            };
          }
          return c2;
        });
        return updated;
      });
    }, []);
    const contextValue = (0, import_react54.useMemo)(() => {
      return {
        compositions,
        folders,
        currentCompositionMetadata,
        canvasContent
      };
    }, [compositions, folders, currentCompositionMetadata, canvasContent]);
    const setters = (0, import_react54.useMemo)(() => {
      return {
        registerComposition,
        unregisterComposition,
        registerFolder,
        unregisterFolder,
        setCanvasContent,
        updateCompositionDefaultProps,
        onlyRenderComposition
      };
    }, [
      registerComposition,
      registerFolder,
      unregisterComposition,
      unregisterFolder,
      updateCompositionDefaultProps,
      onlyRenderComposition
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CompositionManager.Provider, {
      value: contextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CompositionSetters.Provider, {
        value: setters,
        children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SequenceManagerProvider, {
          children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(RenderAssetManagerProvider, {
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ResolveCompositionConfig, {
              children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SharedAudioContextProvider, {
                numberOfAudioTags,
                component: composition?.component ?? null,
                audioLatencyHint,
                children
              })
            })
          })
        })
      })
    });
  };
  var exports_default_css = {};
  __export2(exports_default_css, {
    makeDefaultPreviewCSS: () => makeDefaultPreviewCSS,
    injectCSS: () => injectCSS,
    OBJECTFIT_CONTAIN_CLASS_NAME: () => OBJECTFIT_CONTAIN_CLASS_NAME
  });
  var injected = {};
  var injectCSS = (css) => {
    if (typeof document === "undefined") {
      return;
    }
    if (injected[css]) {
      return;
    }
    const head = document.head || document.getElementsByTagName("head")[0];
    const style2 = document.createElement("style");
    style2.appendChild(document.createTextNode(css));
    head.prepend(style2);
    injected[css] = true;
  };
  var OBJECTFIT_CONTAIN_CLASS_NAME = "__remotion_objectfitcontain";
  var makeDefaultPreviewCSS = (scope, backgroundColor) => {
    if (!scope) {
      return `
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
	    background-color: ${backgroundColor};
    }
    .${OBJECTFIT_CONTAIN_CLASS_NAME} {
      object-fit: contain;
    }
    `;
    }
    return `
    ${scope} * {
      box-sizing: border-box;
    }
    ${scope} *:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
    ${scope} .${OBJECTFIT_CONTAIN_CLASS_NAME} {
      object-fit: contain;
    }
  `;
  };
  var REMOTION_STUDIO_CONTAINER_ELEMENT = "__remotion-studio-container";
  var getPreviewDomElement = () => {
    return document.getElementById(REMOTION_STUDIO_CONTAINER_ELEMENT);
  };
  var Root = null;
  var listeners = [];
  var getRoot = () => {
    return Root;
  };
  var waitForRoot = (fn) => {
    if (Root) {
      fn(Root);
      return () => {
        return;
      };
    }
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((l) => l !== fn);
    };
  };
  var RemotionRoot = ({
    children,
    numberOfAudioTags,
    logLevel,
    onlyRenderComposition,
    currentCompositionMetadata,
    audioLatencyHint
  }) => {
    const [remotionRootId] = (0, import_react55.useState)(() => String(random(null)));
    const [frame, setFrame] = (0, import_react55.useState)(() => getInitialFrameState());
    const [playing, setPlaying] = (0, import_react55.useState)(false);
    const imperativePlaying = (0, import_react55.useRef)(false);
    const [fastRefreshes, setFastRefreshes] = (0, import_react55.useState)(0);
    const [manualRefreshes, setManualRefreshes] = (0, import_react55.useState)(0);
    const [playbackRate, setPlaybackRate] = (0, import_react55.useState)(1);
    const audioAndVideoTags = (0, import_react55.useRef)([]);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    if (typeof window !== "undefined") {
      (0, import_react55.useLayoutEffect)(() => {
        window.remotion_setFrame = (f, composition, attempt) => {
          window.remotion_attempt = attempt;
          const id = delayRender2(`Setting the current frame to ${f}`);
          let asyncUpdate = true;
          setFrame((s) => {
            const currentFrame = s[composition] ?? window.remotion_initialFrame;
            if (currentFrame === f) {
              asyncUpdate = false;
              return s;
            }
            return {
              ...s,
              [composition]: f
            };
          });
          if (asyncUpdate) {
            requestAnimationFrame(() => continueRender2(id));
          } else {
            continueRender2(id);
          }
        };
        window.remotion_isPlayer = false;
      }, [continueRender2, delayRender2]);
    }
    const timelineContextValue = (0, import_react55.useMemo)(() => {
      return {
        frame,
        playing,
        imperativePlaying,
        rootId: remotionRootId,
        playbackRate,
        setPlaybackRate,
        audioAndVideoTags
      };
    }, [frame, playbackRate, playing, remotionRootId]);
    const setTimelineContextValue = (0, import_react55.useMemo)(() => {
      return {
        setFrame,
        setPlaying
      };
    }, []);
    const nonceContext = (0, import_react55.useMemo)(() => {
      let counter = 0;
      return {
        getNonce: () => counter++,
        fastRefreshes,
        manualRefreshes
      };
    }, [fastRefreshes, manualRefreshes]);
    const setNonceContext = (0, import_react55.useMemo)(() => {
      return {
        increaseManualRefreshes: () => {
          setManualRefreshes((i) => i + 1);
        }
      };
    }, []);
    (0, import_react55.useEffect)(() => {
      if (typeof __webpack_module__ !== "undefined") {
        if (__webpack_module__.hot) {
          __webpack_module__.hot.addStatusHandler((status) => {
            if (status === "idle") {
              setFastRefreshes((i) => i + 1);
            }
          });
        }
      }
    }, []);
    const logging = (0, import_react55.useMemo)(() => {
      return { logLevel, mountTime: Date.now() };
    }, [logLevel]);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(LogLevelContext.Provider, {
      value: logging,
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(NonceContext.Provider, {
        value: nonceContext,
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(SetNonceContext.Provider, {
          value: setNonceContext,
          children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TimelineContext.Provider, {
            value: timelineContextValue,
            children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(SetTimelineContext.Provider, {
              value: setTimelineContextValue,
              children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(EditorPropsProvider, {
                children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(PrefetchProvider, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(CompositionManagerProvider, {
                    numberOfAudioTags,
                    onlyRenderComposition,
                    currentCompositionMetadata,
                    audioLatencyHint,
                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DurationsContextProvider, {
                      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(BufferingProvider, {
                        children
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  var getEnvVariables = () => {
    if (getRemotionEnvironment().isRendering) {
      const param = window.remotion_envVariables;
      if (!param) {
        return {};
      }
      return { ...JSON.parse(param), NODE_ENV: "production" };
    }
    if (false) {
    }
    return {
      NODE_ENV: "production"
    };
  };
  var setupEnvVariables = () => {
    const env = getEnvVariables();
    if (!window.process) {
      window.process = {};
    }
    if (!window.process.env) {
      window.process.env = {};
    }
    Object.keys(env).forEach((key) => {
      window.process.env[key] = env[key];
    });
  };
  var CurrentScaleContext = import_react56.default.createContext(null);
  var PreviewSizeContext = (0, import_react56.createContext)({
    setSize: () => {
      return;
    },
    size: { size: "auto", translation: { x: 0, y: 0 } }
  });
  var calculateScale = ({
    canvasSize,
    compositionHeight,
    compositionWidth,
    previewSize
  }) => {
    const heightRatio = canvasSize.height / compositionHeight;
    const widthRatio = canvasSize.width / compositionWidth;
    const ratio = Math.min(heightRatio, widthRatio);
    if (previewSize === "auto") {
      if (ratio === 0) {
        return 1;
      }
      return ratio;
    }
    return Number(previewSize);
  };
  var useEmitVideoFrame = ({
    ref,
    onVideoFrame
  }) => {
    (0, import_react58.useEffect)(() => {
      const { current } = ref;
      if (!current) {
        return;
      }
      if (!onVideoFrame) {
        return;
      }
      let handle = 0;
      const callback = () => {
        if (!ref.current) {
          return;
        }
        onVideoFrame(ref.current);
        handle = ref.current.requestVideoFrameCallback(callback);
      };
      callback();
      return () => {
        current.cancelVideoFrameCallback(handle);
      };
    }, [onVideoFrame, ref]);
  };
  var VideoForDevelopmentRefForwardingFunction = (props2, ref) => {
    const context = (0, import_react57.useContext)(SharedAudioContext);
    if (!context) {
      throw new Error("SharedAudioContext not found");
    }
    const videoRef = (0, import_react57.useRef)(null);
    const sharedSource = (0, import_react57.useMemo)(() => {
      if (!context.audioContext) {
        return null;
      }
      return makeSharedElementSourceNode({
        audioContext: context.audioContext,
        ref: videoRef
      });
    }, [context.audioContext]);
    const {
      volume,
      muted,
      playbackRate,
      onlyWarnForMediaSeekingError,
      src,
      onDuration,
      acceptableTimeShift,
      acceptableTimeShiftInSeconds,
      toneFrequency,
      name,
      _remotionInternalNativeLoopPassed,
      _remotionInternalStack,
      style: style2,
      pauseWhenBuffering,
      showInTimeline,
      loopVolumeCurveBehavior,
      onError,
      onAutoPlayError,
      onVideoFrame,
      crossOrigin,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      allowAmplificationDuringRender,
      useWebAudioApi,
      audioStreamIndex,
      ...nativeProps
    } = props2;
    const _propsValid = true;
    if (!_propsValid) {
      throw new Error("typecheck error");
    }
    const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    const { fps, durationInFrames } = useVideoConfig();
    const parentSequence = (0, import_react57.useContext)(SequenceContext);
    const { hidden } = (0, import_react57.useContext)(SequenceVisibilityToggleContext);
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const [timelineId] = (0, import_react57.useState)(() => String(Math.random()));
    const isSequenceHidden = hidden[timelineId] ?? false;
    if (typeof acceptableTimeShift !== "undefined") {
      throw new Error("acceptableTimeShift has been removed. Use acceptableTimeShiftInSeconds instead.");
    }
    const [mediaVolume] = useMediaVolumeState();
    const [mediaMuted] = useMediaMutedState();
    const userPreferredVolume = evaluateVolume({
      frame: volumePropFrame,
      volume,
      mediaVolume
    });
    warnAboutTooHighVolume(userPreferredVolume);
    useMediaInTimeline({
      mediaRef: videoRef,
      volume,
      mediaVolume,
      mediaType: "video",
      src,
      playbackRate: props2.playbackRate ?? 1,
      displayName: name ?? null,
      id: timelineId,
      stack: _remotionInternalStack,
      showInTimeline,
      premountDisplay: null,
      postmountDisplay: null,
      onAutoPlayError: onAutoPlayError ?? null,
      isPremounting: Boolean(parentSequence?.premounting),
      isPostmounting: Boolean(parentSequence?.postmounting)
    });
    useMediaPlayback({
      mediaRef: videoRef,
      src,
      mediaType: "video",
      playbackRate: props2.playbackRate ?? 1,
      onlyWarnForMediaSeekingError,
      acceptableTimeshift: acceptableTimeShiftInSeconds ?? null,
      isPremounting: Boolean(parentSequence?.premounting),
      isPostmounting: Boolean(parentSequence?.postmounting),
      pauseWhenBuffering,
      onAutoPlayError: onAutoPlayError ?? null
    });
    useVolume({
      logLevel,
      mediaRef: videoRef,
      volume: userPreferredVolume,
      source: sharedSource,
      shouldUseWebAudioApi: useWebAudioApi ?? false
    });
    const actualFrom = parentSequence ? parentSequence.relativeFrom : 0;
    const duration = parentSequence ? Math.min(parentSequence.durationInFrames, durationInFrames) : durationInFrames;
    const preloadedSrc = usePreload(src);
    const actualSrc = useAppendVideoFragment({
      actualSrc: preloadedSrc,
      actualFrom,
      duration,
      fps
    });
    (0, import_react57.useImperativeHandle)(ref, () => {
      return videoRef.current;
    }, []);
    (0, import_react57.useState)(() => playbackLogging({
      logLevel,
      message: `Mounting video with source = ${actualSrc}, v=${VERSION}, user agent=${typeof navigator === "undefined" ? "server" : navigator.userAgent}`,
      tag: "video",
      mountTime
    }));
    (0, import_react57.useEffect)(() => {
      const { current } = videoRef;
      if (!current) {
        return;
      }
      const errorHandler = () => {
        if (current.error) {
          console.error("Error occurred in video", current?.error);
          if (onError) {
            const err = new Error(`Code ${current.error.code}: ${current.error.message}`);
            onError(err);
            return;
          }
          throw new Error(`The browser threw an error while playing the video ${src}: Code ${current.error.code} - ${current?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`);
        } else {
          if (onError) {
            const err = new Error(`The browser threw an error while playing the video ${src}`);
            onError(err);
            return;
          }
          throw new Error("The browser threw an error while playing the video");
        }
      };
      current.addEventListener("error", errorHandler, { once: true });
      return () => {
        current.removeEventListener("error", errorHandler);
      };
    }, [onError, src]);
    const currentOnDurationCallback = (0, import_react57.useRef)(onDuration);
    currentOnDurationCallback.current = onDuration;
    useEmitVideoFrame({ ref: videoRef, onVideoFrame });
    (0, import_react57.useEffect)(() => {
      const { current } = videoRef;
      if (!current) {
        return;
      }
      if (current.duration) {
        currentOnDurationCallback.current?.(src, current.duration);
        return;
      }
      const onLoadedMetadata = () => {
        currentOnDurationCallback.current?.(src, current.duration);
      };
      current.addEventListener("loadedmetadata", onLoadedMetadata);
      return () => {
        current.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }, [src]);
    (0, import_react57.useEffect)(() => {
      const { current } = videoRef;
      if (!current) {
        return;
      }
      if (isIosSafari()) {
        current.preload = "metadata";
      } else {
        current.preload = "auto";
      }
    }, []);
    const actualStyle = (0, import_react57.useMemo)(() => {
      return {
        ...style2,
        opacity: isSequenceHidden ? 0 : style2?.opacity ?? 1
      };
    }, [isSequenceHidden, style2]);
    const crossOriginValue = getCrossOriginValue({
      crossOrigin,
      requestsVideoFrame: Boolean(onVideoFrame)
    });
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("video", {
      ref: videoRef,
      muted: muted || mediaMuted || isSequenceHidden || userPreferredVolume <= 0,
      playsInline: true,
      src: actualSrc,
      loop: _remotionInternalNativeLoopPassed,
      style: actualStyle,
      disableRemotePlayback: true,
      crossOrigin: crossOriginValue,
      ...nativeProps
    });
  };
  var VideoForPreview = (0, import_react57.forwardRef)(VideoForDevelopmentRefForwardingFunction);
  var WATCH_REMOTION_STATIC_FILES = "remotion_staticFilesChanged";
  function useRemotionContexts() {
    const compositionManagerCtx = import_react59.default.useContext(CompositionManager);
    const timelineContext = import_react59.default.useContext(TimelineContext);
    const setTimelineContext = import_react59.default.useContext(SetTimelineContext);
    const sequenceContext = import_react59.default.useContext(SequenceContext);
    const nonceContext = import_react59.default.useContext(NonceContext);
    const canUseRemotionHooksContext = import_react59.default.useContext(CanUseRemotionHooks);
    const preloadContext = import_react59.default.useContext(PreloadContext);
    const resolveCompositionContext = import_react59.default.useContext(ResolveCompositionContext);
    const renderAssetManagerContext = import_react59.default.useContext(RenderAssetManager);
    const sequenceManagerContext = import_react59.default.useContext(SequenceManager);
    const bufferManagerContext = import_react59.default.useContext(BufferingContextReact);
    const logLevelContext = import_react59.default.useContext(LogLevelContext);
    return (0, import_react59.useMemo)(() => ({
      compositionManagerCtx,
      timelineContext,
      setTimelineContext,
      sequenceContext,
      nonceContext,
      canUseRemotionHooksContext,
      preloadContext,
      resolveCompositionContext,
      renderAssetManagerContext,
      sequenceManagerContext,
      bufferManagerContext,
      logLevelContext
    }), [
      compositionManagerCtx,
      nonceContext,
      sequenceContext,
      setTimelineContext,
      timelineContext,
      canUseRemotionHooksContext,
      preloadContext,
      resolveCompositionContext,
      renderAssetManagerContext,
      sequenceManagerContext,
      bufferManagerContext,
      logLevelContext
    ]);
  }
  var RemotionContextProvider = (props2) => {
    const { children, contexts } = props2;
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(LogLevelContext.Provider, {
      value: contexts.logLevelContext,
      children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(CanUseRemotionHooks.Provider, {
        value: contexts.canUseRemotionHooksContext,
        children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NonceContext.Provider, {
          value: contexts.nonceContext,
          children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(PreloadContext.Provider, {
            value: contexts.preloadContext,
            children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(CompositionManager.Provider, {
              value: contexts.compositionManagerCtx,
              children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(SequenceManager.Provider, {
                value: contexts.sequenceManagerContext,
                children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(RenderAssetManager.Provider, {
                  value: contexts.renderAssetManagerContext,
                  children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ResolveCompositionContext.Provider, {
                    value: contexts.resolveCompositionContext,
                    children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(TimelineContext.Provider, {
                      value: contexts.timelineContext,
                      children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(SetTimelineContext.Provider, {
                        value: contexts.setTimelineContext,
                        children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(SequenceContext.Provider, {
                          value: contexts.sequenceContext,
                          children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(BufferingContextReact.Provider, {
                            value: contexts.bufferManagerContext,
                            children
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  var compositionSelectorRef = (0, import_react53.createRef)();
  var Internals = {
    useUnsafeVideoConfig,
    useFrameForVolumeProp,
    useTimelinePosition,
    evaluateVolume,
    getAbsoluteSrc,
    Timeline: exports_timeline_position_state,
    validateMediaTrimProps,
    validateMediaProps,
    resolveTrimProps,
    VideoForPreview,
    CompositionManager,
    CompositionSetters,
    SequenceManager,
    SequenceVisibilityToggleContext,
    RemotionRoot,
    useVideo,
    getRoot,
    useMediaVolumeState,
    useMediaMutedState,
    useLazyComponent,
    truthy,
    SequenceContext,
    useRemotionContexts,
    RemotionContextProvider,
    CSSUtils: exports_default_css,
    setupEnvVariables,
    MediaVolumeContext,
    SetMediaVolumeContext,
    getRemotionEnvironment,
    SharedAudioContext,
    SharedAudioContextProvider,
    invalidCompositionErrorMessage,
    isCompositionIdValid,
    getPreviewDomElement,
    compositionsRef,
    portalNode,
    waitForRoot,
    CanUseRemotionHooksProvider,
    CanUseRemotionHooks,
    PrefetchProvider,
    DurationsContextProvider,
    IsPlayerContextProvider,
    useIsPlayer,
    EditorPropsProvider,
    EditorPropsContext,
    usePreload,
    NonceContext,
    SetNonceContext,
    resolveVideoConfig,
    useResolvedVideoConfig,
    resolveCompositionsRef,
    ResolveCompositionConfig,
    REMOTION_STUDIO_CONTAINER_ELEMENT,
    RenderAssetManager,
    persistCurrentFrame,
    useTimelineSetFrame,
    isIosSafari,
    WATCH_REMOTION_STATIC_FILES,
    addSequenceStackTraces,
    useMediaStartsAt,
    BufferingProvider,
    BufferingContextReact,
    enableSequenceStackTraces,
    CurrentScaleContext,
    PreviewSizeContext,
    calculateScale,
    editorPropsProviderRef,
    PROPS_UPDATED_EXTERNALLY,
    validateRenderAsset,
    Log,
    LogLevelContext,
    useLogLevel,
    playbackLogging,
    timeValueRef,
    compositionSelectorRef,
    RemotionEnvironmentContext,
    warnAboutTooHighVolume,
    AudioForPreview,
    OBJECTFIT_CONTAIN_CLASS_NAME
  };
  var NUMBER = "[-+]?\\d*\\.?\\d+";
  var PERCENTAGE = NUMBER + "%";
  var validateFrame = ({
    allowFloats,
    durationInFrames,
    frame
  }) => {
    if (typeof frame === "undefined") {
      throw new TypeError(`Argument missing for parameter "frame"`);
    }
    if (typeof frame !== "number") {
      throw new TypeError(`Argument passed for "frame" is not a number: ${frame}`);
    }
    if (!Number.isFinite(frame)) {
      throw new RangeError(`Frame ${frame} is not finite`);
    }
    if (frame % 1 !== 0 && !allowFloats) {
      throw new RangeError(`Argument for frame must be an integer, but got ${frame}`);
    }
    if (frame < 0 && frame < -durationInFrames) {
      throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the lowest frame that can be rendered is ${-durationInFrames}`);
    }
    if (frame > durationInFrames - 1) {
      throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the highest frame that can be rendered is ${durationInFrames - 1}`);
    }
  };
  var flattenChildren = (children) => {
    const childrenArray = import_react61.default.Children.toArray(children);
    return childrenArray.reduce((flatChildren, child) => {
      if (child.type === import_react61.default.Fragment) {
        return flatChildren.concat(flattenChildren(child.props.children));
      }
      flatChildren.push(child);
      return flatChildren;
    }, []);
  };
  var IsInsideSeriesContext = (0, import_react62.createContext)(false);
  var IsInsideSeriesContainer = ({ children }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(IsInsideSeriesContext.Provider, {
      value: true,
      children
    });
  };
  var IsNotInsideSeriesProvider = ({ children }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(IsInsideSeriesContext.Provider, {
      value: false,
      children
    });
  };
  var useRequireToBeInsideSeries = () => {
    const isInsideSeries = import_react62.default.useContext(IsInsideSeriesContext);
    if (!isInsideSeries) {
      throw new Error("This component must be inside a <Series /> component.");
    }
  };
  var SeriesSequenceRefForwardingFunction = ({ children }, _ref) => {
    useRequireToBeInsideSeries();
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(IsNotInsideSeriesProvider, {
      children
    });
  };
  var SeriesSequence = (0, import_react60.forwardRef)(SeriesSequenceRefForwardingFunction);
  var Series = (props2) => {
    const childrenValue = (0, import_react60.useMemo)(() => {
      let startFrame = 0;
      const flattenedChildren = flattenChildren(props2.children);
      return import_react60.Children.map(flattenedChildren, (child, i) => {
        const castedChild = child;
        if (typeof castedChild === "string") {
          if (castedChild.trim() === "") {
            return null;
          }
          throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but you passed a string "${castedChild}"`);
        }
        if (castedChild.type !== SeriesSequence) {
          throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but got ${castedChild} instead`);
        }
        const debugInfo = `index = ${i}, duration = ${castedChild.props.durationInFrames}`;
        if (!castedChild?.props.children) {
          throw new TypeError(`A <Series.Sequence /> component (${debugInfo}) was detected to not have any children. Delete it to fix this error.`);
        }
        const durationInFramesProp = castedChild.props.durationInFrames;
        const {
          durationInFrames,
          children: _children,
          from,
          name,
          ...passedProps
        } = castedChild.props;
        if (i !== flattenedChildren.length - 1 || durationInFramesProp !== Infinity) {
          validateDurationInFrames(durationInFramesProp, {
            component: `of a <Series.Sequence /> component`,
            allowFloats: true
          });
        }
        const offset = castedChild.props.offset ?? 0;
        if (Number.isNaN(offset)) {
          throw new TypeError(`The "offset" property of a <Series.Sequence /> must not be NaN, but got NaN (${debugInfo}).`);
        }
        if (!Number.isFinite(offset)) {
          throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
        }
        if (offset % 1 !== 0) {
          throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
        }
        const currentStartFrame = startFrame + offset;
        startFrame += durationInFramesProp + offset;
        return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Sequence, {
          name: name || "<Series.Sequence>",
          from: currentStartFrame,
          durationInFrames: durationInFramesProp,
          ...passedProps,
          ref: castedChild.ref,
          children: child
        });
      });
    }, [props2.children]);
    if (ENABLE_V5_BREAKING_CHANGES) {
      return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(IsInsideSeriesContainer, {
        children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Sequence, {
          ...props2,
          children: childrenValue
        })
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(IsInsideSeriesContainer, {
      children: childrenValue
    });
  };
  Series.Sequence = SeriesSequence;
  addSequenceStackTraces(SeriesSequence);
  var validateSpringDuration = (dur) => {
    if (typeof dur === "undefined") {
      return;
    }
    if (typeof dur !== "number") {
      throw new TypeError(`A "duration" of a spring must be a "number" but is "${typeof dur}"`);
    }
    if (Number.isNaN(dur)) {
      throw new TypeError('A "duration" of a spring is NaN, which it must not be');
    }
    if (!Number.isFinite(dur)) {
      throw new TypeError('A "duration" of a spring must be finite, but is ' + dur);
    }
    if (dur <= 0) {
      throw new TypeError('A "duration" of a spring must be positive, but is ' + dur);
    }
  };
  var defaultSpringConfig = {
    damping: 10,
    mass: 1,
    stiffness: 100,
    overshootClamping: false
  };
  var advanceCache = {};
  function advance({
    animation,
    now,
    config
  }) {
    const { toValue, lastTimestamp, current, velocity } = animation;
    const deltaTime = Math.min(now - lastTimestamp, 64);
    if (config.damping <= 0) {
      throw new Error("Spring damping must be greater than 0, otherwise the spring() animation will never end, causing an infinite loop.");
    }
    const c2 = config.damping;
    const m = config.mass;
    const k = config.stiffness;
    const cacheKey = [
      toValue,
      lastTimestamp,
      current,
      velocity,
      c2,
      m,
      k,
      now
    ].join("-");
    if (advanceCache[cacheKey]) {
      return advanceCache[cacheKey];
    }
    const v0 = -velocity;
    const x0 = toValue - current;
    const zeta = c2 / (2 * Math.sqrt(k * m));
    const omega0 = Math.sqrt(k / m);
    const omega1 = omega0 * Math.sqrt(1 - zeta ** 2);
    const t = deltaTime / 1e3;
    const sin1 = Math.sin(omega1 * t);
    const cos1 = Math.cos(omega1 * t);
    const underDampedEnvelope = Math.exp(-zeta * omega0 * t);
    const underDampedFrag1 = underDampedEnvelope * (sin1 * ((v0 + zeta * omega0 * x0) / omega1) + x0 * cos1);
    const underDampedPosition = toValue - underDampedFrag1;
    const underDampedVelocity = zeta * omega0 * underDampedFrag1 - underDampedEnvelope * (cos1 * (v0 + zeta * omega0 * x0) - omega1 * x0 * sin1);
    const criticallyDampedEnvelope = Math.exp(-omega0 * t);
    const criticallyDampedPosition = toValue - criticallyDampedEnvelope * (x0 + (v0 + omega0 * x0) * t);
    const criticallyDampedVelocity = criticallyDampedEnvelope * (v0 * (t * omega0 - 1) + t * x0 * omega0 * omega0);
    const animationNode = {
      toValue,
      prevPosition: current,
      lastTimestamp: now,
      current: zeta < 1 ? underDampedPosition : criticallyDampedPosition,
      velocity: zeta < 1 ? underDampedVelocity : criticallyDampedVelocity
    };
    advanceCache[cacheKey] = animationNode;
    return animationNode;
  }
  var calculationCache = {};
  function springCalculation({
    frame,
    fps,
    config = {}
  }) {
    const from = 0;
    const to = 1;
    const cacheKey = [
      frame,
      fps,
      config.damping,
      config.mass,
      config.overshootClamping,
      config.stiffness
    ].join("-");
    if (calculationCache[cacheKey]) {
      return calculationCache[cacheKey];
    }
    let animation = {
      lastTimestamp: 0,
      current: from,
      toValue: to,
      velocity: 0,
      prevPosition: 0
    };
    const frameClamped = Math.max(0, frame);
    const unevenRest = frameClamped % 1;
    for (let f = 0; f <= Math.floor(frameClamped); f++) {
      if (f === Math.floor(frameClamped)) {
        f += unevenRest;
      }
      const time = f / fps * 1e3;
      animation = advance({
        animation,
        now: time,
        config: {
          ...defaultSpringConfig,
          ...config
        }
      });
    }
    calculationCache[cacheKey] = animation;
    return animation;
  }
  var cache = /* @__PURE__ */ new Map();
  function measureSpring({
    fps,
    config = {},
    threshold = 5e-3
  }) {
    if (typeof threshold !== "number") {
      throw new TypeError(`threshold must be a number, got ${threshold} of type ${typeof threshold}`);
    }
    if (threshold === 0) {
      return Infinity;
    }
    if (threshold === 1) {
      return 0;
    }
    if (isNaN(threshold)) {
      throw new TypeError("Threshold is NaN");
    }
    if (!Number.isFinite(threshold)) {
      throw new TypeError("Threshold is not finite");
    }
    if (threshold < 0) {
      throw new TypeError("Threshold is below 0");
    }
    const cacheKey = [
      fps,
      config.damping,
      config.mass,
      config.overshootClamping,
      config.stiffness,
      threshold
    ].join("-");
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    validateFps(fps, "to the measureSpring() function", false);
    let frame = 0;
    let finishedFrame = 0;
    const calc = () => {
      return springCalculation({
        fps,
        frame,
        config
      });
    };
    let animation = calc();
    const calcDifference = () => {
      return Math.abs(animation.current - animation.toValue);
    };
    let difference = calcDifference();
    while (difference >= threshold) {
      frame++;
      animation = calc();
      difference = calcDifference();
    }
    finishedFrame = frame;
    for (let i = 0; i < 20; i++) {
      frame++;
      animation = calc();
      difference = calcDifference();
      if (difference >= threshold) {
        i = 0;
        finishedFrame = frame + 1;
      }
    }
    cache.set(cacheKey, finishedFrame);
    return finishedFrame;
  }
  function spring({
    frame: passedFrame,
    fps,
    config = {},
    from = 0,
    to = 1,
    durationInFrames: passedDurationInFrames,
    durationRestThreshold,
    delay: delay2 = 0,
    reverse = false
  }) {
    validateSpringDuration(passedDurationInFrames);
    validateFrame({
      frame: passedFrame,
      durationInFrames: Infinity,
      allowFloats: true
    });
    validateFps(fps, "to spring()", false);
    const needsToCalculateNaturalDuration = reverse || typeof passedDurationInFrames !== "undefined";
    const naturalDuration = needsToCalculateNaturalDuration ? measureSpring({
      fps,
      config,
      threshold: durationRestThreshold
    }) : void 0;
    const naturalDurationGetter = needsToCalculateNaturalDuration ? {
      get: () => naturalDuration
    } : {
      get: () => {
        throw new Error("did not calculate natural duration, this is an error with Remotion. Please report");
      }
    };
    const reverseProcessed = reverse ? (passedDurationInFrames ?? naturalDurationGetter.get()) - passedFrame : passedFrame;
    const delayProcessed = reverseProcessed + (reverse ? delay2 : -delay2);
    const durationProcessed = passedDurationInFrames === void 0 ? delayProcessed : delayProcessed / (passedDurationInFrames / naturalDurationGetter.get());
    if (passedDurationInFrames && delayProcessed > passedDurationInFrames) {
      return to;
    }
    const spr = springCalculation({
      fps,
      frame: durationProcessed,
      config
    });
    const inner = config.overshootClamping ? to >= from ? Math.min(spr.current, to) : Math.max(spr.current, to) : spr.current;
    const interpolated = from === 0 && to === 1 ? inner : interpolate(inner, [0, 1], [from, to]);
    return interpolated;
  }
  var roundTo6Commas = (num) => {
    return Math.round(num * 1e5) / 1e5;
  };
  var seekToTime = ({
    element,
    desiredTime,
    logLevel,
    mountTime
  }) => {
    if (isApproximatelyTheSame(element.currentTime, desiredTime)) {
      return {
        wait: Promise.resolve(desiredTime),
        cancel: () => {
        }
      };
    }
    seek({
      logLevel,
      mediaRef: element,
      time: desiredTime,
      why: "Seeking during rendering",
      mountTime
    });
    let cancel;
    let cancelSeeked = null;
    const prom = new Promise((resolve) => {
      cancel = element.requestVideoFrameCallback((now, metadata) => {
        const displayIn = metadata.expectedDisplayTime - now;
        if (displayIn <= 0) {
          resolve(metadata.mediaTime);
          return;
        }
        setTimeout(() => {
          resolve(metadata.mediaTime);
        }, displayIn + 150);
      });
    });
    const waitForSeekedEvent = new Promise((resolve) => {
      const onDone = () => {
        resolve();
      };
      element.addEventListener("seeked", onDone, {
        once: true
      });
      cancelSeeked = () => {
        element.removeEventListener("seeked", onDone);
      };
    });
    return {
      wait: Promise.all([prom, waitForSeekedEvent]).then(([time]) => time),
      cancel: () => {
        cancelSeeked?.();
        element.cancelVideoFrameCallback(cancel);
      }
    };
  };
  var seekToTimeMultipleUntilRight = ({
    element,
    desiredTime,
    fps,
    logLevel,
    mountTime
  }) => {
    const threshold = 1 / fps / 2;
    let currentCancel = () => {
      return;
    };
    if (Number.isFinite(element.duration) && element.currentTime >= element.duration && desiredTime >= element.duration) {
      return {
        prom: Promise.resolve(),
        cancel: () => {
        }
      };
    }
    const prom = new Promise((resolve, reject) => {
      const firstSeek = seekToTime({
        element,
        desiredTime: desiredTime + threshold,
        logLevel,
        mountTime
      });
      firstSeek.wait.then((seekedTo) => {
        const difference = Math.abs(desiredTime - seekedTo);
        if (difference <= threshold) {
          return resolve();
        }
        const sign = desiredTime > seekedTo ? 1 : -1;
        const newSeek = seekToTime({
          element,
          desiredTime: seekedTo + threshold * sign,
          logLevel,
          mountTime
        });
        currentCancel = newSeek.cancel;
        newSeek.wait.then((newTime) => {
          const newDifference = Math.abs(desiredTime - newTime);
          if (roundTo6Commas(newDifference) <= roundTo6Commas(threshold)) {
            return resolve();
          }
          const thirdSeek = seekToTime({
            element,
            desiredTime: desiredTime + threshold,
            logLevel,
            mountTime
          });
          currentCancel = thirdSeek.cancel;
          return thirdSeek.wait.then(() => {
            resolve();
          }).catch((err) => {
            reject(err);
          });
        }).catch((err) => {
          reject(err);
        });
      });
      currentCancel = firstSeek.cancel;
    });
    return {
      prom,
      cancel: () => {
        currentCancel();
      }
    };
  };
  var VideoForRenderingForwardFunction = ({
    onError,
    volume: volumeProp,
    allowAmplificationDuringRender,
    playbackRate,
    onDuration,
    toneFrequency,
    name,
    acceptableTimeShiftInSeconds,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    loopVolumeCurveBehavior,
    audioStreamIndex,
    ...props2
  }, ref) => {
    const absoluteFrame = useTimelinePosition();
    const frame = useCurrentFrame();
    const volumePropsFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    const videoConfig = useUnsafeVideoConfig();
    const videoRef = (0, import_react67.useRef)(null);
    const sequenceContext = (0, import_react67.useContext)(SequenceContext);
    const mediaStartsAt = useMediaStartsAt();
    const environment = useRemotionEnvironment();
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const { registerRenderAsset, unregisterRenderAsset } = (0, import_react67.useContext)(RenderAssetManager);
    const id = (0, import_react67.useMemo)(() => `video-${random(props2.src ?? "")}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.relativeFrom}-${sequenceContext?.durationInFrames}`, [
      props2.src,
      sequenceContext?.cumulatedFrom,
      sequenceContext?.relativeFrom,
      sequenceContext?.durationInFrames
    ]);
    if (!videoConfig) {
      throw new Error("No video config found");
    }
    const volume = evaluateVolume({
      volume: volumeProp,
      frame: volumePropsFrame,
      mediaVolume: 1
    });
    warnAboutTooHighVolume(volume);
    (0, import_react67.useEffect)(() => {
      if (!props2.src) {
        throw new Error("No src passed");
      }
      if (props2.muted) {
        return;
      }
      if (volume <= 0) {
        return;
      }
      if (!window.remotion_audioEnabled) {
        return;
      }
      registerRenderAsset({
        type: "video",
        src: getAbsoluteSrc(props2.src),
        id,
        frame: absoluteFrame,
        volume,
        mediaFrame: frame,
        playbackRate: playbackRate ?? 1,
        toneFrequency: toneFrequency ?? null,
        audioStartFrame: Math.max(0, -(sequenceContext?.relativeFrom ?? 0)),
        audioStreamIndex: audioStreamIndex ?? 0
      });
      return () => unregisterRenderAsset(id);
    }, [
      props2.muted,
      props2.src,
      registerRenderAsset,
      id,
      unregisterRenderAsset,
      volume,
      frame,
      absoluteFrame,
      playbackRate,
      toneFrequency,
      sequenceContext?.relativeFrom,
      audioStreamIndex
    ]);
    (0, import_react67.useImperativeHandle)(ref, () => {
      return videoRef.current;
    }, []);
    (0, import_react67.useEffect)(() => {
      if (!window.remotion_videoEnabled) {
        return;
      }
      const { current } = videoRef;
      if (!current) {
        return;
      }
      const currentTime = getMediaTime({
        frame,
        playbackRate: playbackRate || 1,
        startFrom: -mediaStartsAt,
        fps: videoConfig.fps
      });
      const handle = delayRender2(`Rendering <Video /> with src="${props2.src}" at time ${currentTime}`, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      if (window.process?.env?.NODE_ENV === "test") {
        continueRender2(handle);
        return;
      }
      if (isApproximatelyTheSame(current.currentTime, currentTime)) {
        if (current.readyState >= 2) {
          continueRender2(handle);
          return;
        }
        const loadedDataHandler = () => {
          continueRender2(handle);
        };
        current.addEventListener("loadeddata", loadedDataHandler, { once: true });
        return () => {
          current.removeEventListener("loadeddata", loadedDataHandler);
        };
      }
      const endedHandler = () => {
        continueRender2(handle);
      };
      const seek2 = seekToTimeMultipleUntilRight({
        element: current,
        desiredTime: currentTime,
        fps: videoConfig.fps,
        logLevel,
        mountTime
      });
      seek2.prom.then(() => {
        continueRender2(handle);
      });
      current.addEventListener("ended", endedHandler, { once: true });
      const errorHandler = () => {
        if (current?.error) {
          console.error("Error occurred in video", current?.error);
          if (onError) {
            return;
          }
          throw new Error(`The browser threw an error while playing the video ${props2.src}: Code ${current.error.code} - ${current?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`);
        } else {
          throw new Error("The browser threw an error");
        }
      };
      current.addEventListener("error", errorHandler, { once: true });
      return () => {
        seek2.cancel();
        current.removeEventListener("ended", endedHandler);
        current.removeEventListener("error", errorHandler);
        continueRender2(handle);
      };
    }, [
      volumePropsFrame,
      props2.src,
      playbackRate,
      videoConfig.fps,
      frame,
      mediaStartsAt,
      onError,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      logLevel,
      mountTime,
      continueRender2,
      delayRender2
    ]);
    const { src } = props2;
    if (environment.isRendering) {
      (0, import_react67.useLayoutEffect)(() => {
        if (window.process?.env?.NODE_ENV === "test") {
          return;
        }
        const newHandle = delayRender2("Loading <Video> duration with src=" + src, {
          retries: delayRenderRetries ?? void 0,
          timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
        });
        const { current } = videoRef;
        const didLoad = () => {
          if (current?.duration) {
            onDuration(src, current.duration);
          }
          continueRender2(newHandle);
        };
        if (current?.duration) {
          onDuration(src, current.duration);
          continueRender2(newHandle);
        } else {
          current?.addEventListener("loadedmetadata", didLoad, { once: true });
        }
        return () => {
          current?.removeEventListener("loadedmetadata", didLoad);
          continueRender2(newHandle);
        };
      }, [
        src,
        onDuration,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
        continueRender2,
        delayRender2
      ]);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("video", {
      ref: videoRef,
      disableRemotePlayback: true,
      ...props2
    });
  };
  var VideoForRendering = (0, import_react67.forwardRef)(VideoForRenderingForwardFunction);
  var VideoForwardingFunction = (props2, ref) => {
    const {
      startFrom,
      endAt,
      trimBefore,
      trimAfter,
      name,
      pauseWhenBuffering,
      stack,
      _remotionInternalNativeLoopPassed,
      showInTimeline,
      onAutoPlayError,
      ...otherProps
    } = props2;
    const { loop, ...propsOtherThanLoop } = props2;
    const { fps } = useVideoConfig();
    const environment = useRemotionEnvironment();
    const { durations, setDurations } = (0, import_react66.useContext)(DurationsContext);
    if (typeof ref === "string") {
      throw new Error("string refs are not supported");
    }
    if (typeof props2.src !== "string") {
      throw new TypeError(`The \`<Video>\` tag requires a string for \`src\`, but got ${JSON.stringify(props2.src)} instead.`);
    }
    const preloadedSrc = usePreload(props2.src);
    const onDuration = (0, import_react66.useCallback)((src, durationInSeconds) => {
      setDurations({ type: "got-duration", durationInSeconds, src });
    }, [setDurations]);
    const onVideoFrame = (0, import_react66.useCallback)(() => {
    }, []);
    const durationFetched = durations[getAbsoluteSrc(preloadedSrc)] ?? durations[getAbsoluteSrc(props2.src)];
    validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
    const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
      startFrom,
      endAt,
      trimBefore,
      trimAfter
    });
    if (loop && durationFetched !== void 0) {
      if (!Number.isFinite(durationFetched)) {
        return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Video, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalNativeLoopPassed: true
        });
      }
      const mediaDuration = durationFetched * fps;
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Loop, {
        durationInFrames: calculateLoopDuration({
          endAt: trimAfterValue ?? void 0,
          mediaDuration,
          playbackRate: props2.playbackRate ?? 1,
          startFrom: trimBeforeValue ?? void 0
        }),
        layout: "none",
        name,
        children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Video, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalNativeLoopPassed: true
        })
      });
    }
    if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: trimAfterValue,
        name,
        children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Video, {
          pauseWhenBuffering: pauseWhenBuffering ?? false,
          ...otherProps,
          ref
        })
      });
    }
    validateMediaProps(props2, "Video");
    if (environment.isRendering) {
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(VideoForRendering, {
        onDuration,
        onVideoFrame: onVideoFrame ?? null,
        ...otherProps,
        ref
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(VideoForPreview, {
      onlyWarnForMediaSeekingError: false,
      ...otherProps,
      ref,
      onVideoFrame: null,
      pauseWhenBuffering: pauseWhenBuffering ?? false,
      onDuration,
      _remotionInternalStack: stack ?? null,
      _remotionInternalNativeLoopPassed: _remotionInternalNativeLoopPassed ?? false,
      showInTimeline: showInTimeline ?? true,
      onAutoPlayError: onAutoPlayError ?? void 0
    });
  };
  var Video = (0, import_react66.forwardRef)(VideoForwardingFunction);
  addSequenceStackTraces(Video);
  checkMultipleRemotionVersions();
  var proxyObj = {};
  var Config = new Proxy(proxyObj, {
    get(_, prop) {
      if (prop === "Bundling" || prop === "Rendering" || prop === "Log" || prop === "Puppeteer" || prop === "Output") {
        return Config;
      }
      return () => {
        console.warn("\u26A0\uFE0F  The CLI configuration has been extracted from Remotion Core.");
        console.warn("Update the import from the config file:");
        console.warn();
        console.warn("- Delete:");
        console.warn('import {Config} from "remotion";');
        console.warn("+ Replace:");
        console.warn('import {Config} from "@remotion/cli/config";');
        console.warn();
        console.warn("For more information, see https://www.remotion.dev/docs/4-0-migration.");
        process.exit(1);
      };
    }
  });
  addSequenceStackTraces(Sequence);

  // node_modules/@remotion/player/dist/esm/index.mjs
  var import_react68 = __toESM(require_react(), 1);
  var import_react69 = __toESM(require_react(), 1);
  var import_react70 = __toESM(require_react(), 1);
  var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
  var import_react71 = __toESM(require_react(), 1);
  var import_react72 = __toESM(require_react(), 1);
  var import_react73 = __toESM(require_react(), 1);
  var import_react74 = __toESM(require_react(), 1);
  var import_react75 = __toESM(require_react(), 1);
  var import_react76 = __toESM(require_react(), 1);
  var import_react77 = __toESM(require_react(), 1);
  var import_react78 = __toESM(require_react(), 1);
  var import_react79 = __toESM(require_react(), 1);
  var import_react80 = __toESM(require_react(), 1);
  var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
  var import_react81 = __toESM(require_react(), 1);
  var import_react82 = __toESM(require_react(), 1);
  var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
  var import_react83 = __toESM(require_react(), 1);
  var import_react84 = __toESM(require_react(), 1);
  var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
  var import_react85 = __toESM(require_react(), 1);
  var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
  var import_react86 = __toESM(require_react(), 1);
  var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
  var import_react87 = __toESM(require_react(), 1);
  var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
  var import_react88 = __toESM(require_react(), 1);
  var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
  var import_react89 = __toESM(require_react(), 1);
  var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
  var import_react90 = __toESM(require_react(), 1);
  var import_react91 = __toESM(require_react(), 1);
  var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
  var import_react92 = __toESM(require_react(), 1);
  var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);

  // node_modules/remotion/dist/esm/no-react.mjs
  function interpolateFunction2(input, inputRange, outputRange, options) {
    const { extrapolateLeft, extrapolateRight, easing } = options;
    let result = input;
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;
    if (result < inputMin) {
      if (extrapolateLeft === "identity") {
        return result;
      }
      if (extrapolateLeft === "clamp") {
        result = inputMin;
      } else if (extrapolateLeft === "wrap") {
        const range = inputMax - inputMin;
        result = ((result - inputMin) % range + range) % range + inputMin;
      } else if (extrapolateLeft === "extend") {
      }
    }
    if (result > inputMax) {
      if (extrapolateRight === "identity") {
        return result;
      }
      if (extrapolateRight === "clamp") {
        result = inputMax;
      } else if (extrapolateRight === "wrap") {
        const range = inputMax - inputMin;
        result = ((result - inputMin) % range + range) % range + inputMin;
      } else if (extrapolateRight === "extend") {
      }
    }
    if (outputMin === outputMax) {
      return outputMin;
    }
    result = (result - inputMin) / (inputMax - inputMin);
    result = easing(result);
    result = result * (outputMax - outputMin) + outputMin;
    return result;
  }
  function findRange2(input, inputRange) {
    let i;
    for (i = 1; i < inputRange.length - 1; ++i) {
      if (inputRange[i] >= input) {
        break;
      }
    }
    return i - 1;
  }
  function checkValidInputRange2(arr) {
    for (let i = 1; i < arr.length; ++i) {
      if (!(arr[i] > arr[i - 1])) {
        throw new Error(`inputRange must be strictly monotonically increasing but got [${arr.join(",")}]`);
      }
    }
  }
  function checkInfiniteRange2(name, arr) {
    if (arr.length < 2) {
      throw new Error(name + " must have at least 2 elements");
    }
    for (const element of arr) {
      if (typeof element !== "number") {
        throw new Error(`${name} must contain only numbers`);
      }
      if (!Number.isFinite(element)) {
        throw new Error(`${name} must contain only finite numbers, but got [${arr.join(",")}]`);
      }
    }
  }
  function interpolate2(input, inputRange, outputRange, options) {
    if (typeof input === "undefined") {
      throw new Error("input can not be undefined");
    }
    if (typeof inputRange === "undefined") {
      throw new Error("inputRange can not be undefined");
    }
    if (typeof outputRange === "undefined") {
      throw new Error("outputRange can not be undefined");
    }
    if (inputRange.length !== outputRange.length) {
      throw new Error("inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
    }
    checkInfiniteRange2("inputRange", inputRange);
    checkInfiniteRange2("outputRange", outputRange);
    checkValidInputRange2(inputRange);
    const easing = options?.easing ?? ((num) => num);
    let extrapolateLeft = "extend";
    if (options?.extrapolateLeft !== void 0) {
      extrapolateLeft = options.extrapolateLeft;
    }
    let extrapolateRight = "extend";
    if (options?.extrapolateRight !== void 0) {
      extrapolateRight = options.extrapolateRight;
    }
    if (typeof input !== "number") {
      throw new TypeError("Cannot interpolate an input which is not a number");
    }
    const range = findRange2(input, inputRange);
    return interpolateFunction2(input, [inputRange[range], inputRange[range + 1]], [outputRange[range], outputRange[range + 1]], {
      easing,
      extrapolateLeft,
      extrapolateRight
    });
  }
  function truthy2(value) {
    return Boolean(value);
  }
  if (typeof window !== "undefined") {
    window.remotion_renderReady = false;
  }
  if (typeof window !== "undefined") {
    window.remotion_delayRenderTimeouts = {};
  }
  var DELAY_RENDER_CALLSTACK_TOKEN2 = "The delayRender was called:";
  var DELAY_RENDER_RETRIES_LEFT2 = "Retries left: ";
  var DELAY_RENDER_RETRY_TOKEN2 = "- Rendering the frame will be retried.";
  var DELAY_RENDER_CLEAR_TOKEN2 = "handle was cleared after";
  var DATE_TOKEN2 = "remotion-date:";
  var FILE_TOKEN2 = "remotion-file:";
  var serializeJSONWithSpecialTypes2 = ({
    data,
    indent,
    staticBase
  }) => {
    let customDateUsed = false;
    let customFileUsed = false;
    let mapUsed = false;
    let setUsed = false;
    try {
      const serializedString = JSON.stringify(data, function(key, value) {
        const item = this[key];
        if (item instanceof Date) {
          customDateUsed = true;
          return `${DATE_TOKEN2}${item.toISOString()}`;
        }
        if (item instanceof Map) {
          mapUsed = true;
          return value;
        }
        if (item instanceof Set) {
          setUsed = true;
          return value;
        }
        if (typeof item === "string" && staticBase !== null && item.startsWith(staticBase)) {
          customFileUsed = true;
          return `${FILE_TOKEN2}${item.replace(staticBase + "/", "")}`;
        }
        return value;
      }, indent);
      return { serializedString, customDateUsed, customFileUsed, mapUsed, setUsed };
    } catch (err) {
      throw new Error("Could not serialize the passed input props to JSON: " + err.message);
    }
  };
  var deserializeJSONWithSpecialTypes2 = (data) => {
    return JSON.parse(data, (_, value) => {
      if (typeof value === "string" && value.startsWith(DATE_TOKEN2)) {
        return new Date(value.replace(DATE_TOKEN2, ""));
      }
      if (typeof value === "string" && value.startsWith(FILE_TOKEN2)) {
        return `${window.remotion_staticBase}/${value.replace(FILE_TOKEN2, "")}`;
      }
      return value;
    });
  };
  var NUMBER2 = "[-+]?\\d*\\.?\\d+";
  var PERCENTAGE2 = NUMBER2 + "%";
  function call(...args) {
    return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
  }
  function getMatchers() {
    const cachedMatchers = {
      rgb: void 0,
      rgba: void 0,
      hsl: void 0,
      hsla: void 0,
      hex3: void 0,
      hex4: void 0,
      hex5: void 0,
      hex6: void 0,
      hex8: void 0
    };
    if (cachedMatchers.rgb === void 0) {
      cachedMatchers.rgb = new RegExp("rgb" + call(NUMBER2, NUMBER2, NUMBER2));
      cachedMatchers.rgba = new RegExp("rgba" + call(NUMBER2, NUMBER2, NUMBER2, NUMBER2));
      cachedMatchers.hsl = new RegExp("hsl" + call(NUMBER2, PERCENTAGE2, PERCENTAGE2));
      cachedMatchers.hsla = new RegExp("hsla" + call(NUMBER2, PERCENTAGE2, PERCENTAGE2, NUMBER2));
      cachedMatchers.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      cachedMatchers.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      cachedMatchers.hex6 = /^#([0-9a-fA-F]{6})$/;
      cachedMatchers.hex8 = /^#([0-9a-fA-F]{8})$/;
    }
    return cachedMatchers;
  }
  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }
  function hslToRgb(h, s, l) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const b2 = hue2rgb(p, q, h - 1 / 3);
    return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b2 * 255) << 8;
  }
  function parse255(str) {
    const int = Number.parseInt(str, 10);
    if (int < 0) {
      return 0;
    }
    if (int > 255) {
      return 255;
    }
    return int;
  }
  function parse360(str) {
    const int = Number.parseFloat(str);
    return (int % 360 + 360) % 360 / 360;
  }
  function parse1(str) {
    const num = Number.parseFloat(str);
    if (num < 0) {
      return 0;
    }
    if (num > 1) {
      return 255;
    }
    return Math.round(num * 255);
  }
  function parsePercentage(str) {
    const int = Number.parseFloat(str);
    if (int < 0) {
      return 0;
    }
    if (int > 100) {
      return 1;
    }
    return int / 100;
  }
  var colorNames = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199
  };
  function normalizeColor(color) {
    const matchers = getMatchers();
    let match;
    if (matchers.hex6) {
      if (match = matchers.hex6.exec(color)) {
        return Number.parseInt(match[1] + "ff", 16) >>> 0;
      }
    }
    if (colorNames[color] !== void 0) {
      return colorNames[color];
    }
    if (matchers.rgb) {
      if (match = matchers.rgb.exec(color)) {
        return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
      }
    }
    if (matchers.rgba) {
      if (match = matchers.rgba.exec(color)) {
        return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
      }
    }
    if (matchers.hex3) {
      if (match = matchers.hex3.exec(color)) {
        return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
      }
    }
    if (matchers.hex8) {
      if (match = matchers.hex8.exec(color)) {
        return Number.parseInt(match[1], 16) >>> 0;
      }
    }
    if (matchers.hex4) {
      if (match = matchers.hex4.exec(color)) {
        return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
      }
    }
    if (matchers.hsl) {
      if (match = matchers.hsl.exec(color)) {
        return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
      }
    }
    if (matchers.hsla) {
      if (match = matchers.hsla.exec(color)) {
        return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
      }
    }
    throw new Error(`invalid color string ${color} provided`);
  }
  function processColor(color) {
    const normalizedColor = normalizeColor(color);
    return (normalizedColor << 24 | normalizedColor >>> 8) >>> 0;
  }
  var ENABLE_V5_BREAKING_CHANGES2 = false;
  var validateFrame2 = ({
    allowFloats,
    durationInFrames,
    frame
  }) => {
    if (typeof frame === "undefined") {
      throw new TypeError(`Argument missing for parameter "frame"`);
    }
    if (typeof frame !== "number") {
      throw new TypeError(`Argument passed for "frame" is not a number: ${frame}`);
    }
    if (!Number.isFinite(frame)) {
      throw new RangeError(`Frame ${frame} is not finite`);
    }
    if (frame % 1 !== 0 && !allowFloats) {
      throw new RangeError(`Argument for frame must be an integer, but got ${frame}`);
    }
    if (frame < 0 && frame < -durationInFrames) {
      throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the lowest frame that can be rendered is ${-durationInFrames}`);
    }
    if (frame > durationInFrames - 1) {
      throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the highest frame that can be rendered is ${durationInFrames - 1}`);
    }
  };
  var validCodecs2 = [
    "h264",
    "h265",
    "vp8",
    "vp9",
    "mp3",
    "aac",
    "wav",
    "prores",
    "h264-mkv",
    "h264-ts",
    "gif"
  ];
  function validateCodec2(defaultCodec, location, name) {
    if (typeof defaultCodec === "undefined") {
      return;
    }
    if (typeof defaultCodec !== "string") {
      throw new TypeError(`The "${name}" prop ${location} must be a string, but you passed a value of type ${typeof defaultCodec}.`);
    }
    if (!validCodecs2.includes(defaultCodec)) {
      throw new Error(`The "${name}" prop ${location} must be one of ${validCodecs2.join(", ")}, but you passed ${defaultCodec}.`);
    }
  }
  var validateDefaultAndInputProps2 = (defaultProps, name, compositionId) => {
    if (!defaultProps) {
      return;
    }
    if (typeof defaultProps !== "object") {
      throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
    }
    if (Array.isArray(defaultProps)) {
      throw new Error(`"${name}" must be an object, an array was passed ${compositionId ? `for composition "${compositionId}"` : ""}`);
    }
  };
  function validateDimension2(amount, nameOfProp, location) {
    if (typeof amount !== "number") {
      throw new Error(`The "${nameOfProp}" prop ${location} must be a number, but you passed a value of type ${typeof amount}`);
    }
    if (isNaN(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must not be NaN, but is NaN.`);
    }
    if (!Number.isFinite(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be finite, but is ${amount}.`);
    }
    if (amount % 1 !== 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be an integer, but is ${amount}.`);
    }
    if (amount <= 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location} must be positive, but got ${amount}.`);
    }
  }
  function validateDurationInFrames2(durationInFrames, options) {
    const { allowFloats, component } = options;
    if (typeof durationInFrames === "undefined") {
      throw new Error(`The "durationInFrames" prop ${component} is missing.`);
    }
    if (typeof durationInFrames !== "number") {
      throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
    }
    if (durationInFrames <= 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
    }
    if (!allowFloats && durationInFrames % 1 !== 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
    }
    if (!Number.isFinite(durationInFrames)) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
    }
  }
  function validateFps2(fps, location, isGif) {
    if (typeof fps !== "number") {
      throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location}`);
    }
    if (!Number.isFinite(fps)) {
      throw new Error(`"fps" must be a finite, but you passed ${fps} ${location}`);
    }
    if (isNaN(fps)) {
      throw new Error(`"fps" must not be NaN, but got ${fps} ${location}`);
    }
    if (fps <= 0) {
      throw new TypeError(`"fps" must be positive, but got ${fps} ${location}`);
    }
    if (isGif && fps > 50) {
      throw new TypeError(`The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif`);
    }
  }
  var getExpectedMediaFrameUncorrected2 = ({
    frame,
    playbackRate,
    startFrom
  }) => {
    return interpolate2(frame, [-1, startFrom, startFrom + 1], [-1, startFrom, startFrom + playbackRate]);
  };
  var getAbsoluteSrc2 = (relativeSrc) => {
    if (typeof window === "undefined") {
      return relativeSrc;
    }
    if (relativeSrc.startsWith("http://") || relativeSrc.startsWith("https://") || relativeSrc.startsWith("file://") || relativeSrc.startsWith("blob:") || relativeSrc.startsWith("data:")) {
      return relativeSrc;
    }
    return new URL(relativeSrc, window.origin).href;
  };
  var getOffthreadVideoSource = ({
    src,
    transparent,
    currentTime,
    toneMapped
  }) => {
    return `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(getAbsoluteSrc2(src))}&time=${encodeURIComponent(Math.max(0, currentTime))}&transparent=${String(transparent)}&toneMapped=${String(toneMapped)}`;
  };
  var NoReactInternals = {
    processColor,
    truthy: truthy2,
    validateFps: validateFps2,
    validateDimension: validateDimension2,
    validateDurationInFrames: validateDurationInFrames2,
    validateDefaultAndInputProps: validateDefaultAndInputProps2,
    validateFrame: validateFrame2,
    serializeJSONWithSpecialTypes: serializeJSONWithSpecialTypes2,
    bundleName: "bundle.js",
    bundleMapName: "bundle.js.map",
    deserializeJSONWithSpecialTypes: deserializeJSONWithSpecialTypes2,
    DELAY_RENDER_CALLSTACK_TOKEN: DELAY_RENDER_CALLSTACK_TOKEN2,
    DELAY_RENDER_RETRY_TOKEN: DELAY_RENDER_RETRY_TOKEN2,
    DELAY_RENDER_CLEAR_TOKEN: DELAY_RENDER_CLEAR_TOKEN2,
    DELAY_RENDER_ATTEMPT_TOKEN: DELAY_RENDER_RETRIES_LEFT2,
    getOffthreadVideoSource,
    getExpectedMediaFrameUncorrected: getExpectedMediaFrameUncorrected2,
    ENABLE_V5_BREAKING_CHANGES: ENABLE_V5_BREAKING_CHANGES2,
    MIN_NODE_VERSION: ENABLE_V5_BREAKING_CHANGES2 ? 18 : 16,
    MIN_BUN_VERSION: ENABLE_V5_BREAKING_CHANGES2 ? "1.1.3" : "1.0.3",
    colorNames,
    DATE_TOKEN: DATE_TOKEN2,
    FILE_TOKEN: FILE_TOKEN2,
    validateCodec: validateCodec2
  };

  // node_modules/@remotion/player/dist/esm/index.mjs
  var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
  var import_react93 = __toESM(require_react(), 1);
  var import_react94 = __toESM(require_react(), 1);
  var import_react95 = __toESM(require_react(), 1);
  var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
  var ICON_SIZE2 = 25;
  var fullscreenIconSize = 16;
  var PlayIcon = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("svg", {
      width: ICON_SIZE2,
      height: ICON_SIZE2,
      viewBox: "0 0 25 25",
      fill: "none",
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", {
        d: "M8 6.375C7.40904 8.17576 7.06921 10.2486 7.01438 12.3871C6.95955 14.5255 7.19163 16.6547 7.6875 18.5625C9.95364 18.2995 12.116 17.6164 14.009 16.5655C15.902 15.5147 17.4755 14.124 18.6088 12.5C17.5158 10.8949 15.9949 9.51103 14.1585 8.45082C12.3222 7.3906 10.2174 6.68116 8 6.375Z",
        fill: "white",
        stroke: "white",
        strokeWidth: "6.25",
        strokeLinejoin: "round"
      })
    });
  };
  var PauseIcon = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("svg", {
      viewBox: "0 0 100 100",
      width: ICON_SIZE2,
      height: ICON_SIZE2,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("rect", {
          x: "25",
          y: "20",
          width: "20",
          height: "60",
          fill: "#fff",
          ry: "5",
          rx: "5"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("rect", {
          x: "55",
          y: "20",
          width: "20",
          height: "60",
          fill: "#fff",
          ry: "5",
          rx: "5"
        })
      ]
    });
  };
  var FullscreenIcon = ({
    isFullscreen
  }) => {
    const strokeWidth = 6;
    const viewSize = 32;
    const out = isFullscreen ? 0 : strokeWidth / 2;
    const middleInset = isFullscreen ? strokeWidth * 1.6 : strokeWidth / 2;
    const inset = isFullscreen ? strokeWidth * 1.6 : strokeWidth * 2;
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("svg", {
      viewBox: `0 0 ${viewSize} ${viewSize}`,
      height: fullscreenIconSize,
      width: fullscreenIconSize,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", {
          d: `
				M ${out} ${inset}
				L ${middleInset} ${middleInset}
				L ${inset} ${out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", {
          d: `
				M ${viewSize - out} ${inset}
				L ${viewSize - middleInset} ${middleInset}
				L ${viewSize - inset} ${out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", {
          d: `
				M ${out} ${viewSize - inset}
				L ${middleInset} ${viewSize - middleInset}
				L ${inset} ${viewSize - out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", {
          d: `
				M ${viewSize - out} ${viewSize - inset}
				L ${viewSize - middleInset} ${viewSize - middleInset}
				L ${viewSize - inset} ${viewSize - out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        })
      ]
    });
  };
  var VolumeOffIcon = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("svg", {
      width: ICON_SIZE2,
      height: ICON_SIZE2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", {
        d: "M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",
        fill: "#fff"
      })
    });
  };
  var VolumeOnIcon = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("svg", {
      width: ICON_SIZE2,
      height: ICON_SIZE2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", {
        d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",
        fill: "#fff"
      })
    });
  };
  var className = "__remotion_buffering_indicator";
  var remotionBufferingAnimation = "__remotion_buffering_animation";
  var playerStyle = {
    width: ICON_SIZE2,
    height: ICON_SIZE2,
    overflow: "hidden",
    lineHeight: "normal",
    fontSize: "inherit"
  };
  var studioStyle = {
    width: 14,
    height: 14,
    overflow: "hidden",
    lineHeight: "normal",
    fontSize: "inherit"
  };
  var BufferingIndicator = ({ type }) => {
    const style2 = type === "player" ? playerStyle : studioStyle;
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("style", {
          type: "text/css",
          children: `
				@keyframes ${remotionBufferingAnimation} {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 360deg;
          }
        }
        
        .${className} {
            animation: ${remotionBufferingAnimation} 1s linear infinite;
        }        
			`
        }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", {
          style: style2,
          children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("svg", {
            viewBox: type === "player" ? "0 0 22 22" : "0 0 18 18",
            style: style2,
            className,
            children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("path", {
              d: type === "player" ? "M 11 4 A 7 7 0 0 1 15.1145 16.66312" : "M 9 2 A 7 7 0 0 1 13.1145 14.66312",
              stroke: "white",
              strokeLinecap: "round",
              fill: "none",
              strokeWidth: 3
            })
          })
        })
      ]
    });
  };
  var calculatePlayerSize = ({
    currentSize,
    width,
    height,
    compositionWidth,
    compositionHeight
  }) => {
    if (width !== void 0 && height === void 0) {
      return {
        aspectRatio: [compositionWidth, compositionHeight].join("/")
      };
    }
    if (height !== void 0 && width === void 0) {
      return {
        aspectRatio: [compositionWidth, compositionHeight].join("/")
      };
    }
    if (!currentSize) {
      return {
        width: compositionWidth,
        height: compositionHeight
      };
    }
    return {
      width: compositionWidth,
      height: compositionHeight
    };
  };
  var calculateCanvasTransformation = ({
    previewSize,
    compositionWidth,
    compositionHeight,
    canvasSize
  }) => {
    const scale = Internals.calculateScale({
      canvasSize,
      compositionHeight,
      compositionWidth,
      previewSize
    });
    const correction = 0 - (1 - scale) / 2;
    const xCorrection = correction * compositionWidth;
    const yCorrection = correction * compositionHeight;
    const width = compositionWidth * scale;
    const height = compositionHeight * scale;
    const centerX = canvasSize.width / 2 - width / 2;
    const centerY = canvasSize.height / 2 - height / 2;
    return {
      centerX,
      centerY,
      xCorrection,
      yCorrection,
      scale
    };
  };
  var calculateOuterStyle = ({
    config,
    style: style2,
    canvasSize,
    overflowVisible,
    layout
  }) => {
    if (!config) {
      return {};
    }
    return {
      position: "relative",
      overflow: overflowVisible ? "visible" : "hidden",
      ...calculatePlayerSize({
        compositionHeight: config.height,
        compositionWidth: config.width,
        currentSize: canvasSize,
        height: style2?.height,
        width: style2?.width
      }),
      opacity: layout ? 1 : 0,
      ...style2
    };
  };
  var calculateContainerStyle = ({
    config,
    layout,
    scale,
    overflowVisible
  }) => {
    if (!config) {
      return {};
    }
    if (!layout) {
      return {
        position: "absolute",
        width: config.width,
        height: config.height,
        display: "flex",
        transform: `scale(${scale})`,
        overflow: overflowVisible ? "visible" : "hidden"
      };
    }
    return {
      position: "absolute",
      width: config.width,
      height: config.height,
      display: "flex",
      transform: `scale(${scale})`,
      marginLeft: layout.xCorrection,
      marginTop: layout.yCorrection,
      overflow: overflowVisible ? "visible" : "hidden"
    };
  };
  var calculateOuter = ({
    layout,
    scale,
    config,
    overflowVisible
  }) => {
    if (!config) {
      return {};
    }
    if (!layout) {
      return {
        width: config.width * scale,
        height: config.height * scale,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        overflow: overflowVisible ? "visible" : "hidden"
      };
    }
    const { centerX, centerY } = layout;
    return {
      width: config.width * scale,
      height: config.height * scale,
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      left: centerX,
      top: centerY,
      overflow: overflowVisible ? "visible" : "hidden"
    };
  };
  var PlayerEventEmitterContext = import_react68.default.createContext(void 0);
  var ThumbnailEmitterContext = import_react68.default.createContext(void 0);
  var PlayerEmitter = class {
    listeners = {
      ended: [],
      error: [],
      pause: [],
      play: [],
      ratechange: [],
      scalechange: [],
      seeked: [],
      timeupdate: [],
      frameupdate: [],
      fullscreenchange: [],
      volumechange: [],
      mutechange: [],
      waiting: [],
      resume: []
    };
    addEventListener(name, callback) {
      this.listeners[name].push(callback);
    }
    removeEventListener(name, callback) {
      this.listeners[name] = this.listeners[name].filter((l) => l !== callback);
    }
    dispatchEvent(dispatchName, context) {
      this.listeners[dispatchName].forEach((callback) => {
        callback({ detail: context });
      });
    }
    dispatchSeek = (frame) => {
      this.dispatchEvent("seeked", {
        frame
      });
    };
    dispatchVolumeChange = (volume) => {
      this.dispatchEvent("volumechange", {
        volume
      });
    };
    dispatchPause = () => {
      this.dispatchEvent("pause", void 0);
    };
    dispatchPlay = () => {
      this.dispatchEvent("play", void 0);
    };
    dispatchEnded = () => {
      this.dispatchEvent("ended", void 0);
    };
    dispatchRateChange = (playbackRate) => {
      this.dispatchEvent("ratechange", {
        playbackRate
      });
    };
    dispatchScaleChange = (scale) => {
      this.dispatchEvent("scalechange", {
        scale
      });
    };
    dispatchError = (error2) => {
      this.dispatchEvent("error", {
        error: error2
      });
    };
    dispatchTimeUpdate = (event) => {
      this.dispatchEvent("timeupdate", event);
    };
    dispatchFrameUpdate = (event) => {
      this.dispatchEvent("frameupdate", event);
    };
    dispatchFullscreenChange = (event) => {
      this.dispatchEvent("fullscreenchange", event);
    };
    dispatchMuteChange = (event) => {
      this.dispatchEvent("mutechange", event);
    };
    dispatchWaiting = (event) => {
      this.dispatchEvent("waiting", event);
    };
    dispatchResume = (event) => {
      this.dispatchEvent("resume", event);
    };
  };
  var ThumbnailEmitter = class {
    listeners = {
      error: [],
      waiting: [],
      resume: []
    };
    addEventListener(name, callback) {
      this.listeners[name].push(callback);
    }
    removeEventListener(name, callback) {
      this.listeners[name] = this.listeners[name].filter((l) => l !== callback);
    }
    dispatchEvent(dispatchName, context) {
      this.listeners[dispatchName].forEach((callback) => {
        callback({ detail: context });
      });
    }
    dispatchError = (error2) => {
      this.dispatchEvent("error", {
        error: error2
      });
    };
    dispatchWaiting = (event) => {
      this.dispatchEvent("waiting", event);
    };
    dispatchResume = (event) => {
      this.dispatchEvent("resume", event);
    };
  };
  var useBufferStateEmitter = (emitter) => {
    const bufferManager = (0, import_react70.useContext)(Internals.BufferingContextReact);
    if (!bufferManager) {
      throw new Error("BufferingContextReact not found");
    }
    (0, import_react70.useEffect)(() => {
      const clear1 = bufferManager.listenForBuffering(() => {
        bufferManager.buffering.current = true;
        emitter.dispatchWaiting({});
      });
      const clear2 = bufferManager.listenForResume(() => {
        bufferManager.buffering.current = false;
        emitter.dispatchResume({});
      });
      return () => {
        clear1.remove();
        clear2.remove();
      };
    }, [bufferManager, emitter]);
  };
  var PlayerEmitterProvider = ({ children, currentPlaybackRate }) => {
    const [emitter] = (0, import_react69.useState)(() => new PlayerEmitter());
    const bufferManager = (0, import_react69.useContext)(Internals.BufferingContextReact);
    if (!bufferManager) {
      throw new Error("BufferingContextReact not found");
    }
    (0, import_react69.useEffect)(() => {
      if (currentPlaybackRate) {
        emitter.dispatchRateChange(currentPlaybackRate);
      }
    }, [emitter, currentPlaybackRate]);
    useBufferStateEmitter(emitter);
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(PlayerEventEmitterContext.Provider, {
      value: emitter,
      children
    });
  };
  var useHoverState = (ref, hideControlsWhenPointerDoesntMove) => {
    const [hovered, setHovered] = (0, import_react72.useState)(false);
    (0, import_react72.useEffect)(() => {
      const { current } = ref;
      if (!current) {
        return;
      }
      let hoverTimeout;
      const addHoverTimeout = () => {
        if (hideControlsWhenPointerDoesntMove) {
          clearTimeout(hoverTimeout);
          hoverTimeout = setTimeout(() => {
            setHovered(false);
          }, hideControlsWhenPointerDoesntMove === true ? 3e3 : hideControlsWhenPointerDoesntMove);
        }
      };
      const onHover = () => {
        setHovered(true);
        addHoverTimeout();
      };
      const onLeave = () => {
        setHovered(false);
        clearTimeout(hoverTimeout);
      };
      const onMove = () => {
        setHovered(true);
        addHoverTimeout();
      };
      current.addEventListener("mouseenter", onHover);
      current.addEventListener("mouseleave", onLeave);
      current.addEventListener("mousemove", onMove);
      return () => {
        current.removeEventListener("mouseenter", onHover);
        current.removeEventListener("mouseleave", onLeave);
        current.removeEventListener("mousemove", onMove);
        clearTimeout(hoverTimeout);
      };
    }, [hideControlsWhenPointerDoesntMove, ref]);
    return hovered;
  };
  var usePlayer = () => {
    const [playing, setPlaying, imperativePlaying] = Internals.Timeline.usePlayingState();
    const [hasPlayed, setHasPlayed] = (0, import_react75.useState)(false);
    const frame = Internals.Timeline.useTimelinePosition();
    const playStart = (0, import_react75.useRef)(frame);
    const setFrame = Internals.Timeline.useTimelineSetFrame();
    const setTimelinePosition = Internals.Timeline.useTimelineSetFrame();
    const audioContext = (0, import_react75.useContext)(Internals.SharedAudioContext);
    const { audioAndVideoTags } = (0, import_react75.useContext)(Internals.Timeline.TimelineContext);
    const frameRef = (0, import_react75.useRef)(frame);
    frameRef.current = frame;
    const video = Internals.useVideo();
    const config = Internals.useUnsafeVideoConfig();
    const emitter = (0, import_react75.useContext)(PlayerEventEmitterContext);
    const lastFrame = (config?.durationInFrames ?? 1) - 1;
    const isLastFrame = frame === lastFrame;
    const isFirstFrame = frame === 0;
    if (!emitter) {
      throw new TypeError("Expected Player event emitter context");
    }
    const bufferingContext = (0, import_react75.useContext)(Internals.BufferingContextReact);
    if (!bufferingContext) {
      throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");
    }
    const { buffering } = bufferingContext;
    const seek2 = (0, import_react75.useCallback)((newFrame) => {
      if (video?.id) {
        setTimelinePosition((c2) => ({ ...c2, [video.id]: newFrame }));
      }
      frameRef.current = newFrame;
      emitter.dispatchSeek(newFrame);
    }, [emitter, setTimelinePosition, video?.id]);
    const play = (0, import_react75.useCallback)((e) => {
      if (imperativePlaying.current) {
        return;
      }
      setHasPlayed(true);
      if (isLastFrame) {
        seek2(0);
      }
      audioContext?.audioContext?.resume();
      if (audioContext && audioContext.numberOfAudioTags > 0 && e) {
        audioContext.playAllAudios();
      }
      audioAndVideoTags.current.forEach((a2) => a2.play("player play() was called and playing audio from a click"));
      imperativePlaying.current = true;
      setPlaying(true);
      playStart.current = frameRef.current;
      emitter.dispatchPlay();
    }, [
      imperativePlaying,
      isLastFrame,
      audioContext,
      setPlaying,
      emitter,
      seek2,
      audioAndVideoTags
    ]);
    const pause = (0, import_react75.useCallback)(() => {
      if (imperativePlaying.current) {
        imperativePlaying.current = false;
        setPlaying(false);
        emitter.dispatchPause();
        audioContext?.audioContext?.suspend();
      }
    }, [emitter, imperativePlaying, setPlaying, audioContext]);
    const pauseAndReturnToPlayStart = (0, import_react75.useCallback)(() => {
      if (imperativePlaying.current) {
        imperativePlaying.current = false;
        frameRef.current = playStart.current;
        if (config) {
          setTimelinePosition((c2) => ({
            ...c2,
            [config.id]: playStart.current
          }));
          setPlaying(false);
          emitter.dispatchPause();
        }
      }
    }, [config, emitter, imperativePlaying, setPlaying, setTimelinePosition]);
    const videoId = video?.id;
    const frameBack = (0, import_react75.useCallback)((frames) => {
      if (!videoId) {
        return null;
      }
      if (imperativePlaying.current) {
        return;
      }
      setFrame((c2) => {
        const prevFrame = c2[videoId] ?? window.remotion_initialFrame ?? 0;
        const newFrame = Math.max(0, prevFrame - frames);
        if (prevFrame === newFrame) {
          return c2;
        }
        return {
          ...c2,
          [videoId]: newFrame
        };
      });
    }, [imperativePlaying, setFrame, videoId]);
    const frameForward = (0, import_react75.useCallback)((frames) => {
      if (!videoId) {
        return null;
      }
      if (imperativePlaying.current) {
        return;
      }
      setFrame((c2) => {
        const prevFrame = c2[videoId] ?? window.remotion_initialFrame ?? 0;
        const newFrame = Math.min(lastFrame, prevFrame + frames);
        if (prevFrame === newFrame) {
          return c2;
        }
        return {
          ...c2,
          [videoId]: newFrame
        };
      });
    }, [videoId, imperativePlaying, lastFrame, setFrame]);
    const toggle = (0, import_react75.useCallback)((e) => {
      if (imperativePlaying.current) {
        pause();
      } else {
        play(e);
      }
    }, [imperativePlaying, pause, play]);
    const returnValue = (0, import_react75.useMemo)(() => {
      return {
        frameBack,
        frameForward,
        isLastFrame,
        emitter,
        playing,
        play,
        pause,
        seek: seek2,
        isFirstFrame,
        getCurrentFrame: () => frameRef.current,
        isPlaying: () => imperativePlaying.current,
        isBuffering: () => buffering.current,
        pauseAndReturnToPlayStart,
        hasPlayed,
        toggle
      };
    }, [
      buffering,
      emitter,
      frameBack,
      frameForward,
      hasPlayed,
      imperativePlaying,
      isFirstFrame,
      isLastFrame,
      pause,
      pauseAndReturnToPlayStart,
      play,
      playing,
      seek2,
      toggle
    ]);
    return returnValue;
  };
  var useBrowserMediaSession = ({
    browserMediaControlsBehavior,
    videoConfig,
    playbackRate
  }) => {
    const { playing, pause, play, emitter, getCurrentFrame, seek: seek2 } = usePlayer();
    (0, import_react74.useEffect)(() => {
      if (!navigator.mediaSession) {
        return;
      }
      if (browserMediaControlsBehavior.mode === "do-nothing") {
        return;
      }
      if (playing) {
        navigator.mediaSession.playbackState = "playing";
      } else {
        navigator.mediaSession.playbackState = "paused";
      }
    }, [browserMediaControlsBehavior.mode, playing]);
    (0, import_react74.useEffect)(() => {
      if (!navigator.mediaSession) {
        return;
      }
      if (browserMediaControlsBehavior.mode === "do-nothing") {
        return;
      }
      const onTimeUpdate = () => {
        if (!videoConfig) {
          return;
        }
        if (navigator.mediaSession) {
          navigator.mediaSession.setPositionState({
            duration: videoConfig.durationInFrames / videoConfig.fps,
            playbackRate,
            position: getCurrentFrame() / videoConfig.fps
          });
        }
      };
      emitter.addEventListener("timeupdate", onTimeUpdate);
      return () => {
        emitter.removeEventListener("timeupdate", onTimeUpdate);
      };
    }, [
      browserMediaControlsBehavior.mode,
      emitter,
      getCurrentFrame,
      playbackRate,
      videoConfig
    ]);
    (0, import_react74.useEffect)(() => {
      if (!navigator.mediaSession) {
        return;
      }
      if (browserMediaControlsBehavior.mode === "do-nothing") {
        return;
      }
      navigator.mediaSession.setActionHandler("play", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session") {
          play();
        }
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session") {
          pause();
        }
      });
      navigator.mediaSession.setActionHandler("seekto", (event) => {
        if (browserMediaControlsBehavior.mode === "register-media-session" && event.seekTime !== void 0 && videoConfig) {
          seek2(Math.round(event.seekTime * videoConfig.fps));
        }
      });
      navigator.mediaSession.setActionHandler("seekbackward", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session" && videoConfig) {
          seek2(Math.max(0, Math.round((getCurrentFrame() - 10) * videoConfig.fps)));
        }
      });
      navigator.mediaSession.setActionHandler("seekforward", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session" && videoConfig) {
          seek2(Math.max(videoConfig.durationInFrames - 1, Math.round((getCurrentFrame() + 10) * videoConfig.fps)));
        }
      });
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session") {
          seek2(0);
        }
      });
      return () => {
        navigator.mediaSession.metadata = null;
        navigator.mediaSession.setActionHandler("play", null);
        navigator.mediaSession.setActionHandler("pause", null);
        navigator.mediaSession.setActionHandler("seekto", null);
        navigator.mediaSession.setActionHandler("seekbackward", null);
        navigator.mediaSession.setActionHandler("seekforward", null);
        navigator.mediaSession.setActionHandler("previoustrack", null);
      };
    }, [
      browserMediaControlsBehavior.mode,
      getCurrentFrame,
      pause,
      play,
      seek2,
      videoConfig
    ]);
  };
  var calculateNextFrame = ({
    time,
    currentFrame: startFrame,
    playbackSpeed,
    fps,
    actualLastFrame,
    actualFirstFrame,
    framesAdvanced,
    shouldLoop
  }) => {
    const op = playbackSpeed < 0 ? Math.ceil : Math.floor;
    const framesToAdvance = op(time * playbackSpeed / (1e3 / fps)) - framesAdvanced;
    const nextFrame = framesToAdvance + startFrame;
    const isCurrentFrameOutside = startFrame > actualLastFrame || startFrame < actualFirstFrame;
    const isNextFrameOutside = nextFrame > actualLastFrame || nextFrame < actualFirstFrame;
    const hasEnded = !shouldLoop && isNextFrameOutside && !isCurrentFrameOutside;
    if (playbackSpeed > 0) {
      if (isNextFrameOutside) {
        return {
          nextFrame: actualFirstFrame,
          framesToAdvance,
          hasEnded
        };
      }
      return { nextFrame, framesToAdvance, hasEnded };
    }
    if (isNextFrameOutside) {
      return { nextFrame: actualLastFrame, framesToAdvance, hasEnded };
    }
    return { nextFrame, framesToAdvance, hasEnded };
  };
  var getIsBackgrounded = () => {
    if (typeof document === "undefined") {
      return false;
    }
    return document.visibilityState === "hidden";
  };
  var useIsBackgrounded = () => {
    const isBackgrounded = (0, import_react76.useRef)(getIsBackgrounded());
    (0, import_react76.useEffect)(() => {
      const onVisibilityChange = () => {
        isBackgrounded.current = getIsBackgrounded();
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => {
        document.removeEventListener("visibilitychange", onVisibilityChange);
      };
    }, []);
    return isBackgrounded;
  };
  var usePlayback = ({
    loop,
    playbackRate,
    moveToBeginningWhenEnded,
    inFrame,
    outFrame,
    browserMediaControlsBehavior,
    getCurrentFrame
  }) => {
    const config = Internals.useUnsafeVideoConfig();
    const frame = Internals.Timeline.useTimelinePosition();
    const { playing, pause, emitter } = usePlayer();
    const setFrame = Internals.Timeline.useTimelineSetFrame();
    const isBackgroundedRef = useIsBackgrounded();
    const lastTimeUpdateEvent = (0, import_react73.useRef)(null);
    const context = (0, import_react73.useContext)(Internals.BufferingContextReact);
    if (!context) {
      throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");
    }
    useBrowserMediaSession({
      browserMediaControlsBehavior,
      playbackRate,
      videoConfig: config
    });
    (0, import_react73.useEffect)(() => {
      if (!config) {
        return;
      }
      if (!playing) {
        return;
      }
      let hasBeenStopped = false;
      let reqAnimFrameCall = null;
      let startedTime = performance.now();
      let framesAdvanced = 0;
      const cancelQueuedFrame = () => {
        if (reqAnimFrameCall !== null) {
          if (reqAnimFrameCall.type === "raf") {
            cancelAnimationFrame(reqAnimFrameCall.id);
          } else {
            clearTimeout(reqAnimFrameCall.id);
          }
        }
      };
      const stop = () => {
        hasBeenStopped = true;
        cancelQueuedFrame();
      };
      const callback = () => {
        if (hasBeenStopped) {
          return;
        }
        const time = performance.now() - startedTime;
        const actualLastFrame = outFrame ?? config.durationInFrames - 1;
        const actualFirstFrame = inFrame ?? 0;
        const currentFrame = getCurrentFrame();
        const { nextFrame, framesToAdvance, hasEnded } = calculateNextFrame({
          time,
          currentFrame,
          playbackSpeed: playbackRate,
          fps: config.fps,
          actualFirstFrame,
          actualLastFrame,
          framesAdvanced,
          shouldLoop: loop
        });
        framesAdvanced += framesToAdvance;
        if (nextFrame !== getCurrentFrame() && (!hasEnded || moveToBeginningWhenEnded)) {
          setFrame((c2) => ({ ...c2, [config.id]: nextFrame }));
        }
        if (hasEnded) {
          stop();
          pause();
          emitter.dispatchEnded();
          return;
        }
        queueNextFrame();
      };
      const queueNextFrame = () => {
        if (context.buffering.current) {
          const stopListening = context.listenForResume(() => {
            stopListening.remove();
            startedTime = performance.now();
            framesAdvanced = 0;
            queueNextFrame();
          });
          return;
        }
        if (isBackgroundedRef.current) {
          reqAnimFrameCall = {
            type: "timeout",
            id: setTimeout(callback, 1e3 / config.fps)
          };
          return;
        }
        reqAnimFrameCall = { type: "raf", id: requestAnimationFrame(callback) };
      };
      queueNextFrame();
      const onVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          return;
        }
        cancelQueuedFrame();
        callback();
      };
      window.addEventListener("visibilitychange", onVisibilityChange);
      return () => {
        window.removeEventListener("visibilitychange", onVisibilityChange);
        stop();
      };
    }, [
      config,
      loop,
      pause,
      playing,
      setFrame,
      emitter,
      playbackRate,
      inFrame,
      outFrame,
      moveToBeginningWhenEnded,
      isBackgroundedRef,
      getCurrentFrame,
      context
    ]);
    (0, import_react73.useEffect)(() => {
      const interval = setInterval(() => {
        if (lastTimeUpdateEvent.current === getCurrentFrame()) {
          return;
        }
        emitter.dispatchTimeUpdate({ frame: getCurrentFrame() });
        lastTimeUpdateEvent.current = getCurrentFrame();
      }, 250);
      return () => clearInterval(interval);
    }, [emitter, getCurrentFrame]);
    (0, import_react73.useEffect)(() => {
      emitter.dispatchFrameUpdate({ frame });
    }, [emitter, frame]);
  };
  var elementSizeHooks = [];
  var useElementSize = (ref, options) => {
    const [size, setSize] = (0, import_react77.useState)(() => {
      if (!ref.current) {
        return null;
      }
      const rect = ref.current.getClientRects();
      if (!rect[0]) {
        return null;
      }
      return {
        width: rect[0].width,
        height: rect[0].height,
        left: rect[0].x,
        top: rect[0].y,
        windowSize: {
          height: window.innerHeight,
          width: window.innerWidth
        }
      };
    });
    const observer = (0, import_react77.useMemo)(() => {
      if (typeof ResizeObserver === "undefined") {
        return null;
      }
      return new ResizeObserver((entries) => {
        const { contentRect, target } = entries[0];
        const newSize = target.getClientRects();
        if (!newSize?.[0]) {
          setSize(null);
          return;
        }
        const probableCssParentScale = contentRect.width === 0 ? 1 : newSize[0].width / contentRect.width;
        const width = options.shouldApplyCssTransforms || probableCssParentScale === 0 ? newSize[0].width : newSize[0].width * (1 / probableCssParentScale);
        const height = options.shouldApplyCssTransforms || probableCssParentScale === 0 ? newSize[0].height : newSize[0].height * (1 / probableCssParentScale);
        setSize((prevState) => {
          const isSame = prevState && prevState.width === width && prevState.height === height && prevState.left === newSize[0].x && prevState.top === newSize[0].y && prevState.windowSize.height === window.innerHeight && prevState.windowSize.width === window.innerWidth;
          if (isSame) {
            return prevState;
          }
          return {
            width,
            height,
            left: newSize[0].x,
            top: newSize[0].y,
            windowSize: {
              height: window.innerHeight,
              width: window.innerWidth
            }
          };
        });
      });
    }, [options.shouldApplyCssTransforms]);
    const updateSize = (0, import_react77.useCallback)(() => {
      if (!ref.current) {
        return;
      }
      const rect = ref.current.getClientRects();
      if (!rect[0]) {
        setSize(null);
        return;
      }
      setSize((prevState) => {
        const isSame = prevState && prevState.width === rect[0].width && prevState.height === rect[0].height && prevState.left === rect[0].x && prevState.top === rect[0].y && prevState.windowSize.height === window.innerHeight && prevState.windowSize.width === window.innerWidth;
        if (isSame) {
          return prevState;
        }
        return {
          width: rect[0].width,
          height: rect[0].height,
          left: rect[0].x,
          top: rect[0].y,
          windowSize: {
            height: window.innerHeight,
            width: window.innerWidth
          }
        };
      });
    }, [ref]);
    (0, import_react77.useEffect)(() => {
      if (!observer) {
        return;
      }
      const { current } = ref;
      if (current) {
        observer.observe(current);
      }
      return () => {
        if (current) {
          observer.unobserve(current);
        }
      };
    }, [observer, ref, updateSize]);
    (0, import_react77.useEffect)(() => {
      if (!options.triggerOnWindowResize) {
        return;
      }
      window.addEventListener("resize", updateSize);
      return () => {
        window.removeEventListener("resize", updateSize);
      };
    }, [options.triggerOnWindowResize, updateSize]);
    (0, import_react77.useEffect)(() => {
      elementSizeHooks.push(updateSize);
      return () => {
        elementSizeHooks = elementSizeHooks.filter((e) => e !== updateSize);
      };
    }, [updateSize]);
    return (0, import_react77.useMemo)(() => {
      if (!size) {
        return null;
      }
      return { ...size, refresh: updateSize };
    }, [size, updateSize]);
  };
  var DefaultPlayPauseButton = ({ playing, buffering }) => {
    if (playing && buffering) {
      return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(BufferingIndicator, {
        type: "player"
      });
    }
    if (playing) {
      return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PauseIcon, {});
    }
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PlayIcon, {});
  };
  var KNOB_SIZE = 12;
  var BAR_HEIGHT = 5;
  var DefaultVolumeSlider = ({
    volume,
    isVertical,
    onBlur,
    inputRef,
    setVolume
  }) => {
    const sliderContainer = (0, import_react82.useMemo)(() => {
      const paddingLeft = 5;
      const common = {
        paddingLeft,
        height: ICON_SIZE2,
        width: VOLUME_SLIDER_WIDTH,
        display: "inline-flex",
        alignItems: "center"
      };
      if (isVertical) {
        return {
          ...common,
          position: "absolute",
          transform: `rotate(-90deg) translateX(${VOLUME_SLIDER_WIDTH / 2 + ICON_SIZE2 / 2}px)`
        };
      }
      return {
        ...common
      };
    }, [isVertical]);
    const randomId = typeof import_react82.default.useId === "undefined" ? "volume-slider" : import_react82.default.useId();
    const [randomClass] = (0, import_react82.useState)(() => `__remotion-volume-slider-${random(randomId)}`.replace(".", ""));
    const onVolumeChange = (0, import_react82.useCallback)((e) => {
      setVolume(parseFloat(e.target.value));
    }, [setVolume]);
    const inputStyle = (0, import_react82.useMemo)(() => {
      const commonStyle = {
        WebkitAppearance: "none",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: BAR_HEIGHT / 2,
        cursor: "pointer",
        height: BAR_HEIGHT,
        width: VOLUME_SLIDER_WIDTH,
        backgroundImage: `linear-gradient(
				to right,
				white ${volume * 100}%, rgba(255, 255, 255, 0) ${volume * 100}%
			)`
      };
      if (isVertical) {
        return {
          ...commonStyle,
          bottom: ICON_SIZE2 + VOLUME_SLIDER_WIDTH / 2
        };
      }
      return commonStyle;
    }, [isVertical, volume]);
    const sliderStyle = `
	.${randomClass}::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${KNOB_SIZE / 2}px;
		box-shadow: 0 0 2px black;
		height: ${KNOB_SIZE}px;
		width: ${KNOB_SIZE}px;
	}

	.${randomClass}::-moz-range-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${KNOB_SIZE / 2}px;
		box-shadow: 0 0 2px black;
		height: ${KNOB_SIZE}px;
		width: ${KNOB_SIZE}px;
	}
`;
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", {
      style: sliderContainer,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: sliderStyle
          }
        }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", {
          ref: inputRef,
          "aria-label": "Change volume",
          className: randomClass,
          max: 1,
          min: 0,
          onBlur,
          onChange: onVolumeChange,
          step: 0.01,
          type: "range",
          value: volume,
          style: inputStyle
        })
      ]
    });
  };
  var renderDefaultVolumeSlider = (props) => {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DefaultVolumeSlider, {
      ...props
    });
  };
  var VOLUME_SLIDER_WIDTH = 100;
  var MediaVolumeSlider = ({ displayVerticalVolumeSlider, renderMuteButton, renderVolumeSlider }) => {
    const [mediaMuted, setMediaMuted] = Internals.useMediaMutedState();
    const [mediaVolume, setMediaVolume] = Internals.useMediaVolumeState();
    const [focused, setFocused] = (0, import_react81.useState)(false);
    const parentDivRef = (0, import_react81.useRef)(null);
    const inputRef = (0, import_react81.useRef)(null);
    const hover = useHoverState(parentDivRef, false);
    const onBlur = (0, import_react81.useCallback)(() => {
      setTimeout(() => {
        if (inputRef.current && document.activeElement !== inputRef.current) {
          setFocused(false);
        }
      }, 10);
    }, []);
    const isVolume0 = mediaVolume === 0;
    const onClick = (0, import_react81.useCallback)(() => {
      if (isVolume0) {
        setMediaVolume(1);
        setMediaMuted(false);
        return;
      }
      setMediaMuted((mute) => !mute);
    }, [isVolume0, setMediaMuted, setMediaVolume]);
    const parentDivStyle = (0, import_react81.useMemo)(() => {
      return {
        display: "inline-flex",
        background: "none",
        border: "none",
        justifyContent: "center",
        alignItems: "center",
        touchAction: "none",
        ...displayVerticalVolumeSlider && { position: "relative" }
      };
    }, [displayVerticalVolumeSlider]);
    const volumeContainer = (0, import_react81.useMemo)(() => {
      return {
        display: "inline",
        width: ICON_SIZE2,
        height: ICON_SIZE2,
        cursor: "pointer",
        appearance: "none",
        background: "none",
        border: "none",
        padding: 0
      };
    }, []);
    const renderDefaultMuteButton = (0, import_react81.useCallback)(({ muted, volume }) => {
      const isMutedOrZero = muted || volume === 0;
      return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("button", {
        "aria-label": isMutedOrZero ? "Unmute sound" : "Mute sound",
        title: isMutedOrZero ? "Unmute sound" : "Mute sound",
        onClick,
        onBlur,
        onFocus: () => setFocused(true),
        style: volumeContainer,
        type: "button",
        children: isMutedOrZero ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(VolumeOffIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(VolumeOnIcon, {})
      });
    }, [onBlur, onClick, volumeContainer]);
    const muteButton = (0, import_react81.useMemo)(() => {
      return renderMuteButton ? renderMuteButton({ muted: mediaMuted, volume: mediaVolume }) : renderDefaultMuteButton({ muted: mediaMuted, volume: mediaVolume });
    }, [mediaMuted, mediaVolume, renderDefaultMuteButton, renderMuteButton]);
    const volumeSlider = (0, import_react81.useMemo)(() => {
      return (focused || hover) && !mediaMuted && !Internals.isIosSafari() ? (renderVolumeSlider ?? renderDefaultVolumeSlider)({
        isVertical: displayVerticalVolumeSlider,
        volume: mediaVolume,
        onBlur: () => setFocused(false),
        inputRef,
        setVolume: setMediaVolume
      }) : null;
    }, [
      displayVerticalVolumeSlider,
      focused,
      hover,
      mediaMuted,
      mediaVolume,
      renderVolumeSlider,
      setMediaVolume
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", {
      ref: parentDivRef,
      style: parentDivStyle,
      children: [
        muteButton,
        volumeSlider
      ]
    });
  };
  function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = (0, import_react84.useState)(initialIsVisible);
    const ref = (0, import_react84.useRef)(null);
    (0, import_react84.useEffect)(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsComponentVisible(false);
        }
      };
      document.addEventListener("pointerup", handleClickOutside, true);
      return () => {
        document.removeEventListener("pointerup", handleClickOutside, true);
      };
    }, []);
    return { ref, isComponentVisible, setIsComponentVisible };
  }
  var BOTTOM = 35;
  var THRESHOLD = 70;
  var rateDiv = {
    height: 30,
    paddingRight: 15,
    paddingLeft: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
  var checkmarkContainer = {
    width: 22,
    display: "flex",
    alignItems: "center"
  };
  var checkmarkStyle = {
    width: 14,
    height: 14,
    color: "black"
  };
  var Checkmark = () => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("svg", {
    viewBox: "0 0 512 512",
    style: checkmarkStyle,
    children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", {
      fill: "currentColor",
      d: "M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
    })
  });
  var formatPlaybackRate = (rate) => {
    const str = rate.toString();
    return str.includes(".") ? str : str + ".0";
  };
  var PlaybackrateOption = ({ rate, onSelect, selectedRate, keyboardSelectedRate }) => {
    const onClick = (0, import_react83.useCallback)((e) => {
      e.stopPropagation();
      e.preventDefault();
      onSelect(rate);
    }, [onSelect, rate]);
    const [hovered, setHovered] = (0, import_react83.useState)(false);
    const onMouseEnter = (0, import_react83.useCallback)(() => {
      setHovered(true);
    }, []);
    const onMouseLeave = (0, import_react83.useCallback)(() => {
      setHovered(false);
    }, []);
    const isFocused = keyboardSelectedRate === rate;
    const actualStyle = (0, import_react83.useMemo)(() => {
      return {
        ...rateDiv,
        backgroundColor: hovered || isFocused ? "#eee" : "transparent"
      };
    }, [hovered, isFocused]);
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", {
      onMouseEnter,
      onMouseLeave,
      tabIndex: 0,
      style: actualStyle,
      onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", {
          style: checkmarkContainer,
          children: rate === selectedRate ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Checkmark, {}) : null
        }),
        formatPlaybackRate(rate),
        "x"
      ]
    }, rate);
  };
  var PlaybackPopup = ({ setIsComponentVisible, playbackRates, canvasSize }) => {
    const { setPlaybackRate, playbackRate } = (0, import_react83.useContext)(Internals.Timeline.TimelineContext);
    const [keyboardSelectedRate, setKeyboardSelectedRate] = (0, import_react83.useState)(playbackRate);
    (0, import_react83.useEffect)(() => {
      const listener = (e) => {
        e.preventDefault();
        if (e.key === "ArrowUp") {
          const currentIndex = playbackRates.findIndex((rate) => rate === keyboardSelectedRate);
          if (currentIndex === 0) {
            return;
          }
          if (currentIndex === -1) {
            setKeyboardSelectedRate(playbackRates[0]);
          } else {
            setKeyboardSelectedRate(playbackRates[currentIndex - 1]);
          }
        } else if (e.key === "ArrowDown") {
          const currentIndex = playbackRates.findIndex((rate) => rate === keyboardSelectedRate);
          if (currentIndex === playbackRates.length - 1) {
            return;
          }
          if (currentIndex === -1) {
            setKeyboardSelectedRate(playbackRates[playbackRates.length - 1]);
          } else {
            setKeyboardSelectedRate(playbackRates[currentIndex + 1]);
          }
        } else if (e.key === "Enter") {
          setPlaybackRate(keyboardSelectedRate);
          setIsComponentVisible(false);
        }
      };
      window.addEventListener("keydown", listener);
      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, [
      playbackRates,
      keyboardSelectedRate,
      setPlaybackRate,
      setIsComponentVisible
    ]);
    const onSelect = (0, import_react83.useCallback)((rate) => {
      setPlaybackRate(rate);
      setIsComponentVisible(false);
    }, [setIsComponentVisible, setPlaybackRate]);
    const playbackPopup = (0, import_react83.useMemo)(() => {
      return {
        position: "absolute",
        right: 0,
        width: 125,
        maxHeight: canvasSize.height - THRESHOLD - BOTTOM,
        bottom: 35,
        background: "#fff",
        borderRadius: 4,
        overflow: "auto",
        color: "black",
        textAlign: "left"
      };
    }, [canvasSize.height]);
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", {
      style: playbackPopup,
      children: playbackRates.map((rate) => {
        return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(PlaybackrateOption, {
          selectedRate: playbackRate,
          onSelect,
          rate,
          keyboardSelectedRate
        }, rate);
      })
    });
  };
  var label2 = {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    border: "2px solid white",
    borderRadius: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2
  };
  var playerButtonStyle = {
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
    paddingBottom: 6,
    height: 37,
    display: "inline-flex",
    marginBottom: 0,
    marginTop: 0,
    alignItems: "center"
  };
  var button = {
    ...playerButtonStyle,
    position: "relative"
  };
  var PlaybackrateControl = ({ playbackRates, canvasSize }) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const { playbackRate } = (0, import_react83.useContext)(Internals.Timeline.TimelineContext);
    const onClick = (0, import_react83.useCallback)((e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsComponentVisible((prevIsComponentVisible) => !prevIsComponentVisible);
    }, [setIsComponentVisible]);
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", {
      ref,
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("button", {
        type: "button",
        "aria-label": "Change playback rate",
        style: button,
        onClick,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", {
            style: label2,
            children: [
              playbackRate,
              "x"
            ]
          }),
          isComponentVisible && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(PlaybackPopup, {
            canvasSize,
            playbackRates,
            setIsComponentVisible
          })
        ]
      })
    });
  };
  var getFrameFromX = (clientX, durationInFrames, width) => {
    const pos = clientX;
    const frame = Math.round(interpolate(pos, [0, width], [0, durationInFrames - 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }));
    return frame;
  };
  var BAR_HEIGHT2 = 5;
  var KNOB_SIZE2 = 12;
  var VERTICAL_PADDING = 4;
  var containerStyle = {
    userSelect: "none",
    WebkitUserSelect: "none",
    paddingTop: VERTICAL_PADDING,
    paddingBottom: VERTICAL_PADDING,
    boxSizing: "border-box",
    cursor: "pointer",
    position: "relative",
    touchAction: "none"
  };
  var barBackground = {
    height: BAR_HEIGHT2,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    width: "100%",
    borderRadius: BAR_HEIGHT2 / 2
  };
  var findBodyInWhichDivIsLocated = (div) => {
    let current = div;
    while (current.parentElement) {
      current = current.parentElement;
    }
    return current;
  };
  var PlayerSeekBar = ({ durationInFrames, onSeekEnd, onSeekStart, inFrame, outFrame }) => {
    const containerRef = (0, import_react85.useRef)(null);
    const barHovered = useHoverState(containerRef, false);
    const size = useElementSize(containerRef, {
      triggerOnWindowResize: true,
      shouldApplyCssTransforms: true
    });
    const { seek: seek2, play, pause, playing } = usePlayer();
    const frame = Internals.Timeline.useTimelinePosition();
    const [dragging, setDragging] = (0, import_react85.useState)({
      dragging: false
    });
    const width = size?.width ?? 0;
    const onPointerDown = (0, import_react85.useCallback)((e) => {
      if (e.button !== 0) {
        return;
      }
      const posLeft = containerRef.current?.getBoundingClientRect().left;
      const _frame = getFrameFromX(e.clientX - posLeft, durationInFrames, width);
      pause();
      seek2(_frame);
      setDragging({
        dragging: true,
        wasPlaying: playing
      });
      onSeekStart();
    }, [durationInFrames, width, pause, seek2, playing, onSeekStart]);
    const onPointerMove = (0, import_react85.useCallback)((e) => {
      if (!size) {
        throw new Error("Player has no size");
      }
      if (!dragging.dragging) {
        return;
      }
      const posLeft = containerRef.current?.getBoundingClientRect().left;
      const _frame = getFrameFromX(e.clientX - posLeft, durationInFrames, size.width);
      seek2(_frame);
    }, [dragging.dragging, durationInFrames, seek2, size]);
    const onPointerUp = (0, import_react85.useCallback)(() => {
      setDragging({
        dragging: false
      });
      if (!dragging.dragging) {
        return;
      }
      if (dragging.wasPlaying) {
        play();
      } else {
        pause();
      }
      onSeekEnd();
    }, [dragging, onSeekEnd, pause, play]);
    (0, import_react85.useEffect)(() => {
      if (!dragging.dragging) {
        return;
      }
      const body = findBodyInWhichDivIsLocated(containerRef.current);
      body.addEventListener("pointermove", onPointerMove);
      body.addEventListener("pointerup", onPointerUp);
      return () => {
        body.removeEventListener("pointermove", onPointerMove);
        body.removeEventListener("pointerup", onPointerUp);
      };
    }, [dragging.dragging, onPointerMove, onPointerUp]);
    const knobStyle = (0, import_react85.useMemo)(() => {
      return {
        height: KNOB_SIZE2,
        width: KNOB_SIZE2,
        borderRadius: KNOB_SIZE2 / 2,
        position: "absolute",
        top: VERTICAL_PADDING - KNOB_SIZE2 / 2 + 5 / 2,
        backgroundColor: "white",
        left: Math.max(0, frame / Math.max(1, durationInFrames - 1) * width - KNOB_SIZE2 / 2),
        boxShadow: "0 0 2px black",
        opacity: Number(barHovered || dragging.dragging)
      };
    }, [barHovered, dragging.dragging, durationInFrames, frame, width]);
    const fillStyle = (0, import_react85.useMemo)(() => {
      return {
        height: BAR_HEIGHT2,
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: (frame - (inFrame ?? 0)) / (durationInFrames - 1) * width,
        marginLeft: (inFrame ?? 0) / (durationInFrames - 1) * width,
        borderRadius: BAR_HEIGHT2 / 2
      };
    }, [durationInFrames, frame, inFrame, width]);
    const active = (0, import_react85.useMemo)(() => {
      return {
        height: BAR_HEIGHT2,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        width: ((outFrame ?? durationInFrames - 1) - (inFrame ?? 0)) / (durationInFrames - 1) * 100 + "%",
        marginLeft: (inFrame ?? 0) / (durationInFrames - 1) * 100 + "%",
        borderRadius: BAR_HEIGHT2 / 2,
        position: "absolute"
      };
    }, [durationInFrames, inFrame, outFrame]);
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", {
      ref: containerRef,
      onPointerDown,
      style: containerStyle,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", {
          style: barBackground,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", {
              style: active
            }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", {
              style: fillStyle
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", {
          style: knobStyle
        })
      ]
    });
  };
  var formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds - minutes * 60);
    return `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
  };
  var PlayerTimeLabel = ({ durationInFrames, maxTimeLabelWidth, fps }) => {
    const frame = Internals.Timeline.useTimelinePosition();
    const timeLabel = (0, import_react86.useMemo)(() => {
      return {
        color: "white",
        fontFamily: "sans-serif",
        fontSize: 14,
        maxWidth: maxTimeLabelWidth === null ? void 0 : maxTimeLabelWidth,
        overflow: "hidden",
        textOverflow: "ellipsis"
      };
    }, [maxTimeLabelWidth]);
    const isLastFrame = frame === durationInFrames - 1;
    const frameToDisplay = isLastFrame ? frame + 1 : frame;
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", {
      style: timeLabel,
      children: [
        formatTime(frameToDisplay / fps),
        " / ",
        formatTime(durationInFrames / fps)
      ]
    });
  };
  var X_SPACER = 10;
  var X_PADDING = 12;
  var useVideoControlsResize = ({
    allowFullscreen: allowFullScreen,
    playerWidth
  }) => {
    const resizeInfo = (0, import_react87.useMemo)(() => {
      const playPauseIconSize = ICON_SIZE2;
      const volumeIconSize = ICON_SIZE2;
      const _fullscreenIconSize = allowFullScreen ? fullscreenIconSize : 0;
      const elementsSize = volumeIconSize + playPauseIconSize + _fullscreenIconSize + X_PADDING * 2 + X_SPACER * 2;
      const maxTimeLabelWidth = playerWidth - elementsSize;
      const maxTimeLabelWidthWithoutNegativeValue = Math.max(maxTimeLabelWidth, 0);
      const availableTimeLabelWidthIfVolumeOpen = maxTimeLabelWidthWithoutNegativeValue - VOLUME_SLIDER_WIDTH;
      const computedLabelWidth = availableTimeLabelWidthIfVolumeOpen < VOLUME_SLIDER_WIDTH ? maxTimeLabelWidthWithoutNegativeValue : availableTimeLabelWidthIfVolumeOpen;
      const minWidthForHorizontalDisplay = computedLabelWidth + elementsSize + VOLUME_SLIDER_WIDTH;
      const displayVerticalVolumeSlider = playerWidth < minWidthForHorizontalDisplay;
      return {
        maxTimeLabelWidth: maxTimeLabelWidthWithoutNegativeValue === 0 ? null : maxTimeLabelWidthWithoutNegativeValue,
        displayVerticalVolumeSlider
      };
    }, [allowFullScreen, playerWidth]);
    return resizeInfo;
  };
  var gradientSteps = [
    0,
    0.013,
    0.049,
    0.104,
    0.175,
    0.259,
    0.352,
    0.45,
    0.55,
    0.648,
    0.741,
    0.825,
    0.896,
    0.951,
    0.987
  ];
  var gradientOpacities = [
    0,
    8.1,
    15.5,
    22.5,
    29,
    35.3,
    41.2,
    47.1,
    52.9,
    58.8,
    64.7,
    71,
    77.5,
    84.5,
    91.9
  ];
  var globalGradientOpacity = 1 / 0.7;
  var containerStyle2 = {
    boxSizing: "border-box",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 10,
    backgroundImage: `linear-gradient(to bottom,${gradientSteps.map((g, i) => {
      return `hsla(0, 0%, 0%, ${g}) ${gradientOpacities[i] * globalGradientOpacity}%`;
    }).join(", ")}, hsl(0, 0%, 0%) 100%)`,
    backgroundSize: "auto 145px",
    display: "flex",
    paddingRight: X_PADDING,
    paddingLeft: X_PADDING,
    flexDirection: "column",
    transition: "opacity 0.3s"
  };
  var controlsRow = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    WebkitUserSelect: "none"
  };
  var leftPartStyle = {
    display: "flex",
    flexDirection: "row",
    userSelect: "none",
    WebkitUserSelect: "none",
    alignItems: "center"
  };
  var xSpacer = {
    width: 12
  };
  var ySpacer = {
    height: 8
  };
  var flex1 = {
    flex: 1
  };
  var fullscreen = {};
  var Controls = ({
    durationInFrames,
    isFullscreen,
    fps,
    showVolumeControls,
    onFullscreenButtonClick,
    allowFullscreen,
    onExitFullscreenButtonClick,
    spaceKeyToPlayOrPause,
    onSeekEnd,
    onSeekStart,
    inFrame,
    outFrame,
    initiallyShowControls,
    canvasSize,
    renderPlayPauseButton,
    renderFullscreenButton,
    alwaysShowControls,
    showPlaybackRateControl,
    containerRef,
    buffering,
    hideControlsWhenPointerDoesntMove,
    onPointerDown,
    onDoubleClick,
    renderMuteButton,
    renderVolumeSlider,
    playing,
    toggle
  }) => {
    const playButtonRef = (0, import_react80.useRef)(null);
    const [supportsFullscreen, setSupportsFullscreen] = (0, import_react80.useState)(false);
    const hovered = useHoverState(containerRef, hideControlsWhenPointerDoesntMove);
    const { maxTimeLabelWidth, displayVerticalVolumeSlider } = useVideoControlsResize({
      allowFullscreen,
      playerWidth: canvasSize?.width ?? 0
    });
    const [shouldShowInitially, setInitiallyShowControls] = (0, import_react80.useState)(() => {
      if (typeof initiallyShowControls === "boolean") {
        return initiallyShowControls;
      }
      if (typeof initiallyShowControls === "number") {
        if (initiallyShowControls % 1 !== 0) {
          throw new Error("initiallyShowControls must be an integer or a boolean");
        }
        if (Number.isNaN(initiallyShowControls)) {
          throw new Error("initiallyShowControls must not be NaN");
        }
        if (!Number.isFinite(initiallyShowControls)) {
          throw new Error("initiallyShowControls must be finite");
        }
        if (initiallyShowControls <= 0) {
          throw new Error("initiallyShowControls must be a positive integer");
        }
        return initiallyShowControls;
      }
      throw new TypeError("initiallyShowControls must be a number or a boolean");
    });
    const containerCss = (0, import_react80.useMemo)(() => {
      const shouldShow = hovered || !playing || shouldShowInitially || alwaysShowControls;
      return {
        ...containerStyle2,
        opacity: Number(shouldShow)
      };
    }, [hovered, shouldShowInitially, playing, alwaysShowControls]);
    (0, import_react80.useEffect)(() => {
      if (playButtonRef.current && spaceKeyToPlayOrPause) {
        playButtonRef.current.focus({
          preventScroll: true
        });
      }
    }, [playing, spaceKeyToPlayOrPause]);
    (0, import_react80.useEffect)(() => {
      setSupportsFullscreen((typeof document !== "undefined" && (document.fullscreenEnabled || document.webkitFullscreenEnabled)) ?? false);
    }, []);
    (0, import_react80.useEffect)(() => {
      if (shouldShowInitially === false) {
        return;
      }
      const time = shouldShowInitially === true ? 2e3 : shouldShowInitially;
      const timeout = setTimeout(() => {
        setInitiallyShowControls(false);
      }, time);
      return () => {
        clearInterval(timeout);
      };
    }, [shouldShowInitially]);
    const playbackRates = (0, import_react80.useMemo)(() => {
      if (showPlaybackRateControl === true) {
        return [0.5, 0.8, 1, 1.2, 1.5, 1.8, 2, 2.5, 3];
      }
      if (Array.isArray(showPlaybackRateControl)) {
        for (const rate of showPlaybackRateControl) {
          if (typeof rate !== "number") {
            throw new Error("Every item in showPlaybackRateControl must be a number");
          }
          if (rate <= 0) {
            throw new Error("Every item in showPlaybackRateControl must be positive");
          }
        }
        return showPlaybackRateControl;
      }
      return null;
    }, [showPlaybackRateControl]);
    const ref = (0, import_react80.useRef)(null);
    const flexRef = (0, import_react80.useRef)(null);
    const onPointerDownIfContainer = (0, import_react80.useCallback)((e) => {
      if (e.target === ref.current || e.target === flexRef.current) {
        onPointerDown?.(e);
      }
    }, [onPointerDown]);
    const onDoubleClickIfContainer = (0, import_react80.useCallback)((e) => {
      if (e.target === ref.current || e.target === flexRef.current) {
        onDoubleClick?.(e);
      }
    }, [onDoubleClick]);
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", {
      ref,
      style: containerCss,
      onPointerDown: onPointerDownIfContainer,
      onDoubleClick: onDoubleClickIfContainer,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", {
          ref: flexRef,
          style: controlsRow,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", {
              style: leftPartStyle,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("button", {
                  ref: playButtonRef,
                  type: "button",
                  style: playerButtonStyle,
                  onClick: toggle,
                  "aria-label": playing ? "Pause video" : "Play video",
                  title: playing ? "Pause video" : "Play video",
                  children: renderPlayPauseButton === null ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(DefaultPlayPauseButton, {
                    buffering,
                    playing
                  }) : renderPlayPauseButton({
                    playing,
                    isBuffering: buffering
                  }) ?? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(DefaultPlayPauseButton, {
                    buffering,
                    playing
                  })
                }),
                showVolumeControls ? /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", {
                      style: xSpacer
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(MediaVolumeSlider, {
                      renderMuteButton,
                      renderVolumeSlider,
                      displayVerticalVolumeSlider
                    })
                  ]
                }) : null,
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", {
                  style: xSpacer
                }),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PlayerTimeLabel, {
                  durationInFrames,
                  fps,
                  maxTimeLabelWidth
                }),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", {
                  style: xSpacer
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", {
              style: flex1
            }),
            playbackRates && canvasSize && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PlaybackrateControl, {
              canvasSize,
              playbackRates
            }),
            playbackRates && supportsFullscreen && allowFullscreen ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", {
              style: xSpacer
            }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", {
              style: fullscreen,
              children: supportsFullscreen && allowFullscreen ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("button", {
                type: "button",
                "aria-label": isFullscreen ? "Exit fullscreen" : "Enter Fullscreen",
                title: isFullscreen ? "Exit fullscreen" : "Enter Fullscreen",
                style: playerButtonStyle,
                onClick: isFullscreen ? onExitFullscreenButtonClick : onFullscreenButtonClick,
                children: renderFullscreenButton === null ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(FullscreenIcon, {
                  isFullscreen
                }) : renderFullscreenButton({ isFullscreen })
              }) : null
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", {
          style: ySpacer
        }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PlayerSeekBar, {
          onSeekEnd,
          onSeekStart,
          durationInFrames,
          inFrame,
          outFrame
        })
      ]
    });
  };
  var errorStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%",
    width: "100%"
  };
  var ErrorBoundary = class extends import_react88.default.Component {
    state = { hasError: null };
    static getDerivedStateFromError(error2) {
      return { hasError: error2 };
    }
    componentDidCatch(error2) {
      this.props.onError(error2);
    }
    render() {
      if (this.state.hasError) {
        return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", {
          style: errorStyle,
          children: this.props.errorFallback({
            error: this.state.hasError
          })
        });
      }
      return this.props.children;
    }
  };
  var getHashOfDomain = async () => {
    if (typeof window === "undefined") {
      return null;
    }
    if (typeof window.crypto === "undefined") {
      return null;
    }
    if (typeof window.crypto.subtle === "undefined") {
      return null;
    }
    try {
      const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(window.location.hostname));
      return Array.from(new Uint8Array(hashBuffer)).map((b2) => b2.toString(16).padStart(2, "0")).join("");
    } catch {
      return null;
    }
  };
  var style = {
    backgroundColor: "red",
    position: "absolute",
    padding: 12,
    fontFamily: "Arial"
  };
  var DOMAIN_BLACKLIST = [
    "28d262b44cc61fa750f1686b16ad0604dabfe193fbc263eec05c89b7ad4c2cd6",
    "4db1b0a94be33165dfefcb3ba03d04c7a2666dd27c496d3dc9fa41858e94925e",
    "fbc48530bbf245da790f63675e84e06bab38c3b114fab07eb350025119922bdc",
    "7baf10a8932757b1b3a22b3fce10a048747ac2f8eaf638603487e3705b07eb83",
    "8a6c21a598d8c667272b5207c051b85997bf5b45d5fb712378be3f27cd72c6a6",
    "a2f7aaac9c50a9255e7fc376110c4e0bfe153722dc66ed3c5d3bf2a135f65518"
  ];
  var ran = false;
  var RenderWarningIfBlacklist = () => {
    const [unlicensed, setUnlicensed] = import_react89.default.useState(false);
    (0, import_react89.useEffect)(() => {
      if (ran) {
        return;
      }
      ran = true;
      getHashOfDomain().then((hash) => {
        if (hash && DOMAIN_BLACKLIST.includes(hash)) {
          setUnlicensed(true);
        }
      }).catch(() => {
      });
    }, []);
    (0, import_react89.useEffect)(() => {
      if (!unlicensed) {
        return;
      }
      const ensureBanner = () => {
        const banner = document.querySelector(".warning-banner");
        if (!banner) {
          const div = document.createElement("div");
          div.className = "warning-banner";
          Object.assign(div.style, style, {
            zIndex: "9999",
            cssText: `${style.cssText} !important;`
          });
          div.innerHTML = `
	        <a href="https://github.com/remotion-dev/remotion/pull/4589" style="color: white;">
	          Remotion Unlicensed \u2013 Contact hi@remotion.dev
	        </a>
	      `;
          document.body.appendChild(div);
        }
      };
      const observer = new MutationObserver(() => ensureBanner());
      observer.observe(document.body, { childList: true, subtree: true });
      return () => {
        observer.disconnect();
      };
    }, [unlicensed]);
    if (!unlicensed) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", {
      style,
      className: "warning-banner",
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("a", {
        style: { color: "white" },
        href: "https://github.com/remotion-dev/remotion/pull/4589",
        children: "Remotion Unlicensed \u2013 Contact hi@remotion.dev"
      })
    });
  };
  var playerCssClassname = (override) => {
    return override ?? "__remotion-player";
  };
  var IS_NODE = typeof document === "undefined";
  var cancellablePromise = (promise) => {
    let isCanceled = false;
    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then((value) => {
        if (isCanceled) {
          reject({ isCanceled, value });
          return;
        }
        resolve(value);
      }).catch((error2) => {
        reject({ isCanceled, error: error2 });
      });
    });
    return {
      promise: wrappedPromise,
      cancel: () => {
        isCanceled = true;
      }
    };
  };
  var delay = (n) => new Promise((resolve) => setTimeout(resolve, n));
  var useCancellablePromises = () => {
    const pendingPromises = (0, import_react91.useRef)([]);
    const appendPendingPromise = (0, import_react91.useCallback)((promise) => {
      pendingPromises.current = [...pendingPromises.current, promise];
    }, []);
    const removePendingPromise = (0, import_react91.useCallback)((promise) => {
      pendingPromises.current = pendingPromises.current.filter((p) => p !== promise);
    }, []);
    const clearPendingPromises = (0, import_react91.useCallback)(() => pendingPromises.current.map((p) => p.cancel()), []);
    const api = (0, import_react91.useMemo)(() => ({
      appendPendingPromise,
      removePendingPromise,
      clearPendingPromises
    }), [appendPendingPromise, clearPendingPromises, removePendingPromise]);
    return api;
  };
  var useClickPreventionOnDoubleClick = (onClick, onDoubleClick, doubleClickToFullscreen) => {
    const api = useCancellablePromises();
    const handleClick = (0, import_react90.useCallback)(async (e) => {
      if (e instanceof PointerEvent ? e.pointerType === "touch" : e.nativeEvent.pointerType === "touch") {
        onClick(e);
        return;
      }
      api.clearPendingPromises();
      const waitForClick = cancellablePromise(delay(200));
      api.appendPendingPromise(waitForClick);
      try {
        await waitForClick.promise;
        api.removePendingPromise(waitForClick);
        onClick(e);
      } catch (errorInfo) {
        const info2 = errorInfo;
        api.removePendingPromise(waitForClick);
        if (!info2.isCanceled) {
          throw info2.error;
        }
      }
    }, [api, onClick]);
    const handlePointerDown = (0, import_react90.useCallback)(() => {
      document.addEventListener("pointerup", (newEvt) => {
        handleClick(newEvt);
      }, {
        once: true
      });
    }, [handleClick]);
    const handleDoubleClick = (0, import_react90.useCallback)(() => {
      api.clearPendingPromises();
      onDoubleClick();
    }, [api, onDoubleClick]);
    const returnValue = (0, import_react90.useMemo)(() => {
      if (!doubleClickToFullscreen) {
        return { handlePointerDown: onClick, handleDoubleClick: () => {
          return;
        } };
      }
      return { handlePointerDown, handleDoubleClick };
    }, [doubleClickToFullscreen, handleDoubleClick, handlePointerDown, onClick]);
    return returnValue;
  };
  var reactVersion = import_react79.default.version.split(".")[0];
  if (reactVersion === "0") {
    throw new Error(`Version ${reactVersion} of "react" is not supported by Remotion`);
  }
  var doesReactVersionSupportSuspense = parseInt(reactVersion, 10) >= 18;
  var PlayerUI = ({
    controls,
    style: style2,
    loop,
    autoPlay,
    allowFullscreen,
    inputProps,
    clickToPlay,
    showVolumeControls,
    doubleClickToFullscreen,
    spaceKeyToPlayOrPause,
    errorFallback,
    playbackRate,
    renderLoading,
    renderPoster,
    className: className2,
    moveToBeginningWhenEnded,
    showPosterWhenUnplayed,
    showPosterWhenEnded,
    showPosterWhenPaused,
    showPosterWhenBuffering,
    showPosterWhenBufferingAndPaused,
    inFrame,
    outFrame,
    initiallyShowControls,
    renderFullscreen: renderFullscreenButton,
    renderPlayPauseButton,
    renderMuteButton,
    renderVolumeSlider,
    alwaysShowControls,
    showPlaybackRateControl,
    posterFillMode,
    bufferStateDelayInMilliseconds,
    hideControlsWhenPointerDoesntMove,
    overflowVisible,
    browserMediaControlsBehavior,
    overrideInternalClassName,
    noSuspense
  }, ref) => {
    const config = Internals.useUnsafeVideoConfig();
    const video = Internals.useVideo();
    const container2 = (0, import_react79.useRef)(null);
    const canvasSize = useElementSize(container2, {
      triggerOnWindowResize: false,
      shouldApplyCssTransforms: false
    });
    const [hasPausedToResume, setHasPausedToResume] = (0, import_react79.useState)(false);
    const [shouldAutoplay, setShouldAutoPlay] = (0, import_react79.useState)(autoPlay);
    const [isFullscreen, setIsFullscreen] = (0, import_react79.useState)(() => false);
    const [seeking, setSeeking] = (0, import_react79.useState)(false);
    const supportsFullScreen = (0, import_react79.useMemo)(() => {
      if (typeof document === "undefined") {
        return false;
      }
      return Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled);
    }, []);
    const player = usePlayer();
    const playerToggle = player.toggle;
    usePlayback({
      loop,
      playbackRate,
      moveToBeginningWhenEnded,
      inFrame,
      outFrame,
      getCurrentFrame: player.getCurrentFrame,
      browserMediaControlsBehavior
    });
    (0, import_react79.useEffect)(() => {
      if (hasPausedToResume && !player.playing) {
        setHasPausedToResume(false);
        player.play();
      }
    }, [hasPausedToResume, player]);
    (0, import_react79.useEffect)(() => {
      const { current } = container2;
      if (!current) {
        return;
      }
      const onFullscreenChange = () => {
        const newValue = document.fullscreenElement === current || document.webkitFullscreenElement === current;
        setIsFullscreen(newValue);
      };
      document.addEventListener("fullscreenchange", onFullscreenChange);
      document.addEventListener("webkitfullscreenchange", onFullscreenChange);
      return () => {
        document.removeEventListener("fullscreenchange", onFullscreenChange);
        document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
      };
    }, []);
    const toggle = (0, import_react79.useCallback)((e) => {
      playerToggle(e);
    }, [playerToggle]);
    const requestFullscreen = (0, import_react79.useCallback)(() => {
      if (!allowFullscreen) {
        throw new Error("allowFullscreen is false");
      }
      if (!supportsFullScreen) {
        throw new Error("Browser doesnt support fullscreen");
      }
      if (!container2.current) {
        throw new Error("No player ref found");
      }
      if (container2.current.webkitRequestFullScreen) {
        container2.current.webkitRequestFullScreen();
      } else {
        container2.current.requestFullscreen();
      }
    }, [allowFullscreen, supportsFullScreen]);
    const exitFullscreen = (0, import_react79.useCallback)(() => {
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else {
        document.exitFullscreen();
      }
    }, []);
    (0, import_react79.useEffect)(() => {
      const { current } = container2;
      if (!current) {
        return;
      }
      const fullscreenChange = () => {
        const element = document.webkitFullscreenElement ?? document.fullscreenElement;
        if (element && element === container2.current) {
          player.emitter.dispatchFullscreenChange({
            isFullscreen: true
          });
        } else {
          player.emitter.dispatchFullscreenChange({
            isFullscreen: false
          });
        }
      };
      current.addEventListener("webkitfullscreenchange", fullscreenChange);
      current.addEventListener("fullscreenchange", fullscreenChange);
      return () => {
        current.removeEventListener("webkitfullscreenchange", fullscreenChange);
        current.removeEventListener("fullscreenchange", fullscreenChange);
      };
    }, [player.emitter]);
    const durationInFrames = config?.durationInFrames ?? 1;
    const layout = (0, import_react79.useMemo)(() => {
      if (!config || !canvasSize) {
        return null;
      }
      return calculateCanvasTransformation({
        canvasSize,
        compositionHeight: config.height,
        compositionWidth: config.width,
        previewSize: "auto"
      });
    }, [canvasSize, config]);
    const scale = layout?.scale ?? 1;
    const initialScaleIgnored = (0, import_react79.useRef)(false);
    (0, import_react79.useEffect)(() => {
      if (!initialScaleIgnored.current) {
        initialScaleIgnored.current = true;
        return;
      }
      player.emitter.dispatchScaleChange(scale);
    }, [player.emitter, scale]);
    const { setMediaVolume, setMediaMuted } = (0, import_react79.useContext)(Internals.SetMediaVolumeContext);
    const { mediaMuted, mediaVolume } = (0, import_react79.useContext)(Internals.MediaVolumeContext);
    (0, import_react79.useEffect)(() => {
      player.emitter.dispatchVolumeChange(mediaVolume);
    }, [player.emitter, mediaVolume]);
    const isMuted = mediaMuted || mediaVolume === 0;
    (0, import_react79.useEffect)(() => {
      player.emitter.dispatchMuteChange({
        isMuted
      });
    }, [player.emitter, isMuted]);
    const [showBufferIndicator, setShowBufferState] = (0, import_react79.useState)(false);
    (0, import_react79.useEffect)(() => {
      let timeout = null;
      let stopped = false;
      const onBuffer = () => {
        stopped = false;
        requestAnimationFrame(() => {
          if (bufferStateDelayInMilliseconds === 0) {
            setShowBufferState(true);
          } else {
            timeout = setTimeout(() => {
              if (!stopped) {
                setShowBufferState(true);
              }
            }, bufferStateDelayInMilliseconds);
          }
        });
      };
      const onResume = () => {
        requestAnimationFrame(() => {
          stopped = true;
          setShowBufferState(false);
          if (timeout) {
            clearTimeout(timeout);
          }
        });
      };
      player.emitter.addEventListener("waiting", onBuffer);
      player.emitter.addEventListener("resume", onResume);
      return () => {
        player.emitter.removeEventListener("waiting", onBuffer);
        player.emitter.removeEventListener("resume", onResume);
        setShowBufferState(false);
        if (timeout) {
          clearTimeout(timeout);
        }
        stopped = true;
      };
    }, [bufferStateDelayInMilliseconds, player.emitter]);
    (0, import_react79.useImperativeHandle)(ref, () => {
      const methods = {
        play: player.play,
        pause: () => {
          setHasPausedToResume(false);
          player.pause();
        },
        toggle,
        getContainerNode: () => container2.current,
        getCurrentFrame: player.getCurrentFrame,
        isPlaying: player.isPlaying,
        seekTo: (f) => {
          const lastFrame = durationInFrames - 1;
          const frameToSeekTo = Math.max(0, Math.min(lastFrame, f));
          if (player.isPlaying()) {
            const pauseToResume = frameToSeekTo !== lastFrame || loop;
            setHasPausedToResume(pauseToResume);
            player.pause();
          }
          if (frameToSeekTo === lastFrame && !loop) {
            player.emitter.dispatchEnded();
          }
          player.seek(frameToSeekTo);
        },
        isFullscreen: () => {
          const { current } = container2;
          if (!current) {
            return false;
          }
          return document.fullscreenElement === current || document.webkitFullscreenElement === current;
        },
        requestFullscreen,
        exitFullscreen,
        getVolume: () => {
          if (mediaMuted) {
            return 0;
          }
          return mediaVolume;
        },
        setVolume: (vol) => {
          if (typeof vol !== "number") {
            throw new TypeError(`setVolume() takes a number, got value of type ${typeof vol}`);
          }
          if (isNaN(vol)) {
            throw new TypeError(`setVolume() got a number that is NaN. Volume must be between 0 and 1.`);
          }
          if (vol < 0 || vol > 1) {
            throw new TypeError(`setVolume() got a number that is out of range. Must be between 0 and 1, got ${typeof vol}`);
          }
          setMediaVolume(vol);
        },
        isMuted: () => isMuted,
        mute: () => {
          setMediaMuted(true);
        },
        unmute: () => {
          setMediaMuted(false);
        },
        getScale: () => scale,
        pauseAndReturnToPlayStart: () => {
          player.pauseAndReturnToPlayStart();
        }
      };
      return Object.assign(player.emitter, methods);
    }, [
      durationInFrames,
      exitFullscreen,
      loop,
      mediaMuted,
      isMuted,
      mediaVolume,
      player,
      requestFullscreen,
      setMediaMuted,
      setMediaVolume,
      toggle,
      scale
    ]);
    const VideoComponent = video ? video.component : null;
    const outerStyle = (0, import_react79.useMemo)(() => {
      return calculateOuterStyle({
        canvasSize,
        config,
        style: style2,
        overflowVisible,
        layout
      });
    }, [canvasSize, config, layout, overflowVisible, style2]);
    const outer = (0, import_react79.useMemo)(() => {
      return calculateOuter({ config, layout, scale, overflowVisible });
    }, [config, layout, overflowVisible, scale]);
    const containerStyle3 = (0, import_react79.useMemo)(() => {
      return calculateContainerStyle({
        config,
        layout,
        scale,
        overflowVisible
      });
    }, [config, layout, overflowVisible, scale]);
    const playerPause = player.pause;
    const playerDispatchError = player.emitter.dispatchError;
    const onError = (0, import_react79.useCallback)((error2) => {
      playerPause();
      playerDispatchError(error2);
    }, [playerDispatchError, playerPause]);
    const onFullscreenButtonClick = (0, import_react79.useCallback)((e) => {
      e.stopPropagation();
      requestFullscreen();
    }, [requestFullscreen]);
    const onExitFullscreenButtonClick = (0, import_react79.useCallback)((e) => {
      e.stopPropagation();
      exitFullscreen();
    }, [exitFullscreen]);
    const onSingleClick = (0, import_react79.useCallback)((e) => {
      const rightClick = e instanceof MouseEvent ? e.button === 2 : e.nativeEvent.button;
      if (rightClick) {
        return;
      }
      toggle(e);
    }, [toggle]);
    const onSeekStart = (0, import_react79.useCallback)(() => {
      setSeeking(true);
    }, []);
    const onSeekEnd = (0, import_react79.useCallback)(() => {
      setSeeking(false);
    }, []);
    const onDoubleClick = (0, import_react79.useCallback)(() => {
      if (isFullscreen) {
        exitFullscreen();
      } else {
        requestFullscreen();
      }
    }, [exitFullscreen, isFullscreen, requestFullscreen]);
    const { handlePointerDown, handleDoubleClick } = useClickPreventionOnDoubleClick(onSingleClick, onDoubleClick, doubleClickToFullscreen && allowFullscreen && supportsFullScreen);
    (0, import_react79.useEffect)(() => {
      if (shouldAutoplay) {
        player.play();
        setShouldAutoPlay(false);
      }
    }, [shouldAutoplay, player]);
    const loadingMarkup = (0, import_react79.useMemo)(() => {
      return renderLoading ? renderLoading({
        height: outerStyle.height,
        width: outerStyle.width,
        isBuffering: showBufferIndicator
      }) : null;
    }, [outerStyle.height, outerStyle.width, renderLoading, showBufferIndicator]);
    const currentScale = (0, import_react79.useMemo)(() => {
      return {
        type: "scale",
        scale
      };
    }, [scale]);
    if (!config) {
      return null;
    }
    const poster = renderPoster ? renderPoster({
      height: posterFillMode === "player-size" ? outerStyle.height : config.height,
      width: posterFillMode === "player-size" ? outerStyle.width : config.width,
      isBuffering: showBufferIndicator
    }) : null;
    if (poster === void 0) {
      throw new TypeError("renderPoster() must return a React element, but undefined was returned");
    }
    const shouldShowPoster = poster && [
      showPosterWhenPaused && !player.isPlaying() && !seeking,
      showPosterWhenEnded && player.isLastFrame && !player.isPlaying(),
      showPosterWhenUnplayed && !player.hasPlayed && !player.isPlaying(),
      showPosterWhenBuffering && showBufferIndicator && player.isPlaying(),
      showPosterWhenBufferingAndPaused && showBufferIndicator && !player.isPlaying()
    ].some(Boolean);
    const { left, top, width, height, ...outerWithoutScale } = outer;
    const content = /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", {
          style: outer,
          onPointerDown: clickToPlay ? handlePointerDown : void 0,
          onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", {
              style: containerStyle3,
              className: playerCssClassname(overrideInternalClassName),
              children: [
                VideoComponent ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ErrorBoundary, {
                  onError,
                  errorFallback,
                  children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Internals.CurrentScaleContext.Provider, {
                    value: currentScale,
                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(VideoComponent, {
                      ...video?.props ?? {},
                      ...inputProps ?? {}
                    })
                  })
                }) : null,
                shouldShowPoster && posterFillMode === "composition-size" ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", {
                  style: {
                    ...outerWithoutScale,
                    width: config.width,
                    height: config.height
                  },
                  onPointerDown: clickToPlay ? handlePointerDown : void 0,
                  onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
                  children: poster
                }) : null
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(RenderWarningIfBlacklist, {})
          ]
        }),
        shouldShowPoster && posterFillMode === "player-size" ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", {
          style: outer,
          onPointerDown: clickToPlay ? handlePointerDown : void 0,
          onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
          children: poster
        }) : null,
        controls ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Controls, {
          fps: config.fps,
          playing: player.playing,
          toggle: player.toggle,
          durationInFrames: config.durationInFrames,
          containerRef: container2,
          onFullscreenButtonClick,
          isFullscreen,
          allowFullscreen,
          showVolumeControls,
          onExitFullscreenButtonClick,
          spaceKeyToPlayOrPause,
          onSeekEnd,
          onSeekStart,
          inFrame,
          outFrame,
          initiallyShowControls,
          canvasSize,
          renderFullscreenButton,
          renderPlayPauseButton,
          alwaysShowControls,
          showPlaybackRateControl,
          buffering: showBufferIndicator,
          hideControlsWhenPointerDoesntMove,
          onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
          onPointerDown: clickToPlay ? handlePointerDown : void 0,
          renderMuteButton,
          renderVolumeSlider
        }) : null
      ]
    });
    if (noSuspense || IS_NODE && !doesReactVersionSupportSuspense) {
      return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", {
        ref: container2,
        style: outerStyle,
        className: className2,
        children: content
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", {
      ref: container2,
      style: outerStyle,
      className: className2,
      children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react79.Suspense, {
        fallback: loadingMarkup,
        children: content
      })
    });
  };
  var PlayerUI_default = (0, import_react79.forwardRef)(PlayerUI);
  var DEFAULT_VOLUME_PERSISTANCE_KEY = "remotion.volumePreference";
  var persistVolume = (volume, logLevel, volumePersistenceKey) => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      window.localStorage.setItem(volumePersistenceKey ?? DEFAULT_VOLUME_PERSISTANCE_KEY, String(volume));
    } catch (e) {
      Internals.Log.error({ logLevel, tag: null }, "Could not persist volume", e);
    }
  };
  var getPreferredVolume = (volumePersistenceKey) => {
    if (typeof window === "undefined") {
      return 1;
    }
    try {
      const val = window.localStorage.getItem(volumePersistenceKey ?? DEFAULT_VOLUME_PERSISTANCE_KEY);
      return val ? Number(val) : 1;
    } catch {
      return 1;
    }
  };
  var PLAYER_COMP_ID = "player-comp";
  var SharedPlayerContexts = ({
    children,
    timelineContext,
    fps,
    compositionHeight,
    compositionWidth,
    durationInFrames,
    component,
    numberOfSharedAudioTags,
    initiallyMuted,
    logLevel,
    audioLatencyHint,
    volumePersistenceKey
  }) => {
    const compositionManagerContext = (0, import_react92.useMemo)(() => {
      const context = {
        compositions: [
          {
            component,
            durationInFrames,
            height: compositionHeight,
            width: compositionWidth,
            fps,
            id: PLAYER_COMP_ID,
            nonce: 777,
            folderName: null,
            parentFolderName: null,
            schema: null,
            calculateMetadata: null
          }
        ],
        folders: [],
        currentCompositionMetadata: null,
        canvasContent: { type: "composition", compositionId: "player-comp" }
      };
      return context;
    }, [component, durationInFrames, compositionHeight, compositionWidth, fps]);
    const [mediaMuted, setMediaMuted] = (0, import_react92.useState)(() => initiallyMuted);
    const [mediaVolume, setMediaVolume] = (0, import_react92.useState)(() => getPreferredVolume(volumePersistenceKey ?? null));
    const mediaVolumeContextValue = (0, import_react92.useMemo)(() => {
      return {
        mediaMuted,
        mediaVolume
      };
    }, [mediaMuted, mediaVolume]);
    const setMediaVolumeAndPersist = (0, import_react92.useCallback)((vol) => {
      setMediaVolume(vol);
      persistVolume(vol, logLevel, volumePersistenceKey ?? null);
    }, [logLevel, volumePersistenceKey]);
    const setMediaVolumeContextValue = (0, import_react92.useMemo)(() => {
      return {
        setMediaMuted,
        setMediaVolume: setMediaVolumeAndPersist
      };
    }, [setMediaVolumeAndPersist]);
    const logLevelContext = (0, import_react92.useMemo)(() => {
      return {
        logLevel,
        mountTime: Date.now()
      };
    }, [logLevel]);
    const env = (0, import_react92.useMemo)(() => {
      return {
        isPlayer: true,
        isRendering: false,
        isStudio: false,
        isClientSideRendering: false,
        isReadOnlyStudio: false
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.RemotionEnvironmentContext.Provider, {
      value: env,
      children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.LogLevelContext.Provider, {
        value: logLevelContext,
        children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.CanUseRemotionHooksProvider, {
          children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.Timeline.TimelineContext.Provider, {
            value: timelineContext,
            children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.CompositionManager.Provider, {
              value: compositionManagerContext,
              children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.ResolveCompositionConfig, {
                children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.PrefetchProvider, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.DurationsContextProvider, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.MediaVolumeContext.Provider, {
                      value: mediaVolumeContextValue,
                      children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.SetMediaVolumeContext.Provider, {
                        value: setMediaVolumeContextValue,
                        children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.SharedAudioContextProvider, {
                          numberOfAudioTags: numberOfSharedAudioTags,
                          component,
                          audioLatencyHint,
                          children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Internals.BufferingProvider, {
                            children
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  var warningShown = false;
  var acknowledgeRemotionLicenseMessage = (acknowledge, logLevel) => {
    if (acknowledge) {
      return;
    }
    if (warningShown) {
      return;
    }
    warningShown = true;
    Internals.Log.warn({ logLevel, tag: null }, "Note: Some companies are required to obtain a license to use Remotion. See: https://remotion.dev/license\nPass the `acknowledgeRemotionLicense` prop to `<Player />` function to make this message disappear.");
  };
  var validateSingleFrame = (frame, variableName) => {
    if (typeof frame === "undefined" || frame === null) {
      return frame ?? null;
    }
    if (typeof frame !== "number") {
      throw new TypeError(`"${variableName}" must be a number, but is ${JSON.stringify(frame)}`);
    }
    if (Number.isNaN(frame)) {
      throw new TypeError(`"${variableName}" must not be NaN, but is ${JSON.stringify(frame)}`);
    }
    if (!Number.isFinite(frame)) {
      throw new TypeError(`"${variableName}" must be finite, but is ${JSON.stringify(frame)}`);
    }
    if (frame % 1 !== 0) {
      throw new TypeError(`"${variableName}" must be an integer, but is ${JSON.stringify(frame)}`);
    }
    return frame;
  };
  var validateInOutFrames = ({
    inFrame,
    durationInFrames,
    outFrame
  }) => {
    const validatedInFrame = validateSingleFrame(inFrame, "inFrame");
    const validatedOutFrame = validateSingleFrame(outFrame, "outFrame");
    if (validatedInFrame === null && validatedOutFrame === null) {
      return;
    }
    if (validatedInFrame !== null && validatedInFrame > durationInFrames - 1) {
      throw new Error("inFrame must be less than (durationInFrames - 1), but is " + validatedInFrame);
    }
    if (validatedOutFrame !== null && validatedOutFrame > durationInFrames - 1) {
      throw new Error("outFrame must be less than (durationInFrames - 1), but is " + validatedOutFrame);
    }
    if (validatedInFrame !== null && validatedInFrame < 0) {
      throw new Error("inFrame must be greater than 0, but is " + validatedInFrame);
    }
    if (validatedOutFrame !== null && validatedOutFrame <= 0) {
      throw new Error(`outFrame must be greater than 0, but is ${validatedOutFrame}. If you want to render a single frame, use <Thumbnail /> instead.`);
    }
    if (validatedOutFrame !== null && validatedInFrame !== null && validatedOutFrame <= validatedInFrame) {
      throw new Error("outFrame must be greater than inFrame, but is " + validatedOutFrame + " <= " + validatedInFrame);
    }
  };
  var validateInitialFrame = ({
    initialFrame,
    durationInFrames
  }) => {
    if (typeof durationInFrames !== "number") {
      throw new Error(`\`durationInFrames\` must be a number, but is ${JSON.stringify(durationInFrames)}`);
    }
    if (typeof initialFrame === "undefined") {
      return;
    }
    if (typeof initialFrame !== "number") {
      throw new Error(`\`initialFrame\` must be a number, but is ${JSON.stringify(initialFrame)}`);
    }
    if (Number.isNaN(initialFrame)) {
      throw new Error(`\`initialFrame\` must be a number, but is NaN`);
    }
    if (!Number.isFinite(initialFrame)) {
      throw new Error(`\`initialFrame\` must be a number, but is Infinity`);
    }
    if (initialFrame % 1 !== 0) {
      throw new Error(`\`initialFrame\` must be an integer, but is ${JSON.stringify(initialFrame)}`);
    }
    if (initialFrame > durationInFrames - 1) {
      throw new Error(`\`initialFrame\` must be less or equal than \`durationInFrames - 1\`, but is ${JSON.stringify(initialFrame)}`);
    }
  };
  var validatePlaybackRate = (playbackRate) => {
    if (playbackRate === void 0) {
      return;
    }
    if (playbackRate > 4) {
      throw new Error(`The highest possible playback rate is 4. You passed: ${playbackRate}`);
    }
    if (playbackRate < -4) {
      throw new Error(`The lowest possible playback rate is -4. You passed: ${playbackRate}`);
    }
    if (playbackRate === 0) {
      throw new Error(`A playback rate of 0 is not supported.`);
    }
  };
  var validateFps3 = NoReactInternals.validateFps;
  var validateDimension3 = NoReactInternals.validateDimension;
  var validateDurationInFrames3 = NoReactInternals.validateDurationInFrames;
  var validateDefaultAndInputProps3 = NoReactInternals.validateDefaultAndInputProps;
  var componentOrNullIfLazy = (props) => {
    if ("component" in props) {
      return props.component;
    }
    return null;
  };
  var PlayerFn = ({
    durationInFrames,
    compositionHeight,
    compositionWidth,
    fps,
    inputProps,
    style: style2,
    controls = false,
    loop = false,
    autoPlay = false,
    showVolumeControls = true,
    allowFullscreen = true,
    clickToPlay,
    doubleClickToFullscreen = false,
    spaceKeyToPlayOrPause = true,
    moveToBeginningWhenEnded = true,
    numberOfSharedAudioTags = 5,
    errorFallback = () => "\u26A0\uFE0F",
    playbackRate = 1,
    renderLoading,
    className: className2,
    showPosterWhenUnplayed,
    showPosterWhenEnded,
    showPosterWhenPaused,
    showPosterWhenBuffering,
    showPosterWhenBufferingAndPaused,
    initialFrame,
    renderPoster,
    inFrame,
    outFrame,
    initiallyShowControls,
    renderFullscreenButton,
    renderPlayPauseButton,
    renderVolumeSlider,
    alwaysShowControls = false,
    initiallyMuted = false,
    showPlaybackRateControl = false,
    posterFillMode = "player-size",
    bufferStateDelayInMilliseconds,
    hideControlsWhenPointerDoesntMove = true,
    overflowVisible = false,
    renderMuteButton,
    browserMediaControlsBehavior: passedBrowserMediaControlsBehavior,
    overrideInternalClassName,
    logLevel = "info",
    noSuspense,
    acknowledgeRemotionLicense,
    audioLatencyHint = "interactive",
    volumePersistenceKey,
    ...componentProps
  }, ref) => {
    if (typeof window !== "undefined") {
      window.remotion_isPlayer = true;
    }
    if (componentProps.defaultProps !== void 0) {
      throw new Error("The <Player /> component does not accept `defaultProps`, but some were passed. Use `inputProps` instead.");
    }
    const componentForValidation = componentOrNullIfLazy(componentProps);
    if (componentForValidation?.type === Composition) {
      throw new TypeError(`'component' should not be an instance of <Composition/>. Pass the React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.`);
    }
    if (componentForValidation === Composition) {
      throw new TypeError(`'component' must not be the 'Composition' component. Pass your own React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.`);
    }
    (0, import_react78.useState)(() => acknowledgeRemotionLicenseMessage(Boolean(acknowledgeRemotionLicense), logLevel));
    const component = Internals.useLazyComponent({
      compProps: componentProps,
      componentName: "Player",
      noSuspense: Boolean(noSuspense)
    });
    validateInitialFrame({ initialFrame, durationInFrames });
    const [frame, setFrame] = (0, import_react78.useState)(() => ({
      [PLAYER_COMP_ID]: initialFrame ?? 0
    }));
    const [playing, setPlaying] = (0, import_react78.useState)(false);
    const [rootId] = (0, import_react78.useState)("player-comp");
    const rootRef = (0, import_react78.useRef)(null);
    const audioAndVideoTags = (0, import_react78.useRef)([]);
    const imperativePlaying = (0, import_react78.useRef)(false);
    const [currentPlaybackRate, setCurrentPlaybackRate] = (0, import_react78.useState)(playbackRate);
    if (typeof compositionHeight !== "number") {
      throw new TypeError(`'compositionHeight' must be a number but got '${typeof compositionHeight}' instead`);
    }
    if (typeof compositionWidth !== "number") {
      throw new TypeError(`'compositionWidth' must be a number but got '${typeof compositionWidth}' instead`);
    }
    validateDimension3(compositionHeight, "compositionHeight", "of the <Player /> component");
    validateDimension3(compositionWidth, "compositionWidth", "of the <Player /> component");
    validateDurationInFrames3(durationInFrames, {
      component: "of the <Player/> component",
      allowFloats: false
    });
    validateFps3(fps, "as a prop of the <Player/> component", false);
    validateDefaultAndInputProps3(inputProps, "inputProps", null);
    validateInOutFrames({
      durationInFrames,
      inFrame,
      outFrame
    });
    if (typeof controls !== "boolean" && typeof controls !== "undefined") {
      throw new TypeError(`'controls' must be a boolean or undefined but got '${typeof controls}' instead`);
    }
    if (typeof autoPlay !== "boolean" && typeof autoPlay !== "undefined") {
      throw new TypeError(`'autoPlay' must be a boolean or undefined but got '${typeof autoPlay}' instead`);
    }
    if (typeof loop !== "boolean" && typeof loop !== "undefined") {
      throw new TypeError(`'loop' must be a boolean or undefined but got '${typeof loop}' instead`);
    }
    if (typeof doubleClickToFullscreen !== "boolean" && typeof doubleClickToFullscreen !== "undefined") {
      throw new TypeError(`'doubleClickToFullscreen' must be a boolean or undefined but got '${typeof doubleClickToFullscreen}' instead`);
    }
    if (typeof showVolumeControls !== "boolean" && typeof showVolumeControls !== "undefined") {
      throw new TypeError(`'showVolumeControls' must be a boolean or undefined but got '${typeof showVolumeControls}' instead`);
    }
    if (typeof allowFullscreen !== "boolean" && typeof allowFullscreen !== "undefined") {
      throw new TypeError(`'allowFullscreen' must be a boolean or undefined but got '${typeof allowFullscreen}' instead`);
    }
    if (typeof clickToPlay !== "boolean" && typeof clickToPlay !== "undefined") {
      throw new TypeError(`'clickToPlay' must be a boolean or undefined but got '${typeof clickToPlay}' instead`);
    }
    if (typeof spaceKeyToPlayOrPause !== "boolean" && typeof spaceKeyToPlayOrPause !== "undefined") {
      throw new TypeError(`'spaceKeyToPlayOrPause' must be a boolean or undefined but got '${typeof spaceKeyToPlayOrPause}' instead`);
    }
    if (typeof numberOfSharedAudioTags !== "number" || numberOfSharedAudioTags % 1 !== 0 || !Number.isFinite(numberOfSharedAudioTags) || Number.isNaN(numberOfSharedAudioTags) || numberOfSharedAudioTags < 0) {
      throw new TypeError(`'numberOfSharedAudioTags' must be an integer but got '${numberOfSharedAudioTags}' instead`);
    }
    validatePlaybackRate(currentPlaybackRate);
    (0, import_react78.useEffect)(() => {
      setCurrentPlaybackRate(playbackRate);
    }, [playbackRate]);
    (0, import_react78.useImperativeHandle)(ref, () => rootRef.current, []);
    (0, import_react78.useState)(() => {
      Internals.playbackLogging({
        logLevel,
        message: `[player] Mounting <Player>. User agent = ${typeof navigator === "undefined" ? "server" : navigator.userAgent}`,
        tag: "player",
        mountTime: Date.now()
      });
    });
    const timelineContextValue = (0, import_react78.useMemo)(() => {
      return {
        frame,
        playing,
        rootId,
        playbackRate: currentPlaybackRate,
        imperativePlaying,
        setPlaybackRate: (rate) => {
          setCurrentPlaybackRate(rate);
        },
        audioAndVideoTags
      };
    }, [frame, currentPlaybackRate, playing, rootId]);
    const setTimelineContextValue = (0, import_react78.useMemo)(() => {
      return {
        setFrame,
        setPlaying
      };
    }, [setFrame]);
    if (typeof window !== "undefined") {
      (0, import_react78.useLayoutEffect)(() => {
        Internals.CSSUtils.injectCSS(Internals.CSSUtils.makeDefaultPreviewCSS(`.${playerCssClassname(overrideInternalClassName)}`, "#fff"));
      }, [overrideInternalClassName]);
    }
    const actualInputProps = (0, import_react78.useMemo)(() => inputProps ?? {}, [inputProps]);
    const browserMediaControlsBehavior = (0, import_react78.useMemo)(() => {
      return passedBrowserMediaControlsBehavior ?? {
        mode: "prevent-media-session"
      };
    }, [passedBrowserMediaControlsBehavior]);
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Internals.IsPlayerContextProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(SharedPlayerContexts, {
        timelineContext: timelineContextValue,
        component,
        compositionHeight,
        compositionWidth,
        durationInFrames,
        fps,
        numberOfSharedAudioTags,
        initiallyMuted,
        logLevel,
        audioLatencyHint,
        volumePersistenceKey,
        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Internals.Timeline.SetTimelineContext.Provider, {
          value: setTimelineContextValue,
          children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(PlayerEmitterProvider, {
            currentPlaybackRate,
            children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(PlayerUI_default, {
              ref: rootRef,
              posterFillMode,
              renderLoading,
              autoPlay: Boolean(autoPlay),
              loop: Boolean(loop),
              controls: Boolean(controls),
              errorFallback,
              style: style2,
              inputProps: actualInputProps,
              allowFullscreen: Boolean(allowFullscreen),
              moveToBeginningWhenEnded: Boolean(moveToBeginningWhenEnded),
              clickToPlay: typeof clickToPlay === "boolean" ? clickToPlay : Boolean(controls),
              showVolumeControls: Boolean(showVolumeControls),
              doubleClickToFullscreen: Boolean(doubleClickToFullscreen),
              spaceKeyToPlayOrPause: Boolean(spaceKeyToPlayOrPause),
              playbackRate: currentPlaybackRate,
              className: className2 ?? void 0,
              showPosterWhenUnplayed: Boolean(showPosterWhenUnplayed),
              showPosterWhenEnded: Boolean(showPosterWhenEnded),
              showPosterWhenPaused: Boolean(showPosterWhenPaused),
              showPosterWhenBuffering: Boolean(showPosterWhenBuffering),
              showPosterWhenBufferingAndPaused: Boolean(showPosterWhenBufferingAndPaused),
              renderPoster,
              inFrame: inFrame ?? null,
              outFrame: outFrame ?? null,
              initiallyShowControls: initiallyShowControls ?? true,
              renderFullscreen: renderFullscreenButton ?? null,
              renderPlayPauseButton: renderPlayPauseButton ?? null,
              renderMuteButton: renderMuteButton ?? null,
              renderVolumeSlider: renderVolumeSlider ?? null,
              alwaysShowControls,
              showPlaybackRateControl,
              bufferStateDelayInMilliseconds: bufferStateDelayInMilliseconds ?? 300,
              hideControlsWhenPointerDoesntMove,
              overflowVisible,
              browserMediaControlsBehavior,
              overrideInternalClassName: overrideInternalClassName ?? void 0,
              noSuspense: Boolean(noSuspense)
            })
          })
        })
      })
    });
  };
  var forward = import_react78.forwardRef;
  var Player = forward(PlayerFn);
  var useThumbnail = () => {
    const emitter = (0, import_react95.useContext)(ThumbnailEmitterContext);
    if (!emitter) {
      throw new TypeError("Expected Player event emitter context");
    }
    const returnValue = (0, import_react95.useMemo)(() => {
      return {
        emitter
      };
    }, [emitter]);
    return returnValue;
  };
  var reactVersion2 = import_react94.default.version.split(".")[0];
  if (reactVersion2 === "0") {
    throw new Error(`Version ${reactVersion2} of "react" is not supported by Remotion`);
  }
  var doesReactVersionSupportSuspense2 = parseInt(reactVersion2, 10) >= 18;
  var ThumbnailUI = ({
    style: style2,
    inputProps,
    errorFallback,
    renderLoading,
    className: className2,
    overflowVisible,
    noSuspense,
    overrideInternalClassName
  }, ref) => {
    const config = Internals.useUnsafeVideoConfig();
    const video = Internals.useVideo();
    const container2 = (0, import_react94.useRef)(null);
    const canvasSize = useElementSize(container2, {
      triggerOnWindowResize: false,
      shouldApplyCssTransforms: false
    });
    const layout = (0, import_react94.useMemo)(() => {
      if (!config || !canvasSize) {
        return null;
      }
      return calculateCanvasTransformation({
        canvasSize,
        compositionHeight: config.height,
        compositionWidth: config.width,
        previewSize: "auto"
      });
    }, [canvasSize, config]);
    const scale = layout?.scale ?? 1;
    const thumbnail = useThumbnail();
    useBufferStateEmitter(thumbnail.emitter);
    (0, import_react94.useImperativeHandle)(ref, () => {
      const methods = {
        getContainerNode: () => container2.current,
        getScale: () => scale
      };
      return Object.assign(thumbnail.emitter, methods);
    }, [scale, thumbnail.emitter]);
    const VideoComponent = video ? video.component : null;
    const outerStyle = (0, import_react94.useMemo)(() => {
      return calculateOuterStyle({
        config,
        style: style2,
        canvasSize,
        overflowVisible,
        layout
      });
    }, [canvasSize, config, layout, overflowVisible, style2]);
    const outer = (0, import_react94.useMemo)(() => {
      return calculateOuter({ config, layout, scale, overflowVisible });
    }, [config, layout, overflowVisible, scale]);
    const containerStyle3 = (0, import_react94.useMemo)(() => {
      return calculateContainerStyle({
        config,
        layout,
        scale,
        overflowVisible
      });
    }, [config, layout, overflowVisible, scale]);
    const onError = (0, import_react94.useCallback)((error2) => {
      thumbnail.emitter.dispatchError(error2);
    }, [thumbnail.emitter]);
    const loadingMarkup = (0, import_react94.useMemo)(() => {
      return renderLoading ? renderLoading({
        height: outerStyle.height,
        width: outerStyle.width,
        isBuffering: false
      }) : null;
    }, [outerStyle.height, outerStyle.width, renderLoading]);
    const currentScaleContext = (0, import_react94.useMemo)(() => {
      return {
        type: "scale",
        scale
      };
    }, [scale]);
    if (!config) {
      return null;
    }
    const content = /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", {
      style: outer,
      children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", {
        style: containerStyle3,
        className: playerCssClassname(overrideInternalClassName),
        children: VideoComponent ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ErrorBoundary, {
          onError,
          errorFallback,
          children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Internals.CurrentScaleContext.Provider, {
            value: currentScaleContext,
            children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(VideoComponent, {
              ...video?.props ?? {},
              ...inputProps ?? {}
            })
          })
        }) : null
      })
    });
    if (noSuspense || IS_NODE && !doesReactVersionSupportSuspense2) {
      return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", {
        ref: container2,
        style: outerStyle,
        className: className2,
        children: content
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", {
      ref: container2,
      style: outerStyle,
      className: className2,
      children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react94.Suspense, {
        fallback: loadingMarkup,
        children: content
      })
    });
  };
  var ThumbnailUI_default = (0, import_react94.forwardRef)(ThumbnailUI);
  var ThumbnailFn = ({
    frameToDisplay,
    style: style2,
    inputProps,
    compositionHeight,
    compositionWidth,
    durationInFrames,
    fps,
    className: className2,
    errorFallback = () => "\u26A0\uFE0F",
    renderLoading,
    overflowVisible = false,
    overrideInternalClassName,
    logLevel = "info",
    noSuspense,
    ...componentProps
  }, ref) => {
    if (typeof window !== "undefined") {
      (0, import_react93.useLayoutEffect)(() => {
        window.remotion_isPlayer = true;
      }, []);
    }
    const [thumbnailId] = (0, import_react93.useState)(() => String(random(null)));
    const rootRef = (0, import_react93.useRef)(null);
    const timelineState = (0, import_react93.useMemo)(() => {
      const value = {
        playing: false,
        frame: {
          [PLAYER_COMP_ID]: frameToDisplay
        },
        rootId: thumbnailId,
        imperativePlaying: {
          current: false
        },
        playbackRate: 1,
        setPlaybackRate: () => {
          throw new Error("thumbnail");
        },
        audioAndVideoTags: { current: [] }
      };
      return value;
    }, [frameToDisplay, thumbnailId]);
    (0, import_react93.useImperativeHandle)(ref, () => rootRef.current, []);
    const Component = Internals.useLazyComponent({
      compProps: componentProps,
      componentName: "Thumbnail",
      noSuspense: Boolean(noSuspense)
    });
    const [emitter] = (0, import_react93.useState)(() => new ThumbnailEmitter());
    const passedInputProps = (0, import_react93.useMemo)(() => {
      return inputProps ?? {};
    }, [inputProps]);
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Internals.IsPlayerContextProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(SharedPlayerContexts, {
        timelineContext: timelineState,
        component: Component,
        compositionHeight,
        compositionWidth,
        durationInFrames,
        fps,
        numberOfSharedAudioTags: 0,
        initiallyMuted: true,
        logLevel,
        audioLatencyHint: "playback",
        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ThumbnailEmitterContext.Provider, {
          value: emitter,
          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ThumbnailUI_default, {
            ref: rootRef,
            className: className2,
            errorFallback,
            inputProps: passedInputProps,
            renderLoading,
            style: style2,
            overflowVisible,
            overrideInternalClassName,
            noSuspense: Boolean(noSuspense)
          })
        })
      })
    });
  };
  var forward2 = import_react93.forwardRef;
  var Thumbnail = forward2(ThumbnailFn);

  // src/poc/components/BrightBackground.tsx
  var import_jsx_runtime52 = __toESM(require_jsx_runtime());
  var BrightBackground = ({ brand }) => {
    const frame = useCurrentFrame();
    const float1 = Math.sin(frame * 0.02) * 30;
    const float2 = Math.cos(frame * 0.015) * 40;
    const rotate2 = interpolate(frame, [0, 900], [0, 360], { easing: Easing.linear });
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 50%, #ffffff 100%)",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: {
        position: "absolute",
        top: `${20 + float1}%`,
        left: `${15}%`,
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${brand}15, transparent 70%)`,
        filter: "blur(60px)"
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: {
        position: "absolute",
        bottom: `${10 + float2}%`,
        right: `${10}%`,
        width: 700,
        height: 700,
        borderRadius: "50%",
        background: `radial-gradient(circle, #10b98120, transparent 70%)`,
        filter: "blur(70px)"
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 800,
        height: 800,
        transform: `translate(-50%, -50%) rotate(${rotate2}deg)`,
        background: `conic-gradient(from 0deg, transparent 0%, ${brand}08 25%, transparent 50%, #10b98108 75%, transparent 100%)`,
        filter: "blur(80px)",
        opacity: 0.5
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(${brand}03 1px, transparent 1px),
          linear-gradient(90deg, ${brand}03 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        opacity: 0.3
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(255,255,255,.4) 100%)"
      } })
    ] });
  };

  // src/poc/components/HeroOpener.tsx
  var import_jsx_runtime53 = __toESM(require_jsx_runtime());
  var HeroOpener = ({ name, frame, brand }) => {
    const { fps } = useVideoConfig();
    const fadeIn = interpolate(frame, [0, 30], [0, 1], {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: "clamp"
    });
    const slideUp = interpolate(frame, [10, 40], [50, 0], {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: "clamp"
    });
    const scaleIn = spring({ frame: frame - 20, fps, config: { damping: 15, mass: 0.5 } });
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity: fadeIn,
      transform: `translateY(${slideUp}px)`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { style: {
        fontSize: 28,
        fontWeight: 600,
        color: "#64748b",
        marginBottom: 24,
        letterSpacing: 2,
        textTransform: "uppercase"
      }, children: "Imagine Yourself" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { style: {
        fontSize: 92,
        fontWeight: 900,
        color: "#0f172a",
        textAlign: "center",
        lineHeight: 1.1,
        marginBottom: 32,
        background: `linear-gradient(135deg, #0f172a 0%, ${brand} 100%)`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }, children: [
        name,
        ", 6 Months",
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
        "From Now"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { style: {
        fontSize: 32,
        fontWeight: 500,
        color: "#475569",
        textAlign: "center",
        maxWidth: 900,
        lineHeight: 1.6,
        marginBottom: 48,
        transform: `scale(${scaleIn})`,
        opacity: frame > 20 ? 1 : 0
      }, children: [
        "Healthier. Happier. More confident.",
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { style: { color: brand, fontWeight: 700 }, children: "This isn't just a dream \u2014 it's your future." })
      ] }),
      frame > 40 && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { style: {
        padding: "16px 32px",
        background: `${brand}15`,
        border: `2px solid ${brand}40`,
        borderRadius: 16,
        color: brand,
        fontWeight: 700,
        fontSize: 20,
        animation: "pulse 2s ease-in-out infinite"
      }, children: "\u2728 Your transformation starts here" })
    ] });
  };

  // src/poc/components/TransformationVision.tsx
  var import_jsx_runtime54 = __toESM(require_jsx_runtime());
  var TransformationVision = ({ startWeight, goalWeight, frame, brand }) => {
    const { fps, width, height } = useVideoConfig();
    const isMobile = height > width;
    const fadeIn = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });
    const weightLoss = startWeight - goalWeight;
    const transformProgress = spring({ frame: frame - 20, fps, config: { damping: 20 } });
    const currentDisplay = Math.round(startWeight - weightLoss * transformProgress);
    return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: fadeIn
    }, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { style: {
      maxWidth: isMobile ? "100%" : 1400,
      width: "100%",
      padding: isMobile ? "60px 40px" : "0 80px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { style: {
        fontSize: isMobile ? 42 : 48,
        fontWeight: 900,
        color: "#0f172a",
        textAlign: "center",
        marginBottom: isMobile ? 50 : 60,
        lineHeight: 1.1
      }, children: [
        "Imagine ",
        Math.abs(weightLoss),
        " lbs Lighter\u2026"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: isMobile ? 30 : 40,
        marginBottom: isMobile ? 50 : 80
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { style: {
          width: isMobile ? "100%" : 400,
          padding: isMobile ? 36 : 48,
          background: "white",
          borderRadius: 24,
          boxShadow: "0 10px 40px rgba(0,0,0,.08)",
          border: "2px solid #e2e8f0",
          textAlign: "center",
          opacity: frame > 20 ? 0.6 : 1,
          transition: "opacity 0.5s ease"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { style: {
            width: isMobile ? 140 : 180,
            height: isMobile ? 140 : 180,
            margin: "0 auto 20px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: isMobile ? 56 : 72,
            fontWeight: 900,
            color: "#991b1b"
          }, children: startWeight }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { style: {
            fontSize: isMobile ? 20 : 24,
            fontWeight: 700,
            color: "#64748b",
            marginBottom: 8
          }, children: "Today" }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { style: {
            fontSize: isMobile ? 15 : 18,
            color: "#94a3b8"
          }, children: "Starting weight" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { style: {
          fontSize: isMobile ? 48 : 64,
          color: brand,
          fontWeight: 900,
          transform: isMobile ? "rotate(90deg)" : "none"
        }, children: "\u2192" }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { style: {
          width: isMobile ? "100%" : 400,
          padding: isMobile ? 36 : 48,
          background: `linear-gradient(135deg, white 0%, ${brand}08 100%)`,
          borderRadius: 24,
          boxShadow: `0 20px 60px ${brand}30`,
          border: `3px solid ${brand}`,
          textAlign: "center",
          transform: frame > 20 ? "scale(1.03)" : "scale(1)",
          transition: "transform 0.5s ease"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { style: {
            width: isMobile ? 140 : 180,
            height: isMobile ? 140 : 180,
            margin: "0 auto 20px",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${brand}20 0%, ${brand}40 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: isMobile ? 56 : 72,
            fontWeight: 900,
            color: brand,
            boxShadow: `0 10px 30px ${brand}40`
          }, children: frame > 20 ? currentDisplay : goalWeight }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { style: {
            fontSize: isMobile ? 20 : 24,
            fontWeight: 700,
            color: brand,
            marginBottom: 8
          }, children: "Your Goal" }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { style: {
            fontSize: isMobile ? 15 : 18,
            color: "#64748b",
            fontWeight: 600,
            lineHeight: 1.4
          }, children: [
            Math.abs(weightLoss),
            " lbs lighter",
            /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("br", {}),
            "More energy \u2022 Better health"
          ] })
        ] })
      ] }),
      frame > 60 && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { style: {
        marginTop: isMobile ? 40 : 80,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
        gap: isMobile ? 20 : 24
      }, children: [
        { text: "Doctor-Prescribed & Monitored for Safety" },
        { text: "Clinically Proven, Real Results" },
        { text: "Reduces Food Noise & Cravings" },
        { text: "Sustainable Weight Loss & Better Health" }
      ].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: isMobile ? 16 : 0,
        flexDirection: isMobile ? "row" : "column",
        padding: isMobile ? "20px 24px" : 24,
        background: "white",
        borderRadius: 16,
        textAlign: isMobile ? "left" : "center",
        boxShadow: "0 4px 20px rgba(0,0,0,.06)",
        opacity: interpolate(frame, [60 + i * 5, 75 + i * 5], [0, 1], { extrapolateRight: "clamp" }),
        transform: `translateY(${interpolate(frame, [60 + i * 5, 75 + i * 5], [20, 0], { extrapolateRight: "clamp" })}px)`
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { style: {
          fontSize: isMobile ? 36 : 40,
          flexShrink: 0
        }, children: item.icon }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { style: {
          fontSize: isMobile ? 18 : 18,
          fontWeight: 700,
          color: "#1e293b",
          lineHeight: 1.3
        }, children: item.text })
      ] }, i)) })
    ] }) });
  };

  // src/poc/components/MeetYourTeam.tsx
  var import_jsx_runtime55 = __toESM(require_jsx_runtime());
  var MeetYourTeam = ({ frame, brand }) => {
    const { width, height } = useVideoConfig();
    const isMobile = height > width;
    const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: fadeIn,
      padding: isMobile ? "60px 40px" : "0 80px"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { style: { maxWidth: isMobile ? "100%" : 1400, width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: {
        fontSize: isMobile ? 42 : 56,
        fontWeight: 900,
        color: "#0f172a",
        textAlign: "center",
        marginBottom: isMobile ? 16 : 24,
        lineHeight: 1.1
      }, children: "Meet Your Personal Care Team" }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { style: {
        fontSize: isMobile ? 18 : 24,
        color: "#64748b",
        textAlign: "center",
        marginBottom: isMobile ? 40 : 80,
        fontWeight: 500,
        padding: isMobile ? "0 20px" : "0",
        lineHeight: 1.4
      }, children: [
        "Your dedicated team knows you, your goals, and your journey \u2014 every step of the way. Unlike other companies, you\u2019ll always speak with the same trusted experts who stay with you from start to finish. ",
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { style: { color: brand, fontWeight: 700 }, children: "No outsourced companies." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { style: {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 40 : 60,
        maxWidth: isMobile ? "100%" : 1200,
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
          TeamMember,
          {
            name: "Dr. Michael Fitch",
            role: "Your GOAL.MD Physician",
            description: "Your GOAL.MD Physician Board-certified in weight management and metabolic health, Dr. Fitch personally oversees your progress and treatment.",
            frame,
            delay: 20,
            brand,
            imageUrl: "https://assets.cdn.filesafe.space/LchNNcx4oSFzaphyXK3t/media/689d01e1d232a3b5c315a965.png",
            highlights: [
              "Safe prescriptions with real oversight",
              "Direct monthly check-ins with your physician",
              "Personalized dosing for maximum results"
            ],
            isMobile
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
          TeamMember,
          {
            name: "Betsy Moeller",
            role: "Your Nutritional Coach",
            description: "Nutrition coach helping you turn results into lasting success through practical, sustainable strategies.",
            frame,
            delay: 35,
            brand,
            imageUrl: "https://storage.googleapis.com/msgsndr/LchNNcx4oSFzaphyXK3t/media/68b87a79ca12c66425fd793c.png",
            highlights: [
              "Custom meal planning for your lifestyle",
              "Weekly accountability to keep you on track",
              "Nutrition strategies that prevent plateaus"
            ],
            isMobile
          }
        )
      ] }),
      frame > 80 && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: {
        marginTop: isMobile ? 40 : 60,
        textAlign: "center",
        opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" })
      }, children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { style: {
        display: "inline-block",
        padding: isMobile ? "16px 28px" : "20px 40px",
        background: "white",
        borderRadius: 16,
        boxShadow: "0 10px 40px rgba(0,0,0,.08)",
        border: `2px solid ${brand}30`
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: {
          fontSize: isMobile ? 14 : 18,
          color: "#64748b",
          marginBottom: 8
        }, children: "Available to you" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: {
          fontSize: isMobile ? 24 : 32,
          fontWeight: 900,
          color: brand
        }, children: "24/7 via secure messaging" })
      ] }) })
    ] }) });
  };
  var TeamMember = ({ name, role, description, frame, delay: delay2, brand, imageUrl, highlights, isMobile }) => {
    const opacity = interpolate(frame, [delay2, delay2 + 20], [0, 1], {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: "clamp"
    });
    const slideY = interpolate(frame, [delay2, delay2 + 25], [40, 0], {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: "clamp"
    });
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { style: {
      flex: 1,
      padding: isMobile ? 32 : 40,
      background: "white",
      borderRadius: 24,
      boxShadow: "0 20px 60px rgba(0,0,0,.1)",
      border: `3px solid ${brand}20`,
      opacity,
      transform: `translateY(${slideY}px)`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: {
        width: isMobile ? 140 : 160,
        height: isMobile ? 140 : 160,
        borderRadius: "50%",
        margin: "0 auto 24px",
        border: `4px solid ${brand}`,
        boxShadow: `0 10px 30px ${brand}30`,
        overflow: "hidden",
        background: "#f1f5f9"
      }, children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
        Img,
        {
          src: imageUrl,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: {
        fontSize: isMobile ? 28 : 36,
        fontWeight: 900,
        color: "#0f172a",
        textAlign: "center",
        marginBottom: 8,
        lineHeight: 1.2
      }, children: name }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: {
        fontSize: isMobile ? 16 : 20,
        fontWeight: 700,
        color: brand,
        textAlign: "center",
        marginBottom: 24,
        lineHeight: 1.3
      }, children: role }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: {
        fontSize: isMobile ? 16 : 18,
        color: "#64748b",
        textAlign: "center",
        lineHeight: 1.6,
        marginBottom: 28
      }, children: description }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: {
        background: `${brand}08`,
        borderRadius: 12,
        padding: isMobile ? 16 : 20
      }, children: highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: i < highlights.length - 1 ? 12 : 0,
        fontSize: isMobile ? 15 : 16,
        fontWeight: 600,
        color: "#1e293b"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { style: { color: brand, fontSize: isMobile ? 18 : 20 }, children: "\u2713" }),
        highlight
      ] }, i)) })
    ] });
  };

  // src/poc/components/YourJourneyTimeline.tsx
  var import_jsx_runtime56 = __toESM(require_jsx_runtime());
  var YourJourneyTimeline = ({ startWeight, currentWeight, goalWeight, milestones, etaToGoal, frame, brand }) => {
    const { width, height } = useVideoConfig();
    const isMobile = height > width;
    const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
    const monthsToGoal = Math.ceil(etaToGoal / 4);
    const months = [0, 1, 2, 3, 4];
    const weights = months.map((m) => {
      const x = m - 2;
      return startWeight - (startWeight - goalWeight) * (1 / (1 + Math.exp(-1.2 * x)));
    });
    const chartWidth = isMobile ? width - 80 : Math.min(width - 200, 900);
    const chartHeight = isMobile ? height * 0.3 : 300;
    const padding = {
      top: 50,
      right: isMobile ? 35 : 50,
      bottom: 50,
      left: isMobile ? 55 : 65
    };
    const plotWidth = chartWidth - padding.left - padding.right;
    const plotHeight = chartHeight - padding.top - padding.bottom;
    const maxWeight = Math.ceil(Math.max(...weights) / 10) * 10 + 8;
    const minWeight = Math.floor(Math.min(...weights) / 10) * 10 - 8;
    const weightRange = maxWeight - minWeight;
    const xScale = (index) => padding.left + index / (months.length - 1) * plotWidth;
    const yScale = (weight) => padding.top + (maxWeight - weight) / weightRange * plotHeight;
    const lineProgress = interpolate(frame, [50, 110], [0, 1], {
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.33, 1, 0.68, 1)
    });
    const linePath = weights.map((w, i) => {
      const x = xScale(i);
      const y = yScale(w);
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    }).join(" ");
    const totalPathLength = plotWidth * 1.5;
    const yTicks = [minWeight, Math.round((minWeight + maxWeight) / 2), maxWeight];
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      opacity: fadeIn,
      padding: isMobile ? "20px 20px" : "30px 80px",
      background: "linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { style: { textAlign: "center", marginBottom: isMobile ? 12 : 18 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { style: {
          fontSize: isMobile ? 38 : 52,
          fontWeight: 900,
          color: "#0f172a",
          marginBottom: 6,
          lineHeight: 1
        }, children: "Your Personalized Journey" }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { style: {
          fontSize: isMobile ? 16 : 24,
          color: "#64748b",
          lineHeight: 1.3
        }, children: [
          "From ",
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("span", { style: { fontWeight: 700, color: "#1e293b" }, children: [
            startWeight,
            " lbs"
          ] }),
          " to",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("span", { style: { fontWeight: 700, color: brand }, children: [
            goalWeight,
            " lbs"
          ] }),
          " in approximately",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("span", { style: { fontWeight: 700, color: brand }, children: [
            monthsToGoal,
            " months"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: isMobile ? 15 : 20,
        opacity: interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" })
      }, children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("svg", { width: chartWidth, height: chartHeight, style: { display: "block" }, children: [
        yTicks.map((weight, i) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "line",
          {
            x1: padding.left,
            y1: yScale(weight),
            x2: chartWidth - padding.right,
            y2: yScale(weight),
            stroke: "#e2e8f0",
            strokeWidth: 1,
            opacity: interpolate(frame, [25, 35], [0, 1], { extrapolateRight: "clamp" })
          },
          i
        )),
        yTicks.map((weight, i) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "text",
          {
            x: padding.left - 10,
            y: yScale(weight) + 4,
            textAnchor: "end",
            fill: "#94a3b8",
            fontSize: isMobile ? 11 : 13,
            fontWeight: 600,
            opacity: interpolate(frame, [25, 35], [0, 1], { extrapolateRight: "clamp" }),
            children: weight
          },
          i
        )),
        ["Now", "Month 1", "Month 2", "Month 3", "Month 4"].map((label3, i) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "text",
          {
            x: xScale(i),
            y: chartHeight - 20,
            textAnchor: "middle",
            fill: "#64748b",
            fontSize: isMobile ? 11 : 13,
            fontWeight: 600,
            opacity: interpolate(frame, [30 + i * 3, 38 + i * 3], [0, 1], { extrapolateRight: "clamp" }),
            children: label3
          },
          i
        )),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("linearGradient", { id: "chartGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("stop", { offset: "0%", stopColor: brand, stopOpacity: 0.18 }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("stop", { offset: "100%", stopColor: brand, stopOpacity: 0.03 })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "path",
          {
            d: `${linePath} L ${xScale(4)} ${yScale(minWeight)} L ${padding.left} ${yScale(minWeight)} Z`,
            fill: "url(#chartGradient)",
            opacity: interpolate(frame, [90, 105], [0, 1], { extrapolateRight: "clamp" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "path",
          {
            d: linePath,
            stroke: brand,
            strokeWidth: isMobile ? 3 : 4,
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: totalPathLength,
            strokeDashoffset: totalPathLength * (1 - lineProgress)
          }
        ),
        weights.map((w, i) => {
          const delay2 = 65 + i * 9;
          const opacity = interpolate(frame, [delay2, delay2 + 9], [0, 1], { extrapolateRight: "clamp" });
          const scale = interpolate(frame, [delay2, delay2 + 9], [0, 1], {
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.back(1.5))
          });
          return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("g", { opacity, children: [
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              "circle",
              {
                cx: xScale(i),
                cy: yScale(w),
                r: (isMobile ? 7 : 8) * scale,
                fill: brand,
                stroke: "white",
                strokeWidth: 2
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              "text",
              {
                x: xScale(i),
                y: yScale(w) - 16,
                textAnchor: "middle",
                fill: "#1e293b",
                fontSize: isMobile ? 14 : 16,
                fontWeight: 800,
                children: Math.round(w)
              }
            )
          ] }, i);
        }),
        frame > 105 && /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("g", { opacity: interpolate(frame, [105, 115], [0, 1], { extrapolateRight: "clamp" }), children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            "rect",
            {
              x: xScale(4) - 38,
              y: yScale(weights[4]) - 42,
              width: 76,
              height: 28,
              rx: 14,
              fill: brand
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            "text",
            {
              x: xScale(4),
              y: yScale(weights[4]) - 23,
              textAnchor: "middle",
              fill: "white",
              fontSize: isMobile ? 12 : 13,
              fontWeight: 700,
              children: "GOAL"
            }
          )
        ] })
      ] }) }),
      frame > 120 && /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { style: {
        background: "white",
        borderRadius: isMobile ? 16 : 20,
        padding: isMobile ? "32px 28px" : "40px 50px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        opacity: interpolate(frame, [120, 135], [0, 1], { extrapolateRight: "clamp" }),
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { style: {
          fontSize: isMobile ? 34 : 42,
          fontWeight: 900,
          color: "#0f172a",
          marginBottom: isMobile ? 28 : 38,
          textAlign: "center",
          lineHeight: 1.1
        }, children: "What's Included in Your Journey" }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { style: {
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: isMobile ? 20 : 28,
          rowGap: isMobile ? 18 : 24
        }, children: [
          { title: "GLP-1 Medication", desc: "Physician-prescribed, delivered directly to your door." },
          { title: "Real Medical Care", desc: "Not a marketing company \u2014 a true medical practice with board-certified physicians." },
          { title: "Unlimited Access to Your Team", desc: "Call, text, email, or video conference anytime \u2014 not just email like other companies." },
          { title: "Nutrition Coaching", desc: "Weekly support from Betsy to maximize results and prevent plateaus." },
          { title: "Progress Reports", desc: "Celebrate your wins and see measurable success along the way." },
          { title: "Trusted & Accredited", desc: "BBB Accredited, A+ Rated \u2014 patient-proven and nationally recognized." }
        ].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { style: {
          background: "linear-gradient(to right, #f8fafc 0%, #ffffff 100%)",
          padding: isMobile ? "18px 20px" : "22px 26px",
          borderRadius: 12,
          borderLeft: `4px solid ${brand}`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          opacity: interpolate(frame, [130 + i * 3, 140 + i * 3], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateX(${interpolate(frame, [130 + i * 3, 140 + i * 3], [-20, 0], { extrapolateRight: "clamp" })}px)`
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { style: {
            fontSize: isMobile ? 20 : 22,
            fontWeight: 700,
            color: "#1e293b",
            marginBottom: 8,
            lineHeight: 1.25
          }, children: item.title }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { style: {
            fontSize: isMobile ? 16 : 17,
            color: "#64748b",
            lineHeight: 1.5
          }, children: item.desc })
        ] }, i)) })
      ] })
    ] });
  };

  // src/poc/components/SuccessStories.tsx
  var import_jsx_runtime57 = __toESM(require_jsx_runtime());
  var SuccessStories = ({ frame, brand }) => {
    const { width, height } = useVideoConfig();
    const isMobile = height > width;
    const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: fadeIn,
      padding: isMobile ? "60px 40px" : "0 80px"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: { maxWidth: isMobile ? "100%" : 1400, width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: {
        fontSize: isMobile ? 42 : 56,
        fontWeight: 900,
        color: "#0f172a",
        textAlign: "center",
        marginBottom: isMobile ? 16 : 24,
        lineHeight: 1.1
      }, children: "Join Thousands of Success Stories" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: {
        fontSize: isMobile ? 18 : 24,
        color: "#64748b",
        textAlign: "center",
        marginBottom: isMobile ? 50 : 80,
        lineHeight: 1.4
      }, children: [
        "Real people. Real results. ",
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { style: { color: brand, fontWeight: 700 }, children: "No gimmicks." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? 16 : 24,
        marginBottom: isMobile ? 50 : 80
      }, children: [
        { value: "15,000+", label: "Active Patients" },
        { value: "87%", label: "Reach Their Goals" },
        { value: "4.9\u2605", label: "Average Rating" },
        { value: "92%", label: "Would Recommend" }
      ].map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: {
        padding: isMobile ? 24 : 32,
        background: "white",
        borderRadius: 20,
        textAlign: "center",
        boxShadow: "0 10px 40px rgba(0,0,0,.08)",
        border: `2px solid ${brand}20`,
        opacity: interpolate(frame, [20 + i * 5, 35 + i * 5], [0, 1], { extrapolateRight: "clamp" }),
        transform: `translateY(${interpolate(frame, [20 + i * 5, 35 + i * 5], [30, 0], { extrapolateRight: "clamp" })}px)`
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: {
          fontSize: isMobile ? 38 : 52,
          fontWeight: 900,
          color: brand,
          marginBottom: 8,
          lineHeight: 1
        }, children: stat.value }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: {
          fontSize: isMobile ? 14 : 18,
          color: "#64748b",
          fontWeight: 600,
          lineHeight: 1.3
        }, children: stat.label })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: isMobile ? 24 : 32
      }, children: [
        {
          name: "Jennifer M.",
          age: 42,
          lost: 47,
          quote: "For the first time in years, I feel like myself again. Dr. Fitch and the team made this so easy.",
          delay: 60
        },
        {
          name: "Michael T.",
          age: 38,
          lost: 62,
          quote: "I tried every diet. Nothing worked until GLP-1. Down 62 lbs and my diabetes is in remission.",
          delay: 75
        },
        {
          name: "Sarah K.",
          age: 51,
          lost: 38,
          quote: "The personal support from Betsy was a game-changer. She helped me build habits that actually stick.",
          delay: 90
        }
      ].map((testimonial, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        TestimonialCard,
        {
          ...testimonial,
          frame,
          brand,
          isMobile
        },
        i
      )) }),
      frame > 120 && /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: {
        marginTop: isMobile ? 50 : 70,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        gap: isMobile ? 24 : 40,
        opacity: interpolate(frame, [120, 140], [0, 1], { extrapolateRight: "clamp" })
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: {
          height: isMobile ? 140 : 160,
          display: "flex",
          alignItems: "center",
          background: "white",
          padding: isMobile ? "20px 32px" : "24px 40px",
          borderRadius: 16,
          boxShadow: "0 8px 30px rgba(0,0,0,.12)",
          border: "2px solid #e2e8f0"
        }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
          Img,
          {
            src: "https://storage.googleapis.com/msgsndr/LchNNcx4oSFzaphyXK3t/media/68dc35d48da17347166bc721.png",
            style: {
              height: "100%",
              width: "auto",
              objectFit: "contain"
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: {
          padding: isMobile ? "20px 32px" : "24px 40px",
          background: "white",
          borderRadius: 16,
          fontSize: isMobile ? 20 : 24,
          fontWeight: 700,
          color: "#1e293b",
          boxShadow: "0 8px 30px rgba(0,0,0,.12)",
          border: "2px solid #e2e8f0",
          textAlign: "center",
          lineHeight: 1.4
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: { marginBottom: 8 }, children: "HIPAA Compliant" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: { fontSize: isMobile ? 16 : 18, color: "#64748b", fontWeight: 600 }, children: "Your privacy protected" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: {
          padding: isMobile ? "20px 32px" : "24px 40px",
          background: "white",
          borderRadius: 16,
          fontSize: isMobile ? 20 : 24,
          fontWeight: 700,
          color: "#1e293b",
          boxShadow: "0 8px 30px rgba(0,0,0,.12)",
          border: "2px solid #e2e8f0",
          textAlign: "center",
          lineHeight: 1.4
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: { marginBottom: 8 }, children: "Secure & Private" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: { fontSize: isMobile ? 16 : 18, color: "#64748b", fontWeight: 600 }, children: "Bank-level encryption" })
        ] })
      ] })
    ] }) });
  };
  var TestimonialCard = ({ name, age, lost, quote, frame, delay: delay2, brand, isMobile }) => {
    const opacity = interpolate(frame, [delay2, delay2 + 20], [0, 1], {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: "clamp"
    });
    const slideY = interpolate(frame, [delay2, delay2 + 25], [40, 0], {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: "clamp"
    });
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: {
      padding: isMobile ? 28 : 32,
      background: "white",
      borderRadius: 20,
      boxShadow: "0 10px 40px rgba(0,0,0,.08)",
      border: "2px solid #e2e8f0",
      opacity,
      transform: `translateY(${slideY}px)`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: {
        display: "inline-block",
        padding: isMobile ? "6px 16px" : "8px 20px",
        background: `linear-gradient(135deg, ${brand}20, ${brand}40)`,
        borderRadius: 12,
        marginBottom: 16
      }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: {
        fontSize: isMobile ? 24 : 28,
        fontWeight: 900,
        color: brand
      }, children: [
        "-",
        lost,
        " lbs"
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: {
        fontSize: isMobile ? 16 : 18,
        color: "#1e293b",
        lineHeight: 1.6,
        marginBottom: 20,
        fontStyle: "italic"
      }, children: [
        '"',
        quote,
        '"'
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: {
        fontSize: isMobile ? 16 : 18,
        fontWeight: 700,
        color: "#0f172a"
      }, children: [
        name,
        ", ",
        age
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: {
        color: "#fbbf24",
        fontSize: isMobile ? 18 : 20,
        marginTop: 12
      }, children: "\u2605\u2605\u2605\u2605\u2605" })
    ] });
  };

  // src/poc/components/WhatHappensNext.tsx
  var import_jsx_runtime58 = __toESM(require_jsx_runtime());
  var WhatHappensNext = ({ frame, brand }) => {
    const { fps } = useVideoConfig();
    const { width, height } = useVideoConfig();
    const isMobile = height > width;
    const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
    return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: fadeIn,
      padding: isMobile ? "60px 40px" : "0 80px"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: { maxWidth: isMobile ? "100%" : 1400, width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: {
        fontSize: isMobile ? 42 : 56,
        fontWeight: 900,
        color: "#0f172a",
        textAlign: "center",
        marginBottom: isMobile ? 16 : 24,
        lineHeight: 1.1
      }, children: "Your Next Steps Are Simple" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: {
        fontSize: isMobile ? 18 : 24,
        color: "#64748b",
        textAlign: "center",
        marginBottom: isMobile ? 40 : 60,
        lineHeight: 1.4
      }, children: "No surprises. Just a clear, guided path to starting your transformation.        " }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
        gap: isMobile ? 20 : 24,
        marginBottom: isMobile ? 40 : 60
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
          SimpleStep,
          {
            number: 1,
            title: "Select Your Plan & Book",
            subtitle: "Choose your plan today and reserve your spot.",
            icon: "\u2713",
            frame,
            delay: 10,
            brand,
            isMobile
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
          SimpleStep,
          {
            number: 2,
            title: "Online Appointment With Dr. Fitch",
            subtitle: "Meet your physician and review your personalized plan.",
            icon: "\u{1F4F1}",
            frame,
            delay: 30,
            brand,
            isMobile
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
          SimpleStep,
          {
            number: 3,
            title: "Medication Delivered to Your Door",
            subtitle: "Shipped within 5\u20137 days of approval.",
            icon: "\u{1F4E6}",
            frame,
            delay: 50,
            brand,
            isMobile
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
          SimpleStep,
          {
            number: 4,
            title: "Start With Betsy, Your Nutrition Coach",
            subtitle: "Week 1 support to set you up for success.",
            icon: "\u{1F957}",
            frame,
            delay: 70,
            brand,
            isMobile
          }
        )
      ] }),
      frame > 85 && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: {
        padding: isMobile ? 32 : 40,
        background: `linear-gradient(135deg, ${brand}15, #10b98115)`,
        borderRadius: 24,
        border: `3px solid ${brand}`,
        textAlign: "center",
        opacity: interpolate(frame, [85, 105], [0, 1], { extrapolateRight: "clamp" }),
        transform: `scale(${spring({ frame: frame - 85, fps, config: { damping: 15 } })})`
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: {
          fontSize: isMobile ? 26 : 32,
          fontWeight: 900,
          color: "#0f172a",
          marginBottom: 16,
          lineHeight: 1.2
        }, children: "Doctor-reviewed. Risk-free." }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: {
          fontSize: isMobile ? 17 : 22,
          color: "#475569",
          lineHeight: 1.6,
          maxWidth: 900,
          margin: "0 auto"
        }, children: [
          "During your online consultation, Dr. Fitch reviews your medical history and may adjust your treatment plan based on his clinical expertise.",
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { style: { color: brand, fontWeight: 700 }, children: " If you\u2019re not approved, you\u2019ll get a full refund \u2014 guaranteed." })
        ] })
      ] })
    ] }) });
  };
  var SimpleStep = ({ number, title, subtitle, icon, frame, delay: delay2, brand, isMobile }) => {
    const { fps } = useVideoConfig();
    const opacity = interpolate(frame, [delay2, delay2 + 15], [0, 1], {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: "clamp"
    });
    const scale = spring({
      frame: frame - delay2,
      fps,
      config: { damping: 15, mass: 0.5 }
    });
    return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: {
      position: "relative",
      opacity,
      transform: `scale(${scale})`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: {
        position: "absolute",
        top: -10,
        left: isMobile ? 10 : -10,
        width: isMobile ? 32 : 36,
        height: isMobile ? 32 : 36,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${brand}, #10b981)`,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: isMobile ? 16 : 18,
        fontWeight: 900,
        border: "3px solid white",
        boxShadow: "0 4px 12px rgba(0,0,0,.2)",
        zIndex: 2
      }, children: number }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: {
        padding: isMobile ? "32px 20px" : "40px 20px",
        background: "white",
        borderRadius: 20,
        boxShadow: "0 10px 40px rgba(0,0,0,.08)",
        border: "2px solid #e2e8f0",
        textAlign: "center",
        minHeight: isMobile ? 160 : 200
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: {
          fontSize: isMobile ? 40 : 48,
          marginBottom: 12
        }, children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: {
          fontSize: isMobile ? 18 : 20,
          fontWeight: 900,
          color: "#0f172a",
          marginBottom: subtitle ? 8 : 0,
          lineHeight: 1.3
        }, children: title }),
        subtitle && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: {
          fontSize: isMobile ? 14 : 16,
          fontWeight: 700,
          color: brand,
          lineHeight: 1.4
        }, children: subtitle })
      ] })
    ] });
  };

  // src/poc/components/FinalCTA.tsx
  var import_jsx_runtime59 = __toESM(require_jsx_runtime());
  var FinalCTA = ({ plan, frame, brand, pricing }) => {
    const { fps } = useVideoConfig();
    const fadeIn = interpolate(frame, [0, 25], [0, 1], {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: "clamp"
    });
    const scaleIn = spring({ frame: frame - 10, fps, config: { damping: 12 } });
    const buttonPulse = Math.sin(frame * 0.1) * 0.03 + 1;
    return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: fadeIn
    }, children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: {
      maxWidth: 1e3,
      width: "100%",
      textAlign: "center",
      padding: "0 80px",
      transform: `scale(${scaleIn})`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: {
        fontSize: 72,
        fontWeight: 900,
        color: "#0f172a",
        marginBottom: 32,
        lineHeight: 1.1
      }, children: [
        "Your Journey",
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("br", {}),
        "Starts ",
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { style: {
          background: `linear-gradient(135deg, ${brand}, #10b981)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent"
        }, children: "Right Now" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: {
        fontSize: 28,
        color: "#64748b",
        marginBottom: 48,
        fontWeight: 500,
        lineHeight: 1.5
      }, children: [
        "Join 15,000+ people who've transformed their lives with GOAL.MD.",
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("br", {}),
        "No waiting rooms. No judgment. Just results."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { style: {
        marginBottom: 48,
        opacity: frame > 30 ? 1 : 0
      }, children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: {
        display: "inline-block",
        padding: "28px 72px",
        background: `linear-gradient(135deg, ${brand}, #10b981)`,
        borderRadius: 20,
        color: "white",
        fontSize: 36,
        fontWeight: 900,
        boxShadow: `0 20px 60px ${brand}50`,
        cursor: "pointer",
        transform: `scale(${buttonPulse})`,
        border: "4px solid white",
        transition: "transform 0.3s ease"
      }, children: [
        "Start Your ",
        plan,
        " Plan Today \u2192"
      ] }) }),
      frame > 50 && /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { style: {
        marginBottom: 40,
        opacity: interpolate(frame, [50, 70], [0, 1], { extrapolateRight: "clamp" })
      }, children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: {
        display: "inline-block",
        padding: "24px 48px",
        background: "white",
        borderRadius: 16,
        boxShadow: "0 10px 40px rgba(0,0,0,.08)",
        border: `2px solid ${brand}20`,
        position: "relative"
      }, children: [
        pricing.badge && /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { style: {
          position: "absolute",
          top: -12,
          right: -12,
          background: `linear-gradient(135deg, ${brand}, #10b981)`,
          color: "white",
          padding: "8px 20px",
          borderRadius: 12,
          fontSize: 14,
          fontWeight: 900,
          boxShadow: `0 4px 12px ${brand}40`,
          transform: "rotate(5deg)"
        }, children: pricing.badge }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { style: {
          fontSize: 20,
          color: "#64748b",
          marginBottom: 8
        }, children: "All-inclusive monthly plan" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16
        }, children: [
          pricing.originalPrice && /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: {
            fontSize: 32,
            fontWeight: 600,
            color: "#94a3b8",
            textDecoration: "line-through",
            opacity: 0.6
          }, children: [
            pricing.currency || "$",
            pricing.originalPrice
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: {
            fontSize: 52,
            fontWeight: 900,
            color: brand
          }, children: [
            pricing.currency || "$",
            pricing.monthlyPrice,
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { style: { fontSize: 28, fontWeight: 600 }, children: "/month" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { style: {
          fontSize: 16,
          color: "#64748b",
          marginTop: 8
        }, children: pricing.description }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { style: {
          fontSize: 14,
          color: "#94a3b8",
          marginTop: 12
        }, children: "Medication \u2022 Doctor visits \u2022 Coaching \u2022 Shipping" })
      ] }) }),
      frame > 100 && /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { style: {
        marginTop: 48,
        fontSize: 18,
        color: "#94a3b8",
        opacity: interpolate(frame, [100, 120], [0, 1], { extrapolateRight: "clamp" })
      }, children: "\u{1F512} HIPAA-compliant \u2022 \u{1F4B3} Secure payments \u2022 \u{1F3C6} BBB A+ Accredited \u2022 \u2B50 4.9/5 rating" })
    ] }) });
  };

  // src/poc/planMath.ts
  var DEFAULT_ASSUMPTIONS = {
    rampWeeks: 8,
    rampLossLbsPerWeek: 0.8,
    steadyLossLbsPerWeek: 1.8,
    milestonePercents: [0.05, 0.1, 0.15, 0.2]
  };
  function poundsForPercent(startWeight, pct) {
    return Math.max(0, +(startWeight * pct).toFixed(1));
  }
  function weeksToLose(pounds, { rampWeeks, rampLossLbsPerWeek, steadyLossLbsPerWeek }) {
    const rampCap = rampWeeks * rampLossLbsPerWeek;
    if (pounds <= rampCap) {
      return +(pounds / rampLossLbsPerWeek).toFixed(1);
    }
    const remaining = pounds - rampCap;
    return +(rampWeeks + remaining / steadyLossLbsPerWeek).toFixed(1);
  }
  function projectETAs(startWeight, currentWeight, goalWeight, assumptions = DEFAULT_ASSUMPTIONS) {
    const lostSoFar = Math.max(0, startWeight - currentWeight);
    const toGoal = Math.max(0, currentWeight - goalWeight);
    const milestones = assumptions.milestonePercents.map((p) => {
      const targetLoss = poundsForPercent(startWeight, p);
      const deltaNeeded = Math.max(0, targetLoss - lostSoFar);
      const weeks = deltaNeeded === 0 ? 0 : weeksToLose(deltaNeeded, assumptions);
      return {
        label: `${Math.round(p * 100)}%`,
        lossLbs: targetLoss,
        reached: lostSoFar >= targetLoss,
        deltaNeeded,
        etaWeeksFromNow: weeks
      };
    });
    const etaTo20 = milestones.find((m) => m.label === "20%")?.etaWeeksFromNow ?? null;
    const etaToGoal = toGoal === 0 ? 0 : weeksToLose(toGoal, assumptions);
    return {
      lostSoFar,
      toGoal,
      milestones,
      etaTo20,
      etaToGoal
    };
  }

  // src/poc/pricingUtils.ts
  function getPricing(couponCode, plan) {
    const normalizedCode = couponCode?.toUpperCase().trim();
    const coupons = {
      "WELCOME50": {
        monthlyPrice: 136,
        originalPrice: 272,
        description: "First month 50% off, then $272/month",
        badge: "50% OFF",
        currency: "$"
      },
      "SAVE30": {
        monthlyPrice: 190,
        originalPrice: 272,
        description: "Save $82/month with code SAVE30",
        badge: "30% OFF",
        currency: "$"
      },
      "VIP": {
        monthlyPrice: 220,
        originalPrice: 272,
        description: "VIP member pricing",
        badge: "VIP PRICING",
        currency: "$"
      },
      "FOUNDERS": {
        monthlyPrice: 199,
        originalPrice: 272,
        description: "Founding member rate locked in",
        badge: "FOUNDERS RATE",
        currency: "$"
      }
    };
    if (normalizedCode && coupons[normalizedCode]) {
      return coupons[normalizedCode];
    }
    return {
      monthlyPrice: 172,
      originalPrice: 272,
      description: "New patient special - save $100 on your first month",
      badge: "NEW PATIENT SPECIAL",
      currency: "$"
    };
  }

  // src/poc/POC_JourneyVideo.tsx
  var import_jsx_runtime60 = __toESM(require_jsx_runtime());
  var POC_JourneyVideo = ({
    name,
    startWeight,
    currentWeight,
    goalWeight,
    plan,
    brand = "#6366F1",
    couponCode,
    voiceoverUrl
  }) => {
    const frame = useCurrentFrame();
    const assumptions = {
      ...DEFAULT_ASSUMPTIONS,
      ...plan === "Tablet" || plan === "Oral" ? { steadyLossLbsPerWeek: 1.4 } : {}
    };
    const { milestones, etaTo20, etaToGoal } = projectETAs(
      startWeight,
      currentWeight,
      goalWeight,
      assumptions
    );
    const displayPlan = plan === "Oral" ? "Tablet" : plan;
    const pricing = getPricing(couponCode, plan);
    return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(AbsoluteFill, { style: {
      fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    }, children: [
      voiceoverUrl && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Audio, { src: voiceoverUrl, volume: 1 }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(BrightBackground, { brand }),
      frame < 248 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(HeroOpener, { name, frame, brand }),
      frame >= 248 && frame < 495 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
        TransformationVision,
        {
          startWeight,
          goalWeight,
          frame: frame - 248,
          brand
        }
      ),
      frame >= 495 && frame < 930 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(MeetYourTeam, { frame: frame - 495, brand }),
      frame >= 930 && frame < 1470 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
        YourJourneyTimeline,
        {
          startWeight,
          currentWeight,
          goalWeight,
          milestones,
          etaToGoal,
          frame: frame - 930,
          brand
        }
      ),
      frame >= 1470 && frame < 1755 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(SuccessStories, { frame: frame - 1470, brand }),
      frame >= 1755 && frame < 2820 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(WhatHappensNext, { frame: frame - 1755, brand }),
      frame >= 2820 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
        FinalCTA,
        {
          plan: displayPlan,
          frame: frame - 2820,
          brand,
          pricing
        }
      )
    ] });
  };

  // src/PlayerWrapper.tsx
  var import_jsx_runtime61 = __toESM(require_jsx_runtime());
  var PlayerWrapper = (props) => {
    return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
      Player,
      {
        component: POC_JourneyVideo,
        inputProps: {
          ...props,
          plan: "Injection",
          brand: "#F26622"
        },
        durationInFrames: 3e3,
        fps: 30,
        compositionWidth: 1920,
        compositionHeight: 1080,
        controls: true,
        style: { width: "100%", aspectRatio: "16/9" }
      }
    );
  };
  if (typeof window !== "undefined") {
    window.RemotionPlayerWrapper = PlayerWrapper;
    window.React = import_react96.default;
    window.ReactDOM = require_react_dom();
  }
  return __toCommonJS(PlayerWrapper_exports);
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
