export {default}  from "next-auth/middleware";

export const config={
    //*:zero or more
    matcher:['/users/:id*']
    //+:one or more
    //>:zero or one
}