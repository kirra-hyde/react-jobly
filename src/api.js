import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API

  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // obviously, you'll add a lot here ...

  /** Get list of all companies. */
  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  /** Get list of all jobs. */
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  /** Get list of all companies that match keyword. */
  static async getCompaniesByTerm(keyword) {

    let res = await this.request(`companies?nameLike=${keyword}`);
    return res.companies;
  }

  /** Get list of all jobs that match keyword. */
  static async getJobsByTerm(keyword) {
    let res = await this.request(`jobs?title=${keyword}`);
    return res.jobs;
  }

  /** Registers a new user and sets JoblyApi token.
   *    accepts { username, password, firstName, lastName, email}
   *
   * return token
  */
  static async register({ username, password, firstName, lastName, email }) {
    const data = { username, password, firstName, lastName, email };
    let res = await this.request("auth/register", data, "post");
    this.token = res.token;
    return this.token;
  }

  /** Authorizes existing user and sets JoblyApi token.
   *    accepts { username, password }
   *
   * return token
   */
  static async login({ username, password }) {
    const data = { username, password };
    let res = await this.request("auth/token", data, "post");
    this.token = res.token;
    return this.token
  }

  /** Accepts a username and retrieves user data for specified
   * username.
   *
   * Returns { username, firstName, lastName, email}
   */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    const user = {
      username: res.user.username,
      firstName: res.user.firstName,
      lastName: res.user.lastName,
      email: res.user.email,
    };

    return user;
  }


  // static async editUser() {
  //   return true;
  // }
}

export default JoblyApi;