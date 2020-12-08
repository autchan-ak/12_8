// 添加页头页，页脚样式
var head = document.getElementsByTagName('head')[0].innerHTML;
head += `<link rel="stylesheet" href="./css/header.css">`;
document.getElementsByTagName('head')[0].innerHTML = head;
// 引入页头
var app = document.getElementById('app');
var header = document.createElement('header');
header.innerHTML = `		<div class="container-fluid">
<div class="container p-0">
  <div class="row no-gutters">
    <div class="col-4"><a href="./index.html"><img class="my-4" src="./img/ico_nav_logo.png" ></a></div>
    <div class="col-5">
      <ul class="list-unstyled mt_33 d-flex my_menu">
        <li><a class="font_999 h6 font-weight-bold mx-4 py-2" href="#" title="亿邦商学院">亿邦商学院</a></li>
        <li><a class="font_999 h6 font-weight-bold mx-4 py-3" href="javascript:;" title="会员社群">会员社群</a>
          <ul class="list-unstyled">
            <li><a class="h6 font-weight-bold font_999" href="#">马蹄社</a></li>
            <li><a class="h6 font-weight-bold font_999" href="#">善物派</a></li>
            <li><a class="h6 font-weight-bold font_999" href="#">百人讲</a></li>
            <li><a class="h6 font-weight-bold font_999" href="#">云顶会</a></li>
            <li><a class="h6 font-weight-bold font_999" href="#">海豚社</a></li>
            <li><a class="h6 font-weight-bold font_999" href="#">智慧三农</a></li>
            <li><a class="h6 font-weight-bold font_999" href="#">亿邦黑卡</a></li>
          </ul></li>
        <li><a class="font_999 h6 font-weight-bold mx-4 py-2" href="#" title="会员申请">会员申请</a></li>
      </ul>
    </div>
    <div class="col-3 mt_33">
      <ul class="list-unstyled d-flex">
        <li><a class="btn_bg px-3" href="http://www.ebrun.com/" title="亿邦首页"></a></li>
        <li><a class="btn_border px-4 py-1 mx-3" href="./login.html">登陆</a></li>
        <li><a class="btn_border px-4 py-1" href="./register.html">注册</a></li>
      </ul>
    </div>
  </div>
</div>
</div>`;
document.body.insertBefore(header,app);
// 引入页脚
var footer = document.createElement('footer');
footer.innerHTML = `		<div class="container-fluid">
<div class="container mt-4">
  <div class="row no-gutters">
    <div class="col-2">
      <div><img src="./img/footer/img_system_logo.png" ></div>
    </div>
    <div class="col-6">
      <div class="row no-gutters">
        <div class="border border-right-0 border-bottom-0 border-top-0 pl-5 col-4">
          <ul class="list-unstyled">
            <li class="font-weight-bold font_87 mb-3">新闻导航</li>
            <li class="mb-2"><a class="btn_border border-0" href="#">原创新闻</a></li>
            <li class="mb-2"><a class="btn_border border-0" href="#">企业库</a></li>
            <li class="mb-2"><a class="btn_border border-0" href="#">电商干货</a></li>
            <li class="mb-2"><a class="btn_border border-0" href="#">观察</a></li>
            <li><a class="btn_border border-0" href="#">栏目</a></li>
          </ul>
        </div>
        <div class="border border-right-0 border-bottom-0 border-top-0 pl-5 col-4">
          <ul class="list-unstyled">
            <li class="font-weight-bold font_87 mb-3">关于我们</li>
            <li class="mb-2"><a class="btn_border border-0" href="#">关于亿邦</a></li>
            <li class="mb-2"><a class="btn_border border-0" href="#">内容合作</a></li>
            <li class="mb-2"><a class="btn_border border-0" href="#">商务合作</a></li>
            <li class="mb-2"><a class="btn_border border-0" href="#">加入亿邦</a></li>
            <li><a class="btn_border border-0" href="#">法律声明</a></li>
          </ul>
        </div>
        <div class="border border-bottom-0 border-top-0 pl-5 pr-5 col-4">
          <ul class="list-unstyled">
            <li class="font-weight-bold font_87 mb-3">产品服务</li>
            <li class="mb-2"><a class="btn_border border-0" href="#">亿邦营销</a></li>
            <li class="mb-2"><a class="btn_border border-0" href="#">亿邦会展</a></li>
            <li class="mb-2"><a class="btn_border border-0" href="#">亿邦商学院</a></li>
            <li class="mb-2"><a class="btn_border border-0" href="#">亿邦研究院</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="d-flex  text-center justify-content-sm-around">
        <div>
          <img src="./img/footer/img_system_app.jpg">
          <p class="font_14">扫一扫立即下载</p>
        </div>
        <div>
          <img src="./img/footer/img_system_wechat.jpg">
          <p class="font_14">扫一扫立即关注</p>
        </div>
      </div>
      <div class="text-center"><a class="font_14 dongli" href="#" title="关注亿邦动力网">关注亿邦动力网</a></div>
    </div>
  </div>
</div>
</div>
<div class="container-fluid fluid_bg">
<div class="container">
  <ul class="list-unstyled py-3 d-flex footer">
    <li class="font_12 px-4">亿邦动力网是国内具有影响力的电子商务资讯网站</li>
    <li></li>
    <li class="font_12 px-4">© 2007-2020 亿邦动力版权所有 京ICP证070369号 京ICP备09097961号 <a class="font_12" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010602006906">京公网安备11010602006906号</a></li>
    <li></li>
    <li class="font_12 px-4">电话：010-88825657</li>
  </ul>
</div>
</div>`;
document.body.appendChild(footer);
