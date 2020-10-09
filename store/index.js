import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        state: {
         adminUrl: 'http://admin.lasubeb.lg.gov.ng',
         imageSlider: [],
         boardMembers: [],
         news:[],
         Lgea: []
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
        getLgea(state){
            return state.Lgea
        }
        },
        mutations: {
         setSlider(state, payload){
             state.imageSlider = payload
         },
         setBoardMember(state, payload){
             state.boardMembers = payload
         },
        setNews(state, payload){
            state.news = payload
        },
        setLgea(state, payload){
            state.Lgea = payload
        },
        },
        actions:{
          async nuxtServerInit(vuexContext, payload){
                const imageSlider = await this.$axios.$get('http://admin.lasubeb.lg.gov.ng/image-sliders')
                const boardMembers = await this.$axios.$get('http://admin.lasubeb.lg.gov.ng/board-compositions')
                const news = await this.$axios.$get('http://admin.lasubeb.lg.gov.ng/lasubeb-blogs')
                const lgea = await this.$axios.$get('http://admin.lasubeb.lg.gov.ng/lasubeb-lg-education-authorities')
                
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

            const newLgea = lgea.sort(function(a, b) {
                var c = new Date(a.created_at);
                var d = new Date(b.created_at);
                return c-d;
            });
                  
                vuexContext.dispatch('setSlider', imageSlider)
                vuexContext.dispatch('setNews', newNews)
                vuexContext.dispatch('setBoardMember', newMembers)
                vuexContext.dispatch('setLgea', newLgea)
            },
         setSlider(vuexContext, payload){
            vuexContext.commit('setSlider', payload)
         },
         setNews(vuexContext, payload){
            vuexContext.commit('setNews', payload)
         },
         setBoardMember(vuexContext, payload){
            vuexContext.commit('setBoardMember', payload)
         },
         setLgea(vuexContext, payload){
            vuexContext.commit('setLgea', payload)
         }
        }
    })
}

export default createStore;