/*TODO:
STEPS:
    SET LEARNING RATE
    BEGIN TRAINING LOOP
        WEIGHT THE INPUTS
        SUM THE WEIGHTED INPUTS
        PUSH THROUGH ACTIVATION FUNCTION
        UPDATE WEIGHTS WITH LEARNING RULE
USER CONTROLS - INPUTS X1, X2 + TARGET OUTPUT
                LEARNING RATE
                NEXT BUTTON
DISPLAY THE STEPS BENEATH ANIMATION
*/
let step = 0;
let lblControls, learnRate, lblsldrLr, sldrLr, lblLr, btnNext, X1, lblX1, X2, lblX2;
function setup(){
    cnv = createCanvas(700,500);
    cnv.parent('arch');
    inputControls();
    outputDisplay();


}
function draw(){
   // console.log(mouseX, mouseY);
     background(255);
    line(500,0,500,500);
    line(0,400,500,400);
    if(step == 0){
       stepInit();
    }else if(step == 1){
        stepOne();
    }else if(step == 2){
        stepTwo();
    }else if(step == 3){
        stepThree();
    }else if(step == 4){
       stepFour();
    }else if(step == 5){
      stepFive();
    }else if(step == 6){
        stepSix();
    }else if(step == 7){
        stepSeven();
    }

}
function outputDisplay(){
    lblDescription = createElement('label', '');
    lblDescription.position(10,10);
    lblInp = createElement('label', 'Inputs: X1: 20, X2: 30');
    lblInp.position(10,30);
    lblDesOut = createElement('label', 'Target Output: 1');
    lblDesOut.position(10,50);
    wocB = createElement('label', '');
    wocB.position(245, 165);
    wocX1 = createElement('label', '');
    wocX1.position(150, 175);
    wocX2 = createElement('label', '');
    wocX2.position(150, 255);
    output = createElement('label', '');
    output.position(462, 225);
}
function inputControls(){
     //create heading for users benefit
    lblControls = createElement('h3', 'Controls: ');
    //position on top of demo
    lblControls.position(515,0);
    //display label and slider for the the learning rate of the perceptron
    lblsldrLr = createElement('label', 'Learning Rate: ');
    lblsldrLr.position(515,50);
    sldrLr = createSlider(0,10, 1);
    sldrLr.position(lblsldrLr.x + lblsldrLr.width +5 ,50);
    sldrLr.size(50, AUTO);
    sldrLr.input(getLearningRate);
    //display the value of the slider
    lblLr = createElement('label', '0');
    lblLr.position(sldrLr.x + sldrLr.width +8 ,50);
    lblsldrLr.hide();
    sldrLr.hide();
    lblLr.hide();
    btnNext = createButton('Next Step');
    btnNext.position(575,50);
    //function show points called when the button is pressed by user
    btnNext.mousePressed(nextStep);
}
function getLearningRate(){
    learnRate = this.value()/10;
    //display the learning rate to the user as the slider doesnt show it
     lblLr.html(learnRate);
}
function nextStep(){
    if(step == 7){
        step = 3;
    }else if(step == 2 && isNaN(learnRate)){
        lblsldrLr.style("color", "#B20000");
    }else{
       step++;
    }
     console.log(step);
}
function displayArchit(){
    lblDescription.html('Training Set:');
    lblInp.html('Inputs: X1: 20, X2: 30');
    lblDesOut.html('Target Output: 1');
    //weight of connection lines
    let woc1 = line(100,175,300,225);
    let woc2 = line(100,275,300,225);
     //output arrow
    let outputArr = line(300,225,450,225) + line(445,220,450,225) + line(445,230,450,225);
    //input circles
    ellipse(100,175,50,50);
    text('X1', 93, 180);
    ellipse(100,275,50,50);
    text('X2', 93, 280);
    ellipse(300,225,50,50);
    if(step >= 1){
        line(200,150,282,207);
        ellipse(200,150,50,50);
        text('1', 195, 155);
    }
    if (step == 1 || step == 2){
        wocB.html('0.3');
        wocX1.html('0.7');
        wocX2.html('-1');
        X1 = ellipse(50,175,30,30);
        lblX1 = text('20', 43, 180);
        X2 = ellipse(50,275,30,30);
        lblX2 = text('30', 43, 280);
    }else if(step == 3){
        X1 = ellipse(200,200,30,30);
        lblX1 = text('14', 195, 205);
        X2 = ellipse(200,250,30,30);
        lblX2 = text('-30', 193, 255);
        weighBias = ellipse(258,189,30,30);
        lblweighBias = text('0.3', 250, 192);
    }else if(step == 4){
        text('-15.7',285,230);
    }else if(step == 5){
        text('-15.7',285,230);
        output.html('0');
    }

}
function stepInit(){
    //show training set and arch structure
    displayArchit();

    lblStep = createElement('label', '');
    lblStep.position(15,415);
    lblStepDesc = createElement('label', '');
    lblStepDesc.position(25,435);
    lblStepDetail = createElement('label', '');
    lblStepDetail.position(25,455);
}
function stepOne(){
    displayArchit();
    lblStep.html('Step 1: ');
    lblStepDesc.html('Initialise Weights of Connections and Bias');
    lblStepDetail.html('- The Weights can be initialised using a random number between -1 and 1<br />- The Bias input is always 1');

}
function stepTwo(){
    displayArchit();
    lblStep.html('Step 2: ');
    lblStepDesc.html('Set Learning Rate');
    lblStepDesc.html('The Learning Rate of the Perceptron is set');
    lblStepDetail.html('- A positive Coefficient between 0 and 1 ')
    lblsldrLr.show();
    sldrLr.show();
    lblLr.show();
    btnNext.position(575,80);
}
function stepThree(){
    displayArchit();
    lblStep.html('Step 3: ');
    lblStepDesc.html('Inputs are Weighted');
    lblStepDetail.html('X1 = 20 * 0.7 <br /> X2 = 30 * -1 <br /> Bias = 1 * 0.3');
    lblsldrLr.hide();
    sldrLr.hide();
    lblLr.hide();
    btnNext.position(575,50);
}
function stepFour(){
    displayArchit();
    lblStep.html('Step 4: ');
    lblStepDesc.html('Weighted Inputs are Summed');
    lblStepDetail.html('X1 + X2 + Bias<br / > 14 + -30 + 0.3');
}
function stepFive(){
    displayArchit();
    lblStep.html('Step 5: ');
    lblStepDesc.html('Sum goes through Activation Function');
    lblStepDetail.html('We can use the Heaviside step function as the perceptrons activation <br/>- if 0 or below, Output = 0<br/>- if 0 or above, Output = 1');
}
function stepSix(){
    displayArchit();
    lblStep.html('Step 6: ');
    lblStepDesc.html('Weights of Connections are Updated');
    lblStepDetail.html('');
}
function stepSeven(){
    displayArchit();
    lblStep.html('Step 7: ');
    lblStepDesc.html('Terminating Check');
}
