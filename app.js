const b = document.getElementbyClass(".all-buttons");

const d = document.getElementbyId("#purchaseForm");

b.addEventListener("click",function() {
    setTimeout(swapper(d),2000);
   d.toggle('.invisible') });
    function swapper(e) {
        e.toggle('.invisible');
     };
    