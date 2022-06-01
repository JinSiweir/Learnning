function looseJsonParse(obj) {
    return Function('"use strict";return (' + obj + ')')();
}
const b = looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}")

console.log(b.c);
