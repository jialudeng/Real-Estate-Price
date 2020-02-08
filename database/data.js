/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
const cityPrices = [738700, 748300, 747700, 749000, 745800, 744600, 739100, 741700, 742500, 742000,
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

const neighborhoodPrices = [459900, 463300, 468000, 475300, 476500,
  476700, 474200, 479200, 484000, 484600, 480800, 473900, 470300, 462500, 459400, 454500, 453400, 447200, 448100, 446100, 445600, 441400, 438400, 436400, 434800, 440200, 451700, 462900, 471200, 475500, 481100, 489300, 500100, 508200, 513900, 524000, 541800, 555900, 567200, 574800, 586600, 598900, 610800, 614200, 611300, 605600, 607400, 617400, 628100, 646100, 653200, 660400, 658700, 660100, 661400, 659100, 657400, 661400, 678800, 694800, 705400, 713500, 714400, 718200, 715500, 728900, 750600, 774800,
  801900, 820300, 832800, 841400, 853100, 857500, 852200, 834300, 820500, 805800, 790300, 770700, 747300, 726000, 711900, 702500, 700700, 700400, 696600, 694000, 686100, 688900, 687400, 694300, 698600, 705700, 710800, 714300, 714900, 719900, 729900, 740800, 746400, 751700, 745700, 735000, 723000, 721800, 720500, 720000, 728100, 738600, 744300, 741700, 741700, 737100, 732900, 735000, 740400, 747200, 744200, 753000, 754000, 754000, 755000, 755000, 756000, 757000, 757000, 758000, 760000, 761000, 762000, 764000];

const neighborhood = ['Bernal Heights', 'Castro', 'Hayes Valley', 'Marina', 'Noe Valley'];

const addresses = ['601 Van Ness Ave APT 29, San Francisco, CA 94102',
  '461 Waller St, San Francisco, CA 94117',
  '555 Fulton St #334, San Francisco, CA 94102',
  '380 14th St APT 506, San Francisco, CA 94103',
  '531 Kirkham St, San Francisco, CA 94122'];

function generatePrices() {
  return neighborhoodPrices.map((price) => {
    price += (Math.floor(Math.random() * 500000));
    return price;
  });
}

function generateName(category) {
  const randomIndex = Math.floor(Math.random() * category.length);
  return category[randomIndex];
}

function generateSold(prices) {
  const randomIndex = Math.floor(Math.random() * prices.length);
  return [prices[randomIndex], randomIndex]; // [soldPrice, soldIndex]
}

function addComa(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function generateRange(number) {
  if (number < 1000000) {
    return addComa(parseInt(number / 1000, 10) * 1000);
  } return (parseInt(number / 10000, 10) / 100).toFixed(2) + 'M';
}

const generateGraph = (num) => {
  // eslint-disable-next-line prefer-const
  let array = [];
  for (let i = 0; i < num; i += 1) {
    const oneGraph = {
      graphData: {
        city: {
          name: 'San Francisco',
          price: cityPrices,
        },
        neighborhood: {
          name: generateName(neighborhood),
          price: neighborhoodPrices,
        },
        property: {
          name: generateName(addresses),
          price: generatePrices(),
        },
      },
    };
    oneGraph.id = i;
    const zestimateNum = oneGraph.graphData.property.price[120];
    oneGraph.zestimate = `$${addComa(zestimateNum)}`;
    oneGraph.updateZestimate = `https://www.zillow.com/sellerlanding/edityourhome/${i}`;
    const low = generateRange(zestimateNum - zestimateNum * 0.1);
    const high = generateRange(zestimateNum + zestimateNum * 0.1);
    oneGraph.salesRange = `$${low} - $${high}`;
    oneGraph.graphData.property.sold = generateSold(oneGraph.graphData.property.price);
    array.push(oneGraph);
  }
  return array;
};

module.exports.generateGraph = generateGraph;