这是一个倒计时组件

## Demo

countdown

## API

| 属性 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| endDate | 结束的时间，即倒计时会从当前时间一直到 endDate 停止，可以是一个日期对象，也可以是毫秒数 默认值：0 | `Date | number` | - | `false` |
| etype | 类型：要怎么显示倒计时：4-日时分秒，3-时分秒，2-分秒，1-秒 默认值：4 | `number | string` | - | `false` |
| eUnit | 时间单位，显示在空隙之间的文字，比如：['天','时','分','秒'] 或 [':',':',':'] 默认值：【】 | `string[]` | - | `false` |
| eTimeUp | 当倒计时走到 0 时会触发一次，表示时间到了 | `(() => void) | undefined` | - | `false` |
| id | 必填 | `string` | - | `true` |
