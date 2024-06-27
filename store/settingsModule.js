export const state = () => ({
    blackLogo: null,
    whiteLogo: null,
    smallLogo: null,
    metaDefaultImage: null,
    topNotificationContent: null,
    topNotificationColor: null,
    topNotificationBackground: null,
    socialLinks: [],
})

export const mutations = {
    setDefaultSettings(state, payload) {
        state.blackLogo = payload.black_logo
        state.smallLogo = payload.small_logo
        state.whiteLogo = payload.white_logo
        state.metaDefaultImage = payload.meta_default_image
    },
    setTopNotification(state, payload) {
        state.topNotificationContent = payload.content_1
        state.topNotificationColor = payload.color
        state.topNotificationBackground = payload.background
    },
    setSocialLinks(state, payload) {
        state.socialLinks = payload
      },
}

export const actions = {
    fetchSocialLink({ commit }) {
        this.$axios.get('/social-links')
          .then(({ data }) => {
            commit('setSocialLinks', data.data)
          })
      },
}

export const getters = {
    getSmallLogo: (state) => state.smallLogo,
    getBlackLogo: (state) => state.blackLogo,
    getWhiteLogo: (state) => state.whiteLogo,
    getMetaDefaultImage: (state) => state.metaDefaultImage,
    getTopNotificationContent: (state) => state.topNotificationContent,
    getTopNotificationColor: (state) => state.topNotificationColor,
    getTopNotificationBackground: (state) => state.topNotificationBackground,
    getSocialLinks: (state) => state.socialLinks,
}