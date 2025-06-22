import { importShared } from './__federation_fn_import-Dn22YDBF.js';
import { I as Icon } from './iconify-6k8noXLb.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const _sfc_main = {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    components: {
        Icon
    },
    methods: {
        async handleLogin() {
            try {
                await this.$store.dispatch('login', {
                    username: this.username,
                    password: this.password,
                });
                console.log('Login successful!');
                this.$router.push('/');
            } catch (error) {
                console.error('Login failed:', error);
            }
            console.log(this.$store.state.accessToken);
        }
    }
};


const {createElementVNode:_createElementVNode,resolveComponent:_resolveComponent,createVNode:_createVNode,vModelText:_vModelText,withDirectives:_withDirectives,withModifiers:_withModifiers,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "card bg-base-100 w-96 shadow-xl" };
const _hoisted_2 = { class: "card-body" };
const _hoisted_3 = { class: "input input-bordered flex items-center gap-2 my-2 w-full" };
const _hoisted_4 = { class: "input input-bordered flex items-center gap-2 my-2 w-full" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = _resolveComponent("Icon");

  return (_openBlock(), _createElementBlock("div", null, [
    _createElementVNode("div", _hoisted_1, [
      _createElementVNode("div", _hoisted_2, [
        _cache[4] || (_cache[4] = _createElementVNode("h2", { class: "card-title text-center" }, "Login", -1)),
        _createElementVNode("form", {
          onSubmit: _cache[2] || (_cache[2] = _withModifiers((...args) => ($options.handleLogin && $options.handleLogin(...args)), ["prevent"]))
        }, [
          _createElementVNode("label", _hoisted_3, [
            _createVNode(_component_Icon, { icon: "ic:baseline-person" }),
            _withDirectives(_createElementVNode("input", {
              type: "text",
              class: "grow",
              placeholder: "Username",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.username) = $event))
            }, null, 512), [
              [_vModelText, $data.username]
            ])
          ]),
          _createElementVNode("label", _hoisted_4, [
            _createVNode(_component_Icon, { icon: "ic:baseline-key" }),
            _withDirectives(_createElementVNode("input", {
              type: "password",
              class: "grow",
              placeholder: "Password",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.password) = $event))
            }, null, 512), [
              [_vModelText, $data.password]
            ])
          ]),
          _cache[3] || (_cache[3] = _createElementVNode("div", { class: "card-actions justify-end" }, [
            _createElementVNode("button", {
              type: "submit",
              class: "btn btn-accent w-full"
            }, "Login")
          ], -1))
        ], 32)
      ])
    ])
  ]))
}
const Login = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { Login as default };
