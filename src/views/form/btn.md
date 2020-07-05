# Button按钮
[//]: # ( <fubangfu2015@163.com> 2020/7/4 )

### 基础用法
基础的按钮用法


```html

```

<!-- 示例代码 begin -->
<example></example>
<!-- 示例代码 end -->


### 禁用按钮
只需要设置组件的`disabled`属性为`true`即可。

```html

```

<!-- 示例代码 begin -->
<example i="2"></example>
<!-- 示例代码 end -->


### Attributes
| 参数         | 说明         | 类型       | 可选值                                     | 默认值   |
|-------------|------------- | ---------- |------------------------------------------ |--------  |
| label       | 按钮文本     | `string`     |  -                                         |     -    |
| type        | 类型         | `string`     |   primary / secondary / danger / blue     |     -    |
| native      | 原生类型     | `string`     |  button / submit / reset                  |  button   |
| disabled    | 是否禁用     | `boolean`    |    true / false                           |  false    |
| loading     | 是否加载中   | `boolean`    |    true / false                           |  false    |
| - |  支持button标签其他所有的原生属性         | -          |    -                                      |  -        |


### Events
|   事件名称     |  说明                                                | 回调参数              |
|---------------|------------------------------------------------------|----------------------|
| 原生标签事件   | 支持button标签所有的原生事件，比如click、blur等         | (event: Event)       |

