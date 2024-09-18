
import {DefaultUser} from 'next-auth'
declare module 'next-auth' {
   interface Session {
    usser:DefaultUser & {
    id:string}
   }
}