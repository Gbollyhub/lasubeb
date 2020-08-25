import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        state: {
         adminUrl: 'http://admin-lasubeb.correctornot.com',
         imageSlider: [],
         boardMembers: [],
         news:[],
         currentMemberId: '',
         currentNewsId: ''
        },
        getters: {
         getImageSlider(state){
             return state.imageSlider
         },
         getAdminUrl(state){
             return state.adminUrl
         },
         getBoardMembers(state){
            return state.boardMembers
        },
        getNews(state){
            return state.news
        },
        getMemberId(state){
            return state.currentMemberId
        },
        getNewsId(state){
            return state.currentNewsId
        }
        },
        mutations: {
         setSlider(state, payload){
             state.imageSlider = payload
         },
         setBoardMember(state, payload){
             state.boardMembers = payload
         },
         setMemberId(state, payload){
            state.currentMemberId = payload
        },
        setNewsId(state, payload){
            state.currentNewsId = payload
        },
        setNews(state, payload){
            state.news = payload
        },
        },
        actions:{
          async nuxtServerInit(vuexContext, payload){
                const imageSlider = await this.$axios.$get('http://admin-lasubeb.correctornot.com/image-sliders')
                const boardMembers = await this.$axios.$get('http://admin-lasubeb.correctornot.com/board-compositions')
                const news = await this.$axios.$get('http://admin-lasubeb.correctornot.com/lasubeb-news')
                
               const newMembers = boardMembers.sort(function(a, b) {
                var c = new Date(a.created_at);
                var d = new Date(b.created_at);
                return c-d;
            });

            const newNews = news.sort(function(a, b) {
                var c = new Date(a.created_at);
                var d = new Date(b.created_at);
                return c-d;
            });
                  
                vuexContext.dispatch('setSlider', imageSlider)
                vuexContext.dispatch('setNews', newNews)
                vuexContext.dispatch('setBoardMember', newMembers)
            },
         setSlider(vuexContext, payload){
            vuexContext.commit('setSlider', payload)
         },
         setNews(vuexContext, payload){
            vuexContext.commit('setNews', payload)
         },
         setBoardMember(vuexContext, payload){
            vuexContext.commit('setBoardMember', payload)
         }
        }
    })
}

export default createStore;