refresh();

function refresh() {
    $(".order_lists").empty();
    //创建节点
    String.prototype.temp = function (obj) {
        return this.replace(/\$\w+\$/gi, function (matchs) {
            var returns = obj[matchs.replace(/\$/g, "")];
            return (returns + "") == "undefined" ? "" : returns;
        });
    };

    var htmlList = '';
    // textarea中的模板HTML
    htmlTemp = $("textarea").val();
    console.log(htmlTemp);

    var arr = JSON.parse($.cookie("cart"));
    if(arr) {

        arr.forEach(function (value) {

            htmlList += htmlTemp.temp(value);

        });

        $(".order_content").html(htmlList);
    }


}

<textarea style="display:none;">
    <ul class="order_lists">

    <li class="list_chk">
    <input type="checkbox" id="checkbox_2"  class="son_check">
    <label for="checkbox_2"></label>
    </li>
    <li class="list_con">
    <div class="list_img"><a href="javascript:;"><img src="$img$" alt=""></a></div>
<div class="list_text"><a href="javascript:;">$name$</a></div>
</li>
<li class="list_info">
    <p>规格：默认</p>
<p>$DepartTime$</p>
</li>
<li class="list_price">
    <p class="price">$price$</p>
    </li>
    <li class="list_amount">
    <div class="amount_box">
    <a href="javascript:;" class="reduce reSty">-</a>
    <input type="text" value="$num$" class="sum">
    <a href="javascript:;" class="plus">+</a>
    </div>
    </li>
    <li class="list_sum">
    <p class="sum_price">$totalPrice$ </p>
    </li>
    <li class="list_op">
    <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
</li>

</ul>
</textarea>