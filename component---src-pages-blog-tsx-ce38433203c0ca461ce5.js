(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1GPU":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),l=a("vOnD"),r=a("Wbzz"),i=a("TJpk"),c=a("Ac47"),s=a("ojF+"),d=l.b.div.withConfig({displayName:"blog__Wrapper",componentId:"sc-1qx3mlc-0"})(["background-size:cover;background-position:center;background-attachment:fixed;"]),m=l.b.ul.withConfig({displayName:"blog__PostsList",componentId:"sc-1qx3mlc-1"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:2em;> li{display:flex;}"]);t.default=function(){var e=Object(r.c)("3871344105"),t=e.site,a=e.posts;return o.a.createElement(c.c,null,o.a.createElement(i.Helmet,null,o.a.createElement("title",null,t.siteMetadata.title," | Blog")),o.a.createElement(d,{style:{backgroundImage:"url('/images/screenshot_3840x2160_2020-07-19_12-49-26.jpg')"}},o.a.createElement("div",{style:{background:"linear-gradient(transparent, hsl(270, 33%, 25%, .5), #171717)",padding:"150px 0 10em"}},o.a.createElement(c.b,null,o.a.createElement(m,null,a&&a.edges.map((function(e){var t=e.node.frontmatter,a=t.date.match(/(\d{4})-(\d{2})-(\d{2})/);if(!a)return null;a[0],a[1],a[2],t.path;return o.a.createElement("li",{key:e.node.id},o.a.createElement(s.a,{post:e.node}))})))))))}},"ojF+":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),o=a.n(n),l=a("vOnD"),r=a("Wbzz"),i=Object(l.b)(r.a).withConfig({displayName:"post-preview-block__Wrapper",componentId:"sc-13oy5ns-0"})(["display:block;background-color:rgba(0,0,0,0.25);transition-duration:100ms;color:rgba(255,255,255,0.75);text-decoration:none;box-shadow:0 0 1em #000;&:hover{background-color:rgba(0,0,0,0.1);}"]),c=l.b.div.withConfig({displayName:"post-preview-block__ImageBlock",componentId:"sc-13oy5ns-1"})(["overflow:hidden;img{width:100%;display:block;transform:scale(1);transition:transform .2s;}",":hover & img{transform:scale(1.2);}"],i),s=l.b.div.withConfig({displayName:"post-preview-block__PostContent",componentId:"sc-13oy5ns-2"})(["padding:1em;> * + *{margin-top:0.5em;}"]),d=l.b.div.withConfig({displayName:"post-preview-block__PostDate",componentId:"sc-13oy5ns-3"})(["color:rgba(255,255,255,0.5);font-size:0.8em;"]),m=l.b.h3.withConfig({displayName:"post-preview-block__Heading",componentId:"sc-13oy5ns-4"})(["color:rgba(255,255,255,0.75);font-family:'Pirata One',serif;font-size:32px;"]),p=function(e){var t=e.post.frontmatter,a=t.date.match(/(\d{4})-(\d{2})-(\d{2})/);if(!a)return null;a[0];var n="/blog/"+a[1]+"/"+a[2]+t.path;return o.a.createElement(i,{to:n},o.a.createElement(c,null,o.a.createElement("img",{src:t.thumbnail.childImageSharp.fluid.src,className:"lazyload",alt:"Thumbnail"})),o.a.createElement(s,null,o.a.createElement("div",null,o.a.createElement(d,null,t.date)),o.a.createElement("div",null,o.a.createElement(m,null,t.title))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-ce38433203c0ca461ce5.js.map