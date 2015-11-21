!function(a){"use strict";function b(){for(var a=[],b=[],c=[],d=0;100>d;d++)a.push({x:d,y:Math.sin(d/9)}),b.push({x:d,y:.25*Math.sin(d/10)+.5}),c.push({x:d,y:.5*Math.cos(d/10)});return[{values:a,key:"Sine Wave",color:"#5d9cec"},{values:c,key:"Cosine Wave",color:"#fb6d9d"},{values:b,key:"Custom sine",color:"#34d3eb"}]}function c(a,b){var c=[],d=["thin-x","circle","cross","triangle-up","triangle-down","diamond","square"],e=d3.random.normal();for(f=0;a>f;f++)for(c.push({key:"Group "+f,values:[]}),g=0;b>g;g++)c[f].values.push({x:e(),y:e(),size:Math.round(100*Math.random())/100,shape:d[g%d.length]});return c}function d(){return[{label:"One",value:29.765957771107,color:"#5fbeaa"},{label:"Two",value:60,color:"#f05050"},{label:"Three",value:39.69895,color:"#5d9cec"},{label:"Four",value:160.45946739256,color:"#ffbd4a"},{label:"Five",value:89.02525,color:"#81c868"},{label:"Six",value:98.079782601442,color:"#7266ba"},{label:"Seven",value:98.925743130903,color:"#fb6d9d"}]}nv.addGraph(function(){var a=nv.models.lineChart();return a.useInteractiveGuideline(!0),a.xAxis.tickFormat(d3.format(",r")),a.yAxis.axisLabel("Voltage (v)").tickFormat(d3.format(",.2f")),d3.select(".line-chart svg").attr("perserveAspectRatio","xMinYMid").datum(b()).transition().duration(500).call(a),nv.utils.windowResize(a.update),a});var e=[{key:"Cumulative Return",values:[{label:"A Label",value:-29.765957771107,color:"#5fbeaa"},{label:"B Label",value:50,color:"#f05050"},{label:"C Label",value:32.807804682612,color:"#5d9cec"},{label:"D Label",value:196.45946739256,color:"#ffbd4a"},{label:"E Label",value:15.79434030906893,color:"#81c868"},{label:"F Label",value:-98.079782601442,color:"#dcdcdc"},{label:"G Label",value:-13.925743130903,color:"#7266ba"},{label:"H Label",value:-5.1387322875705,color:"#fb6d9d"}]}];nv.addGraph(function(){var a=nv.models.discreteBarChart().x(function(a){return a.label}).y(function(a){return a.value}).staggerLabels(!0).tooltips(!1).showValues(!0).duration(250);return a.yAxis.axisLabel("Price change in USD"),d3.select(".bar-chart svg").datum(e).call(a),nv.utils.windowResize(a.update),a});var f,g;nv.utils.symbolMap.set("thin-x",function(a){return a=Math.sqrt(a),"M"+-a/2+","+-a/2+"l"+a+","+a+"m0,"+-a+"l"+-a+","+a});var h,i=["#5fbeaa","#fb6d9d","#7266ba","#ffbd4a","#81c868","#dcdcdc","#555555	","#fb6d9d","#98a6ad","#5d9cec"];nv.addGraph(function(){return h=nv.models.scatterChart().useVoronoi(!0).color(i).duration(300),h.xAxis.tickFormat(d3.format(".02f")),h.yAxis.axisLabel("Population dynamics").tickFormat(d3.format(".02f")),h.tooltipContent(function(a){return"<p>"+a.series[0].key+"</p>"}),d3.select(".scatter-chart svg").datum(c(4,40)).call(h),nv.utils.windowResize(h.update),h.dispatch.on("stateChange",function(a){JSON.stringify(a)}),h});var j,k=[{key:"Series 1",color:"#5d9cec",values:[{label:"Group A",value:-1.8746444827653},{label:"Group B",value:-8.0961543492239},{label:"Group C",value:-.57072943117674},{label:"Group D",value:-2.4174010336624},{label:"Group E",value:-.72009071426284},{label:"Group F",value:-.77154485523777},{label:"Group G",value:-.90152097798131},{label:"Group H",value:-.91445417330854},{label:"Group I",value:-.055746319141851}]},{key:"Series 2",color:"#34d3eb",values:[{label:"Group A",value:25.307646510375},{label:"Group B",value:16.756779544553},{label:"Group C",value:18.451534877007},{label:"Group D",value:8.6142352811805},{label:"Group E",value:7.8082472075876},{label:"Group F",value:5.259101026956},{label:"Group G",value:.30947953487127},{label:"Group H",value:0},{label:"Group I",value:0}]}];nv.addGraph(function(){return j=nv.models.multiBarHorizontalChart().x(function(a){return a.label}).y(function(a){return a.value}).duration(250),j.yAxis.tickFormat(d3.format(",.2f")),d3.select(".multi-chart svg").datum(k).call(j),nv.utils.windowResize(j.update),j}),nv.addGraph(function(){var a=nv.models.pieChart().x(function(a){return a.label}).y(function(a){return a.value}).showLabels(!0);return d3.select("#chart1 svg").datum(d).transition().duration(1200).call(a),a}),nv.addGraph(function(){var a=nv.models.pieChart().x(function(a){return a.label}).y(function(a){return a.value}).showLabels(!0).labelThreshold(.05).labelType("percent").donut(!0).donutRatio(.35);return d3.select("#chart2 svg").datum(d()).transition().duration(350).call(a),a})}(jQuery);