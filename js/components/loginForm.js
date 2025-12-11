import { login } from '../services/authService.js';

export function renderLoginForm(containerId) {

    const container = document.getElementById(containerId);

    container.innerHTML = `
        <div class="form-box">
            <h2>Login</h2>
            <input type ="text" id="lf-username" placeholder="Username" />
            <input type ="password" id="lf-password" placeholder="Password" />
            <button id="lf-login-btn">Login</button>

            <p>Noch keinen Account?</p>
            <button id="rf-register-btn">Registrieren</button>
        </div>
    `;

    document.getElementById("lf-login-btn").addEventListener("click", () => {
        const username = document.getElementById("lf-username").value;
        const password = document.getElementById("lf-password").value;

        login("vogel@web.de", "Vogel!123").then(data => console.log(data));
    });

    document.getElementById("rf-register-btn").addEventListener("click", () => {
        import('./registerForm.js').then(module => {
            module.renderRegisterForm(containerId)
        });
    });
}