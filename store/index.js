import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      adminUrl: 'http://admin-cms.lasubeb.lg.gov.ng',
      imageSlider: [],
      boardMembers: [],
      news: [],
      Lgea: [],
      Homepage: [],
      departments: [],
      statutory: [],
      gallery: [],
      videos: [],
      filterevent: [],
      events: [],
      intEvents: [],
      localEvents: [],
      filterproject: [],
      projects: [],
      compProjects: [],
      ongProjects: [],
      newProjects: [],
      rehabProjects: [],
      schoolProjects: [],
      boardPage: [],
      logo: ''
    },
    getters: {
      getBoardPage(state) {
        return state.boardPage
      },
      getFilterEvent(state) {
        return state.filterevent
      },
      getFilterProject(state) {
        return state.filterproject
      },
      getEvents(state) {
        return state.events
      },
      getIntEvents(state) {
        return state.intEvents
      },
      getLocalEvents(state) {
        return state.localEvents
      },
      getProjects(state) {
        return state.projects
      },
      getcompProjects(state) {
        return state.compProjects
      },
      getongProjects(state) {
        return state.ongProjects
      },
      getnewProjects(state) {
        return state.newProjects
      },
      getrehabProjects(state) {
        return state.rehabProjects
      },
      getschoolProjects(state) {
        return state.schoolProjects
      },
      getLogo(state) {
        return state.logo
      },
      getDepartment(state) {
        return state.departments
      },
      getStatutory(state) {
        return state.statutory
      },
      getHomepage(state) {
        return state.Homepage
      },
      getImageSlider(state) {
        return state.imageSlider
      },
      getAdminUrl(state) {
        return state.adminUrl
      },
      getBoardMembers(state) {
        return state.boardMembers
      },
      getNews(state) {
        return state.news
      },
      getLgea(state) {
        return state.Lgea
      },
      getGallery(state) {
        return state.gallery
      },
      getVideos(state) {
        return state.videos
      }
    },
    mutations: {
      setEvents(state, payload) {
        state.events = payload;
        state.filterevent = payload
      },
      setIntEvents(state, payload) {
        state.intEvents = payload
      },
      setLocalEvents(state, payload) {
        state.localEvents = payload
      },
      setProjects(state, payload) {
        state.projects = payload;
        state.filterproject = payload;
      },
      setComProjects(state, payload) {
        state.compProjects = payload
      },
      setOngProjects(state, payload) {
        state.ongProjects = payload
      },
      setNewProjects(state, payload) {
        state.newProjects = payload
      },
      setRehabProjects(state, payload) {
        state.rehabProjects = payload
      },
      setSchoolProjects(state, payload) {
        state.schoolProjects = payload
      },
      setLogo(state, payload) {
        state.logo = payload
      },
      setDepartment(state, payload) {
        state.departments = payload
      },
      setStatutory(state, payload) {
        state.statutory = payload
      },
      setHomepage(state, payload) {
        state.Homepage = payload
      },
      setSlider(state, payload) {
        state.imageSlider = payload
      },
      setBoardMember(state, payload) {
        state.boardMembers = payload
      },
      setNews(state, payload) {
        state.news = payload
      },
      setLgea(state, payload) {
        state.Lgea = payload
      },
      setGallery(state, payload) {
        state.gallery = payload
      },
      setVideos(state, payload) {
        state.videos = payload
      },

      setBoardPage(state, payload) {
        state.boardPage = payload
      },

    },
    actions: {
      async nuxtServerInit(vuexContext, payload) {
        const Boardpage = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/board-composition-page')
        const Homepage = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/homepage')
        const imageSlider = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/image-sliders')
        const boardMembers = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-boards')
        const news = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-blogs')
        const lgea = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-lg-education-authorities')
        const department = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/departments')
        const statutory = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/statutory-units')
        const gallery = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-galleries')
        const videos = await this.$axios.$get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-videos')

        const logo = await this.$axios.$get('http://admin.lasubeb.lg.gov.ng/lasubeb-logo')
        const events = await this.$axios.$get('http://admin.lasubeb.lg.gov.ng/lasubeb-events')
        const projects = await this.$axios.$get('http://admin.lasubeb.lg.gov.ng/lasubeb-projects')

        const filterimageSlider = imageSlider.filter(function (fimageSlider) { return fimageSlider.Active == true })
        const filterboardMembers = boardMembers.filter(function (fboardMembers) { return fboardMembers.Active == true })
        const filterNews = news.filter(function (fnews) { return fnews.Active == true })
        const filterlgea = lgea.filter(function (flgea) { return flgea.Active == true })




        const newMembers = filterboardMembers.sort(function (a, b) {
          var c = new Date(a.created_at);
          var d = new Date(b.created_at);
          return c - d;
        });

        const newNews = filterNews.sort(function (a, b) {
          var c = new Date(a.NewsDate);
          var d = new Date(b.NewsDate);
          return d - c;
        });

        const newLgea = filterlgea.sort(function (a, b) {
          var c = new Date(a.created_at);
          var d = new Date(b.created_at);
          return c - d;
        });

        const newGallery = gallery.sort(function (a, b) {
          var c = new Date(a.created_at);
          var d = new Date(b.created_at);
          return d - c;
        });

        const newEvents = events.sort(function (a, b) {
          var c = new Date(a.created_at);
          var d = new Date(b.created_at);
          return d - c;
        });

        const newProjects = projects.sort(function (a, b) {
          var c = new Date(a.created_at);
          var d = new Date(b.created_at);
          return d - c;
        });



        const filterIntEvents = newEvents.filter(function (fevents) { return fevents.TypeOfEvent == 'InternationalEvent' })
        const filterLocalEvents = newEvents.filter(function (fevents) { return fevents.TypeOfEvent == 'LocalEvent' })

        const filterCompleted = newProjects.filter(function (fevents) { return fevents.Status == 'Completed' })
        const filterOngoing = newProjects.filter(function (fevents) { return fevents.Status == 'Ongoing' })
        const filterNew = newProjects.filter(function (fevents) { return fevents.Status == 'New' })
        const filterRehabilitation = newProjects.filter(function (fevents) { return fevents.Status == 'Rehabilitation' })
        const filterSchoolSupplies = newProjects.filter(function (fevents) { return fevents.Status == 'SchoolSupplies' })

        const newVideos = videos.sort(function (a, b) {
          var c = new Date(a.created_at);
          var d = new Date(b.created_at);
          return d - c;
        });

        vuexContext.dispatch('setEvents', newEvents)
        vuexContext.dispatch('setIntEvents', filterIntEvents)
        vuexContext.dispatch('setLocalEvents', filterLocalEvents)


        vuexContext.dispatch('setProjects', newProjects)
        vuexContext.dispatch('setComProjects', filterCompleted)
        vuexContext.dispatch('setOngProjects', filterOngoing)
        vuexContext.dispatch('setNewProjects', filterNew)
        vuexContext.dispatch('setRehabProjects', filterRehabilitation)
        vuexContext.dispatch('setSchoolProjects', filterSchoolSupplies)


        vuexContext.dispatch('setLogo', logo)
        vuexContext.dispatch('setLogo', logo)
        vuexContext.dispatch('setDepartment', department)
        vuexContext.dispatch('setStatutory', statutory)

        vuexContext.dispatch('setHomepage', Homepage)
        vuexContext.dispatch('setBoardPage', Boardpage)
        vuexContext.dispatch('setSlider', filterimageSlider)
        vuexContext.dispatch('setNews', newNews)
        vuexContext.dispatch('setBoardMember', newMembers)
        vuexContext.dispatch('setLgea', newLgea)
        vuexContext.dispatch('setGallery', newGallery)
        vuexContext.dispatch('setVideos', newVideos)
      },


      setEvents(vuexContext, payload) {
        vuexContext.commit('setEvents', payload)
      },

      setProjects(vuexContext, payload) {
        vuexContext.commit('setProjects', payload)
      },


      setIntEvents(vuexContext, payload) {
        vuexContext.commit('setIntEvents', payload)
      },
      setLocalEvents(vuexContext, payload) {
        vuexContext.commit('setLocalEvents', payload)
      },


      setComProjects(vuexContext, payload) {
        vuexContext.commit('setComProjects', payload)
      },
      setOngProjects(vuexContext, payload) {
        vuexContext.commit('setOngProjects', payload)
      },
      setNewProjects(vuexContext, payload) {
        vuexContext.commit('setNewProjects', payload)
      },
      setRehabProjects(vuexContext, payload) {
        vuexContext.commit('setRehabProjects', payload)
      },
      setSchoolProjects(vuexContext, payload) {
        vuexContext.commit('setSchoolProjects', payload)
      },


      setLogo(vuexContext, payload) {
        vuexContext.commit('setLogo', payload)
      },

      setGallery(vuexContext, payload) {
        vuexContext.commit('setGallery', payload)
      },

      setVideos(vuexContext, payload) {
        vuexContext.commit('setVideos', payload)
      },

      setDepartment(vuexContext, payload) {
        vuexContext.commit('setDepartment', payload)
      },

      setStatutory(vuexContext, payload) {
        vuexContext.commit('setStatutory', payload)
      },


      setHomepage(vuexContext, payload) {
        vuexContext.commit('setHomepage', payload)
      },
      setSlider(vuexContext, payload) {
        vuexContext.commit('setSlider', payload)
      },
      setNews(vuexContext, payload) {
        vuexContext.commit('setNews', payload)
      },
      setBoardMember(vuexContext, payload) {
        vuexContext.commit('setBoardMember', payload)
      },
      setLgea(vuexContext, payload) {
        vuexContext.commit('setLgea', payload)
      }
    }
  })
}

export default createStore;
