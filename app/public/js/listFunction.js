$(document).ready(function(){
    $("#dir").change(function() {
            var parent = $(this).val(); //get option value from parent 

            switch(parent){ //using switch compare selected option and populate child
                  case 'north':
                    $("#7").hide();
                    $("#1").show();
                    console.log()
                    break;
                  case 'south':
                    $("#7").show();
                    $("#1").hide();
                    break;              
               }
    });

//let's create arrays
/*
var north = [
    {display: "דן", value: "דן" }, 
    {display: "רמות נפתלי", value: "רמות נפתלי" }, 
    {display: "עין יקים", value: "עין יקים" },
    {display: "דגניה", value: "דגניה" },
    {display: "כפר חסידים", value: "כפר חסידים" },
    {display: "עין הוד", value: "עין הוד" },
    {display: "הר הכרמל", value: "הר הכרמל" }
    ];

var south = [
    {display: "הר הכרמל", value: "הר הכרמל" }, 
    {display: "עין הוד", value: "עין הוד" }, 
    {display: "כפר חסידים", value: "כפר חסידים" },
    {display: "דגניה", value: "דגניה" },
    {display: "עין יקים", value: "עין יקים" },
    {display: "רמות נפתלי", value: "רמות נפתלי" },
    {display: "דן", value: "דן" }];

//If parent option is changed
$("#dir").change(function() {
        var parent = $(this).val(); //get option value from parent 

        switch(parent){ //using switch compare selected option and populate child
              case 'north':
                list(north);
                break;
              case 'south':
                list(south);
                break;              
           }
});

//function to populate child select box
function list(array_list)
{
    $("#sPoint").html(""); //reset child options
    $(array_list).each(function (i) { //populate child options 
        $("#sPoint").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
    });
}*/
});