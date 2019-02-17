// JavaScript Document
var listOfLocalities = [];
var listOfData =[
				"CO2 Emission",
				"Coal","Coal Consumption","Coal Production",
				"Petroleum","Petroleum Consumption","Petroleum Production",
				"Renewable Biofuels","Renewable Biofuels Consumption","Renewable Biofuels Production",
				"Renewable Electricity","Renewable Electricity Consumption","Renewable Electricity Production",
				"Total Electricity","Total Electricity Consumption","Total Electricity Generation",
				"Total Primary Energy","Total Primary Energy Consumption","Total Primary Energy Production"
				];
var energyType =[
    "CO2 Emission","Coal Consumption","Coal Production","Petroleum Consumption","Petroleum Production",
    "Renewable Biofuels Consumption","Renewable Biofuels Production","Renewable Electricity Consumption","Renewable Electricity Production",
    "Total Electricity Consumption","Total Electricity Generation", "Total Primary Energy Consumption","Total Primary Energy Production"
];
				
var localities = [];
var co2Emission =[];
var coalConsumption =[];				
var coalProduction =[];
var petroConsumption =[];
var petroProduction =[];
var bioConsumption =[];
var bioProduction =[];
var reEleConsumption =[];
var reEleProduction =[];
var totalEleConsumption =[];				
var totalElecGeneration =[];
var totalEnergyConsumption =[];
var totalEnergyProduction =[];
var counter=0;

var dateArray=[ new Date(1980, 1, 1),new Date(1981, 1, 1),
				new Date(1982, 1, 1), new Date(1983, 1, 1),new Date(1984, 1, 1), new Date(1985, 1, 1),
		    	new Date(1986, 1, 1), new Date(1987, 1, 1),new Date(1988, 1, 1), new Date(1989, 1, 1),
				new Date(1990, 1, 1), new Date(1991, 1, 1),new Date(1992, 1, 1), new Date(1993, 1, 1),
				new Date(1994, 1, 1), new Date(1995, 1, 1),new Date(1996, 1, 1), new Date(1997, 1, 1),
				new Date(1998, 1, 1), new Date(1999, 1, 1),new Date(2000, 1, 1), new Date(2001, 1, 1),
				new Date(2002, 1, 1), new Date(2003, 1, 1),new Date(2004, 1, 1), new Date(2005, 1, 1),
				new Date(2006, 1, 1), new Date(2007, 1, 1),new Date(2008, 1, 1), new Date(2009, 1, 1),
				new Date(2010, 1, 1), new Date(2011, 1, 1),new Date(2012, 1, 1)
								 ];

var myDafaultDef=new $.Deferred();	  
var myDeferredCo2=new $.Deferred();
var myDeferredCoalCon=new $.Deferred(); 
var myDeferredCoalProd=new $.Deferred(); 
var myDeferredPetroCon=new $.Deferred(); 
var myDeferredPetroProd=new $.Deferred(); 
var myDeferredBioCon=new $.Deferred(); 
var myDeferredBioProd=new $.Deferred(); 
var myDeferredReElectCon=new $.Deferred(); 
var myDeferredReElecProd=new $.Deferred(); 
var myDeferredTotaElecProd=new $.Deferred(); 
var myDeferredElecTotalCon=new $.Deferred(); 
var myDeferredTotaEngProd=new $.Deferred(); 
var myDeferredTotalEngCon=new $.Deferred();

var promiseDefault,promiseCo2,promiseCoalCon,promiseCoalProd,promisePetroCon,promisePetroProd,promiseBioCon,promiseBioProd
      ,promiseReElectCon,promiseReElecProd,promiseTotaElecProd,promisElecTotalCon,promiseTotaEngProd,promiseTotalEngCon;

	  
promiseDefault=myDafaultDef.promise();
promiseCo2=myDeferredCo2.promise();
promiseCoalCon=myDeferredCoalCon.promise();
promiseCoalProd=myDeferredCoalProd.promise();	
promisePetroCon=myDeferredPetroCon.promise();
promisePetroProd=myDeferredPetroProd.promise();
promiseBioCon=myDeferredBioCon.promise();
promiseBioProd=myDeferredBioProd.promise();
promiseReElectCon=myDeferredReElectCon.promise();
promiseReElecProd=myDeferredReElecProd.promise();
promisElecTotalCon=myDeferredElecTotalCon.promise();
promiseTotaElecProd=myDeferredTotaElecProd.promise();
promiseTotalEngCon=myDeferredTotalEngCon.promise();
promiseTotaEngProd=myDeferredTotaEngProd.promise();

var countryflag = false;
var defaultFlag = false;
const noOfFilesToRead = 13;
 


function fetchCountries(dataRows) {

    for (var rowNumber = 0; rowNumber < dataRows.length; rowNumber++) {
        var record = dataRows[rowNumber];
        // Skipping some countries as we do not have data for all parameters
        /*if (record.Locality == 'Kosovo' || record.Locality == 'Germany (Offshore)' || 
            record.Locality == 'Netherlands (Offshore)' || record.Locality == 'United Kingdom (Offshore)') 
        	{ break; } */
        // add the current locality to an index and intialze object to hold data 
        localities[record.Locality] = {};
		co2Emission[record.Locality] = {};
 		coalConsumption[record.Locality] = {};				
		coalProduction[record.Locality] = {};
 		petroConsumption[record.Locality] = {};
 		petroProduction[record.Locality] = {};
 		bioConsumption[record.Locality] = {};
 		bioProduction[record.Locality] = {};
 		reEleConsumption[record.Locality] = {};
 		reEleProduction[record.Locality] = {};
 		totalEleConsumption[record.Locality] = {};				
 		totalElecGeneration[record.Locality] = {};
 		totalEnergyConsumption[record.Locality] = {};
 		totalEnergyProduction[record.Locality] = {};

        listOfLocalities.push(record.Locality);
    }
	
	listOfLocalities.sort();
}

function fetchData(dataCategory,dataRows) {
    // loop through all the rows in file
	console.log(" Reading file object for : "+ dataCategory ); 
    for (var rowNumber = 0; rowNumber < dataRows.length; rowNumber++) {
        var record = dataRows[rowNumber];
        // make an object to store data for the current locality
        var locality = {
            name: record.Locality,
            data: []
        }

        // loop through all years, from 1980 to 2012 for specific locality
        for (var year = 1980; year <= 2012; year++) {
            var value = record[year];

            // deal with missing data points
            if (value === '--') {
                value = 0;
            } else if (value === 'NA') {
                value = 0;
            } else if (value === '(s)') {
                value = 0;
            } else if (value === 'W') {
                value = 0;
            } else if (value === undefined || value === null) {
				 value = 0;
			}

            // add data
            locality.data.push(value);
        }



        // add the current locality to an index
        if (listOfLocalities.indexOf(locality.name) > -1) { //Valide country is in the array!
            switch (dataCategory) {
                case "CO2 Emission":
                    co2Emission[locality.name].data = locality.data;
					myDeferredCo2.resolve();
					
					break;
                case "Coal Consumption":
                    coalConsumption[locality.name].data = locality.data;
					myDeferredCoalCon.resolve();
					
					break;
                case "Coal Production":
                    coalProduction[locality.name].data = locality.data;	
					myDeferredCoalProd.resolve();
							
					break;
                case "Petroleum Consumption":
                    petroConsumption[locality.name].data = locality.data;
					myDeferredPetroCon.resolve();
					
					break;
                case "Petroleum Production":
                    petroProduction[locality.name].data= locality.data;
					myDeferredPetroProd.resolve();
					
					break;
                case "Renewable Biofuels Consumption":
                    bioConsumption[locality.name].data = locality.data;
					myDeferredBioCon.resolve();
					
					break;
                case "Renewable Biofuels Production":
                    bioProduction[locality.name].data = locality.data;
					myDeferredBioProd.resolve();
					
					break;
                case "Renewable Electricity Consumption":
                    reEleConsumption[locality.name].data = locality.data;
					myDeferredReElectCon.resolve();
					
					break;
                case "Renewable Electricity Production":
                    reEleProduction[locality.name].data = locality.data;
					myDeferredReElecProd.resolve();
					
					break;
                case "Total Electricity Consumption":
                    totalEleConsumption[locality.name].data = locality.data;
					myDeferredElecTotalCon.resolve();
					
					break;
                case "Total Electricity Generation":
                    totalElecGeneration[locality.name].data = locality.data;
					myDeferredTotaElecProd.resolve();
					
					
					break;
                case "Total Primary Energy Consumption":
                    totalEnergyConsumption[locality.name].data = locality.data;
					myDeferredTotalEngCon.resolve();
					
					break;
                case "Total Primary Energy Production":
                    totalEnergyProduction[locality.name].data = locality.data;
					myDeferredTotaEngProd.resolve();
					
					break;

            }
        }
    }

    console.log("Gotcha: "+ dataCategory+" :"+ localities[locality.name] ); 
	
		
};

function populateSelectionWidget() {
    // ordering countries in alphabatical order


    // populate selection list
    d3.select('#selectionWidgetCountryLeft1').selectAll('option').data(listOfLocalities).enter().append('option')
        .html(function(d) {
            return d;
        })
        .attr('value', function(d) {
            return d;
        });
		
	d3.select('#selectionWidgetCountryLeft2').selectAll('option').data(listOfLocalities).enter().append('option')
        .html(function(d) {
            return d;
        })
        .attr('value', function(d) {
            return d;
        });	
		
	d3.select('#selectionWidgetDataLeft').selectAll('option').data(listOfData).enter().append('option')
        .html(function(d) {
            return d;
        })
        .attr('value', function(d) {
            return d;
        });	

		
	d3.select('#xAxis').selectAll('option').data(energyType).enter().append('option')
        .html(function(d) {
            return d;
        })
        .attr('value', function(d) {
            return d;
        });
		
	d3.select('#yAxis').selectAll('option').data(energyType).enter().append('option')
        .html(function(d) {
            return d;
        })
        .attr('value', function(d) {
            return d;
        });	
	
	d3.select('#zAxis').selectAll('option').data(energyType).enter().append('option')
        .html(function(d) {
            return d;
        })
        .attr('value', function(d) {
            return d;
        });
		
	d3.select('#timeScale').selectAll('option').data(dateArray).enter().append('option')
        .html(function(d) {
            return 1900+d.getYear();
        })
        .attr('value', function(d) {
            return 1900+d.getYear();
        });

    myDafaultDef.resolve();


}


function returnDataCategory(localityName,categoryName)
{
	switch (categoryName) {
                case "CO2 Emission":
                    return co2Emission[localityName].data;
                case "Coal Consumption":
                    return coalConsumption[localityName].data;				
                case "Coal Production":
                    return coalProduction[localityName].data;
                case "Petroleum Consumption":
                    return petroConsumption[localityName].data;
                case "Petroleum Production":
                    return petroProduction[localityName].data;
                case "Renewable Biofuels Consumption":
                    return bioConsumption[localityName].data;
                case "Renewable Biofuels Production":
                    return bioProduction[localityName].data;
                case "Renewable Electricity Consumption":
                    return reEleConsumption[localityName].data;
                case "Renewable Electricity Production":
                    return reEleProduction[localityName].data;
                case "Total Electricity Consumption":
                    return totalEleConsumption[localityName].data;				
                case "Total Electricity Generation":
                    return totalElecGeneration[localityName].data;
                case "Total Primary Energy Consumption":
                    return totalEnergyConsumption[localityName].data;
                case "Total Primary Energy Production":
                    return totalEnergyProduction[localityName].data;

            }
	
}


function getYlabel(categoryName)
{
	switch (categoryName) {
                case "CO2 Emission":
                    return "CO2 emissions(metric tons per capita)";
                case "Coal Consumption":
                    return "Coal(million short tons)";			
                case "Coal Production":
                    return "Coal(million short tons)";
                case "Petroleum Consumption":
                    return "Petroleum(thousand barrels per day)";
                case "Petroleum Production":
                     return "Petroleum(thousand barrels per day)";
                case "Renewable Biofuels Consumption":
                    return "Renewable biofuels(thousand barrels per day)";
                case "Renewable Biofuels Production":
                    return "Renewable biofuels(thousand barrels per day)";
                case "Renewable Electricity Consumption":
                    return "Renewable electricity(billion Kilowatt-hours)";
                case "Renewable Electricity Production":
                    return "Renewable electricity(billion Kilowatt-hours)";
                case "Total Electricity Consumption":
                    return "Total electricity(billion Kilowatt-hours)";			
                case "Total Electricity Generation":
                    return "Total electricity(billion Kilowatt-hours)";
                case "Total Primary Energy Consumption":
                    return "Total primary energy(quadrillion BTU)";
                case "Total Primary Energy Production":
                    return "Total primary energy(quadrillion BTU)";

            }
	
}

function drawBarChart(localityName,categoryName) {
   
    /* BEFORE DATA */
    // chart size 
	var outerWidth = 800;
    var outerHeight = 400;
	var margin = { left: 90, top: 30, right: 30, bottom: 40 };
	var innerWidth  = outerWidth  - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top  - margin.bottom;	
	var innerHeightOffset = innerHeight+1;
	
	var xAxisLabelText = "Time (years)";
    var xAxisLabelOffset = 30;

    var yAxisLabelText = getYlabel(categoryName);
    var yAxisLabelOffset = 40;
 

    // Select SVG element on the DOM
    var SVG = d3.select("#main").attr("width",outerWidth).attr("height",outerHeight);
	// Remove previous line charts
	SVG.selectAll("g").remove();
	//  Bar chart group
	var group=SVG.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	//  xAxis Group
	var xAxisG=group.append("g").attr('class', 'axis').attr('transform', "translate(0," + innerHeightOffset + ")");
	// yAxis Group
	var yAxisG= group.append("g").attr('class', 'axis').attr('transform', 'translate(-2,0)');
	 
	var xAxisLabel = xAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("x", innerWidth/2)
        .attr("y", xAxisLabelOffset)
        .attr("class", "label")
        .text(xAxisLabelText);
		
	var yAxisLabel = yAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("transform", "translate(-" + yAxisLabelOffset + "," + (innerHeight / 2) + ") rotate(-90)")
        .attr("class", "label")
        .text(yAxisLabelText);
		

    // create axis scale: Pixel Space
	var xScale = d3.time.scale().range([0, innerWidth]);
	// this is scale is to compute bar width as range band do not work with time scale
	var xOrdinalScale =d3.scale.ordinal().rangeBands([0, innerWidth], 0.4, 0);
    var yScale = d3.scale.linear().range([innerHeight, 0]);  
	
	
	
	// define x and y axis
    var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
    var yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(d3.format("s"))
        .outerTickSize(0);     
	
	
	 // get energy production for selected locality

    d3.select("#label").html("Visualization of "+localityName+" vs " +categoryName);
    
	/* AFTER DATA */
	
	// get Data
	var data = returnDataCategory(localityName,categoryName);
	        
	// defin axis domain scale: Data Space	
    xScale.domain([new Date(1980, 1, 1), new Date(2012, 1, 1)]);
	xOrdinalScale.domain(d3.map(dateArray, function(d) { return dateArray; }))
	yScale.domain([d3.min(data), d3.max(data)]).nice();  
	
	
    xAxisG.call(xAxis);
	yAxisG.call(yAxis);
 	
    // Bind Data
	var bars= group.selectAll("rect").data(data);
	
	var myClass = "bar1";
    if ( categoryName.toLowerCase().indexOf("consumption") >= 0) { 
	myClass="bar1";
	} else {
		myClass="bar2";
		} 
	
	// Enter
	bars.enter().append('rect')
	            .attr("class", myClass);
   

    // figure out the width of individual bars
    var barWidth = innerWidth / (2012 - 1980 + 1);

	// Update
    bars.attr("x", function(d, i) {  return i*barWidth})
        .attr("y", function(d, i) {  return yScale(d);})
        .attr("width", barWidth)
        .attr("height", function(d) { return innerHeight - yScale(d); });
        
    // Exit
    bars.exit().remove();
	console.log("data:"+ data);


}


function mdrawBarChart(localityName,categoryName,categoryName1,categoryName2) {
   
    var xColumn = "year";
      var yColumn = "value";
      var colorColumn = "energyType";
      var layerColumn = colorColumn;
   
    /* BEFORE DATA */
    // chart size 
	var outerWidth = 800;
    var outerHeight = 400;
	var margin = { left: 90, top: 30, right: 30, bottom: 40 };
	var innerWidth  = outerWidth  - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top  - margin.bottom;	
	var innerHeightOffset = innerHeight+1;
	
	var xAxisLabelText = "Time (years)";
    var xAxisLabelOffset = 30;

    var yAxisLabelText = getYlabel(categoryName1);
    var yAxisLabelOffset = 40;
 

    // Select SVG element on the DOM
    var SVG = d3.select("#main").attr("width",outerWidth).attr("height",outerHeight);
	// Remove previous line charts
	SVG.selectAll("g").remove();
	//  Bar chart group
	var group=SVG.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	//  xAxis Group
	var xAxisG=group.append("g").attr('class', 'axis').attr('transform', "translate(0," + innerHeightOffset + ")");
	// yAxis Group
	var yAxisG= group.append("g").attr('class', 'axis').attr('transform', 'translate(-2,0)');
	
	var colorLegendG = SVG.append("g")
        .attr("class", "color-legend")
        .attr("transform", "translate(600, 10)");
	
	 
	var xAxisLabel = xAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("x", innerWidth/2)
        .attr("y", xAxisLabelOffset)
        .attr("class", "label")
        .text(xAxisLabelText);
		
	var yAxisLabel = yAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("transform", "translate(-" + yAxisLabelOffset + "," + (innerHeight / 2) + ") rotate(-90)")
        .attr("class", "label")
        .text(yAxisLabelText);
		

    // create axis scale: Pixel Space
	var xScale = d3.time.scale().range([0, innerWidth]);
    var yScale = d3.scale.linear().range([innerHeight, 0]); 
	var colorScale = d3.scale.category10(); 
	
	// define x and y axis
    var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
    var yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(d3.format("s"))
        .outerTickSize(0);  
	var colorLegend = d3.legend.color()
        .scale(colorScale)
        .shapePadding(4)
        .shapeWidth(10)
        .shapeHeight(10)
        .labelOffset(4)
		
	
	 // get energy production for selected locality
    d3.select("#label").html("Visualization of "+localityName +" Vs "+ categoryName);
    
	/* AFTER DATA */
	
	// get Data
	
	var data1 = returnDataCategory(localityName,categoryName1);
	var data2 = returnDataCategory(localityName,categoryName2);
	
	var myArrayOfObjects = [];
    
	 for (var rowNumber = 0; rowNumber < data1.length; rowNumber++) {
			 // make an object to store myArrayOfObjects
            var point = {
				        year: dateArray[rowNumber],  // date array global
            			value: data1[rowNumber],
						energyType:categoryName1
            			}
						
			myArrayOfObjects.push(point);	
		 }
	for (var rowNumber = 0; rowNumber < data2.length; rowNumber++) {
			 // make an object to store myArrayOfObjects
            var point = {
				        year: dateArray[rowNumber],  // date array global
            			value: data2[rowNumber],
						energyType:categoryName2
            			}
						
			myArrayOfObjects.push(point);	
		 }	 
		 
	var nested = d3.nest()
          .key(function (d){ return d[layerColumn]; })
          .entries(myArrayOfObjects)

   var stack = d3.layout.stack()
          .y(function (d){ return d[yColumn]; })
          .values(function (d){ return d.values; });

    var layers = stack(nested);	 
	        
	// defin axis domain scale: Data Space	
    xScale.domain([new Date(1980, 1, 1), new Date(2012, 1, 1)]);
	yScale.domain([
          d3.min(layers, function (layer){
            return d3.min(layer.values, function (d){
              return d.y;
            });
          })
		  ,
          d3.max(layers, function (layer){
            return d3.max(layer.values, function (d){
              return d.y;
            });
          })
        ]).nice();

    colorScale.domain(layers.map(function (layer){
          return layer.key;
        })); 
	
	
	
	xAxisG.call(xAxis);
	yAxisG.call(yAxis);
	
	var layers = group.selectAll(".layer").data(layers);
        layers.enter().append("g").attr("class", "layer");
        layers.exit().remove();
        layers.style("fill", function (d){
          return colorScale(d.key);
        });

	
	// figure out the width of individual bars
    var barWidth = innerWidth/(2012 - 1980 + 1);
		barWidth = barWidth/colorScale.domain().length;
		barWidth= barWidth-2;
		
	var bars = layers.selectAll("rect").data(function (d){ return d.values; });
        
    bars.enter().append("rect")
    
	bars
          .attr("x", function (d, i, j){
            return xScale(d[xColumn]) + barWidth * j;
          })
          .attr("y", function (d){ return yScale(d.y); })
          .attr("width", barWidth)
          .attr("height", function (d){ return innerHeight - yScale(d.y); })
	colorLegendG.call(colorLegend);
    bars.exit().remove();

}




function m2drawLineChart(localityName1,localityName2,categoryName) {
    

    /* BEFORE DATA */
	var outerWidth = 800;
    var outerHeight = 400;
	var margin = { left: 90, top: 30, right: 30, bottom: 40 };
	var innerWidth  = outerWidth  - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top  - margin.bottom;	
	var innerHeightOffset = innerHeight+1;
 	var xAxisLabelText = "Time (years)";
    var xAxisLabelOffset = 30;
    var yAxisLabelText = getYlabel(categoryName);
    var yAxisLabelOffset = 40;

    // Select SVG element on the DOM
    var SVG = d3.select("#main").attr("width",outerWidth).attr("height",outerHeight);
	// Remove previous line charts
	SVG.selectAll("g").remove();
	//  Line chart group
	var group=SVG.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	// Line group
	var path1=group.append("path");
	var path2=group.append("path");
	
	var xAxisG=group.append("g").attr('class', 'axis').attr('transform', "translate(0," + innerHeightOffset + ")");
	// yAxis Group
	var yAxisG= group.append("g").attr('class', 'axis').attr('transform', 'translate(-2,0)');
	//Legend Group
	var colorLegendG = SVG.append("g")
        .attr("class", "color-legend")
        .attr("transform", "translate(600, 10)");
	
	var xAxisLabel = xAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("x", innerWidth/2)
        .attr("y", xAxisLabelOffset)
        .attr("class", "label")
        .text(xAxisLabelText);
		
	var yAxisLabel = yAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("transform", "translate(-" + yAxisLabelOffset + "," + (innerHeight / 2) + ") rotate(-90)")
        .attr("class", "label")
        .text(yAxisLabelText);
	

    // create axis scale: Pixel Space
	var xScale = d3.time.scale().range([0, innerWidth]);
    var yScale = d3.scale.linear().range([innerHeight, 0]);  
	var colorScale = d3.scale.category10();
	
	// define x and y axis
    var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
    var yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(d3.format("s"))
        .outerTickSize(0);
	var colorLegend = d3.legend.color()
        .scale(colorScale)
        .shapePadding(4)
        .shapeWidth(10)
        .shapeHeight(10)
        .labelOffset(4)     
	
	var myLineFunction = d3.svg.line()
        			.x(function(d) { return xScale(d.xColumn); })				
        			.y(function(d) { return yScale(d.yColumn); });
	
	
	 // get energy production for selected locality
    d3.select("#label").html("Visualization of " +localityName1+" Vs "+localityName2+" for "+categoryName);
	
	/* AFTER DATA */
	var data1 = returnDataCategory(localityName1,categoryName);
	var myArrayOfObjects1 = [];
    
	 for (var rowNumber = 0; rowNumber < data1.length; rowNumber++) {
			 // make an object to store myArrayOfObjects
            var point = {
				        xColumn: dateArray[rowNumber],  // date array global
            			yColumn: data1[rowNumber]
            			}
						
			myArrayOfObjects1.push(point);	
		 }
	        
			
   
   var data2 = returnDataCategory(localityName2,categoryName);
   var myArrayOfObjects2 = [];
    
	 for (var rowNumber = 0; rowNumber < data2.length; rowNumber++) {
			 // make an object to store myArrayOfObjects
            var point = {
				        xColumn: dateArray[rowNumber],  // date array global
            			yColumn: data2[rowNumber]
            			}
						
			myArrayOfObjects2.push(point);	
		 }		
	
	var minVal,maxVal;
	if (d3.min(data1)<d3.min(data2)) { minVal=d3.min(data1);}
	else{minVal=d3.min(data2);}
	
	if (d3.max(data1)>d3.max(data2)) { maxVal=d3.max(data1);}
	else{maxVal=d3.max(data2);}
	
	xScale.domain(d3.extent(myArrayOfObjects1, function (d){ return d.xColumn; }));
    yScale.domain([minVal,maxVal]).nice();
	colorScale.domain([localityName1,localityName2]);
	
	
    xAxisG.call(xAxis);
	yAxisG.call(yAxis);
	colorLegendG.call(colorLegend);

	path1.attr("d", myLineFunction(myArrayOfObjects1))
	    .attr("class", "line1"); 
		
	path2.attr("d", myLineFunction(myArrayOfObjects2))
	    .attr("class", "line2"); 


}



function m2drawBarChart(localityName1,localityName2,categoryName) {
   
      var xColumn = "year";
      var yColumn = "value";
      var colorColumn = "country";
      var layerColumn = colorColumn;
   
    /* BEFORE DATA */
    // chart size 
	var outerWidth = 800;
    var outerHeight = 400;
	var margin = { left: 90, top: 30, right: 30, bottom: 40 };
	var innerWidth  = outerWidth  - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top  - margin.bottom;	
	var innerHeightOffset = innerHeight+1;
	
	var xAxisLabelText = "Time (years)";
    var xAxisLabelOffset = 30;

    var yAxisLabelText = getYlabel(categoryName);
    var yAxisLabelOffset = 40;
 

    // Select SVG element on the DOM
    var SVG = d3.select("#main").attr("width",outerWidth).attr("height",outerHeight);
	// Remove previous line charts
	SVG.selectAll("g").remove();
	//  Bar chart group
	var group=SVG.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	//  xAxis Group
	var xAxisG=group.append("g").attr('class', 'axis').attr('transform', "translate(0," + innerHeightOffset + ")");
	// yAxis Group
	var yAxisG= group.append("g").attr('class', 'axis').attr('transform', 'translate(-2,0)');
	
	var colorLegendG = SVG.append("g")
        .attr("class", "color-legend")
        .attr("transform", "translate(600, 10)");
	
	 
	var xAxisLabel = xAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("x", innerWidth/2)
        .attr("y", xAxisLabelOffset)
        .attr("class", "label")
        .text(xAxisLabelText);
		
	var yAxisLabel = yAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("transform", "translate(-" + yAxisLabelOffset + "," + (innerHeight / 2) + ") rotate(-90)")
        .attr("class", "label")
        .text(yAxisLabelText);
		

    // create axis scale: Pixel Space
	var xScale = d3.time.scale().range([0, innerWidth]);
    var yScale = d3.scale.linear().range([innerHeight, 0]); 
	var colorScale = d3.scale.category10(); 
	
	// define x and y axis
    var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
    var yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(d3.format("s"))
        .outerTickSize(0);  
	var colorLegend = d3.legend.color()
        .scale(colorScale)
        .shapePadding(4)
        .shapeWidth(10)
        .shapeHeight(10)
        .labelOffset(4)
		
	
	 // get energy production for selected locality
    d3.select("#label").html("Visualization of "+localityName1+" Vs "+ localityName2+" for "+ categoryName);
    
	/* AFTER DATA */
	
	// get Data
	
	var data1 = returnDataCategory(localityName1,categoryName);
	var data2 = returnDataCategory(localityName2,categoryName);
	
	var myArrayOfObjects = [];
    
	 for (var rowNumber = 0; rowNumber < data1.length; rowNumber++) {
			 // make an object to store myArrayOfObjects
            var point = {
				        year: dateArray[rowNumber],  // date array global
            			value: data1[rowNumber],
						country:localityName1
            			}
						
			myArrayOfObjects.push(point);	
		 }
	for (var rowNumber = 0; rowNumber < data2.length; rowNumber++) {
			 // make an object to store myArrayOfObjects
            var point = {
				        year: dateArray[rowNumber],  // date array global
            			value: data2[rowNumber],
						country:localityName2
            			}
						
			myArrayOfObjects.push(point);	
		 }	 
		 
	var nested = d3.nest()
          .key(function (d){ return d[layerColumn]; })
          .entries(myArrayOfObjects)

   var stack = d3.layout.stack()
          .y(function (d){ return d[yColumn]; })
          .values(function (d){ return d.values; });

    var layers = stack(nested);	 
	        
	// defin axis domain scale: Data Space	
    xScale.domain([new Date(1980, 1, 1), new Date(2012, 1, 1)]);
	yScale.domain([
          d3.min(layers, function (layer){
            return d3.min(layer.values, function (d){
              return d.y;
            });
          })
		  ,
          d3.max(layers, function (layer){
            return d3.max(layer.values, function (d){
              return d.y;
            });
          })
        ]).nice();

    colorScale.domain(layers.map(function (layer){
          return layer.key;
        })); 
	
	
	
	xAxisG.call(xAxis);
	yAxisG.call(yAxis);
	
	var layers = group.selectAll(".layer").data(layers);
        layers.enter().append("g").attr("class", "layer");
        layers.exit().remove();
        layers.style("fill", function (d){
          return colorScale(d.key);
        });

	
	// figure out the width of individual bars
    var barWidth = innerWidth/(2012 - 1980 + 1);
		barWidth = barWidth/colorScale.domain().length;
		barWidth= barWidth-2;
		
	var bars = layers.selectAll("rect").data(function (d){ return d.values; });
        
    bars.enter().append("rect")
    
	bars
          .attr("x", function (d, i, j){
            return xScale(d[xColumn]) + barWidth * j;
          })
          .attr("y", function (d){ return yScale(d.y); })
          .attr("width", barWidth)
          .attr("height", function (d){ return innerHeight - yScale(d.y); })
	colorLegendG.call(colorLegend);
    bars.exit().remove();

}



function drawLineChart(localityName,categoryName) {
    

    /* BEFORE DATA */
	var outerWidth = 800;
    var outerHeight = 400;
	var margin = { left: 90, top: 30, right: 30, bottom: 40 };
	var innerWidth  = outerWidth  - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top  - margin.bottom;	
	var innerHeightOffset = innerHeight+1;
 	var xAxisLabelText = "Time (years)";
    var xAxisLabelOffset = 30;
    var yAxisLabelText = getYlabel(categoryName);
    var yAxisLabelOffset = 40;

    // Select SVG element on the DOM
    var SVG = d3.select("#main").attr("width",outerWidth).attr("height",outerHeight);
	// Remove previous line charts
	SVG.selectAll("g").remove();
	//  Line chart group
	var group=SVG.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	// Line group
	var path=group.append("path");
	
	//xAxis Group
	var xAxisG=group.append("g").attr('class', 'axis').attr('transform', "translate(0," + innerHeightOffset + ")");
	// yAxis Group
	var yAxisG= group.append("g").attr('class', 'axis').attr('transform', 'translate(-2,0)');
	
		
	var xAxisLabel = xAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("x", innerWidth/2)
        .attr("y", xAxisLabelOffset)
        .attr("class", "label")
        .text(xAxisLabelText);
		
	var yAxisLabel = yAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("transform", "translate(-" + yAxisLabelOffset + "," + (innerHeight / 2) + ") rotate(-90)")
        .attr("class", "label")
        .text(yAxisLabelText);
	

    // create axis scale: Pixel Space
	var xScale = d3.time.scale().range([0, innerWidth]);
    var yScale = d3.scale.linear().range([innerHeight, 0]);  
	
	
	// define x and y axis
    var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
    var yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(d3.format("s"))
        .outerTickSize(0);  
	  
	
	var myLineFunction = d3.svg.line()
        			.x(function(d) { return xScale(d.xColumn); })				
        			.y(function(d) { return yScale(d.yColumn); });
	
	
	 // get energy production for selected locality
    d3.select("#label").html("Visualization of "+ localityName + " Vs " +categoryName );
    
	/* AFTER DATA */
	var data = returnDataCategory(localityName,categoryName);
	var myArrayOfObjects = [];
    
	 for (var rowNumber = 0; rowNumber < data.length; rowNumber++) {
			 // make an object to store myArrayOfObjects
            var point = {
				        xColumn: dateArray[rowNumber],  // date array global
            			yColumn: data[rowNumber]
            			}
						
			myArrayOfObjects.push(point);	
		 }
	
	        
	//define axis domain scale: Data Space	
	xScale.domain(d3.extent(myArrayOfObjects, function (d){ return d.xColumn; }));
    yScale.domain(d3.extent(myArrayOfObjects, function (d){ return d.yColumn; })).nice();
	
	
    xAxisG.call(xAxis);
	yAxisG.call(yAxis);
	
	var myClass="";
    if ( categoryName.toLowerCase().indexOf("consumption") >= 0) 
	{ myClass="line1"} else {myClass="line2"} 

	path.attr("d", myLineFunction(myArrayOfObjects))
	    .attr("class",myClass); 
	
}


function mdrawLineChart(localityName,categoryName,categoryName1,categoryName2) {
    

    /* BEFORE DATA */
	var outerWidth = 800;
    var outerHeight = 400;
	var margin = { left: 90, top: 30, right: 30, bottom: 40 };
	var innerWidth  = outerWidth  - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top  - margin.bottom;	
	var innerHeightOffset = innerHeight+1;
 	var xAxisLabelText = "Time (years)";
    var xAxisLabelOffset = 30;
    var yAxisLabelText = getYlabel(categoryName1);
    var yAxisLabelOffset = 40;

    // Select SVG element on the DOM
    var SVG = d3.select("#main").attr("width",outerWidth).attr("height",outerHeight);
	// Remove previous line charts
	SVG.selectAll("g").remove();
	//  Line chart group
	var group=SVG.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	// Line group
	var path1=group.append("path");
	var path2=group.append("path");
	
	var xAxisG=group.append("g").attr('class', 'axis').attr('transform', "translate(0," + innerHeightOffset + ")");
	// yAxis Group
	var yAxisG= group.append("g").attr('class', 'axis').attr('transform', 'translate(-2,0)');
	//legend Group
	var colorLegendG = SVG.append("g")
        .attr("class", "color-legend")
        .attr("transform", "translate(600, 10)");
	
	var xAxisLabel = xAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("x", innerWidth/2)
        .attr("y", xAxisLabelOffset)
        .attr("class", "label")
        .text(xAxisLabelText);
		
	var yAxisLabel = yAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("transform", "translate(-" + yAxisLabelOffset + "," + (innerHeight / 2) + ") rotate(-90)")
        .attr("class", "label")
        .text(yAxisLabelText);
	

    // create axis scale: Pixel Space
	var xScale = d3.time.scale().range([0, innerWidth]);
    var yScale = d3.scale.linear().range([innerHeight, 0]);  
	var colorScale = d3.scale.category10(); 
	
	// define x and y axis
    var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
    var yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(d3.format("s"))
        .outerTickSize(0);  
	var colorLegend = d3.legend.color()
        .scale(colorScale)
        .shapePadding(4)
        .shapeWidth(10)
        .shapeHeight(10)
        .labelOffset(4);   
	
	var myLineFunction = d3.svg.line()
        			.x(function(d) { return xScale(d.xColumn); })				
        			.y(function(d) { return yScale(d.yColumn); });
	
	
	 // get energy production for selected locality
    d3.select("#label").html("Visualizaion of "+localityName + " Vs "+ categoryName);
	
	/* AFTER DATA */
	var data1 = returnDataCategory(localityName,categoryName1);
	var myArrayOfObjects1 = [];
    
	 for (var rowNumber = 0; rowNumber < data1.length; rowNumber++) {
			 // make an object to store myArrayOfObjects
            var point = {
				        xColumn: dateArray[rowNumber],  // date array global
            			yColumn: data1[rowNumber]
            			}
						
			myArrayOfObjects1.push(point);	
		 }
	        
			
   
   var data2 = returnDataCategory(localityName,categoryName2);
   var myArrayOfObjects2 = [];
    
	 for (var rowNumber = 0; rowNumber < data2.length; rowNumber++) {
			 // make an object to store myArrayOfObjects
            var point = {
				        xColumn: dateArray[rowNumber],  // date array global
            			yColumn: data2[rowNumber]
            			}
						
			myArrayOfObjects2.push(point);	
		 }		
		 
	
	//define axis domain scale: Data Space	
    //xScale.domain([new Date(1980, 1, 1), new Date(2012, 1, 1)]);
	//yScale.domain([d3.min(data), d3.max(data)]).nice(); 
	//Alternate and Easyway to do the extetn
	var minVal,maxVal;
	if (d3.min(data1)<d3.min(data2)) { minVal=d3.min(data1);}
	else{minVal=d3.min(data2);}
	
	if (d3.max(data1)>d3.max(data2)) { maxVal=d3.max(data1);}
	else{maxVal=d3.max(data2);}
	
	xScale.domain(d3.extent(myArrayOfObjects1, function (d){ return d.xColumn; }));
    yScale.domain([minVal,maxVal]).nice();
	colorScale.domain([categoryName1,categoryName2]);
	
    xAxisG.call(xAxis);
	yAxisG.call(yAxis);
	colorLegendG.call(colorLegend);

	path1.attr("d", myLineFunction(myArrayOfObjects1))
	    .attr("class", "line1"); 
		
	path2.attr("d", myLineFunction(myArrayOfObjects2))
	    .attr("class", "line2"); 


}



function getRegion(countryName)
{
  var region='';

    var North_America=[
        'Bermuda',
        'Canada',
        'Greenland',
        'Mexico',
        'Saint Pierre and Miquelon',
        'United States']

    var CentralSouth_America=[
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Aruba',
        'Bahamas, The',
        'Barbados',
        'Belize',
        'Bolivia',
        'Brazil',
        'Cayman Islands',
        'Chile',
        'Colombia',
        'Costa Rica',
        'Cuba',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'El Salvador',
        'Falkland Islands (Islas Malvinas)',
        'French Guiana',
        'Grenada',
        'Guadeloupe',
        'Guatemala',
        'Guyana',
        'Haiti',
        'Honduras',
        'Jamaica',
        'Martinique',
        'Montserrat',
        'Netherlands Antilles',
        'Nicaragua',
        'Panama',
        'Paraguay',
        'Peru',
        'Puerto Rico',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Vincent/Grenadines',
        'Suriname',
        'Trinidad and Tobago',
        'Turks and Caicos Islands',
        'Uruguay',
        'Venezuela',
        'Virgin Islands,  U.S.',
        'Virgin Islands, British']

    var Europe= [
        'Albania',
        'Austria',
        'Belgium',
        'Bosnia and Herzegovina',
        'Bulgaria',
        'Croatia',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Faroe Islands',
        'Finland',
        'Former Czechoslovakia',
        'Former Serbia and Montenegro',
        'Former Yugoslavia',
        'France',
        'Germany',
        'Germany, East',
        'Germany, West',
        'Gibraltar',
        'Greece',
        'Hungary',
        'Iceland',
        'Ireland',
        'Italy',
        'Kosovo',
        'Luxembourg',
        'Macedonia',
        'Malta',
        'Montenegro',
        'Netherlands',
        'Norway',
        'Poland',
        'Portugal',
        'Romania',
        'Serbia',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Sweden',
        'Switzerland',
        'Turkey',
        'United Kingdom',
        'Eurasia',
        'Armenia',
        'Azerbaijan',
        'Belarus',
        'Estonia',
        'Former U.S.S.R.',
        'Georgia',
        'Kazakhstan',
        'Kyrgyzstan',
        'Latvia',
        'Lithuania',
        'Moldova',
        'Russia',
        'Tajikistan',
        'Turkmenistan',
        'Ukraine',
        'Uzbekistan']

    var Middle_East= [
        'Bahrain',
        'Iran',
        'Iraq',
        'Israel',
        'Jordan',
        'Kuwait',
        'Lebanon',
        'Oman',
        'Palestinian Territories',
        'Qatar',
        'Saudi Arabia',
        'Syria',
        'United Arab Emirates',
        'Yemen']

    var Africa =[
        'Algeria',
        'Angola',
        'Benin',
        'Botswana',
        'Burkina Faso',
        'Burundi',
        'Cameroon',
        'Cape Verde',
        'Central African Republic',
        'Chad',
        'Comoros',
        'Congo (Brazzaville)',
        'Congo (Kinshasa)',
        'Cote dIvoire (IvoryCoast)',
        'Djibouti',
        'Egypt',
        'Equatorial Guinea',
        'Eritrea',
        'Ethiopia',
        'Gabon',
        'Gambia, The',
        'Ghana',
        'Guinea',
        'Guinea-Bissau',
        'Kenya',
        'Lesotho',
        'Liberia',
        'Libya',
        'Madagascar',
        'Malawi',
        'Mali',
        'Mauritania',
        'Mauritius',
        'Morocco',
        'Mozambique',
        'Namibia',
        'Niger',
        'Nigeria',
        'Reunion',
        'Rwanda',
        'Saint Helena',
        'Sao Tome and Principe',
        'Senegal',
        'Seychelles',
        'Sierra Leone',
        'Somalia',
        'South Africa',
        'Sudan and South Sudan',
        'Swaziland',
        'Tanzania',
        'Togo',
        'Tunisia',
        'Uganda',
        'Western Sahara',
        'Zambia',
        'Zimbabwe' ]

    var AsiaOceania =[
        'Afghanistan',
        'American Samoa',
        'Australia',
        'Bangladesh',
        'Bhutan',
        'Brunei',
        'Burma (Myanmar)',
        'Cambodia',
        'China',
        'Cook Islands',
        'Fiji',
        'French Polynesia',
        'Guam',
        'Hawaiian Trade Zone',
        'Hong Kong',
        'India',
        'Indonesia',
        'Japan',
        'Kiribati',
        'Korea, North',
        'Korea, South',
        'Laos',
        'Macau',
        'Malaysia',
        'Maldives',
        'Mongolia',
        'Nauru',
        'Nepal',
        'New Caledonia',
        'New Zealand',
        'Niue',
        'Pakistan',
        'Papua New Guinea',
        'Philippines',
        'Samoa',
        'Singapore',
        'Solomon Islands',
        'Sri Lanka',
        'Taiwan',
        'Thailand',
        'Timor-Leste (East Timor)',
        'Tonga' ]

    var  USPacific_Islands= [
    'Vanuatu',
    'Vietnam',
    'Wake Island']

    if ($.inArray(countryName, North_America) > -1) {
        // country belond to North America
        region= "North America";
    }

    if ($.inArray(countryName, CentralSouth_America) > -1) {

        region= "Central & South America";
    }
    if ($.inArray(countryName, Europe) > -1) {

        region= "Europe";
    }
    if ($.inArray(countryName, Middle_East) > -1) {

        region= "Middle East";
    }
    if ($.inArray(countryName, Africa) > -1) {
        region= "Africa";
    }
    if ($.inArray(countryName, AsiaOceania) > -1) {
        region= "Asia & Oceania";
    }
    if ($.inArray(countryName, USPacific_Islands) > -1) {
        region= "U. S. Pacific Islands";
    }


  return region;

}



function drawScatterChart(xAxisType,yAxisType,zAxisType,timeYearString) {



/* BEFORE DATA */
    // chart size 
	var outerWidth = 800;
    var outerHeight = 400;
	var margin = { left: 90, top: 30, right: 30, bottom: 40 };
	var innerWidth  = outerWidth  - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top  - margin.bottom;	
	var innerHeightOffset = innerHeight+1;
	var rMin = 3; // "r" stands for radius
    var rMax = 20;
	var xAxisLabelText = getYlabel(xAxisType);
    var xAxisLabelOffset = 30;
    var yAxisLabelText = getYlabel(yAxisType);
    var yAxisLabelOffset = 40;

    var zAxisLabelText = getYlabel(zAxisType);

 

    // Select SVG element on the DOM
    var SVG = d3.select("#main2").attr("width",outerWidth).attr("height",outerHeight);
	// Remove previous line charts
	SVG.selectAll("g").remove();
	//  Line chart group
	var group=SVG.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	//  xAxis Group
	var xAxisG=group.append("g").attr('class', 'axis').attr('transform', 'translate(0,' + innerHeightOffset + ')');
	// yAxis Group
	var yAxisG= group.append("g").attr('class', 'axis').attr('transform', 'translate(-2,0)');

    var colorLegendG = SVG.append("g")
        .attr("class", "color-legend")
        .attr("transform", "translate(600, 10)");



    var xAxisLabel = xAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("x", innerWidth/2)
        .attr("y", xAxisLabelOffset)
        .attr("class", "label")
        .text(xAxisLabelText);
		
	var yAxisLabel = yAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("transform", "translate(-" + yAxisLabelOffset + "," + (innerHeight / 2) + ") rotate(-90)")
        .attr("class", "label")
        .text(yAxisLabelText);
	
	

    // create axis scale: Pixel Space
	var xScale = d3.scale.linear().range([0, innerWidth]);
    var yScale = d3.scale.linear().range([innerHeight, 0]);
	var rScale = d3.scale.linear().range([rMin,rMax]); 
	var colorScale = d3.scale.category10();

	
	// define x and y axis
    var xAxis = d3.svg.axis().scale(xScale).orient('bottom').tickFormat(d3.format("s"))
        .outerTickSize(0);
    var yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(d3.format("s"))
        .outerTickSize(0);

    var colorLegend = d3.legend.color()
        .scale(colorScale)
        .shapePadding(4)
        .shapeWidth(10)
        .shapeHeight(10)
        .labelOffset(4)
	

	
	 // get energy production for selected locality
    d3.select("#label2").html("Visualization of "+xAxisType+" vs " + yAxisType+" for " +timeYearString);
    
	/* AFTER DATA */
	
	// get Data

	
	var myArrayOfObjects = [];
    var region=	["North America","Central & South America","Europe","Middle East","Africa","Asia & Oceania","U. S. Pacific Islands"];

	
	 for (var rowNumber = 0; rowNumber < listOfLocalities.length; rowNumber++) {
			 // make an object to store myArrayOfObjects
         if(
             !(listOfLocalities[rowNumber]=="U.S. Pacific Islands" ||
             listOfLocalities[rowNumber]=="Europe" ||
             listOfLocalities[rowNumber]=="Middle East" ||
             listOfLocalities[rowNumber]=="Africa" ||
             listOfLocalities[rowNumber]=="Asia & Oceania" ||
             listOfLocalities[rowNumber]=="World" ||
             listOfLocalities[rowNumber]=="Central & South America" ||
             listOfLocalities[rowNumber]=="North America")
         ) {

             var data1 = returnDataCategory(listOfLocalities[rowNumber], xAxisType);
             var data2 = returnDataCategory(listOfLocalities[rowNumber], yAxisType);
             var data3 = returnDataCategory(listOfLocalities[rowNumber], zAxisType);

             var point = {
                 xColumn: data1[parseInt(timeYearString) - 1980],  // date array global
                 yColumn: data2[parseInt(timeYearString) - 1980],
                 zColumn: data3[parseInt(timeYearString) - 1980],
                 year: timeYearString,
                 country:listOfLocalities[rowNumber],
                 colorColumn: getRegion(listOfLocalities[rowNumber])
             }


             myArrayOfObjects.push(point);
         }
     }
	
	        
	//define axis domain scale: Data Space	
    xScale.domain(d3.extent(myArrayOfObjects, function (d){ return d.xColumn; })).nice();
    yScale.domain(d3.extent(myArrayOfObjects, function (d){ return d.yColumn; })).nice();
    rScale.domain(d3.extent(myArrayOfObjects, function (d){ return d.zColumn; })).nice();
    colorScale.domain(region);
    //rScale.domain(d3.extent(myArrayOfObjects, function (d){ return d[rColumn]; }));
    xAxisG.call(xAxis);
	yAxisG.call(yAxis);
	//bind data

    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("color", "white")
        .style("padding", "8px")
        .style("background-color", "rgba(0, 0, 0, 0.75)")
        .style("border-radius", "6px")
        .style("font", "12px sans-serif")
        .text("tooltip");

	var circles = group.selectAll("circle").data(myArrayOfObjects);
        
	//Enter
	circles.enter().append("circle");
        
	//update
	circles
          .attr("cx",      function (d){ return       xScale(d.xColumn);     })
          .attr("cy",      function (d){ return       yScale(d.yColumn);     })
          .attr("r",       function (d){ return       rScale(d.zColumn);     })
          .attr("fill",    function (d){ return   colorScale(d.colorColumn); })
          .attr("class","dot")
          .on("mouseover", function(d) {
            tooltip.text(d.country + ":"+zAxisLabelText+" : "+d.zColumn
            );
            tooltip.style("visibility", "visible");
        })
        .on("mousemove", function() {
            return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

    circles
        .append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .style("pointer-events", "none")
        .text(function(d){ return d.country; });


    colorLegendG.call(colorLegend);
		
 
}

function getBothCategory(selectedCategory)
{
	var category=[];
	switch (selectedCategory) {
				
                case "Coal":
                    category[0]="Coal Consumption";			
                    category[1]="Coal Production";
					break;
                case "Petroleum":
                    category[0]="Petroleum Consumption";
                     category[1]="Petroleum Production";
					 break;
                case "Renewable Biofuels":
                    category[0]="Renewable Biofuels Consumption";
                    category[1]="Renewable Biofuels Production";
					break;
                case "Renewable Electricity":
                    category[0]="Renewable Electricity Consumption";
                    category[1]="Renewable Electricity Production";
					break;
                case "Total Electricity":
                    category[0]="Total Electricity Consumption";			
                    category[1]="Total Electricity Generation";
					break;
                case "Total Primary Energy":
                    category[0]="Total Primary Energy Consumption";
                    category[1]="Total Primary Energy Production";
					break;

            }
		return category;	
}


var country1 = '';
var country2 = '';
//var secondCountry= false;
var secondCategory= false;
var categoryName = '';
var category1='';
var category2='';
var dataBreakup='';
var mode="Bar"

var xAixsType,yAxisType,zAxisType,timeYears;

function render ()
{
	
    // drawBar wiht One Energy and One Country     
    if (mode=="Bar") {
		//All Bar Charts
		 if (country2==''|| country2=='default'||country1==country2) {
			if (dataBreakup=="All") {
			 mdrawBarChart(country1,categoryName,category1,category2);}
			else { 
			drawBarChart(country1,categoryName);}
		 }
		 else  { 
		// write new function that take two country argument and gnerate bar chart 
		 m2drawBarChart(country1,country2,categoryName); }



       // drawScatterChart(xAixsType,yAxisType,zAxisType,timeYears)
	}
	else {
		
		//All Line Charts
		 if (country2==''|| country2=='default'||country1==country2) {
			if (dataBreakup=="All") {
				mdrawLineChart(country1,categoryName,category1,category2);}
			else{
				drawLineChart(country1,categoryName);}
		 }
		 else { 
		 // write new function that take two country argument and gnerate line chart 
		 m2drawLineChart(country1,country2,categoryName); }

	}
	
	
}


function defaultCharts()
{
	var defaultSelectionCountry = document.getElementById('selectionWidgetCountryLeft1');
  		country1 = defaultSelectionCountry.options[defaultSelectionCountry.selectedIndex].value;
		
	var defaultSelectionCountry2 = document.getElementById('selectionWidgetCountryLeft2');
  		country2 = defaultSelectionCountry2.options[defaultSelectionCountry.selectedIndex].value;
		
	var defaultSelectionData = document.getElementById('selectionWidgetDataLeft');
  		categoryName = defaultSelectionData.options[defaultSelectionData.selectedIndex].value;

	
	if(categoryName=="Coal" || categoryName=="Petroleum" ||categoryName=="Renewable Biofuels" 
	  ||categoryName=="Total Electricity" ||categoryName=="Total Primary Energy" ||categoryName=="Renewable Electricity") 
	  {	
	    var category=getBothCategory(categoryName); 
			category1=category[0];
			category2=category[1];
			dataBreakup="All"
	  }
	else{
	       dataBreakup=""
		  
	  }

    var selectionData1 = document.getElementById('xAxis');
    xAixsType = selectionData1.options[selectionData1.selectedIndex].value;

    var selectionData2 = document.getElementById('yAxis');
    yAxisType = selectionData2.options[selectionData2.selectedIndex].value;

    var selectionData3 = document.getElementById('zAxis');
    zAxisType=selectionData3.options[selectionData3.selectedIndex].value;

    var selectionData4 = document.getElementById('timeScale');
    timeYears=selectionData4.options[selectionData4.selectedIndex].value;


    drawScatterChart(xAixsType,yAxisType,zAxisType,timeYears);
    render()
}






	

function doStuff(url, dataCategory, dataRows) {
    //Data is usable here
	
  
    console.log("Reading File:", url);
    if (!countryflag) {
		countryflag=true;
        fetchCountries(dataRows);
		populateSelectionWidget();
		console.log("Countries Added ,Selection Widgets Populated");
		
		
		// Attach change listener functions
        d3.select("#selectionWidgetCountryLeft1")
          .on('change', function() {

            // clear the contents of the chart
            d3.select("#main").selectAll('g').remove();
			
            // figure out the newly selected locality
            var selectionCountry = document.getElementById('selectionWidgetCountryLeft1');
            country1 = selectionCountry.options[selectionCountry.selectedIndex].value;
			
		    // Strt drawing
			render();
			});
			
			
		d3.select("#selectionWidgetCountryLeft2")
          .on('change', function() {
			  
			 // clear the contents of the chart
            d3.select("#main").selectAll('g').remove();
			 
			// figure out the newly selected locality
			var selectionCountry = document.getElementById('selectionWidgetCountryLeft2');
            country2 = selectionCountry.options[selectionCountry.selectedIndex].value;
	
			// Strt drawing
			render();
           
			});	
		
		d3.select("#selectionWidgetDataLeft")
          .on('change', function() {
	
            // clear the contents of the chart
            d3.select("#main").selectAll('g').remove();
		
            // figure out the newly selected category
			var selectionData = document.getElementById('selectionWidgetDataLeft');
			categoryName = selectionData.options[selectionData.selectedIndex].value;
			console.log('new Category: ' + categoryName);
			if(categoryName=="Coal" || categoryName=="Petroleum" ||categoryName=="Renewable Biofuels"||
			   categoryName=="Total Electricity" ||categoryName=="Total Primary Energy" ||categoryName=="Renewable Electricity") 
	  			{
					$('#dynamicOptions').css("display", "block");
				    $('#all').prop('checked', true);
					$('#selectionWidgetCountryLeft2').prop('disabled', 'disabled');
					dataBreakup='All';
					country2='';
					var category=getBothCategory(categoryName); 
					category1=category[0];
					category2=category[1];
					}
			else
			{
				$('#dynamicOptions').css("display", "none");
				$('#selectionWidgetCountryLeft2').prop('disabled', false);
				$('#defaultChoice').prop('selected','selected');
				category1=categoryName;
				dataBreakup='';		  
			}

            render();
        });
		
		
	
	$('input[type=radio][name=dataBreakup]').on('change', function() {
     
	 var selectionData = document.getElementById('selectionWidgetDataLeft');
	 categoryName = selectionData.options[selectionData.selectedIndex].value;
	 var selectionCountry = document.getElementById('selectionWidgetCountryLeft2');
	 var category='';
	 if(categoryName=="Coal" || categoryName=="Petroleum" ||categoryName=="Renewable Biofuels" 
	  ||categoryName=="Total Electricity" ||categoryName=="Total Primary Energy" ||categoryName=="Renewable Electricity") 
	  {	
	     category=getBothCategory(categoryName); 	
	  }	
	 
	 switch($(this).val()) {
         case '1':
             console.log("All");
			 dataBreakup="All";
			 category1=category[0];
			 category2=category[1];
			 $('#selectionWidgetCountryLeft2').prop('disabled', 'disabled');
			 country2='';
			 render();
             break;
         case '2':
              console.log("Consumption");
			  dataBreakup="Consumption";
			  category1=category[0];
			  categoryName=category1;
			  $('#selectionWidgetCountryLeft2').prop('disabled', false);
              country2 = selectionCountry.options[selectionCountry.selectedIndex].value;
			  render();
             break;
		case '3':
              console.log("Production");
			  dataBreakup="Production"
			  category2=category[1];
			  categoryName=category2;
			  $('#selectionWidgetCountryLeft2').prop('disabled', false);
			  country2 = selectionCountry.options[selectionCountry.selectedIndex].value;
			  render();
             break;
			  }
	  
			  
     });
	 
	 $('input[type=radio][name=mode]').on('change', function() {
     switch($(this).val()) {
         case 'Bar':
             console.log("Bar");
			 mode="Bar";
			  render();
             break;
         case 'Line':
              console.log("Line");
			  mode="Line"
			  render();
             break;
     }
	 });


        d3.select("#xAxis")
            .on('change', function() {

                var selectionData = document.getElementById('xAxis');
                xAixsType = selectionData.options[selectionData.selectedIndex].value;
                drawScatterChart(xAixsType,yAxisType,zAxisType,timeYears);

            });
        d3.select("#yAxis")
            .on('change', function() {

                var selectionData = document.getElementById('yAxis');
                yAxisType = selectionData.options[selectionData.selectedIndex].value;
                drawScatterChart(xAixsType,yAxisType,zAxisType,timeYears);

            });

        d3.select("#zAxis")
            .on('change', function() {
                var selectionData = document.getElementById('zAxis');
                zAxisType=selectionData.options[selectionData.selectedIndex].value;
                drawScatterChart(xAixsType,yAxisType,zAxisType,timeYears);
            });

        d3.select("#timeScale")
            .on('change', function() {
                var selectionData = document.getElementById('timeScale');
                timeYears=selectionData.options[selectionData.selectedIndex].value;
                drawScatterChart(xAixsType,yAxisType,zAxisType,timeYears);
            });





        fetchData(dataCategory,dataRows);
			
		
    }
    else
    fetchData(dataCategory,dataRows);

}

function parseData(url,dataCategory,callBack) {


    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        header: true,
        complete: function(results) {
            callBack(url,dataCategory,results.data);
        }
    });
	
}




// Main Entry point

  
  console.log("File 1 Parsing Begin");
  parseData("data/co2_emissions_per_capita.csv", "CO2 Emission", doStuff);
  console.log("File 2 Parsing Begin");
  parseData("data/coal_consumption.csv","Coal Consumption", doStuff);
  parseData("data/coal_production.csv","Coal Production", doStuff);
  console.log("File 4 Parsing Begin");
  parseData("data/petroleum_consumption.csv","Petroleum Consumption", doStuff);
  console.log("File 5 Parsing Begin");
  parseData("data/petroleum_production.csv","Petroleum Production", doStuff);
  console.log("File 6 Parsing Begin");
  parseData("data/renewable_biofuel_consumption.csv","Renewable Biofuels Consumption", doStuff);
  console.log("File 7 Parsing Begin");
  parseData("data/renewable_biofuel_production.csv","Renewable Biofuels Production", doStuff);
  console.log("File 8 Parsing Begin");
  parseData("data/renewable_electricity_consumption.csv","Renewable Electricity Consumption", doStuff);
  console.log("File 9 Parsing Begin");
  parseData("data/renewable_electricity_generation.csv","Renewable Electricity Production", doStuff);
  console.log("File 10 Parsing Begin");
  parseData("data/total_electricity_consumption.csv","Total Electricity Consumption", doStuff);
  console.log("File 11 Parsing Begin");
  parseData("data/total_electricity_generation.csv","Total Electricity Generation", doStuff);
  console.log("File 12 Parsing Begin");
  parseData("data/total_primary_energy_consumption.csv","Total Primary Energy Consumption", doStuff);
  console.log("File 13 Parsing Begin");
  parseData("data/total_primary_energy_production.csv","Total Primary Energy Production", doStuff);
  
 promiseDefault.done( function() { console.log("data is ready to draw deafault charts"); }); 

 
	
  
 $.when( promiseDefault,promiseCo2,promiseCoalCon,promiseCoalProd,promisePetroCon,promisePetroProd,promiseBioCon,promiseBioProd
      ,promiseReElectCon,promiseReElecProd,promiseTotaElecProd,promisElecTotalCon,promiseTotaEngProd,promiseTotalEngCon)
  .done ( function() { 
  console.log("data is ready to draw all charts");
  defaultCharts();});
 
	 