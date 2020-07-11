# Text输入框
通过鼠标或键盘输入字符

### 基础用法

>> Input 为受控组件，它总会显示 Vue 绑定值 。<br>
>> 支持绑定 v-model 指令，但不支持其修饰符功能。


<example name="first">

```html
 <aqire-input placeholder="请输入内容"></aqire-input>
```

</example>



### 密码输入
设置`password`属性，可输入密码。

<!-- 示例代码 begin -->
<!-- 示例代码 end -->

```html

```


### 限制输入长度

<!-- 示例代码 begin -->
<!-- 示例代码 end -->

```html

```


### 格式化输入内容
设置`format`属性，对输入的内容格式化展示

<!-- 示例代码 begin -->
<!-- 示例代码 end -->

```html

```

```js
new Vue ( {
     // ...
     methods: {
        formatter( event ) {
            // 必须返回处理后的值
            return event.target.value = event.target.value.replace( /[^\d]/g, '' );
        }
     }
} );
```

### 禁用输入框
设置`disabled`属性，可控制是否禁止输入。

<!-- 示例代码 begin -->
<!-- 示例代码 end -->

```html

```

### 可清除
设置 `clearable`属性，可使输入的内容全部清空。
图标在鼠标移入时显示，清除时同步发出 clean事件

<!-- 示例代码 begin -->
<!-- 示例代码 end -->

```html

```


### 搜索
设置`search`属性。点击图标时，如果监听了 keydown.enter事件，则会同时触发此事件。

<!-- 示例代码 begin -->
<!-- 示例代码 end -->

```html

```
```js
new Vue ( {
     // ...
     methods: {
        onSearch(val) {
            alert(val)
        },
        onKeydown(event) {
            alert(event)
        }       
     }
} );
```


### Attributes
| 参数         | 说明                                          | 类型          | 可选值                                    | 默认值   |
|-----------------------|-----------------------------------------------|---------------|-------------------------------------------|----------|
| value / v-model       | 值                                            | `string`      |  -                                        |     -    |
| password    | 密码输入                                       | `boolean`      |  true / false                             |  false   |
| disabled    | 禁用按钮                                       | `boolean`      |  true / false                             |  false   |
| readonly    | 只读                                          | `boolean`      |  true / false                             |  false   |
| cleanable   | 显示清除按钮                                   | `boolean`      |  true / false                             |  false   |
| search      | 显示搜索按钮                                   | `boolean`      |  true / false                             |  false   |
| 原生标签属性 |  支持除了type的其他原生input属性                | -               |  -                                       |  -        |


### Slots
| name      | 说明                    |
|-----------|-------------------------|
|default    | 替换ico |


### Events
|   事件名称     |  说明                                                | 回调参数              |
|---------------|------------------------------------------------------|----------------------|
| search        | 点击搜索图标，或者在输入框内回车时触发                   | (value:any)              |
| clean         | 点击清除图标时触发                                     | ()              |
| 原生标签事件   | 支持input 标签所有的原生事件，比如click、blur等         | (event: Event)      |

