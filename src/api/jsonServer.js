import axios from 'axios';

export default axios.create({
    //the ngrok url expires every 8 hours, this url must be reset from the one provided in the terminal.
    baseURL: 'http://83b5e306.ngrok.io'
});