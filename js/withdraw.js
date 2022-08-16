document.getElementById('btn-withdraw').addEventListener('click', function () {
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const WithdrawTotalString = WithdrawTotalElement.value;
    const WithdrawTotal = parseFloat(WithdrawTotalString);//taka collected
    WithdrawTotalElement.value = '';
    if (isNaN(WithdrawTotal)) {
        alert('Please enter valid amount');
        return;
    }
    const amountWithdrawElement = document.getElementById('sum-withdraw');
    const amountWithdrawString = amountWithdrawElement.innerText;
    const amountWithdraw = parseFloat(amountWithdrawString);



    const beforeWithdrawBalanceElement = document.getElementById('balance-total');
    const beforeWithdrawBalanceString = beforeWithdrawBalanceElement.innerText;
    const beforeWithdrawBalance = parseFloat(beforeWithdrawBalanceString);// collect tka

    if (WithdrawTotal > beforeWithdrawBalance) {
        alert('dose not available balance')
        return;
    }
    amountWithdrawElement.innerText = amountWithdraw + WithdrawTotal;
    beforeWithdrawBalanceElement.innerText = beforeWithdrawBalance - WithdrawTotal;







})