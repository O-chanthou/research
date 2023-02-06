import { createStore } from "vuex";
import UsersModule from "@/stores/modules/users/UsersModule"

export default createStore({
    modules: {
        UsersModule
    }
})