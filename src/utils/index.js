import {useEffect, useState} from "react";

export const isFalsy = (value) => value === 0 ? false : !value
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

// 自定义hook只能在 1.其他hook中运行   2.组件中运行
// 所以这个自定义hook useMount 要以use开头
export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebounce = (value,delay)=>{
  const [debounceValue,setDebouncedValue] = useState(value)
  
  useEffect(()=>{
    const timeout = setTimeout(()=> setDebouncedValue(value), delay)    //每次再value变化以后都会设置一个定时器，delay变化的时候也会设置一个定时器
    return ()=> clearTimeout(timeout)    //每次在上一个useEffect处理完再运行
  },[value,delay])
  return debounceValue  // return了一个debounce 但是没有提供set的方法
}
// const debounce = (func, delay) => {
//   let timeout;
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(function () {
//       func()
//     }, delay)
//   }
// }
// const log = debounce(() => console.log('call'), 5000)
// log()
// log()
// log()
