let loader = $('.loader');
$(document).ready(function () {
    $('#make-order').on('click', function () {
        let url = 'https://testologia.site/checkout';
        let product = $('#order-choice');
        let name = $('#name');
        let phone = $('#phone');
        let flag = true;

        $('.order-errors').hide();
        $('.input').css('border-color', '#821328FF')

        if (!product.val()) {
            product.css('border-color', 'red');
            product.next().show();
            flag = false;
        }
        if (!name.val()) {
            name.css('border-color', 'red');
            name.next().show();
            flag = false;
        }
        if (!phone.val()) {
            phone.css('border-color', 'red');
            phone.next().show();
            flag = false;
        }

        console.log(123)
        if (flag) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: url,
                data: {product: product.val(), name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        let orderForm = $('.order-form')
                        orderForm.html("<h2>Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!</h2>");
                        orderForm.parent().css('align-items', 'center');
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                    }
                    loader.hide();
                });
        }
    })
})