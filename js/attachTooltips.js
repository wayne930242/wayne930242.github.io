window.addEventListener("load", function (ev) {
    let pattern = /^(fnref)(.+)$/;
    let base = {html: e1 => '#tooltip' + pattern.exec(e1.id)[2].replace(/\./g, "\\.")}
    let extra = {"arrow":true,"animation":"fade","distance":15,"arrowTransform":"scale(2)","placement":"top-start"}
    
    tippy('a[id^="fnref"]',
          Object.assign({},base, extra))
});