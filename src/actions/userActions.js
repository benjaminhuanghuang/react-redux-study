import $ from 'jquery';

export const UPDATE_USER = 'user:updateUser';
export const SHOW_ERROR = 'user:showerror';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function showError()
{
    return {
        type: SHOW_ERROR,
        payload: "API ERROR!!!"
    }
}

export function apiRequest() {
    return dispath =>{
        $.ajax({
            url:'http://google.com',
            success(){
                console.log("Api call success");
            },
            error(){
                console.log("Api call error");
                dispath(showError());
            }
        });
    }
}