var fnIDs=[];
var fnrefIDs=[];
var content={};

$(document).ready(function(){
    $("*[id^='fnref']").each(function(){
        fnrefIDs.push(this.id);
    });
    for (count=0;count<fnrefIDs.length;count++){
        fnIDs.push(`fn${count+1}`);
    }
    $.each(fnIDs,function(key,val){
        let fnrefKey=fnrefIDs[key];
        content[fnrefKey]=$("#"+val)[0].innerText;
    });
});

$(document).ready(function(){
    $.each(content, function(key,val){
        $("#"+key).click(function(){
        event.stopPropagation();
        let footnoteText=val;
        let x=event.pageX;
        let y=event.pageY;
        $("#footnoteText").show();
        $("#footnoteText").html(`${footnoteText}`);
        $("#footnoteText").css("display","block");
        $("#footnoteText").css("position","absolute");
        $("#footnoteText").css("left",`${x}px`);
        $("#footnoteText").css("top",`${y}px`);
    })});
    $(document).click(function(){
        $("#footnoteText").hide();
    });
});