async function runExample() {
    // Create an array to store input values
    var x = [];

    // Retrieve input values from HTML input elements
    x[0] = document.getElementById('box1').value;
    x[1] = document.getElementById('box2').value;
    x[2] = document.getElementById('box3').value;
    x[3] = document.getElementById('box4').value;
    x[4] = document.getElementById('box5').value;
    x[5] = document.getElementById('box6').value;
    x[6] = document.getElementById('box7').value;
    x[7] = document.getElementById('box8').value;
    x[8] = document.getElementById('box9').value;
    x[9] = document.getElementById('box10').value;
    x[10] = document.getElementById('box11').value;
    x[11] = document.getElementById('box12').value;
    x[12] = document.getElementById('box13').value;
    x[13] = document.getElementById('box14').value;
    x[14] = document.getElementById('box15').value;
    x[15] = document.getElementById('box16').value;
    x[16] = document.getElementById('box17').value;
    x[17] = document.getElementById('box18').value;
    x[18] = document.getElementById('box19').value;
    x[19] = document.getElementById('box20').value;
    x[20] = document.getElementById('box21').value;
    x[21] = document.getElementById('box22').value;
    x[22] = document.getElementById('box23').value;
    x[23] = document.getElementById('box24').value;
    x[24] = document.getElementById('box25').value;
    x[25] = document.getElementById('box26').value;
    x[26] = document.getElementById('box27').value;
    x[27] = document.getElementById('box28').value;
    x[28] = document.getElementById('box29').value;
    x[29] = document.getElementById('box30').value;
    x[30] = document.getElementById('box31').value;
    x[31] = document.getElementById('box32').value;

    console.log('Input values:', x);


    // Create a Float32Array from the input values
    let tensorX = new onnx.Tensor(x, 'float32', [1, 32]);

    // Create a new inference session
    let session = new onnx.InferenceSession();

    // Load the ONNX model
    await session.loadModel("./DLnet_StudentData.onnx");

    // Run the model with the input tensor
    let outputMap = await session.run([tensorX]);
    let outputData = outputMap.get('output1');

    // Display the output tensor values in the HTML
    let predictions = document.getElementById('predictions');
    predictions.innerHTML = ` <hr> Got an output tensor with values: <br/>
   <table>
     <tr>
       <td>  Predicted Student Performance  </td>
       <td id="td0">  ${outputData.data[0].toFixed(2)}  </td>
     </tr>
  </table>`;
}
