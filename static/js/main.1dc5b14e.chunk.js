(this.webpackJsonptest_teamvoy=this.webpackJsonptest_teamvoy||[]).push([[0],{40:function(n,t,e){n.exports=e(69)},66:function(n,t,e){},67:function(n,t,e){},69:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(14),c=e.n(o),i=e(11),u=e(10),l=e(34),p=e(13),f={pokemons:[],pokemon:[],loading:!0},d=Object(u.c)({pokemonReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case"GET_POKEMONS_SUCCESS":return Object(p.a)(Object(p.a)({},n),{},{pokemons:r,loading:!1});case"GET_POKEMON_SUCCESS":return Object(p.a)(Object(p.a)({},n),{},{pokemon:r});default:return n}}}),m=Object(u.d)(d,Object(u.a)(l.a)),s=e(20),b=function(n){return n.pokemonReducer.pokemons},g=function(n){return n.pokemonReducer.pokemon},v=e(12),x=e.n(v),O=e(17),E=e(35).create({baseURL:"https://pokeapi.co/api/v2"}),h={getPokemons:function(n){return E.get("/pokemon/?limit=".concat(n))},getPokemon:function(n){return E.get("/pokemon/".concat(n))}},y=function(n){return function(){var t=Object(O.a)(x.a.mark((function t(e){var r,a,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"GET_POKEMONS_REQUEST"}),t.prev=1,t.next=4,h.getPokemons(n).then((function(n){return n.data}));case 4:r=t.sent,a=r.results.map((function(n){return n.url.match(/\/([0-9]*)\/$/)[1]})),o=a.map((function(n){return h.getPokemon(Number(n))})),Promise.all(o).then((function(n){e({type:"GET_POKEMONS_SUCCESS",payload:n})})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e({type:"GET_POKEMONS_FAIL",payload:t.t0,error:!0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n){return t.apply(this,arguments)}}()},j=e(1),k=e(2);function w(){var n=Object(j.a)(["\n    background: linear-gradient(to top, #00f060, #57ff9a );\n  "]);return w=function(){return n},n}function S(){var n=Object(j.a)(["\n    background: linear-gradient(to top, #8ebd00, #cfff3d );\n  "]);return S=function(){return n},n}function _(){var n=Object(j.a)(["\n    background: linear-gradient(to top, #ffae70, #ffc89e );\n  "]);return _=function(){return n},n}function P(){var n=Object(j.a)(["\n    background: linear-gradient(to top, #a8baff, #bdcafe );\n  "]);return P=function(){return n},n}function C(){var n=Object(j.a)(["\n    background: linear-gradient(to top, #5375fd, #90a6fe );\n  "]);return C=function(){return n},n}function T(){var n=Object(j.a)(["\n    background: linear-gradient(to top, #fd5858, #fe9595 );\n  "]);return T=function(){return n},n}function M(){var n=Object(j.a)(["\n    background: linear-gradient(to top, green, #a0d384 );\n  "]);return M=function(){return n},n}function N(){var n=Object(j.a)(["\n    background: linear-gradient(to top, purple, #8e749b );\n  "]);return N=function(){return n},n}function G(){var n=Object(j.a)(["\n  margin-right: 3px;\n  padding: 3px 5px;\n  font-size: 13px;\n  color: #fff;\n  border-radius: 3px;\n\n  ","  \n  "," \n  "," \n  "," \n  "," \n  "," \n  "," \n  "," \n"]);return G=function(){return n},n}function K(){var n=Object(j.a)(["\n  display: flex;\n"]);return K=function(){return n},n}function U(){var n=Object(j.a)(["\n  text-align: center;\n  font-weight: bold;\n  text-transform: capitalize;\n  margin-top: 10px;\n  margin-bottom: 5px;\n"]);return U=function(){return n},n}function z(){var n=Object(j.a)([""]);return z=function(){return n},n}function A(){var n=Object(j.a)(["\n  object-fit: contain;\n"]);return A=function(){return n},n}function R(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #333;\n  padding: 15px;\n"]);return R=function(){return n},n}var L=k.b.div(R()),D=k.b.img(A()),I=k.b.div(z()),F=k.b.h5(U()),J=k.b.div(K()),Q=k.b.h6(G(),(function(n){return("poison"===n.type||"ice"===n.type)&&Object(k.a)(N())}),(function(n){return("grass"===n.type||"electric"===n.type)&&Object(k.a)(M())}),(function(n){return("fire"===n.type||"ground"===n.type||"ghost"===n.type)&&Object(k.a)(T())}),(function(n){return("flying"===n.type||"psychic"===n.type)&&Object(k.a)(C())}),(function(n){return("water"===n.type||"steel"===n.type)&&Object(k.a)(P())}),(function(n){return("bug"===n.type||"bug"===n.type)&&Object(k.a)(_())}),(function(n){return("fairy"===n.type||"fighting"===n.type)&&Object(k.a)(S())}),(function(n){return("normal"===n.type||"rock"===n.type)&&Object(k.a)(w())}));var Y=function(n){return a.a.createElement(L,null,a.a.createElement(D,{src:n.img,alt:n.name}),a.a.createElement(I,null,a.a.createElement(F,null,n.name),a.a.createElement(J,null,n.types.map((function(n){return a.a.createElement(Q,{key:Date.now().toString()+Math.random(),type:n.type.name},n.type.name)})))))};function B(){var n=Object(j.a)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n\n  &:after,\n  &:before{\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    background-color: #888;\n    top: 50%;\n    left: 0;\n  }\n\n  &:after{\n    transform: rotate(45deg)\n  }\n\n  &:before{\n    transform: rotate(-45deg)\n  }\n\n  @media (min-width: 551px) {\n    display: none;\n  }\n\n"]);return B=function(){return n},n}function H(){var n=Object(j.a)(["\n  padding: 5px;\n  border-left: 1px solid #888;\n"]);return H=function(){return n},n}function W(){var n=Object(j.a)(["\n  padding: 5px;\n"]);return W=function(){return n},n}function X(){var n=Object(j.a)([""]);return X=function(){return n},n}function $(){var n=Object(j.a)(["\n  border: 1px solid #888;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: .7fr .3fr;\n  text-align: center;\n  align-items: center;\n\n  &:not(:last-of-type){\n    border-bottom: 0;\n  }\n"]);return $=function(){return n},n}function q(){var n=Object(j.a)(["\n  margin-top: 20px;\n"]);return q=function(){return n},n}function V(){var n=Object(j.a)(["\n  font-weight: bold;\n  font-size: 24px;\n  text-align: center;\n  text-transform: capitalize;\n"]);return V=function(){return n},n}function Z(){var n=Object(j.a)(["\n  width: 100%;\n  object-fit: contain;\n  object-position: center;\n  height: 160px;\n"]);return Z=function(){return n},n}function nn(){var n=Object(j.a)(["\n  background-color: #333;\n  width: 280px;\n  max-width: 100%;\n  padding: 15px;\n  position: fixed;\n  right: 10%;\n  top: 50%;\n  transform: translateY(-50%);\n\n  @media (max-width: 900px) {\n    right: 2%;\n  }\n\n  @media (max-width: 760px) {\n    width: 220px;\n  }\n\n  @media (max-width: 550px) {\n    right: 50%;\n    top: 50%;\n    transform: translateY(-50%) translateX(50%);\n    width: 300px;\n    box-shadow: 0 0 20px 0px black;\n\n  }\n"]);return nn=function(){return n},n}var tn=k.b.div(nn()),en=k.b.img(Z()),rn=k.b.h2(V()),an=k.b.div(q()),on=k.b.div($()),cn=k.b.div(X()),un=k.b.div(W()),ln=k.b.div(H()),pn=k.b.div(B());var fn=function(n){var t=n.pokemon,e=n.onClose;return a.a.createElement(tn,null,a.a.createElement(pn,{onClick:function(){return e()}}),a.a.createElement(en,{src:t.sprites.front_default,alt:t.name}),a.a.createElement(rn,null,t.name),a.a.createElement(an,null,a.a.createElement(on,null,a.a.createElement(un,null,"Type"),a.a.createElement(ln,null,t.types.map((function(n){return a.a.createElement(cn,{key:Date.now().toString()+Math.random()},n.type.name)})))),t.stats.map((function(n){return n.stat.name="speed"===n.stat.name?"Speed":n.stat.name,n.stat.name="special-defense"===n.stat.name?"SP Defense":n.stat.name,n.stat.name="special-attack"===n.stat.name?"SP Attack":n.stat.name,n.stat.name="defense"===n.stat.name?"Defense":n.stat.name,n.stat.name="attack"===n.stat.name?"Attack":n.stat.name,n.stat.name="hp"===n.stat.name?"HP":n.stat.name,a.a.createElement(on,{key:n.id},a.a.createElement(un,null,n.stat.name),a.a.createElement(ln,null,n.base_stat))})),a.a.createElement(on,null,a.a.createElement(un,null,"Weight"),a.a.createElement(ln,null,t.weight)),a.a.createElement(on,null,a.a.createElement(un,null,"Total moves"),a.a.createElement(ln,null,t.moves.length+1))))};function dn(){var n=Object(j.a)([""]);return dn=function(){return n},n}function mn(){var n=Object(j.a)(["\n  width: 100%;\n  grid-column: 1/4;\n  padding: 10px 15px;\n  background-color: #1e6fb4;\n  border-radius: 5px;\n  border: none;\n  \n  &:focus{\n    outline: none\n  }\n\n  @media (max-width: 760px) {\n    grid-column: 1/3;\n  }\n"]);return mn=function(){return n},n}function sn(){var n=Object(j.a)([""]);return sn=function(){return n},n}function bn(){var n=Object(j.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n\n  @media (max-width: 760px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]);return bn=function(){return n},n}function gn(){var n=Object(j.a)(["\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: 06fr 04fr;\n  grid-gap: 40px;\n\n  @media (max-width: 550px) {\n    grid-template-columns: 1fr;\n  }\n"]);return gn=function(){return n},n}function vn(){var n=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 40px;\n"]);return vn=function(){return n},n}function xn(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100% - 30px);\n  width: 980px;\n  margin: auto;\n"]);return xn=function(){return n},n}var On=k.b.div(xn()),En=k.b.h3(vn()),hn=k.b.div(gn()),yn=k.b.div(bn()),jn=k.b.div(sn()),kn=k.b.button(mn()),wn=k.b.div(dn());var Sn=function(){var n=Object(i.b)(),t=Object(r.useState)(12),e=Object(s.a)(t,2),o=e[0],c=e[1],u=Object(r.useState)(!0),l=Object(s.a)(u,2),p=l[0],f=l[1],d=Object(i.c)(b),m=Object(i.c)(g);Object(r.useEffect)((function(){n(y(o))}),[]);var v=function(t){n(function(n){return function(){var t=Object(O.a)(x.a.mark((function t(e){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"GET_POKEMON_REQUEST"}),t.prev=1,t.next=4,h.getPokemon(n).then((function(n){return n.data}));case 4:r=t.sent,e({type:"GET_POKEMON_SUCCESS",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e({type:"GET_POKEMON_FAIL",payload:t.t0,error:!0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()}(t)),f(!1)};return a.a.createElement("div",null,a.a.createElement(On,null,a.a.createElement(En,null,"Pokedex"),a.a.createElement(hn,null,a.a.createElement(yn,null,d.map((function(n){return a.a.createElement(wn,{key:n.data.id,onClick:function(){return v(n.data.id)}},a.a.createElement(Y,{img:n.data.sprites.front_default,name:n.data.name,types:n.data.types}))})),a.a.createElement(kn,{onClick:function(){n(y(o+12)),c(o+12)}},"Load More"),a.a.createElement(kn,{onClick:function(){n(y(999)),c(999)}},"Load All")),p?null:a.a.createElement(jn,null,0!==m.length?a.a.createElement(fn,{pokemon:m,onClose:function(){f(!0)}}):null))))};e(66),e(67);var _n=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Sn,null))},Pn=e(39);c.a.render(a.a.createElement(i.a,{store:m},a.a.createElement(Pn.a,null,a.a.createElement(_n,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1dc5b14e.chunk.js.map