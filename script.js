$(document).ready(function() {
    $('#phone').mask('+7 (000) 000-0000'); // Маска для телефона

    $('#validationForm').on('submit', function(event) {
        event.preventDefault();

        var isValid = true;

        // Проверка имени
        if ($('#name').val().trim() === '') {
            isValid = false;
            alert('Пожалуйста, введите имя.');
        }

        // Проверка email
        var email = $('#email').val();
        if (email.indexOf('@') === -1) {
            isValid = false;
            alert('Пожалуйста, введите корректный email.');
        }

        // Проверка телефона
        var phone = $('#phone').val();
        var phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{4}$/; // Пример маски для телефона
        if (!phonePattern.test(phone)) {
            isValid = false;
            alert('Пожалуйста, введите корректный телефон.');
        }

        // Проверка ожидаемого оборота
        var revenue = parseFloat($('#revenue').val());
        if (isNaN(revenue)) {
            isValid = false;
            alert('Пожалуйста, введите корректный ожидаемый оборот.');
        }

        // Проверка выбора индустрии
        if ($('#industry').val() === '') {
            isValid = false;
            alert('Пожалуйста, выберите индустрию.');
        }

        // Проверка согласия с правилами
        if (!$('#agreement').is(':checked')) {
            isValid = false;
            alert('Пожалуйста, примите правила сервиса.');
        }

        // Если все поля валидны
        if (isValid) {
            $('#successMessage').show();
        }
    });
});