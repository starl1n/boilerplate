
export const Routes = {
    // pages
    Home : {path:"/#"},
    Dashboard: { path: "/" },
    Settings: {path:"/settings"},
    Projects: {path:"/projects"},
    ProjectDetails: {path:"/Projects/detail/:id", clean:"/Projects/Detail/"},
    SignIn: {path:"/signin"},
    NotFound: { path: "/examples/404" },
    ServerError: { path: "/examples/500" },
    Profile: {path:"/profile"}

 
};