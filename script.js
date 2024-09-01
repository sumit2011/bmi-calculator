const calculateBtn = document.querySelector('#calculate_bmi');
const bmiresult = document.querySelector('#bmi_result');
const form = document.querySelector('form');

calculateBtn.addEventListener('click' , (event) => {
    const weight = document.querySelector('#weightField').value;
    const height = document.querySelector('#heightField').value;
    console.log(height);
    console.log(weight);

    const result = weight / (height*height);

    let bmiMsg;
    let msgColor = 'text-danger';

    if(result < 18.95){
        bmiMsg = 'Thinness';
    }
    else if (result >= 18.5 && result <= 25){
        bmiMsg = 'Normal';
        msgColor='text-success';
    }
    else if (result >  25 && result <= 30){
        bmiMsg = 'Overweight';
    }
    else if(result > 30){
        bmiMsg = 'Obese';
    }
    
    bmiresult.innerHTML= `<p id="bmi-result"> BMI = <b>${result}</b> (<span class="${msgColor}"><b>${bmiMsg}</b></span>)</p>`;
});


// prevent page from loading
form.addEventListener('submit', e=> {
    e.preventDefault();
})


