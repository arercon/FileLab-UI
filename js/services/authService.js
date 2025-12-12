const BASE_URL = "https://localhost:7276"

export async function login(email, password) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
    
    const text = await response.text();
    return text ? JSON.parse(text) : null;
}


export async function register(email, password) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || response.statusText);
    }
    
    const text = await response.text();
    return text ? JSON.parse(text) : { success: true };
}


export async function forgotPassword(email) {
    const response = await fetch(`${BASE_URL}/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }   

    const text = await response.text();
    return text ? JSON.parse(text) : null;
}