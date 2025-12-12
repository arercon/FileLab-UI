import { forgotPassword, login } from '../services/authService.js';

export function renderForgotPasswordForm(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div class="form-box">
            <h2>Passwort zurücksetzen</h2>
            <input type ="text" id="fp-email" placeholder="Email" />
            <button id="fp-submit-btn">Passwort zurücksetzen</button>
            <button id="back-btn">Zurück</button>
        </div>
    `;

    container.addEventListener("click", async (e) => {
        if (e.target.id === "fp-submit-btn") {
            try {
                const email = document.getElementById("fp-email").value;

                if (email === "") {
                    alert("Bitte gib deine E-Mail-Adresse ein.");
                    return;
                }

                else {
                    const data = await forgotPassword(email);
                    console.log("Erfolgreich:", data);
                    showForgotPasswordSuccess(containerId, email);
                }
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

function showForgotPasswordSuccess(containerId, email) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div class="form-box success-message">
            <h2>✅ Passwort zurückgesetzt!</h2>
            <p>Eine E-Mail zum Zurücksetzen deines Passworts wurde an <b>${email}</b> gesendet.</p>
            <button id="to-login-btn">Zum Login</button>
        </div>
    `;
    document.getElementById("to-login-btn").addEventListener("click", () => {
        import('./loginForm.js').then(module => {
            module.renderLoginForm(containerId);
        });
    });
}