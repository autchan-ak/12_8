
let my_auth =[];
  for(let i=0;i<=9;i++){
    my_auth.push(i);
  }
  for(var i=0;i<26;i++){
    my_auth.push(String.fromCharCode((65+i)));// 26个大写字母
    my_auth.push(String.fromCharCode(97+i));// 26个小写字母
  }
  // 手机号验证
function sjhyz(){
  let _phone = phone.value;
  console.log(_phone)
  let sjh = _phone.search(/^1[3-9]\d{9}$/);
   console.log(sjh);
  if(sjh==-1){
    alert("输入的手机号无效");
  }
}
function reg(){
  let _phone = phone.value;
  let _upwd = upwd.value;
  if(!_phone){
    alert("用户名不能为空");
    return;
  }
  if(!_upwd){
    alert("密码不能为空");
    return;
  }
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status==200){
      if(xhr.responseText==1){
        alert("注册成功！");
      }else{
        alert("注册失败！");
      }
    }
  }
  xhr.open("post",`/user/reg`,true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
  let add = `phone=${_phone}&upwd=${_upwd}`
  xhr.send(add);
}
// 随机产生4位
let sj ='';
function hq_auth(){
  sj="";
  for(let i=0;i<4;i++){
    let a = parseInt(Math.random()*my_auth.length);
    sj += my_auth[a]
    console.log(a);
  }
  alert(`验 证 码 为 ：${sj}`);
}
// 判断验证码是否正确
function yzm(){
  
  let _auth = auth.value;

  if(_auth!=sj){
    alert("验证码错误！！");
  }
}



