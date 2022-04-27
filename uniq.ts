/*  使用Array.from 
var a1 = [1, 2, 2, 3, 3, 3]
var uniq = function (a) {
    return Array.from(new Set(a))
}
uniq(a1)
*/

/* 使用展开操作符 
var a1 = [1, 2, 2, 3, 3, 3];
var uniq = function (a) {
    return [...new Set(a)]
};
*/

/*计数排序
var a1 = [1, 2, 2, 3, 3, 3]
var uniq = function (a) {
    var map = {}
        for(let i=0;i<a.length;i++){
            let number = a[i]
            if(number === undefined){continue}
            if(number in map){
                continue
            }
            map[number] = true
        }
    const result=[]
        for(let key in map){
            result.push(parseInt(key))
        }
    return result
}
1.只支持字符串
2.如果排序时既有数字和字符串，会把他们合二唯一无法区分
*/

/* 使用 weakmap 或 map 
var a1 = [1, 2, 2, 3, 3, 3]
var uniq = function (a) {
    var map = new Map()
    for (let i = 0; i < a.length; i++) {
        let number = a[i]
        if (number === undefined) { continue }
        if (map.has(number)) {
            continue
        }
        map.set(number, true)
    }
    return [...map.keys()]
}
Map 和普通对象的区别是它的key可以是任意类型的值，而普通对象的key只能是字符串
*/