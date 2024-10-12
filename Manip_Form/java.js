document.getElementById('meu-formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const genero = document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').value : '';
    const pais = document.getElementById('pais').value;
    const comentarios = document.getElementById('comentarios').value;

    if (nome === "" || email === "" || senha === "") {
        alert("Os campos Nome, Email e Senha são obrigatórios!");
        return;
    }

    document.getElementById('form-title').innerText = "Formulário Enviado com Sucesso!";

    const resultado = `
        <h2>Dados Enviados:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gênero:</strong> ${genero}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Comentários:</strong> ${comentarios}</p>
    `;
    document.getElementById('resultado').innerHTML = resultado;

    document.getElementById('meu-formulario').style.backgroundColor = "#d4edda";
});
