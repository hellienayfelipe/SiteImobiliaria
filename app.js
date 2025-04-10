function fnIngles() {
    document.getElementById("cabecalho1").innerText = "Home"
    document.getElementById("cabecalho2").innerText = "Properties"
    document.getElementById("cabecalho3").innerText = "About Us"
    document.getElementById("cabecalho4").innerText = "Contact"
    document.getElementById("Título principal").innerText = "Find Your Dream Home"
    document.getElementById("subtitulo").innerText = "Explore our wide range of properties and find the perfect home for you."
    document.getElementById("botoes").innerText = "Search Properties"
    document.getElementById("botao2").innerText = "Learn More"
    document.getElementById("contato").innerText = "Get in touch with us today!"
    document.getElementById("contato2").innerText = "Contact Us"
    document.getElementById("contato3").innerText = "Phone"
    document.getElementById("contato4").innerText = "Office"
    document.getElementById("contato5").innerText = "Subscribe to our newsletter for the latest updates on new features and product releases."
    document.getElementById("contato6").innerText = "Subscribe"
    document.getElementById("rodape").innerText = "All rights reserved."
}

function fnPortugues() {
    document.getElementById("cabecalho1").innerText = "Inicial"
    document.getElementById("cabecalho2").innerText = "Imóveis"
    document.getElementById("cabecalho3").innerText = "Sobre Nós"
    document.getElementById("cabecalho4").innerText = "Contato"
    document.getElementById("Título principal").innerText = "Encontre a casa dos seus sonhos"
    document.getElementById("subtitulo").innerText = "Explore nossa ampla variedade de imóveis e encontre a casa perfeita para você."
    document.getElementById("botoes").innerText = "Pesquise Imóveis"
    document.getElementById("botao2").innerText = "Saiba Mais"
    document.getElementById("contato").innerText = "Entre em contato conosco hoje mesmo!"
    document.getElementById("contato2").innerText = "Entre em contato"
    document.getElementById("contato3").innerText = "Telefone"
    document.getElementById("contato4").innerText = "Escritório"
    document.getElementById("contato5").innerText = "Assine nossa newsletter para receber as últimas atualizações"
    document.getElementById("contato6").innerText = "Subscribe"
    document.getElementById("rodape").innerText = "Todos os direitos reservados."
}

function fnBanner() {
    document.getElementById("banner").src = "images/banner01.jpg"
    document.getElementById("banner").src = "images/banner01.jpg"
    document.getElementById("banner").src = "images/banner01.jpg"
    document.getElementById("banner").src = "images/banner04.jpg"
}

function fnButton1() {
    document.getElementById("banner").src = "images/banner01.jpg"
}

function fnButton2() {
    document.getElementById("banner").src = "images/banner02.jpg"
}

function fnButton3() {
    document.getElementById("banner").src = "images/banner03.jpg"
}

function fnButton4() {
    document.getElementById("banner").src = "images/banner04.jpg"
}

function fnEmail() {
    let email = document.getElementById("email").value
    alert("Seu e-mail :" + " " + email + " " + "foi cadastrado com sucesso")

    document.getElementById("email").value = ""
}
function mostrarHora() {
    const agora = new Date();
    const hora = agora.toLocaleTimeString();
    document.getElementById("hora").textContent = hora;
  }

  
  setInterval(mostrarHora, 1000);

  mostrarHora();