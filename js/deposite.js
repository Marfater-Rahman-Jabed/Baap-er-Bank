document.getElementById('btn-deposite').addEventListener('click', function () {
    const DepositeAmount = document.getElementById('deposite-taka');
    const DepositeTaka = DepositeAmount.value;
    const depositeUpdateElement = document.getElementById('Deposite-Update');
    const moldon = parseFloat(DepositeTaka);
    const depositeUpdate = depositeUpdateElement.innerText;
    const taka = parseFloat(depositeUpdate);
    DepositeAmount.value = '';
    if (isNaN(moldon)) {
        alert('enter valid amount');
        return;
    }
    depositeUpdateElement.innerText = taka + moldon;

    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalance = previousBalance + parseFloat(DepositeTaka);
    previousBalanceElement.innerText = currentBalance;







})