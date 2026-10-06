"use strict";var o=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var i=o(function(x,a){
var e=require('@stdlib/ndarray-dtypes/dist'),s=require('@stdlib/blas-base-ndarray-gnrm2/dist'),u=require('@stdlib/blas-base-ndarray-dnrm2/dist'),c=require('@stdlib/blas-base-ndarray-snrm2/dist'),v=require('@stdlib/blas-base-ndarray-dznrm2/dist'),p=require('@stdlib/blas-base-ndarray-scnrm2/dist'),l=require('@stdlib/ndarray-base-unary-reduce-strided1d-dispatch-factory/dist'),m=e("numeric_and_generic"),_=e("real_floating_point_and_generic"),d={output:"real_floating_point_and_generic",casting:"none"},q={types:["float64","float32","complex128","complex64"],fcns:[u,c,v,p],default:s},f=l(q,[m],_,d);a.exports=f
});var g=i();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
