var interview = [{"question": "Question 1","rating": 0, "comment": ""},
                {"question": "Question 2","rating": 0, "comment": ""},
                {"question": "Question 3","rating": 0, "comment": ""},
                {"question": "Question 4","rating": 0, "comment": ""},
                {"question": "Question 5","rating": 0, "comment": ""}
                ];

let q = 0;
document.getElementById("question").innerHTML = interview[q].question;
showNextQuestion = function() {
    q++;
    document.getElementById("question").innerHTML = interview[q].question; 
 }
showPrevQuestion = function() {
    q--;
    document.getElementById("question").innerHTML = interview[q].question; 
}
var rating = 0;
addRating = function(r) {
    rating = r  
}
saveResponse = function(){
    interview[q].comment = document.getElementById("comment").value;
        interview[q].rating = rating;
        rating = 0;
        q++;
        document.getElementById("question").innerHTML = interview[q].question;
     if(q == interview.length-1)
    {
            location.href = "result.html";       
    }	
}