var student_name = [];
function submit(){
    var display_name = [];
    for(var j = 1; j <= 4; j++){
        var name = document.getElementById("name_of_the_student_"+j).value;
        student_name.push(name);
    }
    var studentlength = student_name.length;
    for(var i = 0; i < studentlength; i++){
        display_name.push("<h4> Name "+student_name[i]+ "/<h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = display_name;
    var remove_commas = display_name.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}