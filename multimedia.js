var data = {
    music: [],
    video: [],
    podcast : [],
}

var min = 1450;
var max = 54596;

for (var i = 0; i < 500; i++) {
    var language = "FR"
    if (i%2 !== 0)
    {
        language = "EN"
    }
    data.music.push( {
      titre: Math.random().toString(36).substring(2, 7),
        artiste: Math.random().toString(36).substring(2, 9),
        studio: Math.random().toString(36).substring(2, 9),
        language : language,
        time: Math.round(Math.random() * (max - min) + min),
        dateRelease: 2016- i,
        album: Math.random().toString(36).substring(2, 9),
     }
    )
  }

for (var i = 0; i < data.music.length; i++) {
  console.log(Titre `${data.music[i].titre} / Artiste ${data.music[i].artiste} / Language ${data.music[i].language} / Time : ${data.music[i].time}`)
}