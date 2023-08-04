"use strict";

const divtwo = document.querySelector(".div2");
const divthree = document.querySelector(".div3");
const submit = document.querySelector(".submit");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

divthree.classList.remove("hidden");

submit.addEventListener("click", function () {
  const mail = document.querySelector(".email").value;
  const check = mail.match(regex);
  if (check) {
    divthree.classList.add("hidden");
    divtwo.classList.remove("hidden");
  } else {
    document.querySelector(".xacthuc").textContent =
      " vui lòng điền đúng địa chỉ email";
  }
});

const viewmorehover1 = document.querySelector(".viewmorehover1");
const viewlesshover1 = document.querySelector(".viewlesshover1");
const kinhnghiem = document.querySelector(".kinhnghiem");
// nút hover 1 //
viewlesshover1.classList.remove("viewlesshover1");
viewmorehover1.addEventListener("click", function () {
  kinhnghiem.classList.remove("hidden");
  viewmorehover1.classList.remove("viewmorehover1");
  viewlesshover1.classList.add("viewlesshover1");
  viewlesshover1.addEventListener("click", function () {
    kinhnghiem.classList.add("hidden");
    viewmorehover1.classList.add("viewmorehover1");
    viewlesshover1.classList.remove("viewlesshover1");
  });
});

const viewmorehover2 = document.querySelector(".viewmorehover2");
const viewlesshover2 = document.querySelector(".viewlesshover2");
const hocvan = document.querySelector(".hocvan");
// nút hover 2 //
viewlesshover2.classList.remove("viewlesshover2");
viewmorehover2.addEventListener("click", function () {
  hocvan.classList.remove("hidden");
  viewmorehover2.classList.remove("viewmorehover2");
  viewlesshover2.classList.add("viewlesshover2");
  viewlesshover2.addEventListener("click", function () {
    hocvan.classList.add("hidden");
    viewmorehover2.classList.add("viewmorehover2");
    viewlesshover2.classList.remove("viewlesshover2");
  });
});

const viewmorehover3 = document.querySelector(".viewmorehover3");
const viewlesshover3 = document.querySelector(".viewlesshover3");
const hoatdong = document.querySelector(".hoatdong");
// nút hover 3 //
viewlesshover3.classList.remove("viewlesshover3");
viewmorehover3.addEventListener("click", function () {
  hoatdong.classList.remove("hidden");
  viewmorehover3.classList.remove("viewmorehover3");
  viewlesshover3.classList.add("viewlesshover3");
  viewlesshover3.addEventListener("click", function () {
    hoatdong.classList.add("hidden");
    viewmorehover3.classList.add("viewmorehover3");
    viewlesshover3.classList.remove("viewlesshover3");
  });
});

const viewmorehover4 = document.querySelector(".viewmorehover4");
const viewlesshover4 = document.querySelector(".viewlesshover4");
const sothich = document.querySelector(".sothich");
// nút hover 4 //
viewlesshover4.classList.remove("viewlesshover4");
viewmorehover4.addEventListener("click", function () {
  sothich.classList.remove("hidden");
  viewmorehover4.classList.remove("viewmorehover4");
  viewlesshover4.classList.add("viewlesshover4");
  viewlesshover4.addEventListener("click", function () {
    sothich.classList.add("hidden");
    viewmorehover4.classList.add("viewmorehover4");
    viewlesshover4.classList.remove("viewlesshover4");
  });
});

const viewmorehover5 = document.querySelector(".viewmorehover5");
const viewlesshover5 = document.querySelector(".viewlesshover5");
const ngonngu = document.querySelector(".ngonngu");
// nút hover 5 //
viewlesshover5.classList.remove("viewlesshover5");
viewmorehover5.addEventListener("click", function () {
  ngonngu.classList.remove("hidden");
  viewmorehover5.classList.remove("viewmorehover5");
  viewlesshover5.classList.add("viewlesshover5");
  viewlesshover5.addEventListener("click", function () {
    ngonngu.classList.add("hidden");
    viewmorehover5.classList.add("viewmorehover5");
    viewlesshover5.classList.remove("viewlesshover5");
  });
});

const viewmorehover6 = document.querySelector(".viewmorehover6");
const viewlesshover6 = document.querySelector(".viewlesshover6");
const kinang = document.querySelector(".kinang");
// nút hover 6 //
viewlesshover6.classList.remove("viewlesshover6");
viewmorehover6.addEventListener("click", function () {
  kinang.classList.remove("hidden");
  viewmorehover6.classList.remove("viewmorehover6");
  viewlesshover6.classList.add("viewlesshover6");
  viewlesshover6.addEventListener("click", function () {
    kinang.classList.add("hidden");
    viewmorehover6.classList.add("viewmorehover6");
    viewlesshover6.classList.remove("viewlesshover6");
  });
});
