(function () {
    [...document.querySelectorAll(".navbar-btn")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".active").forEach(section => section.classList.remove("active"));
            document.querySelector(".active-btn")?.classList.remove("active-btn");
            this.classList.add("active-btn");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        document.querySelector(".theme-btn i").classList.toggle("fa-sun");
        updateChartColors();
    });

    let weeklyChart;
    let languageChart;

    $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@AISHIK999/ea25fb4c-4149-493a-9d57-874045ae2a63.json',
        dataType: 'jsonp',
        success: function (response) {
            const labels = response.data.map(item => item.range.date);
            const programmingTime = response.data.map(item => item.grand_total.hours + item.grand_total.minutes / 60);
            labels.forEach((label, index) => labels[index] = label.split('-').reverse().join('-'));
            const ctx = document.getElementById('weeklyChart').getContext('2d');
            const chartData = {
                labels: labels,
                datasets: [{
                    label: 'Programming Time (hours)',
                    data: programmingTime,
                    backgroundColor: getChartColor('backgroundColor'),
                    borderColor: getChartColor('borderColor'),
                    borderWidth: 1,
                    borderRadius: 5,
                    hoverBorderWidth: 3,
                }]
            };
            const chartOptions = {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                indexAxis: 'x',
                maintainAspectRatio: false,
                animation: {
                    duration: 0
                }
            };
            weeklyChart = new Chart(ctx, {
                type: 'line',
                data: chartData,
                options: chartOptions
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });

    $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@AISHIK999/2fd9bad8-8f09-4c43-a047-f032bbbba3eb.json',
        dataType: 'jsonp',
        success: function (response) {
            const sortedData = response.data.sort((a, b) => b.decimal - a.decimal);
            const topTenData = sortedData.slice(0, 10);
            const labels = topTenData.map(item => item.name);
            const times = topTenData.map(item => item.decimal);
            const ctx = document.getElementById('languageChart').getContext('2d');
            const chartData = {
                labels: labels,
                datasets: [{
                    label: 'Time spent by language (hours)',
                    data: times,
                    backgroundColor: getChartColor('backgroundColor'),
                    borderColor: getChartColor('borderColor'),
                    borderWidth: 1,
                    borderRadius: 5,
                    hoverBorderWidth: 3,
                }]
            };
            const chartOptions = {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                indexAxis: 'x',
                maintainAspectRatio: false,
                animation: {
                    duration: 0
                }
            };
            languageChart = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: chartOptions
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });

    function getChartColor(colorType) {
        const isDarkMode = !document.body.classList.contains('light-mode');
        return isDarkMode ? (colorType === 'backgroundColor' ? '#cc241d' : '#dc322f') : (colorType === 'backgroundColor' ? '#98971a' : '#83c07c');
    }

    function updateChartColors() {
        if (weeklyChart) {
            weeklyChart.data.datasets[0].backgroundColor = getChartColor('backgroundColor');
            weeklyChart.data.datasets[0].borderColor = getChartColor('borderColor');
            weeklyChart.update();
        }
        if (languageChart) {
            languageChart.data.datasets[0].backgroundColor = getChartColor('backgroundColor');
            languageChart.data.datasets[0].borderColor = getChartColor('borderColor');
            languageChart.update();
        }
    }
})();
