import{r as o,j as e,h as a,w as s,F as i,B as c}from"./app-47b17f36.js";import{P as l}from"./PageBreadcrumb-c0dab2ca.js";import{F as d}from"./airbnb-7906c378.js";class g extends o.Component{constructor(r){super(r),this.handleDateChange=(n,h)=>{this.setState({range:n})};const t=new Date;t.setDate(t.getDate()-12),this.state={range:[t,new Date]}}render(){return e.jsx(e.Fragment,{children:e.jsxs(a,{direction:"horizontal",className:"justify-content-between",children:[e.jsx(l,{title:this.props.title,subName:this.props.subName}),e.jsxs(a,{gap:2,direction:"horizontal",className:"mt-2 mb-4 mb-md-6 d-none d-md-flex",children:[e.jsx(d,{value:this.state.range,options:{mode:"range",wrap:!0,dateFormat:"d M Y"},onChange:this.handleDateChange,children:e.jsxs(s,{children:[e.jsx(s.Text,{"data-toggle":!0,children:e.jsx("i",{className:"fi fi-rr-calendar-clock"})}),e.jsx(i.Control,{"data-input":!0,type:"text",placeholder:"Select date..."})]})}),e.jsxs(c,{variant:"primary",children:[e.jsx("i",{className:"fi fi-rr-stats"}),e.jsx("span",{className:"ms-2",children:"Reports"})]})]})]})})}}export{g as P};
