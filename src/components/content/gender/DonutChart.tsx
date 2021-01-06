import * as d3 from 'd3';
import React, { FC, useEffect } from 'react';
import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    genderText: {
      [theme.breakpoints.up('xs')]: {
        color: 'white',
        width: 240,
        fontSize: 13,
        marginTop: 5
      },
      [theme.breakpoints.up('sm')]: {
        width: 290,
        fontSize: 15,
        marginTop: 20
      }
    },
    genderContainer: {
      textAlign: 'center'
    }
  })
);

interface DonutChartProps {
  data: {
    maleShare: number | null;
  };
}

const DonutChart: FC<DonutChartProps> = ({
  data: { maleShare }
}): JSX.Element => {
  const classes = useStyles();
  const femaleShare = 100 - maleShare;
  let genderInfo: string;

  if (maleShare > femaleShare) {
    genderInfo = 'This is mostly a male name.';
  } else if (femaleShare > maleShare) {
    genderInfo = 'This is mostly a female name.';
  } else {
    genderInfo = 'This name is equally popular among both genders.';
  }

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

    const width = 140;
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
        .attr('width', width)
        .attr('height', height);

      svg
        .select('text')
        .text(`${maleShare}%`)
        .attr('fill', 'lightblue')
        .style('font-size', 20)
        .attr('transform', `translate(${width / 2 - 10}, ${height / 2 + 9})`);
    } else if (maleShare < femaleShare) {
      svg
        .append('svg:image')
        .attr('xlink:href', '/female-sign.svg')
        .attr('width', width)
        .attr('height', height);

      svg
        .select('text')
        .text(`${femaleShare}%`)
        .attr('fill', 'lightpink')
        .style('font-size', 20)
        .attr('transform', `translate(${width / 2}, ${height / 2 - 20})`);
    } else {
      svg
        .select('text')
        .text('50%')
        .attr('fill', 'black')
        .style('font-size', 26)
        .attr('transform', `translate(${width / 2}, ${height / 2})`);
    }

    const oRadius = 43;
    const iRadius = 28;

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
          translate = 'translate(0, -19)';
        }
        if (maleShare > femaleShare) {
          translate = 'translate(-9, 9)';
        }
        return translate;
      });
  };

  useEffect(() => {
    createDonutChart();
  }, [maleShare]);

  return (
    <div className={classes.genderContainer}>
      <Typography className={classes.genderText}>{genderInfo}</Typography>
      <svg className="donut-svg" />
    </div>
  );
};

export default DonutChart;
