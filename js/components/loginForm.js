import { login } from '../services/authService.js';

export function renderLoginForm(containerId) {
    const container = document.getElementById(containerId);

    container.innerHTML = `
        <h1 class="centered">FileLab</h1>
        <div class="form-box">
            <h2>Login</h2>
            <input type ="text" id="lf-email" placeholder="Email" />
            <input type ="password" id="lf-password" placeholder="Passwort" />
            <a href="#" id="forgot-password-link" style="align-self: flex-start; margin-bottom: 10px;">Passwort vergessen?</a>
            <button id="lf-login-btn">Login</button>

            <p style="margin: 35px 0 5px 0; text-align: left;">Noch keinen Account?</p>
            <button id="rf-register-btn">Registrieren</button>
        </div>
    `;

    container.addEventListener("click", async (e) => {
        if (e.target.id == "lf-login-btn") {
            try{
                const email = document.getElementById("lf-email").value;
                const password = document.getElementById("lf-password").value;
                // const data = await login(email, password);
                const data = "";
                import('./mainMenuForm.js').then(module => {
                    module.renderMainMenuForm(containerId, data);
                });
            } 
            catch (error) {
                console.error("Fehler:", error.message);
                alert(error.message);
            }
        }   
        
        if (e.target.id == "rf-register-btn")
        {
            import('./registerForm.js').then(module => {
                module.renderRegisterForm(containerId);
            });
        }

        if (e.target.id === "forgot-password-link") {
            import('./forgotPasswordForm.js').then(module => {
                module.renderForgotPasswordForm(containerId);
            });
        }
    });
}

