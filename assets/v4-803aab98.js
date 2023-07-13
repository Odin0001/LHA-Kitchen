import{h as ve,C as xe,i as ie,S as De,k as G,l as Le,n as Be,o as Me,q as Fe,F as qe,s as He}from"./index-56e58669.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="firebasestorage.googleapis.com",fe="storageBucket",ze=2*60*1e3,$e=10*60*1e3,je=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends qe{constructor(e,n,s=0){super(Z(e),`Firebase Storage: ${n} (${Z(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Z(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var l;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(l||(l={}));function Z(t){return"storage/"+t}function ee(){const t="An unknown error occurred, please check the error payload for server response.";return new d(l.UNKNOWN,t)}function Ve(t){return new d(l.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ge(t){return new d(l.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Xe(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(l.UNAUTHENTICATED,t)}function We(){return new d(l.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ke(t){return new d(l.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function pe(){return new d(l.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function me(){return new d(l.CANCELED,"User canceled the upload/download.")}function Ze(t){return new d(l.INVALID_URL,"Invalid URL '"+t+"'.")}function Ye(t){return new d(l.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Je(){return new d(l.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fe+"' property when initializing the app?")}function ge(){return new d(l.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Qe(){return new d(l.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function et(){return new d(l.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tt(t){return new d(l.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Q(t){return new d(l.INVALID_ARGUMENT,t)}function be(){return new d(l.APP_DELETED,"The Firebase app was deleted.")}function nt(t){return new d(l.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function F(t,e){return new d(l.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function M(t){throw new d(l.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=k.makeFromUrl(e,n)}catch{return new k(e,"")}if(s.path==="")return s;throw Ye(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",u=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const h="v[A-Za-z0-9_]+",_=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${_}/${h}/b/${r}/o${p}`,"i"),g={bucket:1,path:3},E=n===_e?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",A=new RegExp(`^https?://${E}/${r}/${f}`,"i"),T=[{regex:u,indices:a,postModify:i},{regex:m,indices:g,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<T.length;b++){const P=T[b],v=P.regex.exec(e);if(v){const W=v[P.indices.bucket];let B=v[P.indices.path];B||(B=""),s=new k(W,B),P.postModify(s);break}}if(s==null)throw Ze(e);return s}}class st{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e,n){let s=1,r=null,i=null,o=!1,u=0;function a(){return u===2}let c=!1;function h(...f){c||(c=!0,e.apply(null,f))}function _(f){r=setTimeout(()=>{r=null,t(m,a())},f)}function p(){i&&clearTimeout(i)}function m(f,...A){if(c){p();return}if(f){p(),h.call(null,f,...A);return}if(a()||o){p(),h.call(null,f,...A);return}s<64&&(s*=2);let T;u===1?(u=2,T=0):T=(s+Math.random())*1e3,_(T)}let g=!1;function E(f){g||(g=!0,p(),!c&&(r!==null?(f||(u=2),clearTimeout(r),_(0)):f||(u=1)))}return _(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function it(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t!==void 0}function at(t){return typeof t=="function"}function ut(t){return typeof t=="object"&&!Array.isArray(t)}function X(t){return typeof t=="string"||t instanceof String}function oe(t){return te()&&t instanceof Blob}function te(){return typeof Blob<"u"&&!He()}function ae(t,e,n,s){if(s<e)throw Q(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Q(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Re(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(N||(N={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,s,r,i,o,u,a,c,h,_,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=u,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=_,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new z(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=u=>{const a=u.loaded,c=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const u=i.getErrorCode()===N.NO_ERROR,a=i.getStatus();if(!u||Te(a,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===N.ABORT;s(!1,new z(!1,null,h));return}const c=this.successCodes_.indexOf(a)!==-1;s(!0,new z(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(u,u.getResponse());ot(a)?i(a):i()}catch(a){o(a)}else if(u!==null){const a=ee();a.serverResponse=u.getErrorText(),this.errorCallback_?o(this.errorCallback_(u,a)):o(a)}else if(r.canceled){const a=this.appDelete_?be():me();o(a)}else{const a=pe();o(a)}};this.canceled_?n(!1,new z(!1,null,!0)):this.backoffId_=rt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&it(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class z{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function lt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ht(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _t(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ft(t,e,n,s,r,i,o=!0){const u=Re(t.urlParams),a=t.url+u,c=Object.assign({},t.headers);return dt(c,e),lt(c,n),ht(c,i),_t(c,s),new ct(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function mt(...t){const e=pt();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(te())return new Blob(t);throw new d(l.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function gt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){if(typeof atob>"u")throw tt("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Y{constructor(e,n){this.data=e,this.contentType=n||null}}function Rt(t,e){switch(t){case U.RAW:return new Y(we(e));case U.BASE64:case U.BASE64URL:return new Y(ye(t,e));case U.DATA_URL:return new Y(wt(e),yt(e))}throw ee()}function we(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Tt(t){let e;try{e=decodeURIComponent(t)}catch{throw F(U.DATA_URL,"Malformed data URL.")}return we(e)}function ye(t,e){switch(t){case U.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw F(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case U.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw F(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bt(e)}catch(r){throw r.message.includes("polyfill")?r:F(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ke{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw F(U.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=kt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function wt(t){const e=new ke(t);return e.base64?ye(U.BASE64,e.rest):Tt(e.rest)}function yt(t){return new ke(t).contentType}function kt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,n){let s=0,r="";oe(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(oe(this.data_)){const s=this.data_,r=gt(s,e,n);return r===null?null:new I(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new I(s,!0)}}static getBlob(...e){if(te()){const n=e.map(s=>s instanceof I?s.data_:s);return new I(mt.apply(null,n))}else{const n=e.map(o=>X(o)?Rt(U.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let u=0;u<o.length;u++)r[i++]=o[u]}),new I(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){let e;try{e=JSON.parse(t)}catch{return null}return ut(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ut(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Ue(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){return e}class w{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||At}}let $=null;function Ot(t){return!X(t)||t.length<2?t:Ue(t)}function Ae(){if($)return $;const t=[];t.push(new w("bucket")),t.push(new w("generation")),t.push(new w("metageneration")),t.push(new w("name","fullPath",!0));function e(i,o){return Ot(o)}const n=new w("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new w("size");return r.xform=s,t.push(r),t.push(new w("timeCreated")),t.push(new w("updated")),t.push(new w("md5Hash",null,!0)),t.push(new w("cacheControl",null,!0)),t.push(new w("contentDisposition",null,!0)),t.push(new w("contentEncoding",null,!0)),t.push(new w("contentLanguage",null,!0)),t.push(new w("contentType",null,!0)),t.push(new w("metadata","customMetadata",!0)),$=t,$}function St(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new k(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function It(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return St(s,t),s}function Oe(t,e,n){const s=Ee(e);return s===null?null:It(t,s,n)}function Nt(t,e,n,s){const r=Ee(e);if(r===null||!X(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=t.bucket,_=t.fullPath,p="/b/"+o(h)+"/o/"+o(_),m=q(p,n,s),g=Re({alt:"media",token:c});return m+g})[0]}function Se(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class L{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){if(!t)throw ee()}function ne(t,e){function n(s,r){const i=Oe(t,r,e);return S(i!==null),i}return n}function Ct(t,e){function n(s,r){const i=Oe(t,r,e);return S(i!==null),Nt(i,r,t.host,t._protocol)}return n}function H(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=We():r=Xe():n.getStatus()===402?r=Ge(t.bucket):n.getStatus()===403?r=Ke(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Ie(t){const e=H(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Ve(t.path)),i.serverResponse=r.serverResponse,i}return n}function Pt(t,e,n){const s=e.fullServerUrl(),r=q(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new L(r,i,ne(t,n),o);return u.errorHandler=Ie(e),u}function vt(t,e,n){const s=e.fullServerUrl(),r=q(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new L(r,i,Ct(t,n),o);return u.errorHandler=Ie(e),u}function xt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ne(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=xt(null,e)),s}function Dt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function u(){let T="";for(let b=0;b<2;b++)T=T+Math.random().toString().slice(2);return T}const a=u();o["Content-Type"]="multipart/related; boundary="+a;const c=Ne(e,s,r),h=Se(c,n),_="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+a+"--",m=I.getBlob(_,s,p);if(m===null)throw ge();const g={name:c.fullPath},E=q(i,t.host,t._protocol),f="POST",A=t.maxUploadRetryTime,O=new L(E,f,ne(t,n),A);return O.urlParams=g,O.headers=o,O.body=m.uploadData(),O.errorHandler=H(e),O}class V{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function se(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{S(!1)}return S(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Lt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Ne(e,s,r),u={name:o.fullPath},a=q(i,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},_=Se(o,n),p=t.maxUploadRetryTime;function m(E){se(E);let f;try{f=E.getResponseHeader("X-Goog-Upload-URL")}catch{S(!1)}return S(X(f)),f}const g=new L(a,c,m,p);return g.urlParams=u,g.headers=h,g.body=_,g.errorHandler=H(e),g}function Bt(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(c){const h=se(c,["active","final"]);let _=null;try{_=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{S(!1)}_||S(!1);const p=Number(_);return S(!isNaN(p)),new V(p,s.size(),h==="final")}const o="POST",u=t.maxUploadRetryTime,a=new L(n,o,i,u);return a.headers=r,a.errorHandler=H(e),a}const ue=256*1024;function Mt(t,e,n,s,r,i,o,u){const a=new V(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw Qe();const c=a.total-a.current;let h=c;r>0&&(h=Math.min(h,r));const _=a.current,p=_+h;let m="";h===0?m="finalize":c===h?m="upload, finalize":m="upload";const g={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${a.current}`},E=s.slice(_,p);if(E===null)throw ge();function f(b,P){const v=se(b,["active","final"]),W=a.current+h,B=s.size();let K;return v==="final"?K=ne(e,i)(b,P):K=null,new V(W,B,v==="final",K)}const A="POST",O=e.maxUploadRetryTime,T=new L(n,A,f,O);return T.headers=g,T.body=E.uploadData(),T.progressCallback=u||null,T.errorHandler=H(t),T}const y={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function J(t){switch(t){case"running":case"pausing":case"canceling":return y.RUNNING;case"paused":return y.PAUSED;case"success":return y.SUCCESS;case"canceled":return y.CANCELED;case"error":return y.ERROR;default:return y.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n,s){if(at(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class qt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=N.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=N.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=N.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw M("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw M("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw M("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw M("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw M("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ht extends qt{initXhr(){this.xhr_.responseType="text"}}function D(){return new Ht}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Ae(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(l.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Te(r.status,[]))if(i)r=pe();else{this.sleepTime=Math.max(this.sleepTime*2,je),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(l.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=Lt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,D,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=Bt(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,D,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ue*this._chunkMultiplier,n=new V(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=Mt(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const u=this._ref.storage._makeRequest(o,D,r,i,!1);this._request=u,u.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ue*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=Pt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,D,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Dt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,D,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=me(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=J(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new Ft(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(J(this._state)){case y.SUCCESS:x(this._resolve.bind(null,this.snapshot))();break;case y.CANCELED:case y.ERROR:const n=this._reject;x(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(J(this._state)){case y.RUNNING:case y.PAUSED:e.next&&x(e.next.bind(e,this.snapshot))();break;case y.SUCCESS:e.complete&&x(e.complete.bind(e))();break;case y.CANCELED:case y.ERROR:e.error&&x(e.error.bind(e,this._error))();break;default:e.error&&x(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,n){this._service=e,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new C(e,n)}get root(){const e=new k(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ue(this._location.path)}get storage(){return this._service}get parent(){const e=Et(this._location.path);if(e===null)return null;const n=new k(this._location.bucket,e);return new C(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nt(e)}}function $t(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new zt(t,new I(e),n)}function jt(t){t._throwIfRoot("getDownloadURL");const e=vt(t.storage,t._location,Ae());return t.storage.makeRequestWithTokens(e,D).then(n=>{if(n===null)throw et();return n})}function Vt(t,e){const n=Ut(t._location.path,e),s=new k(t._location.bucket,n);return new C(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t){return/^[A-Za-z]+:\/\//.test(t)}function Xt(t,e){return new C(t,e)}function Ce(t,e){if(t instanceof re){const n=t;if(n._bucket==null)throw Je();const s=new C(n,n._bucket);return e!=null?Ce(s,e):s}else return e!==void 0?Vt(t,e):t}function Wt(t,e){if(e&&Gt(e)){if(t instanceof re)return Xt(t,e);throw Q("To use ref(service, url), the first argument must be a Storage instance.")}else return Ce(t,e)}function ce(t,e){const n=e==null?void 0:e[fe];return n==null?null:k.makeFromBucketSpec(n,t)}function Kt(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Fe(r,t.app.options.projectId))}class re{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=_e,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ze,this._maxUploadRetryTime=$e,this._requests=new Set,r!=null?this._bucket=k.makeFromBucketSpec(r,this._host):this._bucket=ce(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,e):this._bucket=ce(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ae("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ae("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new C(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new st(be());{const o=ft(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const le="@firebase/storage",he="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="storage";function rn(t,e,n){return t=G(t),$t(t,e,n)}function on(t){return t=G(t),jt(t)}function an(t,e){return t=G(t),Wt(t,e)}function un(t=Me(),e){t=G(t);const s=Le(t,Pe).getImmediate({identifier:e}),r=Be("storage");return r&&Zt(s,...r),s}function Zt(t,e,n,s={}){Kt(t,e,n,s)}function Yt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new re(n,s,r,e,De)}function Jt(){ve(new xe(Pe,Yt,"PUBLIC").setMultipleInstances(!0)),ie(le,he,""),ie(le,he,"esm2017")}Jt();let j;const Qt=new Uint8Array(16);function en(){if(!j&&(j=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!j))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return j(Qt)}const R=[];for(let t=0;t<256;++t)R.push((t+256).toString(16).slice(1));function tn(t,e=0){return(R[t[e+0]]+R[t[e+1]]+R[t[e+2]]+R[t[e+3]]+"-"+R[t[e+4]]+R[t[e+5]]+"-"+R[t[e+6]]+R[t[e+7]]+"-"+R[t[e+8]]+R[t[e+9]]+"-"+R[t[e+10]]+R[t[e+11]]+R[t[e+12]]+R[t[e+13]]+R[t[e+14]]+R[t[e+15]]).toLowerCase()}const nn=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),de={randomUUID:nn};function cn(t,e,n){if(de.randomUUID&&!e&&!t)return de.randomUUID();t=t||{};const s=t.random||(t.rng||en)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=s[r];return e}return tn(s)}export{on as a,un as g,an as r,rn as u,cn as v};
