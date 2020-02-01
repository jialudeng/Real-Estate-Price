/* eslint-disable */
import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
  }

  render() {
    return (
      <div>
        <Line
          data={{
            labels: dateArray,
            datasets: [
              {
                label: 'San Francisco Home value',
                data: cityPrices,
                backgroundColor: 'rgb(84, 84, 90)',
                fill: false,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
              },
            ],
          }}
          options={{
            scales: {
              xAxes: [{
                  gridLines: {
                      display:false
                  }
              }],
              yAxes: [{
                  gridLines: {
                      display:false
                  }   
              }]
            },
            title: {
              display: true,
              text: 'Largest Cities In MA',
              fontSize: 25,
            },
            legend: {
              display: false,
              position: 'right',
            },
          }}
        />
      </div>
    );
  }
}


let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

let cityPrices = [738700, 748300, 747700, 749000, 745800, 744600, 739100, 741700, 742500, 742000, 
  734400, 724300, 716800, 709900, 707400, 704300, 699100, 690400, 688000, 687300, 688100, 685800, 
  683500, 684000, 683500, 689100, 696000, 702000, 706700, 712800, 725900, 740200, 754400, 764900, 
  772700, 782300, 798300, 806100, 816600, 826200, 845600, 864200, 878700, 890000, 894400, 896000, 
  900400, 912600, 923800, 946400, 964100, 982100, 988200, 987900, 990300, 982700, 982600, 985100, 
  1005600, 1018000, 1025500, 1038200, 1054800, 1073900, 1079600, 1091900, 1107200, 1122500, 1139900, 
  1155700, 1167100, 1180900, 1198500, 1206400, 1203400, 1190100, 1188700, 1181600, 1166400, 1149900, 
  1147200, 1156100, 1173900, 1181900, 1185300, 1180500, 1179200, 1187900, 1201500, 1216300, 1224600, 
  1234700, 1244500, 1255600, 1267300, 1276400, 1286400, 1299800, 1322900, 1346600, 1357700, 1373500, 
  1373600, 1378700, 1371500, 1375500, 1371200, 1364400, 1364500, 1367700, 1369000, 1369000, 1373200, 
  1376800, 1372700, 1365900, 1360000, 1367700, 1373000, 1387300, 1400000, 1410000, 1410000, 1410000, 
  1420000, 1420000, 1420000, 1430000, 1440000, 1450000, 1450000, 1450000];

let dateArray = years.reduce((array, year) => {
  for (let i = 0; i < months.length; i++) {
    array.push(`${months[i]} ${year}`);
  }
  return array;
}, []);

export default Chart;
