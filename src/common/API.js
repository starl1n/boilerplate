import axios from 'axios';
import Settings from './Settings';


const options = {
    headers: {'Content-Type': 'application/json', 'accept': 'text/plain', 'Access-Control-Allow-Origin': '*'}, 
};
axios.interceptors.request.use(config => {
    // log a message before any HTTP request is sent
    console.log("The request ==== ", config);
    return config;
});
export default {
    postAction: async (endpoint, params, newOpts) => axios.post(Settings.baseURl + endpoint, params !== null ? params : null, newOpts !== null ? newOpts : options),
    getAction: async (endpoint, params, newOpts) => axios.get(Settings.baseURl + endpoint + (params !== null ? "?" + params : ""), newOpts !== undefined &&  newOpts !== null ? newOpts : options),
    postActionExternal: async (endpoint, params, newOpts) => axios.post(endpoint, params !== null ? params : null, newOpts !== null ? newOpts : options),
    getActionExternal: async (endpoint,  newOpts) =>{
        
        let results = axios.get(endpoint,newOpts );
      
        return results;
        }
    
}
