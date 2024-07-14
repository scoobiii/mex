//-------------------versão 1.0.5

O front-end deve ser otimizado para renderização rápida e eficiente.
Utilize técnicas de carregamento assíncrono e lazy loading para melhorar o desempenho.
Implemente cache de dados no lado do cliente sempre que possível para reduzir solicitações repetidas.
Adote um design responsivo e mobile-friendly para atender a diferentes dispositivos.

isto pode ser construido agora ou so depois de ter o backend?
escolha por hora apis bibliotecas 100% open souce que não dependem de api key das big tech pagas


//----------------------html


<!DOCTYPE html>
<html lang="pt-BR" xmlns:fim="http://www.w3.org/1999/html">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Malokeir@x Eletrik@x - MEx™️</title>
    <script src="scripts/script.js"></script>
     <script>
        function consultarCEP() {
            const cep = document.getElementById('cep').value;

            // Limpa campos de endereço
            document.getElementById('logradouro').value = '';
            document.getElementById('bairro').value = '';
            document.getElementById('cidade').value = '';
            document.getElementById('estado').value = '';

            // Verifica se o CEP possui o formato correto
            if (cep.length !== 8 || isNaN(cep)) {
                alert('CEP inválido. Por favor, insira um CEP válido com 8 dígitos.');
                return;
            }


            // Faz a requisição para a API ViaCEP
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (data.erro) {
                        alert('CEP não encontrado. Por favor, verifique o CEP informado.');
                    } else {
                        document.getElementById('logradouro').value = data.logradouro;
                        document.getElementById('bairro').value = data.bairro;
                        document.getElementById('cidade').value = data.localidade;
                        document.getElementById('estado').value = data.uf;
                    }
                })
                .catch(error => console.error('Erro ao consultar API ViaCEP:', error));
        }
    </script>

    <link rel="stylesheet" href="styles/style.css">
    <link rel="icon" type="image/png" href="images/logo_mex_mascote.png">


</head>

<body>

    <header>
        <div class="container">
           <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre Nós</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#economize">Econonomize</a></li>
                    <li><a href="#cursos">Cursos</a></li>
                    <li><a href="#fornecedores">Fornecedores</a></li>
                    <li><a href="#tmjt">tmjt</a></li>
                    <li><a href="#contato">Fale com a Mex™</a></li>
                </ul>
            </nav>
        </div>
    </header>

     <section id="home" class="hero">
        <div class="container">

            <h2>A Energia do futuro,<span class="highlight"> Ao Seu Alcance, agora!</span></h2>
            <p>Simplifique o acesso à energia solar com a MEx™, a plataforma que conecta clientes com instaladores e promove a inclusão social.</p>

        </div>

    </section>

    <section id="sobre" class="about">
        <div class="container">
            <h2>Sobre a MEx™</h2>

            <p>A MEx™ é um ecossistema inovador que democratiza o acesso à energia solar no Brasil e no mundo.  Acreditamos no poder transformador da energia limpa para promover a inclusão social e construir um presente mais sustentável. </p>
            <p>Conectamos  Clientes,  Equipamentos  Sociais  seus  Gestores  e  Operadores  e  clientes  no  entorno,  pessoas  físicas  ou  jurídicas,  autônomas  ou  em  consórcios,  com  instaladores  de  energia  solar,  simplificando  o  processo  e  garantindo  o  melhor  custo-benefício.</p>
            <ul>
                <strong>Inclusão Social:</strong> Capacitamos a PopRua para o mercado de trabalho com cursos gratuitos.<br>
                <strong>Sustentabilidade:</strong>  Priorizamos  práticas  e  soluções  que  minimizem  o  impacto  ambiental.<br>
                <strong>Transparência:</strong> Ofercemos  um  serviço  claro,  conciso  e  eficiente,  com  informações  precisas  e  fáceis  de  entender.
            </ul>
        </div>
    </section>
<br>
    <section id="servicos" class="services">
        <div class="container">


            <h2>Os nossos Serviços</h2>
            <div class="service-grid">

                <div class="service">
                    <h3>Projeto</h3>
                    <p>Elaboramos projetos personalizados de energia solar, com base no seu consumo e necessidades.</p>
                </div>

                <div class="service">
                    <h3>Instalação</h3>
                    <p>Conectamos você com instaladores qualificados e experientes para uma instalação segura e eficiente.</p>
                </div>

                <div class="service">
                    <h3>Manutenção</h3>
                    <p>Oferecemos serviços de manutenção preventiva e corretiva para garantir o bom funcionamento do seu sistema.</p>
                </div>

                <div class="service">
                    <h3>Monitoramento</h3>
                    <p>Acompanhe a geração de energia do seu sistema em tempo real, com acesso aos seus dados e economia.</p>
                </div>

                <div class="service">
                    <h3>Gestão</h3>
                    <p>Gerenciamos os seus projetos de energia solar, simplificando o processo e garantindo a máxima eficiência.</p>
                </div>

                <div class="service">
                    <h3>Capacitação</h3>
                    <p>Oferecemos cursos online e presenciais sobre energia solar para diferentes públicos, para o Pop Rua e incluindo a comunidade.</p>
                </div>

                 <div class="service">
                     <h3>Caos climático e Energético</h3>
                    <p>Demanda uma nova e disruptiva estratégia de desenvolvimento com Malokeir@x no centro da estratégia de desenvolvimento.</p>
                 </div>

                 <div class="service">
                    <h3>Proposta de Valor</h3>
                    <p>De Malokeir@x para Malokeir@x e a comunidade. </p>
                 </div>
                
            </div>
            </div>

    </section>



    <section class="solar-generation">
    <div class="container">
        <h2>Geração de Energia Solar Híbrida</h2>
        <p>Descrição sobre a geração de energia solar híbrida...</p>
        <div class="solar-image">
            <img src="images/sistema_hidrido_mex_.gif" alt="Representação de sistema de energia solar híbrida">
        </div>
    </div>
</section>

    <br>

<section id="economize" class="Economize">
    <div class="container">
        <h2>Reduza a conta de energia em até 80%</h2>
        <br>
        <br>
        <br>
        <br>
        <p>Acreditamos no poder da energia solar para melhorar sua vida econômica.
           Oferecemos quatro modalidades e oportunidades de economia</p>
        <strong> Economia Prata </strong>- Cliente MEx™️ economiza 20% na conta de energia. Sem instalação fotovoltaica.<br>
        <strong> Economia Ouro </strong>- Cliente MEx™️ reduz até 40% na conta de energia. Com instalação fotovolatica.<br>
        <strong> Economia Plantinum </strong>- Cliente MEx™️ reduz até 60% na conta de energia. Com instalação fotovoltaica e Mercado Livre.<br>
        <strong> Economia Diamante </strong>- Cliente MEx™️ reduz até 80% na conta de energia. Com instalação fotovolatica e Imposto do Bem. Consumidor Livre e Consumidor Especial. Cada unidade consumidora deve apresentar demanda contratada mínima de 2.500 kW.<br>
    </div>

</section>

<br>

 <section id="cursos" class="courses">

        <div class="container">
            <h2>Cursos de Energia Solar</h2>
            <p>Acreditamos no poder da educação para transformar vidas através de redução de danos, autonomia em foco e o bolso. Oferecemos cursos de energia solar gratuitos para os Malokeir@x gestores, engenheiros, arquitetos e técnicos Pop Rua (90% das vagas) e comunidades vizinhas aos equipamentos sociais (10% das vagas).</p>
        </div>
  </section>

<br>

     <section id="fornecedores" class="Fornecedores">

        <div class="container">
            <h2>Os nossos Fornecedores</h2>
            <div class="client-logos">
                <img src="images/abb.png" alt="ABB">
                <img src="images/byd.png" alt="BYD">
                <img src="images/weg.png" alt="WEG">
                 <img src="images/ja.png" alt="JA">
                   <img src="images/fronius.png" alt="Fronius">
                 <img src="images/solarjiko.png" alt="Solar Jiko">
                  <img src="images/solius.png" alt="Solius">
                  <img src="images/gcl.png" alt="GCL">
                 <img src="images/solarmarket.png" alt="Solar Market">
                <img src="images/sungrow.png" alt="SunGrown">
                 <img src="images/senai.png" alt="tmjt">
            </div>
        </div>

     </section>

    <br>

     <section id="tmjt" class="tmjt">

        <div class="tmjt-content">
            <h2>tmjt</h2>
            <h3>Projeto de Lei: "Malokeir@x Eletrik@x - MEx™️: Energia Solar para Todos"</h3>
            <p><strong>Ementa:</strong> Institui o Programa de Capacitação em Energia Solar Fotovoltaica - Tecnologias e Aplicações Práticas para a PopRua, cadastrada no Sistema Único de Saúde (SUS) em âmbito nacional, para promover a inclusão social, gerar oportunidades de trabalho e renda e estimular a transição para energias renováveis.</p>
            <a href="https://drive.google.com/file/d/1UgeFqpvsFOJ2W_8VSDIThJS9WnjYPaaU/view?usp=sharing">Projeto de Lei</a>
        </div>
        <div class="tmjt-logos">
            <img src="images/smads.png" alt="smads">
            <img src="images/smdh.png" alt="smdh">
            <img src="images/smtd.png" alt="smtd">
            <img src="images/cmsp.png" alt="cmsp">
            <img src="images/alesp.png" alt="alesp">
        </div>
    </section>

<br>

     <section id="contato" class="contact">
        <div class="container">

            <a class="seja_bem_vindo_mex">Seja bem vindo MEx™️!</a><br><br><br>
            <a class="seja_bem_vindo_mex">Preencha os campos abaixo para receber uma oportunidade comercial MEx™️!</a>


            <form id="contactForm" action="#" method="post" enctype="multipart/form-data">
                <div class="error" id="formErrors"></div>

                <label for="economia">Escolha a economia desejada:</label><br>
                <select name="economia" id="economia"><br>
                    <option value="prata">Economia Prata</option>
                    <option value="ouro">Economia Ouro</option>
                    <option value="platinum">Economia Platinum</option>
                    <option value="diamante">Economia Diamante</option>
                </select>
                <br>
                <br>

                <input type="text" id="cep" name="cep" maxlength="8" placeholder="Digite o CEP para preenchimento automático dos demais campos" required>
                <button type="button" onclick="consultarCEP()">Consultar</button><br><br>

                <input type="text" id="logradouro" name="logradouro" placeholder="Rua, Avenida, etc." readonly><br>
                <input type="text" id="bairro" name="bairro" placeholder="Bairro" readonly><br>
                <input type="text" id="cidade" name="cidade" placeholder="Cidade" readonly>
                <input type="text" id="estado" name="estado" maxlength="2" placeholder="Estado" readonly><br>
                <input type="text" id="numero" name="numero" placeholder="Digite o número do imóvel" required><br>
                <input type="text" id="nome" name="nome" placeholder="Nome completo" required><br>
                <input type="text" id="telefone" name="telefone" placeholder="Telefone de contato" required><br>
                <input type="email" id="email" name="email" placeholder="Email de contato" required><br>
                <label for="contaEnergia">Anexe Conta de Energia e/ou Demanda Contratada:</label>
                <input type="file" id="contaEnergia" name="contaEnergia" required><br>
                <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem aqui" required>
                </textarea><br>

                <button type="submit">Enviar</button>
            </form>
        </div>

    </section>

    <br>

    <footer>

            <div class="container">
                <p>© 2017 | 2024 Malokeir@x Eletrik@x - MEx™️ | versão 1.0.5. Todos os direitos reservados. ScaleUP Social de Capital Misto. 30.468.307/0001-82</p>
            <ul class="social-media">
                <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
            </ul>
        </div>
    </footer>


    <!-- Ícone de voltar ao topo -->
    <a id="to-top" href="#home" class="back-to-top"> <img src="images/icone_home_volta.png" alt="">  </a>

    <!-- Ícone de quero ser mex agora -->
    <a href="#contato" class="btn">Quero ser MEx™️ agora!</a>

</body>
</html>

//---------------------------------css
.solar-generation {
    background-color: #f9f9f9; /* Cor de fundo da seção */
    padding: 80px 0;
    text-align: center;
}

.solar-generation h2 {
    font-size: 2.5em;
    color: #333;
}

.solar-generation p {
    font-size: 1.2em;
    line-height: 1.6;
    color: #666;
    margin-bottom: 30px;
}

.solar-image img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
}




/* Estilo para o ícone de seja bem vindo mex */
.seja_bem_vindo_mex {
    bottom: 20px;
    left: 20px;
    background-color: orange;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    border-radius: 25px;
    font-size: 16px;
    transition: background-color 0.3s, opacity 0.3s;
    z-index: 1000;

}

.seja_bem_vindo_mex img {
    height: 24px;
    width: 24px;
}

.seja_bem_vindo_mex:hover {
    opacity: 0.8;
}


body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}

.tmjt {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    color: #fff;
}


.tmjt-content {
    position: relative;
    z-index: 1;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5); /* Para dar um efeito de sobreposição escura */
}

.tmjt h2, .tmjt h3, .tmjt p, .tmjt a {
    text-align: left;
    margin: 20px;
}

.tmjt-logos {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    z-index: 1;
}

.tmjt-logos img {
    max-width: 100px;
    margin: 10px;
}

/* Estilo para o ícone de voltar ao topo */
.back-to-top {
    position: fixed;
    top: 90%;
    right: 0;
    transform: translateY(-50%);
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: orange;
    color: white;
    border-radius: 50%;
    font-size: 24px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    z-index: 1000;
    transition: opacity 0.4s;
}

.back-to-top img {
    height: 24px;
    width: 24px;
}

.back-to-top:hover {
    opacity: 0.8;
}


/* Estilo para o botão "Quero ser MEx™️ agora!" */
.btn {

    top: 90%;
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: orange;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    border-radius: 25px;
    font-size: 16px;
    transition: background-color 0.3s, opacity 0.3s;
    z-index: 1000;
}

.btn:hover {
    background-color: darkorange;
    opacity: 0.8;
}

#economize {
    background-image: url('../images/mex_economia.png'); /* Substitua pelo caminho correto da sua imagem */
    background-size: contain; /* Ajusta a imagem de fundo para cobrir todo o espaço disponível sem ultrapassar */
    background-position: center;
    background-repeat: no-repeat;
    padding: 80px 0; /* Ajuste o padding conforme necessário para espaçamento interno */
    text-align: left; /* Alinha o texto à esquerda */
    position: relative;
    color: #003366; /* Cor do texto azul escuro */
}

.Economize .container {
    position: relative;
    z-index: 1; /* Garante que o conteúdo fique na frente do fundo */
    max-width: 1200px; /* Define uma largura máxima para a seção */
    margin: 0 auto; /* Centraliza a seção horizontalmente */
}

.Economize h2 {
    color: #003366; /* Cor do texto azul escuro */
}

.Economize strong {
    display: block;
    font-size: 1.5em;
    margin: 15px 0;
    color: #003366; /* Cor do texto azul escuro */
}

.Economize p {
    color: #003366; /* Cor do texto azul escuro */
}

.Economize a.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ffcc00;
    color: #000;
    text-decoration: none;
    font-size: 1.2em;
    margin-top: 20px;
    border-radius: 5px;
}

.Economize a.btn:hover {
    background-color: #ff9900;
}




#cursos h2 {
    margin-bottom: 20px; /* Espaçamento abaixo do título */
}

#cursos p {
    line-height: 1.6;
    color: #003366; /* Cor do texto azul escuro */
    max-width: 600px; /* Define a largura máxima do parágrafo */
    margin: 0 auto; /* Centraliza o parágrafo horizontalmente */
}

#cursos .btn {
    margin-top: 20px; /* Espaçamento acima do botão */
}



#servicos {
    background-image: url('../images/fundo_MEX_tower_solar.png'); /* Substitua pelo caminho correto da sua imagem */
    background-size: cover; /* Ajusta a imagem de fundo para cobrir todo o espaço disponível */
    background-position: center;
    background-repeat: no-repeat;
    padding: 80px 0; /* Ajuste o padding conforme necessário para espaçamento interno */
    text-align: left;
    position: relative;
    color: #fff; /* Cor do texto para contrastar com o fundo */
}

.services .container {
    position: relative;
    z-index: 1; /* Garante que o conteúdo fique na frente do fundo */
}

.services h2 {
    color: #fff; /* Cor do texto para contrastar com o fundo */
}

.services .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    justify-content: center;
}

.services .service {
    background-color: rgba(255, 255, 255, 0.8); /* Fundo semi-transparente para destacar o conteúdo */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: left;
}

.services .service h3 {
    margin-bottom: 10px;
    color: #333; /* Cor do título */
}

.services .service p {
    line-height: 1.6;
    color: #555; /* Cor do texto */
}

.services .btn {
    margin-top: 20px; /* Espaçamento acima do botão */
}

/* About Section Styles with Background Image */
.about {
    background-image: url('../images/logo_mex_mascote.png'); /* Substitua pelo caminho correto da imagem */
    background-size: 20%; /* Garante que a imagem seja totalmente visível dentro do contêiner */
    background-repeat: no-repeat; /* Evita a repetição da imagem */
    background-position: center center; /* Centraliza a imagem vertical e horizontalmente */
    padding: 80px 0;
    text-align: left;
    color: #333; /* Cor do texto para contraste com o fundo */
    position: relative;
    z-index: 1; /* Garante que o conteúdo fique na frente do fundo */
}

.about:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Ajuste para 80% da altura da seção */
    background-color: rgba(255, 255, 255, 0.4); /* Opacidade de 20% */
    z-index: -1; /* Coloca o fundo atrás da seção */
}


/* Hero Section Styles with Background Image */

.hero {
    background-image: url('../images/fundo_girasol.jpg'); /* Substitua pelo caminho correto da imagem */
    background-size: cover;
    background-position: left;
    padding: 80px 0;
    text-align: left;
    color: #fff; /* Cor do texto para contraste com o fundo */
}



/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin-bottom: 10px;
}

h1 {
    font-size: 3em;
}

h2 {
    font-size: 2em;
}

p {
    line-height: 1.6;
    margin-bottom: 15px;
}

a {
    color: #db8d06;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #db8d06;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #f2a100;
}

/* Header Styles */

header {
    background-color: #141414;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.logo {
    max-width: 200px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
}

nav li {
    display: inline-block;
    margin: 0 15px;
}

nav a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
}

nav a:hover {
    color: #db8d06;
}

/* Hero Section Styles */

.hero {
    background-color: #141414;
    padding: 80px 0;
    text-align: left;
}

.hero h1 {
    font-size: 4em;
}

.hero .highlight {
 color: #003366; /* Cor do texto azul escuro */
}

/* About Section Styles */

.about {
    padding: 80px 0;
}

.about ul {
    list-style: disc;
    margin-left: 40px;

}

/* Services Section Styles */

.services {
    padding: 80px 0;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.service {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Courses Section Styles */

.courses {
    background-color: #f4f4f4;
    padding: 80px 0;
    text-align: left;
}

/* Clients Section Styles */

.clients {
    padding: 80px 0;
    text-align: left;
}

.client-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.client-logos img {
    max-width: 150px;
}

/* Contact Section Styles */

.contact {
    padding: 80px 0;
    text-align: center;
}

.contact form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.contact form input,
.contact form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
}

.contact form button {
    padding: 10px 20px;
    background-color: #db8d06;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.contact form button:hover {
    background-color: #f2a100;
}

/* Footer Styles */

footer {
    background-color: #141414;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

footer ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;
}

footer li {
    display: inline-block;
    margin: 0 10px;
}

footer a {
    color: #fff;
    text-decoration: none;
}

footer a:hover {
    color: #db8d06;
}

/* Responsive Styles */

@media (max-width: 768px) {
    .service-grid {
        grid-template-columns: 1fr;
    }

    .contact form {
        max-width: 90%;
    }

    .client-logos {
        flex-direction: column;
    }
}
//----------------------------------javascript

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Adiciona o evento de clique para fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// Adiciona o evento de clique para fechar o menu ao clicar em um link
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode adicionar código para enviar os dados do formulário para um servidor ou realizar outras ações necessárias
    console.log('Formulário enviado!');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // ... (código de validação existente)

    // ... (tratamento de segurança existente)

    // Envio de dados (simulado)
    console.log('Formulário enviado com os seguintes dados:');
    console.log(sanitizedData);
    console.log('Arquivo anexado:', formData.get('contaEnergia').name);

    // Adicionando os dados dos campos específicos
    if (formData.get('economia') === 'ouro') {
        sanitizedData.tipoInstalacao = formData.get('tipoInstalacaoOuro');
    } else if (formData.get('economia') === 'platinum') {
        sanitizedData.tipoInstalacao = formData.get('tipoInstalacaoPlatinum');
        sanitizedData.mercadoLivre = formData.get('mercadoLivre');
    } else if (formData.get('economia') === 'diamante') {
        sanitizedData.tipoInstalacao = formData.get('tipoInstalacaoDiamante');
        sanitizedData.impostoBem = formData.get('impostoBem');
        sanitizedData.tipoConsumidor = formData.get('tipoConsumidor');
        sanitizedData.demandaContratada = formData.get('demandaContratada');
    }

    console.log(sanitizedData);

    alert('Formulário enviado com sucesso!');

    // Aqui você pode adicionar código para enviar os dados do formulário para um servidor real
});

// JavaScript para mostrar/ocultar campos
const economiaSelect = document.getElementById('economia');
const ouroFields = document.getElementById('ouroFields');
const platinumFields = document.getElementById('platinumFields');
const diamanteFields = document.getElementById('diamanteFields');

economiaSelect.addEventListener('change', () => {
    const selectedEconomia = economiaSelect.value;

    ouroFields.style.display = selectedEconomia === 'ouro' ? 'block' : 'none';
    platinumFields.style.display = selectedEconomia === 'platinum' ? 'block' : 'none';
    diamanteFields.style.display = selectedEconomia === 'diamante' ? 'block' : 'none';
});






//----------------------

www.meX.com.br
Estrutura do Site da MEx™ (tree):
└── site
    └── www.meX.com.br
        ├── styles
        │   └── style.css
        ├── images
        │   ├── fundo_MEX_tower_solar.png
        │   ├── meX_logo_prod_fonte_laranja_fundo_preto®.png
        │   ├── meX_logo_prod_fonte_laranja_fundo_preto®-removebg-preview.jpg
        │   └── logo-cliente-1.png
        ├── scripts
        │   └── script.js
        └── index.html
content_copy
Use code with caution.

Explicação da Estrutura:

site: Pasta raiz do site da MEx™.

www.meX.com.br: Pasta que contém os arquivos do site.

styles: Pasta que contém o arquivo CSS (style.css) com o código de estilização do site.

images: Pasta que contém as imagens utilizadas no site, incluindo a logo da MEx™ e outras imagens de conteúdo.

scripts: Pasta que contém o arquivo JavaScript (script.js) com o código JavaScript do site, como a funcionalidade do menu e do formulário.

index.html: O arquivo HTML principal do site, que contém a estrutura e o conteúdo do site.

Observações:

Você pode adicionar outras pastas e arquivos conforme necessário, como pastas para os cursos ou para o blog.

É recomendado organizar os arquivos do site de forma lógica e hierárquica para facilitar o desenvolvimento e a manutenção do site.

Com essa estrutura, o site da MEx™ será organizado e facilmente administrável, permitindo a implementação de todas as funcionalidades necessárias para o sucesso do negócio.


//-------------------

MEx™: Opções de Site e Estrutura para a Plataforma de Energia Solar

Analisando as três opções de estrutura de site, percebo que nenhuma delas se encaixa perfeitamente na proposta da MEx™. Todas possuem vantagens e desvantagens, mas a MEx™ necessita de uma solução personalizada e focada no seu público-alvo, modelo de negócio e objetivos.

Opções:

WordPress Personalizado:

Vantagem: Flexibilidade para criar uma experiência única com funcionalidades específicas da MEx™.

Desvantagem: Requer conhecimento técnico para desenvolvimento e customização.

Elementor:

Vantagem: Interface visual amigável para iniciantes, ideal para customizações rápidas.

Desvantagem: Limitação para implementações complexas e foco em sites de uma página.

Tema WordPress Pré-Pronto:

Vantagem: Pronto para uso, com design básico e recursos de personalização.

Desvantagem: Menos flexível, pode não atender às necessidades específicas da MEx™.

A Solução Ideal:

Um site personalizado construído com WordPress e um framework de front-end como React ou Vue.js é a melhor opção para a MEx™. Essa combinação permite a criação de uma experiência única para o usuário, com funcionalidades específicas e um design moderno e atraente.

Novo Site da MEx™ (Código Profissional):

Estrutura (index.html):

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MEx™ - Energia Solar para Todos</title>
    <link rel="stylesheet" href="styles/style.css">
    <link rel="icon" type="image/png" href="images/meX_logo_prod_fonte_laranja_fundo_preto®.png">
</head>
<body>

    <header>
        <div class="container">
            <img src="images/meX_logo_prod_fonte_laranja_fundo_preto®.png" alt="Logo MEx™" class="logo">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre Nós</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#cursos">Cursos</a></li>
                    <li><a href="#clientes">Clientes</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="container">
            <h1>A Energia do Futuro,  <span class="highlight">Ao Seu Alcance</span></h1>
            <p>Simplifique o acesso à energia solar com a MEx™, a plataforma que conecta clientes com instaladores e promove a inclusão social.</p>
            <a href="#servicos" class="btn">Saiba Mais</a>
        </div>
    </section>

    <section id="sobre" class="about">
        <div class="container">
            <h2>Sobre a MEx™</h2>
            <p>A MEx™ é uma plataforma inovadora que democratiza o acesso à energia solar no Brasil.  Acreditamos no poder transformador da energia limpa para promover a inclusão social e construir um futuro mais sustentável. </p>
            <p>Conectamos  Clientes,  Equipamentos  Sociais  seus  Gestores  e  Operadores  e  clientes  no  entorno,  pessoas  físicas  ou  jurídicas,  autônomas  ou  em  consórcios,  com  instaladores  de  energia  solar,  simplificando  o  processo  e  garantindo  o  melhor  custo-benefício.</p>
            <ul>
                <li><strong>Inclusão Social:</strong> Capacitamos  a  Pop  Rua  para  o  mercado  de  trabalho  com  cursos  gratuitos.</li>
                <li><strong>Sustentabilidade:</strong>  Priorizamos  práticas  e  soluções  que  minimizem  o  impacto  ambiental.</li>
                <li><strong>Transparência:</strong> Ofercemos  um  serviço  claro,  conciso  e  eficiente,  com  informações  precisas  e  fáceis  de  entender.</li>
            </ul>
        </div>
    </section>

    <section id="servicos" class="services">
        <div class="container">
            <h2>Nossos Serviços</h2>
            <div class="service-grid">
                <div class="service">
                    <h3>Projeto</h3>
                    <p>Elaboramos projetos personalizados de energia solar, com base no seu consumo e necessidades.</p>
                </div>
                <div class="service">
                    <h3>Instalação</h3>
                    <p>Conectamos você com instaladores qualificados e experientes para uma instalação segura e eficiente.</p>
                </div>
                <div class="service">
                    <h3>Manutenção</h3>
                    <p>Oferecemos serviços de manutenção preventiva e corretiva para garantir o bom funcionamento do seu sistema.</p>
                </div>
                <div class="service">
                    <h3>Monitoramento</h3>
                    <p>Acompanhe a geração de energia do seu sistema em tempo real, com acesso aos seus dados e economia.</p>
                </div>
                <div class="service">
                    <h3>Gestão</h3>
                    <p>Gerenciamos os seus projetos de energia solar, simplificando o processo e garantindo a máxima eficiência.</p>
                </div>
                <div class="service">
                    <h3>Capacitação</h3>
                    <p>Oferecemos cursos online e presenciais sobre energia solar para diferentes públicos, incluindo a Pop Rua.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="cursos" class="courses">
        <div class="container">
            <h2>Cursos de Energia Solar</h2>
            <p>Acreditamos no poder da educação para transformar vidas. Oferecemos cursos de energia solar gratuitos para a Pop Rua e cursos pagos para clientes e Equipamentos Sociais,  com preços acessíveis e descontos para grupos.</p>
            <a href="#inscricoes" class="btn">Saiba Mais</a>
        </div>
    </section>

    <section id="clientes" class="clients">
        <div class="container">
            <h2>Nossos Clientes</h2>
            <div class="client-logos">
                <img src="images/logo-cliente-1.png" alt="Logo do Cliente 1">
                <img src="images/logo-cliente-2.png" alt="Logo do Cliente 2">
                <img src="images/logo-cliente-3.png" alt="Logo do Cliente 3">
                <img src="images/logo-cliente-4.png" alt="Logo do Cliente 4">
            </div>
        </div>
    </section>

    <section id="contato" class="contact">
        <div class="container">
            <h2>Fale Conosco</h2>
            <form action="#" method="post">
                <input type="text" name="nome" placeholder="Nome" required>
                <input type="email" name="email" placeholder="Email" required>
                <textarea name="mensagem" placeholder="Mensagem" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>© 2024 Malokeir@x Eletrik@x (MEx™️). Todos os direitos reservados.</p>
            <ul class="social-media">
                <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
            </ul>
        </div>
    </footer>

    <script src="scripts/script.js"></script>
</body>
</html>
content_copy
Use code with caution.
Html

Estilo (styles/style.css):

/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin-bottom: 10px;
}

h1 {
    font-size: 3em;
}

h2 {
    font-size: 2em;
}

p {
    line-height: 1.6;
    margin-bottom: 15px;
}

a {
    color: #db8d06;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #db8d06;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #f2a100;
}

/* Header Styles */

header {
    background-color: #141414;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.logo {
    max-width: 200px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

nav li {
    display: inline-block;
    margin: 0 15px;
}

nav a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
}

nav a:hover {
    color: #db8d06;
}

/* Hero Section Styles */

.hero {
    background-color: #141414;
    color: #fff;
    padding: 80px 0;
    text-align: center;
}

.hero h1 {
    font-size: 4em;
}

.hero .highlight {
    color: #db8d06;
}

/* About Section Styles */

.about {
    padding: 80px 0;
}

.about ul {
    list-style: disc;
    margin-left: 40px;
}

/* Services Section Styles */

.services {
    padding: 80px 0;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.service {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Courses Section Styles */

.courses {
    background-color: #f4f4f4;
    padding: 80px 0;
    text-align: center;
}

/* Clients Section Styles */

.clients {
    padding: 80px 0;
    text-align: center;
}

.client-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.client-logos img {
    max-width: 150px;
}

/* Contact Section Styles */

.contact {
    padding: 80px 0;
    text-align: center;
}

.contact form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.contact form input,
.contact form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
}

.contact form button {
    padding: 10px 20px;
    background-color: #db8d06;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.contact form button:hover {
    background-color: #f2a100;
}

/* Footer Styles */

footer {
    background-color: #141414;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

footer ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;
}

footer li {
    display: inline-block;
    margin: 0 10px;
}

footer a {
    color: #fff;
    text-decoration: none;
}

footer a:hover {
    color: #db8d06;
}

/* Responsive Styles */

@media (max-width: 768px) {
    .service-grid {
        grid-template-columns: 1fr;
    }

    .contact form {
        max-width: 90%;
    }

    .client-logos {
        flex-direction: column;
    }
}
content_copy
Use code with caution.
Css

JavaScript (scripts/script.js):

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Adiciona o evento de clique para fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// Adiciona o evento de clique para fechar o menu ao clicar em um link
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode adicionar código para enviar os dados do formulário para um servidor ou realizar outras ações necessárias
    console.log('Formulário enviado!');
});
content_copy
Use code with caution.
JavaScript

Lembre-se:

Imagens: Substitua as imagens de exemplo pelas imagens reais da MEx™.

Conteúdo: Preencha o site com o conteúdo relevante e atraente para o seu público-alvo.

Funcionalidades: Implemente as funcionalidades necessárias para o site, como o formulário de contato, a área de login, e a integração com a plataforma online da MEx™.

Com essa estrutura e o código profissional, o site da MEx™ irá impulsionar a sua missão de democratizar o acesso à energia solar no Brasil.