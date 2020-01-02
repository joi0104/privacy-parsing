var registration = /^(?:[2-9][0-9](?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])[\-' '\,]?[12][0-9]{6})|(?:[01][0-9](?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])[\-' '\,]?[34][0-9]{6})$/
var phone = /^(?:010[\-' '\,]?[0-9]{4}|01[16789][\-' '\,]?[0-9]{3})[\-' '\,]?[0-9]{4}$/
var email = /^([0-9a-zA-Z][-_.*0-9a-zA-Z]{3,19})@(?:[0-9a-zA-Z][-_.*0-9a-zA-Z]+)\.(?:com|net|co\.kr|ne\.kr|or\.kr|re\.kr|pe\.kr|go\.kr|mil\.kr|ac\.kr|hs\.kr|ms\.kr|es\.kr|sc\.kr|kg\.kr)$/
var company = /^[1-6][0-9]{2}[ \-]?(?:(?:[0-79][0-9]|8[03456])[ \-]?[0-9])|(?:82[ \-]?[0-5])|(?:81[ \-]?[6-9]))[0-9]{4}$/
var corperation = /^(?:1[0-9]|2[0-8])[0-9]{2}[ ]?(?:1[1-4]|2[12]|[34][0-9]|50|71|8[1-5])[ \-]?[0-9]{7}$/
var drive = /^[12][0-9][ \-][0-9]{2}[ \-][0-9]{6}[ \-][0-9]{2}$/
var foreigner = /^(?:[2-9][0-9](?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])[\-' '\,]?[56][0-9]{6})|(?:[01][0-9](?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])[\-' '\,]?[78][0-9]{6})$/
var address = /^(?:[가-힣]+[도|시])(?: |)(?:[가-힣]+[시군구]|)[ ]?(?:[가-힣]+구|)[ ]?(?:[가-힣,.0-9]+[읍면동가길리로][ ]?){1,3}(?:(?:지하|)[ ]?[산]?[ ]?[0-9\~\- ]+)/
var passport = /^[MSRGD][0-9]{8}$/
var card = /^(?:(?:4[0-9]{2}|6[0-5][0-9]|2[2-7][0-9]|35[2-8])[0-9][ \-]?[0-9]{4}[ \-]?[0-9]{4}[ \-]?[0-9]{4})|(?:3[47][0-9]{2}[ \-]?[0-9]{6}[ \-]?[0-9]{5})|(?:(?:30[0-5][0-9]|3095|3[689][0-9]{2})[ \-]?[0-9]{6}[ \-]?[0-9]{4})$/
var account = /^(?:[0-9]{1,8}[ \-]?[0-9]{0,11}[ \-]?[0-9]{0,5}[ \-]?[0-9]{0,7}[ \-]?[0-9]{0,2})|(?:[0-9]{9,14})|(?:[0-9]{12}[ \-]?[0-9]{2})|(?:[0-9]{1,3}[ \-]?[0-9]{2,5}[ \-]?[0-9]{8,9})|(?:[0-9][ \-]?[0-9]{13})$/
var insurance = /^(?:[0-9][ \-]?[1-6][0-9]{9})|(?:[1357][ \-]?[0-9]{7})|(?:[0-9][ \-]?[0-9]{9}[ \-]?[0-9])|(?:[0-9]{6}[ \-]?[0-9]{6})|(?:[0-9]{3}[ \-]?[0-9]{2}[ \-]?[0-9]{5}[ \-]?[0-9])$/
