const initState = {
    search: '',
    comments: [
        'Cảm ơn tất cả các bạn đã đến và ủng hộ Mong mọi người sẽ đón nhận những video tiếp theo của kênh và đừng quên ủng hộ những sản phẩm khác của các thành viên MONSTAR nhé face-red-heart-shape Chúc mọi người có thật nhiều sức khỏe và hạnh phúc ',
        'Từ khi nghe demo đã nghiện rr noel ra bài tới giờ là nghe hoài nha trr hãy quãiiii , cảm on anh đã mang tới  1 bài hát hay nv  hi vọng a sẽ sáng tác được thêm nhiều bài hay nữa ',
    ],
    cards: [
        {
            id: 1,
            avatar: 'https://lh3.googleusercontent.com/fife/APg5EOawo2p44uTEomVCaZqr74zwfu0cZY1WdMTpFmfoBqkYiqM5jwIjoa_bWoSGlKOgU23xMbi9tVDNW9l7qOY-szEIFqPzgylFWbpfMl6eclz9TxG5LwdE2FUZrbjTekuys3Uu3ggiSfgeRojYlflvQUceEDeGdmPr8a-qmrniACj3DmLXvcursYavSyrZjWpVApvYMa6QLtoFMn8J4eycZ3VrGD652yEsVp7aKBaACLwY8pms0k7L4gtS_bRskNa-9jfpMUjJ9BpHrqTnONYJDGmWKDlsWXuVisv-g1SJTvNeLmfKVLmw-Xwr_D-PR_X_rwXJGRm_pfepdoEeaTsbichjHStJpDwkxMPzrgGfECXdPMNXlGd3X-lKfo2U4nZuDEKrsj-LQVZmJbl-QPvvFf4IPXwYRHAoInrWJtUdpzmef-ro1DlywTYMOfe5Y8in-Tj-q7WNMRdXYWqXGRSztEJqPzas7r32CwZZaizgrvxABCdezURztMraM0UY8pGQZJEVUKW_wmVQxE5av4ybvvXWFZaSMsPY9zTiZ618XKbvSAFBCIcroQMO19-6pHilaxmKuXdX4Yp0cORjcx432xRXpXw5-wBWH9WfOGC96-PYnVOZCfpd05fgqkGgSEspPiN_GfkdNVDAhIuP8wJjxgBxfrEBDUif6UbUAa-wJeTk5FIpVylmNqBqfGiADeu-d5FV_KhAOmX7_S31MIeO4p5vcfPUlX3UT4XpRhIojhQSGVkjfqsnqC-5-BVESPDCF1pNKXKpQPcUXfU107Tb6VuuT6a5C0GL53bnCkmjH7MVEDanS5p9lJh7YFbKgFluhet5PK_KJH81pb9vk52xZkpm8i7Hs9Hb-sbVxTk5IWUbQZir71ZjLUxs6fLGDi7H6tgIitD_RUPShw2LRaV9QnQKFurIXdS_KPteAh6hdb791DOlH41r-Fs3xT2jlY_OGCkwfT7_8s2Z6mdw8LdHUCchiuhr9FIJmPSxTe7r-O0o1996eOnHz-k8gepqiwmtgPheuCeuBJv5j1cZQzZ5FSmF5G720xZJoMiawTQxYllMBGlgW9ud8El0gHJemkJcogvPKxhPETIh2UDwgcpcSbEO3iCreZN4tAs42FWBSox57KjUBfNtVbcT_R2l24CiB9a2kx2u507m8476V8s7LEArHqDQ-swcJqHmF-f6xPrIXWkqhkmF6vzKQroOhlH0e3MOJXFMMZxx3murD8WYqZnpedH9MJirqduzZ4F4SDPq6k-hHf-20Ry8-COlP1twXSZexe8bzTkzZMBcbXsilrhFwg_ZNsNcSt4X-CpVb4q1WuDv7PGqqjOIDP2GLmLYZKEVJGox7TST9fA=s64-c',
            name: 'Phu Nguyen',
            description:
                'Playlist này bài nào cũng rất hay nhưng ít được mọi người biết đến mong mọi người có thể dành chút thời',
            image: 'https://catscanman.net/wp-content/uploads/2023/02/meme-buon-ngu-2.png',
        },
        {
            id: 2,
            avatar: 'https://yt3.ggpht.com/v-O1-Yy4df8ViddVKVp91jbsYBgeUQ1AyMIWVfO7l9hyutOUijV5b0bneMfO7To5gLtiAymOeA=s88-c-k-c0x00ffffff-no-rj',
            name: 'Varen',
            description:
                'Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các thông tin: Avatar, Name, Description, Image',
            image: 'https://tiengdong.com/wp-content/uploads/www_tiengdong_com-anh-che-chao-ngay-moi.jpg',
        },
        {
            id: 3,
            avatar: 'https://yt3.ggpht.com/l77wvD2kSkL7Bf5Ho8FmnS98AmaiWGSvtntyod9Uq8LAOtuho0nqYbcNNdekEGLaau6Xw5Te0Q=s88-c-k-c0x00ffffff-no-rj',
            name: 'Mio',
            description:
                'Next, you select one property. It doesn’t matter which one you choose, yet it’s best to pick one that seems totally unrelated to your challenge. ',
            image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random-word-1.jpg',
        },
    ],
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'cards/addCard':
            return {
                ...state,
                cards: [...state.cards, action.payload],
            };

        case 'cards/updateCard':
            return {
                ...state,
                cards: state.cards.map((card) => {
                    if (card.id === action.payload.id) {
                        return {
                            ...action.payload
                        };
                    } else {
                        return card;
                    }
                })
            };

        case 'cards/deleteCard': 
            return {
                ...state,
                undo: [...state.cards],
                cards: state.cards.filter((card) => {
                    return card.id !== action.id
                }),
            };

        case 'cards/undoDelete':
            if (state.undo) {
                return {
                    ...state,
                    cards: [...state.undo]
                }
            } else{
                return {
                    ...state
                }
            }

        case 'comment/commentText':
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };

        case 'search/searchName':
            return {
                ...state,
                search: action.payload,
            };

        default:
            return state;
    }
};

export default rootReducer;
