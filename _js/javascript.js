function calcular() {
    $(".form-dados").addClass("d-none");
    $(".simu").addClass("d-none");
    $(".resultado").removeClass("d-none");

    var vf, pmt, i, n, nom;
/*

    pmt = Number($("#mensalidade").val()); //mensalidade
    i = Number($("#taxa").val()); //taxa
    n = Number($("#tempo").val()); //tempo
 */   
    //nom = Text($("#nome").val());
    pmt = 100;
    i = 0.03;
    n = 24;

    vf = (pmt * (1+i) * ((Math.pow (1+i,n)-1)/i)).toFixed(2);


    
    //$('h2').html("Olá, " + nom + " ! Juntando" + pmt + "todo mês, você terá" + vf + "em "+ n +" anos!");
}

function voltar() {
    $(".input").val("");

    $(".form-dados").removeClass("d-none");
    $(".simu").removeClass("d-none");
    $(".resultado").addClass("d-none");
}

/*function calcularjuros () {
    var mensalidade = $('#mensalidade').val();
    var taxa = $('#taxa').val();
    var tempo = $('#tempo').val(); 
    var taxa = taxa/100;

    var juros = mensalidade * Math.pow((1 + taxa), tempo);

    var tot = juros.toString();
    var men = tot/tempo;
    
    $('#total').val(tot);
    $('#mensal').val(men);
}
*/