export function useAuth() {
    let data = reactive({
        errors: null,
        token: null,
    });

    const login = async (data) => {
        await axios
            .post(`/api/login`, data)
            .then((res) => {
                data.token = res.data.token;
            })
            .catch((err) => {
                data.errors = err;
            });
    };

    const register = async (data) => {
        await axios
            .post(`/api/register`, data)
            .then((res) => {
                data.token = res.data.token;
            })
            .catch((err) => {
                data.errors = err;
            });
    };

    return {
        data,
        login,
        register
    };
}