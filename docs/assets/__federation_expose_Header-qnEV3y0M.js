import { importShared } from './__federation_fn_import-Dn22YDBF.js';
import { I as Icon } from './iconify-6k8noXLb.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const _sfc_main = {
    data() {
        return {
        }
    },
    computed: {
        role() {
            return this.$store.state.user.role;
        },
        fullName() {
            return this.$store.state.user.firstName + ' ' + this.$store.state.user.lastName;
        },
    },
    components: {
        Icon
    },
    methods: {
        async handleLogout() {
            try {
                await this.$store.dispatch('logout');
                console.log('Logout successful!');
                this.$router.push('/login');
            } catch (error) {
                console.error('Logout failed:', error);
            }
            console.log(this.$store.state.accessToken);
        },
    },
};

const {resolveComponent:_resolveComponent,createVNode:_createVNode,createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,withCtx:_withCtx,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,toDisplayString:_toDisplayString} = await importShared('vue');


const _hoisted_1 = { class: "navbar bg-base-100" };
const _hoisted_2 = { class: "navbar-start" };
const _hoisted_3 = { class: "dropdown" };
const _hoisted_4 = {
  tabindex: "0",
  role: "button",
  class: "btn btn-ghost lg:hidden"
};
const _hoisted_5 = {
  tabindex: "0",
  class: "menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
};
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { class: "navbar-center hidden lg:flex" };
const _hoisted_9 = { class: "menu menu-horizontal px-1" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { class: "navbar-end" };
const _hoisted_13 = { class: "mr-2" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = _resolveComponent("Icon");
  const _component_RouterLink = _resolveComponent("RouterLink");

  return (_openBlock(), _createElementBlock("div", null, [
    _createElementVNode("div", _hoisted_1, [
      _createElementVNode("div", _hoisted_2, [
        _createElementVNode("div", _hoisted_3, [
          _createElementVNode("div", _hoisted_4, [
            _createVNode(_component_Icon, { icon: "ic:round-menu" })
          ]),
          _createElementVNode("ul", _hoisted_5, [
            _createElementVNode("li", null, [
              _createVNode(_component_RouterLink, { to: "/" }, {
                default: _withCtx(() => _cache[1] || (_cache[1] = [
                  _createTextVNode("Messages")
                ])),
                _: 1
              })
            ]),
            ($options.role === 'admin')
              ? (_openBlock(), _createElementBlock("li", _hoisted_6, [
                  _createVNode(_component_RouterLink, { to: "/add-guest" }, {
                    default: _withCtx(() => _cache[2] || (_cache[2] = [
                      _createTextVNode("Add Guest")
                    ])),
                    _: 1
                  })
                ]))
              : _createCommentVNode("", true),
            ($options.role === 'user')
              ? (_openBlock(), _createElementBlock("li", _hoisted_7, [
                  _createVNode(_component_RouterLink, { to: "/add-message" }, {
                    default: _withCtx(() => _cache[3] || (_cache[3] = [
                      _createTextVNode("Add Message")
                    ])),
                    _: 1
                  })
                ]))
              : _createCommentVNode("", true)
          ])
        ]),
        _cache[4] || (_cache[4] = _createElementVNode("a", { class: "btn btn-ghost text-xl" }, "Guest Book", -1))
      ]),
      _createElementVNode("div", _hoisted_8, [
        _createElementVNode("ul", _hoisted_9, [
          _createElementVNode("li", null, [
            _createVNode(_component_RouterLink, {
              to: "/",
              exactActiveClass: "btn-active"
            }, {
              default: _withCtx(() => _cache[5] || (_cache[5] = [
                _createTextVNode("Messages")
              ])),
              _: 1
            })
          ]),
          ($options.role === 'admin')
            ? (_openBlock(), _createElementBlock("li", _hoisted_10, [
                _createVNode(_component_RouterLink, {
                  to: "/add-guest",
                  exactActiveClass: "btn-active"
                }, {
                  default: _withCtx(() => _cache[6] || (_cache[6] = [
                    _createTextVNode("Add Guest")
                  ])),
                  _: 1
                })
              ]))
            : _createCommentVNode("", true),
          ($options.role === 'user')
            ? (_openBlock(), _createElementBlock("li", _hoisted_11, [
                _createVNode(_component_RouterLink, {
                  to: "/add-message",
                  exactActiveClass: "btn-active"
                }, {
                  default: _withCtx(() => _cache[7] || (_cache[7] = [
                    _createTextVNode("Add Message")
                  ])),
                  _: 1
                })
              ]))
            : _createCommentVNode("", true)
        ])
      ]),
      _createElementVNode("div", _hoisted_12, [
        _createElementVNode("p", _hoisted_13, "Hi, " + _toDisplayString($options.fullName) + " (" + _toDisplayString($options.role === 'user' ? 'Guest' : $options.role === 'admin' ? 'Admin' : '') + ")", 1),
        _createElementVNode("button", {
          class: "btn btn-outline btn-accent",
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.handleLogout && $options.handleLogout(...args)))
        }, "Logout")
      ])
    ])
  ]))
}
const Header = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { Header as default };
