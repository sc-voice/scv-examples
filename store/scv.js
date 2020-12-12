export const DEFAULT = {
    get sutta() { return {
        titles: ['(title?'],
        lang: 'en',
        sutta_uid: '(sutta_uid?)',
        segments: [
            {scid: '(scid?)', pli: '(pli?)', en: '(en?)'}
        ],
    }}
}

export const state = () => ({
    search: '',
    searchResults: {},
    settings: {
        audio: 'ogg',
        fullLine: true,
        ips: 6,
        lang: 'en',
        locale: 'en',
        maxResults: 5,
        showId: false,
        showLang: 2,
        useCookies: true,
        vnameRoot: 'Aditi',
        vnameTrans: 'Amy',
    },
    sutta: DEFAULT.sutta,
})

export const mutations = {
    sutta(state, value) {
        Object.assign(state.sutta, DEFAULT.sutta, value);
        console.log(`$store.state.scv.sutta`, value);
    },
    search(state, value) {
        state.search = value;
        console.log(`$store.state.scv.search`, value);
    },
    searchResults(state, value) {
        state.searchResults = value;
        console.log(`$store.state.scv.searchResults`, value);
    },
    settings(state, value) {
        Object.assign(state.settings, value);
        console.log(`$store.state.scv.settings`, value);
    },
}