var data;
var color;
var colorBar;



function setup() {
  // var cnv = createCanvas(800, 700);
  var jsonPath =
    "https://gist.githubusercontent.com/jjdelc/1868136/raw/c9160b1e60bd8c10c03dbd1a61b704a8e977c46b/crayola.json";
  loadJSON(jsonPath, dataIn);

  noCanvas();
  noLoop();



  // $(".color").each(function() {
  //   $(this).click(function() {
  //     color = $(this).css('background-color');
  //     console.log(color);
  //     $('#current-color').css("background-color", color);
  //     $('#color-name').css("color", color);
  //     $('#color-name').text(data[i].name);
  //   });
  // });


  // color = colorId;

}

function dataIn(jsonData) {
  console.log("got it");
  data = jsonData;

  // console.log(data);



  var colorList = document.createElement('div');
  colorList.id = "color-list";
  var body = $('body');
  colorBar = document.createElement('div');
  colorBar.id = "color-bar";
  $(body).append(colorBar);
  $(body).append(colorList);

  for (var i = 0; i < 60; i++) {
    for (var b = 0; b < 100; b++) {

      var number = 1 + Math.floor(Math.random() * 100);
      var colorEntry = document.createElement('p');
      colorEntry.id = "color-" + i + b;
      colorEntry.className = "color";
      // $(colorEntry).text(data[i].name);
      $(colorEntry).css("background-color", data[number].hex);

      // console.log(i);
      $(colorList).append(colorEntry);

      var hoverBox = document.createElement('div');
      hoverBox.className = "hovered";
      $(hoverBox).text("Name: " + data[number].name + "  //  Hex: " +
        data[number].hex + "  //  RGB: " + data[number].rgb);
      $(colorEntry).css("color", data[number].hex);
      $(colorEntry).append(hoverBox);


    }

  }

  $(".color").each(function() {
    $(this).mouseenter(function() {
      color = $(this).css('background-color');
      // console.log(color);
      var thisId = this.id;
      thisId = thisId.slice(6);
      // console.log(thisId);
      $('#current-color').css("background-color", color);
      $(colorBar).css("background-color", color);
      $('#color-name').css("color", color);
      // $('#color-name').text(data[thisId].name);
    });



  });

}

// var bytes = '{"name":"terricka", "counter":0}';
// var data = JSON.parse(bytes);



function draw() {
  // background(80, 174, 207);
  // console.log(data.name);
  // console.log(data.counter);
  // data.counter += 1;



}
