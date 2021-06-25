const ctx = document.getElementById('usaChart').getContext('2d')

function myChart(){ 
    fetch(`https://covid19.mathdro.id/api/countries/brazil`)
        .then(res => res.json())
        .then(res => {
            let result = res
            let arr = []

            for (const i in result) {
                arr.push(result)
            }

            let recover = arr[0].recovered.value
            let deaths = arr[0].deaths.value
            let confirmed = arr[0].confirmed.value
            

            new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ['Confirm', 'Death', 'Recovered'],
                    datasets: [{
                        data: [
                            confirmed,
                            deaths,
                            recover
                        ],
                        backgroundColor: [
                            'red',
                            'black',
                            'aqua'
                        ]
                    }]
                },

                options: {
                    title: {
                        display: true,
                        text: 'Covid 19 in USA',
                        fontSize: 25,
                        fontFamily:'Arial'
                    },
                    legend: {
                        position:'right'
                    }
                }
            })
        })
}

export { myChart }