//Ação do botão voltar das páginas

function goBack() {
    window.history.back();
    if (window.location.hash != '') {
        changeTabsLinks();
    }
};
$(document).ready(function () {
    //Inicializa os tooltips (poucas páginas utilizam tooltips)
    $('[data-toggle="tooltip"]').tooltip();
    //Ações para ocultar ou expandir detalhes
    $("#detalhes").on("show.bs.collapse", function () {
        $("a.detalhesLabel").text('Ocultar detalhes');
    })
    $("#detalhes").on("hide.bs.collapse", function () {
        $("a.detalhesLabel").text('Ver detalhes');
    })

  

    //muda label do dropdown selecionado (menus navbar)
    $("#nav-dropdown-tratamento a").on('click', function () {
        location.href = this.target; //pega o target do elemento a e coloca na URL para que não se perca o histórico do navegador
        var selText = $(this).text(); //pega o texto do titulo do elemento a clicado
        $("#nav-dropdown-tratamento a").removeClass("item-drop-selected"); //desmarca outro elemento a que possa já estar selecionado
        $(this).addClass('item-drop-selected');//torna o elemento clicado como selecionado (barrinha azul lateral)
        $(this).parents("#nav-dropdown-select").find(".dropdown-toggle").html(selText);//coloca o texto do elemento clicado como nome da aba (dentro do quadro azul)
    });

    //esse id navbarDropdownMenuLink só deve existir em um drop unico na pagina
    $("#navbarDropdownMenuLink").on('click', function () { //quando um dropdown é clicado
        $(".main-option a").removeClass("active");//remove o active da aba que pode já estar clicado(azul)
        $(".main-option a").removeClass("show");//remove o active da aba que pode já estar clicado
        $(this).addClass('active');//torna esta aba clicada como active (azul)
    });

    //quando tem mais de um menu dropdown na mesma página
    $('.nav-dropdown-multiples a').on('click', function () {
        location.href = this.target;//pega o target do elemento a e coloca na URL para que não se perca o histórico do navegador
        var selText = $(this).text();//pega o texto do titulo do elemento a clicado

        //a class nav-dropdown-select deve estar nos li dos menus dropdown

        $('.nav-dropdown-select').not($(this).parents('.nav-dropdown-select')).each(function () { //seleciona os demais menus drops que não sejam o que foi clicado
            var label = $(this).find(".dropdown-toggle").attr("aria-label");//pega o label destes menus e recoloca como titulo neles para caso eles estivessem com outro titulo por estarem clicados e retornem a sua formação original
            $(this).find(".dropdown-toggle").html(label);//coloca este label correto nos menus que não foram clicados
        });

        //a class nav-dropdown-multiples deve estar no div que contem as opções/links do menu dropdown
        $('.nav-dropdown-multiples a').not(this).each(function () { //pega os links do drop que não seja o que foi clicado
            $(this).removeClass("item-drop-selected");//desmarca o link que pode ja estar clicado
        });
        $(this).addClass('item-drop-selected');//marca o link clicado como selecionado
        $(this).parents(".nav-dropdown-select").find(".dropdown-toggle").html(selText); //adiciona o label do link clicado ao titulo da aba azul

    });

    //quando uma aba que não é drop é clicada

    $('.main-option a').on('click', function (e) {
        $('.nav-dropdown-select').not($(this).parents('.nav-dropdown-select')).each(function () {
            var label = $(this).find(".dropdown-toggle").attr("aria-label");
            $(this).find(".dropdown-toggle").html(label);
        });
        var target = $(e.currentTarget).attr("href") // activated tab
        location.href = target;

        var label = $("#nav-dropdown-select").find(".dropdown-toggle").attr("aria-label");
        $("#nav-dropdown-select").find(".dropdown-toggle").html(label);
        $("#nav-dropdown-tratamento a").removeClass("item-drop-selected");
    });

    //quando abre uma pagina sem nenhum hash na url
    
    if ($("a.link-accordeon").prop("href") ){
        //se existe um menu com abas na pagina
        console.log('entrou');
        var hrefLink = $("a.link-accordeon.active").prop("href");//pega o href da aba definida como active (que deve inicializar aberta por default)
        history.replaceState({}, null, hrefLink);//adiciona na url para que o histórico nao se perca
    }

    
    console.log('Location ', window.location.hash);

    var hash = window.location.hash;

    if (hash == '') {//quando abre uma pagina sem nenhum hash na url
        console.log('entrou'); 
        if ($(".main-option.active").prop("href") ){
            //se existe um menu com abas na pagina
            var hrefLink = $(".main-option.active").prop("href");//pega o href da aba definida como active (que deve inicializar aberta por default)
            history.replaceState({}, null, hrefLink);//adiciona na url para que o histórico nao se perca
        }

    } 
    else if (hash.includes("_")) {
        changeLinks(); // hash precisa ter _
    } 
    else {
        changeTabsLinks(); //se ja tem hash na url, executa as ações da função changeTabsLinks
    } 
});


function refreshTab() {
    //funcao deve ser chamada quando há troca de links na mesma pagina para atualizar o href do navegador
    setTimeout(location.reload.bind(location), 8)
}

async function changeTabsLinks() {
    if (window.location.hash != '') { //quando a url tem um hashchangeTabsLinks
        //console.log('window.location.hash ', window.location.hash )
        var hashes = window.location.hash.split('&'); //separo os hashs entre &
        var hashTabId = hashes[0];//primeiro #
        var hashFieldInsideTabId = hashes[1];//segundo #
        var hashDeepInsideTab = null; //pode ser que exista ou nao um terceiro #

        if (hashes.length > 2) {
            ;//se existe uma terceira #
            hashDeepInsideTab = hashes[2]; //terceira #
        }

        if ($("a[target='" + window.location.hash + "']").length > 0) { //se tem um elemento a com target igual a url inteira (elemento dentro de um drop)

            var selText = $("a[target='" + window.location.hash + "']").text(); //pega o texto deste elemento a
            $("a[target='" + window.location.hash + "']").tab("show");//mostra elemento
            $("a[target='" + window.location.hash + "']").addClass('item-drop-selected');//marca este elemento como selecionado
            $("a[target='" + window.location.hash + "']").parents("#nav-dropdown-select").find(".dropdown-toggle").html(selText);//muda o titulo do menu drop para o label do elemento clicado
            $("a[target='" + window.location.hash + "']").parents(".nav-dropdown-select").find(".dropdown-toggle").html(selText);//muda o titulo do menu drop para o label do elemento clicado

        } else {//se nao tem um elemento com este target
            //quando só existe um drop na pagina
            var selText = $("#nav-dropdown-tratamento a[href='" + hashFieldInsideTabId + "']").text(); //pega o label do elemento do drop com href igual hashFieldInsideTabId
            $(".nav-item a[href='" + hashFieldInsideTabId + "']").tab("show");
            $("#nav-dropdown-tratamento a[href='" + hashFieldInsideTabId + "']").addClass('item-drop-selected');

            $("#nav-dropdown-tratamento a[href='" + hashFieldInsideTabId + "']").parents("#nav-dropdown-select").find(".dropdown-toggle").html(selText);


            if (hashDeepInsideTab != null) {//caso exista um terceiro #, ele deve ser de um accordeon

                $(hashDeepInsideTab).collapse('show');//mostra o accordeon
                $(hashDeepInsideTab).find(".fa-plus").removeClass("fa-plus").addClass("fa-minus"); //troca o icone do accordeon
                $(hashDeepInsideTab).addClass('is-active');//marca como ativo

            }

        }

        if ($(".nav-item a[href='" + hashTabId + "']").length > 0) {//caso exista um elemento com o href igual a hashTabId

            $(".nav-item a[href='" + hashTabId + "']").tab("show"); //mostra a aba
            $(hashFieldInsideTabId).collapse('show'); //mostra o accordeon com id a variavel hashFieldInsideTabId
            $(hashFieldInsideTabId).find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
            $(hashFieldInsideTabId).addClass('is-active');         

        }


        //faz o scroll da pagina para os elementos clicados (relacionado às tabs)
        $(hashes[hashes.length - 1]).on('shown.bs.collapse', function (e) {
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 500);
        });
        if ($("a[target='" + window.location.hash + "']").length > 0) {
            $('html,body').animate({
                scrollTop: $("a[target='" + window.location.hash + "']").parents("#nav-dropdown-select").offset().top
            }, 500);
        } else {
            $('a[href="' + hashes[hashes.length - 1] + '"]').on('shown.bs.tab', function (e) {
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 500);
            });

        }

    }
}

async function changeLinks() {
    var hashes = window.location.hash.split('&'); //separo os hashs entre &
    var hashTabId = hashes[0];//primeiro #
    var hashFieldInsideTabId = hashes[1];//segundo #
    var hashDeepInsideTab = null; //pode ser que exista ou nao um terceiro #

    if (hashes.length == 1) {
        hashDeepInsideTab = hashes[0];

        $(hashDeepInsideTab).collapse('show');//mostra o accordeon
        $(hashDeepInsideTab).find(".fa-plus").removeClass("fa-plus").addClass("fa-minus"); //troca o icone do accordeon
        $(hashDeepInsideTab).addClass('is-active');//marca como ativo
    }

}

$(window).on('popstate', function (event) {
    changeTabsLinks();
});




function CalculoImc() {
    valt_tmp = document.formImc.altura.value;
    vpes_tmp = document.formImc.peso.value;
    if ((valt_tmp == 0) || (vpes_tmp == 0)) {
        alert("Digite o peso ou altura");
    } else {
        var valt = valt_tmp.replace(",", ".");
        var vpes = vpes_tmp.replace(",", ".");

        var vimc = (vpes / Math.pow(valt, 2)).toFixed(1);
        document.getElementById('valorImc').innerHTML = vimc;
        document.getElementById('resultado').classList.remove('d-none');
        document.getElementById('resultado').classList.add('d-block');
        document.getElementById('classificacaoImc').setAttribute("class", "");

        if (vimc > 18.50 && vimc <= 24.99) {
            classificacao = "Eutrófico*";
            document.getElementById('classificacaoImc').classList.add('text-green');

        } else if (vimc > 25.00 && vimc <= 29.99) {
            classificacao = "Sobrepeso";
            document.getElementById('classificacaoImc').classList.add('text-yellow');

        } else if (vimc > 30 && vimc <= 34.99) {
            classificacao = "Obesidade grau I";
            document.getElementById('classificacaoImc').classList.add('text-red');

        } else if (vimc > 35 && vimc <= 39.99) {
            classificacao = "Obesidade grau II";
            document.getElementById('classificacaoImc').classList.add('text-red');

        } else if (vimc >= 40) {
            classificacao = "Obesidade grau III";
            document.getElementById('classificacaoImc').classList.add('text-red');

        } else if (vimc < 18.50) {
            alert("IMC abaixo de 18.5. Não classificável.");
        }
        document.getElementById('classificacaoImc').innerHTML = classificacao;
        document.getElementById('classificacaoImc').classList.add('semi-bold');

    }
    return false;
}