window.onload = function () {
    getStatus();
}

function getStatus() {
    fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil') //busca os dados da api
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            let confirmed = data.data.confirmed;
            let death = data.data.deaths;
            let recovered = data.data.recovered;

            document.getElementById("confirmed-cases").innerHTML = confirmed.toLocaleString('pt-BR');
            document.getElementById("death-cases").innerHTML = death.toLocaleString('pt-BR');
            document.getElementById("recovered-cases").innerHTML = recovered.toLocaleString('pt-BR'); //popula os elementos com os dados
        })
        .catch(function () {
            console.log("erro")
        })

    setTimeout(getStatus, 43200000); // faz update da busca na api a cada 12hrs
}