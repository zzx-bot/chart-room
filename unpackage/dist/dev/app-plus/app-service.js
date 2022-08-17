var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {
    __name: "index",
    setup(__props2) {
      const toSearch = () => {
        uni.navigateTo({
          url: "/pages/search/search"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", {
            class: "top-bar",
            style: { "background": "rgba(255, 255, 255, 0.96)", "border-bottom": "1rpx solid rgba(39, 40, 50, 0.1)" }
          }, [
            vue.createElementVNode("view", { class: "top-bar-left" }, [
              vue.createElementVNode("image", {
                class: "avatar",
                src: "/static/index/avatar.png",
                alt: ""
              })
            ]),
            vue.createElementVNode("view", { class: "top-bar-center" }, [
              vue.createElementVNode("image", {
                src: "/static/index/huo.png",
                alt: ""
              })
            ]),
            vue.createElementVNode("view", { class: "top-bar-right" }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("image", {
                  class: "search",
                  onClick: toSearch,
                  src: "/static/index/search.png",
                  alt: ""
                }),
                vue.createElementVNode("image", {
                  class: "addgroup",
                  src: "/static/index/addgroup.png",
                  alt: ""
                })
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "chat-list" }, [
            vue.createElementVNode("view", { class: "frends" }, [
              vue.createElementVNode("view", {
                class: vue.normalizeClass(["frend-list"])
              }, [
                vue.createElementVNode("view", { class: "frend-list-left" }, [
                  vue.createElementVNode("view", { class: "msgNum" }, vue.toDisplayString("99+")),
                  vue.createElementVNode("image", {
                    src: "/static/index/apply.svg",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("view", { class: "frend-list-container" }, [
                  vue.createElementVNode("view", { class: "fir-info" }, [
                    vue.createElementVNode("h2", { class: "nickName" }, "\u6D69"),
                    vue.createElementVNode("view", { class: "msgtime" }, "11:30")
                  ]),
                  vue.createElementVNode("p", { class: "message" }, "\u76F8\u9047\u4E0D\u4E00\u5B9A\u6709\u7ED3\u5C40\uFF0C\u4F46\u4E00\u5B9A\u6709\u610F\u4E49")
                ])
              ])
            ]),
            vue.createCommentVNode(' <view class="frends" v-for="fir in firendsArr" :key="fir.id">\r\n				<view class="frend-list">\r\n					<view class="frend-list-left">\r\n						<view class="msgNum">{{ fir.tip }}</view>\r\n						<image :src="`../../static/avatar/${fir.imageUrl}`" alt="" />\r\n					</view>\r\n					<view class="frend-list-container">\r\n						<view class="fir-info">\r\n							<h2 class="nickName">{{ fir.name }}</h2>\r\n							<view class="msgtime">11:30</view>\r\n						</view>\r\n						<p class="message">{{ fir.msg }}</p>\r\n					</view>\r\n				</view>\r\n			</view> ')
          ])
        ]);
      };
    }
  };
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-57280228"], ["__file", "D:/Users/pistachio/Documents/HBuilderProjects/yikes/pages/index/index.vue"]]);
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "register",
    setup(__props2) {
      const state = vue.reactive({
        passwordType: "password",
        isUserExist: false,
        isEmaiError: false,
        showPas: true,
        isEmailValid: true,
        lookUrl: "unShow"
      });
      const registerTable = vue.reactive({
        username: "123",
        email: "123@qq.com",
        password: "123456"
      });
      let { passwordType, isUserExist, isEmaiError, showPas, isEmailValid, lookUrl } = vue.toRefs(state);
      let { username, email, password } = vue.toRefs(registerTable);
      const showPassword = () => {
        if (lookUrl.value === "unShow") {
          lookUrl.value = "isShow";
          passwordType.value = "text";
        } else if (lookUrl.value === "isShow") {
          lookUrl.value = "unShow";
          passwordType.value = "password";
        }
      };
      const isEmail = (e) => {
        if (email.value != "") {
          let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
          if (!reg.test(email.value)) {
            isEmaiError.value = true;
          } else {
            isEmaiError.value = false;
          }
        }
      };
      const isOk = vue.computed(() => {
        return username.value != "" && !isUserExist.value && !isEmaiError.value && isEmailValid.value && password.value.length > 5;
      });
      const backLogin = () => {
        uni.redirectTo({
          url: "/pages/login/login"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", {
              class: "top-bar-left",
              onClick: backLogin
            }, [
              vue.createElementVNode("image", {
                src: "/static/common/goback.png",
                alt: ""
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "container" }, [
            vue.createElementVNode("view", { class: "logo" }, [
              vue.createElementVNode("image", {
                src: "/static/index/huo.png",
                alt: ""
              })
            ]),
            vue.createElementVNode("view", { class: "main" }, [
              vue.createElementVNode("view", { class: "login" }, "\u6CE8\u518C"),
              vue.createElementVNode("view", { class: "inputs" }, [
                vue.createElementVNode("div", { class: "username" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(username) ? username.value = $event : username = $event),
                    placeholder: "\u53D6\u4E00\u4E2A\u540D\u5B57\u5427",
                    "placeholder-style": "color:#aaa;font-weight:400;"
                  }, null, 512), [
                    [vue.vModelText, vue.unref(username)]
                  ]),
                  !vue.unref(isUserExist) ? (vue.openBlock(), vue.createElementBlock("i", {
                    key: 0,
                    class: "icons"
                  }, [
                    vue.createElementVNode("image", {
                      src: "/static/login/right1.png",
                      alt: ""
                    })
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.unref(isUserExist) ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "user-has-existed error-tip"
                  }, vue.toDisplayString("\u7528\u6237\u540D\u5DF2\u5B58\u5728"))) : vue.createCommentVNode("v-if", true)
                ]),
                vue.createElementVNode("div", { class: "email" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    onInput: isEmail,
                    type: "text",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(email) ? email.value = $event : email = $event),
                    placeholder: "\u4F60\u7684\u90AE\u7BB1\u591A\u5C11\u5462",
                    "placeholder-style": "color:#aaa;font-weight:400;"
                  }, null, 544), [
                    [vue.vModelText, vue.unref(email)]
                  ]),
                  vue.unref(isEmaiError) ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "email-error error-tip"
                  }, vue.toDisplayString("\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF"))) : vue.createCommentVNode("v-if", true),
                  !vue.unref(isEmailValid) ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "email-error error-tip"
                  }, vue.toDisplayString("\u90AE\u7BB1\u5DF2\u7ECF\u6CE8\u518C"))) : vue.createCommentVNode("v-if", true),
                  !vue.unref(isEmaiError) && vue.unref(isEmailValid) ? (vue.openBlock(), vue.createElementBlock("i", {
                    key: 2,
                    class: "icons"
                  }, [
                    vue.createElementVNode("image", {
                      src: "/static/login/right1.png",
                      alt: ""
                    })
                  ])) : vue.createCommentVNode("v-if", true)
                ]),
                vue.createElementVNode("div", { class: "password" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(password) ? password.value = $event : password = $event),
                    type: vue.unref(passwordType),
                    placeholder: "\u8FD9\u91CC\u586B\u5199\u5BC6\u7801\u54E6",
                    "placeholder-style": "color:#aaa;font-weight:400;"
                  }, null, 8, ["type"]), [
                    [vue.vModelDynamic, vue.unref(password)]
                  ]),
                  vue.createElementVNode("i", {
                    class: "icons",
                    onClick: showPassword
                  }, [
                    vue.createElementVNode("image", {
                      src: `../../static/login/${vue.unref(lookUrl)}.png`,
                      alt: ""
                    }, null, 8, ["src"])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("view", {
              class: vue.normalizeClass([{ active: vue.unref(isOk) }, "submit"])
            }, "\u6CE8\u518C", 2)
          ])
        ], 64);
      };
    }
  });
  var PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "D:/Users/pistachio/Documents/HBuilderProjects/yikes/pages/register/register.vue"]]);
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res2 = normalizeLog(type, filename, args);
    res2 && console[type](res2);
  }
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "login",
    setup(__props2) {
      const userLoginInfo = vue.reactive({
        username: "",
        password: ""
      });
      const { username, password } = vue.toRefs(userLoginInfo);
      const toRegister = () => {
        uni.navigateTo({
          url: "/pages/register/register"
        });
      };
      const testFun = () => {
        uni.request({
          url: "http://localhost:3030/mail",
          data: { email: "731918391@qq.com" },
          method: "POST",
          success: (data) => {
            formatAppLog("log", "at pages/login/login.vue:58", data);
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", {
              class: "top-bar-right",
              onClick: toRegister
            }, [
              vue.createElementVNode("p", { class: "text" }, "\u6CE8\u518C")
            ])
          ]),
          vue.createElementVNode("view", { class: "logo" }, [
            vue.createElementVNode("image", {
              src: "/static/index/huo.png",
              alt: ""
            })
          ]),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createElementVNode("view", { class: "inputs" }, [
              vue.createElementVNode("view", { class: "login" }, "\u767B\u5F55"),
              vue.createElementVNode("view", { class: "hellow" }, "\u60A8\u597D\uFF0C\u6B22\u8FCE\u6765\u5230yikes"),
              vue.withDirectives(vue.createElementVNode("input", {
                type: "text",
                placeholder: "\u7528\u6237\u540D/\u90AE\u7BB1",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(username) ? username.value = $event : null),
                "placeholder-style": "color:#aaa;font-weight:400;"
              }, null, 512), [
                [vue.vModelText, vue.unref(username)]
              ]),
              vue.withDirectives(vue.createElementVNode("input", {
                type: "password",
                placeholder: "\u8F93\u5165\u5BC6\u7801",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(password) ? password.value = $event : null),
                "placeholder-style": "color:#aaa;font-weight:400;",
                autocomplete: "on"
              }, null, 512), [
                [vue.vModelText, vue.unref(password)]
              ])
            ]),
            vue.createElementVNode("view", { class: "tip" }, vue.toDisplayString("\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF\uFF01"))
          ]),
          vue.createElementVNode("view", {
            class: "submit",
            onClick: testFun
          }, "\u767B\u5F55")
        ]);
      };
    }
  });
  var PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/Users/pistachio/Documents/HBuilderProjects/yikes/pages/login/login.vue"]]);
  const _sfc_main$2 = {
    __name: "search",
    setup(__props) {
      const queryString = vue.ref("");
      vue.ref(true);
      const userArr = [
        {
          id: 1,
          name: "\u5927\u6D77",
          email: "dahai@qq.com"
        },
        {
          id: 2,
          name: "\u5927\u5C71",
          email: "dashan@qq.com"
        },
        {
          id: 3,
          name: "\u5927\u6C5F",
          email: "dajiang@qq.com"
        },
        {
          id: 4,
          name: "\u5927\u6CB3",
          email: "dahe@qq.com"
        }
      ];
      const firArr = [
        {
          userId: 1,
          firendId: 2
        },
        {
          userId: 1,
          firendId: 4
        }
      ];
      const searchRes = vue.computed(() => {
        if (queryString.value.length === 0)
          return null;
        let res = [];
        userArr.map((item) => {
          if (item.name.search(queryString.value) != -1 || item.email.search(queryString.value) != -1) {
            let temp = __spreadValues({}, item);
            isFirend(temp);
            let exp = eval("/" + queryString.value + "/g");
            formatAppLog("log", "at pages/search/search.vue:97", temp.name);
            temp.name = temp.name.replace(exp, '<span style="color:#4AAAFF">' + queryString.value + " </span>");
            temp.email = temp.email.replace(exp, '<span style="color:#4AAAFF">' + queryString.value + "</span>");
            res.push(temp);
            formatAppLog("log", "at pages/search/search.vue:107", temp);
          }
        });
        return res;
      });
      const isFirend = (temp2) => {
        for (let i = 0; i < firArr.length; i++) {
          if (firArr[i].firendId === temp2.id) {
            temp2.active = true;
          }
        }
      };
      const backIndex = () => {
        uni.redirectTo({
          url: "../index/index"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", {
            class: "top-bar",
            style: { "background": "rgba(255, 255, 255, 0.96)", "border-bottom": "1rpx solid rgba(39, 40, 50, 0.1)" }
          }, [
            vue.createElementVNode("view", { class: "top-bar-left" }, [
              vue.createElementVNode("view", { class: "searchInput" }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => queryString.value = $event),
                  placeholder: "\u641C\u7D22\u7528\u6237/\u7FA4",
                  "placeholder-style": "color:#aaa;font-weight:400; padding-left:4rpx"
                }, null, 512), [
                  [vue.vModelText, queryString.value]
                ]),
                vue.createElementVNode("image", {
                  class: "search",
                  src: "/static/common/searchGray.png",
                  alt: ""
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "top-bar-right" }, [
              vue.createElementVNode("view", {
                class: "text",
                onClick: backIndex
              }, "\u53D6\u6D88")
            ])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.unref(searchRes) ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "result"
            }, [
              vue.createElementVNode("view", { class: "result-title" }, "\u7528\u6237"),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(searchRes), (item2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  key: item2.id
                }, [
                  vue.createElementVNode("image", {
                    class: "item-avatar",
                    src: "/static/index/apply.svg",
                    alt: ""
                  }),
                  vue.createElementVNode("div", { class: "itemInfo" }, [
                    vue.createElementVNode("view", {
                      class: "item-name",
                      innerHTML: item2.name
                    }, null, 8, ["innerHTML"]),
                    vue.createElementVNode("view", {
                      class: "item-email",
                      innerHTML: item2.email
                    }, null, 8, ["innerHTML"])
                  ]),
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass(["btn", { firend: item2.active }])
                  }, vue.toDisplayString(item2.active ? "\u53D1\u6D88\u606F" : "\u52A0\u597D\u53CB"), 3)
                ]);
              }), 128))
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ]);
      };
    }
  };
  var PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/Users/pistachio/Documents/HBuilderProjects/yikes/pages/search/search.vue"]]);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "userhome",
    setup(__props2) {
      const state = vue.reactive({
        passwordType: "password",
        isUserExist: false,
        isEmaiError: false,
        showPas: true,
        isEmailValid: true,
        lookUrl: "unShow"
      });
      const registerTable = vue.reactive({
        username: "\u6587\u5BBE\u513F\u5B50",
        email: "123@qq.com",
        password: "123456"
      });
      vue.toRefs(state);
      let { username, email, password } = vue.toRefs(registerTable);
      const backLogin = () => {
        uni.redirectTo({
          url: "/pages/login/login"
        });
      };
      const showAddPanel = vue.ref(false);
      const addFriend = () => {
        showAddPanel.value = true;
      };
      const hiddenAddFriend = () => {
        showAddPanel.value = false;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", {
              class: "top-bar-left",
              onClick: backLogin
            }, [
              vue.createElementVNode("image", {
                class: "goback",
                src: "/static/common/goback.png",
                alt: ""
              })
            ]),
            vue.createElementVNode("view", {
              class: "top-bar-right",
              onClick: backLogin
            }, [
              vue.createElementVNode("image", {
                class: "more",
                src: "/static/common/more.png",
                alt: ""
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "bg" }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass({ "bg-bai": showAddPanel.value })
            }, null, 2),
            vue.createElementVNode("image", {
              class: vue.normalizeClass([{ "bg-image": !showAddPanel.value }]),
              src: "/static/common/son.jpg",
              mode: "aspectFill",
              alt: ""
            }, null, 2)
          ]),
          vue.createVNode(vue.Transition, { name: "fade" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "main" }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(["headimage", { changeStyle: showAddPanel.value }])
                }, [
                  vue.createElementVNode("image", {
                    class: vue.normalizeClass(["avatar", { avatarActive: showAddPanel.value }]),
                    src: "/static/common/son.jpg",
                    mode: "aspectFill",
                    alt: ""
                  }, null, 2),
                  vue.withDirectives(vue.createElementVNode("image", {
                    class: "gender",
                    style: { "background": "#ff5d5b" },
                    src: "/static/common/female.png"
                  }, null, 512), [
                    [vue.vShow, showAddPanel.value]
                  ])
                ], 2),
                vue.createElementVNode("view", { class: "beizhu" }, "\u5B8B\u9EC4\u6587\u6EE8"),
                vue.createElementVNode("view", { class: "nickName" }, "\u6635\u79F0\uFF1Ason"),
                vue.createElementVNode("view", { class: "des" }, " \u57C3\u5C14\u6E29\xB7\u859B\u5B9A\u8C14\uFF08Erwin Schr\xF6dinger\uFF0C1887\u5E748\u670812\u65E5\u20141961\u5E741\u67084\u65E5\uFF09\uFF0C\u7537\uFF0C\u5965\u5730\u5229\u7269\u7406\u5B66\u5BB6\uFF0C\u91CF\u5B50\u529B\u5B66\u5960\u57FA\u4EBA\u4E4B\u4E00\uFF0C\u53D1\u5C55\u4E86\u5206\u5B50\u751F\u7269\u5B66\u3002\u7EF4\u4E5F\u7EB3\u5927\u5B66\u54F2\u5B66\u535A\u58EB\u3002\u82CF\u9ECE\u4E16\u5927\u5B66\u3001\u67CF\u6797\u5927\u5B66\u548C\u683C\u62C9\u8328\u5927\u5B66\u6559\u6388\u3002 ")
              ])
            ]),
            _: 1
          }),
          vue.createElementVNode("view", {
            class: "bottom",
            onClick: addFriend
          }, "\u52A0\u597D\u53CB"),
          vue.createVNode(vue.Transition, {
            name: "fade",
            persisted: ""
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("view", { class: "add-firend-panel" }, [
                vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(vue.unref(username)), 1),
                vue.createElementVNode("textarea", {
                  value: "\u52A0\u6211\u597D\u53CB\u54E6~",
                  class: "add-msg",
                  maxlength: "120"
                }),
                vue.createElementVNode("view", {
                  class: "cancel",
                  onClick: hiddenAddFriend
                }, "\u53D6\u6D88"),
                vue.createElementVNode("view", { class: "confirm" }, "\u786E\u8BA4")
              ], 512), [
                [vue.vShow, showAddPanel.value]
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  var PagesUserhomeUserhome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/Users/pistachio/Documents/HBuilderProjects/yikes/pages/userhome/userhome.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/userhome/userhome", PagesUserhomeUserhome);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Users/pistachio/Documents/HBuilderProjects/yikes/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
