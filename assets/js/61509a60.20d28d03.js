"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4225],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return u}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=o(a),u=l,p=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(p,r(r({ref:t},h),{},{components:a})):n.createElement(p,r({ref:t},h))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30786:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return h},default:function(){return m}});var n=a(87462),l=a(63366),i=(a(67294),a(3905)),r=["components"],s={},d="Slashing",o={unversionedId:"beaconchain/learn/bc-slashing",id:"beaconchain/learn/bc-slashing",isDocsHomePage:!1,title:"Slashing",description:"Slashing",source:"@site/docs/beaconchain/learn/bc-slashing.md",sourceDirName:"beaconchain/learn",slug:"/beaconchain/learn/bc-slashing",permalink:"/docs/beaconchain/learn/bc-slashing",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/learn/bc-slashing.md",tags:[],version:"current",frontMatter:{}},h=[{value:"Slashing",id:"slashing-1",children:[{value:"Double Sign",id:"double-sign",children:[{value:"Evidence Validation",id:"evidence-validation",children:[],level:4}],level:3},{value:"Inavailability",id:"inavailability",children:[],level:3}],level:2},{value:"Unjail",id:"unjail",children:[{value:"Transaction Validation",id:"transaction-validation",children:[],level:3}],level:2},{value:"Fee Table",id:"fee-table",children:[],level:2},{value:"Commands",id:"commands",children:[{value:"Download Binary",id:"download-binary",children:[],level:3},{value:"Submit BSC evidence",id:"submit-bsc-evidence",children:[{value:"Parameters for  slashing bsc-submit-evidence",id:"parameters-for--slashing-bsc-submit-evidence",children:[],level:4},{value:"Examples",id:"examples",children:[],level:4}],level:3},{value:"Side chain Unjail",id:"side-chain-unjail",children:[{value:"Parameters for slashing side-unjail",id:"parameters-for-slashing-side-unjail",children:[],level:4},{value:"For example",id:"for-example",children:[],level:4}],level:3},{value:"Query side chain Signing Info",id:"query-side-chain-signing-info",children:[{value:"Parameters for slashing side-signing-info",id:"parameters-for-slashing-side-signing-info",children:[],level:4},{value:"For example",id:"for-example-1",children:[],level:4}],level:3},{value:"Query side chain slash history",id:"query-side-chain-slash-history",children:[{value:"Parameters for slashing side-slash-history validator-sideConsAddr",id:"parameters-for-slashing-side-slash-history-validator-sideconsaddr",children:[],level:4},{value:"For example",id:"for-example-2",children:[],level:4}],level:3},{value:"Query side chain slash histories",id:"query-side-chain-slash-histories",children:[{value:"Parameters for slashing side-slash-histories",id:"parameters-for-slashing-side-slash-histories",children:[],level:4},{value:"For example",id:"for-example-3",children:[],level:4}],level:3},{value:"Query all side chain slash histories(for internal)",id:"query-all-side-chain-slash-historiesfor-internal",children:[{value:"Parameters for slashing side-all-slash-histories",id:"parameters-for-slashing-side-all-slash-histories",children:[],level:4},{value:"For example",id:"for-example-4",children:[],level:4}],level:3}],level:2}],c={toc:h};function m(e){var t=e.components,a=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"slashing"},"Slashing"),(0,i.kt)("h2",{id:"slashing-1"},"Slashing"),(0,i.kt)("p",null,"Slashing is part of the on-chain governance, to ensure the malicious or negative behaviors are punished. BSC slash can be submitted by anyone. The transaction submission requires slash evidence and cost fees but also brings a larger reward when it is successful."),(0,i.kt)("p",null,"So far there are two slashable cases."),(0,i.kt)("h3",{id:"double-sign"},"Double Sign"),(0,i.kt)("p",null,"Anyone can submit a slash request on BC with the evidence of Double Sign of BSC"),(0,i.kt)("h4",{id:"evidence-validation"},"Evidence Validation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Two block headers have same height and same parent block hash"),(0,i.kt)("li",{parentName:"ul"},"Two block headers are sealed by the same validator"),(0,i.kt)("li",{parentName:"ul"},"Two signatures of these two blocks must not be the same"),(0,i.kt)("li",{parentName:"ul"},"The time of these two blocks must be within the validity of the evidence, which is 24 hours")),(0,i.kt)("p",null,"If the evidence is valid:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"1000BNB would be slashed from the ",(0,i.kt)("strong",{parentName:"li"},"self-delegated")," BNB of the validator"),(0,i.kt)("li",{parentName:"ol"},"If the self-delegator\u2019s stake amount on the validator is less than 1000BNB, then the unbonding delegation balance would be slashed if it exists until totally 1000BNB slashed from self-delegator of the validator. However, if all the slashed BNB is less than 1000, all the remaining stake of the self-delegator will be slashed"),(0,i.kt)("li",{parentName:"ol"},"100 of slashed BNB would allocate to the submitter as a reward"),(0,i.kt)("li",{parentName:"ol"},"The rest of slashed BNB will allocate to the custody addresses of which validators would take part in the next distribution. If no matched validators found, then the rest of slashed BNB will allocate to validators on BC as block fee"),(0,i.kt)("li",{parentName:"ol"},"Set the validator \u2018jailed\u2019 with duration of 7 days, and remove it from validator set by an instance BSC validator set update Cross-Chain update")),(0,i.kt)("h3",{id:"inavailability"},"Inavailability"),(0,i.kt)("p",null,"There can be an internal smart contract responsible for recording the missed blocking metrics of each validator."),(0,i.kt)("p",null,"If a validator missed more than 50 blocks in 24h, the blocking reward for validator will not be relayed to BC for distribution but shared with other better validators. If it missed more than 150 blocks in 24h, then this will be propagated back to BC where another Slashing will happen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"50BNB would be slashed from the  ",(0,i.kt)("strong",{parentName:"li"},"self-delegated")," BNB of the validator"),(0,i.kt)("li",{parentName:"ol"},"If the self-delegator\u2019s stake amount on the validator is less than 50BNB, then the unbonding delegation balance would be slashed if it exists until totally 50BNB slashed from self-delegator of the validator. However, if all the slashed BNB is less than 1000, all the remaining stake of the self-delegator will be slashed"),(0,i.kt)("li",{parentName:"ol"},"10 of slashed BNB would allocate to the validators on BC as block fee"),(0,i.kt)("li",{parentName:"ol"},"The rest of slashed BNB will allocate to the custody addresses of which validators would take part in the next distribution. If no matched validators found, then the rest of slashed BNB will allocate to validators on BC as block fee"),(0,i.kt)("li",{parentName:"ol"},"Set the validator \u2018jailed\u2019 with duration of 2 days, and remove it from validator set by an instance BSC validator set update Cross-Chain update")),(0,i.kt)("h2",{id:"unjail"},"Unjail"),(0,i.kt)("p",null,"The malicious validators who are slashed by the previous cases will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"jailed")," along with a duration setting as well due to the malicious or negative behaviors. We can set it to \u2018unjailed\u2019 by sending a side-unjail transaction if the validation passed."),(0,i.kt)("p",null,"When your validator is ",(0,i.kt)("inlineCode",{parentName:"p"},"unjailed")," on beacon chain, it must wait for the next UTC 0:00 to join validatorsest again."),(0,i.kt)("h3",{id:"transaction-validation"},"Transaction Validation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"validator address must not be empty"),(0,i.kt)("li",{parentName:"ul"},"side chain id exists"),(0,i.kt)("li",{parentName:"ul"},"self-delegation of the validator exists and the tokens of it must be greater than the min-self-delegation setting by ",(0,i.kt)("em",{parentName:"li"},"10000BNB")),(0,i.kt)("li",{parentName:"ul"},"the validator is in \u2018jailed\u2019 now"),(0,i.kt)("li",{parentName:"ul"},"already passed the duration set when \u2018jailed\u2019 happened")),(0,i.kt)("h2",{id:"fee-table"},"Fee Table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Pay in BNB"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Unjail A Smart Chain Validator"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Submit Byzaitine Behavior Evidence of A Smart Chain Validator"),(0,i.kt)("td",{parentName:"tr",align:null},"10")))),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"download-binary"},"Download Binary"),(0,i.kt)("p",null,"Please download ",(0,i.kt)("inlineCode",{parentName:"p"},"tbnbcli")," binary from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/smart-chain-binary/tree/master/bc/cli"},"here")),(0,i.kt)("h3",{id:"submit-bsc-evidence"},"Submit BSC evidence"),(0,i.kt)("p",null,"Slashing validators of BSC for the malicious behavior of ",(0,i.kt)("strong",{parentName:"p"},"double-sign")," by submitting evidence consisting of two block headers with same height but signed by one signer"),(0,i.kt)("h4",{id:"parameters-for--slashing-bsc-submit-evidence"},"Parameters for  slashing bsc-submit-evidence"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"parameter name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"example")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"comments")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"required")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,i.kt)("td",{parentName:"tr",align:null},"Binance-Chain-Tigris"),(0,i.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--from"),(0,i.kt)("td",{parentName:"tr",align:null},"bnb19awsmku5ch689lp0rj0c6su7x0n5wxhjm65hdd"),(0,i.kt)("td",{parentName:"tr",align:null},"Name or address of  private key with which to sign"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--evidence"),(0,i.kt)("td",{parentName:"tr",align:null},'[{"difficulty":"0x2","extraData":"0xd98301...},{"difficulty":"0x3","extraData":"0xd64372...}]'),(0,i.kt)("td",{parentName:"tr",align:null},"Evidence details,  including two bsc block headers with json format"),(0,i.kt)("td",{parentName:"tr",align:null},"Option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--evidence-file"),(0,i.kt)("td",{parentName:"tr",align:null},"/user/evidence.json"),(0,i.kt)("td",{parentName:"tr",align:null},"File of evidence details,  if evidence-file is not empty, --evidence will be ignored"),(0,i.kt)("td",{parentName:"tr",align:null},"Option")))),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mainnet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bnbcli slashing bsc-submit-evidence --from=bnb19awsmku5ch689lp0rj0c6su7x0n5wxhjm65hdd --evidence=[{"parentHash":"0x6116de25352c93149542e950162c7305f207bbc17b0eb725136b78c80aed79cc","sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347","miner":"0x0000000000000000000000000000000000000000","stateRoot":"0xe7cb9d2fd449f7bd11126bff55266e7b74936f2f230e21d44d75c04b7780dfeb","transactionsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421","receiptsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421","logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","difficulty":"0x20000","number":"0x1","gasLimit":"0x47e7c4","gasUsed":"0x0","timestamp":"0x5eb2a363","extraData":"0x0000000000000000000000000000000000000000000000000000000000000000a2852203a9da8bb555ec98a78c66365437bb1dde6707a08032e9eb916a8a454e37a1fffeab272bcffc2fc1d82aee6f3124bbdc8ed884efcbadfb6ff862cf4c3801","mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000","nonce":"0x0000000000000000","hash":"0xd977f1acfd035cf717193a9c3a2351cdccdc2ea0719aff871dade0e8daf8069d"},{"parentHash":"0x6116de25352c93149542e950162c7305f207bbc17b0eb725136b78c80aed79cc","sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347","miner":"0x0000000000000000000000000000000000000000","stateRoot":"0xe7cb9d2fd449f7bd11126bff55266e7b74936f2f230e21d44d75c04b7780dfeb","transactionsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421","receiptsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421","logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","difficulty":"0x20000","number":"0x1","gasLimit":"0x47e7c4","gasUsed":"0x64","timestamp":"0x5eb2a363","extraData":"0x00000000000000000000000000000000000000000000000000000000000000005eab7a9bf40635d056ccab45ac0d8b4e99be4b4ed859e4246f651b95c0adaacc050760a0afc2d9383f821baab7f995cde07271f286c4805095b413e7ad69d9f401","mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000","nonce":"0x0000000000000000","hash":"0x917c38a507c9807426fc9e3e9e8ded2db07c7f61070bd1c7b57b9df287e8f7b2"}]     --chain-id=test-chain-8d7sJz --home ~/home_cli\n')),(0,i.kt)("h3",{id:"side-chain-unjail"},"Side chain Unjail"),(0,i.kt)("h4",{id:"parameters-for-slashing-side-unjail"},"Parameters for slashing side-unjail"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"parameter name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"example")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"comments")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"required")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,i.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--from"),(0,i.kt)("td",{parentName:"tr",align:null},"bnb19awsmku5ch689lp0rj0c6su7x0n5wxhjm65hdd"),(0,i.kt)("td",{parentName:"tr",align:null},"This address has to be  the operator address of the validator to be unjailed. Name or address of  private key with which to sign."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,i.kt)("td",{parentName:"tr",align:null},"BSC-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"chain-id of the side  chain the validator belongs to"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h4",{id:"for-example"},"For example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mainnet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli slashing side-unjail --from bnb19awsmku5ch689lp0rj0c6su7x0n5wxhjm65hdd --side-chain-id=bsc --chain-id=test-chain-8d7sJz --home ~/home_cli\n")),(0,i.kt)("h3",{id:"query-side-chain-signing-info"},"Query side chain Signing Info"),(0,i.kt)("h4",{id:"parameters-for-slashing-side-signing-info"},"Parameters for slashing side-signing-info"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"parameter name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"example")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"comments")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"required")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,i.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,i.kt)("td",{parentName:"tr",align:null},"BSC-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"chain-id of the side  chain the validator belongs to"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h4",{id:"for-example-1"},"For example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mainnet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli slashing side-signing-info 0x625448c3f21AB4636bBCef84Baaf8D6cCdE13c3F --side-chain-id=bsc --chain-id=test-chain-8d7sJz --home ~/home_cli\n")),(0,i.kt)("h3",{id:"query-side-chain-slash-history"},"Query side chain slash history"),(0,i.kt)("h4",{id:"parameters-for-slashing-side-slash-history-validator-sideconsaddr"},"Parameters for slashing side-slash-history ","[validator-sideConsAddr]"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"parameter name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"example")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"comments")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"required")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,i.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--infraction-height"),(0,i.kt)("td",{parentName:"tr",align:null},"100"),(0,i.kt)("td",{parentName:"tr",align:null},"infraction height"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--infraction-type"),(0,i.kt)("td",{parentName:"tr",align:null},"DoubleSign"),(0,i.kt)("td",{parentName:"tr",align:null},"infraction type, 'DoubleSign;Downtime'"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,i.kt)("td",{parentName:"tr",align:null},"BSC-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"chain-id of the side chain the validator belongs to"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h4",{id:"for-example-2"},"For example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mainnet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli slashing side-slash-history 0x625448c3f21AB4636bBCef84Baaf8D6cCdE13c3F --infraction-height 100 --infraction-type DoubleSign --side-chain-id=bsc --chain-id=test-chain-8d7sJz --home ~/home_cli\n")),(0,i.kt)("h3",{id:"query-side-chain-slash-histories"},"Query side chain slash histories"),(0,i.kt)("h4",{id:"parameters-for-slashing-side-slash-histories"},"Parameters for slashing side-slash-histories"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"parameter name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"example")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"comments")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"required")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,i.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--infraction-type"),(0,i.kt)("td",{parentName:"tr",align:null},"DoubleSign"),(0,i.kt)("td",{parentName:"tr",align:null},"infraction type, 'DoubleSign;Downtime'"),(0,i.kt)("td",{parentName:"tr",align:null},"Option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,i.kt)("td",{parentName:"tr",align:null},"BSC-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"chain-id of the side chain the validator belongs to"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h4",{id:"for-example-3"},"For example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mainnet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli slashing side-slash-histories 0x625448c3f21AB4636bBCef84Baaf8D6cCdE13c3F --infraction-type DoubleSign --side-chain-id=bsc --chain-id=test-chain-8d7sJz --home ~/home_cli\n")),(0,i.kt)("h3",{id:"query-all-side-chain-slash-historiesfor-internal"},"Query all side chain slash histories(for internal)"),(0,i.kt)("h4",{id:"parameters-for-slashing-side-all-slash-histories"},"Parameters for slashing side-all-slash-histories"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"parameter name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"example")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"comments")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"required")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,i.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"the chain id of Beacon Chain"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,i.kt)("td",{parentName:"tr",align:null},"BSC-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"chain-id of the side chain the validator belongs to"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h4",{id:"for-example-4"},"For example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mainnet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli slashing side-all-slash-histories --side-chain-id=bsc --chain-id=test-chain-8d7sJz --home ~/home_cli\n")))}m.isMDXComponent=!0}}]);