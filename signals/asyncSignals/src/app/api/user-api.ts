export async function getUserData(id: number): Promise<{name: string; email: string}>{

    // Vamos a simular el delay de la red
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simular errores potenciales
    if(id === 999){
        throw new Error('User not found');
    }

    return {
        name: `User ${id}`,
        email: `user${id}@example.com`

    }

}