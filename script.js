const btn = document.querySelector('button');
const itemContainer = document.querySelector('#item');
const main = document.querySelector('.main');
let newImg = document.createElement("img");
const items = [
    ['Ak-47 Bloodsport', 'Red', 1, 10, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_um25V4dB8teXA54vwxlCy-0Y_YTimdoLEdwU5YguEq1i9k-e515e-tM_JzCYwuiNx4SyLmxapwUYbIBBxC48/360fx360f'], //Name, Rzadkosc, Procent od, procent do, img
    ['Glock Fade', 'Pink', 11, 15, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3dzxG6eO6nYeDg8j4MqnWkyUHucB1ieqXrIrz2gHmr0ZvZDj3cNKUdlQ-YF6DqAS2w-i8h5Dt6Zib1zI97Ycw1ud8/360fx360f'],
    ['Huntsman Knife Tiger Tooth', 'Gold', 16, 17, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlY60g_7zNqnumXlQ5sJ0teXI8oTht1i1uRQ5fWD1JdWSd1U8aV-E_wLskO7ngJ_p6pzKnCZr73Ik5neJmBWw0xlNbOxxxavJ7HkUw-8/360fx360f'],
    ['Nova Antique', 'Blue', 18, 32, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD0924gImagvLLP7LWnn9u5MRjjeyPpt-s2VHm-xE6ZWCnJdeTcQZvM1jV_1Dole68h8DtvZTPnXJhsnUm4WGdwUK2icMtfw/360fx360f'],
    ['AWP Medusa', 'Red', 33,36, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdShR7eO3g5C0n_L1JaLummpD78A_jLHE8d-jjQex_0duY2qlJdOQIwM6M1zV_FDqkObvhcK4uMudwXVruD5iuygDtt1P9Q/360fx360f'],
    ['Usp-s Cyrex', 'Blue', 37, 50, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3KqnUjlRd4cJ5ntbN9J7yjRq3qhY6Zjz6cteSJwc3MluB_gfqx7juhpPou8ycyHBhviUrt3zZl0G3n1gSOddhMMaQ/360fx360f'],
    ['P90 Trigon', 'Blue', 51, 80, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460mvLwOq7cqWdQ-sJ0xOvD8Iim21ftqhE-a2qlItCQcwY5aV6C-VS-lb_nh5C5us_LmnRis3Y8pSGK3Ot8Ex8/360fx360f'], 
    ['Desert Eagle Conspiracy', 'Blue', 81, 100, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-KguXxJqjummJW4NFOhujT8om731K1_EVsZm6gdoaQJARtMArY-FjslOrrjcC9vp2YnHdnuicj4Cvdygv3308GE_1AfA/360fx360f'],
    ['AWP Asiimov', 'Red', 101, 115, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOzAot-jiQa3-hBqYzvzLdSVJlQ3NQvR-FfsxL3qh5e7vM6bzSA26Sg8pSGKJUPeNtY/360fx360f'],
    ['Skeleton Knife Crimson Web', 'Gold', 116, 117, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJnJm0gPL2IITck29Y_chOhujT8om72wTgrRc-NW77LIORdwQ3ZFqC_lDvlLju1pW46pyaznIwsigi53ramAv3308KnuXxRA/360fx360f'],
    ['M4a1-s Guardian', 'Pink', 118, 124, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbN_Iv9nGu4qgE7NnfyddXHIAY-Z1jW_lm-yO--1pO_vsmcz3ow7HQl53-PmETjiBBMa-Nrm7XAHnr9YjkW/360fx360f'],
    ['Five-SeveN Angry Mob', 'Red', 125, 135, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goW0hPLiNrXul2VW-txOhuDG_ZjKhFWmrBZyZm36LIDAegA_ZlCF-lW4w7rsgcDpu5WbzyBkuCYg7H3VnhayhRkaa_sv26KGUuZy7w/360fx360f'],
    ['Famas Roll Cage', 'Red', 136, 146, 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JhoGHm-7LPr7Vn35c18lwmO7Eu4303wHn8xU9ZG_7dYTGIFM_aAvY-ge9xuy6gsfqvc6bnHVh6HIj5HjD30vgxwtSL58/360fx360f']
];
let random;
const lastPercent = () => {
    return items[items.length - 1][3];
}


btn.addEventListener('click', function(){
    random = Math.floor(Math.random() * lastPercent() + 1);
    console.log(random);
    items.forEach(item => {
        if((item[2] <= random) && (item[3] >= random))
        {
            let percentForItem = item[3] - item[2];
            itemContainer.style.color = item[1];
            itemContainer.innerHTML = item[0] + ' Procent szans: ' + percentForItem + '%';
            newImg.setAttribute("src",item[4]);
            main.appendChild(newImg);
        }
    })
})