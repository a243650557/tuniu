onload = function () {


    $('.cart_header').load('header.html', function () {
        console.log(1);
        //	nav二级菜单开始
        var index_nav_menu_ul = document.querySelector(".index_nav_menu_ul");
        var has_subnav_li = index_nav_menu_ul.querySelectorAll(".has_subnav");
        var top_subnav = index_nav_menu_ul.querySelectorAll(".top_subnav");
        var top_subnav_box = document.querySelectorAll(".top_subnav_box");
        console.log(top_subnav_box);

        for (var i = 0; i < has_subnav_li.length; i++) {

            has_subnav_li[i].index = i;
            has_subnav_li[i].onmouseenter = function () {


                for (var j = 0; j < has_subnav_li.length; j++) {
                    //top_subnav[j].style.display = "none";
                    top_subnav[j].index1 = j;
                    top_subnav[j].onmouseenter = function () {
                        top_subnav[this.index1].style.display = "block";
                    }
                    top_subnav[j].onmouseleave = function () {
                        top_subnav[this.index1].style.display = "none";
                    }

                }

                if (top_subnav[this.index]) {
                    top_subnav[this.index].style.display = "block";
                }

            }
        }
        for (var i = 0; i < has_subnav_li.length; i++) {

            has_subnav_li[i].index = i;
            has_subnav_li[i].onmouseleave = function () {
                top_subnav[this.index].style.display = "none";
            }
        }


        $('.index_top_right_ul li').eq(5).mouseenter(function () {
            $('.index_top_right_ul .order').show();
        })
        $('.index_top_right_ul li').eq(5).mouseleave(function () {
            $('.index_top_right_ul .order').hide();
        })

        $('.index_top_right_ul').children('li').eq(8).mouseenter(function () {
            console.log(1);
            $('.lzyimg').show();
        })
        $('.index_top_right_ul').children('li').eq(8).mouseleave(function () {
            $('.lzyimg').hide();
        })

        $('.index_nav_menu_ul li').eq(0).click(function () {

            location.href =" ../../index/html/index.html";
        })


    });

    isallChecked();
    refresh();

    function refresh() {
            //1， 获取cookie中保存的购物车数据
            var arr = $.cookie("cart")
            if(arr) {
                var arr1 = JSON.parse(arr);
                console.log(arr1);
                //先清空ul中的li节点
                $(".order_content").empty();
                var Total = 0;
                var checkNum = 0;

                //创建节点
                for (var i = 0; i < arr1.length; i++) {
                    var item_total_price = (arr1[i].num) * (arr1[i].price);
                    var order_list = $('<ul class="order_lists"></ul>');

                    $('.order_content').append(order_list);
                    var list_chk = $('<li class="list_chk"></li>');
                    order_list.append(list_chk);
                    if (arr1[i].checked) {

                        list_chk.append('<input type="checkbox"  class="son_check" checked="checked">');
                    } else {
                        list_chk.append('<input type="checkbox"  class="son_check" >');
                    }

                    var list_con = $('<li class="list_con">');
                    order_list.append(list_con);
                    list_con.append(' <div class="list_img"><a href="javascript:;"><img src= ' + arr1[i].img + '></a></div><div class="list_text"><a href="javascript:;">' + arr1[i].name + '</a></div>');

                    var list_info = $('<li class="list_info"></li>');
                    order_list.append(list_info);
                    list_info.append('<p>规格：默认</p><p>' + arr1[i].DepartTime + '</p>');

                    var list_price = $('<li class="list_price"></li>');
                    order_list.append(list_price);
                    list_price.append('<p class="price"> ' + arr1[i].price + '</p>');

                    var list_amount = $('<li class="list_amount"></li>');
                    order_list.append(list_amount);
                    var amount_box = $('<div class="amount_box"></div>');
                    list_amount.append(amount_box);
                    amount_box.append(' <a href="javascript:;" class="reduce reSty">-</a><input type="text" value=' + arr1[i].num + ' class="sum"><a href="javascript:;" class="plus">+</a>');

                    var list_sum = $('<li class="list_sum"></li>');
                    order_list.append(list_sum);
                    list_sum.append('<p class="sum_price">' + item_total_price + ' </p>');

                    var list_op = $('<li class="list_op"></li>');
                    order_list.append(list_op);
                    list_op.append('<p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>');


                    if (arr1[i].checked) {
                        Total = Total + item_total_price;
                        checkNum++;

                    }


                }
                if (checkNum > 0) {
                    $('.calBtn a').addClass('btn_sty');
                    $('.delAll a').addClass('btn_sty');
                } else {
                    $('.calBtn a').removeClass('btn_sty');
                    $('.delAll a').removeClass('btn_sty');
                }
                $('.total_text').html(Total);
                $('.piece_num').html(checkNum);


            }
                else{
                console.log("noodershow");
                $('.no_order').show();
            }



    }


        //+
        $('.cartBox').on("click",".plus",function () {

            var index = $(this).index('.cartBox .plus');

            var arr = JSON.parse($.cookie("cart"));
            arr[index].num++;
            $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
            refresh();

        })

        //-
        $('.cartBox').on("click",".reSty",function () {

            var index = $(this).index('.cartBox .reSty');
            var arr = JSON.parse($.cookie("cart"));
            if(arr[index].num >1) {
                arr[index].num--
            }else{
                arr[index].num =1;
            }

            $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
            refresh();
        })

      //点击checkbox
        $('.cartBox').on("click",".son_check",function () {

            var index = $(this).index('.cartBox .son_check');
            var arr = JSON.parse($.cookie("cart"));
            arr[index].checked = !arr[index].checked;
            $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
            console.log( arr[index].checked);
            isallChecked();
            refresh();
        })

    //点击全选
        $('#all').click(function () {

            if($('#all').prop("checked")) {
                var arr = JSON.parse($.cookie("cart"));
                for (var i = 0; i < arr.length; i++) {

                    if (!arr[i].checked) {
                        arr[i].checked = !arr[i].checked;
                    }

                }
                $.cookie("cart", JSON.stringify(arr), {expires: 30, path: "/"});
                refresh();
            }else{
                var arr = JSON.parse($.cookie("cart"));
                for (var i = 0; i < arr.length; i++) {

                        arr[i].checked = false;

                }
                $.cookie("cart", JSON.stringify(arr), {expires: 30, path: "/"});
                refresh();

            }
        })

        //判断全选符号
        function isallChecked() {
            var arr1 = $.cookie("cart");
            if(arr1){
                var arr = JSON.parse($.cookie("cart"));

                var sum = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].checked) {
                        sum++;
                    }
                }
                if (arr.length !=0 && sum == arr.length) {
                    $('#all').prop("checked", true);
                } else {
                    $('#all').prop("checked", false);
                }
            }
        }

        //直接修改数量的值
        $('.cartBox').on("keyup",".sum",function () {

            var arr = JSON.parse($.cookie("cart"));
            var index = $(this).index('.cartBox .sum');

            if(($(this).val()-0) <= 0 ){
                alert("数量超出范围");
                $(this).val(1);
            }else {
                arr[index].num = $(this).val() - 0;
                $.cookie("cart", JSON.stringify(arr), {expires: 30, path: "/"});
                refresh();
            }
        })

        //删除商品
    $('.cartBox').on("click",".delBtn",function () {
        var arr1 = $.cookie("cart");

        if(arr1) {
            var arr = JSON.parse($.cookie("cart"));
            var index = $(this).index('.cartBox .delBtn');

            arr.splice(index, 1);
            $.cookie("cart", JSON.stringify(arr), {expires: 30, path: "/"});
            refresh();
        }

        var arr1 = JSON.parse($.cookie("cart"));
        console.log(arr1);
        if(arr1.length <= 0 ) {
            console.log(1234);
            $.cookie("cart", JSON.stringify(arr1), {expires: -2, path: "/"});
            refresh();
        }

    })

    //删除全部
    $('.delAll').click(function () {
        var arr1 = $.cookie("cart");

        if(arr1){
            var arr = JSON.parse($.cookie("cart"));
            console.log(arr.length);
            for(var i=0;i < arr.length; i++){
                console.log(arr[i].checked);
                if(arr[i].checked){
                    console.log(i)
                    arr.splice(i,1);
                    i--;
                }
            }


        $.cookie("cart", JSON.stringify(arr), {expires: 30, path: "/"});
        isallChecked();
        refresh();

        var arr1 = JSON.parse($.cookie("cart"));
        console.log(arr1);
        if(arr1.length <= 0 ) {
            console.log(1234);
            $.cookie("cart", JSON.stringify(arr1), {expires: -2, path: "/"});
            refresh();
        }

        }

    })





}