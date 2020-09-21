// @ts-nocheck
const jwt_decode = require("jwt-decode");
const Cookie = require("js-cookie");

export const state = () => ({
  email: null,
  name: null
});

export const mutations = {
  setUser(state, user) {
    state.email = user.email;
    state.name = user.name;
  },
  logoutUser(state) {
    state.name = null;
    state.email = null;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    if (process.server && process.static) return;
    if (!req.headers.cookie) return;

    const token = await req.headers.cookie.split("=")[1];
    if (!token) return;

    const { user } = await jwt_decode(token);

    if (user) commit("setUser", user);
  },
  async createUser({ commit }, user) {
    try {
      const result = await this.$axios.$post(
        process.env.SERVER_URI + "/auth/signup",
        user
      );

      if (result.success) {
        Cookie.set("access_token", result.token);
        commit("setUser", { email: user.email, name: user.name });
      }
    } catch (error) {
      console.log("createUser ==>> STORE", error);
    }
  },
  async signInUser({ commit }, user) {
    try {
      const result = await this.$axios.$post(
        process.env.SERVER_URI + "/auth/signin",
        user
      );

      if (result.success) {
        Cookie.set("access_token", result.token);
        commit("setUser", {
          email: result.user.email,
          name: result.user.name
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  logoutUser({ commit }) {
    Cookie.remove("access_token");
    commit("logoutUser");
  }
};
