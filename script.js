const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const input_block = document.getElementById("input_block")
const result = document.getElementById("result");
function toggleInput(){
  input_block.innerHTML ="";
  if(btn1.checked){
    input_block.innerHTML = `<button class="choose" id="input">قم بإدخال مقدار الذهب ( مقدر بالغرام )</button>
    <input type="number" id="amount" min="1" value="0">
    <button class="choose" id="output" onclick="calculatebtn1()">حساب مقدار الزكاة</button>
    `
    result.innerHTML = "";    
  }
  else if(btn2.checked){
    input_block.innerHTML = `<button class="choose" id="input">قم بإدخال مقدار الفضة ( مقدرة بالغرام )</button>
    <input type="number" id="amount" min="1" value="0">
    <button class="choose" id="output" onclick="calculatebtn2()">حساب مقدار الزكاة</button>
    `
    result.innerHTML = "";
  }
  else if(btn3.checked){
    input_block.innerHTML = `<button class="choose" id="input">قم بإدخال المقدار المالي ( مقدر بالدينار الجزائري )</button>
    <input type="number" id="amount" min="1" value="0">
    <button class="choose" id="output" onclick="calculatebtn3()">حساب مقدار الزكاة</button>
    `
    result.innerHTML = "";
  }
  else{
    input_block.innerHTML = "";
    result.innerHTML = "";
  }
}

[btn1, btn2, btn3].forEach(btn => {
    btn.addEventListener('change', toggleInput);
  });

function calculatebtn1(){
  const amount = document.getElementById("amount");
  const value = parseFloat(amount.value);
  if(amount.value < 0 || isNaN(amount.value)){
    result.innerHTML = `<h1 id="result">قم بإدخال مقدار <span id="H1446">صالح</span></h1>`;
  }
  else if( amount.value < 85){
    result.innerHTML = `<h1 id="result">المقدار الذي قمت بإدخاله <span id="H1446">لم يبلغ نصاب الزكاة</span></h1>`;
  }
  else{
    result.innerHTML = `<h1 id="result">مقدار الزكاة هو : <span id="H1446">${Math.ceil((value*0.025)*1000)/1000} غرام من الذهب</span></h1>`;
  }
}
function calculatebtn2(){
  const amount = document.getElementById("amount");
  const value = parseFloat(amount.value);
  if(amount.value < 0 || isNaN(amount.value)){
    result.innerHTML = `<h1 id="result">قم بإدخال مقدار <span id="H1446">صالح</span></h1>`;
  }
  else if( amount.value < 595){
    result.innerHTML = `<h1 id="result">المقدار الذي قمت بإدخاله <span id="H1446">لم يبلغ نصاب الزكاة</span></h1>`;
  }
  else{result.innerHTML = `<h1 id="result">مقدار الزكاة هو : <span id="H1446">${Math.ceil((value*0.025)*1000)/1000} غرام من الفضة</span></h1>`;}
}
function calculatebtn3(){
  const amount = document.getElementById("amount");
  const value = parseFloat(amount.value);
  if(amount.value < 0 || isNaN(amount.value)){
    result.innerHTML = `<h1 id="result">قم بإدخال مقدار <span id="H1446">صالح</span></h1>`;
  }
  else if( amount.value < 1105000){
    result.innerHTML = `<h1 id="result">المقدار الذي قمت بإدخاله <span id="H1446">لم يبلغ نصاب الزكاة</span></h1>`;
  }
  else{result.innerHTML = `<h1 id="result">مقدار الزكاة هو : <span id="H1446">${Math.ceil((value*0.025)*1000)/1000} دينار جزائري</span></h1>`;}
}