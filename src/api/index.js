import axios from "axios";


const instance = axios.create({
    baseURL: "https://parseapi.back4app.com/",
    headers: {
        "X-Parse-Application-Id: KbeapEUFRAs0oZbs4r30aaN6HoGvUsrSsax6xVyn",
        "X-Parse-REST-API-Key: cCzA5nPTpxK2LZnuJePgyLWwPIMao2ajVnXO7e4q",
        "Content-Type": "application/json",
    },
});

export const getCadUser = () =>
instance.get("classes/CadUser").then((res) => res.data.results)

