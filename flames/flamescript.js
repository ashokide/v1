$(document).ready(function () {
    $(".names").val("");

    $("#reset").click(function () {
        $(".names").val("");
        $("#answer").val("Calculate To See Result");
    });

    $("#calc").click(function () {
        var fname = document.getElementById('fname').value;
	    var sname = document.getElementById('sname').value;
	    if (fname=='' || fname ==" ") {
		alert("Enter Your Name");
	    }
	    else if (sname=='' || sname ==" ") {
		alert("Enter Partner Name");
        }
        else
        {
            var fname = $("#fname").val().toUpperCase();
            var sname = $("#sname").val().toUpperCase();
            var space =/\s+/g;
            fname = fname.replace(space,"");
            sname = sname.replace(space,"");
            console.log("Input 1:" + fname, "Input 2:" + sname);
            for (var i = 0; i < fname.length; i++) {
                for (var j = 0; j < sname.length; j++) {
                    if (fname[i] == sname[j]) {
                        var txt1 = fname.substring(0, i);
                        var txt2 = fname.substring(i + 1, fname.length);
                        fname = txt1 + txt2;
                        i = -1;
    
                        var txt3 = sname.substring(0, j);
                        var txt4 = sname.substring(j + 1, sname.length);
                        sname = txt3 + txt4;
                        j = -1;
                        break;
                    }
                }
            }
            namelength = fname.length + sname.length;
            console.log("Final Length: " + namelength);
    
            var flames = new Array("Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings");
    
            var startpos = 1;
            for (var x = 6; x > 1; x--) {
                var elem = (namelength % x + startpos) - 1 ;
                if(elem>x)
                {
                    elem %= x;
                }
                if(elem==0)
                {
                    elem = flames.length;
                }
                flames.splice(elem-1,1)
                startpos = elem;
            }
            $("#answer").val(flames[0]);
            console.log("Your Result: " + flames[0]);
        }
    })

});
