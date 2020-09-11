const pieces = d3.select(".body");

const svg = pieces
  .append("svg")
  .attr("height", "1080px")
  .attr("width", "1920px");

function trans(input) {
  d3.selectAll(input)
    .transition()
    .duration(3000)
    .attr("cx", Math.random() * 790)
    .attr("cy", Math.random() * 790)
    .on("end", function () {
      trans(input);
    });
}

var enemyTemplate = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(3000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790)
  .on("end", function () {
    trans(enemyTemplate);
  });
