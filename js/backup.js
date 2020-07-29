$(document).ready(function(){
    $('.hero_stat_list_head img,.hero_stat_item_list_head img').click(function(){
        window.history.back();
    })
    $('.hero_stat_list_img_wrap li').click(function(){
        if($(this).hasClass('on')){
           $(this).removeClass('on'); 
        }
        else{
            $(this).addClass('on'); 
        }
    });
    $('.hero_select_btn button').click(function(){
        if($('.hero_stat_list_img_wrap li').hasClass('on') <= 0){
            alert('영웅을 선택해주세요.');
        }
        else{
            location.href='hero_stat_item_list.html'
        }
    })
    //영웅선택 페이지
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
    //영웅아이템페이지 탭메뉴
    $('.content_stat_list_wrap div:first-child ul li').click(function(){
        $('.content_stat_list_wrap div:first-child ul li').removeClass('on'); 
        $(this).addClass('on');
        $('.content_stat_list_wrap div:first-child .bage_img1').attr('src','images/img_content_stat_bage.png')
        $('.content_stat_list_wrap div:nth-child(2) ul').show();
        $('.content_stat_list_wrap div:nth-child(2) p').hide();
    });
    $('.content_stat_list_wrap div:nth-child(2) ul li').click(function(){
        $('.content_stat_list_wrap div:nth-child(2) ul li').removeClass('on'); 
        $(this).addClass('on');
        $('.content_stat_list_wrap div:nth-child(2) .bage_img2').attr('src','images/img_content_stat_bage.png')
        $('.content_stat_list_wrap div:last-child ul').show();
        $('.content_stat_list_wrap div:last-child p').hide();
    });
    $('.content_stat_list_wrap div:last-child ul li').click(function(){
        $('.content_stat_list_wrap div:last-child ul li').removeClass('on'); 
        $(this).addClass('on');
        $('.content_stat_list_wrap div:last-child .bage_img3').attr('src','images/img_content_stat_bage.png')
        $('.content_select_btn button').addClass('on').click(function(){
            location.href='content_stat_party_list.html'
        });
    });
    //통계리스트
    var cnt = 0;
    var arr = $.map($(".modal_party_hero li"), function(item) {
        return $(item).attr("value");
    });
    console.log(arr)
    $('.modal_hero_list li img').click(function(e){
        var h_img_add = $(this).attr('src');
        /*var pictures = new Array(64);
            for (var i = 0; i < 64 ; i++) {
            pictures[i] = new Image();
            pictures[i].src = "img"+ i + ".gif";
        }
        for(var i=0;i<3;i++){
            arr[i]=i;
        }
        var imgg = $('.modal_hero_list li img');
        var length = imgg.length;
        var pictures = new Array(length);
            for (var i = 0; i < length ; i++) {
            pictures[i] = new Image();
            pictures[i].src = "img"+ i + ".gif";
        }
        for(var i=0;i<3;i++){
            arr[i]=i;
        }*/

        if(cnt == 0){
            if($(this).hasClass('off') || $(this).hasClass('')){
                $(this).removeClass('off').addClass('on').addClass('s1')
                $('.modal_party_hero li:first-child').html('<img src=' + h_img_add + '>').addClass('s11').addClass('img_on').css('border','none'); 
                cnt=1;
            }
        }
        else if(cnt == 1){
            if($(this).hasClass('off') || $(this).hasClass('')){
                $(this).removeClass('off').addClass('on').addClass('s2')
                $('.modal_party_hero li:nth-child(2)').html('<img src=' + h_img_add + '>').addClass('s22').addClass('img_on').css('border','none'); 
                cnt=2;
            }
        }
        else if(cnt == 2){
            if($(this).hasClass('off') || $(this).hasClass('')){
                $(this).removeClass('off').addClass('on').addClass('s3')
                $('.modal_party_hero li:last-child').html('<img src=' + h_img_add + '>').addClass('s33').addClass('img_on').css('border','none'); 
                cnt=3;
            }
        }

        $('.s1').click(function(){
            $(this).removeClass('on').removeClass('s1').addClass('off')
            $('.modal_party_hero li:first-child').empty('<img src=' + h_img_add + '>').removeClass('s11').removeClass('img_on').css('border','1px dashed #28b3b5')
            cnt=0
            $(this).click(function(){
                $(this).removeClass('off').addClass('on').addClass('s1')
                $('.modal_party_hero li:first-child').html('<img src=' + h_img_add + '>').addClass('s11').addClass('img_on').css('border','none'); 
                cnt=1
                console.log(cnt)
            })
        })
        $('.s2').click(function(){
            $(this).removeClass('on').removeClass('s2').addClass('off')
            $('.modal_party_hero li:nth-child(2)').empty('<img src=' + h_img_add + '>').removeClass('s22').removeClass('img_on').css('border','1px dashed #28b3b5')
            cnt=1
            $(this).click(function(){
                $(this).removeClass('off').addClass('on').addClass('s2')
                $('.modal_party_hero li:nth-child(2)').html('<img src=' + h_img_add + '>').addClass('s22').addClass('img_on').css('border','none'); 
                cnt=2;
                console.log(cnt)
            })
        })
        $('.s3').click(function(){
            $(this).removeClass('on').removeClass('s3').addClass('off')
            $('.modal_party_hero li:last-child').empty('<img src=' + h_img_add + '>').removeClass('s33').removeClass('img_on').css('border','1px dashed #28b3b5')
            cnt=2
            $(this).click(function(){
                $(this).removeClass('off').addClass('on').addClass('s3')
                $('.modal_party_hero li:last-child').html('<img src=' + h_img_add + '>').addClass('s33').addClass('img_on').css('border','none'); 
                cnt=3;
                console.log(cnt)
            })
        })
        if($('.modal_hero_list li img').hasClass('on') >= 3){
            cnt = 3;
            return false;
            console.log(cnt)
        }
        console.log(cnt)
        /*else{
            $(this).removeClass('on').addClass('off')
            $('.modal_party_hero li:nth-child(2)').empty('<img src=' + h_img_add + '>').removeClass('img_on').css('border','1px dashed #28b3b5')
            cnt=1;
        }
        else{
            $(this).removeClass('on').addClass('off')
            $('.modal_party_hero li:last-child').empty('<img src=' + h_img_add + '>').removeClass('img_on').css('border','1px dashed #28b3b5')
            cnt=2;
        }*/
        
    })

    $('.clear_btn,.party_select_wrap div:last-child p').click(function(){
        cnt = 0
        $('.modal_party_hero li').empty().css('border','1px dashed #28b3b5')
        $('.modal_hero_list li img').removeClass('on')
        $('.img_data1').attr('src' , 'images/btn_content_party_select.png')
        $('.img_data2').attr('src' , 'images/btn_content_party_select.png')
        $('.img_data3').attr('src' , 'images/btn_content_party_select.png')
    })
    $('.modal-footer button').click(function(){
        var img1 = $('.modal_party_hero li:first-child img').attr('src')
        var img2 = $('.modal_party_hero li:nth-child(2) img').attr('src')
        var img3 = $('.modal_party_hero li:last-child img').attr('src')
        
        $('.img_data1').attr('src' , img1)
        $('.img_data2').attr('src' , img2)
        $('.img_data3').attr('src' , img3)
    })
    //컨텐츠 영웅리스트
});