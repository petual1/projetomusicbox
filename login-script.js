document.addEventListener('DOMContentLoaded', () => {
    
   
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterLink = document.getElementById('show-register-link');
    const showLoginLink = document.getElementById('show-login-link');

   
    const switchForms = (formToHide, formToShow) => {
        
        formToHide.classList.add('is-exiting');

        
        formToHide.addEventListener('transitionend', () => {
            formToHide.classList.remove('is-active');
            formToHide.classList.remove('is-exiting');
        }, { once: true }); 

        
        formToShow.classList.add('is-active');
    };

    
    if (loginForm && registerForm && showRegisterLink && showLoginLink) {
        
        
        showRegisterLink.addEventListener('click', (event) => {
            event.preventDefault();
            switchForms(loginForm, registerForm);
        });

        
        showLoginLink.addEventListener('click', (event) => {
            event.preventDefault();
            switchForms(registerForm, loginForm);
        });
    }

   
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            console.log('Login bem-sucedido! Redirecionando para home.html...'); 
            
           
            window.location.href = 'home.html'; 
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            console.log('Tentativa de Cadastro com os dados:', {
                email: registerForm.email.value,
                username: registerForm.username.value,
            });
            alert('Conta criada com sucesso! Agora você pode fazer o login.');
            
            switchForms(registerForm, loginForm);
        });
    }

});