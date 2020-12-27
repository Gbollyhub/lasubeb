import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        state: {
         adminUrl: 'http://admin-cms.lasubeb.lg.gov.ng',
         imageSlider: [],
         boardMembers: [],
         news:[],
         Lgea: [],
         Homepage:[],
         departments:[],
         statutory:[],
         gallery:[],
         videos:[],
         events:[],
         projects:[],
         logo: ''
        },
        getters: {
          getEvents(state){
            return state.events
        },
        getProjects(state){
          return state.projects
      },
          getLogo(state){
            return state.logo
        },
            getDepartment(state){
                return state.departments
            },
            getStatutory(state){
                return state.statutory
            },
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
        },
        getGallery(state){
          return state.gallery
      },
      getVideos(state){
        return state.videos
    }
        },
        mutations: {
          setEvents(state, payload){
            state.events = payload
        },
        setProjects(state, payload){
          state.projects = payload
      },
          setLogo(state, payload){
            state.logo = payload
        },
            setDepartment(state, payload){
                state.departments = payload
            },
            setStatutory(state, payload){
                state.statutory = payload
            },
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
        setGallery(state, payload){
          state.gallery = payload
      },
      setVideos(state, payload){
        state.videos = payload
    },
        },
        actions:{
          async nuxtServerInit(vuexContext, payload){
               const Homepage = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/homepage')
                const imageSlider = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/image-sliders')
                const boardMembers = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-boards')
                const news = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-blogs')
                const lgea = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-lg-education-authorities')
                const department =  await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/departments')
                const statutory =  await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/statutory-units')
                const gallery =  await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-galleries')
                const videos =  await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-videos')

                const logo =  await this.$axios.$get('http://admin.lasubeb.lg.gov.ng/lasubeb-logo')
                const events =  await this.$axios.$get('http://admin.lasubeb.lg.gov.ng/lasubeb-events')
                const projects =  await this.$axios.$get('http://admin.lasubeb.lg.gov.ng/lasubeb-projects')

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
                var c = new Date(a.NewsDate);
                var d = new Date(b.NewsDate);
                return d-c;
            });

            const newLgea = filterlgea.sort(function(a, b) {
                var c = new Date(a.created_at);
                var d = new Date(b.created_at);
                return c-d;
            });

            const newGallery = gallery.sort(function(a, b) {
              var c = new Date(a.created_at);
              var d = new Date(b.created_at);
              return d-c;
          });

          const newEvents = events.sort(function(a, b) {
            var c = new Date(a.created_at);
            var d = new Date(b.created_at);
            return d-c;
        });

        const newProjects = projects.sort(function(a, b) {
          var c = new Date(a.created_at);
          var d = new Date(b.created_at);
          return d-c;
      });

          const newVideos = videos.sort(function(a, b) {
            var c = new Date(a.created_at);
            var d = new Date(b.created_at);
            return d-c;
        });

        vuexContext.dispatch('setEvents', newEvents)
        vuexContext.dispatch('setProjects', newProjects)
        vuexContext.dispatch('setLogo', logo)
        vuexContext.dispatch('setLogo', logo)
            vuexContext.dispatch('setDepartment', department)
            vuexContext.dispatch('setStatutory', statutory)

            vuexContext.dispatch('setHomepage', Homepage)
                vuexContext.dispatch('setSlider', filterimageSlider)
                vuexContext.dispatch('setNews', newNews)
                vuexContext.dispatch('setBoardMember', newMembers)
                vuexContext.dispatch('setLgea', newLgea)
                vuexContext.dispatch('setGallery', newGallery)
                vuexContext.dispatch('setVideos', newVideos)
            },


            setEvents(vuexContext, payload){
              vuexContext.commit('setEvents', payload)
           },

           setProjects(vuexContext, payload){
            vuexContext.commit('setProjects', payload)
         },

           setLogo(vuexContext, payload){
            vuexContext.commit('setLogo', payload)
         },

            setLogo(vuexContext, payload){
              vuexContext.commit('setLogo', payload)
           },


            setGallery(vuexContext, payload){
              vuexContext.commit('setGallery', payload)
           },

           setVideos(vuexContext, payload){
            vuexContext.commit('setVideos', payload)
         },


            setDepartment(vuexContext, payload){
                vuexContext.commit('setDepartment', payload)
             },

             setStatutory(vuexContext, payload){
                vuexContext.commit('setStatutory', payload)
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
