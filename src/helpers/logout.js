import { auth } from "../config/firebase";
// import { redirect_uris } from "../constants";
import { ApiRequests } from "../service/ApiRequests";


export const logout = ()=>{
    auth.signOut().then(async () => {
        await ApiRequests.revokeToken();
        localStorage.clear();
        // window.location.href = redirect_uris.Login + "?logout=true";
      });
}