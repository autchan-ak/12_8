function login(){
  let _uname = uname.value;
  let _upwd = upwd.value;
  if(!_uname){
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
        alert("登录成功！");
      }else{
        alert("用户名或密码错误！");
      }
    }
  }
  xhr.open("GET",`/user/login?uname=${_uname}&upwd=${_upwd}`,true);
  xhr.send();
}
