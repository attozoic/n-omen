import * as d3 from "d3";

const createDonutChart = (gender: string, percentage: number) => {
  let data = [
    {
      gender: "male",
      percentage: gender === "male" ? percentage : 100 - percentage
    },
    {
      gender: "female",
      percentage: gender === "female" ? percentage : 100 - percentage
    }
  ];

  const svg = d3.select(".donut-svg");
  let width = 200;
  let height = width;

  let oRadius = width / 4;
  let iRadius = width / 6.66;

  const g = svg
    .select("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const pie = d3
    .pie<{ gender: string; percentage: number }>()
    .value((data) => data.percentage)
    .sort(null);

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
      if (data.gender === "male") {
        return "lightblue";
      } else {
        return "lightpink";
      }
    });

  d3.select(".gender-icon")
    .attr("height", oRadius * 4)
    .attr("width", oRadius * 4)
    .attr("viewBox", "0 0 600 600");

  if (gender === "male") {
    d3.select(".gender-icon")
      .attr("fill", "lightblue")
      .select("path")
      .attr("transform", "translate(110, -15)");
  } else if (gender === "female") {
    d3.select(".gender-icon")
      .attr("fill", "lightpink")
      .select("path")
      .attr("transform", "translate(45, 125)");
  }
};

export default createDonutChart;
