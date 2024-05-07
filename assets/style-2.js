// Initialize font properties
const fontname = "Ubuntu";
const fontweights = [300, 400];

// Color properties
const basecolor = "#000000";
const accentcolor = "#EDF1D6";
const accentcolor2 = "#2E4F4F";
const accentcolor3 = "#527853";
const accentcolor4 = "#40513B";
const accentcolor5 = "#186F65";
const highlightcolor = "#12372A";
const highlightcolor2 = "#3A8891";
const highlightcolor3 = "#2D4356";

// const basecolor = "#888";
// const accentcolor = "#222";
// const highlight = "#111";

// Body propertie000000
const bodyfontweight = 300;
const highlightfontweight = 800;
const highlightfontweight2 = 1000;
const bodyfontsize = "12pt";
const backgroundcolor = "#fff";

// Link properties
const acolor = accentcolor;
const adecoration = "none";
const ahovercolor = accentcolor2;
// const ahoverduration = "0.3s";
const ahoverdecoration = "underline"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Menu properties
const menucolor = basecolor;
const menufontsize = "15pt";
const menudecoration = "none";
const menuhover = accentcolor2;
// const menuhoverduration = "0.3s";
// const menuhoverdecoration = "none"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Header properties
const headercolor = highlightcolor3;
const headerfontsize = "24pt";
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "36pt";

// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = bodyfontweight;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor2;
const selfweight = bodyfontweight;
const selfdecoration = "underline";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = accentcolor;
const instyearsize = "11px";

//     .institution {
//             font - size: 12px;
//             color: #222;
//         }
//   .years {
//             font - size: 11px;
//             color: #888;
//         }

// Works for sans serif, change otherwise
$("head").append(
  "<link href='https://fonts.googleapis.com/css2?family=" +
    fontname +
    ":wght@" +
    fontweights.join(";") +
    "&display=swap' rel='stylesheet' type='text/css'>",
);
$("body").css("font-family", fontname);

$("body").css("color", basecolor);
$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

$("a").css("color", accentcolor5);
$("a").css("text-decoration", adecoration);

$(".menulink").css("color", menucolor);
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".header").css("color", headercolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".header").css("font-weight", highlightfontweight);
// $(".header").css("position", "sticky");
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);
$(".name").css("font-weight", highlightfontweight);

$(".papertitle").css("color", accentcolor3);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", highlightfontweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

$(".thisauthor").css("color", selfcolor);
$(".thisauthor").css("font-weight", highlightfontweight2);
$(".thisauthor").css("text-decoration", selfdecoration);
$(".thisauthor").css("font-style", selfstyle);

$(".institution").css("color", insttitlecolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);
