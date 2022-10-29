getTextFormatted = () => {

    let inc = document.getElementById("incident").value;
    let priority = document.getElementById("priority").value;
    
    document.querySelector("#interaction").innerText = 
    `Service Owner || ${priority} || ${inc}`;
    
    
        
    
    let first = document.getElementById("first").value;
    let numFirst = document.getElementById("numFirst").value;
    let second = document.getElementById("second").value;
    let numSecond = document.getElementById("numSecond").value;
    
    let text = `
    • 1st Attempt:
    
    1st Attempt. Called Service Owner [${first}] at [${numFirst}] and informed about the issue, acknowledged.
    1st Attempt. Called Service Owner [${first}] at [${numFirst}]. No response, left VM.
    1st Attempt. Called Service Owner [${first}] at [${numFirst}]. No response, VM not available.
    
    1st Attempt .Called Secondary [${second}] at [${numSecond}] and informed about the issue, acknowledged.
    1st Attempt .Called Secondary [${second}] at [${numSecond}]. No response, left VM.
    1st Attempt .Called Secondary [${second}] at [${numSecond}]. No response, VM not available.
    
    
    • 2nd Attempt:
    
    2nd Attempt. Called Service Owner [${first}] at [${numFirst}] and informed about the issue, acknowledged.
    2nd Attempt. Called Service Owner [${first}] at [${numFirst}]. No response, left VM.
    2nd Attempt. Called Service Owner [${first}] at [${numFirst}]. No response, VM not available.
    
    2nd Attempt .Called Secondary [${second}] at [${numSecond}] and informed about the issue, acknowledged.
    2nd Attempt .Called Secondary [${second}] at [${numSecond}]. No response, left VM.
    2nd Attempt .Called Secondary [${second}] at [${numSecond}]. No response, VM not available.
    
    `
    
    document.querySelector("#resultFormatted").innerText = text;
    
    }
      
    
    
    removeText = () => {
      document.querySelector("#resultFormatted").innerText = "";
      document.querySelector("#interaction").innerText = "";
    }
    