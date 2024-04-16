var data = {
    music: [],
    video: [],
    podcast : []
}

var min = 1450
var max = 54596

for (var i = 0; i < 500; i++){
    var language = "FR"
    if (i%2 !== 0)
    {
        language = "EN"
    }
    data.music.push({
        titre : "Don’t be cruel"+i,
        artiste : "Elvis"+i,
        studio : "Presley rock"+i,
        language : language,
        time : Number, data.time,Math.random() * (max - min),
        dateRelease : String/Date,
        album : String,
    } 
}
/* 
titre : String,
artiste : String,
studio : String,
language : String, FR (pair) ou EN (impair)
time : Number, - 1450 à 54596
dateRelease : String/Date,
album : String */
