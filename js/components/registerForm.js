import { register } from '../services/authService.js';

export function renderRegisterForm(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div class="form-box">
            <h2>Registrieren</h2>
            <input type ="text" id="rf-email" placeholder="Email" />
            <input type ="password" id="rf-password" placeholder="Password" />
            <button id="rf-register-btn">Registrieren</button>
            <button id="back-btn">Zurück</button>
        </div>
    `;

    container.addEventListener("click", async (e) => {
        if (e.target.id === "rf-register-btn") {
            try {
                const email = document.getElementById("rf-email").value;
                const password = document.getElementById("rf-password").value;
                const data = await register(email, password);
                console.log("Erfolgreich:", data);
                showRegisterSuccess(containerId);
            } 
            catch (error) {
                console.error("Fehler:", error.message);
                alert(error.message);
            }
        }

        if (e.target.id === "back-btn") {
            import('./loginForm.js').then(module => {
                module.renderLoginForm(containerId);
            });
        }
    });
}

function showRegisterSuccess(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div class="form-box success-message">
            <h2>✅ Registrierung erfolgreich!</h2>
            <p>Dein Account wurde erstellt. Du kannst dich jetzt einloggen.</p>
            <button id="to-login-btn">Zum Login</button>
        </div>
    `;

    document.getElementById("to-login-btn").addEventListener("click", () => {
        import('./loginForm.js').then(module => {
            module.renderLoginForm(containerId);
        });
    });
}