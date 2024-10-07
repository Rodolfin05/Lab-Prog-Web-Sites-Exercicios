function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function converterTemperatura(tipo) {
    const inputTemperatura = document.getElementById('name').value;
    const temperatura = parseFloat(inputTemperatura);
    let resultado;

    if (isNaN(temperatura)) {
        document.getElementById('resultado').textContent = "Por favor, insira um número válido.";
        return;
    }

    if (tipo === 'Celsius') {
        resultado = celsiusParaFahrenheit(temperatura);
        document.getElementById('resultado').textContent = `${temperatura}°C equivale a ${resultado.toFixed(2)}°F`;
    } else if (tipo === 'Fahrenheit') {
        resultado = fahrenheitParaCelsius(temperatura);
        document.getElementById('resultado').textContent = `${temperatura}°F equivale a ${resultado.toFixed(2)}°C`;
    }
}

window.onload = function() {
    document.getElementById('Celsius').addEventListener('click', function() {
        converterTemperatura('Celsius');
    });

    document.getElementById('Fahrenheit').addEventListener('click', function() {
        converterTemperatura('Fahrenheit');
    });
};