var registration = /(?:((2[1-9]|[3-9][0-9])|(0[1-9]|1[0-9]))(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])(?:[\-' '\,]|)[12][0-9]{6})/g
var phone = /((010(?:[\-' '\,]|)[0-9]{4}|01[16789](?:[\-' '\,]|)[0-9]{3})(?:[\-' '\,]|)[0-9]{4})/g
var email = /(?:([0-9a-zA-Z][-_.*0-9a-zA-Z]{3,19})@([0-9a-zA-Z][-_.*0-9a-zA-Z]+)\.(com|net|co\.kr|ne\.kr|or\.kr|re\.kr|pe\.kr|go\.kr|mil\.kr|ac\.kr|hs\.kr|ms\.kr|es\.kr|sc\.kr|kg\.kr))/g
var address_old = /(?:(서울특별시|부산광역시|대구광역시|인천광역시|광주광역시|대전광역시|울산광역시|세종특별자치시|경기도|강원도|충청북도|충청남도|전라북도|전라남도|경상북도|경상남도|제주특별자치도|)[ ]*(?:[가-힣]+[시군구읍면])[ ]*(?:[가-힣0-9 ]{0,10}[동리])[ ]*([0-9]{1,5}(,|-|~|)[0-9]{0,5}(번지|)))/g
var test = '0105654709374989387293971004 27183180902안양시 만안구 석수 1동 183-55,938494032121783150010-4680-709306403서초구 우면동 123-66032648420asdi aoisdjoasi@hanmail.comjdoajsodi234234234(joi0104@naver.com3840293840'
console.log(test.match(registration));
console.log(test.match(phone));
console.log(test.match(email));
console.log(test.match(address_old));
