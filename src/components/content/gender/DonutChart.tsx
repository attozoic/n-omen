import * as d3 from 'd3';
import React, { FC, useEffect } from 'react';

interface DonutChartProps {
  data: {
    maleShare: number | null;
  };
}

const DonutChart: FC<DonutChartProps> = ({
  data: { maleShare }
}): JSX.Element => {
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

    const width = 180;
    const height = width;

    const svg = d3
      .selectAll('.donut-svg')
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove();

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('font-family', 'sans-serif');

    if (maleShare > femaleShare) {
      svg
        .append('svg:image')
        .attr('xlink:href', '/male-sign.svg')
        .attr('width', 180)
        .attr('height', 180);

      svg
        .select('text')
        .text(`${maleShare}%`)
        .attr('fill', 'lightblue')
        .style('font-size', 26)
        .attr('transform', `translate(${width / 2 - 10}, ${height / 2 + 13})`);
    } else if (maleShare < femaleShare) {
      svg
        .append('svg:image')
        .attr('xlink:href', '/female-sign.svg')
        .attr('width', 180)
        .attr('height', 180);

      svg
        .select('text')
        .text(`${femaleShare}%`)
        .attr('fill', 'lightpink')
        .style('font-size', 26)
        .attr('transform', `translate(${width / 2}, ${height / 2 - 20})`);
    } else {
      svg
        .select('text')
        .text('50%')
        .attr('fill', 'black')
        .style('font-size', 26)
        .attr('transform', `translate(${width / 2}, ${height / 2})`);
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
      })
      .attr('transform', () => {
        let translate = 'translate(0, 0)';
        if (femaleShare > maleShare) {
          translate = 'translate(0, -20)';
        }
        if (maleShare > femaleShare) {
          translate = 'translate(-10, 13)';
        }
        return translate;
      });
  };

  useEffect(() => {
    createDonutChart();
  }, [maleShare]);

  return <svg className="donut-svg" />;
};

export default DonutChart;
