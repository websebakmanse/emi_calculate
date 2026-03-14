const calculateEMI = () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);
    const mode = document.getElementById('mode').value;

    if (principal > 0 && rate > 0 && time > 0) {
        if (mode === "year") time = time * 12;

        const monthlyRate = rate / 12 / 100;
        const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, time) / (Math.pow(1 + monthlyRate, time) - 1);
        const totalPayment = emi * time;
        const totalInterest = totalPayment - principal;

        document.getElementById('emiResult').innerText = "₹" + emi.toFixed(2);
        document.getElementById('totalPayment').innerText = "₹" + totalPayment.toFixed(2);
        document.getElementById('totalInterest').innerText = "₹" + totalInterest.toFixed(2);
    } else {
        alert("Please enter valid input values!");
    }
}

const resetCalculator = () => {
    document.getElementById('principal').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('time').value = '';
    document.getElementById('mode').value = 'year';
    document.getElementById('emiResult').innerText = '₹0';
    document.getElementById('totalPayment').innerText = '₹0';
    document.getElementById('totalInterest').innerText = '₹0';
}