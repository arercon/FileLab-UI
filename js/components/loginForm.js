import { login } from '../services/authService.js';

export function renderLoginForm(containerId) {

    const container = document.getElementById(containerId);

    container.innerHTML = `
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
                const data = await login(email, password);
                console.log("Erfolgreich:", data);
                showLoginSuccess(containerId);
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
    });
}

function showLoginSuccess(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div class="form-box success-message">
            <h2>✅ Login erfolgreich!</h2>
            <p>Du hast dich erfolgreich eingeloggt.</p>

            <button id="back-btn">Zurück</button>
        </div>
    `;

    document.getElementById("back-btn").addEventListener("click", () => {
        import('./loginForm.js').then(module => {
            module.renderLoginForm(containerId);
        });
    });
}