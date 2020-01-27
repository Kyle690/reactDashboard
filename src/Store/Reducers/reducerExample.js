
const INITIAL_STATE={
  name:'',
  email:'',
  avatar:''
};

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "LOGIN":return {...state,name:action.payload.name,email:action.payload.email,avatar: action.payload.avatar};
        case "LOGOUT":return {name:'',email:'',avatar: ''};
        default:return {...state};
    }
}