$(function(){
    //登录
    let arr = [false,false];
    //用户名
    $('.phone').blur(function(){
        let re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if(re.test($('.phone').val())){
            arr[0] = true;
        }else{
            arr[0] = false;
            $('.prom')[0].innerText = '请输入正确格式的手机号！';
        }
    })
    //密码
    $('.pawd').blur(function(){
        let re = /^\w{6,18}$/;
        if(re.test($('.pawd').val())){
            arr[1] = true;
        }else{
            arr[1] = false;
            $('.prom')[1].innerText = '请输入6~18位的密码';
        }
    })

    //传入cookie
    $('.login_dia').click(function(){
        if(arr.indexOf(false) === -1){
            let phone = $('.phone').val();
            let pawd = $('.pawd').val();
            let cookie_str = $.cookie('users') ? $.cookie('users') : '';
            let cookie_obj = convertStrToObj(cookie_str);
            if(phone in cookie_obj){
                if(pawd === cookie_obj[phone]){
                    $('.login').css('display','block');
                    $('.reg').css('display','none');
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
    $('.login_imme').click(()=>{
        $('.login').css('display','block');
        $('.reg').css('display','none');
    })


    //注册
    //用户名
    $('.reg_phone').blur(function(){
        let re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if(re.test($('.reg_phone').val())){
            arr[0] = true;
        }else{
            arr[0] = false;
            $('.prom')[0].innerText = '请输入正确格式的手机号！';
        }
    })
    //密码
    $('.reg_vert').blur(function(){
        let re = /^\w{6,18}$/;
        if(re.test($('.reg_vert').val())){
            arr[1] = true;
        }else{
            arr[1] = false;
            $('.prom')[1].innerText = '请输入6~18位的密码';
        }
    })

    //传入cookie
    $('.reg_next').click(function(){
        if(arr.indexOf(false) === -1){
            let reg_phone = $('.reg_phone').val();
            let reg_vert = $('.reg_vert').val();
            let cookie_str = $.cookie('users') ? $.cookie('users') : '';
            let cookie_obj = convertStrToObj(cookie_str);
            if(reg_phone in cookie_obj){
                if(reg_vert === cookie_obj[reg_phone]){
                    $('.login').css('display','none');
                    $('.reg').css('display','block');
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
    $('.reg_next').click(()=>{
        $('.login').css('display','none');
        $('.reg').css('display','block');
    })
})