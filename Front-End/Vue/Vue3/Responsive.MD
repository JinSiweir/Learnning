## 响应式基础


```
1. setup(){
    const state = reactive({count:0})
    return 
}
2. <script setup>
    const state = reactive({count:0})
    </script>
```

### 更新DOM

**nextTick()回调更新dom**

### 响应式代理

响应式函数返回的是原始对象的Proxy 通过操作代理来实现响应式
### 响应式函数 
**对象类型 reactive ()** 

```
#接口
import { reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

const book: Book = reactive({ title: 'Vue 3 指引' })
```
**所有类型 ref()**

```
import { ref } from 'vue'
import type { Ref } from 'vue'

#Ref
const year: Ref<string | number> = ref('2020')

#泛型参数
const year = ref<string | number>('2020')

```