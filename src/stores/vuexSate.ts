import { createStore } from "vuex";
import UsersModule from "@/stores/modules/users/UsersModule"
import MultiUsersModule from "./modules/multi-users/MultiUsersModule";

export default createStore({
    modules: {
        UsersModule,
        MultiUsersModule
    }
})