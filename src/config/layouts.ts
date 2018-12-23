import atlas2Legend from '../assets/img/layouts/atlas2.png';
import breadthfirstLegend from '../assets/img/layouts/breadthfirst.png';
import circleLegend from '../assets/img/layouts/circle.png';
import colaLegend from '../assets/img/layouts/cola.png';
import concentricLegend from '../assets/img/layouts/concentric.png';
import bilkentLegend from '../assets/img/layouts/cose-bilkent.png';
import dagreLegend from '../assets/img/layouts/dagre.png';
import defaultLegend from '../assets/img/layouts/default.png';
import eulerLegend from '../assets/img/layouts/euler.png';
import gridLegend from '../assets/img/layouts/grid.png';
import klayLegend from '../assets/img/layouts/klay.png';
import ILayout from '../interfaces/Layout';

const layouts: ILayout[] = [
  { name: '通用布局', value: 'default', legend: defaultLegend, desc: '' },
  { name: '分层布局', value: 'dagre', legend: dagreLegend, desc: '' },
  {
    name: '广度优先布局',
    value: 'breadthfirst',
    legend: breadthfirstLegend,
    desc: ''
  },
  { name: '单圆形布局', value: 'circle', legend: circleLegend, desc: '' },
  {
    name: '同轴圆布局',
    value: 'concentric',
    legend: concentricLegend,
    desc: ''
  },
  { name: '网格布局', value: 'grid', legend: gridLegend, desc: '' },
  { name: '聚类布局', value: 'atlas2', legend: atlas2Legend, desc: '' },
  { name: 'cose', value: 'cose-bilkent', legend: bilkentLegend, desc: '' },
  { name: 'cola', value: 'cola', legend: colaLegend, desc: '' },
  { name: 'euler', value: 'euler', legend: eulerLegend, desc: '' },
  { name: 'klay', value: 'klay', legend: klayLegend, desc: '' }
];

export default layouts;
