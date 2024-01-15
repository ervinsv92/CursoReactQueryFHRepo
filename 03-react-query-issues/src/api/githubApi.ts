import axios from 'axios';

export const githubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{
        Authorization:'Bearer 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'
    }
})