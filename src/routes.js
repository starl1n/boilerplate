
export const Routes = {
    // pages
    Home : {path:"/#"},
    Dashboard: { path: "/" },
    Settings: {path:"/settings"},
    Projects: {path:"/projects"},
    ProjectDetails: {path:"/Projects/detail/:id", clean:"/Projects/Detail/"},
    
    NotFound: { path: "/examples/NotFound" },
    ServerError: { path: "/examples/ServerError" },
    
    
    Profile: {path:"/profile"},
    SignIn: {path:"/signin"},
    Register: {path:"/Register"},
    ForgotPassword: {path: "/ForgotPassword"},
    ResetPassword: {path: "/ResetPassword"},
};