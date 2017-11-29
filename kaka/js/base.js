/**
 *
 * @authors C
 * @date    2017-11-14
 * @version 1.0
 */

(function($) {

    function setSize(_key, _tag) {
        var _height = $(_key).height();
        var _width = $(_key).width();

        $(_tag).css('height', _height);
    };

    function setSizeAll(_key, _tag) {
        var _height = $(_key).height();
        var _width = $(_key).width();

        $(_tag).css('height', _height);
        $(_tag).css('width', _width);
    };

    //setSize('#J_userimg', '#J_userbox');
    setSize('#J_wallet', '#J_walletbox');

    /** 最新技术 **/
    $('#J_iconbox').on('click', 'li', function() {
        var $this = $(this);
        var _key = $this.attr('data-key');

        $this.addClass('on').siblings('li').removeClass('on');

        $.ajax({
            type: "POST",
            url: reqUrl,
            data: {
                mobilePhone: _key
            },
            dataType: 'json',
            success: function(data) {
                dataInfo(data);
            }
        });
    });

    function dataInfo(data) {
        var _list = '';
        var _tag = $('#J_tecbox');

        $.each(_datali, function(index, data_index) {
            _list = '<li>' +
                '<img class="pull-left liimg" src="../images/photo.png" alt="">' +
                '<div class="pull-left liinfo">' +
                '<div class="ti">满6个月就来提额</div>' +
                '<div class="info">京东金融动作</div>' +
                '<div class="link">' +
                '<a href="javascript:;">阅读全文>></a>' +
                '</div>' +
                '</div>' +
                '<div class="tip"><span>标签：</span>小白卡</div>' +
                '</li>';
        })
        _tag.html('');
        _tag.append(_list);
    }

    /** 最新口子 **/
    $('#J_sleti').on('click', '.li', function() {
        var $this = $(this);
        var _key = $this.attr('data-key');

        $this.addClass('on').siblings('.li').removeClass('on');

        $.ajax({
            type: "POST",
            url: reqUrl,
            data: {
                mobilePhone: _key
            },
            dataType: 'json',
            success: function(data) {
                openInfo(data);
            }
        });
    });

    function openInfo(data) {
        var _list = '';
        var _tag = $('#J_openbox');

        $.each(data, function(index, data_index) {
            _list = '<li>' +
                '<img class="pull-left liimg" src="../images/photo.png" alt="">' +
                '<div class="pull-left liinfo">' +
                '<div class="info">满6个月就来提额</div>' +
                '<div>' +
                '<span class="pull-left type">【代理专享】</span>' +
                '<span class="pull-right date">2017-11-22</span>' +
                '</div>' +
                '</div>' +
                '</li>';
        })
        _tag.html('');
        _tag.append(_list);
    }

    /** 文章图片宽度设置 **/
    if ($('#J_ac').length > 0) {
        var _width = $(window).width();

        $("img").each(function() {
        	var $this = $(this);
        	var _img = $this.width();

            if(_img > _width){
            	$this.css('width', '100%');
            }
        });
    }

})(jQuery);