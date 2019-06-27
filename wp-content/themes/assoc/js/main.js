function validateCallbeck() {
    var form = $('.callback-sub');
    if(form.find('[name=nameOrg]').val()=='') {
        form.find('[name=nameOrg]').css('border-color', 'red');
        return false;
    } else {
        form.find('[name=nameOrg]').css('border-color', 'rgba(0, 0, 0, 0.1)');
    }

    if(form.find('[name=namePeapl]').val()=='') {
        form.find('[name=namePeapl]').css('border-color', 'red');
        return false;
    } else {
        form.find('[name=namePeapl]').css('border-color', 'rgba(0, 0, 0, 0.1)');
    }

    var phone = form.find('[name=phone]').val();
    var re = /^\d[\d\(\)\ -]{8,14}\d$/;
    var valid = re.test(phone);
    if (valid) {
        form.find('[name=phone]').css('border-color', 'rgba(0, 0, 0, 0.1)');
    } else {
        form.find('[name=phone]').css('border-color', 'red');
        return false;
    }

    var email = form.find('[name=email]').val();
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var valid_ = re.test(email);
    if (valid_) {
        form.find('[name=email]').css('border-color', 'rgba(0, 0, 0, 0.1)');
    } else {
        form.find('[name=email]').css('border-color', 'red');
        return false;
    }

    return true;
}

function validateCallbeckEmail() {
    var form = $('.callback-email');

    var email = form.find('[name=email]').val();
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var valid_ = re.test(email);
    if (valid_) {
        form.find('[name=email]').css('border-color', 'rgba(0, 0, 0, 0.1)');
    } else {
        form.find('[name=email]').css('border-color', 'red');
        return false;
    }

    return true;
}

$(document).ready(function() {
    $('.callback-sub').submit(function (e) {
        e.preventDefault();
        var $form = $(this);

        if(validateCallbeck()) {
            var dataObj = {};
            var formData = $form.serializeArray();
            $(formData).each(function (i, field) {
                dataObj[field.name] = field.value;
            });

            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: '/wp-admin/admin-ajax.php',
                data: {
                    'action': 'send_callback_action',
                    'formData': dataObj
                },
                success: function (data) {
                    $("#senk-modal-overlay").fadeIn(400);
                    $("#senk-modal").fadeIn(400);
                    $form[0].reset();
                }
            });
        }
    });

    $('.callback-email').submit(function (e) {
        e.preventDefault();
        var $form = $(this);

        if(validateCallbeckEmail()) {
            var dataObj = {};
            var formData = $form.serializeArray();
            $(formData).each(function (i, field) {
                dataObj[field.name] = field.value;
            });

            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: '/wp-admin/admin-ajax.php',
                data: {
                    'action': 'send_callback_email_action',
                    'formData': dataObj
                },
                success: function (data) {
                    $(".success-form-callback").fadeIn(400);
                    $form[0].reset();
                    setTimeout(function () {
                        $(".success-form-callback").fadeOut(400);
                    }, 2000);
                }
            });
        }
    });

    $("#senk-modal-overlay").click(function (e) {
        e.preventDefault();
        $("#senk-modal-overlay").fadeOut(400);
        $("#senk-modal").fadeOut(400);
    })
});
