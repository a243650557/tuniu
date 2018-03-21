$(function () {


    var box = $(".top")



    var catagoryId = 0 ;
    var areaId = 0;
    var flag = 1;

    var list = $("#list");
    refresh();

    function refresh() {
        console.log(catagoryId);
        $.ajax({
            type:"get",
            async:true,
            url:("../items.json"),
            success:function (data) {
                $("#list").html("");

                var obj = (data);
                console.log(obj);

                var arr = [];
                var arr1 = [];
                var arr2 = [];

                arr = obj.items;
                //两个都默认全选
                if(catagoryId == 0 && areaId == 0 ){

                    for(var i=0; i<arr.length; i++){

                        arr2.push(arr[i]);
                    }
                    paixu(flag,arr2);

                    for(var i=0; i<arr2.length; i++){

                        var li = $('<li class="pro_item"></li>');
                        list.append(li);
                        var pro_pic = $('<div class="pro_pic"></div>');
                        li.append(pro_pic);
                        var pro_info = $('<div class="pro_info"></div>');
                        li.append(pro_info);
                        pro_pic.append('<a href="javascript:;"><img src=' + arr2[i].img +'  alt="" /></a>');
                        pro_pic.append('<div class="pro_mes_bg"></div>');
                        var pro_mes = $('<div class="pro_mes"></div>');
                        pro_pic.append(pro_mes);
                        pro_mes.append('<a href="javascript:;"><span><i>' + arr2[i].bold + '</i>' + arr2[i].info + '</span></a>');
                        pro_info.append('<span class="price"><em>' + '$' + arr2[i].price + '</em><i>起</i></span><span class="satisfaction">' + arr2[i].satis +'</span>');

                    }

                    //类型全选，区域不确定
                }else if(catagoryId == 0 && areaId != 0){

                    for(var i=0; i<arr.length; i++){
                        if(arr[i].area == areaId) {
                            arr2.push(arr[i]);
                        }
                    }
                    paixu(flag,arr2);

                    for(var i=0; i<arr2.length; i++){

                        var li = $('<li class="pro_item"></li>');
                        list.append(li);
                        var pro_pic = $('<div class="pro_pic"></div>');
                        li.append(pro_pic);
                        var pro_info = $('<div class="pro_info"></div>');
                        li.append(pro_info);
                        pro_pic.append('<a href="javascript:;"><img src=' + arr2[i].img +'  alt="" /></a>');
                        pro_pic.append('<div class="pro_mes_bg"></div>');
                        var pro_mes = $('<div class="pro_mes"></div>');
                        pro_pic.append(pro_mes);
                        pro_mes.append('<a href="javascript:;"><span><i>' + arr2[i].bold + '</i>' + arr2[i].info + '</span></a>');
                        pro_info.append('<span class="price"><em>' + '$' + arr2[i].price + '</em><i>起</i></span><span class="satisfaction">' + arr2[i].satis +'</span>');

                    }

                    //类型不确定，区域全选
                }else if(catagoryId != 0 && areaId == 0){

                    for(var i=0; i<arr.length; i++){
                        if(parseInt(arr[i].category) == catagoryId) {
                            arr2.push(arr[i]);
                        }
                    }
                    paixu(flag,arr2);

                    for(var i=0; i<arr2.length; i++){

                        var li = $('<li class="pro_item"></li>');
                        list.append(li);
                        var pro_pic = $('<div class="pro_pic"></div>');
                        li.append(pro_pic);
                        var pro_info = $('<div class="pro_info"></div>');
                        li.append(pro_info);
                        pro_pic.append('<a href="javascript:;"><img src=' + arr2[i].img +'  alt="" /></a>');
                        pro_pic.append('<div class="pro_mes_bg"></div>');
                        var pro_mes = $('<div class="pro_mes"></div>');
                        pro_pic.append(pro_mes);
                        pro_mes.append('<a href="javascript:;"><span><i>' + arr2[i].bold + '</i>' + arr2[i].info + '</span></a>');
                        pro_info.append('<span class="price"><em>' + '$' + arr2[i].price + '</em><i>起</i></span><span class="satisfaction">' + arr2[i].satis +'</span>');

                    }
                    //类型和区域都不确定
                }else{

                    for(var i=0; i<arr.length; i++){
                        if(arr[i].category == catagoryId && arr[i].area == areaId ) {
                            arr2.push(arr[i]);
                        }
                    }
                    paixu(flag,arr2);

                    for(var i=0; i<arr2.length; i++){

                        var li = $('<li class="pro_item"></li>');
                        list.append(li);
                        var pro_pic = $('<div class="pro_pic"></div>');
                        li.append(pro_pic);
                        var pro_info = $('<div class="pro_info"></div>');
                        li.append(pro_info);
                        pro_pic.append('<a href="javascript:;"><img src=' + arr2[i].img +'  alt="" /></a>');
                        pro_pic.append('<div class="pro_mes_bg"></div>');
                        var pro_mes = $('<div class="pro_mes"></div>');
                        pro_pic.append(pro_mes);
                        pro_mes.append('<a href="javascript:;"><span><i>' + arr2[i].bold + '</i>' + arr2[i].info + '</span></a>');
                        pro_info.append('<span class="price"><em>' + '$' + arr2[i].price + '</em><i>起</i></span><span class="satisfaction">' + arr2[i].satis +'</span>');

                    }

                }


                //排序
                function paixu(flag,arr2){
                    //按满意度排序
                    if (flag == 1) {
                        for(var i =0;i<arr2.length;i++){
                            for (var j=0; j<arr2.length-1-i; j++) {
                                if (parseInt(arr2[j].satis1) < parseInt(arr2[j+1].satis1)) {
                                    var tmp = arr2[j];
                                    arr2[j] = arr2[j+1];
                                    arr2[j+1] = tmp;
                                }
                            }
                        }
                    }
                    //按价格排序
                    else{
                        for(var i =0;i<arr2.length;i++){
                            for (var j=0; j<arr2.length-1-i; j++) {
                                if (parseInt(arr2[j].price) > parseInt(arr2[j+1].price)) {
                                    var tmp = arr2[j];
                                    arr2[j] = arr2[j+1];
                                    arr2[j+1] = tmp;
                                }
                            }
                        }

                    }
                    return arr2;
                }
            }






        });
    }


   $('.box1 span').click(function () {
        var index = $(this).index() -1;
       catagoryId = index ;
       $(this).addClass("active").siblings("span").removeClass("active")
       refresh();
   })

    $('.box2 span').click(function () {
        var index = $(this).index() -1;
        areaId = index ;
        $(this).addClass("active").siblings("span").removeClass("active")
        refresh();
    })

    $('.paixu input').click(function () {
        var index = $(this).index('.paixu input') ;
        console.log(index);
        flag = index +1;

        refresh();
    })

})