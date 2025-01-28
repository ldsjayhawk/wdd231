export async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            // displayResults(data);
            return data
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
                console.log(error);
            }
    }