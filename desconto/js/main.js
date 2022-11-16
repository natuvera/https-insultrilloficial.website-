$(document).ready(function () {
    var kit_1_twich = false;
    var kit_2_twich = false;
    var kit_3_twich = false;

    var potes_3_atual = $('#kit3').attr('data-number-atual');
    var potes_3_timer = $('#kit3').attr('data-timer');
    var potes_2_atual = $('#kit2').attr('data-number-atual');
    var potes_2_timer = $('#kit2').attr('data-timer');
    var potes_1_atual = $('#kit1').attr('data-number-atual');
    var potes_1_timer = $('#kit1').attr('data-timer');

    console.log('Timer:' + potes_1_timer + ' kit 1:' + potes_1_atual);
    console.log('Timer:' + potes_2_timer + ' kit 2:' + potes_2_atual);
    console.log('Timer:' + potes_3_timer + ' kit 3:' + potes_3_atual);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Calculo
    $(window).scroll(function () {
        if ($('.select').visible(true, false, 'both')) {
            // setTimeout(function () {
            //     if($('#kit1 .potes span').text() == '2'){
            //         $('#kit1 .potes span').html('1');
            //         $('#kit1 .fill').css('width', ((((250 / 300) * (10)) / (250)) * 200)+'%');
            //     }
            // },500);
            // setTimeout(function () {
            //     if($('#kit1 .potes span').text() == '1'){
            //         // Lobibox.notify("error", {
            //         //     pauseDelayOnHover: false,
            //         //     continueDelayOnInactiveTab: true,
            //         //     showAfterPrevious: false,
            //         //     rounded: false,
            //         //     delayIndicator: true,
            //         //     sound: true,
            //         //     soundPath: "vetor/sounds/",
            //         //     icon: true,
            //         //     img: "img/Icone56.png",
            //         //     showClass: 'fadeIn',
            //         //     hideClass: 'fadeOut',
            //         //     size: 'mini',
            //         //     closable: false,
            //         //     position: 'bottom right',
            //         //     delay: 5000,
            //         //     title: termoRandom('<b>Kit com 1 Pote ESGOTOU!</b>'),
            //         //     onClickUrl: '#ok',
            //         // });
            //         $('#kit1 .potes span').html('0');
            //         $('.esgotado').css('opacity','1');
            //         $('.purchase li:last-child .box .content .button a .cta').css('animation','none');
            //         $('#kit1 .fill').css('width', '0%');
            //     }
            // },1000);
        };
        if ($('#kit1').visible(true, false, 'both')) {
            kit_1_twich = true;
            setTimeout(function () {
                $('#kit1 .fill').css('width', ((((250 / 300) * (potes_1_atual)) / (250)) * 200) + '%');
            }, 500);
        };
        if ($('#kit2').visible(true, false, 'both')) {
            kit_2_twich = true;
            setTimeout(function () {
                $('#kit2 .fill').css('width', ((((250 / 300) * (potes_2_atual)) / (250)) * 200) + '%');
            }, 500);
        };
        if ($('#kit3').visible(true, false, 'both')) {
            kit_3_twich = true;
            setTimeout(function () {
                $('#kit3 .fill').css('width', ((((250 / 300) * (potes_3_atual)) / (250)) * 200) + '%');
            }, 500);
        };
    });

    setInterval(function () {
        if (kit_1_twich == true) {

            if (potes_1_atual >= 2) {
                potes_1_timer = potes_1_timer - 1;
                potes_1_atual = potes_1_atual - 1;

                console.log('Timer:' + potes_1_timer + ' kit 1:' + potes_1_atual);
                $('#kit1 .fill').css('width', ((((250 / 300) * (potes_1_atual)) / (250)) * 200) + '%');
                $('#kit1 .potes span').html(parseInt(potes_1_atual));
                // potes_1_atual = parseInt((100 / 300) * (potes_1_timer));
            };
        };

        if (kit_2_twich == true) {

            if (potes_2_atual >= 2) {
                potes_2_timer = potes_2_timer - 1;
                potes_2_atual = potes_2_atual - 1;

                console.log('Timer:' + potes_2_timer + ' kit 2:' + potes_2_atual);
                $('#kit2 .fill').css('width', ((((250 / 300) * (potes_2_atual)) / (250)) * 200) + '%');
                $('#kit2 .potes span').html(parseInt(potes_2_atual));
                // potes_2_atual = parseInt((100 / 300) * (potes_2_timer));
            };
        };

        if (kit_3_twich == true) {
            if (potes_3_atual >= 2) {
                potes_3_timer = potes_3_timer - 1;
                potes_3_atual = potes_3_atual - 1;

                console.log('Timer:' + potes_3_timer + ' kit 3:' + potes_3_atual);
                $('#kit3 .fill').css('width', ((((250 / 300) * (potes_3_atual)) / (250)) * 200) + '%');
                $('#kit3 .potes span').html(parseInt(potes_3_atual));

                // potes_3_atual = parseInt((100 / 300) * (potes_3_timer));
            };
        };

    }, 10000);
    $meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];
    $('.lobibox-notify-wrapper').css('bottom', '65px');

    var date = new Date();
    console.log();
    $('.date_box').html(date.getDate() + ' de ' + $meses[date.getMonth()] + ' de ' + date.getFullYear());

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var count_pote = 700;
    setInterval(function () {
        if (count_pote > 127) {
            var number_down = getRandomInt(1, 5);
            $('.timerPote .value').html(count_pote - number_down);
            count_pote = count_pote - number_down;
        }

    }, 1800);

    var mousex = 0;
    var mousey = 0;
    var active = 0;
    $('.back, .gif').click(function () {
        $('.modal_exit').css({
            'display': 'block'
        })
        setTimeout(function () {
            $('.modal_exit').css({
                'opacity': '1'
            })
        }, 0.001 * 60 * 1000);
    });
    setTimeout(function () {
        $(window).mousemove(function (mouse) {

            mousey = mouse.pageY - $(window).scrollTop();
            if (mousey <= 20 && active !== 1) {
                console.log('exit');
                active = 1;
                $('.modal_exit').css({
                    'display': 'block'
                })
                setTimeout(function () {
                    $('.modal_exit').css({
                        'opacity': '1'
                    })
                }, 0.001 * 60 * 1000);

            }
        });
    }, 0.1 * 60 * 1000);
    $('.modal_exit .close, #BtnNaoQueroDesconto').click(function () {
        $('.modal_exit').removeAttr('style');
    });

    var cidade;
    var estado;

    function JSONip(data) {
        cidade = data.city;
        estado = data.region_name;
    }

    function termoRandom(string) {
        var string = string.replace(/\[cidade\]/g, cidade);
        var string = string.replace(/\[estado\]/g, estado);
        if (string.indexOf("|") != -1) {
            var nomeString = string.split("|");
            var nomes = nomeString[1];
            var nome = nomes.split(",");
            var number = Math.floor(Math.random() * nome.length);
            var nomeFinal = nome[number];
            return (nomeString[0] + nomeFinal + nomeString[2]);
        } else {
            return string;
        }
    }

    function lobibox_sales() {
        Lobibox.notify("success", {
            pauseDelayOnHover: false,
            continueDelayOnInactiveTab: true,
            showAfterPrevious: false,
            rounded: false,
            delayIndicator: true,
            sound: true,
            soundPath: "vetor/sounds/",
            icon: true,
            img: "img/Icone54.png",
            showClass: 'fadeInRight',
            hideClass: 'fadeOutRight',
            size: 'mini',
            closable: false,
            position: 'bottom right',
            delay: 5000,
            title: termoRandom('<b class="name">|Kelly,Rafaela,Sarah,Beatrice,Giovanna,Gabriela,Beatrice,Leila,Amanda,Laura,Evelyn,Sophia,Maria,Nicole,Lara,Giovana,Sofia,Ana,Lavinia,Rafaela|</b>  <b class="city"> de ' + termoRandom('|Acrelândia - AC,Assis Brasil - AC,Água Branca - AL,Anadia - AL,Arapiraca - AL,Atalaia - AL,Barra de Santo Antônio - AL,Barra de São Miguel - AL,Rio Preto da Eva - AM,Santa Isabel do Rio Negro - AM,Santo Antônio do Içá - AM,São Gabriel da Cachoeira - AM,São Paulo de Olivença - AM,São Sebastião do Uatumã - AM,Amapá - AP,Calçoene - AP,Cutias - AP,Ferreira Gomes - AP,Itaubal - AP,Laranjal do Jari - AP,Candiba - BA,Cândido Sales - BA,Cansanção - BA,Canudos - BA,Brasília - DF,Água Comprida - MG,Aguanil - MG,Águas Formosas - MG,Águas Vermelhas - MG,Aimorés - MG,Aiuruoca - MG,Alagoa - MG,Albertina - MG,Além Paraíba - MG,Alfenas - MG|') + '</b> <b class="plan">Comprou o ' + termoRandom('|Kit 3 da Insulmax|') + '</b>'),
            onClickUrl: '#ok',
        });
    }
    setInterval(function () {
        var get = getRandomInt(0, 10);
        console.log(get)
        if (get >= 1) {
            lobibox_sales();
        }
    }, 9 * 1000);
    //   setTimeout(function () {
    //     lobibox_sales();
    // }, 5 * 60 * 60);
    //   setTimeout(function () {
    //       lobibox_sales();
    //   }, 15 * 60 * 60);
    //   setTimeout(function () {
    //       lobibox_sales();
    //   }, 30 * 60 * 60);
    //   setTimeout(function () {
    //       lobibox_sales();
    //   }, 45 * 60 * 60);
    //   setTimeout(function () {
    //       lobibox_sales();
    //   }, 75 * 60 * 60);
    //   setTimeout(function () {
    //       lobibox_sales();
    //   }, 105 * 60 * 60);

    /* Kit 5 potes */
    // var potes_3_atual = $('#kit3').attr('data-number-atual');
    // var potes_3_timer = $('#kit3').attr('data-timer');
    // setTimeout(function(){
    //     $('#kit3 .fill').css('width', ((((432 / 1500) * (potes_3_timer)) / (432)) * 100)+'%');
    //     $('#kit2 .fill').css('width', (((356 / 1500) * (potes_2_timer)) / (356) * 100)+'%');
    //     $('#kit1 .fill').css('width', (((197 / 720) * (potes_1_timer)) / (197) * 100)+'%');
    // },2500);
    //
    // setInterval(function(){
    //     console.log('kit 5 potes: '+(((356 / 1500) * (potes_3_timer) / (356)) * 100)+'%');
    //     console.log('kit 5 potes: '+potes_3_timer);
    //     if(potes_3_timer > 70){
    //       $('#kit3 .potes span').html(parseInt(potes_3_atual));
    //       $('#kit3 .fill').css('width', ((((356 / 1500) * (potes_3_timer)) / (356)) * 100)+'%');
    //       potes_3_timer = potes_3_timer - 1;
    //       potes_3_atual = parseInt((356 / 1500) * (potes_3_timer));
    //     };
    //
    // }, 0.01 * 60 * 1000);
    //
    // /* Kit 3 potes */
    // var potes_2_atual = $('#kit2').attr('data-number-atual');
    // var potes_2_timer = $('#kit2').attr('data-timer');
    //
    // setInterval(function(){
    //     console.log('kit 3 potes: '+(((356 / 1500) * (potes_2_timer) / (356)) * 100)+'%');
    //     console.log('kit 3 potes: '+potes_2_timer);
    //     if(potes_2_timer > 70){
    //       $('#kit2 .potes span').html(parseInt(potes_2_atual));
    //       $('#kit2 .fill').css('width', (((356 / 1500) * (potes_2_timer)) / (356) * 100)+'%');
    //       potes_2_timer = potes_2_timer - 1;
    //       potes_2_atual = parseInt((356 / 1500) * (potes_2_timer));
    //     };
    //
    // }, 0.01 * 60 * 1000);
    //
    // /* Kit 1 potes */
    // var potes_1_atual = $('#kit1').attr('data-number-atual');
    // var potes_1_timer = $('#kit1').attr('data-timer');
    //
    // setInterval(function(){
    //     console.log('kits 1 pote: '+(((197 / 720) * (potes_1_timer) / (197)) * 100)+'%');
    //     console.log('kits 1 pote: '+potes_1_timer);
    //     if(potes_1_timer > 70){
    //       $('#kit1 .potes span').html(parseInt(potes_1_atual));
    //       $('#kit1 .fill').css('width', (((197 / 720) * (potes_1_timer)) / (197) * 100)+'%');
    //       potes_1_timer = potes_1_timer - 1;
    //       potes_1_atual = parseInt((197 / 720) * (potes_1_timer));
    //     }else {
    //
    //     };
    //
    // }, 0.01 * 60 * 1000);

})
