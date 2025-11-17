/**
 * Adiciona um pequeno feedback visual e abre o cliente de e-mail com os dados do Formulário de Contato.
 */
function handleContact(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const tel = document.getElementById('tel').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('mensagem').value.trim();
  
  // Codificação dos dados para URL
  const encodedNome = encodeURIComponent(nome);
  const encodedTel = encodeURIComponent(tel);
  const encodedEmail = encodeURIComponent(email);
  const encodedMsg = encodeURIComponent(msg);
  
  const to = 'monitoramento.central1214@gmail.com';
  const subject = encodeURIComponent('Contato pelo site - Protege 360: ' + nome);
  // O corpo do e-mail usa \n\n para quebras de linha
  const body = encodeURIComponent(Nome: ${nome}\nTelefone: ${tel}\nE-mail: ${email}\n\nMensagem:\n${msg});

  // 1. Feedback visual de sucesso
  const formElement = document.getElementById('contactForm');
  
  formElement.innerHTML = `
    <div style="padding: 20px 0; text-align: center; color: var(--accent); font-weight: 700;">
      ✅ Mensagem Enviada com Sucesso!
    </div>
    <p class="muted center">Verifique o seu aplicativo de e-mail para confirmar o envio da mensagem. Você será redirecionado em 3 segundos...</p>
  `;

  // 2. Redirecionamento para o cliente de e-mail com delay
  setTimeout(() => {
    window.location.href = mailto:${to}?subject=${subject}&body=${body};
    // Após o redirecionamento, recarrega a página para limpar o formulário e o feedback
    setTimeout(() => {
        window.location.reload();
    }, 500);
  }, 3000); // 3 segundos de espera

}

/**
 * Adiciona um pequeno feedback visual e abre o cliente de e-mail com os dados do Formulário Trabalhe Conosco.
 */
function handleApply(e) {
  e.preventDefault();

  const nome = document.getElementById('candName').value.trim();
  const email = document.getElementById('candEmail').value.trim();
  const tel = document.getElementById('candPhone').value.trim();
  const msg = document.getElementById('candMsg').value.trim();
  
  // Codificação dos dados para URL
  const encodedNome = encodeURIComponent(nome);
  const encodedTel = encodeURIComponent(tel);
  const encodedEmail = encodeURIComponent(email);
  const encodedMsg = encodeURIComponent(msg);
  
  const to = 'monitoramento.central1214@gmail.com';
  const subject = encodeURIComponent('Candidatura - Protege360 - ' + nome);
  const body = encodeURIComponent(Nome: ${nome}\nTelefone: ${tel}\nE-mail: ${email}\n\nApresentação:\n${msg}\n\nPor favor, ANEXE SEU CURRÍCULO neste e-mail antes de enviar.);
  
  // 1. Feedback visual de sucesso
  const formElement = document.getElementById('applyForm');
  
  formElement.innerHTML = `
    <div style="padding: 20px 0; text-align: center; color: var(--accent); font-weight: 700;">
      ✅ Candidatura Processada!
    </div>
    <p class="muted center">Você será redirecionado em 3 segundos para finalizar o envio do e-mail e anexar seu currículo.</p>
  `;

  // 2. Redirecionamento para o cliente de e-mail com delay
  setTimeout(() => {
    window.location.href = mailto:${to}?subject=${subject}&body=${body};
    // Após o redirecionamento, recarrega a página para limpar o formulário e o feedback
    setTimeout(() => {
        window.location.reload();
    }, 500);
  }, 3000); // 3 segundos de espera
}
