const errorFlags={
    unameErrFlag:true,
    passwordErrFlag:true
    
}

const Login = () => {
    let user = window.localStorage.getItem('user')
    if (user != 'undefined') {
        document.location = 'main.html'
    }
    else{
        alert("Invalid user credentials");
    }
} 
const validate=(el,authValue)=>{
    let flagName=el+"ErrFlag";
    if($(`#${el}`).val()===authValue){
        errorFlags[flagName]=false;
        const msg='';
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).addClass('hidden');
    }
    else{
        errorFlags[flagName]=true;
        const msg=`Invalid  ${el} `;
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).removeClass('hidden');
    }
}



$('#uname').on('input',(e)=>{validate('uname','admin')});
$('#password').on('input',(e)=>{validate('password','1234')});

const redirectAndAuthenticate=()=>{
    window.localStorage.setItem('user',JSON.stringify({uname:'admin'}));
    window.location='home';
}
const loginAction=(e,callback)=>{
    if(!errorFlags['unameErrFlag'] && !errorFlags['passwordErrFlag']){
        e.preventDefault();
        callback();
    }
    else{
        alert("Invalid user credentials");
    }
}
$('#submit').on('click',(e)=>{
    loginAction(e,redirectAndAuthenticate);
}
)