const pieces = d3.select(".d3");

const svg = pieces
  .append("svg")
  .attr("height", "1080px")
  .attr("width", "1920px");

// const svg2 = svg

// const player = svg2.on("mouseover", function onClick(d) {
//   d3.select(this)
//     .append("image")
//     .attr("id", "image")
//     .attr(
//       "xlink:href",
//       "https://www.freeiconspng.com/uploads/star-wars-png-file-31.png0"
//     )
//     .attr("width", 400)
//     .attr("height", 200)
//     .attr("class", "my-class");
// });

function trans(input) {
  d3.selectAll(input)
    .transition()
    .duration(10000)
    .attr("x", Math.random() * 2300)
    .attr("y", Math.random() * 1140)
    .on("end", function () {
      trans(input);
    });
}

var ship1 = svg
  .append("image")
  .attr(
    "xlink:href",
    "https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/03/starship-enterprise-star-trek-transparent-background-image.png?resize=1024%2C354"
  )
  .attr("width", 200)
  .attr("height", 200)
  .transition()
  .duration(10000)
  .attr("x", Math.random() * 1920)
  .attr("y", Math.random() * 1000)
  .on("end", function () {
    trans(ship1);
  });

var ship2 = svg
  .append("image")
  .attr(
    "xlink:href",
    "https://www.freeiconspng.com/uploads/star-wars-png-file-31.png"
  )
  .attr("width", 200)
  .attr("height", 200)
  .transition()
  .duration(10000)
  .attr("x", Math.random() * 1920)
  .attr("y", Math.random() * 1000)
  .on("end", function () {
    trans(ship2);
  });

var ship3 = svg
  .append("image")
  .attr(
    "xlink:href",
    "https://www.freeiconspng.com/uploads/star-wars-png-photo-27.png"
  )
  .attr("width", 200)
  .attr("height", 200)
  .transition()
  .duration(10000)
  .attr("x", Math.random() * 1920)
  .attr("y", Math.random() * 1000)
  .on("end", function () {
    trans(ship3);
  });

var ship4 = svg
  .append("image")
  .attr(
    "xlink:href",
    "https://www.freeiconspng.com/uploads/download-star-wars-high-resolution-5.png"
  )
  .attr("width", 200)
  .attr("height", 200)
  .transition()
  .duration(10000)
  .attr("x", Math.random() * 1920)
  .attr("y", Math.random() * 1000)
  .on("end", function () {
    trans(ship4);
  });

var ship5 = svg
  .append("image")
  .attr(
    "xlink:href",
    "https://www.pngkit.com/png/full/39-394390_stargate-ship-png-stargate-daedalus-png.png"
  )
  .attr("width", 200)
  .attr("height", 200)
  .transition()
  .duration(10000)
  .attr("x", Math.random() * 1920)
  .attr("y", Math.random() * 1000)
  .on("end", function () {
    trans(ship5);
  });
