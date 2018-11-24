module.exports=function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){"use strict";function s(t,e,r=11){e||(e=i(2,9));let s=0;return t.split("").reduceRight(function(t,r){return void 0!==e&&s>e.length-1&&(s=0),void 0!==e?e[s++]*parseInt(r,10)+t:0},0)%r}function n(t,e=9){return t.length!==e}function i(t,e){let r=[];for(;t<=e;)r.push(t++);return r}function u(t,e=8){return t.substring(0,e)}function a(t){return t<2?0:11-t}Object.defineProperty(e,"__esModule",{value:!0}),e.getModule=s,e.isDifferentFrom=n,e.isEqualTo=function(t,e){return!n(t,e)},e.arrayFromTo=i,e.getFirstXDigits=u,e.getSubtractionDigit=a,e.baseCalc=function(t,e,r){return!(!r&&n(t))&&(e||(e=u(t)),t===e+a(s(e)))},e.IsBetween=function(t,e,r){return t>=e&&t<=r}},function(t,e,r){"use strict";var s,n;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.VISA="visa",t.MASTERCARD="mastercard",t.AMEX="amex",t.DINERSCLUB="dinersClub",t.DISCOVER="discover",t.JCB="jcb",t.NONE=""}(s||(s={})),e.CARD_BRANDS=s,function(t){t.ACRE="ac",t.ALAGOAS="al",t.AMAZONAS="am",t.AMAPA="ap",t.BAHIA="ba",t.CEARA="ce",t.DISTRITO_FEDERAL="df",t.ESPIRITO_SANTO="es",t.GOIAS="go",t.MARANHAO="ma",t.MATOGROSSO="mt",t.MASOGROSSO_DO_SUL="ms",t.MINAS_GERAIS="mg",t.PARA="pa",t.PARAIBA="pb",t.PARANA="pr",t.PERNAMBUCO="pe",t.PIAUI="pi",t.RIO_DE_JANEIRO="rj",t.RIO_GRANDE_DO_NORTE="rn",t.RONDONIA="ro",t.RIO_GRANDE_DO_SUL="rs",t.RORAIMA="rr",t.SANTA_CATARINA="sc",t.SAO_PAULO="sp",t.SERGIPE="se",t.TOCANTINS="to",t.NONE=""}(n||(n={})),e.BRAZIL_STATES=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(3),n=new s.CC;e.CC=n;const i=new s.CNH;e.CNH=i;const u=new s.CNPJ;e.CNPJ=u;const a=new s.CPF;e.CPF=a;const c=new s.IE;e.IE=c;const o=new s.PIS;e.PIS=o;const l=new s.TE;e.TE=l,(t=>{t.LSDocs={CC:n,CNH:i,CNPJ:u,CPF:a,IE:c,PIS:o,TE:l}})("undefined"!=typeof window?window:{})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(4);e.CC=s.default;const n=r(5);e.CNH=n.default;const i=r(6);e.CNPJ=i.default;const u=r(7);e.CPF=u.default;const a=r(8);e.IE=a.default;const c=r(37);e.PIS=c.default;const o=r(38);e.TE=o.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(1);e.default=class{constructor(){this.cardsRegex={visa:/^4[0-9]{12}(?:[0-9]{3})/,mastercard:/^5[1-5][0-9]{14}/,amex:/^3[47][0-9]{13}/,dinersclub:/^3(?:0[0-5]|[68][0-9])[0-9]{11}/,discover:/^6(?:011|5[0-9]{2})[0-9]{12}/,jcb:/^(?:2131|1800|35\d{3})\d{11}/},this.BRANDS=s.CARD_BRANDS}validate(t,e=s.CARD_BRANDS.NONE){return t=t.replace(/[^\d]+/g,""),void 0!==e&&null!==e&&e!==s.CARD_BRANDS.NONE&&null!==t.match(this.cardsRegex[e.toString()])}hasValidCard(t){if(!(t=t.replace(/[^\d]+/g,"")))return!1;for(var e in s.CARD_BRANDS)return null!==t.match(this.cardsRegex[s.CARD_BRANDS[e]]);return!1}getValidCard(t){if(!(t=t.replace(/[^\d]+/g,"")))return s.CARD_BRANDS.NONE;for(let e in s.CARD_BRANDS){let r=s.CARD_BRANDS[e];if(null!==t.match(this.cardsRegex[r]))switch(r){case s.CARD_BRANDS.VISA:return s.CARD_BRANDS.VISA;case s.CARD_BRANDS.MASTERCARD:return s.CARD_BRANDS.MASTERCARD;case s.CARD_BRANDS.JCB:return s.CARD_BRANDS.JCB;case s.CARD_BRANDS.DISCOVER:return s.CARD_BRANDS.DISCOVER;case s.CARD_BRANDS.DINERSCLUB:return s.CARD_BRANDS.DINERSCLUB;case s.CARD_BRANDS.AMEX:return s.CARD_BRANDS.AMEX}}return s.CARD_BRANDS.NONE}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.COMMON=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999","12345678909","12345678910"]}validate(t){if(!(t=(t||"").toString().replace(/[^\d]/g,""))||11!==t.length||this.COMMON.indexOf(t)>=0)return!1;var e,r,s=9,n=0,i=0,u=0,a=0;if(!t||-1!==this.COMMON.indexOf(t)||t.length<11)return!1;e=t.substring(0,9),r=t.substring(9,t.length);for(var c=0;c<9;c++)n+=parseInt(e[c])*s--;for(a=10===(i=parseInt((n%11+"").split(".")[0]))?-2:a,i=i>9?0:i,n=0,s=1,c=0;c<9;c++)n+=parseInt(e[c])*s++;return r==""+i+(u=(u=(n=n%11+a)<0?11+n:n)>9?0:u)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.COMMON=["00000000000000","11111111111111","22222222222222","33333333333333","44444444444444","55555555555555","66666666666666","77777777777777","88888888888888","99999999999999"]}getVerifyDigit(t){var e=2,r=t.split("").reverse().map(t=>parseInt(t)).reduce(function(t,r){return t+=r*e,e=9===e?2:e+1,t},0)%11;return(r<2?0:11-r).toString()}validate(t){if(!(t=(t||"").toString().replace(/[^\d]/g,"")))return!1;if(14!==t.length)return!1;if(this.COMMON.indexOf(t)>=0)return!1;let e=t.substr(0,12);return e+=this.getVerifyDigit(e),(e+=this.getVerifyDigit(e)).substr(-2)===t.substr(-2)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.COMMON=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999","12345678909","12345678910"]}verifyDigit(t){let e=t.split("").map(t=>parseInt(t,10));var r=e.length+1,s=e.map((t,e)=>t*(r-e)).reduce((t,e)=>t+e)%11;return s<2?0:11-s}validate(t){if(!(t=t.toString().replace(/[^\d]/g,""))||11!==t.length||this.COMMON.indexOf(t)>=0)return!1;var e=t.substr(0,9);return e+=this.verifyDigit(e),(e+=this.verifyDigit(e)).substr(-2)===t.substr(-2)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(1),n=r(9);e.default=class{constructor(){this.STATES=Object.assign({},s.BRAZIL_STATES)}validate(t,e=s.BRAZIL_STATES.NONE){if(e===s.BRAZIL_STATES.NONE)throw new Error("Invalid state");if(!t)throw new Error("ieNumber must be informed");if(t.match(/^ISENTO$/i))return!0;if(t=t.replace(/[\.|\-|\/|\s]/g,""),/^\d+$/.test(t)||e===s.BRAZIL_STATES.SAO_PAULO)switch(e){case s.BRAZIL_STATES.ACRE:return n.AC.validate(t);case s.BRAZIL_STATES.ALAGOAS:return n.AL.validate(t);case s.BRAZIL_STATES.AMAPA:return n.AP.validate(t);case s.BRAZIL_STATES.AMAZONAS:return n.AM.validate(t);case s.BRAZIL_STATES.BAHIA:return n.BA.validate(t);case s.BRAZIL_STATES.CEARA:return n.CE.validate(t);case s.BRAZIL_STATES.DISTRITO_FEDERAL:return n.DF.validate(t);case s.BRAZIL_STATES.ESPIRITO_SANTO:return n.ES.validate(t);case s.BRAZIL_STATES.GOIAS:return n.GO.validate(t);case s.BRAZIL_STATES.MARANHAO:return n.MA.validate(t);case s.BRAZIL_STATES.MASOGROSSO_DO_SUL:return n.MS.validate(t);case s.BRAZIL_STATES.MATOGROSSO:return n.MT.validate(t);case s.BRAZIL_STATES.MINAS_GERAIS:return n.MG.validate(t);case s.BRAZIL_STATES.PARA:return n.PA.validate(t);case s.BRAZIL_STATES.PARAIBA:return n.PB.validate(t);case s.BRAZIL_STATES.PARANA:return n.PR.validate(t);case s.BRAZIL_STATES.PERNAMBUCO:return n.PE.validate(t);case s.BRAZIL_STATES.PIAUI:return n.PI.validate(t);case s.BRAZIL_STATES.RIO_DE_JANEIRO:return n.RJ.validate(t);case s.BRAZIL_STATES.RIO_GRANDE_DO_NORTE:return n.RN.validate(t);case s.BRAZIL_STATES.RIO_GRANDE_DO_SUL:return n.RS.validate(t);case s.BRAZIL_STATES.RONDONIA:return n.RO.validate(t);case s.BRAZIL_STATES.RORAIMA:return n.RR.validate(t);case s.BRAZIL_STATES.SANTA_CATARINA:return n.SC.validate(t);case s.BRAZIL_STATES.SAO_PAULO:return n.SP.validate(t);case s.BRAZIL_STATES.SERGIPE:return n.SE.validate(t);case s.BRAZIL_STATES.TOCANTINS:return n.TO.validate(t);default:throw new Error("Invalid state")}return!1}hasValidState(t){return this.getValidState(t)!==s.BRAZIL_STATES.NONE}getValidState(t){for(let e in s.BRAZIL_STATES){let r=s.BRAZIL_STATES[e];if(r!==s.BRAZIL_STATES.NONE&&this.validate(t,r))return r}return s.BRAZIL_STATES.NONE}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(10);e.AC=s.default;const n=r(11);e.AL=n.default;const i=r(12);e.AM=i.default;const u=r(13);e.AP=u.default;const a=r(14);e.BA=a.default;const c=r(15);e.CE=c.default;const o=r(16);e.DF=o.default;const l=r(17);e.ES=l.default;const f=r(18);e.GO=f.default;const d=r(19);e.MA=d.default;const A=r(20);e.MG=A.default;const S=r(21);e.MS=S.default;const _=r(22);e.MT=_.default;const g=r(23);e.PA=g.default;const R=r(24);e.PB=R.default;const O=r(25);e.PE=O.default;const D=r(26);e.PI=D.default;const v=r(27);e.PR=v.default;const I=r(28);e.RJ=I.default;const M=r(29);e.RN=M.default;const T=r(30);e.RO=T.default;const b=r(31);e.RR=b.default;const p=r(32);e.RS=p.default;const E=r(33);e.SC=E.default;const N=r(34);e.SE=N.default;const C=r(35);e.SP=C.default;const P=r(36);e.TO=P.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t,13))return!1;if(!t.startsWith("01"))return!1;let e=s.getFirstXDigits(t,11),r=s.getSubtractionDigit(s.getModule(e));return t===e+r+s.getSubtractionDigit(s.getModule(e+r))}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t))return!1;if(!t.startsWith("24"))return!1;let e=s.getFirstXDigits(t),r=10*s.getModule(e);return t===e+(10==(r-=11*parseInt((r/11).toString(),10))?0:r)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){return!s.isDifferentFrom(t)&&s.baseCalc(t,"",!1)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t))return!1;if(!t.startsWith("03"))return!1;let e,r,n=s.getFirstXDigits(t);s.IsBetween(parseInt(n),3000001,3017e3)?(e=5,r=0):s.IsBetween(parseInt(n),3017001,3019022)?(e=9,r=1):(e=0,r=0);let i,u=s.getModule(e+n,[2,3,4,5,6,7,8,9,1]);return t===n+(i=1===u?0:0===u?r:11-u)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t,8)&&s.isDifferentFrom(t))return!1;let e,r,n,i,u=s.getFirstXDigits(t,t.length-2),a=s.arrayFromTo(2,7),c=s.arrayFromTo(2,8),o=t.substring(0,1);return s.isEqualTo(t,9)&&(a.push(8),c.push(9),o=t.substring(1,2)),-1!=="0123458".split("").indexOf(o)?(r=0===(i=s.getModule(u,a,10))?0:10-i,e=0===(n=s.getModule(u+r,c,10))?0:10-n):(i=s.getModule(u,a),r=s.getSubtractionDigit(i),n=s.getModule(u+r,c),e=s.getSubtractionDigit(n)),t===u+e+r}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){return!s.isDifferentFrom(t)&&s.baseCalc(t,"",!1)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t,13))return!1;if(!t.startsWith("07"))return!1;let e=s.getFirstXDigits(t,11),r=s.getSubtractionDigit(s.getModule(e));return t===e+r+s.getSubtractionDigit(s.getModule(e+r))}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){return s.baseCalc(t,"",!1)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t))return!1;if(-1===["10","11","15"].indexOf(t.substring(0,2)))return!1;let e=s.getFirstXDigits(t);if("11094402"===e)return"1"===t.substr(8)||"0"===t.substr(8);let r,n=s.getModule(e);return t===e+(r=0===n?0:1===n?s.IsBetween(parseInt(e),10103105,10119997)?1:0:11-n)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){return!s.isDifferentFrom(t)&&!!t.startsWith("12")&&s.baseCalc(t,"",!1)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t,13))return!1;let e=s.getFirstXDigits(t,11),r=0,n=(t.substring(0,3)+"0"+t.substring(3,11)).split("").reduceRight(function(t,e){return r>[2,1].length-1&&(r=0),([2,1][r++]*parseInt(e,10)).toString()+t.toString()},"").split("").reduce(function(t,e){return t+parseInt(e)},0),i=10*(parseInt((n/10).toString())+1)-n;return 10===i&&(i=0),t===e+i+s.getSubtractionDigit(s.getModule(e+i,s.arrayFromTo(2,11)))}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){return!!t.startsWith("28")&&s.baseCalc(t,"",!1)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t,11)&&s.isDifferentFrom(t))return!1;let e=s.isEqualTo(t,11)?t.substring(0,10):s.getFirstXDigits(t);return s.baseCalc(t,e,!0)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){return!s.isDifferentFrom(t)&&!!t.startsWith("15")&&s.baseCalc(t,"",!1)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){return!s.isDifferentFrom(t)&&s.baseCalc(t,"",!1)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){let e=t.substring(0,t.length-2),r=s.getModule(e),n=11-r>=10?0:11-r,i=s.getModule(e+n);return t===e+n+(11-i>=10?0:11-i)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){return s.baseCalc(t,"",!1)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t,10))return!1;let e=s.getFirstXDigits(t),r=s.getModule(e,s.arrayFromTo(2,7)),n=11-r>=10?0:11-r,i=s.getModule(e+n,s.arrayFromTo(2,7));return t===e+n+(11-i>=10?0:11-i)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t,8))return!1;let e=s.getFirstXDigits(t,7);return t===e+s.getSubtractionDigit(s.getModule(e,s.arrayFromTo(2,7)))}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t)&&s.isDifferentFrom(t,10))return!1;if(!t.startsWith("20"))return!1;let e=t.substring(0,t.length-1),r=s.arrayFromTo(2,9);s.isEqualTo(t,10)&&r.push(10);let n=10*s.getModule(e,r)%11;return t===e+(10===n?0:n)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){let e,r,n;return s.isEqualTo(t,9)?(e=t.substring(3,8),r=s.getSubtractionDigit(s.getModule(e)),t===t.substring(0,3)+e+r):!!s.isEqualTo(t,14)&&t===(e=s.getFirstXDigits(t,13))+(r=(n=s.getModule(e))<=1?1:11-n)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t))return!1;if(!t.startsWith("24"))return!1;let e=s.getFirstXDigits(t);return t===e+s.getModule(e,[8,7,6,5,4,3,2,1],9)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t,10))return!1;let e=s.getFirstXDigits(t,9);return s.baseCalc(t,e,!0)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){return s.baseCalc(t,"",!1)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){return!s.isDifferentFrom(t)&&s.baseCalc(t,"",!1)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){let e;if("P"===(t=t.toUpperCase()).substr(0,1)){if(s.isDifferentFrom(t,13))return!1;let r=t.substring(1,9);e=t.substring(10,13);let n=s.getModule(r,[10,8,7,6,5,4,3,1]).toString();return t==="P"+r+(n.length>1?n[1]:n[0])+e}{if(s.isDifferentFrom(t,12))return!1;let r=s.getFirstXDigits(t);e=t.substring(9,11);let n=s.getModule(r,[10,8,7,6,5,4,3,1]).toString(),i=n.length>1?n[1]:n[0],u=s.getModule(r+i+e,s.arrayFromTo(2,10)).toString();return t===r+i+e+(u.length>1?u[1]:u[0])}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);e.default=class{constructor(){}static validate(t){if(s.isDifferentFrom(t)&&s.isDifferentFrom(t,11))return!1;let e;if(s.isEqualTo(t,11)){if(-1===["01","02","03","99"].indexOf(t.substring(2,4)))return!1;e=t.substring(0,2)+t.substring(4,10)}else e=s.getFirstXDigits(t);let r=s.getSubtractionDigit(s.getModule(e));return t===t.substring(0,t.length-1)+r}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.COMMOM=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999"]}validate(t){if(!t)return!1;var e=0,r=0;if(11!==(t=t.replace(/[^\d]+/g,"")).length||-1!==this.COMMOM.indexOf(t))return!1;for(var s=0;s<10;s++)e+=parseInt(t.substring(s,s+1))*parseInt("3298765432".substring(s,s+1));return(r=10==(r=11-e%11)||11===r?0:r)===parseInt(""+t.charAt(10))}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.COMMOM=["000000000000","111111111111","222222222222","333333333333","444444444444","555555555555","666666666666","777777777777","888888888888","999999999999"]}validate(t){if(!t)return!1;if(!(t=t.replace(/[^\d]+/g,""))||12!==t.length||-1!==this.COMMOM.indexOf(t))return!1;for(var e,r=0,s=0,n=0;n<"23456789".length;n++)r+=parseInt(t[n])*parseInt("23456789"[n]);return s=10===(r=parseInt((r%11+"").split(".")[0]))?0:r,r=7*parseInt(t[8])+8*parseInt(t[9])+9*parseInt(s.toString()),e=10===(r=parseInt((r%11+"").split(".")[0]))?0:r,parseInt(t[t.length-2])===s&&parseInt(t[t.length-1])===e}}}]);