function PrintSummaryData(){

    const sumData = new URLSearchParams(window.location.search);

    // console.log(sumData.toString());
 
    for (const item of sumData) {
        
        window.document.getElementById(item[0]).innerHTML = item[0] + " = " + item[1];

    }    
}