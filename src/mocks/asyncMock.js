const items = [
    {
        id: 1,  
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 1000.00,
        imgSrc: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/456121527_18074340370545797_3084300415289291670_n.jpg?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGxs9THL9q3pHMQr40uoZj2Pu18YDNH5LA-7XxgM0fksAIaWOfVafMDP201bJQR0Yo&_nc_ohc=4YjGReX3T9wQ7kNvgG9frRG&_nc_ht=scontent-eze1-1.xx&_nc_gid=AWvIH6ij0gLP6yFx1sscOMQ&oh=00_AYBXnGEil9i4CcjBm9niLa_B91KXb5qdFK7KvDuYhI0QBA&oe=6722084B",
        category: 'categoria1',
    },
    {
        id: 2,  
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 1500.00,
        imgSrc: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/415231040_863951775732830_6553226081335517287_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGNHtFO4pIT_LLLBPXkEbc_mmQuctzYtzeaZC5y3Ni3Nwtlp8rDFtjGdKT_heBAMGQ&_nc_ohc=_w_TX1_jHnQQ7kNvgGlHZPk&_nc_ht=scontent-eze1-1.xx&_nc_gid=AGRPPsUU1CObKcGJdVk20Eq&oh=00_AYBBIELKo0kVhaZIorBlwszMsUVT9ej4qO1GYLkbjW94-A&oe=6721EDA6",
        category: 'categoria2',
    },
    {
        id: 3,  
        title: 'Producto 3',
        description: 'Descripción del producto 3',
        price: 1500.00,
        imgSrc: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/406447721_846477524146922_6067289118005299478_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4lt0nDlpAKBgmfP7Zs9x73kQSlqhgMG_eRBKWqGAwbyYssbU-DfYB468Yi-inztw&_nc_ohc=LWN9E0utJPMQ7kNvgGd6vXs&_nc_ht=scontent-eze1-1.xx&_nc_gid=ALmXK9DvLtiGsuJ2NNbWCua&oh=00_AYCuQuEHtk_gI8YyX4kskoCD5JqUTU4tj3G1qDqDmiaXxA&oe=6721D3CC",
        category: 'categoria1',
    },
    {
        id: 4,  
        title: 'Producto 4',
        description: 'Descripción del producto 4',
        price: 1500.00,
        imgSrc: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/410818081_859838816144126_4790144470194109771_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFW7bQfwpf8AND9SzDL9yHzG-eDhT_uHEAb54OFP-4cQLhfDQ7-wnm48VElg-ADzEY&_nc_ohc=Aa0Du7IkPmYQ7kNvgH5RZVg&_nc_ht=scontent-eze1-1.xx&_nc_gid=AAIuUOkgrfHbrL6ft1nbpU3&oh=00_AYDW5BF9ZQqOGVoE2uEyh3RYyhejPNHvq7Qv-7rpReAgfg&oe=6721DECB",
        category: 'categoria2',
    },
];

const mockFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, 1000);
    });
};

export default mockFetch;