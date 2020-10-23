$(function(){
    let arr = [false,false];
    //用户名
    $('#uname').blur(function(){
        let re = /[a-zA-Z0-9]{6,12}$/;
        if(re.test($('#uname').val())){
            arr[0] = true;
        }else{
            arr[0] = false;
            $('.prom')[0].innerText = '请输入6~12位的用户名';
        }
    })
    //密码
    $('#upwd').blur(function(){
        let re = /^\w{6,18}$/;
        if(re.test($('#upwd').val())){
            arr[1] = true;
        }else{
            arr[1] = false;
            $('.prom')[1].innerText = '请输入6~18位的密码';
        }
    })

    //传入cookie
    $('.btn').click(function(){
        if(arr.indexOf(false) === -1){
            let uname = $('#uname').val();
            let upwd = $('#upwd').val();
            let cookie_str = $.cookie('users') ? $.cookie('users') : '';
            let cookie_obj = convertStrToObj(cookie_str);
            if(uname in cookie_obj){
                if(upwd === cookie_obj[uname]){
                    location.href = 'list.html';
                }else{
                    $('.prom')[3].innerText = '密码错误！';
                }
            }else{
                $('.prom')[3].innerText = '用户名错误！';
            }
        }else{
            $('.prom')[3].innerText = '请完善注册信息！';
        }
    })
    $('.code').click(()=>{
        location.href = 'regrist.html';
    })
})