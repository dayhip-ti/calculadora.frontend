var primerNumero = "1", segundoNumero = "1", resultado = 0, signo;
function btn0(event) {
    event.preventDefault(); // Evita que la página se reinicie
    let cero = $('#btn-0').val();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val() + cero);
    } else {
        $('#operacion').val(cero);
    }
}
function btn1(event) {
    event.preventDefault(); // Evita que la página se reinicie
    let uno = $('#btn-1').val();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val() + uno);
    } else {
        $('#operacion').val(uno);
    }
}

function btn2(event) {
    event.preventDefault();
    let dos = $('#btn-2').val();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val() + dos);
    } else {
        $('#operacion').val(dos);
    }
}
function btn3(event) {
    event.preventDefault();
    let tres = $('#btn-3').val();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val() + tres);
    } else {
        $('#operacion').val(tres);
    }
}
function btn4(event) {
    event.preventDefault();
    let cuatro = $('#btn-4').val();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val() + cuatro);
    } else {
        $('#operacion').val(cuatro);
    }
}
function btn5(event) {
    event.preventDefault();
    let cinco = $('#btn-5').val();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val() + cinco);
    } else {
        $('#operacion').val(cinco);
    }
}
function btn6(event) {
    event.preventDefault();
    let seis = $('#btn-6').val();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val() + seis);
    } else {
        $('#operacion').val(seis);
    }
}
function btn7(event) {
    event.preventDefault();
    let siete = $('#btn-7').val();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val() + siete);
    } else {
        $('#operacion').val(siete);
    }
}
function btn8(event) {
    event.preventDefault();
    let ocho = $('#btn-8').val();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val() + ocho);
    } else {
        $('#operacion').val(ocho);
    }
}
function btn9(event) {
    event.preventDefault();
    let nueve = $('#btn-9').val();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val() + nueve);
    } else {
        $('#operacion').val(nueve);
    }
}
function punto(event) {
    event.preventDefault();
    let punto = $('#btn-pun').val();
    if ($('#operacion').val() != "" && $('#operacion').val().indexOf(".") == -1) {
        $('#operacion').val($('#operacion').val() + punto);
    }
}
function del(event) {
    event.preventDefault();
    $('#operacion').val("0");
    $('#llevando').text("0")
}
function ce(event) {
    event.preventDefault();
    if ($('#operacion').val() != "0" && $('#operacion').val() != "") {
        $('#operacion').val($('#operacion').val().slice(0, -1));
    } else {
        $('#operacion').val("0");
    }
    if ($('#operacion').val() == "") {
        $('#operacion').val("0");
    }
}
function multiplicar(event) {
    event.preventDefault();

   
        primerNumero = $('#operacion').val();
        $("#llevando").text(primerNumero + "*");
        signo = "*";
        $('#operacion').val("0");

   
   
}
function sumar(event) {
    event.preventDefault();

  
        primerNumero = $('#operacion').val();
        $("#llevando").text(primerNumero + "+");
        signo = "+";
        $('#operacion').val("0");

   
   
}
function restar(event) {
    event.preventDefault();

    
        primerNumero = $('#operacion').val();
        $("#llevando").text(primerNumero + "-");
        signo = "-";
        $('#operacion').val("0");

 
  
}
function dividir(event) {
    event.preventDefault();

    
        primerNumero = $('#operacion').val();
        $("#llevando").text(primerNumero + "/");
        signo = "/";
        $('#operacion').val("0");

   
   
}
function igual(event) {
    event.preventDefault();
    segundoNumero = $("#operacion").val();
    $("#llevando").text($("#llevando").text() + segundoNumero);
    let llevando = $("#llevando").text();
    switch (signo) {
        case "+":
            if (llevando.indexOf(".") == -1) {
                
                resultado = parseInt(primerNumero) + parseInt(segundoNumero);
            } else {
                resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
                
            }
            break;
        case "-":
            if (llevando.indexOf(".") == -1) {
                resultado = parseInt(primerNumero) - parseInt(segundoNumero);
                
            } else {
                resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
                
            }
            break;
        case "*":
            if (llevando.indexOf(".") == -1) {
                resultado = parseInt(primerNumero) * parseInt(segundoNumero);
                
            } else {
                resultado = parseFloat(primerNumero) * parseFloat(segundoNumero);
                
            }
            break;
        case "/":
            if (llevando.indexOf(".") == -1) {
                resultado = parseInt(primerNumero) / parseInt(segundoNumero);
            }
            else{
                resultado = parseFloat(primerNumero) / parseFloat(segundoNumero);
            }
            break;
    }
    
    $("#operacion").val(resultado);
    $("#llevando").text(resultado);
}

function eliminarSigno(signof) {
    if ($("#operacion").val().indexOf("x") == -1 && $("#operacion").val().indexOf("/") == -1
        && $("#operacion").val().indexOf("+") == -1 && $("#operacion").val().indexOf("-") == -1) {
        primerNumero = $('#operacion').val();
        $("#llevando").text(primerNumero + "*");
        signo = signof;
        $('#operacion').val("0");
    }
    else {
        switch ($("#operacion").val().slice(-1)) {
            case "x":
                if (signof != x) {
                    $("#llevando")
                }
                break;

            default:
                break;
        }

        $("#llevando").text($("#llevando").text().slice(0, -1));
        return false;
    }
}




$(document).ready(function () {
    $('#btn-0').click(function (event) {
        btn0(event);
    });
    $('#btn-1').click(function (event) {
        btn1(event);
    });

    $('#btn-2').click(function (event) {
        btn2(event);
    });
    $('#btn-3').click(function (event) {
        btn3(event);
    })
    $('#btn-4').click(function (event) {
        btn4(event);
    })
    $('#btn-5').click(function (event) {
        btn5(event);
    })
    $('#btn-6').click(function (event) {
        btn6(event);
    })
    $('#btn-7').click(function (event) {
        btn7(event);
    })
    $('#btn-8').click(function (event) {
        btn8(event);
    })
    $('#btn-9').click(function (event) {
        btn9(event);
    })
    $('#btn-del').click(function (event) {
        del(event);
    })
    $('#btn-ce').click(function (event) {
        ce(event);
    })
    $('#btn-pun').click(function (event) {
        punto(event);
    })
    $('#btn-mul').click(function (event) {
        multiplicar(event);
    })
    $('#btn-igu').click(function (event) {
        igual(event);
    })
    $('#btn-sum').click(function (event) {
        sumar(event);
    })
    $('#btn-div').click(function (event) {
        dividir(event);
    })
    $('#btn-res').click(function (event) {
        restar(event);
    })
});
