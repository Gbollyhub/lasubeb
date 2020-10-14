import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        state: {
         adminUrl: 'http://admin-cms.lasubeb.lg.gov.ng',
         imageSlider: [],
         boardMembers: [],
         news:[],
         Lgea: [],
         Homepage:[]
        },
        getters: {
            getHomepage(state){
                return state.Homepage
            },
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
            setHomepage(state, payload){
                state.Homepage = payload
            },
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
               const Homepage = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/homepage')
                const imageSlider = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/image-sliders')
                const boardMembers = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-boards')
                const news = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-blogs')
                const lgea = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-lg-education-authorities')
                
                const filterimageSlider = imageSlider.filter( function(fimageSlider) { return fimageSlider.Active == true })
                const filterboardMembers = boardMembers.filter( function(fboardMembers) { return fboardMembers.Active == true })
                const filterNews = news.filter( function(fnews) { return fnews.Active == true })
                const filterlgea = lgea.filter( function(flgea) { return flgea.Active == true })
                
               const newMembers = filterboardMembers.sort(function(a, b) {
                var c = new Date(a.created_at);
                var d = new Date(b.created_at);
                return c-d;
            });

            const newNews = filterNews.sort(function(a, b) {
                var c = new Date(a.created_at);
                var d = new Date(b.created_at);
                return c-d;
            });

            const newLgea = filterlgea.sort(function(a, b) {
                var c = new Date(a.created_at);
                var d = new Date(b.created_at);
                return c-d;
            });
            vuexContext.dispatch('setHomepage', Homepage)
                vuexContext.dispatch('setSlider', filterimageSlider)
                vuexContext.dispatch('setNews', newNews)
                vuexContext.dispatch('setBoardMember', newMembers)
                vuexContext.dispatch('setLgea', newLgea)
            },
            setHomepage(vuexContext, payload){
                vuexContext.commit('setHomepage', payload)
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