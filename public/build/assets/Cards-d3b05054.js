import{j as e,R as d,p as a,C as t,e as u,T as j,N as m,a1 as g,a2 as p,L as b}from"./app-38275e8e.js";import{P as w}from"./PageBreadcrumb-aeecf1f4.js";import{T as y}from"./Table-4078cc83.js";const f="/build/assets/undefined-e55e3943.png",k=[{title:"Special title treatment",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",listItems:["Some quick example text to build on the card title","Some quick example text to build on the card title","Some quick example text to build on the card title"],buttonLinks:[{href:"#!",text:"Card Link",variant:"btn-softtext-primary"},{href:"#!",text:"Another Link",variant:"btn-softtext-danger"}]},{title:"Special title treatment",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",listItems:["Some quick example text to build on the card title","Some quick example text to build on the card title","Some quick example text to build on the card title"],buttonLinks:[{href:"#!",text:"Card Link",variant:"btn-softtext-primary"},{href:"#!",text:"Another Link",variant:"btn-softtext-danger"}]},{title:"Special title treatment",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",listItems:["Some quick example text to build on the card title","Some quick example text to build on the card title","Some quick example text to build on the card title"],buttonLinks:[{href:"#!",text:"Card Link",variant:"btn-softtext-primary"},{href:"#!",text:"Another Link",variant:"btn-softtext-danger"}]}],T=()=>e.jsx(d,{className:"g-3 g-md-4",children:k.map(({title:r,text:s,listItems:l,buttonLinks:c},o)=>e.jsx(a,{lg:4,children:e.jsxs(t,{children:[e.jsx(t.Img,{variant:"top",src:f}),e.jsxs(t.Body,{children:[e.jsx(t.Title,{className:"mb-2",children:r}),e.jsx(t.Text,{children:s})]}),e.jsx(u,{className:"list-group-flush",children:l.map((n,i)=>e.jsx(u.Item,{children:n},i))}),e.jsx(t.Body,{children:c.map(({href:n,text:i,variant:h},x)=>e.jsx(t.Link,{href:n,className:`btn rounded-pill ${h}`,children:i},x))})]})},o))}),v=[{defaultActiveKey:"home",navVariant:"tabs",items:[{eventKey:"home",label:"Home"},{eventKey:"profile",label:"Profile"},{eventKey:"contact",label:"Contact"},{eventKey:"disabled",label:"Disabled",disabled:!0}],panes:[{eventKey:"home",content:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action."},{eventKey:"profile",content:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action."},{eventKey:"contact",content:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action."},{eventKey:"disabled",content:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action."}]},{defaultActiveKey:"home",navVariant:"pills",items:[{eventKey:"home",label:"Home"},{eventKey:"profile",label:"Profile"},{eventKey:"contact",label:"Contact"},{eventKey:"disabled",label:"Disabled",disabled:!0}],panes:[{eventKey:"home",content:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."},{eventKey:"profile",content:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."},{eventKey:"contact",content:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."},{eventKey:"disabled",content:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."}]}],C=()=>e.jsx(d,{className:"g-3 g-md-4",children:v.map(({defaultActiveKey:r,navVariant:s,items:l,panes:c},o)=>e.jsx(a,{lg:6,children:e.jsx(j.Container,{defaultActiveKey:r,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(m,{variant:s,children:l.map(({eventKey:n,label:i,disabled:h},x)=>e.jsx(m.Item,{children:e.jsx(m.Link,{eventKey:n,disabled:h,children:i})},x))})}),e.jsx(t.Body,{children:e.jsx(j.Content,{children:c.map(({eventKey:n,content:i},h)=>e.jsx(j.Pane,{eventKey:n,children:i},h))})})]})})},o))}),N=()=>{const r={backgroundImage:"linear-gradient(135deg, rgba(188, 26, 78, 1) 0%, rgba(0, 79, 230, 1) 100%)"},s={backgroundImage:" linear-gradient(rgba(0, 0, 255, 0.75), rgba(255, 255, 0, 0.75))"};return e.jsx(e.Fragment,{children:e.jsxs(d,{className:"g-3 g-md-4",children:[e.jsx(a,{lg:4,children:e.jsxs(t,{className:"text-bg-dark",style:r,children:[e.jsx("div",{style:{height:"300px"}}),e.jsxs(t.ImgOverlay,{children:[e.jsx(t.Title,{className:"mb-2",children:"Gradient overlay card"}),e.jsx(t.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),e.jsx(t.Text,{children:"Last updated 3 mins ago"})]})]})}),e.jsx(a,{lg:4,children:e.jsxs(t,{className:"text-bg-dark",children:[e.jsx(t.Img,{src:g,style:{height:"300px"},alt:"Card image"}),e.jsxs(t.ImgOverlay,{children:[e.jsx(t.Title,{className:"mb-2",children:"Image overlay card"}),e.jsx(t.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),e.jsx(t.Text,{children:"Last updated 3 mins ago"})]})]})}),e.jsx(a,{lg:4,children:e.jsxs(t,{className:"text-bg-dark",children:[e.jsx(t.Img,{src:p,style:{height:"300px"},alt:"Card image"}),e.jsxs(t.ImgOverlay,{style:s,children:[e.jsx(t.Title,{className:"mb-2",children:"Image with gradient card"}),e.jsx(t.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),e.jsx(t.Text,{children:"Last updated 3 mins ago"})]})]})})]})})},S=()=>{const r=["Primary","Secondary","Success","Danger","Warning","Info"];return e.jsx(e.Fragment,{children:e.jsx(d,{className:"g-3 g-md-4",children:r.map(s=>e.jsx(a,{lg:4,children:e.jsxs(t,{bg:s.toLowerCase(),text:s.toLowerCase()==="light"?"dark":"white",className:`card-${s.toLowerCase()} text-bg-${s.toLowerCase()} border-${s.toLowerCase()}`,children:[e.jsx(t.Header,{children:"Header"}),e.jsxs(t.Body,{children:[e.jsxs(t.Title,{className:"mb-2",children:[s," Card Title "]}),e.jsx(t.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."})]}),e.jsx(t.Footer,{children:"Footer"})]})},s))})})},L=()=>{const r=[{title:"Special title treatment",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",links:[{href:"#!",className:"btn rounded-pill btn-softtext-primary",text:"Card Link"},{href:"#!",className:"btn rounded-pill btn-softtext-danger",text:"Another Link"}]},{title:"Special title treatment",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",links:[{href:"#!",className:"btn rounded-pill btn-softtext-primary",text:"Card Link"},{href:"#!",className:"btn rounded-pill btn-softtext-danger",text:"Another Link"}]},{title:"Special title treatment",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",links:[{href:"#!",className:"btn rounded-pill btn-softtext-primary",text:"Card Link"},{href:"#!",className:"btn rounded-pill btn-softtext-danger",text:"Another Link"}]}];return e.jsx(e.Fragment,{children:e.jsx(d,{className:"g-3 g-md-4",children:r.map(({title:s,text:l,links:c},o)=>e.jsx(a,{lg:4,children:e.jsxs(t,{className:"card-flush",children:[e.jsx(t.Header,{children:e.jsx(t.Title,{className:"mb-2",children:s})}),e.jsx(t.Body,{children:e.jsx(t.Text,{children:l})}),e.jsx(t.Body,{children:c.map(({href:n,className:i,text:h},x)=>e.jsx(t.Link,{href:n,className:i,children:h},x))})]})},o))})})},q=()=>{const r=["Primary","Warning","Success"];return e.jsx(e.Fragment,{children:e.jsx(d,{className:"g-3 g-md-4",children:r.map(s=>e.jsx(a,{lg:4,children:e.jsxs(t,{bg:s.toLowerCase(),text:s.toLowerCase()==="light"?"dark":"white",className:`card-hover card-${s.toLowerCase()} text-bg-${s.toLowerCase()} border-${s.toLowerCase()}`,children:[e.jsx(t.Header,{children:"Header"}),e.jsxs(t.Body,{children:[e.jsxs(t.Title,{className:"mb-2",children:[s," Card Title"]}),e.jsx(t.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."})]}),e.jsx(t.Footer,{children:"Footer"})]})},s))})})},H=()=>{const r=[{cards:[{header:"Height 100%",bodyTitle:"Height 100%",stretchClass:"card-stretch-100"}]},{cards:[{header:"Height 50%",bodyTitle:"Height 50%",stretchClass:"card-stretch-50 mb-4"},{header:"Height 50%",bodyTitle:"Height 50%",stretchClass:"card-stretch-50"}]},{cards:[{header:"Height 33.333%",bodyTitle:"Height 33.333%",stretchClass:"card-stretch-33 mb-4"},{header:"Height 33.333%",bodyTitle:"Height 33.333%",stretchClass:"card-stretch-33 mb-4"},{header:"Height 33.333%",bodyTitle:"Height 33.333%",stretchClass:"card-stretch-33"}]}];return e.jsx(d,{className:"g-3 g-md-4",children:r.map((s,l)=>e.jsx(a,{lg:4,children:s.cards.map(({header:c,bodyTitle:o,stretchClass:n},i)=>e.jsxs(t,{className:n,children:[e.jsx(t.Header,{children:c}),e.jsxs(t.Body,{children:[e.jsx(t.Title,{className:"mb-2",children:o}),e.jsx(t.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."})]}),e.jsx(t.Footer,{children:"Footer"})]},i))},l))})},F=()=>e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Cards",subName:"Base UI"}),e.jsxs(d,{className:"g-3 g-md-4",children:[e.jsx(a,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Sink"})}),e.jsx(t.Body,{children:e.jsx(T,{})})]})}),e.jsx(a,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Navigation"})}),e.jsx(t.Body,{children:e.jsx(C,{})})]})}),e.jsx(a,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Overlay"})}),e.jsx(t.Body,{children:e.jsx(N,{})})]})}),e.jsx(a,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Background"})}),e.jsx(t.Body,{children:e.jsx(S,{})})]})}),e.jsx(a,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Flush"})}),e.jsx(t.Body,{children:e.jsx(L,{})})]})}),e.jsx(a,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Hover"})}),e.jsx(t.Body,{children:e.jsx(q,{})})]})}),e.jsx(a,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Stretch"})}),e.jsx(t.Body,{children:e.jsx(H,{})})]})}),e.jsx(a,{xs:12,children:e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Options"})}),e.jsxs(y,{className:"mb-0",responsive:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Reference"}),e.jsx("th",{children:"Details"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Card"})}),e.jsx("td",{children:"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you're familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Titles, text, and links"})}),e.jsxs("td",{children:["Card titles are used by adding ",e.jsx("code",{children:".card-title"})," to a",e.jsx("code",{children:"<h*>"})," tag. In the same way, links are added and placed next to each other by adding",e.jsx("code",{children:".card-link"})," to an ",e.jsx("code",{children:"<a>"})," tag."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Images"})}),e.jsxs("td",{children:[e.jsx("code",{children:".card-img-top"})," places an image to the top of the card. With"," ",e.jsx("code",{children:".card-text"}),", text can be added to the card. Text within"," ",e.jsx("code",{children:".card-text"})," can also be styled with the standard HTML tags."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Kitchen Sink"})}),e.jsx("td",{children:"Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Sizing"})}),e.jsxs("td",{children:["Cards assume no specific ",e.jsx("code",{children:"width"})," to start, so they'll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Text Alignment "})}),e.jsxs("td",{children:["You can quickly change the text alignment of any card—in its entirety or specific parts—with our",e.jsx("a",{href:"/docs/5.3/utilities/text/#text-alignment",children:"text align classes"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Navigation"})}),e.jsxs("td",{children:["Add some navigation to a card's header (or block) with Bootstrap's",e.jsx("a",{href:"/docs/5.3/components/navs-tabs/",children:"nav components"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Overlays"})}),e.jsx("td",{children:"Turn an image into a card background and overlay your card's text. Depending on the image, you may or may not need additional styles or utilities."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Horizontal"})}),e.jsxs("td",{children:["Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with",e.jsx("code",{children:".g-0"})," and use ",e.jsx("code",{children:".col-md-*"})," classes to make the card horizontal at the ",e.jsx("code",{children:"md"})," breakpoint. Further adjustments may be needed depending on your card content."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Background and color"})}),e.jsxs("td",{children:["Set a ",e.jsx("code",{children:"background-color"})," with contrasting foreground"," ",e.jsx("code",{children:"color"})," with",e.jsxs("a",{href:"/docs/5.3/helpers/color-background/",children:["our ",e.jsx("code",{children:".text-bg-(color)"})," helpers"]}),". Previously it was required to manually pair your choice of",e.jsx("a",{href:"/docs/5.3/utilities/colors/",children:e.jsx("code",{children:".text-(color)"})}),"and",e.jsx("a",{href:"/docs/5.3/utilities/background/",children:e.jsx("code",{children:".bg-(color)"})}),"utilities for styling, which you still may use if you prefer."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Card Groups"})}),e.jsxs("td",{children:["Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use"," ",e.jsx("code",{children:"display: flex;"})," to become attached with uniform dimensions starting at the",e.jsx("code",{children:"sm"})," breakpoint."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Grid Cards"})}),e.jsxs("td",{children:["Use the Bootstrap grid system and its",e.jsxs("a",{href:"/docs/5.3/layout/grid/#row-columns",children:[e.jsx("code",{children:".row-cols"})," classes"]}),"to control how many grid columns (wrapped around your cards) you show per row. For example, here's",e.jsx("code",{children:".row-cols-1"})," laying out the cards on one column, and"," ",e.jsx("code",{children:".row-cols-md-2"})," splitting four cards to equal width across multiple rows, from the medium breakpoint up."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Flush Cards"})}),e.jsxs("td",{children:["Use ",e.jsx("code",{children:".card-flush"})," for flush cards."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Hover Cards"})}),e.jsxs("td",{children:["Use ",e.jsx("code",{children:".card-hover"})," for hover cards."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Stretch"})}),e.jsxs("td",{children:["Use ",e.jsx("code",{children:".card-stretch"})," for stretch cards. Stretch sizing"," ",e.jsx("code",{children:".card-stretch-(size)"})," as:",e.jsx("code",{children:"100, 75, 50, 33.33, 25"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Documentations"})}),e.jsxs("td",{children:["Please visit:",e.jsx(b,{to:"https://react-bootstrap.netlify.app/docs/components/cards",target:"_blank",rel:"noopener noreferrer",children:"https://react-bootstrap.netlify.app/docs/components/cards"})]})]})]})]})]})})]})]});export{F as default};