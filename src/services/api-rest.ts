interface Response{
    token: string;
    user:{
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({
                token: 'fsdafhklsdajfhlisadfhsdlafbsapdçfuhsadifghsapdiuh',
                user:{
                    name: 'Jonathan',
                    email:'jonathan@gmail.com'
                },
            })
        }, 2000)
    })
}