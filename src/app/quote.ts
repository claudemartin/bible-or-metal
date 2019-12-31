export class Quote {
    public source: string;
    public link: string;
    public quote: string[];
    
    /* BIBLE */
    public book?: string;
    public verse?: string;
    
    /* METAL */
    public band?: string;
    public title?: string;
    public genre?: string;

    public original?:string[];

    constructor(object?:any) {
        if(!!object)
            for(const key in this) {
                if(this.hasOwnProperty(key) && object.hasOwnProperty(key)) 
                    this[key] = object[key];
            }
    }
}
