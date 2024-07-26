import{i as d,j as e,r as p,R as f,p as l,C as t,L as i}from"./app-47b17f36.js";import{P as y}from"./PageBreadcrumbButton-9aff5d40.js";import{_ as h}from"./react-apexcharts.min-d0b020fd.js";import{c as x}from"./colors-3635ad60.js";import{T as b}from"./Table-1db830d4.js";import"./PageBreadcrumb-c0dab2ca.js";const w=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[{name:"Sales",data:[4,3,10,9,29,19,22,9,12,7,19,5,13,9,17,2,7,5]}],n={chart:{height:350,type:"line",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1}},forecastDataPoints:{count:7},stroke:{width:5,curve:"smooth"},grid:{show:!1},markers:{size:3},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"],tickAmount:10,labels:{formatter:function(c,m,j){return j.dateFormatter(new Date(m),"dd MMM")}},axisBorder:{show:!1},axisTicks:{show:!1}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[a],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},yaxis:{min:-10,max:40},tooltip:{theme:"dark"}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"line",height:350})})},g=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[{name:"High - 2023",data:[28,29,33,36,32,32,33]},{name:"Low - 2023",data:[12,11,14,18,17,13,13]}],n={chart:{height:350,type:"line",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1}},colors:["#25b865",a],dataLabels:{enabled:!0},stroke:{curve:"smooth"},grid:{show:!1},markers:{size:1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},tooltip:{theme:"dark"}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"line",height:350})})},u=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[{name:"Revenue",data:[20,30,40,50,46,42,38,34,30,28,26,25]},{name:"Profite",data:[15,25,35,45,41,38,33,28,23,18,13,10]},{name:"Expenses",data:[10,20,30,40,40,30,30,20,20,10,10,5]}],n={chart:{height:350,type:"bar",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1}},stroke:{show:!0,width:2,colors:["transparent"]},plotOptions:{bar:{borderRadius:3,columnWidth:"35%",distributed:!1,dataLabels:{position:"top"}}},colors:["#25b865",a,"#e49e3d"],xaxis:{categories:["JAN","FEB","MAR","APR","MAY","JUN","JUE","AUG","SEP","OCT","NOV","DEC"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:function(c){return+c+" K"},offsetX:-5,offsetY:0}},grid:{show:!1},dataLabels:{enabled:!1},tooltip:{theme:"dark",y:{formatter:function(c){return+c+" K"}}},legend:{show:!1}};return e.jsx(h,{options:n,series:o,type:"bar",height:350})},C=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[{name:"Expenses",data:[50,60,70,80,140,80,70,60,50,40,30,20]},{name:"Revenue",data:[60,70,80,90,150,90,80,70,60,50,40,30]}],n={chart:{height:350,type:"bar",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1}},stroke:{show:!0,width:3,colors:["transparent"]},plotOptions:{bar:{borderRadius:5,columnWidth:"70%",dataLabels:{position:"top"}}},colors:["#ced4da",a],dataLabels:{enabled:!0,formatter:function(c){return c+"K"},offsetY:-20,style:{fontSize:"11px",colors:["#dee2e6",a]}},grid:{show:!1},xaxis:{categories:["JAN","FEB","MAR","APR","MAY","JUN","JUE","AUG","SEP","OCT","NOV","DEC"],position:"bottom",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(c){return c+"K"}}},legend:{position:"bottom",offsetY:6},tooltip:{theme:"dark"}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"bar",height:350})})},D=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[{name:"Leads",data:[4,5,4,6,3,4,5,4,6,3,4,5]},{name:"Active",data:[3,4,3,6,5,3,3,6,4,5,4,3]},{name:"Pending",data:[4,5,4,6,3,4,5,4,6,3,4,6]},{name:"Resolved",data:[4,5,4,6,3,4,5,4,5,3,4,5]},{name:"Calcelled",data:[4,5,4,6,3,4,5,4,6,3,4,5]}],n={chart:{type:"bar",height:350,stacked:!0,foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1}},plotOptions:{bar:{borderRadius:5,columnWidth:"20%",horizontal:!1}},colors:["#00275E","#85D00B",a,"#00CCCC","#6610F2"],xaxis:{categories:["JAN","FEB","MAR","APR","MAY","JUN","JUE","AUG","SEP","OCT","NOV","DEC"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{fontSize:"11px",colors:"#adb5bd"}}},yaxis:{labels:{formatter:function(c){return+c+" K"},offsetX:-5,offsetY:0}},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},dataLabels:{enabled:!1},tooltip:{theme:"dark",shared:!0,followCursor:!1,intersect:!1,y:{formatter:function(c){return+c+"K"}}},legend:{show:!0,position:"top",horizontalAlign:"left",fontSize:"12px",fontFamily:"Inter",labels:{colors:"#64748b"},markers:{width:10,height:10,radius:25},itemMargin:{horizontal:15,vertical:5}}};return e.jsx(h,{options:n,series:o,type:"bar",height:350})},k=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[{name:"Completed",data:[20,45,25,60,30,65,35,70,40,75,45,80],type:"area"},{name:"Project",data:[30,25,40,35,50,40,60,45,65,50,70,55],type:"area"},{name:"Upcoming",data:[45,20,50,25,65,30,75,35,80,40,85,45],type:"area"}],n={chart:{height:350,type:"area",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1}},xaxis:{categories:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:function(c){return+c+"K"},offsetX:-22,offsetY:0}},stroke:{curve:"smooth",width:[1,2,3,4],lineCap:"round"},grid:{padding:{left:0,right:0},strokeDashArray:3,borderColor:"rgba(170, 180, 195, 0.2)"},legend:{show:!1},colors:[a,"#25b865","#e49e3d"],dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.3,stops:[0,100]}},tooltip:{theme:"dark",y:{formatter:function(c){return+c+"K"}}}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"area",height:350})})},A=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[{name:"Payment Rejected",type:"bar",data:[23,11,22,27,13,22,37,21,44,22,30,21]},{name:"Payment Completed",type:"line",data:[44,55,41,67,22,43,21,41,56,27,43,41]},{name:"Awaiting Payment",type:"bar",data:[44,55,41,67,22,43,21,41,56,27,43,56]}],n={chart:{height:350,width:"100%",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1}},stroke:{width:[1,2,3],curve:"smooth",lineCap:"round"},plotOptions:{bar:{borderRadius:2,columnWidth:"30%"}},colors:[a,"#a2acc7","#E1E3EA"],fill:{opacity:[.85,.25,1,1],gradient:{shade:"dark",type:"vertical",opacityFrom:.5,opacityTo:.1,stops:[0,100,100,100]}},markers:{size:0},xaxis:{categories:["JAN","FEB","MAR","APR","MAY","JUN","JUE","AUG","SEP","OCT","NOV","DEC"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:function(c){return+c+"K"},offsetX:-5,offsetY:0}},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},dataLabels:{enabled:!1},tooltip:{theme:"dark",y:{formatter:function(c){return+c+"K"}}},legend:{show:!1}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,height:350})})},B=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,[o]=p.useState([{data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}]),[n]=p.useState({chart:{type:"candlestick",height:350,foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1}},plotOptions:{candlestick:{colors:{upward:"#dee2e6",downward:a}}},grid:{show:!1},xaxis:{type:"datetime",axisBorder:{show:!1}},tooltip:{theme:"dark"}});return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"candlestick",height:350})})},F=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[44,55,13,43,22],n={chart:{width:380,type:"pie",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif"},colors:["#00275E",a,"#85D00B","#00CCCC","#6610F2"],labels:["Sumi","Swapan","Sojib","Swampa","Sowrav"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],legend:{show:!0,position:"bottom",itemMargin:{vertical:15}},dataLabels:{enabled:!1},tooltip:{theme:"dark"}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"pie",height:380})})},T=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[44,55,41,17,15],n={colors:["#00275E",a,"#85D00B","#00CCCC","#6610F2"],labels:["Sumi","Swapan","Sojib","Swampa","Sowrav"],chart:{width:380,type:"donut",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif"},responsive:[{breakpoint:480,options:{chart:{width:200}}}],legend:{show:!0,position:"bottom",itemMargin:{vertical:15}},dataLabels:{enabled:!1},tooltip:{theme:"dark"}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"donut",height:380})})},S=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[44,55,41,17,15],n={colors:["#00275E",a,"#85D00B","#00CCCC","#6610F2"],labels:["Sumi","Swapan","Sojib","Swampa","Sowrav"],chart:{width:380,type:"donut",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif"},responsive:[{breakpoint:480,options:{chart:{width:200}}}],fill:{type:"gradient"},legend:{show:!0,position:"bottom",itemMargin:{vertical:15}},dataLabels:{enabled:!1},tooltip:{theme:"dark"}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"donut",height:380})})},E=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,[o]=p.useState([{name:"Basic Radar",data:[80,50,30,40,100,20,60]}]),n={chart:{height:350,type:"radar",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1}},colors:[a],xaxis:{categories:["SUN","SAR","MON","TUE","WEN","THU","FRI"]},tooltip:{theme:"dark"}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"radar",height:380})})},R=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,[o]=p.useState([{name:"Revenue",data:[80,50,30,40,100,20]},{name:"Expenses",data:[20,30,40,80,20,80]},{name:"Profit",data:[44,76,78,13,43,10]}]),n={chart:{height:350,type:"radar",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1},dropShadow:{enabled:!0,blur:1,left:1,top:1}},colors:["#85D00B",a,"#00CCCC"],xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},stroke:{width:2},fill:{opacity:.1},markers:{size:0},legend:{show:!1},tooltip:{theme:"dark"}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"radar",height:380})})},L=()=>{const{settings:r}=d(),s=r.color,a=x[s]||s,o=[{name:"Radar Polygon",data:[20,100,40,30,50,80,33]}],n={chart:{height:350,type:"radar",foreColor:"#adb5bd",fontFamily:"Inter, sans-serif",toolbar:{show:!1}},dataLabels:{enabled:!0},plotOptions:{radar:{size:140}},colors:[a],markers:{size:4,colors:["#fff"],strokeWidth:2},tooltip:{theme:"dark"},xaxis:{categories:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}};return e.jsx(e.Fragment,{children:e.jsx(h,{options:n,series:o,type:"radar",height:380})})},H=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Apexchart",subName:"Charts",url:"https://apexcharts.com/docs/react-charts/"}),e.jsxs(f,{className:"g-3 g-md-4",children:[e.jsx(l,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Gradient Line"})}),e.jsx(t.Body,{children:e.jsx(w,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Line Data Labels"})}),e.jsx(t.Body,{children:e.jsx(g,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Basic Bar"})}),e.jsx(t.Body,{children:e.jsx(u,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Colum Data Labels"})}),e.jsx(t.Body,{children:e.jsx(C,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Stacked Columns"})}),e.jsx(t.Body,{children:e.jsx(D,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Basic Area"})}),e.jsx(t.Body,{children:e.jsx(k,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Bar With Line"})}),e.jsx(t.Body,{children:e.jsx(A,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Apex Candlestick"})}),e.jsx(t.Body,{children:e.jsx(B,{})})]})}),e.jsx(l,{xs:12,lg:6,xxl:4,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Simple Pie"})}),e.jsx(t.Body,{className:"m-auto",children:e.jsx(F,{})})]})}),e.jsx(l,{xs:12,lg:6,xxl:4,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Simple Donut"})}),e.jsx(t.Body,{className:"m-auto",children:e.jsx(T,{})})]})}),e.jsx(l,{xs:12,lg:6,xxl:4,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Gradient Donut"})}),e.jsx(t.Body,{className:"m-auto",children:e.jsx(S,{})})]})}),e.jsx(l,{xs:12,lg:6,xxl:4,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Basic Radar"})}),e.jsx(t.Body,{children:e.jsx(E,{})})]})}),e.jsx(l,{xs:12,lg:6,xxl:4,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Radar Multiple"})}),e.jsx(t.Body,{children:e.jsx(R,{})})]})}),e.jsx(l,{xs:12,lg:6,xxl:4,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Radar Polygon"})}),e.jsx(t.Body,{children:e.jsx(L,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Options"})}),e.jsxs(b,{className:"mb-0",responsive:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Reference"}),e.jsx("th",{children:"Details"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Line Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/line-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/line-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Area Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/area-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/area-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Column Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/column-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/column-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Bar Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/bar-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/bar-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Mixed Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/mixed-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/mixed-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Range Area Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/range-area-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/range-area-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Timeline Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/timeline-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/timeline-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Funnel Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/funnel-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/funnel-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Candlestick Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/candlestick-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/candlestick-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Box & Whisker Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/box-whisker-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/box-whisker-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Bubble Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/bubble-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/bubble-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Scatter Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/scatter-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/scatter-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Heatmap Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/heatmap-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/heatmap-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Treemap Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/treemap-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/treemap-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Pie Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/pie-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/pie-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Radial Bar Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/radialbar-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/radialbar-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Radar Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/radar-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/radar-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Polar Area Charts"})}),e.jsx("td",{children:e.jsx(i,{to:"https://apexcharts.com/react-chart-demos/polar-area-charts/",target:"_blank",children:"https://apexcharts.com/react-chart-demos/polar-area-charts/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Documentations"})}),e.jsxs("td",{children:["Please visit:",e.jsx(i,{to:"https://apexcharts.com/docs/installation",target:"_blank",rel:"noopener noreferrer",children:"https://apexcharts.com/docs/installation"})]})]})]})]})]})})]})]});export{H as default};
