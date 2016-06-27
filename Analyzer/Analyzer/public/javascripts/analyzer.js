//
// Dagmara Kotecka 2016
// 

$("#findretro").click(function () {
    window.location.href = "/gamestart";
});

$(".cancelBtn").click(function () {
    window.location.href = "/";
});

$('input:radio[name="optradio"]').change(
    function(){
        if ($('input:radio:checked').length === 9) {
            $(".submitBtn").removeAttr("disabled");
        }
    }
);

$(".submitBtn").click(function () {
    var creativity = $("#creativity input:radio:checked").val();
    var collaboration = $("#collaboration input:radio:checked").val();
    var teammood = $("#teammood input:radio:checked").val();
    var communication = $("#communication  input:radio:checked").val();
    var involvement = $("#involvement input:radio:checked").val();
    var honesty = $("#honesty input:radio:checked").val();
    var perspective = $("#perspective input:radio:checked").val();
    var improvement = $("#improvement input:radio:checked").val();
    var entertainment = $("#entertainment input:radio:checked").val();

    
    $.ajax({
        type: "POST",
        url: "/getGame",
        data: "creativity=" + creativity + "&" + 
            "collaboration=" + collaboration + "&" +
            "teammood=" + teammood + "&" +
            "communication=" + communication + "&" +
            "involvement=" + involvement + "&" +
            "honesty=" + honesty + "&" +
            "perspective=" + perspective + "&" +  
            "improvement=" + improvement + "&" +
            "entertainment=" + entertainment,
        success: function (data) {
            if (data !== undefined) {
                $(".container").addClass('hidden');
                if (data.length === 1) {
                    $("div.thankyou").append("<p>Well done! Your retrieved game is: " + data + "! Click the buttons below to get detailed description of the game. Congratulations!</p>")
                    var redirect = data;
                    if (data === "360 degrees of appreciation")
                        redirect = "360";
                    else if (data === "Glad, Mad, Sad")
                        redirect = "gms";
                    else if (data === "Candy-Love")
                        redirect = "candy"
                    else if (data === "Mood & Improvements")
                        redirect = "mood";
                    $("div.thankyou").append("<a href='/" + redirect + "' role='button' class='btn btn-primary'>" + data + "</a>")
                }
                else {
                    var dataContainer = "";
                    for (var i = 0; i < data.length; i++) {
                        dataContainer += data[i];
                        if(i < data.length -1 )
                            dataContainer += ", ";
                        redirect = data[i];
                        if (data[i] === "360 degrees of appreciation")
                            redirect = "360";
                        else if (data[i] === "Glad, Mad, Sad")
                            redirect = "gms";
                        else if (data[i] === "Candy-Love")
                            redirect = "candy"
                        else if (data[i] === "Mood & Improvements")
                            redirect = "mood";
                        $("div.thankyou").append("<a href='/" + redirect + "' role='button' class='mybutton1 btn btn-primary'>" + data[i] + "</a>")
                    }
                    $("div.thankyou").append("<p> Your requirements suit more than one game.  Your retrieved games are: " + dataContainer + "! Click the buttons above to get detailed description of the game. Congratulations!</p>")
                }

            }
        }
    });
});
