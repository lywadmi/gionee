$(function(){
    //获取cookie
    let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
    //转对象
    let cookie_obj = convertStrToObj(cookie_str);
    //遍历
    for(let key in cookie_obj){
        let good = cookie_obj[key];
        $('.carts').append(`
        <ul class="goodInfo" data-good-id="${key}">
            <li>${good.name}</li>
            <li>${good.price}</li>
            <li class="num">
                <a href="javascript:;" class="minus">-</a>
                <input type="text" name="" id="" value="${good.num}" />
                <a href="javascript:;" class="plus">+</a>
            </li>
            <li class="total">${good.price * good.num}</li>
            <li><a href="javascript:;" class="del">删除</a></li>
        </ul>
        `)
    }

    //-
    let $minus = $('.minus');
    $minus.each(function(){
        $(this).click(function(){
            let id = $(this).parents('.goodInfo').attr('data-good-id');
            let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
            let cookie_obj = convertStrToObj(cookie_str);
            //改变数量
            if(cookie_obj[id].num > 0){
                cookie_obj[id].num --;
            }
            //存入cookie
            $.cookie('carts',JSON.stringify(cookie_obj),{expires : 1,path : '/'});
            //页面中的数量
            $(this).next().val(cookie_obj[id].num);
            //页面合计
            $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
        })
    })

    //+
    let $plus = $('.plus');
    $plus.each(function(){
        $(this).click(function(){
            let id = $(this).parents('.goodInfo').attr('data-good-id');
            let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
            let cookie_obj = convertStrToObj(cookie_str);
            //改变数量
            cookie_obj[id].num ++;
            //存入cookie
            $.cookie('carts',JSON.stringify(cookie_obj),{expires : 1,path : '/'});
            //页面中的数量
            $(this).prev().val(cookie_obj[id].num);
            //页面合计
            $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
        })
    })

    //数量框
    let $inp = $('.num input');
    $inp.each(function(){
        $(this).blur(function(){
            let id = $(this).parents('.goodInfo').attr('data-good-id');
            let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
            let cookie_obj = convertStrToObj(cookie_str);
            //改变数量
            if(/^\d+$/.test($(this).val())){
                cookie_obj[id].num = $(this).val();
            }else{
                cookie_obj[id].num = 0;
            }
            //存入cookie
            $.cookie('carts',JSON.stringify(cookie_obj),{expires : 1,path : '/'});
            //页面中的数量
            $(this).val(cookie_obj[id].num);
            //页面合计
            $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
        })
    })

    //删除
    let $del = $('.del');
    $del.each(function(){
        $(this).click(function(){
            let id = $(this).parents('.goodInfo').attr('data-good-id');
            let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
            let cookie_obj = convertStrToObj(cookie_str);
            //删除cookie中的数据
            delete cookie_obj[id];
            //存入cookie
            $.cookie('carts',JSON.stringify(cookie_obj),{expires : 1,path : '/'});
            //页面当前商品的删除
            $(this).parents('.goodInfo').remove();
        })
    })
})