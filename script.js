document.getElementById('cadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    // Coletar dados e exibir o quiz
    document.getElementById('quiz').style.display = 'block';
});

// Função para calcular e exibir resultados após o quiz
function mostrarResultados() {
    // Lógica para processar as respostas
}


//botao funciona//

function openModal() {
    document.getElementById("comoFunciona").scrollIntoView({ behavior: 'smooth' });
}




//login// 

function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function openSignupModal() {
    closeLoginModal(); // Fecha o modal de login
    document.getElementById("signupModal").style.display = "block";
}

function closeSignupModal() {
    document.getElementById("signupModal").style.display = "none";
}

function handleLogin(event) {
    event.preventDefault(); // Previne o envio do formulário
    // Simule a autenticação (aqui você pode integrar com sua API)
    const email = document.getElementById("emailLogin").value;
    // Armazene o email em localStorage como exemplo de login
    localStorage.setItem("userEmail", email);
    alert("Login bem-sucedido!");
    closeLoginModal();
    // Redirecionar ou atualizar a página conforme necessário
    location.reload(); // Para atualizar a página e simular que o perfil está logado
}

function handleSignup(event) {
    event.preventDefault(); // Previne o envio do formulário
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const genero = document.getElementById("genero").value;
    const email = document.getElementById("emailSignup").value;
    const idade = document.getElementById("idade").value;
    const localizacao = document.getElementById("localizacao").value;
    const areaAtuacao = document.getElementById("areaAtuacao").value;
    const oQuePretendeAprender = document.getElementById("oQuePretendeAprender").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;

    // Aqui você pode adicionar lógica para salvar os dados (ex: API)
    alert(`Conta criada com sucesso para: ${nome} ${sobrenome}\nGênero: ${genero}\nEmail: ${email}\nIdade: ${idade}\nLocalização: ${localizacao}\nÁrea de Atuação: ${areaAtuacao}\nO que pretende aprender: ${oQuePretendeAprender}\nLinkedIn: ${linkedin}\nGitHub: ${github}`);
    
    closeSignupModal();
}


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    
    window.openModal = () => {
        modal.style.display = "block";
    };

    window.closeModal = () => {
        modal.style.display = "none";
    };

    window.openLoginModal = () => {
        loginModal.style.display = "block";
    };

    window.closeLoginModal = () => {
        loginModal.style.display = "none";
    };

    window.openSignupModal = () => {
        loginModal.style.display = "none";
        signupModal.style.display = "block";
    };

    window.closeSignupModal = () => {
        signupModal.style.display = "none";
    };

    window.handleLogin = (event) => {
        event.preventDefault();
        loginModal.style.display = "none";
        alert("Login realizado com sucesso!");
    };

    window.handleSignup = (event) => {
        event.preventDefault();
        signupModal.style.display = "none";
        alert("Conta criada com sucesso!");
    };

    window.loginWithGoogle = () => {
        alert("Login com Google");
    };

    window.loginWithGithub = () => {
        alert("Login com GitHub");
    };

    window.scrollToComoFunciona = () => {
        const comoFuncionaSection = document.getElementById('comoFunciona');
        comoFuncionaSection.scrollIntoView({ behavior: 'smooth' });
    
    };

    window.startChat = () => {
        alert("Iniciando chat com IA");
    };
});

window.onclick = function(event) {
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    } else if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
}