function getNumberInput(inputId) {
    const getValue = document.getElementById(inputId);
    const getStr= getValue.value;
    const getNumber = parseFloat(getStr)
    return getNumber;
}

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText= area;

}

function addToCalculator(areaType, area) {
    const areaSelect = document.getElementById('calculation-entry');
    const concrateName = areaType + " " + area;
    const count = areaSelect.childElementCount
    const p = document.createElement('h1');
    p.classList.add('my-4');
    p.innerHTML =`${count+1}.${areaType}: ${area} cm<sup>2</sup>
    <button id="convert" class= "my-2 btn btn-success">Convert to m<sup>2</sup> </button>
    `
    areaSelect.appendChild(p)

}





function calculateBtn() {
    // Triangle area 
    const base = getNumberInput('triangle-base')
    // console.log(base);
    const height = getNumberInput('triangle-height')
    // console.log(height);
    
    if (isNaN(base) || isNaN(height)) {
        alert("Please provide Number")
        return;
    }


    const area = 0.5 * base * height;
    setElementInnerText('triangle-area', area)

    const angleTriName = document.getElementById("angleName").innerText;
    const angleType = angleTriName;
    const calculatorAdd = addToCalculator(angleType, area);

}

    function calculateBtnRectaangle(){
        //  RectangleArea
    const width = getNumberInput('rectangle-width')
    const length = getNumberInput ('rectangle-length')
    if (isNaN(width) || isNaN(length)) {
        alert("Please provide Number")
        return;
    }
    const rectangleArea = width * length;
    setElementInnerText('rectangle-area', rectangleArea)

    const angleTriName = document.getElementById("angleNameR").innerText;
    const angleType = angleTriName;
    const calculatorAdd = addToCalculator(angleType, rectangleArea);
    }
   
    function calculateBtnParallelogram() {
         // Parallelogram area
    const parallelogramBase = getNumberInput('parallelogram-base');
    const parallelogramHeight = getNumberInput('parallelogram-height');
     
    if (isNaN (parallelogramBase) || isNaN (parallelogramHeight)) {
        alert("Please provide Number")
        return;
    }
    const parallelogramArea = parallelogramBase * parallelogramHeight;
    console.log(parallelogramArea);

    setElementInnerText ('parallelogram-area', parallelogramArea);

    const angleTriName = document.getElementById("angleNameP").innerText;
    const angleType = angleTriName;
    const calculatorAdd = addToCalculator(angleType, parallelogramArea);
    }
   
     function calculateBtnEllipse() {
       // ellipse area 
    const ellipseMajorRadius = getNumberInput('ellipse-major-radius');
    const ellipseMinorRadius =getNumberInput('ellipse-minor-radius');
    if (isNaN(ellipseMajorRadius) || isNaN(ellipseMinorRadius)) {
        alert("Please provide Number")
        return;
    }

    const ellipseArea = 3.1416 * ellipseMajorRadius * ellipseMinorRadius;
    console.log(ellipseArea);

    const ellipseAreaFixed = ellipseArea.toFixed(2);

    setElementInnerText('ellipse-area', ellipseAreaFixed)  

    const angleTriName = document.getElementById("angleNameE").innerText;
    const angleType = angleTriName;
    const calculatorAdd = addToCalculator(angleType, ellipseArea);
    }
  