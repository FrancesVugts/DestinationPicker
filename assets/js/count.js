var belgium = {score: 0, attributes: ["€0-750", "Combination", "Summer", "Short", "Normal", "Car", "No"]};
var iceland = {score: 0, costs: "€750-1500", surrounding: "Nature", season: "Summer", traveltime: "Short", weather: "Cold", transport: "Plane", culture: "A little"};
var italy = {score: 0, costs: "€750-1500", surrounding: "Combination", season: "Summer", traveltime: "Long", weather: "Hot", transport: "Car", culture: "A little"};
var finland = {score: 0, costs: "€750-1500", surrounding: "Nature", season: "Winter", traveltime: "Medium", weather: "Cold", transport: "Plane", culture: "A little"};
var madagascar = {score: 0, costs: "€1500-2500", surrounding: "Nature", season: "Spring", traveltime: "Long", weather: "Hot", transport: "Plane", culture: "A lot"};
var namibia = {score: 0, costs: "€2500-3500", surrounding: "Nature", season: "Autumn", traveltime: "Long", weather: "Hot", transport: "Plane", culture: "A lot"};

// Used .text() to get the text from the clicked button as suggested by ThiefMaster on the following page: https://stackoverflow.com/questions/10351658/javascript-get-custom-buttons-text-value 
$(".btn").click(function() {
    for (var i = 0; i < belgium.attributes.length; i++) {
        if ($(this).text() == belgium.attributes[i]) {
            belgium.score ++;
        }
    }

    if($(this).text() == iceland.costs || $(this).text() == iceland.surrounding || $(this).text() == iceland.season || $(this).text() == iceland.traveltime || $(this).text() == iceland.weather || $(this).text() == iceland.transport || $(this).text() == iceland.culture) {
        iceland.score ++;
    }
    if($(this).text() == italy.costs || $(this).text() == italy.surrounding || $(this).text() == italy.season || $(this).text() == italy.traveltime || $(this).text() == italy.weather || $(this).text() == italy.transport || $(this).text() == italy.culture) {
        italy.score ++;
    }
    if($(this).text() == finland.costs || $(this).text() == finland.surrounding || $(this).text() == finland.season || $(this).text() == finland.traveltime || $(this).text() == finland.weather || $(this).text() == finland.transport || $(this).text() == finland.culture) {
        finland.score ++;
    }
    if($(this).text() == madagascar.costs || $(this).text() == madagascar.surrounding || $(this).text() == madagascar.season || $(this).text() == madagascar.traveltime || $(this).text() == madagascar.weather || $(this).text() == madagascar.transport || $(this).text() == madagascar.culture) {
        madagascar.score ++;
    }
    if($(this).text() == namibia.costs || $(this).text() == namibia.surrounding || $(this).text() == namibia.season || $(this).text() == namibia.traveltime || $(this).text() == namibia.weather || $(this).text() == namibia.transport || $(this).text() == namibia.culture) {
        namibia.score ++;
    }
});

$(".question7").click(function() {
    if(belgium.score>iceland.score && belgium.score>italy.score && belgium.score>finland.score && belgium.score>madagascar.score && belgium.score>namibia.score) {
        window.location.href = "results/belgium.html";
    } else {
        if(iceland.score>italy.score && iceland.score>finland.score && iceland.score>madagascar.score && iceland.score>namibia.score) {
            window.location.href = "results/iceland.html";
        } else {
            if(italy.score>finland.score && italy.score>madagascar.score && italy.score>namibia.score) {
                window.location.href = "results/italy.html";
            } else {
                if(finland.score>madagascar.score && finland.score>namibia.score) {
                    window.location.href = "results/finland.html";
                } else {
                    if(madagascar.score>namibia.score) {
                        window.location.href = "results/madagascar.html";
                    } else {
                        window.location.href = "results/namibia.html";
                    }
                }
            }
        }
    }
});

$(this).click(function() {
    console.log(belgium.score, iceland.score, italy.score, finland.score, madagascar.score, namibia.score)
});