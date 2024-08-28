$(window).ready(function() {
   $("#display").val('');
});

function insrt(num) {
    $("#display").val($("#display").val() + num);
}

function opr(operator) {
    $("#display").val($("#display").val() + operator);
}
function equl() {
    $("#display").val(eval($("#display").val()));
}

function sroot() {
    $("#display").val(Math.sqrt($("#display").val()));
}

function bckspace(){
    $("#display").val($("#display").val().substring(0,$("#display").val().length-1));
}
function clr() {
    $("#display").val('');
}

