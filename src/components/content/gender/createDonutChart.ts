import * as d3 from "d3";

const createDonutChart = (maleShare: number, femaleShare: number) => {
  let data = [
    {
      gender: "male",
      percentage: maleShare
    },
    {
      gender: "female",
      percentage: femaleShare
    }
  ];

  let width = 200;
  let height = width;

  const svg = d3
    .select(".donut-svg")
    .attr("width", width)
    .attr("height", height);

  svg.selectAll("*").remove();

  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .attr("font-family", "sans-serif")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  if (maleShare > femaleShare) {
    svg
      .append("svg:image")
      .attr("xlink:href", "/male-sign.svg")
      .attr("width", 180)
      .attr("height", 180)
      .attr("transform", "translate(22, 0)");

    svg
      .select("text")
      .text(maleShare + "%")
      .attr("fill", "lightblue")
      .style("font-size", 26);
  } else if (maleShare < femaleShare) {
    svg
      .append("svg:image")
      .attr("xlink:href", "/female-sign.svg")
      .attr("width", 180)
      .attr("height", 180)
      .attr("transform", "translate(10, 33)");

    svg
      .select("text")
      .text(femaleShare + "%")
      .attr("fill", "lightpink")
      .style("font-size", 26);
  } else {
    svg.select("text").text("50%").attr("fill", "black").style("font-size", 26);
  }

  let oRadius = 55;
  let iRadius = 37;

  const g = svg
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const pie = d3
    .pie<{ gender: string; percentage: number }>()
    .value((data) => data.percentage);

  const path = d3.arc<any>().outerRadius(oRadius).innerRadius(iRadius);

  const pies = g
    .selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  pies
    .append("path")
    .attr("d", path)
    .data(data)
    .attr("fill", (data) => {
      let color: string;
      if (data.gender === "male") {
        color = "lightblue";
      } else {
        color = "lightpink";
      }
      return color;
    });
};

export default createDonutChart;
