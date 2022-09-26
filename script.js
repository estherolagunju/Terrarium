dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement){

   var position1 = 0,
    position2 = 0,
    position3 = 0,
    position4 = 0;

   document.getElementById(terrariumElement).onpinterdrag= pointDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        position3 = e.clientX;
        position4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        position1 = position3 - e.clientX;
        position2 = position4 - e.clientY;
        position3 = e.clientX;
        position4 = e.clientY;
        
        terrariumElement.style.top = terrariumElement.offsetTop - position2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - position1 + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
};
console.log(position1, position2, position3, position4);