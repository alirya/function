// import Return from "./return";
// import Infer from "./value/value";
// import ValueMemoize from "../return/memoize";
//
// /**
//  * Wrap {@link Return} and cache its value
//  *
//  * suitable to cached value from heave operation
//  */
// export default class MemoizeFromObject<
//     ReturnType extends Return
// > implements
//     Readonly<Return<Infer<ReturnType>>>
// {
//     public memoize : ValueMemoize<Readonly<Return<Infer<ReturnType>>>>;
//
//     constructor(
//         public subject : ReturnType
//     ) {
//
//         this.memoize = new ValueMemoize(<Return<Infer<ReturnType>>>{
//             get return()  {
//                 return subject.return;
//             }
//         });
//     }
//
//     get return () : Infer<ReturnType> {
//
//         return <Infer<ReturnType>>this.memoize.return;
//     }
//
// }
//# sourceMappingURL=memoize-from-object.js.map