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
        imgSrc: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/333028707_657922379468681_6038966927650762939_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHnbG4czuwo5pwOZCF05bBkB7BBVJ9hWZgHsEFUn2FZmNGk9AXXs6QM-2wPGoksJRM&_nc_ohc=gwztmYWO4k4Q7kNvgHUEJLg&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=A-tAcOLN0qB8ytdUCfFIX69&oh=00_AYD5b14RBjYNBxNvrHrDKq83JLVtn8To-Mz9iLTNWQPZ1A&oe=6724894D",
        category: 'categoria2',
    },
    {
        id: 5,  
        title: 'Producto 5',
        description: 'Descripción del producto 5',
        price: 1500.00,
        imgSrc: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/301847636_507720861355925_3216180148042351897_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFnUYZRpv5TIHWAcV1g54ZNPm3Njm9rjlU-bc2Ob2uOVeCAk4bRoUd2bS19NuVXSoo&_nc_ohc=D4xykUI4pFIQ7kNvgE2irMI&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=AsghdVZOW0Qu0VDkW3Nbdln&oh=00_AYACDSkY04aN0LkYIxBaC3NauEv_68_PIRGDxkKycoH5Yw&oe=6724A503",
        category: 'categoria2',
    },
    {
        id: 6,  
        title: 'Producto 6',
        description: 'Descripción del producto 6',
        price: 1500.00,
        imgSrc: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/410818081_859838816144126_4790144470194109771_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFW7bQfwpf8AND9SzDL9yHzG-eDhT_uHEAb54OFP-4cQLhfDQ7-wnm48VElg-ADzEY&_nc_ohc=Aa0Du7IkPmYQ7kNvgH5RZVg&_nc_ht=scontent-eze1-1.xx&_nc_gid=AAIuUOkgrfHbrL6ft1nbpU3&oh=00_AYDW5BF9ZQqOGVoE2uEyh3RYyhejPNHvq7Qv-7rpReAgfg&oe=6721DECB",
        category: 'categoria2',
    },
    {
        id: 7,  
        title: 'Producto 7',
        description: 'Descripción del producto 7',
        price: 1500.00,
        imgSrc: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/269753765_329935709134442_8101481763774377547_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFM3ILj_-PduWQH-NbyV4HIhnAW2hptrQeGcBbaGm2tB3rDPLkTG6_kkjKErHFTeZE&_nc_ohc=ZDSGV7sxZsQQ7kNvgEWI8g5&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=AGAe0wEkXBx01hjt0t2xmRl&oh=00_AYCYYE8bMoirRFHbLPh5k5sB-bwMhlTg_PQQe22JJKVMOg&oe=672498E0",
        category: 'categoria1',
    },
    {
        id: 8,  
        title: 'Producto 8',
        description: 'Descripción del producto 8',
        price: 1500.00,
        imgSrc: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/342207664_1250284228929526_853809804758453881_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEkp_IUF-F0EU3gONwRy11wnsxLRKmwhzOezEtEqbCHM_PF5LJ-VWoIz3WLSGjXYB0&_nc_ohc=cpcTYscKSV0Q7kNvgE8hWjy&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=A3Tymht4I0_U8rSgAvUixg9&oh=00_AYDieK-vAftXJbWdgI8iQN8-lKf6redTsWNMNB-PSKUlOw&oe=67248FDC",
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