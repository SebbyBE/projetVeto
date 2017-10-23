$(function(){
    $('#btnConnect').click(function(){
        $.ajax({
            url: '/login',
            type: 'POST',
            success:function(data,textStatus,jqXHR){
                console.log(textStatus);
            },
            error:function(jqXHR,textStatus,errorThrown){
                throw errorThrown;
            }
        });
    });
});