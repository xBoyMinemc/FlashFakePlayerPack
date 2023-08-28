// src/summon.js
const summon = <T extends (...args: any) => any>(total:number, fn:T) => {
  const summoner = (...args:Parameters<typeof fn>) => fn.apply(null, args);
  Reflect.defineProperty(summoner, "length", { value: total });
  return summoner;
};





// src/curry.js
const curry = (fun:Function & {origin?:Function}) => {
  if (fun.length < 2 || fun.origin)
    return fun;
  const result : Function & {origin?:Function} = summon(
    fun.length,
    (...args:any[]) => args.length >= fun.length ? fun.apply(null, args) : curry(fun.bind(null, ...args))
  );
  result.origin = fun;
  return result;
};
const uncurry = (fun:Function&{origin:Function}) => fun.origin;

export default curry


// const a =(x:number,y:string,z:object) : number=>1

// const b = curry(a)