/* Core data + helpers for the IB Digital Society paper generator (first assessment 2024). */
// simple HTML table: T([["h1","h2"],["a","b"]])
function T(rows){return`<table class="dt"><tr>${rows[0].map(c=>`<th>${c}</th>`).join("")}</tr>${rows.slice(1).map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table>`}
// horizontal bar chart built from divs (prints cleanly to PDF). rows: [[label,value],...]
function BAR(title,rows,unit,max){
  max=max||Math.max(...rows.map(r=>r[1]));
  return`<figure class="chart"><figcaption>${title}</figcaption>${rows.map(r=>`<div class="bar"><span class="bl">${r[0]}</span><span class="bt"><span class="bf" style="width:${Math.max(2,r[1]/max*100).toFixed(1)}%"></span></span><span class="bv">${r[1]}${unit||""}</span></div>`).join("")}</figure>`;
}
// stakeholder quote
function QUOTE(text,who){return`<blockquote class="quote"><p>${text}</p><footer>— ${who}</footer></blockquote>`}
// notice / rules box
function BOX(title,html){return`<div class="notice"><b>${title}</b>${html}</div>`}

const CONCEPTS=[["2.1","Change"],["2.2","Expression"],["2.3","Identity"],["2.4","Power"],["2.5","Space"],["2.6","Systems"],["2.7","Values and ethics"]];
const CONTENT=[["3.1","Data"],["3.2","Algorithms"],["3.3","Computing"],["3.4","Media"],["3.5","Networks"],["3.6","Artificial intelligence"],["3.7","Robots and autonomous technologies"]];
const CONTEXTS=[["4.1","Cultural"],["4.2","Economic"],["4.3","Environmental"],["4.4","Health"],["4.5","Human knowledge"],["4.6","Political"],["4.7","Social"]];
const CHALLENGES=[["5.1","Global well-being"],["5.2","Governance and human rights"],["5.3","Sustainable development"]];
const NAME=Object.fromEntries([...CONCEPTS,...CONTENT,...CONTEXTS,...CHALLENGES]);

// Markbands (level descriptors from the DS guide; applied holistically, best fit)
const BANDS={
 p1c:{m:8,title:"Paper 1 part (c) markbands",rows:[
  ["0","The work does not reach a standard described by the descriptors below."],
  ["1–2","Limited understanding of the demands of the question. Limited relevant knowledge; mostly descriptive with unsupported generalizations. Limited organization or only a list of items."],
  ["3–4","Some understanding of the demands of the question. Some relevant knowledge, not always accurate or used effectively. Moves beyond description to some analysis, but not always sustained or effective. Partially organized."],
  ["5–6","Adequate understanding of the demands of the question. Adequate and effective analysis supported with relevant and accurate knowledge. Adequately organized."],
  ["7–8","Focused, in-depth understanding of the demands of the question. Evaluation and synthesis effectively and consistently supported with relevant and accurate knowledge. Well-structured and effectively organized."]]},
 hlb:{m:12,title:"HL Paper 1 Section B markbands",rows:[
  ["0","The work does not reach a standard described by the descriptors below."],
  ["1–3","Limited understanding of the demands of the question. Limited relevant knowledge; descriptive, mostly unsupported generalizations. Counter-claims are not considered or addressed. Limited organization."],
  ["4–6","Some understanding of the demands of the question. Some relevant knowledge, not always accurate or used effectively; primarily descriptive with some analysis that is not sustained. Counter-claims are only partially addressed. Partially organized."],
  ["7–9","Adequate understanding of the demands of the question. Adequate and effective analysis supported with relevant and accurate knowledge. Counter-claims are adequately addressed. Adequately organized."],
  ["10–12","Focused, in-depth understanding of the demands of the question. Evaluation and synthesis effectively and consistently supported with relevant and accurate knowledge. Counter-claims are effectively addressed. Well-structured and effectively organized."]]},
 p2q3:{m:6,title:"Paper 2 question 3 markbands",rows:[
  ["0","The response does not reach a standard described by the descriptors below."],
  ["1–2","Relevant points are taken from each source but are mainly listed or described separately. Any comparison or contrast is brief or implied."],
  ["3–4","Clear comparisons and/or contrasts are made between the two sources and are linked to the focus of the question (e.g. the people or groups affected). References to the sources may be implicit."],
  ["5–6","Comparisons and contrasts are developed and explained, exploring the wider significance for the people or groups affected. Explicit references to both sources. Brief development = 5; detailed, in-depth development = 6."]]},
 p2q4:{m:12,title:"Paper 2 question 4 markbands",rows:[
  ["0","The work does not reach a standard described by the descriptors below."],
  ["1–3","Limited understanding of the demands of the question. Limited relevant knowledge. Evidence from sources is not integrated with the response. Limited organization."],
  ["4–6","Some understanding of the demands of the question. Some knowledge, not always relevant or accurate. Evidence from sources is partially integrated. Partially organized."],
  ["7–9","Adequate understanding of the demands of the question. Relevant and accurate knowledge with some lapses. Adequate integration of evidence from the sources, not always sustained. Adequately organized."],
  ["10–12","Focused, in-depth understanding of the demands of the question. Relevant and accurate knowledge throughout, adding insight. Consistent and effective integration of evidence from the sources. Well-structured and effectively organized."]]}
};
