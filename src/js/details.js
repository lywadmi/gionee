$(function(){
    // 跳转到购物车
    $('.addCart').click(function(){
        location.href = '../pages/cart.html';
    })
    //购买按钮
    let $add = $('.add_cart');
    //遍历
    $add.each(function(){
        $(this).click(function(){
            let good_id = $(this).parent().attr('data-good-id');
            let good_name = $(this).siblings('h1').eq(0).text();
            let good_price = parseInt($(this).siblings('.infos_money').text());
            console.log(good_price);
            // 获取cookie
            let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
            //转对象
            let cookie_obj = convertStrToObj(cookie_str);
            //是否存在
            if(good_id in cookie_obj){
                //找到 数量 + 1
                cookie_obj[good_id].num ++;
            }else{
                cookie_obj[good_id] = {
                    name : good_name,
                    price : good_price,
                    num : 1
                }
            }
            // 加入cookie
            $.cookie('carts',JSON.stringify(cookie_obj),{expires : 1,path : '/'});
        })
    })




    $('.deta_li1').mouseover(function(){
        $('.deta_li2').css({'background':'#f1f1f1','color':'#333333','border-top':'1px solid #ddd'});
        $('.deta_li3').css({'background':'#f1f1f1','color':'#333333','border-top':'1px solid #ddd'});
        $('.active').css({'background':'white','color':'#ef4222','border-top':'1px solid  #ef4222'});
        $('.deta_imgs').css('display','block');
        $('.meter').css('display','none');
        $('.package').css('display','none');

    })
    $('.deta_li2').mouseover(function(){
        $(this).css({'background':'white','color':'#ef4222','border-top':'1px solid  #ef4222'});
        $('.deta_li3').css({'background':'#f1f1f1','color':'#333333','border-top':'1px solid #ddd'});
        $('.active').css({'background':'#f1f1f1','color':'#333333','border-top':'1px solid #ddd'});
        $('.deta_imgs').css('display','none');
        $('.meter').css('display','block');
        $('.package').css('display','none');
    })
    $('.deta_li3').mouseover(function(){
        $(this).css({'background':'white','color':'#ef4222','border-top':'1px solid  #ef4222'});
        $('.deta_li2').css({'background':'#f1f1f1','color':'#333333','border-top':'1px solid #ddd'});
        $('.active').css({'background':'#f1f1f1','color':'#333333','border-top':'1px solid #ddd'});
        $('.deta_imgs').css('display','none');
        $('.meter').css('display','none');
        $('.package').css('display','block');
    })
})