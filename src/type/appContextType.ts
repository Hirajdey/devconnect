
export interface AppContextType {
    userName?: string;
    setUserName?: (userName?:string) => void;
    userEmail?: string;    
    setUserEmail?: (userEmail?:string) => void;
}