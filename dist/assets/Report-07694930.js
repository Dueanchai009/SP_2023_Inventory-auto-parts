import{r as u,c as R,o as T,a as U,b as n,d as c,f,g as v,e,w as y,M as h,N as b,O as m,K as i,h as j,i as k,n as L,s as A,t as K,k as W,x as z,l as G}from"./index-9cdb50d4.js";import{L as x}from"./Loader-bf1a129c.js";import{u as g,w as H,E as O}from"./jspdf.plugin.autotable-ea3ddaf5.js";const X={class:"mb-3"},Y={class:"row"},Z={class:"col-lg-4"},I=e("span",{class:"me-2"},"ประเภทรายงาน: ",-1),J=e("option",{value:"",disabled:"",selected:""},"เลือกประเภทดูรายงาน",-1),Q=["value"],tt={class:"col-lg-4"},et={key:0,class:"me-2"},at=e("option",{value:"",disabled:"",selected:""},"เลือกวัน",-1),st=["value"],ot=e("option",{value:"",disabled:"",selected:""},"เลือกเดือน",-1),nt=["value"],lt=e("option",{value:"",disabled:"",selected:""},"เลือกปี",-1),ct=["value"],dt={class:"col-lg-1"},rt={class:"d-flex justify-content-center align-items-center",style:{"margin-top":"28px"}},ut=e("span",{class:"me-2 d-block"},"ออกรายงาน: ",-1),it={class:"table-responsiv"},pt={class:"btn-group"},_t=["onClick"],vt=e("i",{class:"bx bx-edit-alt"},null,-1),yt=[vt],ht=["onClick"],bt=e("i",{class:"bx bx-trash"},null,-1),mt=[bt],kt=["src"],Ct={__name:"Report",setup(gt){const _=u(!1),p=u([]),r=u(""),d=u(""),w=u([{text:"รหัส",value:"product_code"},{text:"สินค้า",value:"product_name"},{text:"ยี่ห้อ",value:"product_brand"},{text:"ประเภท",value:"product_category"},{text:"สถานะ",value:"type_stock"},{text:"จำนวน",value:"quantity"},{text:"คงเหลือ",value:"stock"},{text:"วันที่",value:"date"},{text:"วันที่",value:"day"},{text:"เดือน",value:"month"},{text:"ปี",value:"year"}]),C=u([{type:"day",name:"รายวัน"},{type:"month",name:"รายเดือน"},{type:"year",name:"รายปี"}]),$=u([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),q=u(["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]),E=u([2566,2567,2568,2569,2570]),F=()=>{d.value="",r.value=""},P=()=>{r.value=""},S=R(()=>w.value.filter(l=>l.value!=="day"&&l.value!=="year")),V=()=>{const l=g.json_to_sheet(p.value.map(s=>({รหัสสินค้า:s.product_code,สินค้า:s.product_name,ยี่ห้อ:s.product_brand,ประเภท:s.product_category,สถานะ:s.type_stock===1?"เบิก":"นำเข้า",จำนวน:s.quantity,วันที่:s.date}))),o=g.book_new();g.book_append_sheet(o,l),H(o,"ข้อมูลอะไหล่รถยนต์.xlsx")},B=()=>{const l=p.value.map(s=>`
  <tr>
    <td>${s.product_code}</td>
    <td>${s.product_name}</td>
    <td>${s.product_brand}</td>
    <td>${s.product_category}</td>
    <td>${s.type_stock===1?"เบิก":"นำเข้า"}</td>
    <td>${s.quantity}</td>
    <td>${s.date}</td>
  </tr>`),o=window.open("","_blank");o.document.open(),o.document.write(` 
    <style>
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
    </style>
    <table>
      <thead>
        <tr>
            <th>รหัสสินค้า</th>
            <th>สินค้า</th>
            <th>ยี่ห้อ</th>
            <th>ประเภท</th>
            <th>สถานะ</th>
            <th>จำนวน</th>
            <th>วันที่</th>
        </tr>
      </thead>
      <tbody>
        ${l.join("")}
      </tbody>
    </table>
  `),o.document.close(),o.print()},D=()=>{const l=new O,o=p.value.map(a=>({code:a.product_code,name:a.product_name,brand:a.product_brand,category:a.product_category,status:a.type_stock===1?"withdraw":"import",quantity:a.quantity,date:`${a.day+"/"+a.month+"/"+a.year}`}));if(o.length===0){openPopup("ไม่มีอะไล่รถยนต์","error");return}const s=Object.keys(o[0]),t=o.map(a=>s.map(N=>a[N]));l.autoTable({head:[s],body:t}),l.save("ข้อมูลอะไหล่รถยนต์.pdf")},M=async()=>{const l=A(W(G,"reports"),K("date","desc"));return z(l,s=>{p.value=[],s.forEach(async t=>{try{_.value=!0;const a={id:t.id,desc:t.data().desc,product_brand:t.data().product_brand,product_category:t.data().product_category,product_code:t.data().product_code,product_name:t.data().product_name,quantity:t.data().quantity,stock:t.data().stock,type_stock:t.data().type_stock,date:t.data().date,day:t.data().day,year:t.data().year,month:t.data().month};p.value.push(a),_.value=!1}catch(a){_.value=!1,console.error("Error fetching image URL:",a)}})})};return T(async()=>{await M()}),(l,o)=>{const s=U("EasyDataTable");return n(),c("div",null,[_.value?(n(),f(x,{key:0})):v("",!0),e("div",X,[e("div",Y,[e("div",Z,[I,y(e("select",{class:"form-select","onUpdate:modelValue":o[0]||(o[0]=t=>d.value=t),onChange:P},[J,(n(!0),c(b,null,m(C.value,(t,a)=>(n(),c("option",{value:t.type,key:a},i(t.name),9,Q))),128))],544),[[h,d.value]])]),e("div",tt,[d.value?(n(),c("span",et,"เลือกดู "+i(d.value)+": ",1)):v("",!0),d.value==="day"?y((n(),c("select",{key:1,class:"form-select","onUpdate:modelValue":o[1]||(o[1]=t=>r.value=t)},[at,(n(!0),c(b,null,m($.value,(t,a)=>(n(),c("option",{value:t,key:a},i(t),9,st))),128))],512)),[[h,r.value]]):d.value==="month"?y((n(),c("select",{key:2,class:"form-select","onUpdate:modelValue":o[2]||(o[2]=t=>r.value=t)},[ot,(n(!0),c(b,null,m(q.value,(t,a)=>(n(),c("option",{value:t,key:a},i(t),9,nt))),128))],512)),[[h,r.value]]):d.value==="year"?y((n(),c("select",{key:3,class:"form-select","onUpdate:modelValue":o[3]||(o[3]=t=>r.value=t)},[lt,(n(!0),c(b,null,m(E.value,(t,a)=>(n(),c("option",{value:t,key:a},i(t),9,ct))),128))],512)),[[h,r.value]]):v("",!0)]),e("div",dt,[e("div",rt,[d.value?(n(),c("button",{key:0,class:"btn btn-warning btn-sm",onClick:F},"รีเซต")):v("",!0)])]),e("div",{class:"col-lg-3"},[ut,e("div",{class:"mt-1"},[e("button",{onClick:V,class:"btn btn-outline-success ms-2 btn-sm"},"Excel"),e("button",{onClick:D,class:"btn btn-outline-info ms-2 btn-sm"},"Pdf"),e("button",{onClick:B,class:"btn btn-outline-secondary ms-2 btn-sm"},"Print")])])])]),_.value?(n(),f(x,{key:1})):v("",!0),e("div",it,[j(s,{headers:S.value,items:p.value,"search-field":d.value,"search-value":r.value},{"item-manager":k(t=>[e("div",pt,[e("button",{class:"btn btn-warning",onClick:a=>l.editProduct(t.id)},yt,8,_t),e("button",{class:"btn btn-danger",onClick:a=>l.deleteProduct(t.id)},mt,8,ht)])]),"item-product_img":k(t=>[e("img",{width:"54",height:"54",src:t.product_img?t.product_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMHXXw0K3RRdiCBqbF2v3k8BFKFTFE5kvlZMu8c5ho4ESCuc_SNvlvGA7PFeeeWdRmmg&usqp=CAU",alt:""},null,8,kt)]),"item-type_stock":k(t=>[e("span",{class:L(`${t.type_stock===1?"text-bg-success":"text-bg-primary"} badge p-1`),style:{"font-size":"12px"}},i(t.type_stock===1?"เบิก":"นำเข้า"),3)]),"empty-message":k(()=>[e("span",null,"ไม่พบรายการ"+i(d.value)+" "+i(r.value),1)]),_:1},8,["headers","items","search-field","search-value"])])])}}};export{Ct as default};
