import axios from 'axios'
import * as Types from './types'

export const register = user => dispatch =>{
    axios.post('/api/users/register')
            .then((response)=>{
                console.log(response)
            })
            .catch(err=>{
                dispatch({
                    type:Types.USERS_ERROR,
                    payload:{
                        error: err.response.data
                    }
                })
            })
}