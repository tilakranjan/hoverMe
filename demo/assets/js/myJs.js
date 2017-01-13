$(document).ready(function(){

    //for animate css
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    $(".hover_me").unbind();
    $(".hover_me").hover(function(){
        $('.hover_more').animateCss('rubberBand');
    });

    $(".more_likes").unbind();
    $(".more_likes").hover(function(){
        $(this).children().animateCss('bounce');
    });

    $('.more_likes').click(function(){
        var ans_reaction = $(this).data('reaction');
        var current_reaction = $(this).data('current');
        //        var ans_like = $(this).data('like');
        //        var ans_id = $(this).data("ans_id");
        //        var this_one = this;
        $(this).parent().parent().removeClass(current_reaction);
        $(this).parent().parent().addClass(ans_reaction);
        $(this).siblings().each(function(){
            $(this).data('current', ans_reaction);
        });
        console.log('Answer Reaction: '+ans_reaction);
    });
});