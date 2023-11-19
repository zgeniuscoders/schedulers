import { reactive } from "vue"

export default function useState() {

    const state = reactive({
        user: sessionStorage.getItem("user") || {},
        token: sessionStorage.getItem("token") || null,
    });

    const saveToken = (token) => {
        sessionStorage.setItem("token", token);
    };

    const destroyToken = () => {
        sessionStorage.removeItem("token");
    };

    const destroyUser = () => {
        sessionStorage.removeItem("user");
    };

    const saveUser = (user) => {
        sessionStorage.setItem("user", user);
    };

    return {
        state,
        saveToken,
        saveUser,
        destroyToken,
        destroyUser,
    };
}