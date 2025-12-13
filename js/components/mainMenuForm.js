

export async function renderMainMenuForm(containerId, data) {
    const container = document.getElementById(containerId);
    const response = await fetch('/views/mainMenu.html');
    const html = await response.text();
    container.innerHTML = html;
}

