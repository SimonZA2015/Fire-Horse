const profile = [
    {
        image: 'https://lh3.googleusercontent.com/pw/ACtC-3c5_klG9Jc_ipQP89e-KBgqd6NBWh4CxWS8yoglUE9o6JLl4Qh3f8NeBlriMmsvt5vFV2YvG32IeeerX6gdZ4jVWMymyXcgCODiu-NOTcqXTRWWpWH986eKCB2xet-QO5BsnvtxcvYJtf2G0Du89YBbmQ=w740-h924-no?authuser=0',
        name: 'Лейпциг',
        city: 'Воронеж',
        banner: 'https://lh3.googleusercontent.com/s_EVPTSbEF-QtqGXDf5CHJgEKViU8EBE4JM8jAMCXVjqG3651ff8Z82o-0weMCzeAYpSatfmMjLWeh4rC4MbWUI4Wk9tJfxVHfALQ8fEyHdg4PbHSK_3CJLDThfHunO2dqJ6pV1irHy6LC2QQLSZcIP88ASgcfXXpAUQcQbQvs6Oihxo54WVDM-XSl0o9vVqTccbZhoMKcOEgujdRtQ9MgiGLHL7GtWg29kAHLAT1ItgurwGLIyBye7IpaxJVHCepMax8xhUqbR7NX_ha7Z8hGvbfmVqQXgE6CASwYLTg9CurKu9uVg70vBokMLwIC6mE8zC6sI3Io2C43KNOsxuxIgJyVEZzgVRttHLqwOfc-G4C6fzyjpm5jfRsIkmY4FyfQFolXMdtaL4UKkw_foP9hhQ8EIQCWInMhC8s-q4i5HtnInt2a5mVBXGjGX5irpx6vo227dGCVBSFXgVtOXWZE_Bs08tXRl-RSgY1LsHuXyx5bcSNPJe58_fErqeTgvUXVr1Qh2TyB23jbawrQzyyDFde8CEwr-y9yoE6byg9GsDMEgMDRXNbwqTdHJykZ6T-zAUIF45_68PoBSbpgh4fKjHmeEJG488e7VARIre9pDbrjq337aFHMqBZgihHT9e3828yrsHujd6PTp0sj9LcOpYD5ON2X6U_ds_jj_vUz5hD9fDHCF3EyqcSdORlAtJ6ONydgRDJo7KC9Nthv-TzwCk=w695-h924-no?authuser=0',
        posts: [
            {
                text: 'Сегодня был в полях, было оченб классно!',
                likes: [0,2,5],
                user: 0
            },
            {
                text: 'Что там было?',
                likes: [],
                user: 1,
            },
        ]
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/ACtC-3fA-5Rv-7qZMrRjTqe9yi35C98TalnUOnIL5qTevnHDkRhB4JxqXlnVWwFIK0jbq9gFvYGRrih7FFM1tGo1JwYNbUZomchVvjQLsVLH-u3Owxsz3aZNnAfxgWWxbEtL0lstKyTpXYdpEzKfPT5LeKLPjA=w695-h924-no?authuser=0',
        name: 'Боня',
        city: 'Москва',
        posts: [
            {
                text: 'Что-то тут',
                likes: [0,],
                user: 1
            },
        ]
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/ACtC-3cQjntN15cR7ezvASABTqmmG8WKcBLaeWDBktyXgSuEP4IBxqk9FMy1XwF2lT16m8kdQKEWzTMxNjCjEqN0uSjsh-cJdd34QT77dxLHM_WdBsKVb45BiKvZ8nd1AkE_3cZe6AtC9gZFuXQNk69xbjfn0Q=w521-h924-no?authuser=0',
        name: 'Эгрегор',
        city: 'Москва',
        posts: [
            {
                text: 'еее',
                likes: [],
                user: 2
            },
            {
                text: 'пууу',
                likes: [],
                user: 2
            },
        ]
    }
    ];

const messages = [[
    {
        name: 'Боня',
        id: '1',
        messages: [
            {
                ot: '0',
                text: 'Привет!',
            },
            {
                ot: '1',
                text: 'Хорошо, ты как',
            }
        ]
    },
    {
        name: 'Агрегор',
        id: '2',
        messages: [
            {
                ot: '2',
                text: 'Привет, что делаешь?',
            },
            {
                ot: '0',
                text: 'Хорошо, на тренинге',
            }
        ]
    },
],
[]
];

export {profile, messages}