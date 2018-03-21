onload = function () {


        $('.detail_header').load('header.html',function () {

            //	nav二级菜单开始
            var index_nav_menu_ul = document.querySelector(".index_nav_menu_ul");
            var has_subnav_li = index_nav_menu_ul.querySelectorAll(".has_subnav");
            var top_subnav = index_nav_menu_ul.querySelectorAll(".top_subnav");
            var top_subnav_box = document.querySelectorAll(".top_subnav_box");
            console.log(top_subnav_box);

            for(var i=0; i<has_subnav_li.length; i++){

                has_subnav_li[i].index = i;
                has_subnav_li[i].onmouseenter = function(){



                    for(var j=0; j<has_subnav_li.length; j++){
                        //top_subnav[j].style.display = "none";
                        top_subnav[j].index1 = j;
                        top_subnav[j].onmouseenter = function(){
                            top_subnav[this.index1].style.display = "block";
                        }
                        top_subnav[j].onmouseleave = function(){
                            top_subnav[this.index1].style.display = "none";
                        }

                    }

                    if(top_subnav[this.index]){
                        top_subnav[this.index].style.display = "block";
                    }

                }
            }
            for(var i=0; i<has_subnav_li.length; i++){

                has_subnav_li[i].index = i;
                has_subnav_li[i].onmouseleave = function(){
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





        });


            //放大镜
            $('.resource_display').mousemove(function (e) {

                $('.magnifier').show();
                $('.middleArea').show();

                var x = e.pageX - $('.resource_display_img').offset().left -$('.middleArea').width()/2;
                var y = e.pageY - $('.resource_display_img').offset().top -$('.middleArea').height()/2;

                var scale = $('.resource_display_img').width() / $('.middleArea').width();

                if(x <0 ) x = 0;
                if(y < 0) y = 0;
                if(x >($('.resource_display_img').width() - $('.middleArea').width())){
                    x = $('.resource_display_img').width() - $('.middleArea').width();
                }
                if(y >($('.resource_display_img').height() - $('.middleArea').height())){
                    y = $('.resource_display_img').height() - $('.middleArea').height();
                }

                $('.middleArea').css({left:x,top:y});
                $(".magnifier img").css({left: -scale*x,top: -scale*y});

            })
            $('.resource_display').mouseleave(function () {
                $('.magnifier').hide();
                $('.middleArea').hide();
            })

            //放大镜点击
             $('.resource_nav_ul li').click(function () {

                var that = $(this);
                $(this).parents('.resource_nav').siblings('.resource_display').find('img').attr("src",$(this).find('img').attr("src"));
                 $(this).parents('.resource_nav').siblings('.magnifier').find('img').attr("src",$(this).find('img').attr("src"));

             })


    $('.calendar-box').calendar({
        ele : '.demo-box', //依附
        title : '选择预约时间',
//			beginDate : '2017-10-07',
//			endDate : '2017-12-04',
        data : [
            {date:'2017-10-07',data:'107'},
            {date:'2017-10-08',data:'108'},
            {date:'2017-10-09',data:'109'},
            {date:'2017-10-10',data:'110'},
            {date:'2017-10-11',data:'111'},
            {date:'2017-10-12',data:'112'},
            {date:'2017-10-13',data:'113'},
//				{date:'2017-10-14',data:'114'},
            {date:'2017-10-15',data:'115'},
            {date:'2017-10-16',data:'116'},
            {date:'2017-10-17',data:'117'},
            {date:'2017-10-18',data:'118'},
            {date:'2017-10-19',data:'119'},
            {date:'2017-10-20',data:'120'},
            {date:'2017-10-21',data:'121'},
            {date:'2017-10-22',data:'122'},
            {date:'2017-10-23',data:'123'},
            {date:'2017-10-24',data:'124'},
            {date:'2017-10-25',data:'125'},
            {date:'2017-10-26',data:'126'},
            {date:'2017-10-27',data:'127'},
            {date:'2017-10-28',data:'128'},
            {date:'2017-10-29',data:'129'},
//				{date:'2017-10-30',data:'130'},
            {date:'2017-10-31',data:'131'},
            {date:'2017-11-01',data:'101'},
            {date:'2017-11-02',data:'102'},
            {date:'2017-11-03',data:'103'},
            {date:'2017-11-04',data:'104'},
            {date:'2017-11-05',data:'105'},
            {date:'2017-11-06',data:'106'},
            {date:'2017-11-07',data:'107'},
            {date:'2017-11-08',data:'108'},
            {date:'2017-11-09',data:'109'},
            {date:'2017-11-10',data:'110'},
            {date:'2017-11-11',data:'111'},
//				{date:'2017-11-12',data:'112'},
            {date:'2017-11-13',data:'113'},
            {date:'2017-11-14',data:'114'},
            {date:'2017-11-15',data:'115'},
            {date:'2017-11-16',data:'116'},
            {date:'2017-11-17',data:'117'},
            {date:'2017-11-18',data:'118'},
            {date:'2017-11-19',data:'119'},
            {date:'2017-11-20',data:'120'},
            {date:'2017-11-21',data:'121'},
            {date:'2017-11-22',data:'122'},
            {date:'2017-11-23',data:'123'},
            {date:'2017-11-24',data:'124'},
//				{date:'2017-11-25',data:'125'},
            {date:'2017-11-26',data:'126'},
            {date:'2017-11-27',data:'127'},
            {date:'2017-11-28',data:'128'},
            {date:'2017-11-29',data:'129'},
            {date:'2017-11-30',data:'130'},
            {date:'2017-12-01',data:'121'},
            {date:'2017-12-02',data:'122'},
            {date:'2017-12-03',data:'123'},
            {date:'2017-12-04',data:'124'},
        ]
    });
    function getActive(){
            var data = $('.calendar-box').calendarGetActive();
            var date = new Date(Date.parse(data.date));
            date.setDate(date.getDate()+4);
            var dateStr1 = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate());
            var dateStr =   data.date +"出发" + '--'+ dateStr1 +"返回" ;


            return (dateStr);
            //  alert(data.date+"--¥"+data.money  );
    }
    $('#btn').click(function () {
        getActive();
    })

    //出发日期显示隐藏
    $('.travel_date').click(function (e) {
        e.preventDefault();
        $('.calendar-box1').toggle();
           e.stopPropagation();

    })
    $(document).click(function (e) {
        e.preventDefault();
        $('.calendar-box1').hide();
    });

    $('.calendar-box1 .ht-rili-td').click(function () {
        $(this).children('.ht-rili-money').css({color:"#ffffff"});
        $('.travel_date .cfrq1').html(getActive());

    })
    $('.calendar-box2 .ht-rili-td').click(function () {

        $('.travel_date .cfrq1').html(getActive());
        $(this).children('.ht-rili-money').css({color:"#ffffff"}).end().siblings().children('.ht-rili-money').css({color:"#ffa833"});

    })

 //飞入出发日期
    var offset = $("#end").offset();  //结束的地方的元素
    console.log(offset);
    $(".addcar").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
        var flyer = $(this).clone();
        flyer.css({"width":"75px","height":"50px"});

        flyer.fly({
            //开始位置
            start: {
                left: event.clientX,
                top: event.clientY
            },
            //结束位置
            end: {
                left: offset.left + 200,
                top: offset.top -150,
                width:0,
                height:0
            },
            //结束后
            onEnd: function(){
                console.log("结束");
               flyer.animate({width: '0px'}, 200);
                flyer.remove();
            }
        });
    });

}


