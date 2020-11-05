import * as d3 from 'd3';
import React, { FC, useEffect } from 'react';

interface DonutChartProps {
  data: {
    maleShare: number | null;
  };
}

const DonutChart: FC<DonutChartProps> = (props): JSX.Element => {
  const { data } = props;
  const { maleShare } = data;
  const femaleShare = 100 - maleShare;

  const createDonutChart = () => {
    const genderData = [
      {
        gender: 'male',
        percentage: maleShare
      },
      {
        gender: 'female',
        percentage: femaleShare
      }
    ];

    const width = 200;
    const height = width;

    const svg = d3
      .select('.donut-svg')
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove();

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('font-family', 'sans-serif')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    if (maleShare > femaleShare) {
      svg
        .append('svg:image')
        .attr('xlink:href', '/male-sign.svg')
        .attr('width', 180)
        .attr('height', 180)
        .attr('transform', 'translate(22, 0)');

      svg
        .select('text')
        .text(`${maleShare}%`)
        .attr('fill', 'lightblue')
        .style('font-size', 26);
    } else if (maleShare < femaleShare) {
      svg
        .append('svg:image')
        .attr('xlink:href', '/female-sign.svg')
        .attr('width', 180)
        .attr('height', 180)
        .attr('transform', 'translate(10, 33)');

      svg
        .select('text')
        .text(`${femaleShare}%`)
        .attr('fill', 'lightpink')
        .style('font-size', 26);
    } else {
      svg
        .select('text')
        .text('50%')
        .attr('fill', 'black')
        .style('font-size', 26);
    }

    const oRadius = 55;
    const iRadius = 37;

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3
      .pie<{ gender: string; percentage: number }>()
      .value((d) => d.percentage);

    const path = d3.arc<unknown>().outerRadius(oRadius).innerRadius(iRadius);

    const pies = g
      .selectAll('.arc')
      .data(pie(genderData))
      .enter()
      .append('g')
      .attr('class', 'arc');

    pies
      .append('path')
      .attr('d', path)
      .data(genderData)
      .attr('fill', (d) => {
        let color: string;
        if (d.gender === 'male') {
          color = 'lightblue';
        } else {
          color = 'lightpink';
        }
        return color;
      });
  };

  useEffect(() => {
    if (maleShare != null) {
      createDonutChart();
    }
  });

  return <svg className="donut-svg" />;
};

export default DonutChart;
