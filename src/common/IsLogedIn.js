const IsLogedIn =()=>{
    let user= localStorage.getItem("LogedUser");

    if(user === undefined || user == null){
        return false;
    }else{
        return true;
    }
}
export default IsLogedIn;
