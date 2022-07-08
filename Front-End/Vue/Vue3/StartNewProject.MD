
[TOC]

- [🐱‍🐉 创建项目](#🐱‍🐉-创建项目)
- [🐱‍🐉 项目配置](#😊-项目配置)



---
# ❀ Vue3 TS 项目搭建

- ## 🐱‍🐉 **创建项目**

    ```
    pnpm create vite
    Project name:[Name]
    Select a framework: » vue
    Select a variant: » vue-ts

    cd S-FormDesigner-V3
    pnpm install
    pnpm run dev

    ```

- ## 😊 **项目配置**
    
    - **使用jsx**

        vite.config.ts

        ![jsx](/Front-End/Assets/img_20220708105327.png)

    - **vite配置**   

        [vite官方](https://cn.vitejs.dev/)

        - 文件路径配置 
            ```
            import { fileURLToPath, URL } from 'url';

            export default defineConfig({
                resolve: {
                    alias: {
                        '@': fileURLToPath(new URL('./src', import.meta.url)),
                    },
                },
            })
            
            ```
    
        
- ## 👀 **目录结构**


- ## ✨ **使用vue-router**

    ```
    pnpm add vue-router
    ```
    创建router目录

    ![router](/Front-End//Assets/router_20220708112005.png)


    **index.ts**

        import type { App } from 'vue';

        import { createRouter, createWebHistory } from 'vue-router';
        import type { RouteRecordRaw } from 'vue-router';


        const routes: Array<RouteRecordRaw> = []

        // 创建路由对象
        const router = createRouter({
            history: createWebHistory(import.meta.env.BASE_URL),
            routes:routes,
            scrollBehavior: () => ({ left: 0, top: 0 }),
        })


        // 挂载路由
        export function setupRouter(app:App<Element>){
            app.use(router)
        }

    **main.ts**

        import {setupRouter} from './router'


        async function bootstrap(){
            const app = createApp(App)
            setupRouter(app)


            app.mount('#app');
        }


- ## 😒 **使用pinia**

    ```
    pnpm add pinia 
    ```

    创建stores目录

    ![](/Front-End/Assets/pinia_2022-07-08_11-28-51.png)


    **index.ts**

        import type { App } from 'vue';
        import { createPinia } from 'pinia';

        const store = createPinia();

        export function setupStore(app: App<Element>) {
            app.use(store);
        }

        export { store };


    **main.ts**

        import {setupRouter} from './router'
        import {setupStore} from './stores'


        async function bootstrap(){
            const app = createApp(App)
            setupRouter(app)
            setupStore(app)

            app.mount('#app');
        }



- ## ✌ **封装axios**



- ## 🤦‍♀️ **使用css预编译处理器**

    - Less

            pnpm add less -D

    - Postcss 

            pnpm add postcss autoprefixer -D

        - 添加配置文件
            postcss.config.js

                module.exports = {
                    plugins: {
                        // 'postcss-import': {},
                        autoprefixer: {},
                    },
                }

    - tailwindcss

            pnpm add tailwindcss -D 

        - 添加配置文件 tailwind.config.js

                /** @type {import('tailwindcss').Config} */
                module.exports = {
                    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
                    theme: {
                        extend: {},
                    },
                    plugins: [],
                };

        -  创建index.css

                @tailwind base;
                @tailwind components;
                @tailwind utilities;

        - 在main.ts文件中 在引入UI样式之前引入 index.css

    - 混合使用 

        1. Less 和 Postcss
            
                pnpm add postcss-less
        2. Postcss 和 Tailwindcss
            
            在postcss配置文件的plugins中添加 tailwindcss: {},

- ## 🙌 **使用UI组件库**
  - ant-design-vue
        
    - 安装

            pnpm ant-design-vue
        
    - 导入ant样式 使用Less
        
        1. 在vite.config.ts文件中中添加

                css: {
                    preprocessorOptions: {
                        less: {
                            javascriptEnabled: true,
                        },
                    },
                },
        2. 在main.ts 中引入 

                import 'ant-design-vue/dist/antd.less';

        3. 覆盖ant样式和变量
            
                # index.less

                @import 'ant-design-vue/dist/antd.less';

                @import './reset.less';
                @import './mixin.less';
                @import './variables.less';


    - 使用 

        在对应的组件中引用



- ## 🤷‍♀️ **代码规范**

    - **prettier**

        ```
        pnpm add -D prettier 
        ```
        
        创建文件.prettierrc
        ```
        {
        "singleQuote": true,
        "trailingComma": "all",
        "printWidth": 80,
        "semi": true,
        "tabWidth": 4,
        "space": 2
        }
        ```

    - **Eslint**

        - 安装eslint
            ```
            pnpm add -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser
            ```

        - 创建eslintrc文件
            ```
            pnpm create @eslint/config
            ```
        - 配置文件 

            .eslintrc.js
            ```
            module.exports = {
            root: true,
            env: {
                browser: true,
                es2021: true,
                node: true,
                // 'vue/setup-compiler-macros': true ++,
            },
            globals: {
                Message: true,
                env: true,
                useRoute: true,
                useRouter: true,
                useStore: true,
            },
            parser: 'vue-eslint-parser',
            parserOptions: {
                ecmaVersion: 'latest',
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
                ecmaFeatures: {
                    tsx: true, // Allows for the parsing of JSX
                    jsx: true,
                },
            },
            extends: [
                'eslint:recommended',
                // 'plugin:vue/essential',
                'plugin:vue/vue3-recommended',
                // 'plugin:@typescript-eslint/recommended',
                'prettier',
                'plugin:prettier/recommended',
            ],
            plugins: ['vue', '@typescript-eslint'],
            rules: {
                'no-var': 'error',
                'vue/max-attributes-per-line': ['off'],
                'vue/v-on-event-hyphenation': [
                    'error',
                    'always' | 'never',
                    {
                        autofix: false,
                        ignore: [],
                    },
                ],
            },
            };
            ```    

            settings.json

            ```
            {
            "editor.wordWrap": "on", 
            "editor.codeActionsOnSave": {
                "source.fixAll.eslint": false,
            },
            "eslint.validate": [
                "vue",
                "html",
                "jsx",
                "tsx",
                "javascript",
                "typescript",
                "javascriptreact",
                "typescriptreact"
            ],
            "eslint.format.enable": true,
            "eslint.options": {
                //指定vscode的eslint所处理的文件的后缀
                "extensions": [".js", ".jsx", ".vue", ".react", ".ts", ".tsx"]
                },
            }
            ```
































    - **EditorConfig**

    - **husky & lint-staged**


- ## ✨ **提交约束**

- ## ✨ **单元测试**

- ## ✨ **CI/CD**


- ## 