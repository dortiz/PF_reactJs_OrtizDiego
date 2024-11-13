const items = [
    {
        id: 1,  
        title: 'BIOBALANCE',
        description: 'Enjuague Bucal',
        price: 1000.00,
        imgSrc: "https://scontent.fcor11-1.fna.fbcdn.net/v/t39.30808-6/410818081_859838816144126_4790144470194109771_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFW7bQfwpf8AND9SzDL9yHzG-eDhT_uHEAb54OFP-4cQLhfDQ7-wnm48VElg-ADzEY&_nc_ohc=1KZPIUs4DvsQ7kNvgFWgdNV&_nc_zt=23&_nc_ht=scontent.fcor11-1.fna&_nc_gid=AAVklWp3rwFwVgQyMTQf-Xe&oh=00_AYAuZfoJIYUIkTsSEslaaMb9yFmYCyQ-_tPNgKTKVUERcA&oe=6739D20B",
        category: 'Prevencion',
    },
    {
        id: 2,  
        title: 'PLASTVAC P7',
        description: 'Termoformadora',
        price: 540000.00,
        imgSrc: "https://scontent.fcor11-2.fna.fbcdn.net/v/t39.30808-6/406447721_846477524146922_6067289118005299478_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4lt0nDlpAKBgmfP7Zs9x73kQSlqhgMG_eRBKWqGAwbyYssbU-DfYB468Yi-inztw&_nc_ohc=GBbpGcLFvpkQ7kNvgGwVzSs&_nc_zt=23&_nc_ht=scontent.fcor11-2.fna&_nc_gid=A8IVVnFWfR35TagbLux0RX8&oh=00_AYDekWCWDUsugg97wJhLHmkKS-9K3UMdUeNA8awFXEDDHA&oe=6739C70C",
        category: 'Instrumental',
    },
    {
        id: 3,  
        title: 'E-CONNECT S',
        description: 'Motor Inalambrico para Endodoncia',
        price: 95000.00,
        imgSrc: "https://scontent.fcor11-1.fna.fbcdn.net/v/t39.30808-6/342207664_1250284228929526_853809804758453881_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEkp_IUF-F0EU3gONwRy11wnsxLRKmwhzOezEtEqbCHM_PF5LJ-VWoIz3WLSGjXYB0&_nc_ohc=rMXGYGgXRgAQ7kNvgHnIxPg&_nc_zt=23&_nc_ht=scontent.fcor11-1.fna&_nc_gid=AjpFR72UCexDd6RYAVlSGdI&oh=00_AYAFDAZDrWUb5k9Ws9iqm1STl4rVc-AQrXpejLrj5xdoMQ&oe=6739E01C",
        category: 'Instrumental',
    },
    {
        id: 4,  
        title: 'SOFT-PICKS',
        description: 'Palillos Interdentales',
        price: 18000.00,
        imgSrc: "https://scontent.fcor11-1.fna.fbcdn.net/v/t39.30808-6/339653554_606267051410235_6084567926289348577_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEYGiZjkC-N4HrT9kAKUxd6Hy8SNOhayLIfLxI06FrIsrX-IATCklfM711Iu6xzxTM&_nc_ohc=Y4JCbQroq6MQ7kNvgFXFI2U&_nc_zt=23&_nc_ht=scontent.fcor11-1.fna&_nc_gid=AP0wzomzIRrLAW6xnTCm0f5&oh=00_AYC5dE5rPQ3-BO0xhnNurJ3mxsbFI-zgURNN1h2X1pLZHA&oe=6739D962",
        category: 'Prevencion',
    },
    {
        id: 5,  
        title: 'GUM SONIC POWER',
        description: 'Cepillo Ultra Sónico',
        price: 23000.00,
        imgSrc: "https://scontent.fcor11-1.fna.fbcdn.net/v/t39.30808-6/333028707_657922379468681_6038966927650762939_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHnbG4czuwo5pwOZCF05bBkB7BBVJ9hWZgHsEFUn2FZmNGk9AXXs6QM-2wPGoksJRM&_nc_ohc=Bk82_OGTz_MQ7kNvgGN6ov8&_nc_zt=23&_nc_ht=scontent.fcor11-1.fna&_nc_gid=AEsGdnX7Oq_U2jbBNkSMy29&oh=00_AYClG0PIyJKjnnBgPmUbpADVDv-uodcBThEh7DrYiuAQGQ&oe=6739D98D",
        category: 'Prevencion',
    },
    {
        id: 6,  
        title: 'SCALER 3 PUNTAS',
        description: 'Cavitador',
        price: 49000.00,
        imgSrc: "https://scontent.fcor11-1.fna.fbcdn.net/v/t39.30808-6/301847636_507720861355925_3216180148042351897_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFnUYZRpv5TIHWAcV1g54ZNPm3Njm9rjlU-bc2Ob2uOVeCAk4bRoUd2bS19NuVXSoo&_nc_ohc=HqD5j5mycskQ7kNvgF3DwW5&_nc_zt=23&_nc_ht=scontent.fcor11-1.fna&_nc_gid=AQbSRJNsd5U9m_KSSr9bMuX&oh=00_AYCO4v4PXr1vGXeuPi4tgjuKfxUiZqhh1Ks_K07Zco8LzQ&oe=6739F543",
        category: 'Instrumental',
    },
    {
        id: 7,  
        title: 'GUANTES',
        description: 'Descartables',
        price: 24000.00,
        imgSrc: "https://scontent.fcor11-2.fna.fbcdn.net/v/t39.30808-6/280728776_429211785873500_2079453330809074874_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHQ10yo0f_l2Nkw_gAC4yLkOgtHY4aKaYs6C0djhoppizhtRhXZpY-dVJXs1pEWHXw&_nc_ohc=tFPcLsCm6woQ7kNvgGvR6LJ&_nc_zt=23&_nc_ht=scontent.fcor11-2.fna&_nc_gid=AtF-ALODukqNdgzNU7r9uwd&oh=00_AYCIPrnk5CcfjndJqxXwjM357NkJWPvRgclTmYn8Blwstw&oe=6739F776",
        category: 'Descartables',
    },
    {
        id: 8,  
        title: 'COMPRESAS Y SUJETADORES',
        description: 'Sujeta babero y compresas descartables',
        price: 1500.00,
        imgSrc: "https://scontent.fcor11-2.fna.fbcdn.net/v/t39.30808-6/239828422_1410305439355049_1802588582301951640_n.png?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHihCYYa9t72ReLSRsX69KVWeCbx2bvn9tZ4JvHZu-f2xqqKTZ8K7VvMe75LMMF-Nk&_nc_ohc=xYAaIqJehtkQ7kNvgHdErlr&_nc_zt=23&_nc_ht=scontent.fcor11-2.fna&_nc_gid=Ar9GZcY_PYYiLqmXe6l0MDP&oh=00_AYDUUQv4anev20yH5B7Sba6hrPfUVrhnNxHxhNNHeq4_Ng&oe=6739C32B",
        category: 'Descartables',
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