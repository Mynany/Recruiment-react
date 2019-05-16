import { user } from "./redux/user.redux";


export function getRedirectPath({type, avatar}) {
    let url = (type==='employer')?'/employer': '/jobseeker'
    if (!avatar) {
        url += 'info'
    }
    return url
}   