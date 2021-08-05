

//Get current user
const  GetCurrentUser =()=>{
    let user =localStorage.getItem("LogedUser");
    return user;
}
export default GetCurrentUser;