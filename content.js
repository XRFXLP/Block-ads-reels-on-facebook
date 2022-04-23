window.onload =() => {
    function reallyBlockIt(){
        const reels = document.getElementsByClassName('oajrlxb2 g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv mg4g778l pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb n00je7tq arfg74bv qs9ysxi8 k77z8yql btwxx1t3 abiwlrkh p8dawk7l bnpdmtie lzcic4wl bp9cbjyn j83agx80');
        if(reels !== undefined && reels.length > 0)
            reels[0].parentElement.parentElement.parentElement.parentElement.innerHTML='';
        const sponsored = document.querySelector('[aria-label="Sponsored"]');
//         const sponsored1 = document.querySelector('[aria-label="label"]');
        if(sponsored)
            sponsored.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.innerHTML = ''
//         if(sponsored1)
//             sponsored1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.innerHTML = '';
        setTimeout(reallyBlockIt, 200);
    }
    reallyBlockIt();
}
