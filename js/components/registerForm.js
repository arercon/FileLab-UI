export function renderRegisterForm(containerId) {
    const container = document.getElementById(containerId);

    container.innerHTML = `
        <div class="form-box">
            <h2>Registrieren</h2>
            <input type ="text" id="rf-username" placeholder="Username" />
            <input type ="password" id="rf-password" placeholder="Password" />
            <button id="rf-register-btn">Register</button>
        </div>
    `;

    document.getElementById("rf-register-btn").addEventListener("click", () => {
        const username = document.getElementById("rf-username").value;
        const password = document.getElementById("rf-password").value;
        import('./loginForm.js').then(module => {
            module.renderLoginForm(containerId)
        });
    });
}