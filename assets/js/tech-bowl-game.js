var DATA;
var ANSWER;
var POINTS = 0;

function newQuestion() {
    $( "#question" ).show();
    $( "#category" ).show();
    $( "#user-input ").show();
    $( "#p-answer" ).hide();
    $( "#next-btn" ).hide();
    var selectedQuestion = DATA[Math.floor(Math.random() * DATA.length)];
    $( "span#question" ).text(selectedQuestion["Question"]);
    $( "span#category" ).text(selectedQuestion["Category"]);
    ANSWER = selectedQuestion["Answer"];
}

function showAnswer(ele) {
    if (event.key === 'Enter') {
        if (ele.value == ANSWER) {
            POINTS++;
        }
        $( "#question" ).hide();
        $( "#category" ).hide();
        $( "#user-input" ).hide();
        $( "#p-answer" ).show();
        $( "#next-btn" ).show();
        $( "#answer" ).text(ANSWER);
        $( "#points" ).text(POINTS);
    }
}

$.get('{{ site.url }}/{{ site.baseurl }}/assets/misc/sample-tech-bowl.csv', function (raw_data, textStatus, jqXHR) {
    DATA = $.csv.toObjects(raw_data);

    // Make sure this doesn't run early
    newQuestion();
})